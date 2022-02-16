import Project from '../Project/Project';
import styles from './ProjectsSection.module.css';

const ProjectsSection = () => {
  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.projectsSection__title}>PROJECTS</h2>
      <div className={styles.projectsSection__projects}>
        <Project
          title='Amazon Clone'
          imgUrl='/images/amazon-clone.png'
          link='https://clone-bd963.web.app'
        />
        <Project
          title='Slack Clone'
          imgUrl='/images/slack-clone.png'
          link='https://slack-clone-b11ab.web.app'
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
