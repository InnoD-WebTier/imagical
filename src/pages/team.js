import React from 'react';
import Member from '../components/Member';
import '../styles/index.css';

const Team = ({
  data: {
    markdownRemark: {
      frontmatter: { board, directors, advisors }
    },
    allFile: {
      edges
    }
  }
}) => {
  const images = edges.reduce((images, edge) => {
    const resolutions = edge.node.childImageSharp.resolutions;
    images[resolutions.originalName] = resolutions;
    return images;
  }, {});

  const getImageFileName = (image) => image.substring(image.lastIndexOf('/') + 1);

  return (
    <div>
      <h1 className="title">MEET THE TEAM</h1>
      <h2 className="subtitle">executive board</h2>
      <div className="team__member-container">
        {board.map((boardMember) => (
          <Member
            name={boardMember.name}
            position={boardMember.role}
            image={images[getImageFileName(boardMember.image)]}
          />
        ))}
      </div>
      <h2 className="subtitle">directors &amp; project managers</h2>
      <div className="team__member-container">
        {directors.map((director) => (
          <Member
            name={director.name}
            position={director.role}
            image={images[getImageFileName(director.image)]}
          />
        ))}
      </div>
      <h2 className="subtitle">advisors</h2>
      <div className="team__member-container">
        {advisors.map((advisor) => (
          <Member
            name={advisor.name}
            image={images[getImageFileName(advisor.image)]}
          />
        ))}
      </div>
    </div>
  );
}

export default Team;

export const pageQuery = graphql`
  query TeamPageQuery {
    markdownRemark(
      fileAbsolutePath: { regex: "/team.md/" }
    ) {
      frontmatter {
        board {
          name
          image
          role
        }
        directors {
            name
            image
            role
          }
        advisors {
          name
          image
        }
      }
    }
    allFile(
      filter: { internal: { mediaType: {eq: "image/jpeg"} } }
    ) {
      edges {
        node {
          childImageSharp {
            resolutions(
                width: 250,
                height: 250,
                quality: 100,
                cropFocus: CENTER
            ) {
                base64
                width
                height
                src
                srcSet
                originalName
            }
          }
        }
      }
    }
  }
`;
