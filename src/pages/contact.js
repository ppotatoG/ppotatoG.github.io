import React from "react"
import styled from "styled-components"
import {StaticImage} from "gatsby-plugin-image"

import Layout from "../components/layout"

const ContactPage = () => {
    return (
        <>
            <Layout>
                <h1>끊임없이 노력하는 유소현입니다</h1>

                <Article>
                    <StaticImage src="../posts/hello-word/images/hello-word.jpg" alt=""/>
                    <Area>
                        <h3>Languages</h3>
                        <BadgeBox>
                            <img
                                src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"
                                alt="HTML5"/>
                            <img
                                src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"
                                alt="CSS3"/>
                            <img
                                src="https://img.shields.io/badge/SASS-F15F5F?style=flat-square&logo=SASS&logoColor=white"
                                alt="SASS"/>
                            <img
                                src="https://img.shields.io/badge/JavaScript-F7DF1E?tyle=flat-square&logo=JavaScript&logoColor=white"
                                alt="JavaScript"/>
                            <img
                                src="https://img.shields.io/badge/jQuery-0769AD?style=flat-square&logo=jQuery&logoColor=white"
                                alt="jQuery"/>
                        </BadgeBox>
                        <BadgeBox>
                            <img
                                src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"
                                alt="React"/>
                            <img
                                src="https://img.shields.io/badge/TypeScript-1572B6?style=flat-square&logo=TypeScript&logoColor=white"
                                alt="TypeScript"/>
                            <img
                                src="https://img.shields.io/badge/Next.js-000?style=flat-square&logo=Next.js&logoColor=white"
                                alt="Next"/>
                            <img
                                src="https://img.shields.io/badge/Gatsby-663399?tyle=flat-square&logo=Gatsby&logoColor=white"
                                alt="Gatsby"/>
                        </BadgeBox>
                        <BadgeBox>
                            <img
                                src="https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=PHP&logoColor=white"
                                alt="PHP"/>
                            <img
                                src="https://img.shields.io/badge/GraphQL-E10098?style=flat-square&logo=GraphQL&logoColor=white"
                                alt="GraphQL"/>
                        </BadgeBox>
                        <h3>DVCS</h3>
                        <BadgeBox>
                            <img
                                src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"
                                alt="GitHub"/>
                            <img
                                src="https://img.shields.io/badge/GitLab-FC6D26?style=flat-square&logo=GitLab&logoColor=white"
                                alt="GitLab"/>
                        </BadgeBox>
                        <h3>IDE</h3>
                        <BadgeBox>
                            <img
                                src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat-square&logo=Visual Studio Code&logoColor=white"
                                alt="visual Studio Code"/>
                            <img
                                src="https://img.shields.io/badge/IntelliJ IDEA-000?style=flat-square&logo=IntelliJ IDEA&logoColor=white"
                                alt="IntelliJ IDEA"/>
                            <img
                                src="https://img.shields.io/badge/PhpStorm-000?style=flat-square&logo=PhpStorm&logoColor=white"
                                alt="PhpStorm"/>
                        </BadgeBox>

                        <h3>Link</h3>
                        <BadgeBox>
                            <Link href="mailto:thgus2270@gmail.com">
                                <img
                                    src="https://img.shields.io/badge/Gmail-EA4335?style=flat-square&logo=Gmail&logoColor=white"
                                    alt="Gmail"/>
                            </Link>

                            <Link href="https://github.com/ppotatoG">
                                <img
                                    src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"
                                    alt="Gmail"/>
                            </Link>
                        </BadgeBox>
                    </Area>
                </Article>
            </Layout>
        </>
    )
}

const Area = styled.div`
    h3 {
        font-size: 1.8em;
        margin:30px 0 10px;
        &:nth-of-type(1) {
            margin: 0 0 10px 0;
        }
    }
`;

const BadgeBox = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    height: fit-content;
    img {
        display: block;
    }
    & + & {
        margin-top:10px;
    }
`;

const Article = styled.article`
    display: flex;
    align-items: center;
    gap: 20px;
    @media (max-width: 767px) {
        flex-direction: column;
    }
`;

const Link = styled.a`
    text-decoration: none;
`;

export default ContactPage
