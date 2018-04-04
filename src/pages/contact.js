import React from 'react'
import Link from 'gatsby-link'
import 'bootstrap'
import './contact.css'

const ContactPage = () => (
  <div>
    <h1 className="title">CONTACT</h1>
    <h2 className="subheader">LEAVE US A NOTE</h2>
    <ul className="nav nav-tabs" role="tablist">
      <li role="presentation"><a href="#request" aria-controls="request" role="tab" data-toggle="tab">request</a></li>
      <li role="presentation"><a href="#question" aria-controls="question" role="tab" data-toggle="tab">question</a></li>
      <li role="presentation"><a href="#other" aria-controls="other" role="tab" data-toggle="tab">other</a></li>
    </ul>
  <div className="tab-content">
    <div role="tabpanel" className="tab-pane active" id="request">
    <blockquote className="embedly-card"><h4><a href="https://airtable.com/embed/shrXMCd05Wn1pCOhe?">Client Contact Form - Airtable</a></h4><p>Fill out the "Client Contact Form" form quickly and securely on Airtable.</p></blockquote>
    <script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>
    </div>
    <div role="tabpanel" className="tab-pane" id="question">embed airtable form 2</div>
    <div role="tabpanel" className="tab-pane" id="other">embed airtable form 3</div>
  </div>
      <h2 className="subheader">OR FIND US HERE</h2>
  </div>
)

export default ContactPage
