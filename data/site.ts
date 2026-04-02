export type Metric = {
  label: string;
  value: string;
};

export type ProjectStudy = {
  slug: string;
  title: string;
  category: string;
  year: string;
  hero: string;
  summary: string;
  stack: string[];
  metrics: Metric[];
  sections: {
    label: string;
    title: string;
    body: string;
  }[];
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export const featuredProjects: ProjectStudy[] = [
  {
    slug: "pulse-commerce",
    title: "Pulse Commerce",
    category: "Conversion-first storefront",
    year: "2026",
    hero: "A luxury-feeling commerce experience engineered to turn hesitation into momentum.",
    summary:
      "Built for a fashion startup that needed premium perception without enterprise bloat. The result paired cinematic product storytelling with sharp interaction design and ruthless performance budgets.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Content Modeling"],
    metrics: [
      { label: "Conversion lift", value: "+28%" },
      { label: "Mobile speed", value: "95+" },
      { label: "Checkout drop-off", value: "-18%" },
    ],
    sections: [
      {
        label: "Problem",
        title: "The brand looked expensive in photos but average in the browser.",
        body:
          "The original storefront blended in with commodity themes. It failed to create anticipation, trust, or a sense of crafted value once users landed.",
      },
      {
        label: "Research",
        title: "Studied where confidence was leaking.",
        body:
          "Mapped user hesitation across product discovery, size guidance, and checkout. Competitor teardowns showed the strongest brands treated motion and spacing like part of the product, not decoration.",
      },
      {
        label: "Pain Points",
        title: "The friction was emotional and functional.",
        body:
          "Weak hierarchy, repetitive cards, and inconsistent product context made the experience feel generic. On mobile, touch targets and visual rhythm broke the premium illusion.",
      },
      {
        label: "Wireframes",
        title: "Started with structure, not style.",
        body:
          "Explored modular product narratives, sticky story rails, and an editorial grid that could adapt from campaign launches to evergreen collections without rewriting the system.",
      },
      {
        label: "Iterations",
        title: "Cut anything that felt performative.",
        body:
          "Several early concepts looked flashy but slowed browsing. Refined the motion system into brief, magnetic interactions that sharpened focus instead of stealing it.",
      },
      {
        label: "Final UI",
        title: "Cinematic, tactile, and conversion-aware.",
        body:
          "Built layered media, soft glows, glass surfaces, and modular blocks that made the shopping flow feel intentional from landing to checkout.",
      },
      {
        label: "Engineering",
        title: "Made motion premium without sacrificing speed.",
        body:
          "Used streaming-friendly layouts, disciplined image strategy, and scoped animation so the experience stayed rich on modern hardware and still respectable on weaker devices.",
      },
      {
        label: "Results",
        title: "The product finally felt worth the price tag.",
        body:
          "The redesigned storefront increased product engagement, improved add-to-cart confidence, and gave the startup a brand presence that could compete above its size.",
      },
      {
        label: "Learnings",
        title: "Taste is only real when it survives constraints.",
        body:
          "The project reinforced that premium UI is not more decoration. It is better prioritization, better restraint, and better engineering discipline.",
      },
    ],
  },
  {
    slug: "signal-os",
    title: "Signal OS",
    category: "Internal operations platform",
    year: "2025",
    hero: "A command-center dashboard designed to make complex operations feel calm, sharp, and inevitable.",
    summary:
      "Reimagined an internal platform for teams juggling campaigns, approvals, and deadlines. The experience focused on information density with control, clarity, and real visual confidence.",
    stack: ["Next.js", "TypeScript", "Design Systems", "Charts", "Motion UX"],
    metrics: [
      { label: "Task completion", value: "+34%" },
      { label: "Average training time", value: "-41%" },
      { label: "Operator confidence", value: "High" },
    ],
    sections: [
      {
        label: "Problem",
        title: "The old dashboard had data, but not command.",
        body:
          "Teams were switching between fragmented panels, losing state, and second-guessing actions because the interface never felt authoritative.",
      },
      {
        label: "Research",
        title: "Watched where attention collapsed.",
        body:
          "Shadowed operators during live use and found that priority ambiguity caused the most friction. The issue was less about missing features and more about weak narrative flow.",
      },
      {
        label: "Pain Points",
        title: "Everything competed for importance.",
        body:
          "Charts shouted over tasks, alerts lacked visual urgency, and the system gave users no reliable sense of what deserved action first.",
      },
      {
        label: "Wireframes",
        title: "Restructured around decision paths.",
        body:
          "Created a split-grid architecture with persistent context zones, fast filters, and a modular card language that scaled from overviews to deep work.",
      },
      {
        label: "Iterations",
        title: "Reduced visual noise without losing power.",
        body:
          "Tuned density, contrast, and spacing repeatedly until the interface felt intense but controlled, like a cockpit instead of a spreadsheet.",
      },
      {
        label: "Final UI",
        title: "Data-rich, but still cinematic.",
        body:
          "Introduced layered cards, ambient depth, and motion cues that helped users scan quickly while preserving a strong product identity.",
      },
      {
        label: "Engineering",
        title: "Focused on resilient interaction architecture.",
        body:
          "Built reusable primitives for tiles, data clusters, and async states so the team could expand the platform without design drift.",
      },
      {
        label: "Results",
        title: "The product started feeling like a competitive edge.",
        body:
          "Users completed workflows faster, onboarding got lighter, and the interface became a source of confidence rather than fatigue.",
      },
      {
        label: "Learnings",
        title: "Clarity can still feel luxurious.",
        body:
          "Operational products do not need to look sterile. Precision, contrast, and disciplined motion can make complex tools feel premium.",
      },
    ],
  },
  {
    slug: "nova-notes",
    title: "Nova Notes",
    category: "AI-assisted writing workspace",
    year: "2024",
    hero: "A focused writing product that balanced calm concentration with a future-facing interface language.",
    summary:
      "Designed and built an AI note-taking experience for people who want fewer interruptions and smarter support. The product centered on flow state instead of flashy novelty.",
    stack: ["Next.js", "TypeScript", "AI UX", "Realtime UI", "Framer Motion"],
    metrics: [
      { label: "Weekly retention", value: "+22%" },
      { label: "Session depth", value: "+31%" },
      { label: "User delight", value: "4.8/5" },
    ],
    sections: [
      {
        label: "Problem",
        title: "Most AI writing tools feel busy or robotic.",
        body:
          "Users wanted assistance without losing ownership of the page. Existing tools overexposed controls and under-designed the emotional environment of writing.",
      },
      {
        label: "Research",
        title: "Flow state became the north star.",
        body:
          "Interviewed heavy note-takers and students to understand when AI feels empowering versus intrusive. The answer was timing, context, and tone.",
      },
      {
        label: "Pain Points",
        title: "The interface kept interrupting thought.",
        body:
          "Too many floating controls, poor hierarchy, and weak context cues made suggestions feel like interruptions rather than extensions of the writer.",
      },
      {
        label: "Wireframes",
        title: "Reduced the workspace to its essentials.",
        body:
          "Sketched distraction-free shells, sidecar assistance panels, and a soft information ladder that revealed power features only when users reached for them.",
      },
      {
        label: "Iterations",
        title: "Kept refining the tone of assistance.",
        body:
          "Adjusted spacing, animation, and message framing so AI suggestions felt companionable and precise instead of loud.",
      },
      {
        label: "Final UI",
        title: "Quiet by default, potent on demand.",
        body:
          "Combined a low-noise editor, subtle gradients, and progressive disclosure patterns to support concentration while keeping advanced capabilities within reach.",
      },
      {
        label: "Engineering",
        title: "Handled complexity without exposing it.",
        body:
          "Separated editor state, generation state, and UI state cleanly so the product felt stable even while orchestrating async intelligence under the hood.",
      },
      {
        label: "Results",
        title: "Users stayed longer and wrote more.",
        body:
          "The product encouraged deeper sessions, improved return frequency, and validated that thoughtful AI interface design can feel both modern and humane.",
      },
      {
        label: "Learnings",
        title: "The best AI interfaces feel inevitable.",
        body:
          "Useful intelligence should not dominate the screen. It should arrive with timing, confidence, and restraint.",
      },
    ],
  },
];

export const experience = [
  {
    period: "2025 - Present",
    role: "Frontend Engineer",
    company: "Independent Product Work",
    description:
      "Designing and shipping portfolio-grade product experiences, case studies, experiments, and systems that sharpen both taste and technical range.",
  },
  {
    period: "2024 - 2025",
    role: "UI Engineer",
    company: "Startup Collaborations",
    description:
      "Worked across marketing sites, dashboards, and product surfaces with a focus on performance, motion design, and turning rough ideas into polished interfaces.",
  },
  {
    period: "2023 - 2024",
    role: "Obsessed Learner",
    company: "Self-Directed Growth Arc",
    description:
      "Built projects relentlessly, studied premium product experiences, and trained the eye for hierarchy, interaction detail, and engineering standards.",
  },
];

export const capabilities = [
  "Premium UI systems",
  "Next.js App Router",
  "TypeScript architecture",
  "Motion-driven interfaces",
  "Design-to-code translation",
  "Interactive storytelling",
  "Responsive systems",
  "Performance discipline",
];
