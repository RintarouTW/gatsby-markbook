import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/seo"

// export default ({ data, pageContext, path, slug }) => {
export default (props) => {

  const { data, pageContext } = props

  let post

  post = data.markdownRemark ? data.markdownRemark : data.mdx

  const slug = pageContext.slug.replace(/\//g, "")
  const title = post.frontmatter.title ? post.frontmatter.title : slug

  if (data.markdownRemark)
    return (
      <Layout>
        <SEO title={title} />
        <div>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Layout>
    )
  else
    return (
      <Layout>
        <SEO title={title} />
        <div>
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
      </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
  }
`
