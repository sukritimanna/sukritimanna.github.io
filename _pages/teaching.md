---
layout: page
permalink: /teaching/
title: teaching
description: Teaching philosophy, mentoring, and courses
nav: true
nav_order: 4
---

<style>
/* ============================================================
   Teaching page — matches Research page visual system
   ============================================================ */

.teaching-page {
  --t-accent: var(--global-theme-color);
  --t-ink: var(--global-text-color);
  --t-ink-soft: var(--global-text-color-light);
  --t-line: var(--global-divider-color);
  --t-panel: var(--global-bg-color);
  --t-tint: var(--global-code-bg-color);
  --t-radius: 14px;
  --t-shadow-sm: 0 1px 2px rgba(0,0,0,0.04), 0 2px 8px rgba(0,0,0,0.03);
  --t-shadow-md: 0 4px 12px rgba(0,0,0,0.05), 0 12px 32px rgba(0,0,0,0.04);
  line-height: 1.65;
}

.teaching-page .t-kicker {
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--t-accent);
  font-weight: 700;
  margin: 0 0 0.6rem;
}

/* HERO */
.teaching-page .t-hero {
  margin: 0.5rem 0 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--t-line);
  position: relative;
}

.teaching-page .t-hero::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 60px;
  height: 3px;
  background: var(--t-accent);
  border-radius: 2px;
}

.teaching-page .t-hero h1 {
  font-size: clamp(1.9rem, 4vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.1;
  margin: 0.25rem 0 1.25rem;
  color: var(--t-ink);
  max-width: 780px;
}

.teaching-page .t-lede {
  font-size: 1.08rem;
  line-height: 1.65;
  color: var(--t-ink);
  max-width: 760px;
  margin: 0;
}

.teaching-page .t-lede em { font-style: italic; }

/* SECTION HEADS */
.teaching-page .t-sec-head {
  margin: 3.5rem 0 1.5rem;
  max-width: 820px;
}

.teaching-page .t-sec-head h2 {
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin: 0 0 0.6rem;
  color: var(--t-ink);
}

.teaching-page .t-sec-head .t-intro {
  font-size: 0.98rem;
  color: var(--t-ink-soft);
  margin: 0;
  line-height: 1.6;
}

/* MENTORING STATS */
.teaching-page .t-mentor-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 1.5rem 0 2rem;
}

.teaching-page .t-stat {
  padding: 1.4rem 1.5rem;
  border: 1px solid var(--t-line);
  border-radius: var(--t-radius);
  background: var(--t-panel);
  box-shadow: var(--t-shadow-sm);
  border-left: 3px solid var(--t-accent);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.teaching-page .t-stat:hover {
  transform: translateY(-2px);
  box-shadow: var(--t-shadow-md);
}

.teaching-page .t-stat b {
  display: block;
  font-size: 1.85rem;
  font-weight: 800;
  color: var(--t-accent);
  letter-spacing: -0.02em;
  line-height: 1.05;
  margin-bottom: 0.35rem;
  font-variant-numeric: tabular-nums;
}

.teaching-page .t-stat span {
  font-size: 0.88rem;
  color: var(--t-ink-soft);
  line-height: 1.45;
  display: block;
}

/* MENTORING BODY */
.teaching-page .t-mentor-body {
  padding: 1.5rem 1.75rem;
  border: 1px solid var(--t-line);
  border-radius: var(--t-radius);
  background: var(--t-panel);
  box-shadow: var(--t-shadow-sm);
  margin-bottom: 1.5rem;
}

.teaching-page .t-mentor-body p {
  margin: 0;
  color: var(--t-ink);
  line-height: 1.65;
  font-size: 0.97rem;
}

.teaching-page .t-mentor-body p strong { font-weight: 700; }

/* K-12 highlight card */
.teaching-page .t-k12 {
  padding: 1.5rem 1.75rem;
  border: 1px solid var(--t-line);
  border-left: 3px solid var(--t-accent);
  border-radius: var(--t-radius);
  background: linear-gradient(135deg, var(--t-tint), var(--t-panel));
  box-shadow: var(--t-shadow-sm);
}

.teaching-page .t-k12 h3 {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--t-ink);
  margin: 0 0 0.75rem;
  letter-spacing: -0.005em;
}

.teaching-page .t-k12 ul {
  margin: 0;
  padding-left: 1.2rem;
}

.teaching-page .t-k12 li {
  color: var(--t-ink-soft);
  line-height: 1.55;
  font-size: 0.92rem;
  margin-bottom: 0.3rem;
}

.teaching-page .t-k12 li strong { color: var(--t-ink); font-weight: 600; }

/* FORMAL TEACHING TABLE */
.teaching-page .t-teach-table {
  overflow-x: auto;
  border: 1px solid var(--t-line);
  border-radius: var(--t-radius);
  background: var(--t-panel);
  box-shadow: var(--t-shadow-sm);
  margin: 1rem 0 1.5rem;
}

.teaching-page .t-teach-table .t-institution {
  padding: 1rem 1.5rem 0.6rem;
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--t-accent);
  font-weight: 700;
  border-bottom: 1px solid var(--t-line);
}

.teaching-page .t-teach-table table {
  width: 100%;
  border-collapse: collapse;
  margin: 0;
  font-size: 0.9rem;
}

.teaching-page .t-teach-table th {
  text-align: left;
  padding: 0.85rem 1.5rem 0.7rem;
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--t-ink-soft);
  font-weight: 600;
  border-bottom: 1px solid var(--t-line);
  background: var(--t-tint);
}

.teaching-page .t-teach-table td {
  padding: 0.95rem 1.5rem;
  color: var(--t-ink);
  border-bottom: 1px solid var(--t-line);
  vertical-align: top;
}

.teaching-page .t-teach-table tr:last-child td { border-bottom: none; }

.teaching-page .t-teach-table td em {
  font-style: italic;
  color: var(--t-ink-soft);
  font-size: 0.85rem;
}

/* COURSE COLUMNS */
.teaching-page .t-courses {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin: 1.5rem 0 2rem;
}

.teaching-page .t-course-col {
  padding: 1.5rem 1.75rem;
  border: 1px solid var(--t-line);
  border-radius: var(--t-radius);
  background: var(--t-panel);
  box-shadow: var(--t-shadow-sm);
  transition: border-color 0.2s ease;
}

.teaching-page .t-course-col:hover { border-color: var(--t-accent); }

.teaching-page .t-course-col h3 {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--t-accent);
  margin: 0 0 1rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.teaching-page .t-course-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.teaching-page .t-course-col li {
  padding: 0.55rem 0 0.55rem 1rem;
  border-bottom: 1px dashed var(--t-line);
  color: var(--t-ink);
  font-size: 0.93rem;
  line-height: 1.45;
  position: relative;
}

.teaching-page .t-course-col li:last-child { border-bottom: none; }

.teaching-page .t-course-col li::before {
  content: "›";
  position: absolute;
  left: 0;
  color: var(--t-accent);
  font-weight: 700;
}

/* AI IN CLASSROOM */
.teaching-page .t-ai-teaching {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 1.5rem 0 2rem;
}

.teaching-page .t-ai-item {
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 1rem;
  padding: 1.4rem 1.5rem;
  border: 1px solid var(--t-line);
  border-radius: var(--t-radius);
  background: var(--t-panel);
  box-shadow: var(--t-shadow-sm);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  position: relative;
  overflow: hidden;
}

.teaching-page .t-ai-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 2px;
  width: 32px;
  background: var(--t-accent);
  transition: width 0.3s ease;
}

.teaching-page .t-ai-item:hover {
  border-color: var(--t-accent);
  transform: translateY(-2px);
  box-shadow: var(--t-shadow-md);
}

.teaching-page .t-ai-item:hover::before { width: 100%; }

.teaching-page .t-ai-num {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--t-accent);
  letter-spacing: -0.04em;
  line-height: 1;
  font-variant-numeric: tabular-nums;
}

.teaching-page .t-ai-item h3 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--t-ink);
  margin: 0 0 0.55rem;
  line-height: 1.3;
  letter-spacing: -0.005em;
}

.teaching-page .t-ai-item p {
  font-size: 0.9rem;
  color: var(--t-ink);
  line-height: 1.6;
  margin: 0;
}

/* PROPOSED COURSE (differentiator) */
.teaching-page .t-proposed {
  margin: 1.5rem 0 2rem;
  padding: 2rem 2.25rem;
  border: 1px solid var(--t-accent);
  border-radius: var(--t-radius);
  background: linear-gradient(135deg, var(--t-tint), var(--t-panel));
  box-shadow: var(--t-shadow-sm);
  position: relative;
  overflow: hidden;
}

.teaching-page .t-proposed::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, var(--t-accent), transparent);
}

.teaching-page .t-proposed .t-proposed-label {
  font-size: 0.68rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--t-accent);
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.teaching-page .t-proposed h3 {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--t-ink);
  margin: 0 0 0.9rem;
  letter-spacing: -0.015em;
  line-height: 1.25;
}

.teaching-page .t-proposed p {
  font-size: 0.97rem;
  color: var(--t-ink);
  line-height: 1.65;
  margin: 0 0 1rem;
}

.teaching-page .t-proposed p:last-child { margin-bottom: 0; }

.teaching-page .t-proposed .t-topics {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 1rem;
}

.teaching-page .t-proposed .t-topic {
  font-size: 0.72rem;
  padding: 4px 10px;
  border-radius: 4px;
  background: var(--t-panel);
  color: var(--t-ink-soft);
  border: 1px solid var(--t-line);
  font-weight: 500;
}

/* STATEMENT CALLOUT */
.teaching-page .t-statement {
  margin: 3rem 0 1rem;
  padding: 1.5rem 1.75rem;
  border: 1px solid var(--t-line);
  border-radius: var(--t-radius);
  background: var(--t-panel);
  box-shadow: var(--t-shadow-sm);
  text-align: center;
  color: var(--t-ink-soft);
  font-size: 0.95rem;
}

.teaching-page .t-statement a {
  color: var(--t-accent);
  font-weight: 700;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease;
}

.teaching-page .t-statement a:hover { border-bottom-color: var(--t-accent); }

/* MOBILE */
@media (max-width: 800px) {
  .teaching-page .t-mentor-stats { grid-template-columns: 1fr; }
  .teaching-page .t-courses { grid-template-columns: 1fr; }
  .teaching-page .t-ai-teaching { grid-template-columns: 1fr; }
  .teaching-page .t-hero h1 { font-size: 1.7rem; }
  .teaching-page .t-lede { font-size: 1rem; }
  .teaching-page .t-sec-head { margin: 2.5rem 0 1.25rem; }
  .teaching-page .t-proposed { padding: 1.5rem 1.5rem; }
  .teaching-page .t-proposed h3 { font-size: 1.15rem; }
}
</style>

<div class="teaching-page">

<!-- ============================================================
     HERO
     ============================================================ -->

<div class="t-hero">
  <div class="t-kicker">Teaching &amp; Mentoring</div>
  <h1>Teaching and research as one activity.</h1>
  <p class="t-lede">I view teaching and research as deeply intertwined. The same autonomous workflows I build for materials discovery are, fundamentally, structured ways of <em>learning</em> — and the classroom is where I help students develop both the technical foundations and the scientific intuition needed to drive that kind of work.</p>
</div>

<!-- ============================================================
     MENTORING
     ============================================================ -->

<div class="t-sec-head">
  <div class="t-kicker">Mentoring</div>
  <h2>Training students across mechanics, materials, computation, and AI.</h2>
</div>

<div class="t-mentor-stats">
  <div class="t-stat">
    <b>10+</b>
    <span>Graduate students mentored across UIC, Argonne, JHU, and Colorado Mines</span>
  </div>
  <div class="t-stat">
    <b>1</b>
    <span>Postdoctoral fellow</span>
  </div>
  <div class="t-stat">
    <b>2</b>
    <span>K–12 students (NAACP ACT-SO), including national medalists in Chemistry</span>
  </div>
</div>

<div class="t-mentor-body">
  <p>Many of my mentees have co-authored peer-reviewed publications spanning DFT, machine-learned interatomic potentials, phase-field modeling, and agentic AI for scientific simulation. Mentoring — from first-year graduate students to accomplished high-school scientists — is one of the parts of academic work I find most rewarding.</p>
</div>

<div class="t-k12">
  <h3>K–12 outreach — NAACP ACT-SO Youth Program</h3>
  <ul>
    <li><strong>Kudzi Makoni</strong> (Neuqua Valley High School) — Silver Medal, Chemistry, 2026 NAACP ACT-SO National Competition; Bronze Medal, 2025.</li>
  </ul>
</div>

<!-- ============================================================
     FORMAL TEACHING EXPERIENCE
     ============================================================ -->

<div class="t-sec-head">
  <div class="t-kicker">Formal teaching experience</div>
  <h2>Instructor and teaching assistant appointments.</h2>
</div>

<div class="t-teach-table">
  <div class="t-institution">Colorado School of Mines · Department of Mechanical Engineering</div>
  <table>
    <thead>
      <tr>
        <th>Role</th>
        <th>Course</th>
        <th>Term</th>
        <th>Format</th>
        <th>Enrollment</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Co-Instructor</td>
        <td>Kinetic Phenomena in Materials <em>(elective)</em></td>
        <td>Spring 2017</td>
        <td>In-person</td>
        <td>30</td>
      </tr>
      <tr>
        <td>Teaching Assistant</td>
        <td>Solid Mechanics of Materials <em>(core)</em></td>
        <td>Fall 2016</td>
        <td>In-person</td>
        <td>72</td>
      </tr>
      <tr>
        <td>Teaching Assistant</td>
        <td>Advanced Mechanics of Materials <em>(core)</em></td>
        <td>Fall 2015</td>
        <td>In-person</td>
        <td>76</td>
      </tr>
    </tbody>
  </table>
</div>

<!-- ============================================================
     COURSES I AM PREPARED TO TEACH
     ============================================================ -->

<div class="t-sec-head">
  <div class="t-kicker">Courses I am prepared to teach</div>
  <h2>Undergraduate core and graduate electives.</h2>
</div>

<div class="t-courses">
  <div class="t-course-col">
    <h3>Undergraduate core</h3>
    <ul>
      <li>Materials Science and Engineering</li>
      <li>Solid Mechanics / Mechanics of Materials</li>
      <li>Thermodynamics of Materials</li>
      <li>Numerical Methods for Engineers</li>
    </ul>
  </div>
  <div class="t-course-col">
    <h3>Graduate / advanced electives</h3>
    <ul>
      <li>Computational Materials Science</li>
      <li>Density Functional Theory: Theory and Practice</li>
      <li>Machine Learning for Materials Science</li>
      <li>Multiscale Modeling: From Quantum Mechanics to Continuum</li>
    </ul>
  </div>
</div>

<!-- ============================================================
     AI IN THE CLASSROOM
     ============================================================ -->

<div class="t-sec-head">
  <div class="t-kicker">AI in the classroom</div>
  <h2>Using AI to teach — thoughtfully, and with the science front and center.</h2>
  <p class="t-intro">The same technologies I research are reshaping how students learn engineering and materials science. I incorporate them into my teaching not as substitutes for fundamentals, but as tools that let students engage with harder problems, sooner.</p>
</div>

<div class="t-ai-teaching">
  <div class="t-ai-item">
    <div class="t-ai-num">01</div>
    <div>
      <h3>AI as a study partner, not an answer key</h3>
      <p>Students use large language models to explain concepts back to themselves, generate practice problems, debug derivations, and query the syllabus — but assignments require them to show reasoning, cite sources, and reproduce derivations by hand. I design problem sets that reward genuine understanding over polished output.</p>
    </div>
  </div>
  <div class="t-ai-item">
    <div class="t-ai-num">02</div>
    <div>
      <h3>Computational assignments with AI-assisted coding</h3>
      <p>In computational courses (DFT, MD, phase-field, ML for materials), students use AI coding assistants as pair programmers — accelerating boilerplate so class time focuses on numerical methods, convergence testing, physical interpretation, and error analysis. Rubrics evaluate scientific correctness and understanding of the underlying methods, not lines of code produced.</p>
    </div>
  </div>
  <div class="t-ai-item">
    <div class="t-ai-num">03</div>
    <div>
      <h3>Live demonstrations of autonomous scientific workflows</h3>
      <p>My research platforms — including AutoMOOSE and TEM-Scientist — become live classroom demonstrations of how AI agents interact with real simulation and experimental tools. Students see both the capabilities and the failure modes, and learn to reason about when to trust an autonomous system.</p>
    </div>
  </div>
  <div class="t-ai-item">
    <div class="t-ai-num">04</div>
    <div>
      <h3>Explicit conversations about AI literacy and integrity</h3>
      <p>Every course I teach opens with a clear discussion of appropriate AI use: what counts as collaboration, what counts as academic dishonesty, and how to evaluate AI-generated content critically. Students graduate knowing not only how to use these tools, but when not to trust them.</p>
    </div>
  </div>
</div>

<!-- ============================================================
     PROPOSED NEW COURSE (differentiator)
     ============================================================ -->

<div class="t-sec-head">
  <div class="t-kicker">New course I would develop</div>
  <h2>A graduate course only this program could offer.</h2>
</div>

<div class="t-proposed">
  <div class="t-proposed-label">Proposed graduate course</div>
  <h3>AI and Agentic Systems for Scientific Discovery</h3>
  <p>A graduate course on how modern AI — large language models, autonomous agents, reinforcement learning, and physics-informed neural models — can be composed into <em>trustworthy scientific workflows</em>. Students would work with real simulation and instrument-control codes, learn to design agentic architectures that retain deterministic execution and verification, and confront the epistemic questions autonomous science raises (what counts as evidence, what an agent should refuse to do, how uncertainty should propagate).</p>
  <p>The course draws directly on the platforms my own research develops — including AutoMOOSE and TEM-Scientist — and prepares students to build the next generation of autonomous scientific tools across mechanics, materials, chemistry, and engineering more broadly.</p>
  <div class="t-topics">
    <span class="t-topic">Agentic AI</span>
    <span class="t-topic">LLM Systems</span>
    <span class="t-topic">Autonomous Simulation</span>
    <span class="t-topic">Autonomous Experiments</span>
    <span class="t-topic">Verification</span>
    <span class="t-topic">Scientific Reasoning</span>
  </div>
</div>

<!-- ============================================================
     STATEMENT CALLOUT
     ============================================================ -->

<div class="t-statement">
  A detailed teaching statement is available <a href="/assets/pdf/teaching_statement.pdf">here</a>.
</div>

</div>
