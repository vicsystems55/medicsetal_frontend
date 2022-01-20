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
                        <div style="height: 130px;" class="widget__wrapper">

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

                <div class="col-md-4 p-2">
                    <div class="widget">
                        <div style="height: 130px;" class="widget__wrapper">

                            <div class="">
                                <h3 class="widget__title">Total Leads</h3>
                                <div class="widget__status-title text-grey">Total propects</div>
                                <div class="widget__trade">
                                <span class="widget__trade-count">4</span>
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

                 <div class="col-md-4 p-2">
                    <div class="widget">
                        <div style="height: 130px;" class="widget__wrapper">

                            <div class="">
                                <h3 class="widget__title">Current Package</h3>
                                <div class="widget__status-title text-grey">Current Medicsetal Subscription</div>
                                <div class="widget__trade">
                                <span class="widget__trade-count">Bronze</span>
                                <span class="trade-icon trade-icon--up">
                                    <svg class="icon-icon-trade-up">
                                        <use xlink:href="#icon-trade-up"></use>
                                    </svg>
                                </span>
                                <span class="badge badge--sm badge--green"></span>
                            </div>
                                <div class="widget__details"><a class="link-under text-grey" >Detail</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

           

               
            </div>


            <div class="container py-3">

                <div class="bg-white">
                    <div class="widget-wrappe py-5 px-3">
                        <h6 class="text-center">Referer Link</h6>
                        <div class="col-md-6 mx-auto">
                            <div class="form-group row">
                                <input id="code" type="text" v-model="referrerLink" class="form-control col">
                                <button @click="copy_referrer_code()" class="btn btn-sm btn-secondary">copy</button>
                            </div>
                            <div class="form-group">
                                <iframe src="https://player.vimeo.com/video/665066889?h=92a31a9029" width="100%" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                                <a target="_blank" class="btn btn-success btn-sm btn-bloc " :href="whatsappLink">whatsapp</a>
                                <button @click="shareMe()" class="btn btn-primary">Share</button>
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
            whatsappLink: '',
        }
    },
    methods: {

        shareMe(){
            alert('share')

            if (navigator.canShare && navigator.canShare({ files: [] })) {
                navigator.share({
                    files: [],
                    title: 'Pictures',
                    text: 'Our Pictures.',
                     url  : 'https://medicsetal.org/wp-content/uploads/2021/12/medicsetal-logo-2-removebg-preview-e1640081402491.png'
                })
                .then(() => alert('Share was successful.'))
                .catch((error) => alert('Sharing failed', error));
                } else {
                alert(`Your system doesn't support sharing files.`);
                }

            // if (navigator.share !== undefined) {
            //     navigator.share({
            //         title: 'me',
            //         url  : 'https://medicsetal.org/wp-content/uploads/2021/12/medicsetal-logo-2-removebg-preview-e1640081402491.png'
            //     });
            // }
        },
        getUserData(){
            

           this.userData = JSON.parse(localStorage.getItem('user_data'));

           this.referrerLink = "https://app.medicsetal.org/m/"+this.userData.username

           this.whatsappLink = "https://api.whatsapp.com/send?text=Hello,%20glad%20to%20know%20you%20have%20shown%20interest%20in%20joingin%20Medics%20Et%20Al,%20please%20proceed%20with%20the%20link%20below%20to%20create%20and%20account.%20"+this.referrerLink

        //    alert(this.userData.userFullName)
        },
        getBusinessProfiles(){
            let loader = this.$loading.show({
                // Optional parameters
                container: this.fullPage ? null : this.$refs.formContainer,
                canCancel: true,
                onCancel: this.onCancel,
                color: '#6CC3EC',
            });

            this.axios({
                method: 'get',
                url:'https://micro.rtvrs.com.ng/api/BusinessProfiles/KADUNA',

            })
            .then((response)=>{

                this.businessProfiles = response.data
                loader.hide()
            })
            .catch((response)=>{

                console.log(response)

                loader.hide()
            })
        },
        copy_referrer_code(){
            var copyText = document.getElementById("code");
            copyText.select();
            copyText.setSelectionRange(0, 99999)
            document.execCommand("copy");
            toast.success('Referrer code copied');
            // alert("Copied the text: " + copyText.value);
        }
    },
    mounted() {
        // this.getBusinessProfiles()
        this.getUserData()
    },
}
</script>