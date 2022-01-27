<template>
   <div>
         <div class="container">
                <div class="page-header py-2">
                    <h1 class="page-header__title">Hi, {{userData.name}} </h1>
                    <h6 class="font-italic">Username: {{userData.username}}</h6>
                    <h6 class="font-italic">Email: {{userData.email}}</h6>
                </div>

            <div class="row">
                

                 <div class="col-md-4 p-2 d-none">
                    <div class="widget">
                        <div style="height: 150px;" class="widget__wrapper">

                            <div class="">
                                <h3 class="widget__title">Wallet</h3>
                                <div class="widget__status-title text-grey">Total funds available</div>
                                <div class="widget__trade">
                                <span class="widget__trade-count"></span>
                                <span class="trade-icon trade-icon--up">
                                    <svg class="icon-icon-trade-up">
                                        <use xlink:href="#icon-trade-up"></use>
                                    </svg>
                                </span>
                                <span class="badge badge--sm badge--green"></span>
                            </div>
                                <div class="widget__details"><router-link class="link-under text-grey" to="">Detail</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 mb-2 mx-auto">
                    <div class="widget">
                        <div style="height: 150px;" class="widget__wrapper">

                            <div class="">
                                <h3 class="widget__title">Total Leads</h3>
                                <div class="widget__status-title text-grey">Total prospects</div>
                                <div class="widget__trade">
                                <span class="widget__trade-count">{{no_leads??0}}</span>
                                <span class="trade-icon trade-icon--up">
                                    <svg class="icon-icon-trade-up">
                                        <use xlink:href="#icon-trade-up"></use>
                                    </svg>
                                </span>
                                <span class="badge badge--sm badge--green"></span>
                            </div>
                                <div class="widget__details"><a class="link-under text-grey">Detail</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                 <div class="col-md-4 mb-2 mx-auto">
                    <div class="widget">
                        <div style="height: 150px;" class="widget__wrapper">

                            <div class="">
                                <h3 class="widget__title">Current Package</h3>
                                <div class="widget__status-title text-grey">Current Medicsetal Subscription</div>
                                <div class="widget__trade p-2">
                                    <img class="float-right" style="height: 70px;" v-bind:src="package_image"  alt=""> <br>
                                <span class="widget__trade-count ">{{user_subscription.name??'No Subscription Yet!!'}}</span>
                                <span class="trade-icon trade-icon--up">
                                    <svg class="icon-icon-trade-up">
                                        <use xlink:href="#icon-trade-up"></use>
                                    </svg>
                                </span>
                                <span class="badge badge--sm badge--green"></span>
                            </div>
                                <div class="widget__details"><a class="link-under text-grey d-none" >Detail</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

           

               
            </div>


            <div class="container py-3">

                <div class="bg-white">
                    <div class="widget-wrapper">
                        <div class="p-1"></div>
                        <h6 class="text-center">.Sales page Link</h6>
                        <div class="col-md-6 mx-auto">
                            <div class="form-group row">
                                <input id="code2" type="text" v-model="salespagelink" class="form-control col">
                                <button @click="copy_salespage_code()" class="btn btn-sm btn-secondary">copy</button>
                            </div>
                            <h6 class="text-center">Referral Link</h6>
                            <div class="form-group row">
                                <input id="code" type="text" v-model="referrerLink" class="form-control col">
                                <button @click="copy_referrer_code()" class="btn btn-sm btn-secondary">copy</button>
                            </div>
                            <div class="form-group py-2">
                                <iframe src="https://player.vimeo.com/video/665066889?h=92a31a9029" width="100%" max-height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                                <!-- <a target="_blank" class="btn btn-success btn-sm btn-block " :href="whatsappLink">Share on Whatsapp</a> <br> -->
                                <button @click="shareMe()" class="btn btn-sm btn-primary btn-block">Download and Share on Social Media</button>
                            </div>
                        </div>
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
            businessProfiles: [],
            userData: [],
            referrerLink: '',
            salespagelink: '',
            whatsappLink: '',
            user_subscription: [],
            package_image: '',
            no_leads: '',
            video:[]
        }
    },
    methods: {

        shareMe(){

            // alert('y')

                // this.axios({
                //     url: 'video/health_education.mp4',
                //     method: 'get'
                // })
                // .then((response)=> {
                //     // this.video =  response.blob();
                //     alert('next')
                // this.next(response)
                // })
                
                // .then(function() {

                    // var file = new File(
                    //     [blob], 
                    //     "picture.jpg", 
                    //     {
                    //         type: 'image/jpeg',
                    //     });
                    // var filesArray = [file];

                    // if(navigator.canShare && navigator.canShare({ files: filesArray })) {
                    // navigator.share({
                    //     text: 'some_text',
                    //     files: filesArray,
                    //     title: 'some_title',
                    //     url: 'some_url'
                    // });
                    // }
                // }
                
            alert('share')

                const shareData = {
                title: 'Health Education from Medics Et Al',
                text: 'Hello dear, do you know you can live in good health and vitality all the days of your life? Click on the link  below for a free training on Health Education From Medics Et Al',
                url: 'https://affiliate.medicsetal.org/video/health_education.mp4'
                }

                // const btn = document.querySelector('button');
                // const resultPara = document.querySelector('.result');

                // Share must be triggered by "user activation"
               
                try {
                    navigator.share(shareData)
                    resultPara.textContent = 'MDN shared successfully'
                } catch(err) {
                    resultPara.textContent = 'Error: ' + err
                }
               
        },
        next(blob){

           
            // alert('z')

                var file = new File(
                        [blob], 
                        "health_education.mp4", 
                        {
                            type: 'video/mp4',
                        });

                    var filesArray = [file];

                    if(navigator.canShare && navigator.canShare({ files: filesArray })) {
                        navigator.share({
                            text: 'Hello dear, do you know you can live in good health and vitality all the days of your life? Click on the link  below for a free training on Health Education From Medics Et Al',
                            files: filesArray,
                            title: 'Medics Et Al',
                            url: this.salespagelink
                        });
                    }

        },
        getUserData(){
            

           this.userData = JSON.parse(localStorage.getItem('user_data'));

           this.referrerLink = "https://affiliate.medicsetal.org/#/register/"+this.userData.usercode

           this.salespagelink = "https://app.medicsetal.org/m/"+this.userData.username

           this.whatsappLink = "https://api.whatsapp.com/send?text=Hello,%20glad%20to%20know%20you%20have%20shown%20interest%20in%20joining%20Medics%20Et%20Al,%20please%20proceed%20with%20the%20link%20below%20to%20create%20and%20account.%20"+this.referrerLink

        //    alert(this.userData.userFullName)
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
        copy_referrer_code(){
            var copyText = document.getElementById("code");
            copyText.select();
            copyText.setSelectionRange(0, 99999)
            document.execCommand("copy");
            toast.success('Referrer link copied');
            // alert("Copied the text: " + copyText.value);
        },

                copy_salespage_code(){
            var copyText = document.getElementById("code2");
            copyText.select();
            copyText.setSelectionRange(0, 99999)
            document.execCommand("copy");
            toast.success('Sales Page link copied');
            // alert("Copied the text: " + copyText.value);
        }
    },
    mounted() {
        this.get_user_stats()
        this.getUserData()
    },
}
</script>