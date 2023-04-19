import Layout from "./src/components/templates/Layout";

export const wrapPageElement = ({ element, props }) => <Layout {...props}>{element}</Layout>
