import ptLocale from '@fullcalendar/core/locales/pt-br'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import listPlugin from '@fullcalendar/list'
import FullCalendar from '@fullcalendar/react'
import './styles.scss'

// ====================================
export default function Calendar({ events = {} }) {
  const eventList = [
    {
      title: 'Aniversário de João \
      Aniversário de João Aniversário de João',
      date: '2024-01-11',
      color: 'red',
    },
    {
      title: 'Aniversário de João',
      date: '2024-01-11',
      color: 'yellow',
    },
    {
      title: 'Aniversário de João',
      date: '2024-01-11',
    },
    {
      title: 'Aniversário de João',
      date: '2024-01-11',
    },
    {
      title: 'Aniversário de João',
      date: '2024-01-11',
    },
    {
      title: 'Aniversário de João',
      date: '2024-01-12',
    },
    {
      title: 'Aniversário de João',
      date: '2024-01-12',
    },
    {
      title: 'Aniversário de João',
      date: '2024-01-12',
    },
  ]

  return (
    <section className='rounded-xl bg-gray-50 px-4 sm:px-14 py-10 dark:bg-gray-900'>
      <FullCalendar
        plugins={[dayGridPlugin, listPlugin]}
        initialView='dayGridMonth'
        themeSystem='bootstrap5'
        locale={ptLocale}
        // headerToolbar={{
        //   left: 'title',
        //   right: '',
        // }}
        headerToolbar={{
          left: 'title',
          right: 'dayGridMonth,dayGridWeek,listMonth',
        }}
        fixedWeekCount='true'
        weekNumbers='true'
        height={600}
        dayMaxEvents={2}
        events={eventList}
        moreLinkClick='list'
      />
    </section>
  )
}

function renderEventContent(eventInfo) {
  return (
    <p className='mb-2 truncate w-40' title={eventInfo.event.title}>
      {eventInfo.event.title}
    </p>
  )
}
