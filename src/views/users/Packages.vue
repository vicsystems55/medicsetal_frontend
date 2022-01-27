<template >
    <div>
        <div class="container">
                <div class="page-header">
                    <h1 class="page-header__title">Packages</h1>
                </div>
                
        </div>


        <div class="container">
            <div class="row">
                <div v-for="pack in packages" :key="pack.index" class="col-md-3">
                    <div class="customer-account__item-1 customer-profile customer-card card">
                        <div class="card__wrapper">
                            <div class="card__container">
                                <div class="card__body">
                                    <div class="customer-profile__avatar">
                                        .
                                        <img :src='getImageUrl(pack.featured_image)' alt="">
                                    </div>
                                    <router-link :to="{name:'package-details',params:{id:pack.id} }" class="">
                                    <h4 class="customer-profile__title text-center">{{pack.name}}</h4>
                                    <div class="p-1">
                                        
                                    </div>
                                
                                        <div class="customer-profile__balance">

                                            
                                        <div class="label label--primary label--lg">
                                            
                                        <span class="label__icon">
                                            <svg class="icon-icon-wallet">
                                                <use xlink:href="#icon-wallet"></use>
                                            </svg>
                                        </span> N {{pack.fee}}</div>
                                    </div>
                                    </router-link>
                                </div>
                                <div class="card__footer">
                                    <div class="card__container">
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            packages: []
        }
    },

    methods: {

        
          getImageUrl(url) {
                // var images = require.context('../assets/', false, /\.png$/)
                return url
            },
        getPackages(){

                let loader = this.$loading.show({
                    // Optional parameters
                    container: this.fullPage ? null : this.$refs.formContainer,
                    canCancel: false,
                    onCancel: this.onCancel,
                    color: '#6CC3EC',
                });

            this.axios({
                url: process.env.VUE_APP_URL+'/api/packages',
                method: 'get'
            })
            .then((response)=>{

                this.packages = response.data

                console.log(response.data)

                
                loader.hide()
            })
            .catch((response)=>{

                console.log(response)
            })

        }
    },

    mounted() {
        this.getPackages()
    },
}
</script>