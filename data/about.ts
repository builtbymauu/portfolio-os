import { url } from "inspector";

export const aboutPanel = {
  title: "Profile Archive",

  files: [

    {
      name: "README.md",
      type: "markdown",
      
      url: "/pdfs/detailed_about_section_portfolio_markdown.md"
    },

    {
      name: "Research_Focus.txt",
      type: "text",

      content: `
Current Areas of Interest

- Wave propagation systems
- Bridge dynamics
- Smart wearable interfaces
- Neural interfaces
- Space systems
- Computational physics
- Human-machine interaction
      `,
    },

    {
      name: "Vision.md",
      type: "markdown",

      content: `
# Long-Term Vision

I want to work on systems that sit
at the intersection of:

- physics
- intelligence
- engineering
- computation
- human experience

My long-term focus is contributing
to ambitious technological systems
and advanced theoretical research. 
Some of my rather far fetched dreams include winning the Nobel Prize in Physics, going to space and working on the first ever space elevator to the moon (My longest standing aspiration)
      `,
    },

  ],
};