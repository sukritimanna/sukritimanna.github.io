---
layout: page
permalink: /research/
title: research
description: Autonomous materials science across scales
nav: true
nav_order: 1
---

<style>
/* ============================================================
   Research page — editorial refinement
   Restrained palette, refined spacing, subtle depth
   Uses al-folio theme variables; renders correctly in light/dark
   ============================================================ */

/* Root scoping so nothing bleeds into rest of site */
.research-page {
  --r-accent: var(--global-theme-color);
  --r-ink: var(--global-text-color);
  --r-ink-soft: var(--global-text-color-light);
  --r-line: var(--global-divider-color);
  --r-panel: var(--global-bg-color);
  --r-tint: var(--global-code-bg-color);
  --r-warn: #c94a5a;
  --r-radius: 14px;
  --r-shadow-sm: 0 1px 2px rgba(0,0,0,0.04), 0 2px 8px rgba(0,0,0,0.03);
  --r-shadow-md: 0 4px 12px rgba(0,0,0,0.05), 0 12px 32px rgba(0,0,0,0.04);
  line-height: 1.65;
}

/* Small caps kicker used everywhere */
.research-page .r-kicker {
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--r-accent);
  font-weight: 700;
  margin: 0 0 0.6rem;
}

/* ==================== HERO ==================== */
.research-page .r-hero {
  margin: 0.5rem 0 3.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--r-line);
  position: relative;
}

.research-page .r-hero::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 60px;
  height: 3px;
  background: var(--r-accent);
  border-radius: 2px;
}

.research-page .r-hero h1 {
  font-size: clamp(1.9rem, 4vw, 2.6rem);
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.1;
  margin: 0.25rem 0 1.25rem;
  color: var(--r-ink);
  max-width: 780px;
}

.research-page .r-lede {
  font-size: 1.1rem;
  line-height: 1.65;
  color: var(--r-ink);
  max-width: 760px;
  margin: 0;
  font-weight: 400;
}

/* ==================== SECTION HEADS ==================== */
.research-page .r-sec-head {
  margin: 4rem 0 1.75rem;
  max-width: 820px;
}

.research-page .r-sec-head h2 {
  font-size: 1.7rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin: 0 0 0.75rem;
  color: var(--r-ink);
}

.research-page .r-sec-head .r-intro {
  font-size: 1rem;
  color: var(--r-ink-soft);
  margin: 0;
  line-height: 1.65;
  font-weight: 400;
}

/* ==================== OVERVIEW ==================== */
.research-page .r-overview {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 1.5rem;
  margin: 1.75rem 0 2rem;
}

.research-page .r-overview-copy {
  border: 1px solid var(--r-line);
  border-radius: var(--r-radius);
  padding: 1.75rem 2rem;
  background: var(--r-panel);
  box-shadow: var(--r-shadow-sm);
}

.research-page .r-overview-copy p {
  margin: 0 0 1rem;
  color: var(--r-ink);
  line-height: 1.7;
  font-size: 0.985rem;
}

.research-page .r-overview-copy p:last-child { margin-bottom: 0; }
.research-page .r-overview-copy strong { color: var(--r-ink); font-weight: 700; }

.research-page .r-question {
  border: 1px solid var(--r-line);
  border-radius: var(--r-radius);
  padding: 1.75rem 2rem;
  background: linear-gradient(180deg, var(--r-tint), var(--r-panel));
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  box-shadow: var(--r-shadow-sm);
}

.research-page .r-question::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--r-accent);
}

.research-page .r-question .r-label {
  font-size: 0.68rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--r-accent);
  font-weight: 700;
  margin-bottom: 1rem;
}

.research-page .r-question blockquote {
  font-size: 1.2rem;
  line-height: 1.4;
  font-weight: 600;
  color: var(--r-ink);
  margin: 0 0 1.25rem;
  padding: 0;
  border: none;
  font-style: italic;
  letter-spacing: -0.005em;
}

.research-page .r-question p {
  margin: 0;
  font-size: 0.87rem;
  color: var(--r-ink-soft);
  line-height: 1.55;
}

/* ==================== WORKFLOW / PIPELINE ==================== */
.research-page .r-workflow {
  margin: 1.75rem 0 2rem;
}

.research-page .r-flow {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  margin-bottom: 10px;
  position: relative;
}

.research-page .r-step {
  padding: 1.1rem 0.9rem;
  border: 1px solid var(--r-line);
  border-radius: 10px;
  background: var(--r-panel);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  position: relative;
}

.research-page .r-step:hover {
  transform: translateY(-2px);
  border-color: var(--r-accent);
  box-shadow: var(--r-shadow-sm);
}

.research-page .r-step small {
  font-size: 0.62rem;
  color: var(--r-accent);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  display: block;
  margin-bottom: 0.35rem;
}

.research-page .r-step strong {
  font-size: 0.98rem;
  color: var(--r-ink);
  font-weight: 700;
  display: block;
  margin-bottom: 0.4rem;
  letter-spacing: -0.005em;
}

.research-page .r-step p {
  font-size: 0.72rem;
  color: var(--r-ink-soft);
  line-height: 1.4;
  margin: 0;
}

.research-page .r-ai-band {
  padding: 1rem 1.25rem;
  margin: 0.75rem 0 1.75rem;
  border: 1px solid var(--r-line);
  border-left: 3px solid var(--r-accent);
  background: var(--r-tint);
  border-radius: 0 8px 8px 0;
  font-size: 0.87rem;
  color: var(--r-ink);
  font-weight: 500;
  line-height: 1.55;
}

/* Bottlenecks / methods comparison */
.research-page .r-compare {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin-top: 1.25rem;
}

.research-page .r-bn {
  border: 1px solid var(--r-line);
  border-radius: var(--r-radius);
  padding: 1.5rem 1.6rem;
  background: var(--r-panel);
  box-shadow: var(--r-shadow-sm);
  position: relative;
}

.research-page .r-bn.red { border-top: 3px solid var(--r-warn); }
.research-page .r-bn.blue { border-top: 3px solid var(--r-accent); }

.research-page .r-bn h3 {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--r-ink);
  margin: 0 0 1rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.research-page .r-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.research-page .r-list-item {
  display: flex;
  gap: 0.7rem;
  align-items: flex-start;
  font-size: 0.9rem;
  color: var(--r-ink-soft);
  line-height: 1.5;
}

.research-page .r-list-item .r-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--r-accent);
  flex-shrink: 0;
  margin-top: 0.55rem;
}

.research-page .r-bn.red .r-list-item .r-dot { background: var(--r-warn); }

/* ==================== DIRECTIONS ==================== */
.research-page .r-directions {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.75rem;
}

.research-page .r-direction {
  display: grid;
  grid-template-columns: 72px 1fr;
  gap: 1.5rem;
  padding: 2rem 2rem 1.75rem;
  border: 1px solid var(--r-line);
  border-radius: var(--r-radius);
  background: var(--r-panel);
  box-shadow: var(--r-shadow-sm);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  position: relative;
  overflow: hidden;
}

.research-page .r-direction::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 3px;
  width: 40px;
  background: var(--r-accent);
  transition: width 0.3s ease;
}

.research-page .r-direction:hover {
  border-color: var(--r-accent);
  transform: translateY(-2px);
  box-shadow: var(--r-shadow-md);
}

.research-page .r-direction:hover::before { width: 100%; }

.research-page .r-dnum {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--r-accent);
  letter-spacing: -0.04em;
  line-height: 1;
  font-variant-numeric: tabular-nums;
}

.research-page .r-direction h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--r-ink);
  margin: 0 0 1rem;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

.research-page .r-direction p {
  font-size: 0.965rem;
  color: var(--r-ink);
  line-height: 1.65;
  margin: 0 0 1rem;
}

.research-page .r-direction p strong { color: var(--r-ink); font-weight: 700; }

.research-page .r-callout {
  margin: 1.25rem 0;
  padding: 1rem 1.25rem;
  background: var(--r-tint);
  border-left: 3px solid var(--r-accent);
  border-radius: 0 8px 8px 0;
  font-size: 0.9rem;
  color: var(--r-ink);
  line-height: 1.55;
}

.research-page .r-callout strong {
  color: var(--r-accent);
  font-weight: 700;
  letter-spacing: 0.02em;
}

.research-page .r-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 1rem 0;
}

.research-page .r-tag {
  font-size: 0.72rem;
  padding: 4px 10px;
  border-radius: 4px;
  background: var(--r-tint);
  color: var(--r-ink-soft);
  border: 1px solid var(--r-line);
  font-weight: 500;
  letter-spacing: 0.01em;
}

.research-page .r-pubbox {
  margin-top: 1.1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--r-line);
}

.research-page .r-pubbox > strong {
  display: block;
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--r-accent);
  font-weight: 700;
  margin-bottom: 0.6rem;
}

.research-page .r-pubs {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.research-page .r-pub {
  font-size: 0.87rem;
  color: var(--r-ink-soft);
  line-height: 1.5;
  padding-left: 1rem;
  position: relative;
}

.research-page .r-pub::before {
  content: "›";
  position: absolute;
  left: 0;
  color: var(--r-accent);
  font-weight: 700;
}

.research-page .r-pub a {
  color: var(--r-ink);
  font-weight: 600;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.15s ease;
}

.research-page .r-pub a:hover { border-bottom-color: var(--r-accent); }

/* ==================== CLOSING VISION ==================== */
.research-page .r-closing {
  margin: 3.5rem 0 1rem;
  padding: 2.25rem 2.25rem;
  border: 1px solid var(--r-line);
  border-radius: var(--r-radius);
  background: linear-gradient(135deg, var(--r-tint), var(--r-panel));
  box-shadow: var(--r-shadow-sm);
  position: relative;
  overflow: hidden;
}

.research-page .r-closing::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, var(--r-accent), transparent);
}

.research-page .r-closing h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--r-ink);
  margin: 0 0 1rem;
  letter-spacing: -0.015em;
  line-height: 1.25;
  max-width: 720px;
}

.research-page .r-closing p {
  margin: 0 0 1.5rem;
  color: var(--r-ink-soft);
  line-height: 1.65;
  font-size: 1rem;
  max-width: 760px;
}

.research-page .r-closing a {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--r-accent);
  font-weight: 700;
  font-size: 0.92rem;
  text-decoration: none;
  padding: 0.6rem 1.1rem;
  border: 1px solid var(--r-accent);
  border-radius: 8px;
  transition: background 0.2s ease, color 0.2s ease;
}

.research-page .r-closing a:hover {
  background: var(--r-accent);
  color: var(--r-panel);
}

/* ==================== MOBILE ==================== */
@media (max-width: 800px) {
  .research-page .r-overview { grid-template-columns: 1fr; }
  .research-page .r-flow { grid-template-columns: repeat(2, 1fr); }
  .research-page .r-compare { grid-template-columns: 1fr; }
  .research-page .r-direction {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    padding: 1.5rem 1.5rem 1.25rem;
  }
  .research-page .r-dnum { font-size: 1.9rem; }
  .research-page .r-hero h1 { font-size: 1.75rem; }
  .research-page .r-lede { font-size: 1rem; }
  .research-page .r-sec-head { margin: 3rem 0 1.25rem; }
}
</style>

<div class="research-page">

<!-- ============================================================
     Hero
     ============================================================ -->

<div class="r-hero">
  <div class="r-kicker">Research</div>
  <h1>Autonomous materials science across scales.</h1>
  <p class="r-lede">I develop physics-grounded AI systems that connect quantum mechanics, atomistic simulation, mesoscale modeling, and autonomous experiments. The long-term goal is to build scientific workflows that can formulate hypotheses, choose the next calculation or measurement, execute it reliably, test the result, and improve their own models with progressively less manual intervention.</p>
</div>

<!-- ============================================================
     Overview
     ============================================================ -->

<div class="r-sec-head">
  <div class="r-kicker">Overview</div>
  <h2>Scientific discovery is a multiscale decision problem.</h2>
  <p class="r-intro">Materials behavior emerges across many coupled length and time scales, while the information needed to design a material is incomplete, expensive, and distributed across calculations, experiments, and prior knowledge.</p>
</div>

<div class="r-overview">
  <div class="r-overview-copy">
    <p>Traditional materials workflows are often sequential: calculate an electronic structure, fit a model, run atomistic simulations, build a continuum description, compare with experiment, then iterate manually. Each handoff introduces assumptions, delays, and opportunities for information loss.</p>
    <p>My research asks how these stages can be made <strong>connected, adaptive, and auditable</strong>. I combine density functional theory, machine-learned interatomic potentials, molecular dynamics, phase-field and multiphysics simulation with reinforcement learning, graph neural networks, uncertainty quantification, and multi-agent AI systems.</p>
    <p>The objective is not to replace physical modeling with black-box prediction. It is to create computational and experimental systems in which <strong>physics provides the structure, AI chooses efficient actions, and verification constrains autonomy</strong>.</p>
  </div>
  <aside class="r-question">
    <div>
      <div class="r-label">Central question</div>
      <blockquote>What should we calculate, simulate, or measure next — and at which scale?</blockquote>
    </div>
    <p>This question connects inverse design, active learning, scale bridging, autonomous simulation, and closed-loop experiments into a single research program.</p>
  </aside>
</div>

<!-- ============================================================
     Research architecture
     ============================================================ -->

<div class="r-sec-head">
  <div class="r-kicker">Research architecture</div>
  <h2>From electrons to engineering performance.</h2>
  <p class="r-intro">The core of the program is a closed computational stack in which information moves both forward toward performance and backward toward the next most informative calculation.</p>
</div>

<div class="r-workflow">
  <div class="r-flow">
    <div class="r-step"><small>01 · Quantum</small><strong>DFT</strong><p>Bonding, defects, interfaces, phase stability, reaction energetics.</p></div>
    <div class="r-step"><small>02 · Learned</small><strong>MLIPs</strong><p>Physics-informed, uncertainty-aware potentials for realistic atomistic scale.</p></div>
    <div class="r-step"><small>03 · Atomistic</small><strong>MD</strong><p>Kinetics, transport, interfaces, nucleation, defect motion.</p></div>
    <div class="r-step"><small>04 · Mesoscale</small><strong>Phase Field</strong><p>Microstructure evolution, domain dynamics, multiphase processes.</p></div>
    <div class="r-step"><small>05 · Engineering</small><strong>Performance</strong><p>Structure–property relationships, process windows, device and component behavior.</p></div>
  </div>
  <div class="r-ai-band"><strong>Scientific AI layer</strong> · agentic AI · reinforcement learning · graph neural networks · uncertainty · scale bridging · HPC orchestration · autonomous experimentation</div>

  <div class="r-compare">
    <div class="r-bn red">
      <h3>Current bottlenecks</h3>
      <div class="r-list">
        <div class="r-list-item"><span class="r-dot"></span><span>Manual setup, debugging, and post-processing of complex simulations</span></div>
        <div class="r-list-item"><span class="r-dot"></span><span>Expensive quantum data and sparse coverage of configuration space</span></div>
        <div class="r-list-item"><span class="r-dot"></span><span>Uncertain information transfer between atomistic and continuum scales</span></div>
        <div class="r-list-item"><span class="r-dot"></span><span>Weak coupling between computational predictions and experimental validation</span></div>
      </div>
    </div>
    <div class="r-bn blue">
      <h3>Methods we develop</h3>
      <div class="r-list">
        <div class="r-list-item"><span class="r-dot"></span><span>Verified scientific agents that specify, execute, inspect, and challenge simulations</span></div>
        <div class="r-list-item"><span class="r-dot"></span><span>Active-learning and RL strategies for selecting high-value configurations and designs</span></div>
        <div class="r-list-item"><span class="r-dot"></span><span>Agentic scale bridging from DFT → MLIP → MD → continuum models</span></div>
        <div class="r-list-item"><span class="r-dot"></span><span>Closed-loop integration with microscopy and other autonomous measurements</span></div>
      </div>
    </div>
  </div>
</div>

<!-- ============================================================
     Current research directions
     ============================================================ -->

<div class="r-sec-head">
  <div class="r-kicker">Current research directions</div>
  <h2>Four interconnected thrusts.</h2>
  <p class="r-intro">These are not independent topics. They share methods, software, data, and a common goal: make multiscale materials research more autonomous, predictive, and experimentally grounded.</p>
</div>

<div class="r-directions">

  <article class="r-direction">
    <div class="r-dnum">01</div>
    <div>
      <h3>Agentic AI for autonomous scientific simulation</h3>
      <p>Modern simulation codes can model highly complex physics, but they still depend on substantial human expertise to translate scientific intent into valid inputs, choose numerical settings, detect failure modes, interpret outputs, and decide what to run next. I develop AI-agent systems that operate across this full workflow while retaining deterministic execution and explicit verification.</p>
      <p><strong><a href="/projects/automoose/">AutoMOOSE</a></strong> is the flagship platform in this direction. It decomposes autonomous phase-field simulation into specialized roles for architecture, input generation, execution, review, visualization, and adversarial checking. The broader program extends this idea to DFT, molecular dynamics, HPC workflows, and eventually heterogeneous multiscale simulations.</p>
      <div class="r-callout"><strong>Research objective:</strong> move from "AI that writes simulation inputs" toward scientific agents that can formulate, execute, falsify, and refine computational hypotheses.</div>
      <div class="r-tags"><span class="r-tag">LLM Agents</span><span class="r-tag">MOOSE</span><span class="r-tag">DFT Automation</span><span class="r-tag">HPC</span><span class="r-tag">Verification</span></div>
      <div class="r-pubbox">
        <strong>Representative platforms</strong>
        <div class="r-pubs">
          <div class="r-pub"><a href="/projects/automoose/">AutoMOOSE</a> — multi-agent autonomous phase-field simulation</div>
          <div class="r-pub"><a href="/projects/tem-scientist/">TEM-Scientist</a> — compile–rehearse–execute–reflect workflow for autonomous microscopy</div>
        </div>
      </div>
    </div>
  </article>

  <article class="r-direction">
    <div class="r-dnum">02</div>
    <div>
      <h3>AI-accelerated multiscale modeling and scale bridging</h3>
      <p>Many important materials phenomena cannot be described at one scale. Electronic structure controls bonding and defect energetics; atomistic dynamics determine kinetics and interfacial processes; microstructure evolves collectively at mesoscale; engineering performance emerges only after these mechanisms interact.</p>
      <p>My work connects <strong>DFT → machine-learned interatomic potentials → molecular dynamics → phase-field and multiphysics models</strong>. A particular focus is on how uncertainty and mechanistic information should be transferred between scales rather than simply passing fitted parameters downstream.</p>
      <div class="r-callout"><strong>Research objective:</strong> develop agentic scale-bridging workflows in which each model requests the information it needs from the next-finer scale and propagates uncertainty forward to performance predictions.</div>
      <div class="r-tags"><span class="r-tag">DFT</span><span class="r-tag">MLIPs</span><span class="r-tag">Molecular Dynamics</span><span class="r-tag">Phase Field</span><span class="r-tag">Scale Bridging</span></div>
      <div class="r-pubbox">
        <strong>Current materials problems</strong>
        <div class="r-pubs">
          <div class="r-pub">Hafnia ferroelectrics — phase transformations, interfaces, defects, domain evolution</div>
          <div class="r-pub">Al–Ce alloys — interface engineering, MLIP/MD scale-up, process–structure–performance links</div>
          <div class="r-pub">Thermal management — phase-field modeling of multiphase transport in microelectronics</div>
        </div>
      </div>
    </div>
  </article>

  <article class="r-direction">
    <div class="r-dnum">03</div>
    <div>
      <h3>Reinforcement learning and inverse materials design</h3>
      <p>Materials discovery is naturally a sequential decision problem: among many possible structures, configurations, descriptors, experiments, or parameterizations, which action is most informative or most likely to improve a target property? I have pursued this view since before the current wave of LLM-based agents.</p>
      <p><strong><a href="/projects/casting/">CASTING</a></strong> uses continuous-action-space tree search for structure prediction and inverse design, while <strong><a href="/projects/blast/">BLAST</a></strong> applies reinforcement-learning concepts to interatomic-potential development. These methods have been extended to multi-reward learning, hierarchical search, and symbolic formulations that preserve interpretability.</p>
      <div class="r-callout"><strong>Research objective:</strong> build search and decision algorithms that discover structures, models, and experiments while accounting for physical constraints, uncertainty, and computational cost.</div>
      <div class="r-tags"><span class="r-tag">Reinforcement Learning</span><span class="r-tag">Inverse Design</span><span class="r-tag">Tree Search</span><span class="r-tag">Potential Fitting</span></div>
      <div class="r-pubbox">
        <strong>Representative platforms</strong>
        <div class="r-pubs">
          <div class="r-pub"><a href="/projects/casting/">CASTING</a> — continuous-action-space search for crystal structure prediction</div>
          <div class="r-pub"><a href="/projects/blast/">BLAST</a> — reinforcement-learning strategies for empirical and neural interatomic potentials</div>
        </div>
      </div>
    </div>
  </article>

  <article class="r-direction">
    <div class="r-dnum">04</div>
    <div>
      <h3>Data-driven materials discovery and scientific infrastructure</h3>
      <p>Scalable AI for science depends on high-quality data, reproducible workflows, and software that can be reused beyond one study. I develop scientific infrastructure that turns expensive simulation output into durable assets for future modeling and discovery.</p>
      <p>The <strong><a href="/projects/quantum-cluster-database/">Quantum Cluster Database</a></strong> is a large open DFT resource for atomically precise nanoclusters, containing more than <strong>70,000 structures across 55 elements</strong>. Related work uses materials data to learn process–structure–property relationships, phase behavior, and elastic or thermodynamic properties.</p>
      <div class="r-callout"><strong>Research objective:</strong> create open, queryable, provenance-aware scientific datasets and workflows that can serve as memory for autonomous materials agents.</div>
      <div class="r-tags"><span class="r-tag">Open Data</span><span class="r-tag">Materials Informatics</span><span class="r-tag">Databases</span><span class="r-tag">Scientific Software</span><span class="r-tag">Provenance</span></div>
      <div class="r-pubbox">
        <strong>Representative infrastructure</strong>
        <div class="r-pubs">
          <div class="r-pub"><a href="/projects/quantum-cluster-database/">Quantum Cluster Database</a> — 70,000+ DFT structures across 55 elements</div>
          <div class="r-pub">Data-driven phase and property models for accelerated materials discovery</div>
        </div>
      </div>
    </div>
  </article>

</div>

<!-- ============================================================
     Closing
     ============================================================ -->

<div class="r-closing">
  <div class="r-kicker">Long-term vision</div>
  <h2>Closed-loop, trustworthy autonomous materials discovery.</h2>
  <p>The destination is a research ecosystem in which simulations, experiments, data, and scientific agents continuously exchange information: models identify uncertainty, agents select the next action, deterministic tools execute it, and new evidence updates the scientific hypothesis.</p>
  <a href="/publications/">Selected publications &rarr;</a>
</div>

</div>
