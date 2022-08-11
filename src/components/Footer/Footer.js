import React from "react"
import { Link } from "gatsby"
import { useSiteMetadata } from "../../hooks/use-site-metadata"
import { FooterStyles } from "./FooterStyles"

const year = new Date().getFullYear()

const Footer = () => {
  const {
    title,
    siteAuthor,
    siteAuthorUrl,
  } = useSiteMetadata()
  return (
    <FooterStyles>
      <h2 style={{ marginTop: "0px" }} className="title__main">
        <Link to="/">{title}</Link>
      </h2>
      <div className="container">
        ppotatoG - &copy; {year} Designed and built by{" "}
        <a href={siteAuthorUrl} target="_blank" rel="noopener noreferrer">
          {siteAuthor}
        </a>{" "}
        | <Link to="/privacy">Privacy Statement</Link>
      </div>
    </FooterStyles>
  )
}

export default Footer
