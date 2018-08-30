import React from "react";
import Img from "gatsby-image";

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render() {
    const {
      data: project
    } = this.props;

    return (
      <div className="project__col">
        <div
          className="project__overlay_container"
          style={{
            opacity: this.state.isOpen ? 1 : 0,
            pointerEvents: this.state.isOpen ? "auto" : "none"
          }}
          onClick={() => this.setState({ isOpen: false })}
        >
          <div
            className="project__overlay_content_wrapper"
            onClick={(ev) => ev.stopPropagation()}
          >
            <span
              className="project__overlay_close_btn"
              onClick={() => this.setState({ isOpen: false })}
            >
              ✕
            </span>
            <div className="project__overlay_fluid_img">
              <Img
                sizes={project.fullImage}
                style={{ position: "static" }}
              />
            </div>
            <div className="project__overlay_content">
              <h2 className="subtitle">{project.name} ({project.year})</h2>
              <p>{project.ask}</p>
              {
                project.recommendations ?
                <div className="project__sub_container">
                  <h3 className="subtitle">Recommendations</h3>
                  {project.recommendations.map((rec) =>
                    <div className="project__recs_block">
                      <p>&ldquo;{rec.quote}&rdquo;</p>
                      <p className="project__recs_author">
                        &mdash; {rec.author}
                      </p>
                    </div>
                  )}
                </div>
                : null
              }
              {
                project.awards ?
                <div className="">
                  <h3 className="subtitle">Awards</h3>
                  <ul className="project__awards_block">
                  {project.awards.map((award) =>
                    <li>{award}</li>
                  )}
                  </ul>
                </div>
                : null
              }
            </div>
          </div>
        </div>
        <div>
          <Img
            resolutions={project.thumbnail}
            style={{ borderRadius: "100%" }}
          />
        </div>
        <div className="project__btn">
          <button
            className="button button--primary"
            onClick={() => this.setState({ isOpen: true })}
          >
            {project.name}
          </button>
        </div>
      </div>
    );
  }
}
