import React from 'react'
import Link from 'gatsby-link'
import 'bootstrap'
import '../styles/contact.css'
import mail_icon from "../images/mail_icon.png"
import web_icon from "../images/web_icon.png"

const ContactPage = () => (
  <div>

    <h1 className="title">CONTACT</h1>
    <h2 className="subheader">LEAVE US A NOTE</h2>

    <ul className="nav nav-tabs" role="tablist">
      <li role="presentation"><a href="#question" aria-controls="question" role="tab" data-toggle="tab">question</a></li>
      <li role="presentation"><a href="#request" aria-controls="request" role="tab" data-toggle="tab">request</a></li>
      <li role="presentation"><a href="#other" aria-controls="other" role="tab" data-toggle="tab">other</a></li>
    </ul>

  <div className="tab-content">

    <div role="tabpanel" className="tab-pane" id="request">
    <iframe src="https://airtable.com/embed/shrXMCd05Wn1pCOhe?"
    width="100%" height="700px" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
    </div>

    <div role="tabpanel" className="tab-pane active" id="question">
    <div className="form-wrapper">
    <form
    action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSfV5bknRNsihS5NawmwbxrQescFv0SUOW7lUqkK6vilY_Q89w/formResponse"
    target="_blank">
      <label for="name">NAME</label>
      <input name="entry.996513036" type="text" id="name"/><br/>

      <label for="email">EMAIL</label>
      <input name="entry.490849847" type="text" id="label"/><br/>

      <label for="message">MESSAGE</label>
      <textarea name="entry.1212864203" type="textlong" id="message"/><br/>

      <input className="button" type="submit" value="send"/>
    </form>
    </div>
    </div>
    <div role="tabpanel" className="tab-pane" id="other">embed form 3</div>
  </div>


      <h2 className="subheader">OR FIND US HERE</h2>
      <div className="container">
        <div className="row align-items-center padding-sm">
          <div className="col-lg-2 order-lg-1">
              <img src={mail_icon} alt="mail_icon" className="contact-icon"/>
          </div>
          <div className="col-lg-4 order-lg-2">
              <p>Recruitment: <a href="mailto:recruit@calaaf.com" className="link-accent">
              recruit@calaaf.com</a> <br/>
               Business: <a href="mailto:relations@calaaf.com" className="link-accent">
               relations@calaaf.com</a><br/>
              All other questions: <a href="mailto:contact@calaaf.com" className="link-accent">
              rcontact@calaaf.com</a> </p>
          </div>
          <div className="col-lg-2 order-lg-3">
              <img src={web_icon} alt="web_icon" className="contact-icon"/>
          </div>
          <div className="col-lg-4 order-lg-4">
              <p><a href="https://www.facebook.com/berkeleyaaf" className="link-accent">
              https://www.facebook.com/berkeleyaaf</a> <br/>
              <a href="https://www.twitter.com/imagitweet" className="link-accent">
              https://www.twitter.com/imagitweet</a> <br/>
              <a href="https://www.linkedin.com/groups/1851915/profile" className="link-accent">
              https://www.linkedin.com/groups/1851915/profile</a>
              </p>
          </div>
        </div>
      </div>
  </div>
)

export default ContactPage
