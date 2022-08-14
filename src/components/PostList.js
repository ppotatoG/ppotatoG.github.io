import React from "react"
import PostCard from "./PostCard"
import styled from "styled-components"

const List = styled.div`
  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
`

const PostList = ({ posts }) => {
  return (
    <>
      <section>
        <List>
          {posts.map(({ node }, index) => {
            return <PostCard key={index} post={node} />
          })}
        </List>
      </section>
    </>
  )
}

export default PostList
