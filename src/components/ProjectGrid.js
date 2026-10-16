import React from 'react';
import projects from '../data/projects';
import '../css/portfolio.css';

function asset(path) {
  const base = process.env.PUBLIC_URL || '';
  return `${base}/${path.replace(/^\//, '')}`;
}

function ProjectGrid() {
  return (
    <div className="project-container">
      {projects.map((project) => {
        const primaryHref = (project.preview || (project.repo && project.repo.url)) || null;

        const image = (
          <div className="project-image">
            <img src={asset(project.image)} alt="" />
          </div>
        );

        return (
          <article className="project" key={project.id}>
            {primaryHref ? (
              <a
                href={primaryHref}
                rel="noopener noreferrer"
                target="_blank"
                className="project-image-link"
              >
                {image}
                <span className="visually-hidden">
                  {project.title} (opens in a new tab)
                </span>
              </a>
            ) : (
              image
            )}

            <h4 className="project-title">{project.title}</h4>
            <p className="project-description">{project.description}</p>

            <ul className="project-tabs">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>

            {(project.preview || project.repo) && (
              <div className="project-links">
                {project.preview && (
                  <a href={project.preview} rel="noopener noreferrer" target="_blank">
                    View
                    <span className="visually-hidden">
                      {' '}
                      {project.title} (opens in a new tab)
                    </span>
                  </a>
                )}
                {project.repo && (
                  <a href={project.repo.url} rel="noopener noreferrer" target="_blank">
                    {project.repo.label}
                    <span className="visually-hidden">
                      {' '}
                      {project.title} (opens in a new tab)
                    </span>
                  </a>
                )}
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}

export default ProjectGrid;
