import React from 'react'
import Link from 'gatsby-link'
import '../styles/contact.css'
import mail_icon from "../images/mail_icon.png"
import web_icon from "../images/web_icon.png"
import Airtable from "airtable"

class ContactPage extends React.Component{

  //var Airtable = require('airtable');

  constructor(props) {
  super(props);
  this.base = new Airtable({
    apiKey: process.env.GATSBY_API
  }).base(process.env.BASE_KEY);

  this.state = {
    submitted: false,
  }
}

  onFocus(event) {
    this.setState({
      submitted: false,
    });
  }

  onChange(event) {
  this.setState({
    [event.target.id]: event.target.value,
  });
  }

  shouldComponentUpdate(nextProps, nextState) {
     return (this.state.submitted != nextState.submitted);
  }

  onSubmit(event, tablename) {
    event.preventDefault();
    this.setState({
      submitted: true,
    });
    this.base(tablename).create({
      "Name": this.state.name,
      "Email": this.state.email,
      "Message": this.state.message
    }, (err, record) => {
    if (err) { console.error(err); return; }
    this.setState({name: '', email: '', message: ''});
    console.log(record.getId());
    });
  }

render() {
  let Wrapper = ({ children }) => (
    <div>

      <h1 className="title">CONTACT</h1>
      <h2 className="subtitle padding-title">leave us a note</h2>

      <ul className="nav nav-tabs justify-content-center" role="tablist">
        <li role="presentation"><a href="#question" aria-controls="question" role="tab" data-toggle="tab">question</a></li>
        <li role="presentation"><a href="#request" aria-controls="request" role="tab" data-toggle="tab">request</a></li>
        <li role="presentation"><a href="#other" aria-controls="other" role="tab" data-toggle="tab">other</a></li>
      </ul>

    <div className="tab-content">

      <div role="tabpanel" className="tab-pane" id="request">
      {children}
      <div className="form-wrapper">
      <form>
        <label htmlFor="name">COMPANY</label>
        <input
          onFocus = {(event) => this.onFocus(event)}
          onChange = {(event) => this.onChange(event)}
          type="text"
          id="name"
          value={this.state.name}/><br/>

        <label htmlFor="email">&nbsp; &nbsp; &nbsp; EMAIL</label>
        <input onFocus = {(event) => this.onFocus(event)}
        onChange = {(event) => this.onChange(event)} type="text" id="email" value={this.state.email}/><br/>

        <label htmlFor="message">MESSAGE</label>
        <textarea onFocus = {(event) => this.onFocus(event)}
        onChange = {(event) => this.onChange(event)} type="textlong" id="message" value={this.state.message}/><br/>

        <input className="button" type="submit" value="send" onClick={(event) => this.onSubmit(event, "Client Requests")}/>
      </form>
      </div>
      </div>

      <div role="tabpanel" className="tab-pane active" id="question">
      {children}
      <div className="form-wrapper">
      <form>
        <label htmlFor="name">NAME</label>
        <input onFocus = {(event) => this.onFocus(event)}
        onChange = {(event) => this.onChange(event)} type="text" id="name"/><br/>

        <label htmlFor="email">EMAIL</label>
        <input onFocus = {(event) => this.onFocus(event)}
        onChange = {(event) => this.onChange(event)} type="text" id="email"/><br/>

        <label htmlFor="message">MESSAGE</label>
        <textarea onFocus = {(event) => this.onFocus(event)}
        onChange = {(event) => this.onChange(event)} type="textlong" id="message"/><br/>

        <input className="button" type="submit" value="send" onClick={(event) => this.onSubmit(event, "Recruitment Questions")}/>
      </form>
      </div>
      </div>
      <div role="tabpanel" className="tab-pane" id="other">
      {children}
      <div className="form-wrapper">
      <form>
        <label htmlFor="name">NAME</label>
        <input onFocus = {(event) => this.onFocus(event)}
        onChange = {(event) => this.onChange(event)} type="text" id="name"/><br/>

        <label htmlFor="email">EMAIL</label>
        <input onFocus = {(event) => this.onFocus(event)}
        onChange = {(event) => this.onChange(event)} type="text" id="email"/><br/>

        <label htmlFor="message">MESSAGE</label>
        <textarea onFocus = {(event) => this.onFocus(event)}
        onChange = {(event) => this.onChange(event)} type="textlong" id="message"/><br/>

        <input className="button" type="submit" value="send" onClick={(event) => this.onSubmit(event, "Other Questions")}/>
      </form>
      </div>
      </div>
    </div>


        <h2 className="subtitle padding-title">or find us here</h2>
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
  );

  if (this.state.submitted) {
    return (
      <Wrapper>
      <p> Thank you for your message — we will be in contact shortly! <br/> &nbsp; </p>
      </Wrapper>
    );
  }

  return(
    <Wrapper>
    </Wrapper>
  );
}
}

export default ContactPage;
