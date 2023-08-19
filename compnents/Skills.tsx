import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs, faReact, faNode, faPython } from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
    return (
      <div className="skills-container">
        <h2>Skills</h2>
        <div className="grid-skills">
          <div className="skill-card js">
          <FontAwesomeIcon icon={faJs}/>
            <p>JavaScript</p>
          </div>
          <div className="skill-card react">
          <FontAwesomeIcon icon={faReact}/>
            <p>React</p>
          </div>
          <div className="skill-card node">
          <FontAwesomeIcon icon={faNode}/>
            <p>Node</p>
          </div>
          <div className="skill-card python">
          <FontAwesomeIcon icon={faPython}/>
            <p>Python</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Skills;