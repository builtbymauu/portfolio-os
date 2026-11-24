import { readFile } from "node:fs/promises";
import { inflateRawSync } from "node:zlib";
import path from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function extractZipEntry(zip: Buffer, wanted: string): Buffer | null {
  const endSig = 0x06054b50;
  let eocd = -1;
  for (let i = zip.length - 22; i >= Math.max(0, zip.length - 65557); i--) {
    if (zip.readUInt32LE(i) === endSig) { eocd = i; break; }
  }
  if (eocd < 0) return null;
  const count = zip.readUInt16LE(eocd + 10);
  let cursor = zip.readUInt32LE(eocd + 16);
  for (let i = 0; i < count; i++) {
    if (zip.readUInt32LE(cursor) !== 0x02014b50) return null;
    const method = zip.readUInt16LE(cursor + 10);
    const compressedSize = zip.readUInt32LE(cursor + 20);
    const nameLength = zip.readUInt16LE(cursor + 28);
    const extraLength = zip.readUInt16LE(cursor + 30);
    const commentLength = zip.readUInt16LE(cursor + 32);
    const localOffset = zip.readUInt32LE(cursor + 42);
    const name = zip.toString("utf8", cursor + 46, cursor + 46 + nameLength);
    if (name === wanted) {
      if (zip.readUInt32LE(localOffset) !== 0x04034b50) return null;
      const localNameLength = zip.readUInt16LE(localOffset + 26);
      const localExtraLength = zip.readUInt16LE(localOffset + 28);
      const start = localOffset + 30 + localNameLength + localExtraLength;
      const compressed = zip.subarray(start, start + compressedSize);
      if (method === 0) return Buffer.from(compressed);
      if (method === 8) return inflateRawSync(compressed);
      return null;
    }
    cursor += 46 + nameLength + extraLength + commentLength;
  }
  return null;
}

export async function GET(_request: Request, context: { params: Promise<{ filename: string }> }) {
  const { filename } = await context.params;
  if (!/^[a-z0-9-]+\.webp$/.test(filename)) return new Response("Not found", { status: 404 });
  try {
    const archive = await readFile(path.join(process.cwd(), "built-thought-image-assets.zip"));
    const image = extractZipEntry(archive, "optimized/" + filename);
    if (!image) return new Response("Image not found", { status: 404 });
    return new Response(new Uint8Array(image), {
      headers: { "Content-Type": "image/webp", "Cache-Control": "public, max-age=31536000, immutable" }
    });
  } catch {
    return new Response("Image archive unavailable", { status: 404 });
  }
}
