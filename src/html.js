// @ts-nocheck

/* eslint-disable */
import React from 'react';

const HTML = ({
    htmlAttributes,
    headComponents,
    bodyAttributes,
    preBodyComponents,
    body,
    postBodyComponents,
}) => (
    <html {...htmlAttributes}>
        <head>
            <meta charSet="utf-8" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            {headComponents}
        </head>
        <body {...bodyAttributes}>
            {preBodyComponents}
            <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
            {postBodyComponents}
        </body>
    </html>
);
/* eslint-enable */

export default HTML;
