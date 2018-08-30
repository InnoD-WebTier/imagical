import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import Project from '../components/Project';

import '../styles/index.css';
import '../styles/clients.css';

export default class ClientsPage extends Component {
  render() {
    const {
      data: {
        markdownRemark: {
          frontmatter: {
            projects,
            nsac
          }
        },
        allFile: {
          edges: images
        }
      }
    } = this.props;

    const keyByOriginalNameFrom = (key) => (obj, img) => {
      let res = img.node.childImageSharp[key];
      obj[res.originalName] = res;
      return obj;
    };

    const thumbnailMap = images.reduce(keyByOriginalNameFrom("thumbnail"), {});
    const imageMap = images.reduce(keyByOriginalNameFrom("full"), {});
    const getImgFromMap = (map, img) => map[img.split('/').pop()];

    return (
      <div className='imgContainer'>
        <h1 className="title">CLIENTS</h1>
        <h2 className="subtitle subtitle--lowercase">Fall Consulting Projects</h2>
        <div className="project__container">
          {projects.map((project) => {
            project.thumbnail = getImgFromMap(thumbnailMap, project.image);
            project.fullImage = getImgFromMap(imageMap, project.image);
            return <Project data={project} />;
          })}
        </div>
        <h2 className="subtitle subtitle--lowercase">National Student Advertising Competition</h2>
        <div className="project__container">
          {nsac.map((project) => {
            project.thumbnail = getImgFromMap(thumbnailMap, project.image);
            project.fullImage = getImgFromMap(imageMap, project.image);
            return <Project data={project} />;
          })}
        </div>
        <h1 className="title">SPONSORS</h1>
        <div className="body__text_container">
          <p className="body__text">
            Everything you see from imagiCal is a result of our perseverance
            and willingness to spend the time and effort to maximize our wealth
            and produce the best campaign that we can. While other NSAC teams may
            have a class or resources dedicated to the competition, imagiCal is
            100% student-run and relies completely on donor support to fund our
            presentation materials and campaign needs. We have a proven track record
            of attracting the best and brightest to our organization, and as you
            can see from our accomplishments to the left, we take pride in creating
            nationally recognized work. Please refer to our sponsorship packet [link]
            to understand what we can provide for you and contact us at&nbsp; 
            <a href="mailto:contact@calaaf.com" className="body__link">
              contact@calaaf.com
            </a>
            &nbsp;if you are interested in learning more. We are also very willing to
            accomodate custom sponsorship packages.
          </p>
          <a className="button" href="">Be Our Sponsor</a>
        </div>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query ClientsQuery {
    markdownRemark(
      fileAbsolutePath: { regex: "/clients-sponsors.md/" }
    ) {
      frontmatter {
        projects {
          name
          year
          recommendations {
            quote
            author
          }
          ask
          image
        }
        nsac {
          name
          year
          awards
          ask
          image
        }
      }
    }
    allFile(
      filter: { absolutePath: { regex: "/clients/\\w+/" } }
    ) {
      edges {
        node {
          childImageSharp {
            thumbnail: resolutions(width: 250, height: 250) {
              ...GatsbyImageSharpResolutions
              originalName
            }
            full: sizes {
              ...GatsbyImageSharpSizes
              originalName
            }
          }
        }
      }
    }
  }
`;
