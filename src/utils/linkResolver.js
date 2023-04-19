exports.linkResolver = function linkResolver(doc) {
    // Route for blog posts
    if (doc.type === 'project-card') {
        return `/works/${doc.uid}`;
    }
    // Homepage route fallback
    return '/';
};
