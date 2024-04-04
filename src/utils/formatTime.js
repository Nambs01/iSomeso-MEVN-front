import { format, differenceInYears, differenceInCalendarDays } from 'date-fns'

export const formatTime = (messageTime) => {
  try {
    const nowDate = new Date()
    const messageDate = new Date(messageTime)

    const year = differenceInYears(nowDate, messageDate)

    if (year === 0) {
      const day = differenceInCalendarDays(nowDate, messageDate)

      const messageDay = format(new Date(messageTime), 'dd MMM')
      const heure = format(new Date(messageTime), 'HH:mm')
      if (day === 0) {
        return heure
      } else if (day === 1) {
        return `Hier. ${heure}`
      } else {
        return `${messageDay}. ${heure}`
      }
    } else return format(new Date(messageTime), 'dd MMM yyyy')
  } catch (error) {
    return
  }
}
