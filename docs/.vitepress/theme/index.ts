import { h } from 'vue'
import '../style/vars.css'
import Theme from 'vitepress/theme'
import AdComponent from './AdComponent.vue'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'doc-before': () => h(AdComponent),
    })
  },
}