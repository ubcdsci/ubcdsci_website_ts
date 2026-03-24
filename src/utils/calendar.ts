export type CalendarEvent = {
  title: string;
  start: Date | string;
  end?: Date | string;
  details?: string;
  location?: string;
  timezone?: string;
};

function toDate(d: Date | string) {
  return d instanceof Date ? d : new Date(d);
}

function formatDateForGoogle(d: Date) {
  // YYYYMMDDTHHMMSSZ
  return d.toISOString().replace(/-|:|\.\d{3}/g, '');
}

export function createGoogleCalendarUrl(event: CalendarEvent) {
  const start = toDate(event.start);
  const end = event.end ? toDate(event.end) : new Date(start.getTime() + 60 * 60 * 1000);

  const dates = `${formatDateForGoogle(start)}/${formatDateForGoogle(end)}`;

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates,
    details: event.details || '',
    location: event.location || '',
  });

  if (event.timezone) params.append('ctz', event.timezone);

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
