
export default {
    path: '/login',
    name: 'Login',
    component: () => import( '../../views/Login.vue'),
    children:[
        {
            path: '',
            component: () => import( '../../components/user/login'), 
        },
        {
            path: 'register',
            component: () => import( '../../components/user/register'), 
        }
        
    ]
}