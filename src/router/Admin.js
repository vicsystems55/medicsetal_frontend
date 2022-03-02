import AdminDashboard from '../views/admin/Dashboard'
import AdminNotifications from '../views/admin/Notifications'
import AdminMembers from '../views/admin/Members'

import Subscriptions from '../views/admin/Subscriptions'

import Packages from '../views/admin/Packages'

// import AdminDemandNotices from '../views/admin/DemandNotices'

import xDashboard from '../views/layouts/Dashboard.vue'


// import router from '../router'

import { useToast } from 'vue-toastification'

const toast = useToast()

export default [
 {
   path: '/admin/',
   name: 'Admin',
   component: xDashboard,
    children: [
        {
            path: 'dashboard',
            component: AdminDashboard
        },

        {
            path: 'notifications',
            component: AdminNotifications
        },

        {
            path: 'members',
            component: AdminMembers
        },

        {
            path: 'subscriptions',
            component: Subscriptions
        },

        {
            path: 'packages',
            component: Packages
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