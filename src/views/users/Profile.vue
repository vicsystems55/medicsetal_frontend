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
                            Upload
                        </button>

                    </div>





            </div>

            <div class="col-md-6 mx-auto">

                <div class="form-group">
                    <label for="">Bio</label>
                    <textarea name="" id="" cols="30" rows="5" placeholder="Tell us about yourself" class="form-control"></textarea>
                </div>

                <div class="form-group">
                    <label for="">Nationality</label>
                    <select name="" class="form-control" id="">
                        <option value="">Nigeria</option>
                        <option value="">Ghana</option>
                        
                    </select>
                </div>

                <div class="form-group">
                    <label for="">Address</label>
                    <input type="text" class="form-control">
                </div>


             <div class="form-group">
                    <label for="">Phone</label>
                    <input type="text" class="form-control">
            </div>

            <div class="form-group">
                    <label for="">NOK Fullname</label>
                    <input type="text" class="form-control">
            </div>

            <div class="form-group">
                    <label for="">NOK Address</label>
                    <input type="text" class="form-control">
            </div>

            <div class="form-group">
                    <label for="">NOK Relationship</label>
                    <input type="text" class="form-control">
            </div>

            <div class="form-group">
                    <label for="">NOK Phone</label>
                    <input type="text" class="form-control">
            </div>

            <div class="form-group">
                <button class="btn btn-primary float-right">Update</button>
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
            
            this.axios({
                url: '',
                method: 'post',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' +localStorage.getItem('user_token')
                },
            })
            .then((response)=>{

                console.log(response)

                toast.success('Login Successful');

            })
            .catch((response)=>{

                console.log(response)

                // toast.success('Login Successful');

            })



                // loader.hide()
        },

        getProfile(){


                    this.axios({
                        url: '',
                        method: 'get',
                        
                    })
                    .then((response)=>{

                        console.log(response)

                    })
                    .catch((response)=>{

                        console.log(response)

                    })


        }
    },

    mounted() {
        this.getProfile()
    },
}
</script>