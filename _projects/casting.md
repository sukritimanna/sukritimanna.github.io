---
layout: page
title: CASTING
description: Continuous Action Space Tree search for INverse desiGn
img: assets/img/projects/casting.png
importance: 3
category: software
related_publications: false
---

**CASTING** is a Python framework for crystal-structure prediction and inverse materials design using a tree-search algorithm in continuous action space. It integrates ab initio energy evaluators (VASP, LAMMPS) with a Monte-Carlo-Tree-Search-inspired optimizer to explore high-dimensional potential energy surfaces and discover stable and metastable phases.

CASTING extends classical inverse-design strategies — which typically rely on genetic algorithms or basin hopping — by treating structure discovery as a sequential decision-making problem. The continuous-action formulation enables efficient exploration of complex configuration landscapes and has been used to discover metastable phases of boron and superhard carbon polymorphs.

**Status:** Maintained · Published in *npj Computational Materials* (2023)

**Role:** Core contributor

### Applications

- Crystal structure prediction across the periodic table
- Discovery of metastable phases of boron and superhard carbon polymorphs
- High-dimensional potential-energy-surface exploration

### Links

- Paper: [Banik et al., *npj Computational Materials* 9, 177 (2023)](https://doi.org/10.1038/s41524-023-01128-y)

### Citation

{% raw %}
```bibtex
@article{banik2023casting,
  title   = {A continuous action space tree search for inverse design ({CASTING})
             framework for materials discovery},
  author  = {Banik, Suvo and Loeffler, Troy D. and Manna, Sukriti and
             Srinivasan, Srilok and Darancet, Pierre and Chan, Henry and
             Hexemer, Alexander and Sankaranarayanan, Subramanian K. R. S.},
  journal = {npj Computational Materials},
  volume  = {9},
  number  = {1},
  pages   = {177},
  year    = {2023},
  doi     = {10.1038/s41524-023-01128-y}
}
```
{% endraw %}
