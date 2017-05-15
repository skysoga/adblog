import LGTag from './src/tag'

/* istanbul ignore next */
LGTag.install = function (Vue) {
  Vue.component(LGTag.name, LGTag)
}

export default LGTag
