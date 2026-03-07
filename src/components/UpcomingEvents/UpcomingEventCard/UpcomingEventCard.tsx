import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import styles from './UpcomingEventCard.module.scss';

/**
 * Creates a card component
 * @param {UpcomingEventObject} item the data of the card
 * @returns {JSX.Element} JSX Component. 
 */

interface UpcomingEventCardProps {
    item: UpcomingEventObject,
}

export const UpcomingEventCard: React.FC<UpcomingEventCardProps> = ({item}) => {
    return(
        <Card sx={{
            background: item.important? 'linear-gradient(to right, #C00FAF,#D3041D)': '#181818',
            color: 'white',
        }} 
            className={styles.UpcomingEventCard}
        >
            <CardMedia
                component="img"
                height="140"
                image={item.image}
            />
            <CardContent>
                <div className={styles.EventTitle}>
                    {item.title}
                </div>
                <div className={styles.EventDate}>
                    {item.date.toLocaleString('en-us', {weekday:'long'}).toUpperCase().slice(0,3) + ", " + item.date.toLocaleString('en-us', {month:'long'}) + " " + item.date.getMonth() + ""}
                    <span>&#8226;</span> 
                    {item.time}
                </div>
                <div className={styles.EventLocation}>
                    {item.location}
                </div>
                <div className={styles.EventDescription}>
                    {item.description}
                </div>
            </CardContent>
    </Card>
    );
}