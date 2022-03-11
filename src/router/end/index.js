
export default {
    path: '/end',
    name: 'End',
    component: () => import( '../../views/End.vue'),
    meta:{ requiresAuth: true },
    children:[
        {
            path: '',
            component: () => import( '../../components/end/index.vue'),
            children:[
                {
                    path:'add',
                    component: () => import( '../../components/end/right/add'),
                },
                {
                    path:'blog',
                    component: () => import( '../../components/end/right/blog'),
                    children:[
                        {path:'', component: () => import( '../../components/end/right/blog/list.vue') },
                        {path:'change',component: () => import( '../../components/end/right/add')}
                    ]
                },
                {
                    path:'comment',
                    component: () => import( '../../components/end/right/comment'),
                },
                {
                    path:'type',
                    component: () => import( '../../components/end/right/type'),
                },
                {
                    path:'friend/add',
                    component: () => import( '../../components/end/right/friend'),
                },
                {
                    path:'friend/change',
                    component: () => import( '../../components/end/right/friend/change'),
                },
                {
                    path:'user',
                    component: () => import( '../../components/end/right/user'),
                },
                {
                    path:'introduce',
                    component: () => import( '../../components/end/right/user/introduce'),
                },
                {
                    path:'system',
                    component: () => import( '../../components/end/right/system'),
                },
            ] 
        },
    
    ]
}