import UserDashboard from '../views/users/Dashboard'
import UserNotifications from '../views/users/Notifications'
import UserPackages from '../views/users/Packages.vue'
import UserPackage from '../views/users/Package.vue'
import UserLeads from '../views/users/MyLeads.vue'
import UserLandingPage from '../views/users/LandingPage.vue'
import SubscriptionSuccess from '../views/users/Success.vue'
import UserResources from '../views/users/UserResources.vue'

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
        {
            path: 'packages',
            component: UserPackages
        },

        {
            path: 'package',
            component: UserPackage
        },

        {
            path: 'resources',
            component: UserResources
        },

        {
            path: 'leads',
            component: UserLeads
        },

        {
            path: 'landing_page',
            component: UserLandingPage
        },

        {
            path: 'success',
            component: SubscriptionSuccess
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