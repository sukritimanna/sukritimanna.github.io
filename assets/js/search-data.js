// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "Autonomous AI workflows for materials discovery, design, and simulation",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "50 peer-reviewed publications · 1925+ citations · h-index 23 · i10-index 30",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Open-source code and GitHub activity",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Curriculum vitae",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-our-paper-machine-learning-simple-interpretable-short-range-potential-for-silica-koneru-et-al-journal-of-chemical-theory-and-computation-was-featured-on-the-cover-of-the-journal",
          title: 'Our paper Machine Learning Simple Interpretable Short Range Potential for Silica (Koneru et...',
          description: "",
          section: "News",},{id: "news-invited-talk-at-the-department-of-mechanical-engineering-indian-institute-of-science-bangalore-ai-ml-driven-multiscale-modeling-for-materials-and-devices",
          title: 'Invited talk at the Department of Mechanical Engineering, Indian Institute of Science, Bangalore:...',
          description: "",
          section: "News",},{id: "news-paper-published-in-materials-today-solid-lubricant-mo-tic-tₓ-mxene-coatings-with-prolonged-macroscale-superlubricity-sunkara-et-al",
          title: 'Paper published in Materials Today: Solid Lubricant Mo₂TiC₂Tₓ MXene Coatings with Prolonged Macroscale...',
          description: "",
          section: "News",},{id: "news-paper-accepted-in-npj-computational-materials-physically-interpretable-interatomic-potentials-via-symbolic-regression-and-reinforcement-learning-varughese-et-al",
          title: 'Paper accepted in npj Computational Materials: Physically Interpretable Interatomic Potentials via Symbolic Regression...',
          description: "",
          section: "News",},{id: "news-our-preprint-automoose-an-agentic-ai-for-autonomous-phase-field-simulation-is-now-on-arxiv-2603-20986-the-framework-introduces-a-multi-agent-llm-system-that-automates-moose-input-generation-execution-and-post-processing",
          title: 'Our preprint AutoMOOSE: An Agentic AI for Autonomous Phase-Field Simulation is now on...',
          description: "",
          section: "News",},{id: "projects-automoose",
          title: 'AutoMOOSE',
          description: "Agentic AI for autonomous phase-field simulation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/automoose/";
            },},{id: "projects-blast",
          title: 'BLAST',
          description: "Bridging Length/timescales via Atomistic Simulation Toolkit",
          section: "Projects",handler: () => {
              window.location.href = "/projects/blast/";
            },},{id: "projects-casting",
          title: 'CASTING',
          description: "Continuous Action Space Tree search for INverse desiGn",
          section: "Projects",handler: () => {
              window.location.href = "/projects/casting/";
            },},{id: "projects-quantum-cluster-database",
          title: 'Quantum Cluster Database',
          description: "70,000+ DFT-computed atomically precise cluster structures across 55 elements",
          section: "Projects",handler: () => {
              window.location.href = "/projects/quantum-cluster-database/";
            },},{id: "projects-tem-scientist",
          title: 'TEM-Scientist',
          description: "Verified experimental protocols for agentic electron microscopy",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tem-scientist/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%75%6B%72%69%74%69.%6D%61%6E%6E%61@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/sukritimanna", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/sukriti-manna-01930538", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-3193-7803", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Ag2wffgAAAAJ", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
