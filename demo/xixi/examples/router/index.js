import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Layout from '@/components/layout';
import Button from '@/components/button';
import Grid from '@/components/grid';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/layout',
      name: 'layout',
      component: Layout,
    },{
      path: '/button',
      name: 'button',
      component: Button,
    },{
      path: '/grid',
      name: 'grid',
      component: Grid,
    },
  ],
});
