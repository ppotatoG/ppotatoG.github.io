import React from "react"
import PostCard from "./PostCard"
import styled from "styled-components"

const List = styled.div`
  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
    gap: 10px;
    article {
        width: 100%;
    }
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
