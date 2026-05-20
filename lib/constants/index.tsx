import { Role } from '@/prisma/generated/prisma/enums';
import {
  BadgeHelp,
  Bot,
  BotMessageSquare,
  Database,
  type LucideIcon,
  PlusSquare,
  School,
  Server,
  Settings,
  TextSearch,
  University,
  Users,
} from 'lucide-react';

export const projects = [
  {
    id: '1',
    title: 'AI-Powered Healthcare Monitoring',
    thumbnail: '/images/project2.png',
    status: 'accepted',
    author: {
      name: 'Jane Doe',
      College: {
        name: 'College 1',
      },
      Department: {
        name: 'Department 1',
      },
      Field: {
        name: 'Field 1',
      },
    },
    createdAt: new Date(),
    technologies: ['IoT', 'AI', 'Machine Learning'],
    description:
      "Developed an IoT-based healthcare system that uses AI to monitor patients' health data in real-time and provide timely interventions. This project developed   an IoT-based healthcare system that leverages artificial intelligence to monitor patients' health data in real-time. The system collects vital signs and other health metrics from wearable devices and sensors, processes the data using machine learning algorithms, and provides timely alerts to healthcare providers. The goal is to enable proactive medical interventions, reduce hospital visits, and improve patient outcomes through continuous and personalized care.",
    details: {
      objective:
        'Enable proactive medical interventions..., This project developed an IoT-based healthcare system that leverages artificial intelligence to monitor patients health data in real-time...',
      methodology: 'Data collection, real-time processing...',
      challenges: 'Ensuring data privacy, managing large data streams...',
      results: 'Improved patient outcomes, reduced hospital visits...',
    },
    downloadLinks: {
      pdf: '#',
      code: '#',
    },
    comments: [
      { author: 'John Smith', date: 'April 2024', text: 'Great project!' },
      { author: 'Emily Johnson', date: 'May 2024', text: 'Very innovative.' },
    ],
  },
  {
    id: '2',
    title: 'Smart City Traffic Management',
    thumbnail: '/images/project2.png',
    status: 'accepted',
    author: {
      name: 'John Smith',
      College: {
        name: 'College 2',
      },
      Department: {
        name: 'Department 2',
      },
      Field: {
        name: 'Field 2',
      },
    },
    createdAt: new Date(),
    technologies: ['IoT', 'AI', 'Machine Learning'],
    description:
      'Implemented a smart traffic management system to optimize traffic flow and reduce congestion in urban areas using machine learning algorithms. The smart traffic management system designed in this project aims to optimize traffic flow and reduce congestion in urban areas. Using a network of IoT devices and machine learning algorithms, the system analyzes real-time traffic data, predicts traffic patterns, and adjusts traffic signals dynamically. This helps to minimize delays, improve fuel efficiency, and reduce the environmental impact of transportation.',
    details: {
      objective:
        'Enable proactive medical interventions..., This project developed an IoT-based healthcare system that leverages artificial intelligence to monitor patients health data in real-time...',
      methodology: 'Data collection, real-time processing...',
      challenges: 'Ensuring data privacy, managing large data streams...',
      results: 'Improved patient outcomes, reduced hospital visits...',
    },
    downloadLinks: {
      pdf: '#',
      code: '#',
    },
    comments: [
      { author: 'John Smith', date: 'April 2024', text: 'Great project!' },
      { author: 'Emily Johnson', date: 'May 2024', text: 'Very innovative.' },
    ],
  },
  {
    title: 'Renewable Energy Forecasting',
    thumbnail: '/images/project3.jpg',
    status: 'accepted',
    author: {
      name: 'Emily Johnson',
      College: {
        name: 'College 3',
      },
      Department: {
        name: 'Department 3',
      },
      Field: {
        name: 'Field 3',
      },
    },
    createdAt: new Date(),
    technologies: ['IoT', 'AI', 'Machine Learning'],
    description:
      'Created a predictive model for renewable energy generation using weather data and machine learning techniques to improve energy grid stability. This project focuses on creating a predictive model for renewable energy generation using weather data and machine learning techniques. By accurately forecasting energy production from sources like solar and wind, the system helps to improve the stability and reliability of the energy grid. This enables better planning and integration of renewable energy into the grid, reducing reliance on fossil fuels and promoting sustainable energy solutions.',
    details: {
      objective:
        'Enable proactive medical interventions..., This project developed an IoT-based healthcare system that leverages artificial intelligence to monitor patients health data in real-time...',
      methodology: 'Data collection, real-time processing...',
      challenges: 'Ensuring data privacy, managing large data streams...',
      results: 'Improved patient outcomes, reduced hospital visits...',
    },
    downloadLinks: {
      pdf: '#',
      code: '#',
    },
    comments: [
      { author: 'John Smith', date: 'April 2024', text: 'Great project!' },
      { author: 'Emily Johnson', date: 'May 2024', text: 'Very innovative.' },
    ],
  },
  {
    title: 'Blockchain for Secure Voting',
    thumbnail: '/images/project4.jpg',
    status: 'accepted',
    author: {
      name: 'Michael Brown',
      College: {
        name: 'College 4',
      },
      Department: {
        name: 'Department 4',
      },
      Field: {
        name: 'Field 4',
      },
    },
    createdAt: new Date(),
    technologies: ['IoT', 'AI', 'Machine Learning'],
    description:
      'Designed a blockchain-based voting system to ensure secure, transparent, and tamper-proof elections. The blockchain-based voting system developed in this project aims to ensure secure, transparent, and tamper-proof elections. By leveraging the decentralized and immutable nature of blockchain technology, the system allows for secure voter registration, casting, and tallying of votes. This enhances the integrity of the electoral process, reduces the risk of fraud, and increases public trust in election outcomes.',
    details: {
      objective:
        'Enable proactive medical interventions..., This project developed an IoT-based healthcare system that leverages artificial intelligence to monitor patients health data in real-time...',
      methodology: 'Data collection, real-time processing...',
      challenges: 'Ensuring data privacy, managing large data streams...',
      results: 'Improved patient outcomes, reduced hospital visits...',
    },
    downloadLinks: {
      pdf: '#',
      code: '#',
    },
    comments: [
      { author: 'John Smith', date: 'April 2024', text: 'Great project!' },
      { author: 'Emily Johnson', date: 'May 2024', text: 'Very innovative.' },
    ],
  },
  {
    title: 'Autonomous Drone Delivery',
    thumbnail: '/images/project5.png',
    status: 'accepted',
    author: {
      name: 'Sarah Lee',
      College: {
        name: 'College 5',
      },
      Department: {
        name: 'Department 5',
      },
      Field: {
        name: 'Field 5',
      },
    },
    createdAt: new Date(),
    technologies: ['IoT', 'AI', 'Machine Learning'],
    description:
      "Developed an autonomous drone delivery system to efficiently transport packages within urban environments. This project developed an autonomous drone delivery system designed to efficiently transport packages within urban environments. The drones are equipped with advanced navigation and obstacle avoidance technologies, allowing them to safely and accurately deliver goods to customers' doorsteps. The system aims to reduce delivery times, lower transportation costs, and minimize the environmental impact of traditional delivery methods.",
    details: {
      objective:
        'Enable proactive medical interventions..., This project developed an IoT-based healthcare system that leverages artificial intelligence to monitor patients health data in real-time...',
      methodology: 'Data collection, real-time processing...',
      challenges: 'Ensuring data privacy, managing large data streams...',
      results: 'Improved patient outcomes, reduced hospital visits...',
    },
    downloadLinks: {
      pdf: '#',
      code: '#',
    },
    comments: [
      { author: 'John Smith', date: 'April 2024', text: 'Great project!' },
      { author: 'Emily Johnson', date: 'May 2024', text: 'Very innovative.' },
    ],
  },
  {
    title: 'Virtual Reality for Education',
    thumbnail: '/images/project6.jpg',
    status: 'accepted',
    author: {
      name: 'David Wilson',
      College: {
        name: 'College 6',
      },
      Department: {
        name: 'Department 6',
      },
      Field: {
        name: 'Field 6',
      },
    },
    createdAt: new Date(),
    technologies: ['IoT', 'AI', 'Machine Learning'],
    description:
      'Created a virtual reality platform to enhance learning experiences and improve student engagement in educational institutions. The virtual reality platform created in this project aims to enhance learning experiences and improve student engagement in educational institutions. By immersing students in interactive and visually rich virtual environments, the platform provides a more engaging and effective way to learn complex subjects. This project explores the potential of VR in various educational contexts, including virtual labs, historical reconstructions, and immersive storytelling.',
    details: {
      objective:
        'Enable proactive medical interventions..., This project developed an IoT-based healthcare system that leverages artificial intelligence to monitor patients health data in real-time...',
      methodology: 'Data collection, real-time processing...',
      challenges: 'Ensuring data privacy, managing large data streams...',
      results: 'Improved patient outcomes, reduced hospital visits...',
    },
    downloadLinks: {
      pdf: '#',
      code: '#',
    },
    comments: [
      { author: 'John Smith', date: 'April 2024', text: 'Great project!' },
      { author: 'Emily Johnson', date: 'May 2024', text: 'Very innovative.' },
    ],
  },
  {
    title: 'Predictive Maintenance for Manufacturing',
    thumbnail: '/images/project.png',
    status: 'accepted',
    author: {
      name: 'Laura Martinez',
      College: {
        name: 'College 7',
      },
      Department: {
        name: 'Department 7',
      },
      Field: {
        name: 'Field 7',
      },
    },
    createdAt: new Date(),
    technologies: ['IoT', 'AI', 'Machine Learning'],
    description:
      'Implemented a predictive maintenance system for manufacturing equipment to reduce downtime and maintenance costs using IoT sensors and machine learning. This project implemented a predictive maintenance system for manufacturing equipment using IoT sensors and machine learning. By continuously monitoring the condition of machinery and analyzing the data, the system can predict when maintenance is needed before a failure occurs. This helps to reduce downtime, extend the lifespan of equipment, and lower maintenance costs, ultimately improving the efficiency and profitability of manufacturing operations.',
    details: {
      objective:
        'Enable proactive medical interventions..., This project developed an IoT-based healthcare system that leverages artificial intelligence to monitor patients health data in real-time...',
      methodology: 'Data collection, real-time processing...',
      challenges: 'Ensuring data privacy, managing large data streams...',
      results: 'Improved patient outcomes, reduced hospital visits...',
    },
    downloadLinks: {
      pdf: '#',
      code: '#',
    },
    comments: [
      { author: 'John Smith', date: 'April 2024', text: 'Great project!' },
      { author: 'Emily Johnson', date: 'May 2024', text: 'Very innovative.' },
    ],
  },
  {
    title: 'Sentiment Analysis for Social Media',
    thumbnail: '/images/project4.jpg',
    status: 'accepted',
    author: {
      name: 'Robert Garcia',
      College: {
        name: 'College 8',
      },
      Department: {
        name: 'Department 8',
      },
      Field: {
        name: 'Field 8',
      },
    },
    createdAt: new Date(),
    technologies: ['IoT', 'AI', 'Machine Learning'],
    description:
      'Developed a sentiment analysis tool to analyze and understand public opinion on social media platforms using natural language processing. The sentiment analysis tool developed in this project aims to analyze and understand public opinion on social media platforms. Using natural language processing and machine learning algorithms, the tool can detect the sentiment expressed in user posts, categorize them as positive, negative, or neutral, and provide insights into public sentiment trends. This can be valuable for businesses, politicians, and researchers seeking to gauge public opinion on various topics.',
    details: {
      objective:
        'Enable proactive medical interventions..., This project developed an IoT-based healthcare system that leverages artificial intelligence to monitor patients health data in real-time...',
      methodology: 'Data collection, real-time processing...',
      challenges: 'Ensuring data privacy, managing large data streams...',
      results: 'Improved patient outcomes, reduced hospital visits...',
    },
    downloadLinks: {
      pdf: '#',
      code: '#',
    },
    comments: [
      { author: 'John Smith', date: 'April 2024', text: 'Great project!' },
      { author: 'Emily Johnson', date: 'May 2024', text: 'Very innovative.' },
    ],
  },
  {
    title: 'Smart Home Energy Management',
    thumbnail: '/images/project5.png',
    status: 'accepted',
    author: {
      name: 'Maria Rodriguez',
      College: {
        name: 'College 9',
      },
      Department: {
        name: 'Department 9',
      },
      Field: {
        name: 'Field 9',
      },
    },
    createdAt: new Date(),
    technologies: ['IoT', 'AI', 'Machine Learning'],
    description:
      'Designed a smart home energy management system to optimize energy usage and reduce costs using IoT devices and machine learning. The smart home energy management system designed in this project aims to optimize energy usage and reduce costs using IoT devices and machine learning. The system monitors the energy consumption of various appliances and devices in the home, provides real-time feedback to users, and suggests ways to improve energy efficiency. By automating energy management tasks and offering personalized recommendations, the system helps homeowners to save money and reduce their environmental footprint.',
    details: {
      objective:
        'Enable proactive medical interventions..., This project developed an IoT-based healthcare system that leverages artificial intelligence to monitor patients health data in real-time...',
      methodology: 'Data collection, real-time processing...',
      challenges: 'Ensuring data privacy, managing large data streams...',
      results: 'Improved patient outcomes, reduced hospital visits...',
    },
    downloadLinks: {
      pdf: '#',
      code: '#',
    },
    comments: [
      { author: 'John Smith', date: 'April 2024', text: 'Great project!' },
      { author: 'Emily Johnson', date: 'May 2024', text: 'Very innovative.' },
    ],
  },
  {
    title: 'Personalized Medicine with Genomics',
    thumbnail: '/images/project1.png',
    status: 'accepted',
    author: {
      name: 'James Davis',
      College: {
        name: 'College 10',
      },
      Department: {
        name: 'Department 10',
      },
      Field: {
        name: 'Field 10',
      },
    },
    createdAt: new Date(),
    technologies: ['IoT', 'AI', 'Machine Learning'],
    description:
      'Developed a personalized medicine platform using genomic data and AI to provide tailored healthcare solutions for patients. This project developed a personalized medicine platform that uses genomic data and AI to provide tailored healthcare solutions for patients. By analyzing individual genetic information, the platform can predict susceptibility to certain diseases, recommend personalized treatment plans, and suggest lifestyle changes to improve health outcomes. This approach aims to move from a one-size-fits-all model to a more individualized and effective healthcare strategy.',
    details: {
      objective:
        'Enable proactive medical interventions..., This project developed an IoT-based healthcare system that leverages artificial intelligence to monitor patients health data in real-time...',
      methodology: 'Data collection, real-time processing...',
      challenges: 'Ensuring data privacy, managing large data streams...',
      results: 'Improved patient outcomes, reduced hospital visits...',
    },
    downloadLinks: {
      pdf: '#',
      code: '#',
    },
    comments: [
      { author: 'John Smith', date: 'April 2024', text: 'Great project!' },
      { author: 'Emily Johnson', date: 'May 2024', text: 'Very innovative.' },
    ],
  },
  // Add more project data here
];
export type ProjectData = (typeof projects)[number];

export const STEPS = [
  {
    name: 'Step 1: Project descriptions',
    description: 'upload project image, title and Abstract',
    isCompleted: false,
    isCurrent: false,
    imgPath: <Bot />,
  },
  {
    name: 'Step 2: Project Details',
    description: 'Add objectives, technology used and methodology',
    isCompleted: false,
    imgPath: <Bot />,
    isCurrent: false,
  },
  {
    name: 'Step 3: Challenges and Results',
    description: 'Add Problem statement and Possible solution',
    isCompleted: false,
    isCurrent: false,
    imgPath: <Bot />,
  },
  {
    name: 'Step 4: Additional Information',
    description: 'Add project report(pdf) and your codeLink',
    isCompleted: false,
    isCurrent: false,
    imgPath: <Bot />,
  },
];
export type StepsType = (typeof STEPS)[number];

export const mainSideBarMenu = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: University,
    role: [Role.ADMIN, Role.STUDENT, Role.FACULTY],
    isActive: true,
  },
  {
    role: [Role.STUDENT],
    title: 'AI Assistant',
    icon: Bot,
    url: '/dashboard/assistant',
    isActive: false,
  },
  {
    role: [Role.STUDENT],
    title: 'Chat with Paper',
    icon: BotMessageSquare,
    url: '/dashboard/chatpdf',
    isActive: false,
  },
  {
    role: [Role.ADMIN, Role.STUDENT, Role.FACULTY],
    title: 'plagiarism',
    icon: TextSearch,
    url: '/dashboard/plagiarism',
    isActive: false,
  },
  {
    role: [Role.ADMIN, Role.STUDENT, Role.FACULTY],
    title: 'Project',
    icon: Database,
    url: '/dashboard/projects',
    isActive: false,
  },
  {
    role: [Role.ADMIN, Role.FACULTY],
    title: 'Repository',
    icon: Server,
    url: '/dashboard/projects/repository',
    isActive: false,
  },
  {
    role: [Role.ADMIN, Role.FACULTY],
    title: 'User management',
    icon: Users,
    url: '/dashboard/users',
    isActive: false,
  },
  {
    role: [Role.ADMIN, Role.FACULTY],
    title: 'College management',
    icon: School,
    url: '/dashboard/college',
    isActive: false,
  },
];
export const sideBarMenu = [
  {
    role: [Role.STUDENT],
    title: 'Add new project',
    icon: <PlusSquare className='transition-all group-hover:scale-110' />,
    href: '/dashboard/projects/add',
  },
  {
    role: [Role.ADMIN, Role.STUDENT, Role.FACULTY],
    title: 'Settings',
    icon: <Settings className='transition-all group-hover:scale-110' />,
    href: '/dashboard/settings',
  },
  {
    role: [Role.ADMIN, Role.STUDENT, Role.FACULTY],
    title: 'F.Q.A',
    icon: <BadgeHelp className='transition-all group-hover:scale-110' />,
    href: 'dashboard/fqa',
  },
];

export type SideBarMenuType = {
  title: string;
  url: string;
  role: Role[];
  icon?: LucideIcon;
  isActive?: boolean;
  items?: {
    title: string;
    url: string;
  }[];
};

export const StatusIcon = {
  accepted: '/assets/icons/check.svg',
  pending: '/assets/icons/pending.svg',
  rejected: '/assets/icons/cancelled.svg',
};

export const MAX_DATE_RANGE_DAYS = 360;
