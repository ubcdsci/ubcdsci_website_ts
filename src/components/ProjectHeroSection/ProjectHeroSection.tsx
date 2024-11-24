// JSX Component
import "./ProjectHeroSection.scss";

const ProjectHeroSection = () => {
  return (
    <div className='project-hero-container'>
      <span className='project-label'>&#60;PROJECTS /&#62;</span>
      <h1 className='project-hero-title'>
       Explore our club's
        <span className='project-hero-collaborative'> collaborative  </span>
        <span className='project-hero-triumphs'>triumps  </span>
        through our 
        <span className='project-hero-project'> projects</span>
      </h1>
      <p className='project-hero-description'>
        Fostering future data science leaders through an inclusive community{" "}
        that connects{" "}
        <span className='project-hero-highlight'>academia with industry.</span>
      </p>
    </div>
  );
};

export default ProjectHeroSection;