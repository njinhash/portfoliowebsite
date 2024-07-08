import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import fccLight from '../../assets/fcc-light.svg';
import fccDark from '../../assets/fcc-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;

  const socialMedia = [
    {
      link: "https://www.freecodecamp.org/DAcamper",
      icon: theme === 'light' ? fccLight : fccDark,
      alt: "Fcc icon",
      className: "fcc"
    },
    {
      link: "https://github.com/njinhash?tab=repositories",
      icon: theme === 'light' ? githubLight : githubDark,
      alt: "Github icon",
      className: "github"
    },
    {
      link: "https://www.linkedin.com/in/daniel-acebo-17b708248/",
      icon: theme === 'light' ? linkedinLight : linkedinDark,
      alt: "Linkedin icon",
      className: "linkedin"
    }
  ];

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile of Daniel"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Daniel
          <br />
          Acebo
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          {socialMedia.map((media, index) => (
            <a key={index} href={media.link} rel="noreferrer" target="_blank">
              <img className={media.className} src={media.icon} alt={media.alt} />
            </a>
          ))}
        </span>
        <p className={styles.description}>
        Mastering HTML, CSS, JavaScript, and React for building responsive, engaging web applications.
        </p>
        <a href={CV} download>
          <button className="hover">Download CV</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
