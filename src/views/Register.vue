<template >
    <div>
 
    <div class="page-wrapper">
        <main class="page-auth">
            <div class="page-auth__center">
                <div class="page-auth__gradient">
                    <div class="page-auth__gradient-shape"></div>
                    <div class="page-auth__gradient-shape"></div>
                    <div class="auth-logo">
                        <img class="auth-logo__icon" src="https://edu.medicsetal.org/wp-content/uploads/2021/12/medicsetal-logo-2-removebg-preview-296x201.png" width="44" alt="#" />
                        <div class="auth-logo__text">Medicsetal</div>
                    </div>
                    <div class="page-auth__gradient-column"></div>
                </div>
                <div class="auth-card card">
                    <div class="auth-card__shape"></div>
                    <div class="auth-card__shape"></div>
                    <div class="card__wrapper">
                        <div class="auth-card__left">
                            <div class="auth-card__logo">
                                <div class="auth-logo">
                                      <img class="auth-logo__ico" src="https://edu.medicsetal.org/wp-content/uploads/2021/12/medicsetal-logo-2-removebg-preview-296x201.png" style="width: 150px;" alt="#" />
                                    
                                </div>
                            </div>
                            <img class="auth-card__bg auth-bg-image-light" src="https://image.freepik.com/free-photo/drug-prescription-treatment-medication_1150-44091.jpg" alt="#">
                            <img class="auth-card__bg auth-bg-image-dark" src="https://image.freepik.com/free-photo/drug-prescription-treatment-medication_1150-44091.jpg" alt="#">
                        </div>
                        <div class="auth-card__right" method="POST">
                            <div class="auth-card__top">
                                <h1 class="auth-card__title">Create an Account</h1>
                            </div>
                            <div class="auth-card__body">
                                <div class="form-group">
                                    <label>Fullname:</label>
                                    <div class="input-group input-group--prepend">
                                    <span class="input-group__prepend">
                                        <svg class="icon-icon-email-2">
                                            <use xlink:href="#icon-email-2"></use>
                                        </svg>
                                    </span>
                                        <input class="input shadow" type="text" v-model="UserFullName" required placeholder="Enter fullname">
                                    </div>
                                </div>
                                <div class="form-group">
                                     <label>Username:</label>
                                    <div class="input-group input-group--prepend">
                                    <span class="input-group__prepend">
                                        <svg class="icon-icon-email-2">
                                            <use xlink:href="#icon-email-2"></use>
                                        </svg>
                                    </span>
                                        <input class="input shadow" type="text" placeholder="Create a username" v-model="UserName" required>
                                    </div>
                                </div>

                                <div class="form-group">
                                     <label>Email:</label>
                                    <div class="input-group input-group--prepend">
                                    <span class="input-group__prepend">
                                        <svg class="icon-icon-email-2">
                                            <use xlink:href="#icon-email-2"></use>
                                        </svg>
                                    </span>
                                        <input class="input shadow" type="email" placeholder="Supply a valid email" v-model="UserEmail" required>
                                    </div>
                                </div>
                                <div class="form-group">
                                     <label>Password:</label>
                                    <label @click="togglePasswordVisibility()" class="float-right" style="margin-left: 250px; margin-top: 36px; position: absolute; z-index: 999"> <img height="20" width="20" src="https://cdn-icons-png.flaticon.com/128/709/709612.png" style="z-index:999"></label>
                                    <div class="input-group input-group--prepend">
                                    <span class="input-group__prepend">
                                        <svg class="icon-icon-password">
                                            <use xlink:href="#icon-password"></use>
                                        </svg>
                                    </span>
                                        <input ref="pass" :type="passwordAttribute" class="input shadow"  placeholder="Create a password" v-model="UserPassword" required>
                                    </div>
                                </div>
                               
                                <div class="form-group">
                                     <label>Confirm Password:</label>
                                    <div class="input-group input-group--prepend">
                                    <span class="input-group__prepend">
                                        <svg class="icon-icon-password">
                                            <use xlink:href="#icon-password"></use>
                                        </svg>
                                    </span>
                                        <input class="input shadow" type="password" placeholder="Password (Confirmation)"  required>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="">Referral Code:</label>
                                    <div class="input-group input-group--prepend">
                                    <span class="input-group__prepend">
                                        <svg class="icon-icon-password">
                                            <use xlink:href="#icon-password"></use>
                                        </svg>
                                    </span>
                                        <input class="input shadow" type="text" placeholder="MED1000" v-model="UserPhoneNumber"  required>
                                    </div>
                                </div>


                                <div class="form-group">
                                    <label class="checkbox">
                                        <input type="checkbox" checked><span class="checkbox__marker"><span class="checkbox__marker-icon">
                                    <svg class="icon-icon-checked">
                                        <use xlink:href="#icon-checked"></use>
                                    </svg></span></span><span class="ml-2">I accept the <a class="text-blue" href="#">terms & conditions</a></span>
                                    </label>
                                </div>
                                <div class="auth-card__submit">
                                    <button class="button button--primary button--block" type="button" @click="submit()"><span class="button__text">Create account</span>
                                    </button>
                                </div>
                            </div>
                            <div class="auth-card__bottom">
                                <div class="auth-card__sign">Already have account? <router-link class="text-blue" to="/login">Login</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
    </div>

    
</template>

<script>
// import LGA from '@/components/LGA.vue'


import { useToast } from 'vue-toastification'

const toast = useToast()

export default {

    components:{
        // LGA
    },

    data() {
        return {
             fullPage: false,

             name: '',
             username: '',
             email: '',
             referrer_code: '',
             password: '',
            passwordAttribute: 'password'
        }
    },

    methods: {

        togglePasswordVisibility(){
       
            if(this.passwordAttribute == 'password'){
                this.passwordAttribute = 'text'
            }else{
                this.passwordAttribute = 'password'
            }

        },
                submit() {



                        let loader = this.$loading.show({
                            // Optional parameters
                            container: this.fullPage ? null : this.$refs.formContainer,
                            canCancel: true,
                            onCancel: this.onCancel,
                            color: '#6CC3EC',
                        });
                       this.axios({
                                method: "post",
                                url: 'https://app.medicsetal.org/api/registerx',
                                data: {
                                    name: this.name,
                                    username: this.username,
                                    email: this.email,
                                    referrer_code: this.referrer_code,
                                    password: this.password
                                },
                                headers: {
                                    'Access-Control-Allow-Origin': '*',
                                    'Content-type': 'application/json',
                                    'Accept': 'application/json',
                                },
                                
                                })
                                .then( (response) =>{
                                    //handle success

                                    console.log(response)

                                    localStorage.setItem('user_role', response.data.user_data.role)
                                    localStorage.setItem('user_token', response.data.access_token)
                                    localStorage.setItem('user_data', JSON.stringify(response.data.user_data))

                                    
                                    loader.hide()

                                     toast.success('Login Successful');

                                    return this.$router.push('/verify')

                                   

                                      
        
                                })
                                .catch( (response)=> {

                                    alert(response);
                                    //handle error
                                    console.log(response);

                                   toast.error('Invalid Credentials');

                                    loader.hide()

                                });
            
                  
                    },

                    onCancel() {
                        console.log('User cancelled the loader.')
                    },

                   
    },

       mounted(){
        console.log(this.$route.params.id)
        this.referrer_code = this.$route.params.id
    }
    
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

