const project = require('./src/schemas/project.json');
const category = require('./src/schemas/category.json');
const { languages, defaultLanguage } = require('./languages');

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

const myCustomQueries = {
    isMobile: '(min-width: 320px)',
    isMobileM: '(min-width: 360px)',
    isMobileL: '(min-width: 568px)',
    isTablet: '(min-width: 768px)',
    isTabletL: '(min-width: 1024px)',
    isLaptopS: '(min-width: 1140px)',
    isLaptop: '(min-width: 1366px)',
    isDesktop: '(min-width: 1680px)',
    isXxl: '(min-width: 1920px)',
};

const prismicRoutes = [
    {
        type: 'projects',
        path: '/works',
    },
    {
        type: 'project',
        path: '/works/:prismicProjectCard.uid',
    },
];

const siteUrl = 'http://localhost:8000/';

module.exports = {
    siteMetadata: {
        title: `Advertimo`,
        titleTemplate: '%s · Advertimo',
        description: '',
        url: 'https://www.advertimo.eu',
        siteUrl: 'https://www.advertimo.eu',
        image: '',
        twitterUsername: '',
        navigation: [
            {
                title: 'Home',
                url: '/',
            },
            {
                title: 'Works',
                url: '/works',
            },
            {
                title: 'Company',
                url: '/company',
            },
            {
                title: 'Careers',
                url: '/careers',
            },
            {
                title: 'Contacts',
                url: '/contacts',
            },
        ],
    },
    plugins: [
        'gatsby-plugin-styled-components',
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/assets/images/icon.png',
            },
        },
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    formats: [`auto`, `webp`],
                    placeholder: `blurred`,
                    quality: 80,
                    breakpoints: [320, 768, 1140, 1680, 1920],
                    backgroundColor: `transparent`,
                },
            },
        },
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/assets/images/',
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-plugin-breakpoints',
            options: {
                queries: myCustomQueries,
            },
        },
        {
            resolve: `gatsby-plugin-alias-imports`,
            options: {
                alias: {
                    '@assets': 'src/assets',
                    '@components': 'src/components',
                    '@pages': 'src/pages',
                    '@atoms': 'src/components/atoms',
                    '@molecules': 'src/components/molecules',
                    '@organisms': 'src/components/organisms',
                    '@templates': 'src/components/templates',
                    '@providers': 'src/providers',
                    '@theme': 'src/theme',
                    '@interfaces': 'src/interfaces',
                    '@utils': 'src/utils',
                    '@hooks': 'src/hooks',
                    '@src': 'src',
                },
                extensions: ['js', 'jsx', 'ts', 'tsx'],
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`Rubik:500,700`],
                display: 'swap',
            },
        },
        `gatsby-plugin-provide-react`,
        `gatsby-plugin-transition-link`,
        `gatsby-plugin-anchor-links`,
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                typekit: {
                    id: 'pgi6fnk',
                },
            },
        },
        {
            resolve: `gatsby-source-prismic`,
            options: {
                repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
                accessToken: process.env.PRISMIC_ACCESS_TOKEN,
                customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
                routes: prismicRoutes,
                linkResolver: () => (projectEntity) => `/works/${projectEntity.uid}`,
                schemas: {
                    project,
                    category,
                },
            },
        },
        'gatsby-plugin-netlify',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              path: `${__dirname}/locales`,
              name: `locale`
            }
        },
        {
            resolve: 'gatsby-plugin-react-i18next',
            options: {
              languages,
              defaultLanguage,
              siteUrl,
              i18nextOptions: {
                fallbackLng: defaultLanguage,
                supportedLngs: languages,
                defaultNS: 'common',
                interpolation: {
                  escapeValue: false
                }
              }
            }         
        }
    ],
};
