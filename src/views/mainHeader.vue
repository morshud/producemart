<template>
    <header class="mainHeader">
        <nav class="navbar navbar-expand-lg navbar-light navbar-color">
            <div class="container">
                <div class="authDiv mobileAuthDiv">
                    <div v-if="userLogin == 'buyer'">
                        <div class="profile_info" style="left: -19px; ">
                          <img :src="user.img_url" alt="#" v-if="user.img_url" /> 
                          <img src="@/assets/img/client_img.png" alt="#" v-else />
                          Hi <!-- <span style="text-transform: capitalize;">{{ user.firstname }}</span> --> <i class="bi bi-caret-down"></i>
                          <div class="profile_info_iner" style="z-index: 9999;left: -6px;">
                            <div class="profile_author_name">
                              <p style="font-size: 15px;">Buyer Account</p>
                              <h5>{{ user.firstname }} {{ user.lastname[0] }}.</h5>
                              <p style="margin-top:0;font-size: 12px;font-weight: 500;">GreenMOuse</p>
                            </div>
                            <div class="profile_info_details">
                              
                              <router-link to="/buyer-dashboard/home" style="background: transparent !important;color: #000 !important;">
                                <img src="@/assets/img/menu-icon/dashboard.png" style="border: 0;border-radius: 0;margin-right: 10px;"> Dashboard
                              </router-link>
                              <router-link to="/buyer-dashboard/profile" style="margin-left: -20px !important;"
                                ><i style="margin-right: 8px;font-size: 20px; margin-left: -17px !important;background: transparent !important;color: #000 !important;" class="bi bi-person-circle"></i> My Profile</router-link
                              >
                              <a @click.prevent="logOut" style="background: transparent !important;color: #000 !important;cursor: pointer">
                                <img src="@/assets/img/menu-icon/logout.png" style="border: 0;border-radius: 0;margin-right: 10px; width: 15px; margin-left: -17px !important;background: transparent !important;color: #000 !important;"  /> Log Out
                              </a>
                            </div>
                          </div>
                        </div>
                        <!-- <a style="cursor: pointer" @click="logOut" class="authSignup">Logout</a> -->
                    </div>
                    <div v-else-if="userLogin == 'supplier'">
                        <div class="profile_info" style="left: -19px;">
                          <img :src="user.img_url" alt="#" v-if="user.img_url" /> 
                          <img src="@/assets/img/client_img.png" alt="#" v-else />
                          Hi<!-- , <span style="text-transform: capitalize;">{{ user.firstname }}</span> --> <i class="bi bi-caret-down"></i>
                          <div class="profile_info_iner" style="z-index: 9999;left: -6px;">
                            <div class="profile_author_name">
                              <p style="font-size: 15px;">Supplier Account</p>
                              <h5>{{ user.firstname }} {{ user.lastname[0] }}.</h5>
                              <p style="margin-top:0;font-size: 12px;font-weight: 500;">GreenMOuse</p>
                            </div>
                            <div class="profile_info_details">
                              
                              <router-link to="/supplier-dashboard/home" style="background: transparent !important;color: #000 !important;">
                                <img src="@/assets/img/menu-icon/dashboard.png" style="border: 0;border-radius: 0;margin-right: 10px;"> Dashboard
                              </router-link>
                              <router-link to="/supplier-dashboard/profile" style="margin-left: -20px !important;background: transparent !important;color: #000 !important;"
                                ><i style="margin-right: 8px;font-size: 20px;" class="bi bi-person-circle"></i> My Profile</router-link
                              >
                              <a @click.prevent="logOut" style="background: transparent !important;color: #000 !important; cursor: pointer">
                                <img src="@/assets/img/menu-icon/logout.png" style="border: 0;border-radius: 0;margin-right: 10px; width: 15px;"  /> Log Out
                              </a>
                            </div>
                          </div>
                        </div>
                        <!-- <a style="cursor: pointer" @click="logOut" class="authSignup">Logout</a> -->
                    </div>

                    <router-link v-else to="/login"><a class="authLogin">Login</a></router-link>
                </div>
                <a class="navbar-brand lastest" href="/">   
                    <img src="@/assets/img/logo.png">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <i class="bi bi-text-right"></i>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header">
                        <div class="offcanvasImg">
                            <a class="navbar-brand" href="/">   
                                <img src="@/assets/img/pmlg.png">
                            </a>
                        </div>
                        <button type="button" class="btn-offcanvas-close" data-bs-dismiss="offcanvas" aria-label="Close">
                            <i class="bi bi-x-lg"></i>
                        </button>
                    </div>
                    <div class="offcanvas-body" style="opacity:none !important">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <router-link to="/" class="route-link"><a class="nav-link"></a></router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/" class="route-link"><a class="nav-link"></a></router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/" class="route-link"><a class="nav-link">Home</a></router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/about" class="route-link"><a class="nav-link">About Us</a></router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/products" class="route-link"><a class="nav-link">View Product</a></router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/request-a-product" class="route-link"><a class="nav-link">Request a Product</a></router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/blog" class="route-link"><a class="nav-link">Blog</a></router-link>
                            </li>
                            <div class="dropdown">
                              <a class="" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                <a class="nav-link">
                                  <div class="leftoo">
                                      <i class="bi bi-search"></i>
                                  </div>
                                </a>
                              </a>
                              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <searchInner />
                              </div>
                            </div>
                            <searchHeader />
                        </ul>
                       
                        <div class="authDiv desktopAuthDiv ml-3">
                            <div v-if="userLogin == 'buyer'">
                                <div class="profile_info nav-link" style="margin-left: 50px;">
                                  <img :src="user.img_url" alt="#" v-if="user.img_url" /> 
                                  <img src="@/assets/img/client_img.png" alt="#" v-else />
                                  Hi, <span style="text-transform: capitalize;">{{ user.firstname }}</span> <i class="bi bi-caret-down"></i>
                                  <div class="profile_info_iner">
                                    <div class="profile_author_name">
                                      <p style="font-size: 15px;">Buyer Account</p>
                                      <h5>{{ user.firstname }} {{ user.lastname[0] }}.</h5>
                                      <p style="margin-top:0;font-size: 12px;font-weight: 500;">GreenMOuse</p>
                                    </div>
                                    <div class="profile_info_details">
                                      
                                      <router-link to="/buyer-dashboard/home">
                                        <img src="@/assets/img/menu-icon/dashboard.png" style="border: 0;border-radius: 0;margin-right: 10px;"> Dashboard
                                      </router-link>
                                      <router-link to="/buyer-dashboard/profile" style="margin-left: -17px !important;"
                                        ><i style="margin-right: 8px;font-size: 20px;" class="bi bi-person-circle"></i> My Profile</router-link
                                      >
                                      <a @click.prevent="logOut" style="cursor: pointer">
                                        <img src="@/assets/img/menu-icon/logout.png" style="border: 0;border-radius: 0;margin-right: 10px; width: 15px;"  /> Log Out
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <!-- <a style="cursor: pointer" @click="logOut" class="authSignup">Logout</a> -->
                            </div>
                            <div v-else-if="userLogin == 'supplier'">
                                <div class="profile_info nav-link" style="margin-left: 50px;">
                                  <img :src="user.img_url" alt="#" v-if="user.img_url" /> 
                                  <img src="@/assets/img/client_img.png" alt="#" v-else />
                                  Hi, <span style="text-transform: capitalize;">{{ user.firstname }}</span> <i class="bi bi-caret-down"></i>
                                  <div class="profile_info_iner">
                                    <div class="profile_author_name">
                                      <p style="font-size: 15px;">Supplier Account</p>
                                      <h5>{{ user.firstname }} {{ user.lastname[0] }}.</h5>
                                      <p style="margin-top:0;font-size: 12px;font-weight: 500;">GreenMOuse</p>
                                    </div>
                                    <div class="profile_info_details">
                                      
                                      <router-link to="/supplier-dashboard/home">
                                        <img src="@/assets/img/menu-icon/dashboard.png" style="border: 0;border-radius: 0;margin-right: 10px;"> Dashboard
                                      </router-link>
                                      <router-link to="/supplier-dashboard/profile" style="margin-left: -17px !important;"
                                        ><i style="margin-right: 8px;font-size: 20px;" class="bi bi-person-circle"></i> My Profile</router-link
                                      >
                                      <a @click.prevent="logOut" style="cursor: pointer">
                                        <img src="@/assets/img/menu-icon/logout.png" style="border: 0;border-radius: 0;margin-right: 10px; width: 15px;"  /> Log Out
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <!-- <a style="cursor: pointer" @click="logOut" class="authSignup">Logout</a> -->
                            </div>
                            <div class="nav-link" v-else>
                                <router-link to="/login"><a class="authLogin">Login</a></router-link>
                                <router-link to="buyer-registration"><a class="authSignup">Sign Up Free</a></router-link>
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
            //console.log(JSON.parse(localStorage.getItem("user")))
            if(this.user.role == 'buyer'){
                this.userLogin = 'buyer'
                //console.log(this.userLogin)
            }
            if(this.user.role == 'supplier'){
                this.userLogin = 'supplier'
                //console.log(this.userLogin)
            }

        }
      },
      mounted(){
        window.scrollTo(0,0)
        this.getUser();
      }
    }
</script>