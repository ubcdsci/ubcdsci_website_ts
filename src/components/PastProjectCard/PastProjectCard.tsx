import React, { useState } from 'react';
import './PastProjectCard.scss'
import { Stack, Chip} from '@mui/material';
import GreenButton from '../GreenButton';

export interface PastProjectCardProps {
    item: ProjectContent,
    index: number
}


const PastProjectCard: React.FC<PastProjectCardProps> = (props) => {

    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    

    return(
        (isMobile ? 
            <div className='past-project-card'>
                <div className='past-project-card-flex-container'>
                    <div className="past-project-card-text-container">
                        <div className="past-project-card-title-2">
                            {props.item.title}
                        </div>
                        <div className='past-project-card-sub-title'>
                            {props.item.concepts}
                        </div>
                        <div className='past-project-card-tags'>
                            <Stack direction="row" spacing={3}>
                                {props.item.tech.map((tag: String) => {
                                    return(
                                        <Chip label={tag} sx={{
                                            background: '#141414',
                                            borderRadius: '8px',
                                            color: 'white',
                                            fontWeight: '600',
                                        }}/>
                                    );
                                })}
                            </Stack>
                        </div>
                    </div>
                    <div className="past-project-card-image-container">
                        <img src={props.item.image} alt={props.item.id}/>
                    </div>
                    <div>
                        <div className="past-project-card-body">
                                {props.item.body}
                            </div>
                            <div className='past-project-card-links'>
                                {props.item.competition_info && 
                                    <GreenButton
                                    text="Competition Info"
                                    href={props.item.competition_info}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className='past-project-card-button'
                                />}
                                <GreenButton
                                    text="Github"
                                    href={props.item.github}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className='past-project-card-button'
                                />
                            </div>
                    </div>
                </div>
            </div>
            : 
            <div className='past-project-card'>
                <div className='past-project-card-flex-container'>
                    <div className="past-project-card-text-container">
                        <div className="past-project-card-title-2">
                            {props.item.title}
                        </div>
                        <div className='past-project-card-sub-title'>
                            {props.item.concepts}
                        </div>
                        <div className='past-project-card-tags'>
                            <Stack direction="row" spacing={3}>
                                {props.item.tech.map((tag: String) => {
                                    return(
                                        <Chip label={tag} sx={{
                                            background: '#141414',
                                            borderRadius: '8px',
                                            color: 'white',
                                            fontWeight: '600',
                                        }}/>
                                    );
                                })}
                            </Stack>
                        </div>
                        <div className="past-project-card-body">
                            {props.item.body}
                        </div>
                        <div className='past-project-card-links'>
                            {props.item.competition_info && 
                                <GreenButton
                                text="Competition Info"
                                href={props.item.competition_info}
                                target="_blank"
                                rel="noreferrer noopener"
                                className='past-project-card-button'
                            />}
                            <GreenButton
                                text="Github"
                                href={props.item.github}
                                target="_blank"
                                rel="noreferrer noopener"
                                className='past-project-card-button'
                            />
                        </div>
                    </div>
                    <div className="past-project-card-image-container">
                        <img src={props.item.image} alt={props.item.id}/>
                    </div>
                </div>
            </div>
        )
        
    );
};

export default PastProjectCard;