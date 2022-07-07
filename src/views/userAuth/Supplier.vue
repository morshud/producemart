<template>
<title>Supplier Registration | Produce Mart</title>
    <section class="reg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="headLogin">
                        <h3>
                            <a href="/">
                                <img src="@/assets/img/adminImg/logo.png">
                            </a>
                            <span>Sign Up (Supplier)</span>
                            <div class="line-rule"></div>
                        </h3>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="imageArea">
                        <img class="image1" ondragstart="return false;" src="@/assets/img/dashboard-img/image1.png">
                        <img class="image2" ondragstart="return false;" src="@/assets/img/dashboard-img/image2.png">
                        <img class="image3" ondragstart="return false;" src="@/assets/img/dashboard-img/image3.png">
                    </div>
                </div>
                <div class="col-lg-1"></div>
                <div class="col-lg-6">
                    <div class="signupDiv">
                        <form  @submit.prevent="handleRegister">
                            <div v-if="message" class="alert" :class="successful ? 'alert-success' : 'alert-danger'" >{{message}}</div>
                            <div class="row">
                                <!--Name-->
                                <div class="col-lg-12">
                                    <label>Name</label>
                                    <div class="row">
                                        <div class="col-md-6 mb-2">
                                            <i class="bi bi-person"></i>
                                            <input v-model="user.firstname" type="text" placeholder="First name" name="firstname" class="input" required>
                                        </div>
                                        <div class="col-md-6 mb-4">
                                            <i class="bi bi-person"></i>
                                            <input v-model="user.lastname" type="text" placeholder="Last name" name="lastname" class="input" required>
                                        </div>
                                    </div>
                                </div>
                                <!--Email-->
                                <div class="col-lg-12 mb-4">
                                    <label>Email address</label>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <i class="bi bi-envelope"></i>
                                            <input v-model="user.email" name="email" type="email" placeholder="Enter your email" class="input" required>
                                        </div>
                                    </div>
                                </div>
                                <!--Phone Number-->
                                <div class="col-lg-6 mb-4">
                                    <label>Phone Number</label>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <i class="bi bi-telephone"></i>
                                            <input v-model="user.phone_no" type="tel" name="phone_no" placeholder="Enter your phone number" class="input" id="telephone" required>
                                        </div>
                                    </div>
                                </div>
                                <!--Username-->
                                <div class="col-lg-6 mb-4">
                                    <label>Username</label>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <i class="bi bi-person-rolodex"></i>
                                            <input v-model="user.username" type="text" name="username" placeholder="Enter your username" class="input">
                                        </div>
                                    </div>
                                </div>
                                <!--Password-->
                                <div class="col-lg-12 mb-4">
                                    <label>Password</label>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <i class="bi bi-lock"></i>
                                            <input v-model="user.password" name="password" type="password" required placeholder="Enter your password" class="input">
                                        </div>
                                    </div>
                                </div>
                                <!--Company name-->
                                <div class="col-lg-12 mb-4">
                                    <label>Company Name</label>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <i class="bi bi-building"></i>
                                             <input v-model="user.company_name" name="company_name" type="text" placeholder="Enter company name" class="input" required>
                                        </div>
                                    </div>
                                </div>
                                <!--Agreement-->
                                <div class="col-lg-12 agreement">
                                    <p>By clicking sign up, you agree to the <router-link to="#" class="route-link">Terms</router-link> & <router-link to="#" class="route-link">Privacy Policy.</router-link></p>
                                </div>
                                <!--Signup-->
                                <div class="col-lg-12 mb-4 mt-2">
                                    <input type="submit" value="Sign Up" class="submit">
                                </div>
                                <div class="col-lg-12 mb-4 mt-2 text-center signuas" v-show="loading">
                                    <span  class="spinner-border spinner-border-sm"></span>
                                </div>
                                <!--Signup as a buyer-->
                                <div class="col-lg-12 mt-2 text-center signuas">
                                    <router-link to="/buyer-registration" class="route-link" :disabled="loading">Sign Up as a Buyer</router-link>
                                </div>
                            </div>
                        </form>
                    </div>
                    <!--Already have account-->
                    <div class="col-lg-12 text-center optionBelow">
                        <p>
                            Already have an account? 
                            <span><router-link to="/login" class="route-link">Login</router-link></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>  
    </section>
</template>
<style scoped src="@/assets/css/authStyle.css"></style>
<style scoped src="@/assets/css/bootstrap.min.css"></style>
<script>
//intlTelInput
import 'intl-tel-input/build/css/intlTelInput.css';
import 'intl-tel-input/build/js/intlTelInput.js';
import intlTelInput from 'intl-tel-input';
 export default {
  name: 'supplier',
  data() {
    return {
      user: {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        phone_no:'',
        password: '',
        company_name: ''
      },
      loading: false,
      submitted: false,
      successful: false,
      message: ''
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/supplier-dashboard/home');
    }
    const input = document.querySelector("#telephone");
        intlTelInput(input, {preferredCountries: ["us", "ng", "ca"],});
    window.scrollTo(0,0)
  },
  methods: {
    handlesupplier() {
        this.message = '';
        this.loading = true;
        this.submitted = true;
        console.log(this.user);
      
        this.$store.dispatch('auth/register', this.user).then(

        data => {
            this.message = data.message;
            this.successful = true;
            
        },
        error => {
            this.message =
            (error.response && error.response.data && error.response.data.message) ||
           /*  error.message */ error.response.data.errors[0].message|| "password does not match or too short"
            /* error.toString(); */
            this.successful = false;
            this.loading = false;
        },
        );
        
      
    }
  },
}
</script>