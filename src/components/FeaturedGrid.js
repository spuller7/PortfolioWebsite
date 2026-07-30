import React, { Component } from 'react';
import featuredProjects from '../data/featured';

class FeaturedGrid extends Component {
  render() {
    return (
      <div className="featured-grid">
        {featuredProjects.map((project) => (
          <article className="featured-widget" key={project.id}>
            <span className="featured-mark" aria-hidden="true">
              {project.mark}
            </span>
            <h3 className="featured-title">{project.title}</h3>
            <p className="featured-description">{project.description}</p>
          </article>
        ))}
      </div>
    );
  }
}

export default FeaturedGrid;
