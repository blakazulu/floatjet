export interface TeamMember {
  slug: string;
  name: string;
  title: string;
  role: "founder" | "writer";
  location: string;
  email: string;
  image: string;
  bioShort: string;
  bioLong: string;
  credentials: string[];
  expertiseAreas: {
    primary: string[];
    secondary: string[];
  };
  social?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
  categories: string[];
  schema: Record<string, unknown>;
}

export const team: TeamMember[] = [
  {
    slug: "liraz-amir",
    name: "Liraz Amir",
    title: "Founder & Lead Developer",
    role: "founder",
    location: "Tel Aviv, Israel",
    email: "liraz@floatjet.com",
    image: "/images/team/liraz-amir.png",
    bioShort:
      "Liraz is a Senior Front-End Developer with 10+ years building web and mobile applications. He's led teams through major framework migrations, taught hundreds of students full-stack development, and built FloatJet from scratch using Astro. When he's not coding, he's probably testing the remote work tools he writes about.",
    bioLong:
      "Liraz Amir is a Senior Front-End Developer with over a decade of experience spanning front-end, back-end, and mobile development. He currently leads front-end development, where he's converted legacy systems from Angular.JS to modern Angular, built mobile applications, and redesigned system architecture for better user experiences.\n\nBefore that, he spent nearly three years as a Full Stack Developer, working with C#, .NET, Angular, and Azure to build proof-of-concept products and ship new features. He also spent four years teaching full-stack and mobile development at a College, training hundreds of students in everything from HTML to Swift.\n\nHe built FloatJet because he got tired of reading generic \"best tools\" lists that clearly weren't written by people who actually work remotely. Every recommendation on this site gets tested in a real remote work setup—his own.",
    credentials: [
      "Senior Front-End Developer, 10+ years experience",
      "Led Angular.JS to Angular 13+ migrations",
      "Former Full Stack Developer (C#, .NET, Azure)",
      "College Lecturer, Full Stack & Mobile Development (4 years)",
      "Built and shipped web apps, mobile apps, and landing pages",
    ],
    expertiseAreas: {
      primary: [
        "Front-End Development",
        "Angular & TypeScript",
        "System Architecture",
        "Mobile Development",
        "Performance Optimization",
      ],
      secondary: [
        "C# & .NET",
        "Azure Cloud Services",
        "Technical Instruction",
        "Remote Work Tools",
      ],
    },
    social: {
      linkedin: "https://www.linkedin.com/in/liraz-amir/",
      github: "https://github.com/blakazulu",
    },
    categories: ["Technical oversight", "Platform development"],
    schema: {
      "@type": "Person",
      name: "Liraz Amir",
      jobTitle: "Founder & Lead Developer",
      description:
        "Senior Front-End Developer with 10+ years experience. Built FloatJet to help remote workers find tools that actually work.",
      knowsAbout: [
        "Front-End Development",
        "Angular",
        "TypeScript",
        "Web Development",
        "Mobile Development",
        "System Architecture",
        "Remote Work Tools",
      ],
      sameAs: ["https://www.linkedin.com/in/liraz-amir/", "https://github.com/blakazulu"],
      url: "https://floatjet.com/authors/liraz-amir/",
    },
  },
];

export function getTeamMember(slug: string): TeamMember | undefined {
  return team.find((member) => member.slug === slug);
}

export function getFounder(): TeamMember | undefined {
  return team.find((member) => member.role === "founder");
}
