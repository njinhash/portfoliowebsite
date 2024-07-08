import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

const projects = [
  {
    src: viberr,
    link: "https://github.com/Ade-mir/company-landing-page-2",
    title: "Viberr",
    description: "Streaming App"
  },
  {
    src: freshBurger,
    link: "https://github.com/Ade-mir/company-landing-page-2",
    title: "Fresh Burger",
    description: "Hamburger Restaurant"
  },
  {
    src: hipsster,
    link: "https://github.com/Ade-mir/company-landing-page-2",
    title: "Hipsster",
    description: "Glasses Shop"
  },
  {
    src: fitLift,
    link: "https://github.com/Ade-mir/company-landing-page-2",
    title: "FitLift",
    description: "Fitness App"
  }
];

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            link={project.link}
            h3={project.title}
            p={project.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
