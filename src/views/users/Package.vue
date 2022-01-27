<template >
    <div>
        <div class="container">
                <div class="page-header">
                    <h1 class="page-header__title">Package Details</h1>
                </div>
                
        </div>


        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="customer-account__item-1 customer-profile customer-card card">
                        <div class="card__wrapper">
                            <div class="card__container">
                                <div class="card__body">
                                    <div class="customer-profile__avatar">
                                         .
                                        <img :src='getImageUrl(pack.featured_image)' alt="">
                                    </div>
                                    <h4 class="customer-profile__title">{{pack.name}}</h4>

                             
                                    <a href="" class="">
                                        <div class="customer-profile__balance">
                                        <div class="label label--primary label--lg">
                                            
                                        <span class="label__icon">
                                            <svg class="icon-icon-wallet">
                                                <use xlink:href="#icon-wallet"></use>
                                            </svg>
                                        </span> N {{pack.fee}}</div>
                                    </div>
                                    </a>
                                </div>
                                <div class="card__footer">
                                    <div class="card__container">
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-7 mx-auto ">
                    <h4>{{pack.name}}</h4>

                    <p class="py-3">
                        {{pack.description}}
                    </p>


                    <h6>Payment Methods</h6>

                    


                        <div @click="selectMethod('paystack')" id="paystack" class="p-3 bg-white  mb-3 border border-primary shadow" style="border-radius: 8px;">
                            <h4>Paystack</h4>
                        </div>
                         <div   @click="selectMethod('flutterwave')" id="flutterwave" class="p-3 bg-white d-none" style="border-radius: 8px;">
                            <h4>Flutterwave</h4>
                        </div>

                        <div class=" mt-5">
                                             <paystack
                                            buttonClass="'btn btn-primary btn-lg shadow float-right'"
                                            buttonText="Pay Online"
                                            :publicKey="publicKey"
                                            :email="email"
                                            :amount="amount"
                                            :reference="reference"
                                            :onSuccess="onSuccessfulPayment"
                                            :onCanel="onCancelledPayment">
                                        </paystack>
                        </div>




                          

                        





                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import paystack from "vue3-paystack";

import { useToast } from 'vue-toastification'

const toast = useToast()

export default {
    data() {
        return {

        publicKey: 'pk_test_c8e7a51ee4a62ad2769bb10c39ccfce0f9b8bfa2',
        email: 'victorasuquob@gmail.com',
        firstname: 'victor',
        lastname: 'asuquo',
        amount: 2500000,
        reference: 'ABCDEFGHI1231234567AB',

        pack: []
          
        }
    },
    components: {
        paystack,
    },
    methods: {
            getImageUrl(url) {
                // var images = require.context('../assets/', false, /\.png$/)
                return url
            },
        selectMethod($id){

            if ($id == 'paystack') {

            document.getElementById($id).classList.add("border");
            document.getElementById($id).classList.add("border-primary");
            document.getElementById($id).classList.add("shadow");

            document.getElementById('flutterwave').classList.remove("border");
            document.getElementById('flutterwave').classList.remove("border-primary");
            document.getElementById('flutterwave').classList.remove("shadow");
                
            }if ($id == 'flutterwave') {

            document.getElementById($id).classList.add("border");
            document.getElementById($id).classList.add("border-primary");
            document.getElementById($id).classList.add("shadow");

            document.getElementById('paystack').classList.remove("border");
            document.getElementById('paystack').classList.remove("border-primary");
            document.getElementById('paystack').classList.remove("shadow");

                
            }

           
            document.getElementById($id).classList.add("border");
            document.getElementById($id).classList.add("border-primary");

        },

        getPackage(){

             this.axios({
                url: process.env.VUE_APP_URL+'/api/packages',
                method: 'get',
                params:{
                    package_id: this.$route.params.id
                }
            })
            .then((response)=>{

                this.pack = response.data
                this.amount = this.pack.fee *100

                console.log(response)
            })
            .catch((response)=>{

                console.log(response)
            })


        },

            onSuccessfulPayment() {
            // ...
                let loader = this.$loading.show({
                    // Optional parameters
                    container: this.fullPage ? null : this.$refs.formContainer,
                    canCancel: false,
                    onCancel: this.onCancel,
                    color: '#6CC3EC',
                });

                this.axios({
                method: "post",
                url: 'https://app.medicsetal.org/api/payment_callback',
                data: {
                    package_id: this.pack.id,
                },
                    headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' +localStorage.getItem('user_token')
                },
                
                })
                .then( (response) =>{
                    //handle success
                    if (response.data.subscription) {

                        
                    console.log(response)

                    // localStorage.setItem('user_role', response.data.user_data.role)
                    // // localStorage.setItem('user_token', response.data.access_token)
                    // localStorage.setItem('user_data', JSON.stringify(response.data.user_data))

                    
                        loader.hide()

                                toast.success('Subscription Successful');

                                    return this.$router.push('/user/success')

                        
                    }else{

                        console.log(response);

                        toast.error('Subscription failed');

                        loader.hide()

                    }

                })
                .catch( (response)=> {

                    alert(response);
                    //handle error
                    console.log(response);

                    toast.error('Subscription Failed');

                    loader.hide()

                });


                console.log();

            },
            // onClose () {
            // // ...
            // }
    },
    mounted() {
        let r = (Math.random() + 1).toString(36).substring(2);
        this.reference = r;
        console.log( this.reference);

        this.getPackage()
    },
}
</script>

<style scoped>


</style>