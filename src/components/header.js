import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ data }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <h6 style={{ margin: 0 }}>
        <Link
          to="/About/"
          style={{
            color: "#888888",
            textDecoration: "none"
          }}
        >
          About
        </Link>
      </h6>
    </div>
  </header>
)

export default props => (
  <StaticQuery query={graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
    `}
    render={data => <Header data={data} {...props} />}
  />
)

Header.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}
