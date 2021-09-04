import dayjs from 'dayjs'

const isPhone = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)

const getFormatTime = time => {
  return dayjs(time).utc(true).tz(dayjs.tz.guess()).format('D / MM h:m A')
}

export { isPhone, getFormatTime }
