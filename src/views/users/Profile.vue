<template>
    <div>
         <div class="container">
                <div class="page-header">
                    <h1 class="page-header__title">Profile</h1>
                </div>
                
            </div>

                  <div class="container">

                    <div class="form-group mx-auto text-center">
                        <img 
                        onclick="document.getElementById('customFile').click()" 
                        id="previewImg" 
                        style="height: 250px; width: 200px; object-fit: cover; border-radius: 20px;" 
                        class="shadow" 
                        src="https://www.lifewire.com/thmb/8MhWKwi4GEGiYRT6P56TBvyrkYA=/1326x1326/smart/filters:no_upscale()/cloud-upload-a30f385a928e44e199a62210d578375a.jpg" >

                    </div> 



                    <div class="form-group text-center d-none">
                        
                        <input type="date" name="" class="col-md-4 mx-auto shadow input" id="">

                    </div>
          
                    <div class="text-center d-none">
                        <input @change="previewFile4" type="file" id="customFile"  >
                        
                    </div>

                    <div class="form-group text-center">

                        <button @click="uploadFile" class="btn btn-primary">
                            Upload Avatar
                        </button>

                    </div>





            </div>

            <div class="col-md-6 mx-auto">

                <div class="form-group">
                    <label for="na">Name</label>
                    <input type="text" class="form-control" :value="userData.name" disabled>
                </div>
                <div class="form-group">
                    <label for="nsa">Email</label>
                    <input type="text" class="form-control" :value="userData.email" disabled>
                </div>

                <div class="form-group">
                    <label for="nsa">Username</label>
                    <input type="text" class="form-control" :value="userData.username" disabled>
                </div>

                <div class="form-group">
                    <label for="nsa">Usercode</label>
                    <input type="text" class="form-control" :value="userData.usercode" disabled>
                </div>

                <div class="form-group">
                    <label for="">Bio</label>
                    <textarea v-model="bio" id="" cols="30" rows="5" placeholder="Tell us about yourself" class="form-control"></textarea>
                </div>

                <div class="form-group">
                    <label for="">Nationality</label>
                    <select v-model="nationality" class="form-control" id="">
                        <option value="">Nigeria</option>
                        <option value="">Ghana</option>
                        
                    </select>
                </div>

                <div class="form-group">
                    <label for="">Address</label>
                    <input type="text" v-model="address" placeholder="Address" class="form-control">
                </div>


             <div class="form-group">
                    <label for="">Phone</label>
                    <input type="text" v-model="phone" placeholder="Phone" class="form-control">
            </div>

            <div class="form-group">
                    <label for="">NOK Fullname</label>
                    <input type="text" v-model="nok_fullname" placeholder="Next of Kin Fullname" class="form-control">
            </div>

            <div class="form-group">
                    <label for="">NOK Address</label>
                    <input type="text" v-model="nok_address" placeholder="Next of Kin Address" class="form-control">
            </div>

            <div class="form-group">
                    <label for="">NOK Relationship</label>
                    <input type="text" v-model="nok_relationship" placeholder="Next of Kin Relationship" class="form-control">
            </div>

            <div class="form-group">
                    <label for="">NOK Phone</label>
                    <input type="text" v-model="nok_phone" placeholder="Next of Kin Phone" class="form-control">
            </div>

            <div class="form-group">
                <button @click="updateProfile()" class="btn btn-primary float-right">Update</button>
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

            bio : '',
            nationality : '',
            address : '',
            phone : '',
            nok_fullname : '',
            nok_address : '',
            nok_relationship : '',
            nok_phone : '',
            user_profile: [],
            userData: [],

            
            
        }
    },

    methods: {

        previewFile4(event){


            console.log(event)

               if(event.target.files.length > 0){
                var src = URL.createObjectURL(event.target.files[0]);
                var preview = document.getElementById("previewImg");
                preview.src = src;
                // preview.style.display = "block";
            }

        },
        updateProfile(){
                let loader = this.$loading.show({
                    // Optional parameters
                    container: this.fullPage ? null : this.$refs.formContainer,
                    canCancel: false,
                    onCancel: this.onCancel,
                    color: '#6CC3EC',
                });

                // alert(this.address)
                //    alert(this.nationality)
                //       alert(this.address)
                //          alert(this.phone)
                //             alert(this.nok_fullname)
            
            this.axios({
                url: process.env.VUE_APP_URL+'/api/user_profile',
                method: 'post',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' +localStorage.getItem('user_token')
                },
                data:{
                    bio : this.bio,
                    nationality : this.nationality,
                    address : this.address,
                    phone : this.phone,
                    nok_fullname : this.nok_fullname,
                    nok_address : this.nok_address,
                    nok_relationship : this.nok_relationship,
                    nok_phone : this.nok_phone,
                }
            })
            .then((response)=>{

                console.log(response)
                       
                loader.hide()

                toast.success('Update Successful');

            })
            .catch((response)=>{

                console.log(response)

                // toast.success('Login Successful');

            })



                // loader.hide()
        },

        getProfile(){


                    this.axios({
                            url: process.env.VUE_APP_URL+'/api/get_profile',
                            method: 'post',
                            headers: {
                                'Access-Control-Allow-Origin': '*',
                                'Content-type': 'application/json',
                                'Accept': 'application/json',
                                'Authorization': 'Bearer ' +localStorage.getItem('user_token')
                            },
                        
                    })
                    .then((response)=>{

                        // console.log(response)

                        this.bio = response.data.bio
                        this.nationality = response.data.nationality
                        this.address = response.data.adddress
                        this.phone = response.data.phone
                        this.nok_fullname = response.data.nok_fullname
                        this.nok_address = response.data.nok_address
                        this.nok_relationship = response.data.nok_relationship
                        this.nok_phone = response.data.nok_phone

                    

                    })
                    .catch((response)=>{

                        console.log(response)

                       

                    })


        },
        getUserData(){
            this.userData = JSON.parse(localStorage.getItem('user_data'));

            // console.log(this.userData);
        }
    },

    mounted() {
        this.getProfile()
        this.getUserData()
    },
}
</script>