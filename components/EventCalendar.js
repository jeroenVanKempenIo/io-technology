import Link from '@/components/Link'
import { isFutureEvent } from '@/lib/events'

const EventCalendar = ({ events }) => {
  return (
    <ul className="m-0 flex list-none flex-col gap-8 bg-gray-100 p-8">
      {events.map((event) => (
        <li
          className={`relative m-0 bg-white p-4 ${
            isFutureEvent(event.dateTime) ? '' : ' opacity-50'
          }`}
          key={event.id}
        >
          <h3 className="m-0 line-clamp-2 text-lg font-medium">{event.title}</h3>
          <p className="m-0 line-clamp-2 text-sm">{event.description}</p>
          <p className="m-0 mt-auto line-clamp-2 pt-6 text-xs">
            <time
              className={`font-bold ${isFutureEvent(event.dateTime) ? 'text-io_blue-600' : ''}`}
              dateTime={new Intl.DateTimeFormat('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              }).format(new Date(event.dateTime))}
            >
              {new Intl.DateTimeFormat('en-US', {
                day: 'numeric',
                month: 'long',
              }).format(new Date(event.dateTime))}
            </time>
            {' | '}
            {event.groupName}
          </p>
          <Link
            href={event.eventUrl}
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-0 left-0 right-0 top-0 text-0"
          >
            Go to page for {event.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default EventCalendar
