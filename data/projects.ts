export const projects = {
  bridge: {
    title: "Bridge osccilations invention",

    files: [

      {
        name: "README.md",
        type: "markdown",

        content: `

# Modeling Complex Dynamic Loads on Suspension Bridges
        
Suspension bridges are constantly subjected to complex, multidimensional spatial loads, like shifting wind patterns. To better understand these structures as resonance systems, I initiated an independent mathematical modeling project in late 2024.

My approach was inspired by Lissajous curves. While typically used to visualize dimensional frequencies in music and acoustics, I realized these curves could perfectly model complex, time-dependent oscillatory forces acting on a physical structure.  
        
Taking into account the vertical suspension dynamics modeled by a catenary curve , I formulated a master differential equation. This PDE allows for the culmination of an infinite number of frequency loadings in all three dimensions. The result is a mathematical framework that provides a highly realistic depiction of how spatial oscillations impact the vertical displacement and overall stability of a suspended beam deck. 

        `,
      },

      {
        name: "Bridge Oscillations- Meher Patel.pdf",
        type: "pdf",

        url: "/pdfs/Meher Patel Math invention.pdf",
      },
    ],
  },

  conduction: {
    title: "Conduction in 1D rod",

    files: [

      {
        name: "README.md",
        type: "markdown",

        content: `
# Numerical and Analytical Approach to conduction in 1D

**Core Focus:** Partial Differential Equations | Laplace Transforms | Variational Calculus | Python Data Visualization

Thermal conduction is a fundamental process governing everything from the cooling of electronic circuits to planetary heat distribution. To rigorously explore this phenomenon, I undertook a comparative mathematical study analyzing the one-dimensional heat equation in a thermally conductive rod subjected to a distributed, sinusoidal internal heat source.

The introduction of an internal forcing term—mathematically represented as $S_{0}\sin(\frac{\pi x}{L})$—significantly increases the complexity of the partial differential equation (PDE), making standard analytical solutions challenging. To solve this, I evaluated and compared three distinct mathematical frameworks:

* **Separation of Variables:** Decomposed the PDE into steady-state and transient components, utilizing Fourier sine series to satisfy boundary conditions.
* **Laplace Transforms:** Converted the time-dependent differential equation into a simpler algebraic equation in the $s$-domain, offering a powerful way to handle the non-homogeneous forcing term.
* **Variational Calculus:** Utilized test functions and eigenfunctions to approximate and optimize the solution, proving to be a versatile method for complex boundary scenarios.

To bridge these theoretical mathematical proofs with computational reality, I developed custom Python scripts utilizing NumPy and Matplotlib. By plotting the calculated functions, I generated 3D surface models, heatmaps, and time-dependent decay graphs to visually demonstrate how thermal oscillations dissipate into a stable equilibrium state over time.
        `,
      },
      {
        name: "research paper.pdf",
        type: "pdf",
        
        url: "/pdfs/Meher Patel Math AAHL Final IA.pdf",
      }
    ],
  },

  neural: {
    title: "Magnetohydrodynamics",

    files: [

      {
        name: "README.md",
        type: "markdown",

        content: `
### **Project Overview: Multimodal Neural Sensing & EEG-fNIRS Integration**

**Core Focus:** Brain-Computer Interfaces (BCI) | Modified Beer-Lambert Law (MBLL) | Signal Fusion | Neural Metabolism

Brain activity is inherently multifaceted, characterized by both high-speed electrical impulses and slower hemodynamic metabolic changes. To address the need for a comprehensive multimodal recording method, I conducted a theoretical re-examination of the mathematical foundations required to integrate Electroencephalography (EEG) and functional near-infrared spectroscopy (fNIRS).

The core of this research involved a rigorous critique of the Modified Beer-Lambert Law (MBLL), which serves as the analytical framework for fNIRS. My analysis focused on several critical areas:

* **Mathematical Foundations:** Investigated how MBLL adapts classical optics to scattering biological tissue to detect neural metabolism.
* **Chromophore Separation:** Evaluated the formalism used to isolate oxygenated and deoxygenated hemoglobin signals from raw optical data.
* **Signal Fusion:** Argued that a deeper mathematical appreciation of these optical principles is essential for advancing hybrid BCI systems beyond current paradigms.

As a primary contribution of this work, I proposed a novel theoretical extension to the MBLL that incorporates time-varying scattering as a measurable signal. By treating scattering not just as a constant to be corrected but as a dynamic data source, this framework offers a potential pathway for more robust and high-fidelity neural signal fusion.
              `,
      },
      {
        name: "research paper.pdf",
        type: "pdf",
        
        url: "/pdfs/Meher Patel EEG fNIRs integration.pdf",
      }
    ],
  },
  chain: {
    title: "Dynamics of an unfolding chain",

    files: [

      {
        name: "README.md",
        type: "markdown",

        content: `
### **Project Overview: Dynamic Mass Systems & The Whipping Effect**

**Core Focus:** Classical Mechanics | Variable Mass Systems | Lagrangian Dynamics | Video Motion Analysis

While fundamental physics suggests that objects in free fall experience a uniform acceleration of $g$, certain tethered systems exhibit "anomalous" acceleration exceeding $9.81 m/s^2$. I conducted an experimental and theoretical investigation into the unfolding dynamics of a folded metallic chain to analyze the "whipping effect" in variable mass systems.

By treating the falling chain as a dynamic mass system—analogous to a rocket expelling fuel—I explored the transfer of momentum and energy during the unfolding process. My research focused on:

* **Acceleration Anomalies:** Investigating why a U-folded chain unravels faster than a free-falling body due to the lateral oscillations and tension at the fold.
* **Mathematical Modeling:** Utilizing work-energy theorems and momentum conservation to derive a relationship between chain length and unfolding time.
* **Empirical Validation:** Performing high-speed video analysis on metallic chains of varying lengths to compare experimental acceleration curves against theoretical predictions.

This study provides a simplified framework for understanding more complex mechanical systems, such as the deployment of space tethers, the motion of a whip, and the safety physics of bungee jumping.
              `,
      },
      {
        name: "research paper.pdf",
        type: "pdf",
        
        url: "/pdfs/Meher Patel Physics IA final .pdf",
      }
    ],
  },

  tether: {
    title: "Space Elevator Tether Dynamics",

    files: [

      {
        name: "README.md",
        type: "markdown",

        content: `
### **Orbital Tether Dynamics**

The space elevator remains one of the most ambitious structural concepts in aerospace engineering, yet its realization hinges on far more than just material strength. In this research, I developed a comprehensive mathematical derivation of the governing partial differential equations that describe transverse wave propagation within an orbital tether. By beginning with the first principles of continuum mechanics and conducting a physically motivated free-body analysis, I progressively integrated complex physical mechanisms, including atmospheric drag, elastic deformation, and the Coriolis coupling inherent to a rotating non-inertial reference frame.

The resulting framework—a forced, damped, variable-coefficient wave equation—allows for a rigorous analysis of wave speed, resonance conditions, and eigenmode structures under the influence of moving climber loads. This investigation ultimately demonstrates that the fundamental engineering hurdle for space elevators is not merely tension and strength, but the dynamic stability required to transition these structures from theoretical inspiration to a functional orbital transportation system.
      `,
      },
      {
        name: "research paper.md",
        type: "markdown",
        
        url: "/pdfs/Space elevator tether dynamics.md",
      }
    ],
  },
  musecroc: {
    title: "Portable BCI and neurosensing validation",

    files: [

      {
        name: "README.md",
        type: "markdown",

        content: `

## **Athena's Light: Portable Multimodal Neuro-Sensing**

During my first year of undergraduate studies, I collaborated with graduate researchers and Professor Steve Mann at MannLab to develop and validate accessible neuro-sensing technologies. Commercial devices like the Muse headband offer low-cost, portable platforms for biometric tracking, but utilizing them for rigorous neuroscience research requires custom, reliable data collection pipelines. Our research focused on testing and validating "MuseCroc Mobile," a custom software application designed to record, control, and integrate data from Electroencephalography (EEG), Photoplethysmography (PPG), and functional Near-Infrared Spectroscopy (fNIRS) sensors embedded in the Muse S Athena headband.

To validate the software's data collection pipeline, we conducted resting-state EEG experiments comparing eyes-open and eyes-closed conditions. By analyzing the power spectral density of the recorded signals, we successfully captured the well-established physiological increase in occipital alpha-band activity during eyes-closed states, confirming the system's reliability for tracking neural variations. Additionally, we rigorously evaluated the application's Bluetooth packet processing behavior and inter-arrival times, addressing the challenges of high-frequency data transmission on Android operating systems to ensure data integrity.

A major component of this work involved a preliminary hardware investigation into the fNIRS system of the Muse S Athena. By utilizing CNC machines, optical power meters, and oscilloscopes, we mapped the infrared optode emission patterns, measured optical power density at varying distances and angles, and analyzed the raw optical signal frequencies. This foundational hardware analysis provides the necessary optical parameters to better understand the device's functional capabilities, pushing the boundaries of what is possible with accessible, mobile brain-computer interfaces.
        `,
      },

      {
        name: "research paper.pdf",
        type: "pdf",

        url: "/pdfs/1571222411 final.pdf",
      },
    ],
  },

};