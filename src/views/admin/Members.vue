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
                <tbody>
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
                    <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" :data-target="'#tag'+user.id" aria-expanded="true" aria-controls="collapseOne">
                        {{user.name}}
                        </button>
                    </h2>
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
                                <th></th>

                            </tr>

                                <tr>
                                <td>Current Package</td>
                                <th></th>

                            </tr>
                        </table>
                        <div class="form-group col-md-6 ">
                            <label for="">Select Package</label>
                            <select class="form-control" name="" id="" >
                                <option value="1">Bronze</option>
                                <option value="2">Silver</option>
                                <option value="3">Gold</option>
                                <option value="4">Diamond</option>
                            </select>
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

export default {
    data() {
        return {
            users: []
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
        }
    },
    mounted() {
        this.getMembers()
    },
}
</script>