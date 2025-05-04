export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'React JS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Redux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
      { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express JS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
      { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Postman', logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: 'https://images.deepai.org/art-image/60ead9cd720c47f7a47f3f094865b78e/oops-info-solution-pvt-limited-compony-containing-all.jpg', // or placeholder if logo unavailable
    role: 'Fullstack Developer Intern',
    company: 'Oops Info Solutions',
    date: 'Feb 2025 - May 2025',
    desc: 'Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React JS', 'Express JS', 'Node JS', 'Tailwind CSS', 'MongoDB'],
  },
];

export const education = [
  {
    id: 0,
    img: 'https://img.freepik.com/free-vector/college-building-background_1284-4172.jpg', // placeholder college image
    school: 'Seth Jai Parkash Mukand Lal Institute Of Engineering And Technology, Radaur',
    date: 'Sept 2022 - July 2026',
    grade: '7.62 CGPA',
    desc: 'I have completed my B-tech degree in Information Technology from JMIT, Radaur. During my time at JMIT, I gained a strong foundation in programming, software development, and Information Technology principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering.',
    degree: 'Bachelor of Technology',
  },
  {
    id: 1,
    img: 'https://img.freepik.com/premium-vector/school-building-with-trees-isolated-white-background_1308-103324.jpg', // school placeholder
    school: 'DAV Public School, Sadhaura',
    date: 'Apr 2021 - March 2022',
    grade: '78.4%',
    desc: 'I completed my class 12 education in the Non-Medical stream from DAV Public School, Sadhaura, under the CBSE board. I focused on subjects like Physics, Chemistry, Mathematics, and Computer Science, which gave me a strong foundation in analytical thinking and problem-solving.',
    degree: 'CBSE(XII) - Non-Medical',
  },
  {
    id: 2,
    img: 'https://img.freepik.com/premium-vector/school-building-with-trees-isolated-white-background_1308-103324.jpg',
    school: 'DAV Public School, Sadhaura',
    date: 'Apr 2019 - March 2020',
    grade: '92.4%',
    desc: 'I completed my class 10 education from DAV Public School, Sadhaura, under the CBSE board, securing excellent grades and building a strong base across all core subjects.',
    degree: 'CBSE(X)',
  },
];

export const projects = [
  {
    id: 0,
    title: 'Learning Management System',
    description:
      'A web-based platform for managing and delivering online courses, tracking student progress, and facilitating communication between instructors and learners. Built using the MERN stack for a seamless learning experience.',
    image: 'https://img.freepik.com/premium-vector/lms-logo-lms-letter-lms-letter-logo-design-initials-lms-logo-linked-with-circle-uppercase-monogram-logo-lms-typography-technology-business-real-estate-brand_229120-66009.jpg',
    tags: ['MongoDB', 'Express', 'React JS', 'Node.js'],
    github: 'https://github.com/lakshaysaini1464/learning-management-system',
  },
  {
    id: 1,
    title: 'Diabetes Prediction System',
    description:
      'A machine learning project that predicts the likelihood of diabetes using logistic regression and other classification models. It provides users with a quick risk assessment based on input parameters.',
    image: 'https://media.istockphoto.com/id/1448657772/vector/diabetes-care-vector-element-concept-design-template.jpg?s=612x612&w=0&k=20&c=cajECTOIVSy1PlvYJOyzN30Mfjp8EBbXsMsE6Cs6-Fo=',
    tags: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn'],
    github: 'https://github.com/lakshaysaini1464/diabetes-prediction-system',
  },
  {
    id: 2,
    title: 'Metro Navigator App',
    description:
      'An application that helps users find optimal metro routes, estimate travel times, and calculate fares across the metro network. Built using the MERN stack for a smooth and fast experience.',
    image: 'https://c8.alamy.com/comp/2TBXG7X/futuristic-smart-city-map-underground-metro-system-metro-cartography-and-navigation-public-transport-route-and-station-vector-illustration-of-smar-2TBXG7X.jpg',
    tags: ['MongoDB', 'Express', 'React JS', 'Node.js'],
    github: 'https://github.com/lakshaysaini1464/metro-navigator-app',
  },
  {
    id: 3,
    title: 'Restaurant Management System',
    description:
      'A comprehensive platform to manage restaurant operations, including order management, billing, menu updates, and table reservations. Developed using the MERN stack for efficient workflows.',
    image: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1655657438054/PnHz_dAIq.webp',
    tags: ['MongoDB', 'Express', 'React JS', 'Node.js'],
    github: 'https://github.com/lakshaysaini1464/restaurant-management-system',
  },
];
