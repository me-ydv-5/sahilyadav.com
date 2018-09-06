import React from 'react'
import { graphql } from 'gatsby'

const ProjectPage = props => {
  const { markdownRemark: post } = props.data
  const { transition } = props

  return (
    <div style={transition && transition.style} className="page article">
      <h1 className="title1 under-back">{post.frontmatter.title}</h1>
      {post.frontmatter.intro && (
        <span className="intro">{post.frontmatter.intro}</span>
      )}
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export default ProjectPage

export const projectQuery = graphql`
  query ProjectByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        intro
        path
        title
      }
    }
  }
`