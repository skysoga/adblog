var moment = require('moment')
const Flatpickr = require("flatpickr")
export function dateTime (time) {
  if (!time) {
    return ''
  }
  return moment(new Date(time)).format('YYYY-MM-DD hh:mm:ss')
}
export function flatpicker (element, option) {
  return new Flatpickr(element, option)
}
