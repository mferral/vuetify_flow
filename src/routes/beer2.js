import List from '../views/beer2/List.vue';
import Add from '../views/beer2/Add.vue';
import Edit from '../views/beer2/Edit.vue';

export default [
    {
        path: '/beer2/list',
        component: List,
        name:"beer2-list"
    },
    {
        path: '/beer2/add',
        component: Add,
        name:"beer2-add"
    },
    {
        path: '/beer2/edit',
        component: Edit,
        name:"beer2-edit"
    }
]