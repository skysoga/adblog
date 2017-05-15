import LgCalendar from './calendar.vue'

/* istanbul ignore next */
LgCalendar.install = (Vue) => {
  Vue.component(LgCalendar.name, LgCalendar)
}
export default LgCalendar