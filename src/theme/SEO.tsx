import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

export const metaData = graphql`
    query metaData {
        site {
            siteMetadata {
                url
                title
                image
                description
                titleTemplate
            }
        }
    }
`;

const pageMetas: Record<string, { title: string; description: string }> = {
    '/': {
        title: 'Advertimo | Home page',
        description: '',
    },
    '/contacts': {
        title: 'Advertimo | Contacts',
        description: '',
    },
    '/company': {
        title: 'Advertimo | Company',
        description: '',
    },
    '/works': {
        title: 'Advertimo | Works',
        description: '',
    },
    '/works/project': {
        title: 'Advertimo | Project',
        description: '',
    },
};

const SEO = () => {
    const { pathname } = useLocation();
    const { site } = useStaticQuery(metaData);
    const {
        title: defaultTitle,
        description: defaultDescription,
        url,
        // image: defaultImage,
    } = site.siteMetadata;
    const metaDescription = pageMetas[pathname]?.description;
    const metaInfo = [
        {
            name: `description`,
            content: metaDescription,
        },
        {
            property: `og:title`,
            content: pageMetas[pathname]?.title || defaultTitle,
        },
        {
            property: `og:description`,
            content: metaDescription,
        },
    ];

    const seo = {
        title: pageMetas[pathname]?.title || defaultTitle,
        description: metaDescription || defaultDescription,
        // image: `${url}${image || defaultImage}`,
        url: `${url}${pathname}`,
    };

    return (
        <Helmet
            title={seo.title || ''}
            htmlAttributes={{
                lang: 'en',
            }}
        >
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            {metaInfo.map((metaLink) => (
                <meta
                    key={metaLink.property || metaLink.name}
                    name={metaLink.name}
                    property={metaLink.property}
                    content={metaLink?.content}
                />
            ))}
        </Helmet>
    );
};

export default SEO;
