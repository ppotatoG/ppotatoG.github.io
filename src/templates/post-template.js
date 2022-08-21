import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import PropTypes from "prop-types"

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
      color: var(--dark);
      font-family: Heebo,Arial,Helvetica,'Helvetica Neue',sans-serif;
      background: #f1f1f1;
      padding: 2px;
    }
    pre {
      color: var(--dark);
      font-family: Heebo,Arial,Helvetica,'Helvetica Neue',sans-serif;
      background: #f1f1f1;
      padding: 15px;
      code {
        padding: 0;
      }
  }
`

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
          <MDXRenderer>{body}</MDXRenderer>
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
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  author: PropTypes.string,
  image: PropTypes.object | undefined,
  thumbnailType: PropTypes.string | undefined
}
