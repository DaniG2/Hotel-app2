import vueRouter from 'vue-router'
import Camiloinicia from './components/Camiloinicia'
import VistaUser from './components/VistaUser'
import Inventario from './components/Inventario'

import App from './App'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
    {
        path: '/',
        name: "root",
        component: App
    },
    {
        path: '/Inicio',
        name: "Inicio",
        component: Camiloinicia
    },
    {
        path: '/Inicio/VistaUser',
        name: "VistaUser",
        component: VistaUser
    },
    {
        path: '/Inicio/Inventario',
        name: "Inventario",
        component: Inventario
    },
    ]
})
export default router