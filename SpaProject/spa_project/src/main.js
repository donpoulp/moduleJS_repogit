import Vue from "vue"
import VueRouter from "vue-router"
import CitiesList from './components/CitiesList'
import App from "./App"

const routes = [
  { path: '/CitiesList', component: CitiesList },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.config.productionTip = false;

const app = new Vue({
  render: (h) => h(App), router
}).$mount("#app")

app.use(VueRouter)
