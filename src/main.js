import Navigo from 'navigo'
import { home } from './client/pages/home'
const router = new Navigo('/', { linksSelector: 'a' })
document.addEventListener('DOMContentLoaded', async () => {
  async function print(Page, id) {
    const app = document.querySelector('#app')
    if (app) {
      app.innerHTML = await Page.render(id)
    }
    if (Page.afterRender) Page.afterRender()
  }
  router.on({
    '/': () => print(home),
  })
  router.resolve()
})
