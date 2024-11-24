import ProjectHeroSection from '@/components/ProjectHeroSection/ProjectHeroSection';
import './ProjectsV2.scss'


import { projectsListData as data} from '@/configs/config';
import PastProjectCard from '@/components/PastProjectCard/PastProjectCard';

const ProjectsV2 = () => {
    return(
        <>
            <ProjectHeroSection/>
            <div>
                {data.map((item: ProjectContent,index: number) => {
                    return(
                        <PastProjectCard item={item} index={index}/>
                    );
                })}
            </div>

        </>

    );

};

export default ProjectsV2;