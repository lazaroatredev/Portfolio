import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineAppstore } from "react-icons/ai";
import { FaAddressBook } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { b1, b4, b5, grid, vite ,re, p2, ts, tail, eslint, javascriptLogo, xora, p3, css, p4, reactRouterSvg, reactRouterWebp, reactQuerySvg, tanstackQuery, reactHookFormSvg, reactHookFormWebp, ZodSvg, certificateZod, shadCnSvg, shadCnJpg, framerMotionSvg, motionWebp, tanstanckPng, reactTable, chartJsSvg, rechartsWebp, html5, gitSvg, reactSvg, gulpSvg, pnpmSvg, gitSocial, tweetSocial, linkedinSocial, sass } from '@/assets';

export const navItems = [ 
    { icon: <AiOutlineUser/> , name: "About", link: "about" , id : 1 },
    { icon: <AiOutlineAppstore/> , name: "Projects", link: "projects" , id : 2},
    { icon: <AiOutlineStar/> , name: "Tools", link: "tools", id : 3 },
    { icon: <FaAddressBook/> , name: "Contact", link: "contact", id : 4 },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication ",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-2 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: b1,
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: grid,
        spareImg: b4,
    },

    {
        id: 5,
        title: "Currently building a JS Animation library",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: b5,
        spareImg: grid,
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "Xora | SaaS Landing",
        des: "With Xora, tedious tasks are history. Automation and smart processes bring your productivity to new heights. It's like having an extra cup of coffee, but without the jitters.",
        img: xora,
        iconLists: [vite,re,ts,tail,eslint],
        link: "https://github.com/lazaroatredev/Modern-UI-UX-Xora-SaaS-Landing",
    },
    {
        id: 2,
        title: "HooBank-Landing",
        des: "With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market",
        img: p2,
        iconLists: [vite,re , javascriptLogo , tail,eslint],
        link: "https://github.com/lazaroatredev/Modern_UI_UX-HooBank-Landing",
    },
    {
        id: 3,
        title: "GPT3-Landing",
        des: "Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.",
        img: p3,
        iconLists: [vite,re, javascriptLogo,css ,eslint],
        link: "https://github.com/lazaroatredev/Modern__UI-UX--GPT3",
    },
    {
        id: 4,
        title: "Nike-Landing",
        des: "Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance",
        img: p4,
        iconLists: [vite, re, ts, tail, eslint],
        link: "https://github.com/lazaroatredev/Modern__UI-UX_Nike",
    },
];

export const tools = [
    {
        tool : "React Router",
        logo : reactRouterSvg,
        img : reactRouterWebp
    },
    {
        tool : "TanStack Query",
        logo : reactQuerySvg,
        img : tanstackQuery
    },
    {
        tool : "React Hook Form",
        logo : reactHookFormSvg,
        img : reactHookFormWebp
    },
    {
        tool : "Zod",
        logo : ZodSvg,
        img : certificateZod
    },
    {
        tool : "ShadCn",
        logo : shadCnSvg,
        img : shadCnJpg
    },
    {
        tool : "Framer Motion",
        logo : framerMotionSvg,
        img : motionWebp
    },
    {
        tool : "TanStack Table",
        logo : tanstanckPng,
        img : reactTable
    },
    {
        tool : "ChartJs",
        logo : chartJsSvg,
        img : rechartsWebp
    },
]
export const skills = [
    {
        id: 1,
        name: "HTML5",
        img: html5,
    },
    {
        id: 2,
        name: "CSS3",
        img: css,
    },
    {
        id: 3,
        name: "Js",
        img: javascriptLogo,
    },
    {
        id: 4,
        name: "Ts",
        img: ts,
    },
    {
        id: 5,
        name: "Git.",
        img: gitSvg,
    },
    {
        id: 6,
        name: "React.",
        img: reactSvg,
    },
    // {
    //     id: 7,
    //     name: "Vite.",
    //     img: vite,
    // },
    {
        id: 11,
        name: "Tailwind",
        img: tail,
    },
    {
        id: 12,
        name: "Sass",
        img: sass,
    },
    {
        id: 9,
        name: "Gulp.",
        img: gulpSvg,
    },
    {
        id: 10,
        name: "pnpm.",
        img: pnpmSvg,
    }, 

];

export const workExperience = [
    {
        id: 1,
        title: "Frontend Engineer Intern",
        desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Mobile App Dev - JSM Tech",
        desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Freelance App Dev Project",
        desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Lead Frontend Developer",
        desc: "Developed and maintained user-facing features using modern frontend technologies.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];

export const toolsData = [  
    {  
      title: "React Router",  
      description: "Library for handling routing and navigation in React JS Applications.",  
      features: [  
        "Declarative Routing",  
        "Nested Routes",  
        "Programmatic Navigation",  
        "Route Parameters",  
        "Improved TypeScript Support",  
      ],  
      imageSrc: reactRouterWebp,  
      altText: "React Router",  
    },  
    {  
      title: "TanStack Query",  
      description: "Library for managing, caching and synchronizing state in React applications.",  
      features: [  
        "Data Fetching",  
        "Caching",  
        "Background Data Fetching",  
        "Optimistic Updates",  
        "Pagination and Infinite Loading",  
      ],  
      imageSrc: tanstackQuery,  
      altText: "React Query",  
    },  
    {  
      title: "React Hook Form",  
      description: "Library for managing forms in React with minimal re-renders and easy validation.",  
      features: [  
        "Performance Optimized",  
        "Asynchronous Validation",  
        "Dynamic Field Arrays",  
        "Schema-Based Validation",  
        "Controlled and Uncontrolled Components",  
        "Easy Integration with UI Libraries",  
      ],  
      imageSrc: reactHookFormWebp,  
      altText: "React Hook Form",  
    },  
    {  
      title: "Zod",  
      description: "Library for schema validation and type inference in TypeScript and JavaScript.",  
      features: [  
        "Strict Schema Validation",  
        "Type Inference for TypeScript",  
        "Asynchronous Validation Support",  
        "Custom Error Messages",  
        "Nested Objects Support",  
        "User-Friendly API",  
      ],  
      imageSrc: certificateZod,  
      altText: "Zod",  
    },  
    {  
      title: "ShadCn",  
      description: "Library for customizable and accessible UI components for React applications.",  
      features: [  
        "Modular Component Design",  
        "Theme Customization",  
        "Accessible by Default",  
        "Built-in Support for Dark Mode",  
        "Responsive Layouts",  
        "Easy Integration with CSS Frameworks",  
      ],  
      imageSrc: shadCnJpg,  
      altText: "ShadCn",  
    },  
    {  
      title: "Framer Motion",  
      description: "Library for creating smooth animations and transitions in React applications.",  
      features: [  
        "Simple Animation Syntax",  
        "Variants for Complex Animations",  
        "Gesture Support (drag, hover, tap)",  
        "Shared Layout Transitions",  
        "Staggered Animations",  
        "Exit and Enter Animations",  
      ],  
      imageSrc: motionWebp,  
      altText: "Motion",  
    },  
    {  
      title: "Tanstack Table",  
      description: "Library for building powerful tables and data-grid components in React applications.",  
      features: [  
        "Pagination and Infinite Scrolling",  
        "Column Sorting and Filtering",  
        "Column Resizing and Dragging",  
        "Fully Customizable Rendering",  
        "Support for Row Selection and Grouping",  
      ],  
      imageSrc: reactTable,  
      altText: "Tanstack Table",  
    },  
    {  
      title: "ChartJs",  
      description: "Library for creating responsive charts and visualizations in React applications.",  
      features: [  
        "Customizable Chart Types (Line, Bar, Pie, etc.)",  
        "Data-Driven and Declarative",  
        "SVG Rendering for Scalability",  
        "Built-in Animations",  
        "Responsive and Mobile-Friendly",  
      ],  
      imageSrc: rechartsWebp,  
      altText: "Recharts",  
    },  
  ];  

export const socialMedia = [
    {
        id: 1,
        img: gitSocial,
        url : "https://github.com/lazaroatredev"
    },
    {
        id: 2,
        img: tweetSocial,
        url : "https://x.com/lazaroatredev"
    },
    {
        id: 3,
        img: linkedinSocial,
        url : "https://www.linkedin.com/in/l%C3%A1zaro-gonz%C3%A1lez-02741b346/"
    },
];