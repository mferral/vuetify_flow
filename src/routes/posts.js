import List from '../views/posts/List.vue';
import Add from '../views/posts/Add.vue';
import Edit from '../views/posts/Edit.vue';

export default [
    {
        path: '/posts/list',
        component: List,
        name:"post-list"
    },
    {
        path: '/posts/add',
        component: Add,
        name:"post-add"
    },
    {
        path: '/posts/edit/:id',
        component: Edit,
        name:"post-edit"
    },
]