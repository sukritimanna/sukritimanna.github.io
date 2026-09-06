---
layout: about
title: about
permalink: /
subtitle: Research Assistant Professor, <a href='https://mie.uic.edu/'>University of Illinois Chicago</a> · Resident Associate, <a href='https://www.anl.gov/cnm'>Argonne National Laboratory</a>

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
  more_info: >
    <p><a href="mailto:smanna@uic.edu">smanna@uic.edu</a></p>
    <p><a href="mailto:sukriti.manna@gmail.com">sukriti.manna@gmail.com</a></p>

news: true
selected_papers: true
social: true
---

I build **autonomous AI workflows for materials discovery, design, and simulation** — integrating quantum mechanics, atomistic modeling, and continuum-scale simulation with reinforcement learning, graph neural networks, and multi-agent LLM systems.

<div class="stats-banner">
  <div class="stat"><b>50+</b><span>Publications</span></div>
  <div class="stat"><b>1,900+</b><span>Citations</span></div>
  <div class="stat"><b>23</b><span>h-index</span></div>
  <div class="stat"><b>Featured in</b><span><em>Science</em> · <em>Nature Comm.</em> · <em>Sci. Adv.</em> · <em>Adv. Mater.</em> · <em>ACS Nano</em></span></div>
</div>

<style>
.stats-banner {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--global-divider-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 12px;
  overflow: hidden;
  margin: 2rem 0;
}
.stats-banner .stat {
  background: var(--global-bg-color);
  padding: 1.25rem 1rem;
  text-align: left;
}
.stats-banner .stat b {
  display: block;
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--global-theme-color);
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-bottom: 0.25rem;
}
.stats-banner .stat span {
  font-size: 0.85rem;
  color: var(--global-text-color-light);
}
.stats-banner .stat em {
  font-style: italic;
}
@media (max-width: 640px) {
  .stats-banner { grid-template-columns: repeat(2, 1fr); }
}
</style>

My current research centers on **agentic AI for scientific instruments and simulation** — AI systems that autonomously specify, execute, verify, and analyze physics-based experiments and simulations. This work grows out of a longer arc of reinforcement-learning methods I have developed for atomistic potential construction ([BLAST](/projects/blast/)) and inverse materials design, and from data-driven infrastructure such as the [Quantum Cluster Database](/projects/quantum-cluster-database/) — the largest open repository of atomically precise nanoclusters, with **70,000+ DFT-computed structures across 55 elements**. The two current flagship projects are [AutoMOOSE](/projects/automoose/), a multi-agent framework for autonomous phase-field simulation, and [TEM-Scientist](/projects/tem-scientist/), a compile–rehearse–execute architecture for autonomous transmission electron microscopy — sibling demonstrations of the same architectural philosophy applied to a physics-based simulator and to a scientific instrument.

I apply these workflows across problem domains where physics-informed AI can materially accelerate discovery: **materials for extreme environments** (radiation, thermal, chemical), **autonomous agents for advanced manufacturing**, **neuromorphic computing materials**, **thermal management for high-performance computing hardware**, and **next-generation energy and electronic materials**. Selected outcomes have appeared in *Science*, *Nature Communications*, *Science Advances*, *Advanced Materials*, *ACS Nano*, and *Nano Letters*.

I am a Research Assistant Professor in the Department of Mechanical and Industrial Engineering at the **University of Illinois Chicago** and a Resident Associate in the Theory and Modeling Group at **Argonne National Laboratory's Center for Nanoscale Materials**, working with [Prof. Subramanian Sankaranarayanan](https://mie.uic.edu/profiles/sankaranarayanan-subramanian/). I received my Ph.D. in Mechanical Engineering from **Colorado School of Mines** (2018) with [Prof. Cristian V. Ciobanu](https://scholar.google.com/citations?user=hK_FHOUAAAAJ) and [Prof. Vladan Stevanović](https://scholar.google.com/citations?user=itfRzZAAAAAJ), and held a postdoctoral position at **Johns Hopkins University** with [Prof. Tim Mueller](https://muellergroup.jhu.edu/) before joining Argonne in 2019.

---

### Current preprints

- **[AutoMOOSE: An Agentic AI for Autonomous Phase-Field Simulation](/projects/automoose/)** — S. Manna, H. Chan, S. K. R. S. Sankaranarayanan. *arXiv, under review* (2026).
- **[AutoMOOSE: Use Case and Logical Views of Agentic Phase-Field Simulation Software](/projects/automoose/)** — S. Manna, H. Chan, S. K. R. S. Sankaranarayanan. *arXiv:2608.20571* (2026).
- **[Verified Experimental Protocols for Agentic Electron Microscopy](/projects/tem-scientist/)** *(TEM-Scientist)* — S. Manna, Y. Huang, R. Vasudevan, Y. Liu, S. K. R. S. Sankaranarayanan. *arXiv, under review* (2026).

---

### Collaborations

I'm always interested in collaborations at the intersection of **computational materials science, multiscale modeling, machine learning, and autonomous scientific workflows** — particularly on machine-learned interatomic potentials, agentic AI for physics-based simulation and instrumentation, reinforcement learning for materials design, and HPC-enabled scientific software. If your work intersects any of these directions, feel free to reach out at [smanna@uic.edu](mailto:smanna@uic.edu).
