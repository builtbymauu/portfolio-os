"use client";

import { useMemo, useState } from "react";

type Track = "all" | "practical" | "theoretical";
type Entry = {
  id: string; date: string; title: string; track: Exclude<Track, "all">;
  status: "complete" | "ongoing" | "idea"; note: string; question: string;
  work: string; artifact: string; tags: string[];
};

const entries: Entry[] = [
  { id:"solar", date:"NOV 2018", title:"Solar-powered power bank", track:"practical", status:"complete",
    note:"The first project I remember building independently: an attempt to turn an everyday object into something I could understand, modify, and make useful.",
    question:"Could I build a portable charger that collected its own energy?",
    work:"Designed and assembled a solar-powered power bank as an early exploration of electronics, energy conversion, and hands-on making.",
    artifact:"Project photographs and build notes to be added", tags:["Electronics","Energy","First project"] },
  { id:"bridge", date:"DATE TO ADD", title:"Dynamic bridge oscillations", track:"theoretical", status:"complete",
    note:"An attempt to describe a structure as interacting oscillations, rather than as a static object carrying a load.",
    question:"How can multidirectional, time-varying loads be represented in a suspension bridge model?",
    work:"Explored Lissajous-style forcing, catenary geometry, and a differential-equation framework for suspended-deck displacement.",
    artifact:"Mathematical write-up and model", tags:["Dynamics","Differential equations","Structural mechanics"] },
  { id:"conduction", date:"DATE TO ADD", title:"The mathematics of 1D conduction", track:"theoretical", status:"complete",
    note:"A comparison of different ways to approach the same physical system, and what each mathematical method makes easier to see.",
    question:"How do analytical methods compare when heat is generated inside a one-dimensional rod?",
    work:"Compared separation of variables, Laplace transforms, and variational methods, then visualized solutions with Python.",
    artifact:"Research paper and Python visualizations", tags:["Heat transfer","PDEs","Python"] },
  { id:"neural", date:"DATE TO ADD", title:"EEG and fNIRS integration", track:"theoretical", status:"complete",
    note:"Looking at neural activity through two different physical signals: electrical activity and changes in blood oxygenation.",
    question:"What is required to interpret and combine electrical and hemodynamic measurements?",
    work:"Examined the Modified Beer–Lambert Law, chromophore separation, and assumptions behind multimodal neural sensing.",
    artifact:"Research paper", tags:["Neuroscience","Optics","Signal processing"] },
  { id:"aerodel-ban", date:"DATE TO ADD", title:"Breath-actuated nebuliser", track:"practical", status:"complete",
    note:"A respiratory device project where geometry, material choice, pressure response, and manufacturability had to agree.",
    question:"How can aerosol delivery respond to inhalation while keeping the mechanism simple to manufacture?",
    work:"Developed SolidWorks parts and assemblies, selected materials, iterated an adapted umbrella-valve concept in ANSYS, and compared simulation with prototype behaviour.",
    artifact:"CAD, engineering drawings, ANSYS studies, and prototype data", tags:["Aerodel","SolidWorks","ANSYS","Biomedical engineering"] },
  { id:"aerodel-dpi", date:"DATE TO ADD", title:"Active dry-powder inhaler", track:"practical", status:"complete",
    note:"A design comparison focused on how device geometry influences the flow behaviour needed for powder dispersion.",
    question:"Which design direction offers useful flow behaviour for an active DPI?",
    work:"Used ANSYS comparisons to evaluate alternate concepts, contributing to the selection of an acoustic direction.",
    artifact:"Simulation comparisons and design notes", tags:["Aerodel","ANSYS","Respiratory devices"] },
  { id:"earables", date:"2026", title:"Sensing earables", track:"practical", status:"ongoing",
    note:"Working toward a purpose-built ear-worn sensing platform, beyond a research setup assembled from modified consumer earbuds.",
    question:"What is the smallest practical sensor platform for capturing useful signals at the ear?",
    work:"Working with Professor Alex Mariakakis at the University of Toronto on a new earbud platform for sensing research.",
    artifact:"Sensor architecture, hardware prototype, and design iterations to come", tags:["U of T","Wearables","Embedded systems","Sensing"] },
  { id:"brakes", date:"DATE TO ADD", title:"Modular braking demonstrator", track:"practical", status:"ongoing",
    note:"A teaching mechanism designed to make the relationship between actuation, braking, and suspension easier to inspect.",
    question:"Can a low-cost modular model make vehicle braking mechanics tangible for undergraduate labs?",
    work:"Developing a configurable demonstrator with a disc, caliper, pads, and hydraulic actuation.",
    artifact:"SolidWorks parts and assembly", tags:["MIE243","Mechanical design","Hydraulics"] },
  { id:"quantum", date:"2026", title:"Quantum mechanics and representation", track:"theoretical", status:"ongoing",
    note:"Trying to move beyond applying formal rules and develop a physical intuition for what the mathematics represents.",
    question:"How should a state, an operator, and a change of basis be interpreted as different descriptions of the same system?",
    work:"Working through Hilbert spaces, Dirac notation, Hermitian and unitary operators, projections, and basis transformations.",
    artifact:"Notes, derivations, and worked examples", tags:["Quantum mechanics","Linear algebra","U of T"] },
  { id:"wearables", date:"DATE TO ADD", title:"Wearable interfaces and embedded audio", track:"practical", status:"ongoing",
    note:"Exploring compact, unobtrusive interfaces that make computing feel less like operating another screen.",
    question:"How might a small wearable communicate information and accept input without demanding visual attention?",
    work:"Prototyped with ESP32-C3 hardware, I2S audio, a surface transducer, and capacitive input concepts.",
    artifact:"Electronics prototypes, wiring, and firmware", tags:["ESP32","Embedded systems","Human-computer interaction"] },
  { id:"number-theory", date:"ONGOING", title:"Questions in number theory", track:"theoretical", status:"idea",
    note:"A continuing thread of curiosity about the structure inside the integers and the limits of current mathematical understanding.",
    question:"What makes problems such as the Riemann hypothesis so difficult?",
    work:"Independent reading and exploratory notes; this is a learning thread, not a claimed research result.",
    artifact:"Reading notes to be added", tags:["Number theory","Riemann hypothesis","Mathematics"] }
];

export default function Home() {
  const [track, setTrack] = useState<Track>("all");
  const [selected, setSelected] = useState<string | null>(null);
  const [aboutOpen, setAboutOpen] = useState(false);
  const visible = useMemo(() => entries.filter(e => track === "all" || e.track === track), [track]);
  const active = entries.find(e => e.id === selected);

  function openEntry(id: string) {
    setSelected(id);
    document.getElementById("timeline")?.scrollIntoView({ behavior:"smooth", block:"start" });
  }

  return <main className="ledger-shell">
    <header className="topbar">
      <a className="wordmark" href="#top">BUILT <span>/</span> THOUGHT</a>
      <nav className="topnav">
        <a href="#timeline">Timeline</a><a href="#selected-work">Selected work</a>
        <button onClick={() => setAboutOpen(v => !v)}>About</button>
        <a href="https://github.com/builtbymauu" target="_blank" rel="noreferrer">GitHub ↗</a>
      </nav>
    </header>

    <section className="intro" id="top">
      <div className="eyebrow"><i className="live-dot" /> AN OPEN RECORD OF MAKING & THINKING</div>
      <h1>A record of things<br/><em>built, questioned,</em><br/>and understood.</h1>
      <div className="intro-bottom">
        <p className="intro-copy">An evolving collection of projects, experiments, research, and ideas — from the first things I built to the questions I am still trying to answer.</p>
        <div className="intro-meta"><span>TORONTO, CANADA</span><span>MECHANICAL ENGINEERING · U OF T</span><span>EST. NOVEMBER 2018</span></div>
      </div>
    </section>

    {aboutOpen && <section className="about-strip">
      <div className="section-kicker">A SHORT NOTE</div>
      <p>I am interested in the space where physical systems, computation, and human experience meet. This is not a conventional résumé; it is a working record of what I have explored, what I have made, and how one question has led to another.</p>
      <button onClick={() => setAboutOpen(false)} aria-label="Close about">×</button>
    </section>}

    <section className="timeline-section" id="timeline">
      <div className="section-heading"><div><div className="section-kicker">01 / THE RECORD</div><h2>One timeline. Two directions.</h2></div>
        <p className="section-aside">Theoretical questions and practical work, developing alongside one another.</p></div>
      <div className="timeline-toolbar">
        <div className="legend"><span><i className="legend-dot practical-dot"/> PRACTICAL</span><span><i className="legend-dot theory-dot"/> THEORETICAL</span></div>
        <div className="filters">{(["all","practical","theoretical"] as Track[]).map(item =>
          <button key={item} className={track === item ? "filter active" : "filter"} onClick={() => setTrack(item)}>{item === "all" ? "Everything" : item}</button>)}</div>
      </div>
      <div className="timeline"><div className="timeline-rail"/>
        {visible.map((entry,index) => <button key={entry.id} className={"timeline-entry " + entry.track + (selected === entry.id ? " selected" : "")} onClick={() => setSelected(selected === entry.id ? null : entry.id)} aria-expanded={selected === entry.id}>
          <span className="entry-index">{String(index+1).padStart(2,"0")}</span>
          <span className="entry-marker-wrap"><i className={"entry-marker " + entry.status}/></span>
          <span className="entry-date">{entry.date}</span>
          <span className="entry-main"><span className="entry-title">{entry.title}</span><span className="entry-note">{entry.note}</span></span>
          <span className="entry-track">{entry.track === "practical" ? "BUILD /" : "THINK /"}</span><span className="entry-arrow">↗</span>
        </button>)}
      </div>
      <div className="timeline-foot"><span>● COMPLETED &nbsp; ○ IN PROGRESS &nbsp; ◌ EXPLORATION</span><span>DATES MARKED “TO ADD” WILL BE PLACED WHEN THE FULL TIMELINE IS READY</span></div>

      {active && <aside className={"detail-panel " + active.track}>
        <div className="detail-topline"><span>{active.track === "practical" ? "PRACTICAL INVESTIGATION" : "THEORETICAL INVESTIGATION"}</span><button onClick={() => setSelected(null)} aria-label="Close details">×</button></div>
        <div className="detail-grid"><div><div className="detail-date">{active.date}</div><h3>{active.title}</h3><p className="detail-note">{active.note}</p></div>
          <div className="detail-copy">
            <div><label>THE QUESTION</label><p>{active.question}</p></div><div><label>WHAT I DID</label><p>{active.work}</p></div>
            <div><label>ARTIFACT / OUTPUT</label><p>{active.artifact}</p></div><div className="tag-list">{active.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          </div></div>
        <div className="detail-status">{active.status === "complete" ? "COMPLETED" : active.status === "ongoing" ? "IN PROGRESS" : "EXPLORATION"}</div>
      </aside>}
    </section>

    <section className="selected-section" id="selected-work">
      <div className="section-heading"><div><div className="section-kicker">02 / A CLOSER LOOK</div><h2>Selected investigations.</h2></div><p className="section-aside">A few threads connecting physical design, mathematical models, and sensing.</p></div>
      <div className="work-grid">
        <article className="work-card work-practical"><div className="work-card-top"><span>01 — ENGINEERING</span><span>BUILD /</span></div><h3>Respiratory<br/>device development</h3><p>Designing mechanisms around airflow, pressure, patient use, simulation, and manufacture.</p><button onClick={() => openEntry("aerodel-ban")}>Open investigation ↗</button></article>
        <article className="work-card work-theory"><div className="work-card-top"><span>02 — MATHEMATICAL PHYSICS</span><span>THINK /</span></div><h3>Models of<br/>physical systems</h3><p>Using differential equations and computational tools to make complicated physical behaviour more legible.</p><button onClick={() => openEntry("bridge")}>Open investigation ↗</button></article>
        <article className="work-card work-practical"><div className="work-card-top"><span>03 — HUMAN INTERFACES</span><span>BUILD /</span></div><h3>Earables &<br/>wearable sensing</h3><p>Exploring compact sensing hardware and quieter ways for people to interact with computational systems.</p><button onClick={() => openEntry("earables")}>Open investigation ↗</button></article>
      </div>
    </section>

    <footer className="footer"><div className="footer-mark">BUILT <span>/</span> THOUGHT</div><p>A work in progress, by design.</p>
      <div className="footer-links"><a href="mailto:builtbymauu@gmail.com">Email ↗</a><a href="https://github.com/builtbymauu" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.youtube.com/@meherpatel9013" target="_blank" rel="noreferrer">YouTube ↗</a></div><span className="footer-date">2018 — 2026</span>
    </footer>
  </main>;
}
