let routes = [
    // Home
    { path: '/', name: 'home', component: require('./views/Home').default },
    { path: '/games', name: 'games', component: require('./views/Games').default },

    // 404
    { path: '*', redirect: { name: 'home' } },
]

export default {
    routes,
    mode: 'history',
}
