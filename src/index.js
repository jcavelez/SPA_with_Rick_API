import router from './routes'

window.onload = router

window.addEventListener('hashchange', router)