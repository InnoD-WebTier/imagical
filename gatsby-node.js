/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it


 var Airtable = require('airtable');
 var base = new Airtable({apiKey: process.env.API}).base('app3iO3a9F5k0AMdn');

 base('Contact Form').create({
   "Name": "Shalandy",
   "Email": "shalandy@berkeley.edu",
   "Message": "Hello"
 }, function(err, record) {
     if (err) { console.error(err); return; }
     console.log(record.getId());
 });
