<template>
    <div>
         <div class="container">
                <div class="page-header">
                    <h1 class="page-header__title">{{course_details.title}}</h1>
                </div>
                
            </div>

            <div class="container">
                 <iframe v-bind:src="url" width="100%" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            course_details: [],
            url: ''
        }
    },
    methods: {
        getCourseContent(){
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
                            course_id: this.$route.params.id
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
                           loader.hide()
                    
                    this.course_details = response.data

                    this.url = response.data.video_url

                    console.log(this.course_details)

                     loader.hide()


                })
                .catch((response)=>{
                    console.log(response)
                })
        }
    },
    mounted() {

        this.getCourseContent()
        // alert( this.referrer_code = this.$route.params.id)
    },
}
</script>