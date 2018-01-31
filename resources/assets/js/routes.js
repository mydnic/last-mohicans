let routes = [
    // Home
    { path: '/', name: 'home', component: require('./views/Home') },

    // 404
    { path: '*', redirect: { name: 'home' } },
]

export default {
    routes,
    mode: 'history',
}
