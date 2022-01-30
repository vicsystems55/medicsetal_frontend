<template>
    <div>
         <div class="container">
                <div class="page-header">
                    <h1 class="page-header__title">Notifications for vicSystems</h1>
                </div>
                
        </div>

        <div class="col-md-6 mt-5">
            <div class="list-group">

                <a v-for="notification in notifications" :key="notification.index"  href="#" class="list-group-item list-group-item-action mb-2">
                    <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{{notification.title}}</h5>
         
                    </div>
                    <p class="mb-1">{{notification.log}}</p>
                    <small></small>
                </a>


              
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            notifications: []
        }
    },

    methods: {
        getNotifications(){

                let loader = this.$loading.show({
                    // Optional parameters
                    container: this.fullPage ? null : this.$refs.formContainer,
                    canCancel: false,
                    onCancel: this.onCancel,
                    color: '#6CC3EC',
                });

            this.axios({
                url: process.env.VUE_APP_URL +'/api/get_notifications',
                method: 'get',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' +localStorage.getItem('user_token')
                },
            })
            .then((response)=>{

                this.notifications = response.data
                console.log(response)

                   loader.hide()
            })
            .catch((response)=>{
                console.log(response)
            })

        }
    },

    mounted() {
        this.getNotifications()
    },
}
</script>
