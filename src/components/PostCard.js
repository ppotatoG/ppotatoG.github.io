import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "styled-components"
import Anim from "./Anim"

const Card = styled.article`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;

  &:hover {
    .card-image {
      transform: scale(1.025);
    }
  }

  a {
    text-decoration: none;
    color: var(--dark);
  }
  .card-image {
    height: 200px;
    transition: transform 0.35s;
  }

  @media (min-width: 600px) {
    flex: 0 0 24%;
  }
`

const Meta = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
`

const PostCard = ({ post }) => {
  const { title, date, author, slug } = post.frontmatter

  const img = post.frontmatter.image.childImageSharp.gatsbyImageData

  return (
    <Card>
      <Anim>
        <Link to={slug}>
          <GatsbyImage image={img} className="card-image" />
          <h2>{title}</h2>
          <Meta>
            <h4>{date}</h4>
          </Meta>
        </Link>
      </Anim>
    </Card>
  )
}

export default PostCard
