import React from 'react'
import Link from 'gatsby-link'
import logo from '../images/imagi_logo.png'
import 'bootstrap/dist/css/bootstrap.min.css'

const IndexPage = () => (
  <div>
    <div className="title title--logo">
        <img src={logo} />
    </div>
    <h2 className="subtitle">
        UC Berkeley's award-winning creative consulting team
    </h2>
  </div>
)

export default IndexPage
