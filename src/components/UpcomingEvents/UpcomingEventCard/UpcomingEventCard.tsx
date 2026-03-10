import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import styles from './UpcomingEventCard.module.scss';
import { Button } from '@mui/material';
import { createGoogleCalendarUrl } from '../../../utils/calendar';

/**
 * Creates a card component
 * @param {UpcomingEventObject} item the data of the card
 * @returns {JSX.Element} JSX Component. 
 */

interface UpcomingEventCardProps {
    item: UpcomingEventObject,
}
export const UpcomingEventCard: React.FC<UpcomingEventCardProps> = ({ item }) => {
    // Normalize display date (if provided) for human-readable parts
    const displayDate = item.date
        ? (item.date instanceof Date ? item.date : new Date(item.date))
        : null;

    const weekday = displayDate
        ? displayDate.toLocaleString('en-us', { weekday: 'short', timeZone: 'UTC' }).toUpperCase()
        : '';

    const month = displayDate
        ? displayDate.toLocaleString('en-us', { month: 'long', timeZone: 'UTC' })
        : '';

    const day = displayDate
        ? displayDate.toLocaleString('en-us', { day: 'numeric', timeZone: 'UTC' })
        : '';

    // Determine start/end for calendar event. Support explicit start/end or compose from date+time.
    const rawStart = (item as any).start ?? (item.date && item.time ? `${displayDate?.toDateString()} ${item.time}` : null);
    const start = rawStart ? new Date(rawStart) : (displayDate ?? null);
    const rawEnd = (item as any).end ?? null;
    const end = rawEnd ? new Date(rawEnd) : (start ? new Date(start.getTime() + 60 * 60 * 1000) : null);

    const canCreateCalendar = !!start && !!end && !isNaN(start.getTime()) && !isNaN(end.getTime());
    const calendarUrl = canCreateCalendar
        ? createGoogleCalendarUrl({
            title: item.title,
            start: start as Date,
            end: end as Date,
            details: item.description,
            location: item.location,
            timezone: (item as any).timezone,
        })
        : null;

    return (
        <Card sx={{
            background: item.important ? 'linear-gradient(to right, #C00FAF,#D3041D)' : '#181818',
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
                    {`${weekday}, ${month} ${day}`}
                    <span>&#8226;</span>
                    {item.time}
                </div>
                <div className={styles.EventLocation}>
                    {item.location}
                </div>
                <div className={styles.EventDescription}>
                    {item.description}
                </div>
                {canCreateCalendar && (
                    <div className={styles.EventActions}>
                        <Button
                            component="a"
                            href={calendarUrl ?? undefined}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="outlined"
                            className={styles.EventButton}
                            aria-label={`Add ${item.title} to Google Calendar`}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                                <path d="M16 3v4M8 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M3 10h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                            <span className={styles.EventButtonText}>Add to Calendar</span>
                        </Button>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}