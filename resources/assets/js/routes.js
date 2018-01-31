let routes = [
    // Home
    { path: '/', name: 'home', component: require('./views/Home') },
    { path: '/games', name: 'games', component: require('./views/Games') },

    // 404
    { path: '*', redirect: { name: 'home' } },
]

export default {
    routes,
    mode: 'history',
}
