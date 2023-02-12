import { h } from 'vue'
import '../style/vars.css'
import Theme from 'vitepress/theme'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {

    })
  },
}