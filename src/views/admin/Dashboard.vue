<template>
  <div>
         <div class="container">
                <div class="page-header py-2">
                    <h1 class="page-header__title">Hi, {{userData.name}} </h1>
                    <h6 class="font-italic">Username: {{userData.username}}</h6>
                    <h6 class="font-italic">Email: {{userData.email}}</h6>
                </div>

            <div class="row">
                


                <div class="col-md-4 mb-2 mx-auto">
                    <div class="widget">
                        <div style="height: 150px;" class="widget__wrapper">

                            <div class="">
                                <h3 class="widget__title">Members</h3>
                                <div class="widget__status-title text-grey">Total prospects</div>
                                <div class="widget__trade">
                                <span class="widget__trade-count"></span>
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
                                    <img class="float-right" style="height: 70px;"   alt=""> <br>
                                <span v-if="loading" class="widget__trade-count ">Loading...</span>
                                <span v-else class="widget__trade-count "></span>

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



                
            </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
          
            userData: []
        }
    },
    methods: {
        getUserData(){
            

           this.userData = JSON.parse(localStorage.getItem('user_data'));

        //    alert(this.userData.userFullName)
        },
 
    },
    mounted() {
        
        this.getUserData()
    },
}
</script>