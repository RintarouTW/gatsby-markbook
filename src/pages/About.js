import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>This is about page.</h1>
    <p>Welcome to the about page.</p>
    <p>This page is located in 'src/pages/About.js'; 
    the header linked text 'About' is hard coded in 'src/components/header.js'.</p>    
  </Layout>
)

export default About
