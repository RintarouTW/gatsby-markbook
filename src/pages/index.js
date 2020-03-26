import React, {useState} from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../templates/typography"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {

  const [keyword, setKeyword] = useState("");

  const changeHandler = (e) => {
    setKeyword(e.target.value)
  }
  const allMdx = data.allMdx.edges.filter( ({node}) => {
    return node.fields.slug.toLowerCase().includes(keyword.toLowerCase())
  })

  const allMarkDown = data.allMarkdownRemark.edges.filter( ({node}) => {
    return node.fields.slug.toLowerCase().includes(keyword.toLowerCase())
  })

  const reversed = [ ...allMdx.reverse(), ...allMarkDown.reverse()];

  return (
    <Layout>
      <SEO title="Markbook" />
      <input 
        className={"filterBox"}
        defaultValue={keyword} 
        onChange={changeHandler}>            
      </input>      
      <div>        
        {reversed.map(({ node }) => (
          <div key={node.id}>
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              <Link to={node.fields.slug}>{node.fields.slug.replace(/\//g,"")}</Link>
              <span
                css={css`
                  color: #bbb;
                `}
              >
              </span>
            </h3>
          </div>
        ))}
      </div>
    </Layout>
  )
}

// export const query = graphql`
//   query {
//     allMarkdownRemark {
//       edges {
//         node {
//           fields {
//             slug
//           }
//           id
//         }
//       }
//     }
//   }
// `

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          id
        }
      }
    }
    allMdx {
      edges {
        node {
          fields {
            slug
          }
          id
        }
      }
    }    
  }
`
