<template >
   
<div class="contianer px-3">
                <div class="page-header">
                    <h1 class="page-header__title">Members <span class="text-grey">{{users.length}}</span></h1>
                </div>
                <div class="page-tools">
                    <div class="page-tools__breadcrumbs">
                        <div class="breadcrumbs">
                            <div class="breadcrumbs__container">
                                <ol class="breadcrumbs__list">
                                    <li class="breadcrumbs__item">
                                        <a class="breadcrumbs__link" href="index.html">
                                            <svg class="icon-icon-home breadcrumbs__icon">
                                                <use xlink:href="#icon-home"></use>
                                            </svg>
                                            <svg class="icon-icon-keyboard-right breadcrumbs__arrow">
                                                <use xlink:href="#icon-keyboard-right"></use>
                                            </svg>
                                        </a>
                                    </li>
                                    <li class="breadcrumbs__item active"><span class="breadcrumbs__link">Contacts</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div class="page-tools__right">
                        
                    </div>
                </div>
    <div class="tab-pane " >
        <div class=" container" data-simplebar>

            
            <div class="accordion mb-3" id="accordionExample">
                <div class="car">
                    <div class="card-header" id="headingOne">
                        <div class="row">
                            <div class="col-3">
                                #
                            </div>
                            <div class="col-3">
                                Fullname
                            </div>
                            <div class="col-3">
                                Email
                            </div>
                            <div class="col-3">
                                Current Package
                            </div>
                        </div>
                    </div>

                    
                </div>
                
            </div>

            <table class="table table--spaces d-none">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Fullname</th>
                        <th>Email</th>
                        <th>Current Package</th>
                        <th>Date Registered</th>
                        <th>.</th>
                    </tr>
                </thead>
                <tbody class="d-none">
                    <tr v-for="user in users" :key="user.index">
                        <td></td>
                        <td>{{user.name}}</td>
                        <td>{{user.email}}</td>
                        <td>{{user.subscription?user.subscription.package.title:'not subscribed'}}</td>
                        <td>{{user.created_at}}</td>
                        <td>
                            <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal">
                            view details
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>


            <div class="accordion" id="accordionExample">
                <div v-for="user in users" :key="user.index" class="car">
                    <div class="card-header" id="headingOne">
                        <div class="row">
                            <div class="col-3">
                                {{user.id}}
                            </div>
                            <div class="col-3">
                                <h2 class="mb-0">
                                    <h6 class="" type="button" data-toggle="collapse" :data-target="'#tag'+user.id" aria-expanded="true" aria-controls="collapseOne">
                                    {{user.name}}
                                    </h6>
                                </h2>
                            </div>
                            <div class="col-3">
                                <h6>{{user.email}}</h6>
                            </div>
                            <div class="col-3 font-weight-bold">
                         {{user.subscription?.package?.name}}
                            </div>
                        </div>
                    
                    </div>

                    <div :id="'tag'+user.id" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div class="card-body">
                        <table class="table">
                            <tr>
                                <td>Email</td>
                                <th>{{user.email}}</th>

                            </tr>

                            <tr>
                                <td>Date Created</td>
                                <th>{{user.created_at}}</th>

                            </tr>

                                <tr>
                                <td>Current Package</td>
                                <th>{{user.subscription?.package?.name}}</th>

                            </tr>
                        </table>
                        <div class="form-group col-md-6 ">
                            <label for="">Select Account Holder</label>
                            <select class="form-control" v-model="user_id" id="">
                                <option :value="user.id" selected>{{user.name}}</option>
                            </select>
                            <label for="">Select Package</label>
                            <select v-model="package_id" class="form-control" >
                                <option value="1">Bronze</option>
                                <option value="2">Silver</option>
                                <option value="3">Gold</option>
                                <option value="4">Diamond</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <button v-if="loading" class="btn btn-primary" disabled>Creating...</button>
                            <button v-else @click="createSubscription()" class="btn btn-primary">Create Subscription.</button>
                        </div>
                    </div>
                    </div>
                </div>
                
            </div>

            <!-- Button trigger modal -->


<!-- Modal -->

                        
        </div>
    </div>
</div>

    <div style="z-index: 9999;" class="modal fade " id="exampleModal" tabindex="99" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div  class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body modal__container">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
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
            users: [],
            user_id: '',
            package_id: '',
            loading: false
        }
    },

    methods: {
        getMembers(){
            this.axios({
                url: process.env.VUE_APP_URL + '/api/get_profile',
                method: 'post',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' +localStorage.getItem('user_token')
                },

            })
            .then((response)=>{
                this.users = response.data

                console.log(response)
            })
            .catch((response)=>{
                console.log(response)
            })
        },

        createSubscription(){

            // alert(this.package_id)
            //       alert(this.user_id)

            this.loading = true

            this.axios({
                url: process.env.VUE_APP_URL + '/api/admin_payment_callback',
                method: 'post',
                headers:{
                    'Authorization': 'Bearer ' +localStorage.getItem('user_token')
                },
                data:{
                    user_id: this.user_id,
                    package_id: this.package_id
                }
            })
            .then((response) =>{

                this.loading = false

                toast.success('Subscription Created for User!!');


                console.log(response)
            })
            .catch((response) =>{

                this.loading = false

                toast.warning('An Error Occured');

                console.log(response)
            })

        }
    },
    mounted() {
        this.getMembers()
    },
}
</script>