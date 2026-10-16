import React from 'react';
import featuredProjects from '../data/featured';

function FeaturedGrid() {
  return (
    <div className="featured-grid">
      {featuredProjects.map((project) => {
        const content = (
          <>
            <span className="featured-mark">{project.mark}</span>
            <h4 className="featured-title">{project.title}</h4>
            <p className="featured-description">{project.description}</p>
            {project.url && <span className="featured-visit">Visit site</span>}
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
              <span className="visually-hidden"> (opens in a new tab)</span>
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

export default FeaturedGrid;
