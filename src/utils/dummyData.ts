import { IVacancyCategory } from '@interfaces/Career';

const jobDetails = {
    experience: '1+ years',
    requiredSkills: ['ES6', 'HTML', 'React', 'GIT'],
    languages: ['English', 'Russian', 'Latvian'],
    responsibilities: [
        'good knowledge of JavaScript (ES6), CSS, and HTML',
        'recent experience with at least one modern client-side JavaScript framework (React, Angular, Vue, etc.)',
        'previous experience with Next.js or Gatsby.js is a bonus.',
        'experience in development of CSS-based animations',
        'knowledge of Git development workflow',
    ],
    benefits: [
        'remote work',
        'full time, full involvement, 8-hour work day',
        'compensation according to your skill level',
        'a great team',
        'highly rewarding projects and clients',
    ],
    additionalInfo:
        'We will gladly help to progress to a junior developer and will be happy to work with a middle-level developer. The key requirement is that you share a passion for creative front-end and want to develop similar websites to those we do. We develop web and mobile apps using SPSa framework as Vue and React but their number is significantly lower comparing to the promo web, so it’s important you want to do the creative front.',
};

export const Vacancies = [
    // {
    //     category: IVacancyCategory.coding,
    //     title: 'Back-end developer',
    //     description: 'A back-end developer is someone who builds and maintains the technology needed to power the components which enable the user-facing side of the website to exist. Their back end code adds utility to everything the front-end developer creates.',
    //     workFrom: {
    //         inHouse: true,
    //         remote: true,
    //     },
    //     jobDetails
    // },
    {
        category: IVacancyCategory.coding,
        title: 'Front-end developer',
        description:
            'The practice of converting data to graphical interface for user to view and interact with data through digital interaction using HTML, CSS and JavaScript.',
        workFrom: {
            inHouse: true,
            remote: true,
        },
        jobDetails,
    },
    // {
    //     category: IVacancyCategory.marketing,
    //     title: 'Social media manager',
    //     description: 'Typically, a Social Media Manager is the person in an organization who is trusted with monitoring, executing, filtering, and measuring the social media presence of a product, brand, corporation or even individual.',
    //     workFrom: {
    //         inHouse: true,
    //         remote: true,
    //     },
    //     jobDetails
    // },
    // {
    //     category: IVacancyCategory.other,
    //     title: 'Copywriter',
    //     description: 'A copywriter writes with the intent of persuading and influencing the audience, the reader, to purchase a good or service. They have an innate understanding of human drive and know-how to sway decision-making with words and suggestions.',
    //     workFrom: {
    //         inHouse: true,
    //         remote: true,
    //     },
    //     jobDetails
    // }
];
