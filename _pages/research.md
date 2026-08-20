---
layout: page
permalink: /research/
title: research
description: Autonomous AI workflows for materials discovery, design, and simulation
nav: true
nav_order: 1
---

I develop **autonomous AI workflows for materials discovery, design, and simulation** — integrating quantum mechanics, atomistic modeling, and continuum-scale simulation with reinforcement learning, graph neural networks, and multi-agent LLM systems. My research is organized into four interconnected thrusts.

---

## 1. Agentic AI for Autonomous Scientific Simulation

The next frontier of computational materials science is not faster simulation but *autonomous* simulation — AI systems that can specify, execute, debug, and analyze physics-based models with minimal human intervention. My flagship project, [**AutoMOOSE**](/projects/automoose/), is a multi-agent LLM framework that automates the end-to-end workflow of phase-field simulations in MOOSE, from natural-language problem specification through HPC execution and post-processing.

Looking forward, this thrust extends to **agentic DFT workflows**, **closed-loop materials-discovery pipelines** that combine simulation with autonomous experimentation, and **scientific reasoning agents** that can navigate the full multiscale stack from electrons to devices.

## 2. Reinforcement Learning for Materials Design

Long before LLM agents, I have been treating materials discovery as a sequential decision-making problem. The [**CASTING**](/projects/casting/) framework uses continuous-action-space tree search for crystal-structure prediction and inverse design, while the [**BLAST**](/projects/blast/) toolkit applies reinforcement-learning strategies — originally inspired by AI for board games — to the construction of empirical and neural-network interatomic potentials.

Together, these methods have yielded transferable force fields for silica, silicene, arsenene, phosphorene, bismuthene, gold and nickel nanoclusters, transition metals, and high-entropy MXenes — and have been extended through multi-reward, hierarchical, and symbolic-regression variants to produce *physically interpretable* potentials.

## 3. Multiscale Modeling from Quantum to Device

I bridge length and time scales by integrating DFT, machine-learning force fields, classical molecular dynamics, and phase-field modeling within a single research program. Recent work spans:

- **Neuromorphic computing materials** — Mott systems and hydrogenated perovskite nickelates as reconfigurable platforms for AI hardware (*Science*, *Science Advances*, *Nano Letters*, *ACS Nano*).
- **Thermal management for high-performance computing** — projection-based Cahn–Hilliard–Navier–Stokes phase-field modeling of two-phase flows in microelectronics cooling systems.
- **2D and high-entropy materials** — discovery and characterization of 2D MXenes, transition-metal dichalcogenides, and high-entropy alloys for tribological and electronic applications.

## 4. Data-Driven Materials Discovery and Infrastructure

Scalable AI for materials requires scalable data. I co-founded the [**Quantum Cluster Database**](/projects/quantum-cluster-database/) — the largest open repository of atomically precise nanoclusters, cataloging more than 70,000 DFT-computed structures across 55 elements. This thrust also includes data-driven studies of **process–structure–property relationships in additive manufacturing**, **machine-learned phase diagrams** for accelerated phase discovery (boron, carbon, transition metals), and **ML-based elastic-property prediction**.

---

A detailed research statement is available [here](/assets/pdf/research_statement.pdf).
