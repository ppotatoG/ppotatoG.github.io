import React from "react"
import {GatsbyImage} from "gatsby-plugin-image";

const Thumbnail = ({posts}) => {
    const img = posts.frontmatter.image;

    if(!img) {
        console.log(posts)
    }

    return (
        img
            ? <GatsbyImage image={img.childImageSharp.gatsbyImageData} className="card-image" alt="card_thumbnail"/>
            : <div>ddd</div>
    )
}

export default Thumbnail