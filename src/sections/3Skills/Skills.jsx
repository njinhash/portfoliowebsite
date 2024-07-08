import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  const skills = [
    ["HTML", "CSS", "JavaScript",
    "React",
    "Redux", "Git",  "Bootstrap"]
  ];

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      {skills.map((skillGroup, index) => (
        <div key={index} className={styles.skillList}>
          {skillGroup.map(skill => (
            <SkillList key={skill} src={checkMarkIcon} skill={skill} />
          ))}
          {index < skills.length - 1 && <hr />}
        </div>
      ))}
    </section>
  );
}

export default Skills;
