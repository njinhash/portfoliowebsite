import React from 'react';



function ProjectCard({ src, link, h3, p, githubLink}) {
  return (
    <div>
      <a href={link} rel="noreferrer" target="_blank">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
      <br />
      <a href={githubLink} rel="noreferrer" target="_blank"><button>Github</button></a>
    </div>
  );
}

export default ProjectCard;
