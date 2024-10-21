import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Ilyasa",
  lastName: "Ayasy",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Backend Developer",
  avatar: "/images/profile.png",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ayasy-el/",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ilyasa-ayasy-18bbb1298/",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/ayasy.el",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:ayasy.elg@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hi There👋 I’m Backend Developer</>,
  subline: (
    <>
      Hi, I’m Ayasy, a technopreneur with a strong interest in backend development and a passion for
      cybersecurity and machine learning. I love combining my programming and analytical skills to
      create innovative tech solutions
    </>
  ),
};

const about = {
  label: "About",
  title: "Download CV",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Ayasy is a motivated individual with a keen interest in technopreneurship, aspiring to
        become a serial technopreneur. With a strong foundation in backend development, he also
        holds a growing enthusiasm for cybersecurity and machine learning, recognizing the potential
        of these fields in shaping innovative tech solutions. Possessing excellent programming
        abilities and sharp analytical skills, Ayasy is driven to merge entrepreneurial pursuits
        with cutting-edge technology to create impactful and scalable solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "My Experience",
    experiences: [
      {
        company: "UKM Softdev",
        timeframe: "2024 - Present",
        role: "Coordinator Hipster",
        achievements: [
          <>
            Responsible for designing the curriculum, sourcing speakers, and coordinating the
            overall program for the UKM Software Development community
          </>,
        ],
        images: [],
      },
      {
        company: "IONIC Competition 2024",
        timeframe: "2024",
        role: "Curriculum and Assessment Coordinator",
        achievements: [
          <>
            Developed and designed the competition syllabus, created questions, and evaluated
            participants' answers
          </>,
        ],
        images: [],
      },
      {
        company: "Internship at Edufic",
        timeframe: "2024",
        role: "Frontend Developer Intern",
        achievements: [
          <>
            Developed a teacher scheduling admin portal using React, improving the user interface
            and functionality for managing schedules efficiently.
          </>,
        ],
        images: [],
      },
      {
        company: "High School Student Council",
        timeframe: "2021 - 2022",
        role: "Head of IT Division",
        achievements: [],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Politeknik Elektronika Negeri Surabaya",
        description: <>Bachelor Degree in Internet Engineering Technology</>,
      },
      {
        name: "SMA IT Ibnu Abbas Klaten",
        description: <>High School Diploma in Science</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Technology & Tools",
        description: <></>,
        images: [
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
            alt: "React",
            width: 3,
            height: 3,
          },
          {
            src: "https://svgshare.com/i/1BiM.svg",
            alt: "Nextjs",
            width: 3,
            height: 3,
          },
          {
            src: "https://www.svgrepo.com/show/376332/laravel.svg",
            alt: "laravel",
            width: 3,
            height: 3,
          },
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg",
            alt: "NestJs",
            width: 3,
            height: 3,
          },
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
            alt: "Python",
            width: 3,
            height: 3,
          },
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
            alt: "C++",
            width: 3,
            height: 3,
          },
          {
            src: "https://www.svgrepo.com/show/184143/java.svg",
            alt: "Java",
            width: 3,
            height: 3,
          },
          {
            src: "https://www.svgrepo.com/show/373635/go-gopher.svg",
            alt: "Golang",
            width: 3,
            height: 3,
          },
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
            alt: "Typescript",
            width: 3,
            height: 3,
          },
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
            alt: "Graphql",
            width: 3,
            height: 3,
          },
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
            alt: "Postgresql",
            width: 3,
            height: 3,
          },
          {
            src: "https://www.svgrepo.com/show/331488/mongodb.svg",
            alt: "Mongodb",
            width: 3,
            height: 3,
          },
          {
            src: "https://www.svgrepo.com/show/349342/docker.svg",
            alt: "Docker",
            width: 3,
            height: 3,
          },
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
            alt: "Docker",
            width: 3,
            height: 3,
          },
          {
            src: "https://www.svgrepo.com/show/349296/arch-linux.svg",
            alt: "Arch Linux",
            width: 3,
            height: 3,
          },
          {
            src: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg",
            alt: "Tableau",
            width: 3,
            height: 3,
          },
          {
            src: "https://svgshare.com/i/1BhU.svg",
            alt: "Figma",
            width: 3,
            height: 3,
          },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Project",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
