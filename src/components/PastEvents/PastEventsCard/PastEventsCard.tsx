import { Card, Stack, Chip} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import './PastEventsCard.scss';

/**
 * Creates a past event card component
 * @param {UpcomingEventObject} item the data of the card
 * @returns {JSX.Element} JSX Component. 
 */

interface PastEventCardProps {
    item: PastEventObject,
}


export const PastEventCard: React.FC<PastEventCardProps> = ({item}) => {
    const getTagColor = (tag: String) => {
        if (tag == 'Professionals') {
            return 'linear-gradient(to right, #016BCD,#11A6E5)';
        } 

        // else if (tag == 'Careers') {
        //     return 'linear-gradient(to right, #7301CD,#D511E5)';
        // }
        
        else {
            return '#202020';
        }
    }

    return(
        <Card className='past-event-card'>
            <CardContent className='past-event-card-content'>
                <div className='past-event-date'>
                    {item.date.toLocaleString('en-us', {weekday:'long'}).toUpperCase().slice(0,3) + ", " + item.date.toLocaleString('en-us', {month:'long'}) + " " + item.date.getMonth() + " @ " + item.location}
                </div>
                <div className='past-event-title'>
                    {item.title}
                </div>
                <div className='past-event-description'>
                    <p>{item.description}</p>
                    <p>{item.description2}</p>
                    <p>{item.description3}</p>
                </div>
                <div className='past-event-tags'>
                    <Stack direction="row" spacing={3}>
                        {item.tags.map((tag: String) => {
                            return(
                                <Chip label={tag} sx={{
                                    background: getTagColor(tag),
                                    borderRadius: '8px',
                                    color: 'white',
                                    fontWeight: '600',
                                }}/>
                            );
                        })}
                    </Stack>
                </div>
            </CardContent>
            <CardMedia
                component="img"
                height="140"
                image={item.image}
                className='past-event-image'
            />
        
    </Card>
    );
}