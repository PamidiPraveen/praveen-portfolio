/**
 * ---------------------------------------------------------------------------
 * SITE CONTENT
 * ---------------------------------------------------------------------------
 * Every piece of copy on the site lives here. Change text without touching a
 * single component. Layout is driven by geometry (see `tokens.ts`), never by
 * the length of the content that happens to be sitting in it today.
 * ---------------------------------------------------------------------------
 */

export const site = {
  /** Shown letter-by-letter in the hero. Keep it short — it is the poster. */
  displayWord: 'PORTFOLIO',
  /** Index of the character in `displayWord` that the face illustration replaces. */
  faceLetterIndex: 5, // P-O-R-T-F-[O]-L-I-O

  eyebrow: 'AI ENGINEER / DEVELOPER',
  year: '',

  firstName: 'NAGA PRAVEEN PAMIDI',
  /**
   * The signature form the hero reveals as the visitor starts scrolling —
   * deliberately separate from `firstName`, which the introduction, the poster
   * and the contact note all use.
   */
  signatureName: 'NAGA PRAVEEN',
  lastName: 'PAMIDI',

  /**
   * An invitation, not a job application. "Available to talk" rather than
   * "available for hire" is the whole difference between a personal site and
   * a job board, and it is carried by four words.
   */
  connect: {
    status: 'is open to work',
    cta: "Let's connect",
    /** Points at the CONTACT section. Swap for a mailto: if you prefer. */
    href: '#contact',
  },

  intro: {
    heading: 'HELLO',
    lede: "Hi, I'm NAGA PRAVEEN PAMIDI.",
    paragraphs: [
      "I'm a Computer Science student and aspiring software engineer building full-stack web applications with Python, Flask, React and MongoDB.",
      'I have a solid foundation in data structures, algorithms and object-oriented programming, and hands-on experience shipping backend services and responsive interfaces end to end.',
      "Right now I'm focused on scalable system design, clean code and continuously picking up new tools across the stack.",
    ],
  },

  education: {
    heading: 'EDUCATION',
    items: [
      {
        degree: 'B.Tech, Computer Science & Engineering',
        detail: "St Ann's College of Engineering & Technology | 2023 – 2027",
      },
      {
        degree: 'Intermediate',
        detail: 'M.S. Reddy Junior College, Guntur | 2022 – 2023',
      },
      {
        degree: 'Diploma, Animal Husbandry',
        detail: 'AH Polytechnic College | 2019 – 2022',
      },
      {
        degree: 'SSC',
        detail: 'Zilla Parishad High School | 2018 – 20',
      },
    ],
  },

  skills: {
    heading: 'SKILLS',
    /**
     * Three columns, two rows. Original ink-on-paper glyphs (not traced brand
     * marks) in `/public/assets/skills/`, styled to match the rest of the
     * page — alternating paper and near-black tiles, same as the reference's
     * mixed treatment.
     */
    items: [
      { label: 'Python', short: 'Py', src: '/assets/skills/python.svg', scale: 1 },
      { label: 'Flask', short: 'Fl', src: '/assets/skills/flask.svg', scale: 1 },
      { label: 'React.js', short: 'Rx', src: '/assets/skills/react.svg', scale: 1 },
      { label: 'MongoDB', short: 'Mo', src: '/assets/skills/mongodb.svg', scale: 1 },
      { label: 'MySQL', short: 'Sq', src: '/assets/skills/mysql.svg', scale: 1 },
      { label: 'Java', short: 'Jv', src: '/assets/skills/java.svg', scale: 1 },
    ] as { label: string; short: string; src: string | null; scale: number }[],
  },

  /**
   * Certifications — same card language as the projects, one glance below.
   */
  certifications: {
    heading: 'CERTIFICATIONS',
    items: [
      {
        quote: 'Core Python — syntax, data structures and OOP.',
        author: 'Python Certification, CodeTantra',
        rotation: -3.5,
        drop: 2,
        shade: 0.25,
        skew: -0.6,
        indent: 1,
      },
      {
        quote: 'AICTE-affiliated short-term training program.',
        author: 'National Short-Term Training Program — AICTE & Brainovision',
        rotation: 2,
        drop: 8,
        shade: 0.5,
        skew: 0.5,
        indent: 0,
      },
      {
        quote: '"Online Examination System" — presented at ICRAIICE-2025.',
        author: 'Technical Paper Presentation, ICRAIICE-2025',
        rotation: -1.5,
        drop: 0,
        shade: 0.35,
        skew: -0.4,
        indent: 2,
      },
    ],
  },

  /**
   * THE STU — abbreviated on purpose. Do not expand it. Repurposed here as
   * the project showcase: three cards, left to right, one per build.
   *
   * Every angle, drop, shadow weight and slant of handwriting is a value here
   * rather than a random seed, because randomness reads as a bug and a
   * decision reads as a hand. Rotations follow the brief: -5 / +1.2 / +4.
   */
  studio: {
    heading: 'PROJECTS',
    items: [
      {
        quote: 'Multi-user exam platform — Flask, MongoDB, role-based workflows.',
        author: 'Online Examination System',
        rotation: -5,
        drop: 0,
        shade: 0.2,
        skew: -0.9,
        indent: 1,
        objectPosition: '50% 42%',
        href: 'https://github.com/PamidiPraveen' as string | null,
      },
      {
        quote: 'AI chatbot ticket booking — React + TypeScript, Flask, PyMongo.',
        author: 'BookAura',
        rotation: 1.2,
        drop: 11,
        shade: 0.6,
        skew: 0.7,
        indent: 0,
        objectPosition: '50% 50%',
        href: 'https://github.com/PamidiPraveen' as string | null,
      },
      {
        quote: 'Stock trend analysis — data preprocessing and predictive modelling.',
        author: 'Stock Trend Prediction',
        rotation: 4,
        drop: 3,
        shade: 0.35,
        skew: -0.5,
        indent: 2,
        objectPosition: '50% 40%',
        href: 'https://github.com/PamidiPraveen' as string | null,
      },
    ],
  },

  experience: {
    heading: 'EXPERIENCE',
    items: [
      { period: 'June 2026 – July 2026', role: 'AI Intern', company: 'TR Tech NexZen Solutions Pvt. Ltd' },
      { period: '2023 – Present', role: 'Department Club Coordinator', company: 'CSE Department' },
    ],
  },

  /**
   * The last page. The giant heading IS the button — there is no separate
   * rectangular CTA, the typography is the interface.
   */
  footer: {
    heading: "Let's connect",
    acknowledged: 'See you there',
    sub: 'Have a role, a project, or simply want to say hello?',
    /** The ask goes to the inbox. Swap for a Calendly or contact route later. */
    href: 'mailto:pamidinagapraveen@gmail.com',
    marquee: ['PRAVEEN', 'DEVELOPER', 'BUILDER'],
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/praveenpamidi/' as string | null },
      { label: 'GitHub', href: 'https://github.com/PamidiPraveen' as string | null },
      { label: 'Email', href: 'mailto:pamidinagapraveen@gmail.com' as string | null },
      { label: 'Resume', href: '/resume/Resume_003.pdf' as string | null },
    ],
  },
} as const

export type Site = typeof site
