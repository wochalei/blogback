export default {
    path: '/',
    name: 'Back',
    component: () => import( '../../views/Index.vue'),
    children:[
        {
            path: '',
            component: () => import( '../../components/back'), 
            children:[
                {   name:'index',
                    path: '',
                    component: () => import( '../../components/back/content/index/index'), 
                
                },
                {
                    path: 'type',
                    component: () => import( '../../components/back/content/type'), 
                }, 
                {
                    path: 'myself',
                    component: () => import( '../../components/back/content/myself'), 
                }, 
                {   name:'show',
                    path: '/show',
                    component:  () => import( '../../components/back/content/show'), 
                },
                {
                    path: 'link',
                    component: () => import( '../../components/back/content/link'), 
                }, 
                {
                    path: 'file',
                    component: () => import( '../../components/back/content/file'), 
                }, 
                 
            ]
        },
          
    ]
}