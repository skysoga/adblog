export default {
  // ids of the items that should be currently displayed based on
  // current list type and current pagination
  activeIds (state) {
    const { items } = state
    console.log('getters')
    console.log(state.items)
    return items
  },
  // items that should be currently displayed.
  // this Array may not be fully fetched.
  activeItems (state, getters) {
    return getters.activeIds
  }
}
