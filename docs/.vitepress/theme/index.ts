import Theme from 'vitepress/theme'
import { h } from 'vue'
import '../style/vars.css'
import AdAsideComponent from './AdAsideComponent.vue'
import AdComponent from './AdComponent.vue'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'doc-before': () => h(AdComponent),
      'aside-outline-after': () => h(AdAsideComponent)
    })
  },
}