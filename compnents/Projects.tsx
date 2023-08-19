import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { projectData } from './data.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectData && projectData.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-header">
            <FontAwesomeIcon icon={faFolder} className="folder-icon"/>
              <div className="small-icons">
                <a href={project.gitHubLink}><FontAwesomeIcon icon={faGithub}/></a>
              </div>
            </div>
            <h3 className="project-name">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default Projects;