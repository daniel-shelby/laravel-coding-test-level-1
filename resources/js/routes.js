import { createRouter, createWebHistory } from 'vue-router';
import EventList from './components/Event/Index.vue';
import EditEvent from './components/Event/Edit.vue';

const routes = [
    {
        name: 'EventList',
        path: '/events',
        component: EventList
    },
    {
        name: 'EditEvent',
        path: '/events/:id',
        component: EditEvent
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
