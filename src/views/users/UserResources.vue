<template>
    <div>
         <div class="container">
                <div class="page-header mb-5">
                    <h1 class="page-header__title">Medics Et Al Courses</h1>
                </div>

                <div style="background-color: #b08d57;" class="c  shadow p-3 ">
                    <h4 class="text-dark text-center ">Bronze Package</h4>
                </div>

                <hr class="">

                <div class="row ">
                    
                    <div v-for="bronze_course in bronze_courses" :key="bronze_course.index" class="col-md-4">
                        
                        <div  style="height: 350px; position: relative;" class="shadow mb-3 ml-2">
                            <div v-if="!bronze_access" class="blocked text-center text-white">
                          
                                <img class="text-center" style="height: 200px;" src="/img/lock.png" alt="">
                                <h6 class="text-white">YOU ARE NOT ON THIS PACKAGE </h6>

                                    <router-link :to="{name:'package-details',params:{id:bronze_course.package_id} }" class="btn btn-primary">
                                   UPGRADE
                                 
                                    </router-link>

                            </div>
                            <div class="videoWrapper bg-primary shadow border border-success">
                                <iframe  :src="getVideoUrl(bronze_course.video_url)" width="100%" height="" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                        
                            </div>
                         
                              <router-link  :to="{name:'course-details',params:{id:bronze_course.id} }">
                                <div  class="p-2">
                                    <h4>{{bronze_course.title}}</h4>
                                    <h6>Package: {{bronze_course.package.name}}</h6>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>


                <div style="background-color: #C0C0C0;" class="c  shadow p-3 ">
                    <h4 class="text-dark text-center ">Silver Package</h4>
                </div>

                <hr class="">

                <div class="row">
                    <div v-for="silver_course in silver_courses" :key="silver_course.index" class="col-md-4">
                        <div  style="height: 350px;" class="shadow mb-3">
                            <div class="videoWrapper bg-primary shadow border border-success">

                                <!-- <h6 class="text-center pt-5 text-white">Comming Soon</h6> -->
                                <iframe  :src="getVideoUrl(silver_course.video_url)" width="100%" height="" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                        
                            </div>
                              <router-link  :to="{name:'course-details',params:{id:silver_course.id} }">
                                <div  class="p-2">
                                    <h4>{{silver_course.title}}</h4>
                                    <h6>Package: {{silver_course.package.name}}</h6>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>

                <div style="background-color: #FFD700;" class="c  shadow p-3 ">
                    <h4 class="text-dark text-center ">Gold Package</h4>
                </div>

                <hr class="">

                <div class="row">
                    <div v-for="gold_course in gold_courses" :key="gold_course.index" class="col-md-4">
                        <div  style="height: 350px;" class="shadow mb-3">
                            <div class="videoWrapper bg-primary shadow border border-success">

                                 <!-- <h6 class="text-center pt-5 text-white">Comming Soon</h6> -->
                                <iframe  :src="getVideoUrl(gold_course.video_url)" width="100%" height="" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                        
                            </div>
                               <router-link  :to="{name:'course-details',params:{id:gold_course.id} }">
                                <div  class="p-2">
                                    <h4>{{gold_course.title}}</h4>
                                    <h6>Package: {{gold_course.package.name}}</h6>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>


                <div style="background-color: #b9f2ff;" class="c  shadow p-3 ">
                    <h4 class="text-dark text-center ">Diamond Package</h4>
                </div>


                <hr class="">

                <div class="row">
                    <div v-for="diamond_course in diamond_courses" :key="diamond_course.index" class="col-md-4">
                        <div  style="height: 350px;" class="shadow mb-3">
                            <div class="videoWrapper bg-primary shadow border border-success">

                                 <!-- <h6 class="text-center pt-5 text-white">Comming Soon</h6> -->
                                 <iframe  :src="getVideoUrl(diamond_course.video_url)" width="100%" height="" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                        
                            </div>
                               <router-link  :to="{name:'course-details',params:{id:diamond_course.id} }">
                                <div  class="p-2">
                                    <h4>{{diamond_course.title}}</h4>
                                    <h6>Package: {{diamond_course.package.name}}</h6>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>

                
                  
                
            </div>




            
    </div>
</template>

<script>

import { useToast } from 'vue-toastification'

const toast = useToast()


export default {

    data() {
        return {
             fullPage: false,
             state_code: '',
             business_name: '',
             bronze_courses: [],
             silver_courses: [],
             gold_courses: [],
             diamond_courses: [],
             user_subscription: [],
             package_image: '',

             bronze_access: false,
             gold_access: false,
             silver_access:false,
             diamond_access: false,



        }
    },

    methods: {

          getVideoUrl(url) {
                // var images = require.context('../assets/', false, /\.png$/)
                return url
            },
            get_bronze_courses (){

                                let loader = this.$loading.show({
                    // Optional parameters
                    container: this.fullPage ? null : this.$refs.formContainer,
                    canCancel: false,
                    onCancel: this.onCancel,
                    color: '#6CC3EC',
                });

                this.axios({
                        method: 'post',
                        url: process.env.VUE_APP_URL+'/api/courses',
                        data: {
                            category: '1'
                        }
                        // headers: {
                        //     'Access-Control-Allow-Origin': '*',
                        //     'Content-type': 'application/json',
                        //     'Accept': 'application/json',
                        //     'Authorization': 'Bearer ' +localStorage.getItem('user_token')
                        // },
                })
                .then((response)=>{

                    // alert(this.user_subscription.id)

            
                    this.bronze_courses = response.data

                    //  alert(this.bronze_courses[0].package_id)

                        if (this.user_subscription.id >= this.bronze_courses[0].package.id) {
                            this.bronze_access = true;
                        }

                    console.log(this.bronze_courses)

                     loader.hide()


                })
                .catch((response)=>{
                    console.log(response)
                })
            },

            get_silver_courses (){

                                let loader = this.$loading.show({
                    // Optional parameters
                    container: this.fullPage ? null : this.$refs.formContainer,
                    canCancel: false,
                    onCancel: this.onCancel,
                    color: '#6CC3EC',
                });

                this.axios({
                        method: 'post',
                        url: process.env.VUE_APP_URL+'/api/courses',
                        data: {
                            category: '2'
                        }
                        // headers: {
                        //     'Access-Control-Allow-Origin': '*',
                        //     'Content-type': 'application/json',
                        //     'Accept': 'application/json',
                        //     'Authorization': 'Bearer ' +localStorage.getItem('user_token')
                        // },
                })
                .then((response)=>{

                    // alert('hello')
                    
                    this.silver_courses = response.data
                    console.log(this.silver_courses)

                     loader.hide()


                })
                .catch((response)=>{
                    console.log(response)
                })
            },

            get_gold_courses (){

                                let loader = this.$loading.show({
                    // Optional parameters
                    container: this.fullPage ? null : this.$refs.formContainer,
                    canCancel: false,
                    onCancel: this.onCancel,
                    color: '#6CC3EC',
                });

                this.axios({
                        method: 'post',
                        url: process.env.VUE_APP_URL+'/api/courses',
                        data: {
                            category: '3'
                        }
                        // headers: {
                        //     'Access-Control-Allow-Origin': '*',
                        //     'Content-type': 'application/json',
                        //     'Accept': 'application/json',
                        //     'Authorization': 'Bearer ' +localStorage.getItem('user_token')
                        // },
                })
                .then((response)=>{

                    // alert('hello')
                    
                    this.gold_courses = response.data
                    console.log(this.gold_courses)

                     loader.hide()


                })
                .catch((response)=>{
                    console.log(response)
                })
            },

            get_diamond_courses (){

                                let loader = this.$loading.show({
                    // Optional parameters
                    container: this.fullPage ? null : this.$refs.formContainer,
                    canCancel: false,
                    onCancel: this.onCancel,
                    color: '#6CC3EC',
                });

                this.axios({
                        method: 'post',
                        url: process.env.VUE_APP_URL+'/api/courses',
                        data: {
                            category: '4'
                        }
                        // headers: {
                        //     'Access-Control-Allow-Origin': '*',
                        //     'Content-type': 'application/json',
                        //     'Accept': 'application/json',
                        //     'Authorization': 'Bearer ' +localStorage.getItem('user_token')
                        // },
                })
                .then((response)=>{

                    // alert('hello')
                    
                    this.diamond_courses = response.data
                    console.log(this.diamond_courses)

                     loader.hide()


                })
                .catch((response)=>{
                    console.log(response)
                })
            },



            get_user_stats(){
            // let loader = this.$loading.show({
            //     // Optional parameters
            //     container: this.fullPage ? null : this.$refs.formContainer,
            //     canCancel: true,
            //     onCancel: this.onCancel,
            //     color: '#6CC3EC',
            // });

            this.axios({
                method: 'post',
                url: process.env.VUE_APP_URL +'/api/user_stats',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' +localStorage.getItem('user_token')
                },

            })
            .then((response)=>{

               console.log(response)

                this.user_subscription = response.data.user_data.subscription.package
                this.package_image = response.data.user_data.subscription.package.featured_image
                this.no_leads = response.data.no_leads
                // loader.hide()
            })
            .catch((response)=>{

                console.log(response)

                // loader.hide()
            })
        },
                
 
    },
    mounted() {
             this.get_user_stats()
        this.get_bronze_courses()
        this.get_silver_courses()
        this.get_gold_courses()
        this.get_diamond_courses()

   
    },
    
}
</script>

<style scoped>
    .videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}
.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.blocked{
    width: 100%;
    height: inherit;
    z-index: 999;
    position: absolute;
    background-color: red;
    opacity: 0.8;
}
</style>