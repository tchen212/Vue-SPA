import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en.js'
import zh from './zh.js'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    'en': en,
    'zh': zh
  }
})

if (module.hot) {
  module.hot.accept(['./en.js', './zh.js'], () => {
    i18n.setLocaleMessage('en', require('./en.js'))
    i18n.setLocaleMessage('zh', require('./zh.js'))
    console.log('hot reload', this, arguments)
  })
}

export default i18n
