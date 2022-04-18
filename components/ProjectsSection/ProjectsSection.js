import Project from '../Project/Project';
import styles from './ProjectsSection.module.css';

const ProjectsSection = () => {
  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.projectsSection__title}>PROJECTS</h2>
      <div className={styles.projectsSection__projects}>
        <Project
          title='Guest Book'
          imgUrl='/images/guest-book.png'
          link='https://guest-book-client.vercel.app/'
        />
        <Project
          title='Discover coffee stores'
          imgUrl='/images/discover-coffee-stores.png'
          link='https://discover-coffee-stores-jade.vercel.app/'
        />
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
