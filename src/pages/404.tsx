import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "@components/templates/Layout"
import Header from "@components/templates/Header"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// markup
const NotFoundPage = () => (
    <Layout>
        <Header />
        <main style={pageStyles}>
            <title>Not found</title>
            <h1 style={headingStyles}>Page not found</h1>
            <p style={paragraphStyles}>
                Sorry{" "}
                <span role="img" aria-label="Pensive emoji">
                    😔
                </span>{" "}
                we couldn’t find what you were looking for.
                <br />
                {process.env.NODE_ENV === "development" ? (
                    <>
                        <br />
                        Try creating a page in <code style={codeStyles}>src/pages/</code>.
                        <br />
                    </>
          ) : null}
                <br />
                <Link to="/">Go home</Link>.
            </p>
        </main>
    </Layout>
  )

export default NotFoundPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {ns: {in: ["badGateway", "header"]}, language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;