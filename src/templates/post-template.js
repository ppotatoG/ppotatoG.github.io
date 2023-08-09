import React from "react"

import { Link, graphql } from "gatsby"

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import styled from "styled-components"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import CodeBlock from "./CodeBlock"

const PostTemplate = ({ data }) => {
  const { title, date, author } = data.mdx.frontmatter
  const { body } = data.mdx

  return (
    <Layout>
      <PostTemplateStyles>
        <hr style={{ marginTop: 0 }} className="separator separator__large" />
        <Link className="btn" to="/">
          Back to all posts
        </Link>
        <hr className="separator" />
        <h1>{title}</h1>
        <h2>
          <span>Written by {author}</span> & Posted on <span>{date}</span>
        </h2>

        <div className="post__body">
          <MDXProvider
            components={{
              pre: CodeBlock,
            }}
          >
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </div>
        <hr className="separator" />
        <h2>
          Posted on <span>{date}</span>
        </h2>
        <hr className="separator separator__large" />
      </PostTemplateStyles>
    </Layout>
  )
}

const PostTemplateStyles = styled.section`
  h1,
  h2 {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }

  .post__body {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
    code {
      color: rgb(64, 63, 83);
      font-family: Heebo, Arial, Helvetica, "Helvetica Neue", sans-serif;
      background: #fbfcfd;
      padding: 2px;
    }
    code {
      background: var(--highlight-pink);
      padding: 0.2em 0.4em;
      font-size: 85%;
      border-radius: 3px;
    }
    pre {
      color: rgb(64, 63, 83);
      font-family: Heebo, Arial, Helvetica, "Helvetica Neue", sans-serif;
      background: var(--highlight-pink);
      padding: 15px;
      code {
        padding: 0;
      }
      overflow: auto;
    }
    a {
      color: #222;
    }

    ul {
      list-style: disc;
      padding-left: 30px;
    }

    @media (max-width: 768px) {
      img {
        width: 100%;
      }
    }
  }
`

export const query = graphql`
  query getPost($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        date(formatString: "MMMM Do, YYYY")
        author
        thumbnailType
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      body
    }
  }
`

export default PostTemplate

PostTemplate.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
}
