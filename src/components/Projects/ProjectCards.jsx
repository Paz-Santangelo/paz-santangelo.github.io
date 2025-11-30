import React from 'react'

const ProjectCards = ({ img, title, description, links }) => {
    return (
        <div className="project-card-custom">
            <div className="project-card-img-container">
                <img src={img} alt={title} />
            </div>
            <h3>{title}</h3>
            {description && <p>{description}</p>}
            <div className="project-links d-flex justify-content-center">
                {links?.frontend && (
                    <button
                        className="project-btn"
                        onClick={() => window.open(links.frontend, "_blank")}
                    >
                        Frontend
                    </button>
                )}
                {links?.backend && (
                    <button
                        className="project-btn"
                        onClick={() => window.open(links.backend, "_blank")}
                    >
                        Backend
                    </button>
                )}
            </div>
        </div>
    );
}

export default ProjectCards