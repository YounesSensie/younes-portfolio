
import { AiOutlineApi } from "react-icons/ai";
import {  FaJsSquare, FaMobileAlt, FaPython, FaSearch } from "react-icons/fa";
import {
  FaCss3,
  FaFacebook,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaLinkedin,
  FaReact,

} from "react-icons/fa6";
import { FcDataEncryption } from "react-icons/fc";
import { MdOutlineSpeed } from "react-icons/md";
import {
  SiAxios,
  SiDocker,
  SiExpress,
  SiFlask,
  SiGraphql,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiOpenai,
  SiPostgresql,
  SiPrisma,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { z } from "zod";


export const reviews = [
  {
    id: 1,
    name: "Formakt_Bac",
    body: "Really, your work is perfectly executed. Thank you again, and this definitely won't be the last time we work together, God willing.",
  },
  {
    id: 2,
    name: "Abdelhak Sassi",
    body: "التعامل معاك كان محترف للغاية، وفعلاً متمكن من خدمتك. عمل رائع يا مهندس!",
  },
  {
    id: 3,
    name: "Montassar Agrebi",
    body: "I haven’t seen anyone who pays attention to detail like you do. Everything is perfectly fine-tuned.",
  },
  {
    id: 4,
    name: "Amine Arbi",
    body: "أنا سعيد جداً بخدمتي معاك. الحمد لله، الخدمة كانت فوق كل توقعاتي",
  },
  {
    id: 5,
    name: "Barakah Designs",
    body: "إنت شخص محترم برشة، من أرقى الناس اللي تعاملت معاهم. إن شاء الله بالتوفيق",
  },
  {
    id: 6,
    name: "Moez Dhifalla",
    body: "Very beautiful work, and you listen to all the feedback and implement it with the same quality.",
  },
];

export const projects = [
  
  {
    id: 3,
    title: "E-Learning Paltforme",
    des: "Built a cutting-edge e-learning platform from scratch with Next.js, TypeScript, PostgreSQL, and Tailwind CSS. Fully integrated Zoom API to automate sessions, role-based management, and seamless online meeting control.",
    img: "/learningapp.png",
    iconsList: ["/next.svg", "/typescript.svg", "/postgresql.svg", "/vercel.svg", "/tailwind.svg"],
    link: "https://formakt-bac.vercel.app/",
    sourceCode: "#",
  },
  {
    id: 4,
    title: "DRM  app",
    des: "Built a secure media platform with Next.js, TypeScript, Tailwind CSS, PostgreSQL, Prisma, and NextAuth. Integrated encryption algorithms and DRM (Widevine, PlayReady, FairPlay) to protect content against unauthorized sharing or downloads.",
    img: "/pdfapp.png",
    iconsList: ["/next.svg", "/ts.svg", "/tailwind.svg", "/postgresql.svg", "/git-colored.svg", "/vercel.svg"],
    link: "#",
    sourceCode: "#",
  },
  {
    id: 5,
    title: "CRM app",
    des: "Developed a dynamic CRM app with Next.js, TypeScript, PostgreSQL, Prisma, and Gemini API for intelligent data cleaning, automated task handling, sales tracking, and performance visualization using React charts.",
    img: "/erp.png",
    iconsList: ["/next.svg", "/typescript.svg", "/tailwind.svg", "/postgresql.svg" ,"/react.svg"],
    link: "/crm.mp4",
    sourceCode: "/crm.mp4",
  },
  {
    id: 1,
    title: "ToDoapp",
    des: "Created a dynamic Todo app from Figma design to deployment using Next.js, Tailwind CSS, PostgreSQL, and Prisma. Offers seamless task management with an intuitive UI and interactive features.",
    img: "/todoapp.png",
    iconsList: ["/postgresql.svg", "/typescript.svg", "/tailwind.svg", "/next.svg"],
    link: "#",
    sourceCode: "https://github.com/YounesSensie/MytodoApp",
  },
  {
    id: 2,
    title: "Covid-19 Tracker",
    des: "Developed a beginner-friendly COVID-19 tracker using the MERN stack, Chart.js, Netlify, and Firebase. Features real-time updates, interactive charts, and maps to visualize global and local pandemic data.",
    img: "/covidapp.png",
    iconsList: ["/react.svg", "/js.svg", "/mongodb-colored.svg", "/firebase-colored.svg"],
    link: "https://covid-sellimi-app.netlify.app/",
    sourceCode: "#",
  },
  {
    id: 6,
    title: "Ancien Portfolio",
    des: "My first portfolio holds a special place in my heart—it marks when I fell in love with development. Built with React, Firebase, and Git, it’s my unforgettable first step.",
    img: "/portfolio.png",
    iconsList: ["/react.svg", "/js.svg", "/firebase-colored.svg", "/git-colored.svg"],
    link: "https://my-portfolio-younes.netlify.app/",
    sourceCode: "#",
  },
];

const date = new Date();
const yearsOfExperience = date.getFullYear() - 2022;
const projectsCompleted = 10;
const clients = 5;

export const aboutData = [
  {
    number: yearsOfExperience,
    text: "Years of Experience",
  },
  {
    number: projectsCompleted,
    text: "Project Completed",
  },
  {
    number: clients,
    text: "Clients",
  },
];

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const skills = [
   // 🚀 Front-End Development
   { id: 1, icon: <SiNextdotjs />, text: "Next.js" },
   { id: 2, icon: <FaReact />, text: "React.js" },
   { id: 3, icon: <FaJsSquare />, text: "JavaScript" },
   { id: 4, icon: <SiTypescript />, text: "TypeScript" },
   { id: 5, icon: <FaHtml5 />, text: "HTML" },
   { id: 6, icon: <FaCss3 />, text: "CSS" },
   { id: 7, icon: <SiTailwindcss />, text: "Tailwind CSS" },
   { id: 8, icon: <SiRedux />, text: "Redux Toolkit" },
   { id: 9, icon: <FaMobileAlt />, text: "Responsive Design" },
   { id: 10, icon: <FaSearch />, text: "SEO Best Practices" },
   { id: 11, icon: <MdOutlineSpeed />, text: "Web Performance Optimization" },
 
   // 🛠️ Back-End Development
   { id: 12, icon: <SiExpress />, text: "Express" },
   { id: 13, icon: <SiFlask />, text: "Flask" },
   { id: 14, icon: <FaPython />, text: "Python" },
   { id: 15, icon: <AiOutlineApi />, text: "REST APIs" },
   { id: 16, icon: <SiGraphql />, text: "GraphQL" },
 
   // 🗄️ Databases & ORMs
   { id: 17, icon: <SiMongodb />, text: "MongoDB" },
   { id: 18, icon: <SiPostgresql />, text: "PostgreSQL" },
   { id: 19, icon: <SiMysql />, text: "MySQL" },
   { id: 20, icon: <SiPrisma />, text: "Prisma ORM" },
 
   // ⚙️ Tools & Technologies
   { id: 21, icon: <SiAxios />, text: "Axios" },
   { id: 22, icon: <FaGitAlt />, text: "Git & GitHub" },
   { id: 23, icon: <SiDocker />, text: "Docker" },
   { id: 24, icon: <FcDataEncryption />, text: "Web Security" },
   { id: 25, icon: <SiOpenai />, text: "AI Integration" },


  
];

export const socialMedia = [
  {
    id: 1,
    link: "https://github.com/YounesSensie",
    icon: <FaGithub />,
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/younes-sellimi-32a0422b9/",
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    link: "https://www.facebook.com/profile.php?id=61555271227541",
    icon: <FaFacebook />,
  },
  
  {
    id: 5,
    link: "#",
    icon: <FaInstagram />,
  },
];

export const contactSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First name is required" })
    .max(255, { message: "First name is too long" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phoneNumber: z
    .string()
    .min(4, { message: "Phone number is too short" })
    .regex(
      /^\+\d{1,3}\d{4,14}$/,
      "Phone Number Format: +[country code][number] (e.g., +1234567890)"
    ),
  subject: z.string(),
  message: z.string().min(1, { message: "Message is required" }),
});
