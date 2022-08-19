import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import Anim from "./Anim"
import Thumbnail from "./Thumbnail";

const Card = styled.article`
    box-shadow: 0 0 5px 0 #dadada;
    border-radius: 10px;
    overflow: hidden;
    transition: transform .5s;
    
    &:hover {
        transform: translateY(-10px);
        
    }
    
    a {
        text-decoration: none;
        color: var(--dark);
    }
    .card-image {
        height: 200px;
    }
    
    h2 {
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        padding: 0 10px;
    }
`

const Meta = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    padding: 0 10px;
  }
`

const PostCard = ({post}) => {
    const {title, date, slug} = post.frontmatter

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
