---
layout: page
title: AutoMOOSE
description: Agentic AI for autonomous phase-field simulation
img: assets/img/projects/automoose.png
importance: 1
category: software
redirect: /assets/pages/automoose.html
related_publications: false
---

**AutoMOOSE** is a multi-agent LLM framework that automates the end-to-end workflow of phase-field simulations in [MOOSE](https://mooseframework.inl.gov/) — from natural-language problem specification through input-file generation, HPC execution, error recovery, and post-processing of results.

The system orchestrates a team of specialized LLM agents — a planner, a MOOSE-input generator, a simulation runner, an error-diagnosis agent, and an analyst — communicating through a shared scratchpad and tool-call API. The goal is twofold: to lower the barrier to multiphysics simulation for non-expert users, and to enable autonomous design-of-experiments loops where the simulator becomes one tool among many in an agentic materials-discovery pipeline.

**Status:** Active development · Preprint released 2026

**Role:** Lead developer and corresponding author

### Key features

- Natural-language to MOOSE input translation with self-correction loops
- HPC-aware job submission and monitoring
- Agentic error diagnosis grounded in simulation logs and physical reasoning
- Automated post-processing and figure generation

### Links

- GitHub: [sukritimanna/AutoMOOSE](https://github.com/sukritimanna/AutoMOOSE)
- Preprint: [arXiv:2603.20986](https://arxiv.org/abs/2603.20986)

### Citation

{% raw %}
```bibtex
@article{manna2026automoose,
  title   = {{AutoMOOSE}: An Agentic AI for Autonomous Phase-Field Simulation},
  author  = {Manna, Sukriti and Chan, Henry and Sankaranarayanan, Subramanian K. R. S.},
  journal = {arXiv preprint arXiv:2603.20986},
  year    = {2026}
}
```
{% endraw %}
