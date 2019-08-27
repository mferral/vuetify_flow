import List from '../views/posts/List.vue';
import Add from '../views/posts/Add.vue';

export default [
    {
        path: '/posts/list',
        component: List,
        name:"/post-list"
    },
    {
        path: '/posts/add',
        component: Add,
        name:"post-add"
    },
]