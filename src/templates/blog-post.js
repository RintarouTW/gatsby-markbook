import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/seo"

export default ({ data }) => {

  if (data.markdownRemark) {

    const post = data.markdownRemark
    const slug = post.fields.slug.replace(/\//g, "")
    const seo = post.frontmatter.title ? post.frontmatter.title : slug

    return (
      <Layout>
        <SEO title={seo} />
        <div>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Layout>
    )

  } else if (data.mdx) {

    const post = data.mdx
    const slug = post.fields.slug.replace(/\//g, "")
    const seo = post.frontmatter.title ? post.frontmatter.title : slug

    return (
      <Layout>
        <SEO title={seo} />
        <div>
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
      </Layout>
    )
  }

}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      body
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
