import React, { Component } from 'react';
import featuredProjects from '../data/featured';

class FeaturedGrid extends Component {
  render() {
    return (
      <div className="featured-grid">
        {featuredProjects.map((project) => {
          const content = (
            <>
              <span className="featured-mark" aria-hidden="true">
                {project.mark}
              </span>
              <h3 className="featured-title">{project.title}</h3>
              <p className="featured-description">{project.description}</p>
            </>
          );

          if (project.url) {
            return (
              <a
                key={project.id}
                className="featured-widget featured-widget--link"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </a>
            );
          }

          return (
            <article className="featured-widget" key={project.id}>
              {content}
            </article>
          );
        })}
      </div>
    );
  }
}

export default FeaturedGrid;
