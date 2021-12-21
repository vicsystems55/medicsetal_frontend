import UserDashboard from '../views/users/Dashboard'
import UserNotifications from '../views/users/Notifications'

import Dashboard from '../views/layouts/Dashboard.vue'


// import router from '../router'

import { useToast } from 'vue-toastification'

const toast = useToast()

export default [
 {
   path: '/user/',
   name: 'User',
   component: Dashboard,
    children: [
        {
            path: 'dashboard',
            component: UserDashboard
        },

        {
            path: 'notifications',
            component: UserNotifications
        },


    ],
    beforeEnter: () => {
        // ...
        // if (localStorage.getItem('user_role') == '6') {
        //     console.log('yes')
           
        // }else{
        //     console.log('no board')
        //     router.push({
        //         path: '/login',
        //         replace: true
        //       });
        //     toast.warning('Session Expired');

        // }
      }

 },



]