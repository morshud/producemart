<template>
    <header class="mainHeader">
        <nav class="navbar navbar-expand-lg navbar-light navbar-color">
            <div class="container-fluid">
                <div class="authDiv mobileAuthDiv">
                    <router-link to="/login"><a class="authLogin">Login</a></router-link>
                </div>
                <a class="navbar-brand" href="/">   
                    <img src="@/assets/img/logo.png">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <i class="bi bi-text-right"></i>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header">
                        <div class="offcanvasImg">
                            <a class="navbar-brand" href="/">   
                                <img src="@/assets/img/logo.png">
                            </a>
                        </div>
                        <button type="button" class="btn-offcanvas-close" data-bs-dismiss="offcanvas" aria-label="Close">
                            <i class="bi bi-x-lg"></i>
                        </button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <router-link to="/" class="route-link"><a class="nav-link">Home</a></router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/about" class="route-link"><a class="nav-link">About Us</a></router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/products" class="route-link"><a class="nav-link">View Products</a></router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/blog" class="route-link"><a class="nav-link">Blog</a></router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/request-a-product" class="route-link"><a class="nav-link">Request a Product</a></router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/faq" class="route-link"><a class="nav-link">FAQs</a></router-link>
                            </li>
                        </ul>
                        <searchInner/>
                        <div class="authDiv desktopAuthDiv">
                            <div v-if="userLogin == 'buyer'">
                                <router-link to="/buyer-dashboard/home"><a class="authLogin">Dashboard</a></router-link>
                                <a style="cursor: pointer" @click="logOut" class="authSignup">Logout</a>
                            </div>
                            <div v-else-if="userLogin == 'supplier'">
                                <router-link to="/supplier-dashboard/home"><a class="authLogin">Dashboard</a></router-link>
                                <a style="cursor: pointer" @click="logOut" class="authSignup">Logout</a>
                            </div>
                            <div v-else>
                                <router-link to="/login"><a class="authLogin">Login</a></router-link>
                                <router-link to="buyer-registration"><a class="authSignup">Sign Up</a></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>
<style scoped src="@/assets/css/styleFrontend.css"></style>
<style scoped src="@/assets/css/bootstrap.css"></style>
<script>
    import SearchInner from './searchInner.vue'
    export default {
      name: "Produce Mart",
      components:{
      'searchInner': SearchInner,
      },
      data(){
        return {
            user: JSON.parse(localStorage.getItem("user")) || '',
            userLogin: ''
        }
      },
      methods: {
        logOut() {
          this.$store.dispatch("auth/logout");
          this.$router.push("/login");
        },
        getUser(){
            if(this.user.role == 'buyer'){
                this.userLogin = 'buyer'
                //console.log(this.userLogin)
            }
            else if(this.user.role == 'supplier'){
                this.userLogin = 'supplier'
                //console.log(this.userLogin)
            }
            else{

            }

        }
      },
      mounted(){
        window.scrollTo(0,0)
        this.getUser();
      }
    }
</script>