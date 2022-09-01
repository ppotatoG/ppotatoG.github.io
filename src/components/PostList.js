import React from "react"
import PostCard from "./PostCard"
import styled from "styled-components"

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

const List = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
    gap: 10px;
    article {
        width: 100%;
    }
    
    @media (max-width: 767px) {
        grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    }
`

export default PostList
