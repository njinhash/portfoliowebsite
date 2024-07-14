import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import calorie from '../../assets/calorie.jpg';
import dragonlance from '../../assets/dragonlance.jpg';
import mytunez from '../../assets/mytunez.jpg';
import pokedex  from '../../assets/pokedex .jpg';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={calorie}
          link="https://caloriccalculator.netlify.app/"
          h3="calorie"
          p="calorie calculator app"
          githubLink="https://github.com/njinhash/calorie"
        />
        <ProjectCard
          src={dragonlance}
          link="https://dragonlance.netlify.app/"
          h3="dragonlance"
          p="basic rpg game"
          githubLink="https://github.com/njinhash/rpg"
        />
        <ProjectCard
          src={mytunez}
          link="https://mytunezmp3.netlify.app/"
          h3="mytunez"
          p="basic mp3 player"
          githubLink="https://github.com/njinhash/player"
        />
        <ProjectCard
          src={pokedex}
          link="https://apppokesearch.netlify.app/"
          h3="pokedex"
          p="pokemon search App"
          githubLink="https://github.com/njinhash/poke"
        />
      </div>
    </section>
  );
}

export default Projects;
