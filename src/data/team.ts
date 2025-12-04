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
      sameAs: [
        "https://www.linkedin.com/in/liraz-amir/",
        "https://github.com/blakazulu",
      ],
      url: "https://floatjet.com/authors/liraz-amir",
    },
  },
  {
    slug: "marcus-chen",
    name: "Marcus Chen",
    title: "Senior Technology Editor",
    role: "writer",
    location: "Portland, Oregon",
    email: "marcus@floatjet.com",
    image: "/images/team/marcus-chen.jpg",
    bioShort:
      "I've spent 12 years in tech—5 as a software engineer, the rest testing products and writing about them. 500+ reviews at this point. I read the benchmark data so you don't have to. My job is figuring out what actually works versus what just looks good in a press release.",
    bioLong:
      "Started as a software engineer at a San Francisco startup in 2012. Wrote code for five years. Then I realized I was spending more time researching tools than using them—so I made that the job instead.\n\nI've tested over 500 products for remote workers. Laptops, headphones, webcams, hosting platforms, project management tools. Everything gets at least two weeks of real use before I write about it. I run tests from a converted garage in Portland—third home office I've built, after Austin and Denver.\n\nThe engineering background helps. I actually read spec sheets. I check real-world battery life, not manufacturer claims. I ask questions like \"but does it work on a Tuesday afternoon Zoom call with 47 browser tabs open?\" Because that's real life.\n\nMy philosophy: the best tech is the tech you forget you're using. It just... works?",
    credentials: [
      "B.S. Computer Science, UC Berkeley (2012)",
      "Former Software Engineer, 5 years at early-stage startups",
      "500+ products tested and reviewed",
      "6 years fully remote work experience",
      "Home offices built in 3 different cities",
      "Regular speaker at remote work conferences",
    ],
    expertiseAreas: {
      primary: [
        "Laptops and computer hardware",
        "Monitors and display technology",
        "Audio gear (headphones, microphones, speakers, earbuds)",
        "Webcams and video equipment",
        "SaaS and productivity software",
        "Web hosting and cloud platforms",
      ],
      secondary: [
        "Travel tech and accessories",
        "USB-C and connectivity standards",
        "Video conferencing optimization",
        "Cloud storage and backup systems",
      ],
    },
    categories: ["SaaS", "Hosting", "Computers", "Audio", "Accessories"],
    schema: {
      "@type": "Person",
      name: "Marcus Chen",
      jobTitle: "Senior Technology Editor",
      description:
        "Technology editor with 12 years in tech, from software engineering to product testing. Reviewed 500+ remote work products.",
      knowsAbout: [
        "Laptops",
        "Computer Hardware",
        "Audio Equipment",
        "Web Hosting",
        "SaaS Software",
        "Remote Work Technology",
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "UC Berkeley",
      },
      url: "https://floatjet.com/authors/marcus-chen",
    },
  },
  {
    slug: "sarah-mitchell",
    name: "Sarah Mitchell",
    title: "Remote Work Strategist",
    role: "writer",
    location: "Asheville, North Carolina",
    email: "sarah@floatjet.com",
    image: "/images/team/sarah-mitchell.jpg",
    bioShort:
      "Eight years doing HR and operations for remote teams. Onboarded hundreds of people. Then I threw out my back in 2019 and spent six months talking to physical therapists about chairs. Now I write about workspaces and productivity—mostly so other people don't have to learn the hard way like I did.",
    bioLong:
      "Here's the thing: I've made every remote work mistake you can think of. Usually before anyone else on the team.\n\nEight years in HR and operations. Helped 50-something teams go remote. Onboarded hundreds of employees who had no idea how to work from home. Learned a lot. Mostly what NOT to do—the productivity theater, the performative Slack check-ins, the meetings that should've been a three-line email.\n\n2019. Threw out my back. L4-L5. You ever try to sit at a desk when sitting hurts? I spent six months obsessing over chairs. Calling physical therapists. Measuring desk heights at 2am. It was a weird time. Now I know way too much about lumbar support.\n\nBeen remote since 2016. Started in Chicago. Then Nashville. Now I'm in Asheville. Got a master's in Org Psych from Northwestern. Fancy degree, sure. Mostly it means I've read too many research papers. The ones that prove what we all already know—grinding yourself into dust doesn't actually work.\n\nLook, productivity advice is everywhere. Most of it is garbage. What I care about: can you do good work AND still have a life after 5pm? If you're exhausted all the time, that's not a personal failing. Something in the setup is wrong.",
    credentials: [
      "M.A. Organizational Psychology, Northwestern University (2014)",
      "Former Head of Remote Operations at a 200-person startup",
      "Certified Ergonomics Assessment Specialist",
      "50+ remote teams helped with transition",
      "8 years fully remote work experience",
      "Recovered from work-from-home burnout (twice)",
    ],
    expertiseAreas: {
      primary: [
        "Home office setup and ergonomics",
        "Productivity systems and focus techniques",
        "Team communication and async collaboration",
        "Remote meeting best practices",
        "Standing desks, chairs, and office furniture",
      ],
      secondary: [
        "Remote team management",
        "Work-from-home boundaries",
        "Workspace organization and cable management",
        "Morning routines and daily structure",
      ],
    },
    categories: ["Communication", "Productivity", "Setup", "Furniture"],
    schema: {
      "@type": "Person",
      name: "Sarah Mitchell",
      jobTitle: "Remote Work Strategist",
      description:
        "Remote work strategist with M.A. in Organizational Psychology. Helped 50+ teams transition to remote-first work.",
      knowsAbout: [
        "Remote Work",
        "Productivity",
        "Ergonomics",
        "Team Communication",
        "Home Office Setup",
        "Organizational Psychology",
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Northwestern University",
      },
      url: "https://floatjet.com/authors/sarah-mitchell",
    },
  },
  {
    slug: "daniel-brooks",
    name: "Daniel Brooks",
    title: "Digital Nomad Finance Editor",
    role: "writer",
    location: "Currently Lisbon, Portugal (nomadic)",
    email: "daniel@floatjet.com",
    image: "/images/team/daniel-brooks.jpg",
    bioShort:
      "So there I was in a Chiang Mai coworking space, realizing I'd just made a $4,200 tax mistake. That was year one. Seven years and 34 countries later, I've figured out freelancer taxes, international banking, and why you never use café WiFi without a VPN. Former CPA. Current nomad. Here to save you the tuition I paid.",
    bioLong:
      "The first time I filed US taxes from abroad, I was in Bali. Made three mistakes. Cost me $4,200. The second time, different mistakes—only $1,800. By year three, I finally got it right. That's basically my origin story.\n\nBefore all this, I spent 6 years as a CPA in Austin. Small businesses, freelancers, the occasional messy divorce settlement. Good work, but I kept looking at my clients who worked remotely and thinking... why am I the one stuck in an office?\n\nSo I took a \"sabbatical.\" That was 2017. I'm still on it.\n\nSeven years now. 34 countries. I've set up Wise accounts in Lisbon, filed taxes from a hostel in Thailand, and learned the hard way that café WiFi in Bangkok will absolutely get your client data stolen if you're not running a VPN. I've survived three international tax audits—won all of them, but I don't recommend the experience.\n\nMy goal here is simple: help you avoid the expensive lessons I learned. Taxes, banking, security, visas—I've screwed up all of it at least once. Might as well make that useful.",
    credentials: [
      "CPA (Certified Public Accountant), Texas State Board",
      "B.S. Accounting, University of Texas at Austin (2013)",
      "6 years at tax firm specializing in freelancers/small business",
      "34 countries worked from remotely",
      "7 years as a full-time digital nomad",
      "Survived 3 international tax audits (and won)",
    ],
    expertiseAreas: {
      primary: [
        "Freelancer taxes and deductions",
        "International banking and multi-currency accounts",
        "Payment platforms and international transfers",
        "Digital nomad visas and legal considerations",
        "VPNs and online security for travelers",
        "Travel logistics for remote workers",
      ],
      secondary: [
        "Invoicing and client payments",
        "Business structure for nomads",
        "Coworking spaces and nomad hubs",
        "Travel insurance and health coverage",
        "Café WiFi security",
      ],
    },
    categories: ["Travel", "Finance", "Security", "VPN"],
    schema: {
      "@type": "Person",
      name: "Daniel Brooks",
      jobTitle: "Digital Nomad Finance Editor",
      description:
        "CPA turned digital nomad. 7 years working remotely from 34 countries. Specializes in freelancer taxes and international finance.",
      knowsAbout: [
        "Freelancer Taxes",
        "International Banking",
        "Digital Nomad Lifestyle",
        "Online Security",
        "VPN Technology",
        "Multi-Currency Finance",
      ],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Professional License",
        name: "Certified Public Accountant (CPA)",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University of Texas at Austin",
      },
      url: "https://floatjet.com/authors/daniel-brooks",
    },
  },
];

export function getTeamMember(slug: string): TeamMember | undefined {
  return team.find((member) => member.slug === slug);
}

export function getWriters(): TeamMember[] {
  return team.filter((member) => member.role === "writer");
}

export function getFounder(): TeamMember | undefined {
  return team.find((member) => member.role === "founder");
}
