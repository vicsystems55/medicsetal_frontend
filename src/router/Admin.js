import AdminDashboard from '../views/admin/Dashboard'
import AdminNotifications from '../views/admin/Notifications'

// import AdminDemandNotices from '../views/admin/DemandNotices'

import Dashboard from '../views/layouts/Dashboard.vue'


// import router from '../router'

import { useToast } from 'vue-toastification'

const toast = useToast()

export default [
 {
   path: '/admin/',
   name: 'Admin',
   component: Dashboard,
    children: [
        {
            path: 'dashboard',
            component: AdminDashboard
        },

        {
            path: 'notifications',
            component: AdminNotifications
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