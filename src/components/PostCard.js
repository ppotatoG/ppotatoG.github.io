import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Anim from "./Anim"
import Thumbnail from "./Thumbnail";

const Card = styled.article`
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
  
  h2 {
    max-width: 270px;
    padding:0 5px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
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
  const { title, date, slug } = post.frontmatter

  return (
    <Card>
      <Anim>
        <Link to={slug}>
          <Thumbnail posts={post}/>
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
