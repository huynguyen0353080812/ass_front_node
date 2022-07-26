import Navigo from 'navigo'
import { home } from './pages/home'
const router = new Navigo('/', { linksSelector: 'a' })
document.addEventListener('DOMContentLoaded', async () => {
  async function print(Page, id) {
    const app = document.querySelector('#app')
    if (app) {
      app.innerHTML = await Page.render(id)
      ok
      huy,huy
    }
    if (Page.afterRender) Page.afterRender()
  }
  router.on({
    '/': () => print(home),
  })
  router.resolve()
})
