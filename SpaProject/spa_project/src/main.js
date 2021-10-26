import Vue from "vue"
import VueRouter from "vue-router"
import CitiesList from './components/CitiesList'
import App from "./App"
import Home from "./components/Home"

Vue.use(VueRouter)

const routes = [
  { path: '/CitiesList', component: CitiesList },
  { path: '/', component: Home },
  { path: '/home', component: Home },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App), router
}).$mount("#app")


