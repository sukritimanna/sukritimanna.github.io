---
layout: page
title: BLAST
description: Bridging Length/timescales via Atomistic Simulation Toolkit
img: assets/img/projects/blast.png
importance: 2
category: software
related_publications: false
---

**BLAST** (Bridging Length/timescales via Atomistic Simulation Toolkit) is a suite of tree-based and reinforcement-learning optimization methods for developing empirical and neural-network interatomic potentials from sparse first-principles datasets. The methodology — originally inspired by AI strategies for board games — treats force-field construction as a sequential decision-making problem with a continuous action space, dramatically accelerating the search for accurate and transferable potentials.

BLAST has been used to develop potentials for a broad family of materials: silica, silicene, arsenene, phosphorene, bismuthene, gold and nickel nanoclusters, transition metals, and high-entropy MXenes. The framework has been extended with multi-reward and hierarchical-RL variants, and most recently with symbolic-regression hybrids that yield physically interpretable potentials.

**Status:** Active development

**Role:** Lead developer

### Selected method papers

- Manna et al., *Learning in Continuous Action Space for Determination of High Dimensional Potential Energy Surfaces*, **Nature Communications** 13, 368 (2022). [DOI](https://doi.org/10.1038/s41467-021-27849-6)
- Varughese et al., *Physically Interpretable Interatomic Potentials via Symbolic Regression and Reinforcement Learning*, **npj Computational Materials** 12, 84 (2026). [DOI](https://doi.org/10.1038/s41524-025-01952-4)
- Koneru et al., *Multi-Reward Reinforcement Learning Based Development of Inter-atomic Potential Models for Silica*, **npj Computational Materials** 9, 125 (2023). [DOI](https://doi.org/10.1038/s41524-023-01074-9)
- Loeffler & Manna et al., *Active Learning a Neural Network Model for Gold Clusters & Bulk from Sparse First Principles Training Data*, **ChemCatChem** 12, 4796 (2020) — Cover article. [DOI](https://doi.org/10.1002/cctc.202000774)

### Citation

{% raw %}
```bibtex
@article{manna2022blast,
  title   = {Learning in continuous action space for determination of
             high dimensional potential energy surfaces},
  author  = {Manna, Sukriti and Loeffler, Troy D. and Batra, Rohit and
             Banik, Suvo and Chan, Henry and others},
  journal = {Nature Communications},
  volume  = {13},
  pages   = {368},
  year    = {2022},
  doi     = {10.1038/s41467-021-27849-6}
}
```
{% endraw %}
