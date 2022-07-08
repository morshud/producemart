<template>
    <!--Side Navbar-->
    <nav class="sidebar dark_sidebar">
        <div class="logo d-flex justify-content-between">
            <a class="large_logo" href="/"><img src="@/assets/img/dashboard-img/dash-logo.png" alt="Produce Mart Logo"></a>
            <a class="small_logo" href="/"><img src="@/assets/img/dashboard-img/mini_logo.png" alt="Produce Mart Logo"></a>
        </div>
        <ul id="sidebar_menu">
            <!--Dashboard-->
            <li class="">
                <router-link to="/buyer-dashboard/home">
                    <a aria-expanded="false">
                        <div class="nav_icon_small">
                            <img src="@/assets/img/menu-icon/dashboard.png">
                        </div>
                        <div class="nav_title">
                            <span>Dashboard</span>
                        </div>
                    </a>
                </router-link>
            </li>
            <!--Notifications-->
            <li class="">
                <router-link to="#" class="has-arrow">
                    <a aria-expanded="false">
                        <div class="nav_icon_small">
                            <img src="@/assets/img/menu-icon/notification.png">
                        </div>
                        <div class="nav_title">
                            <span>Notifications</span>
                        </div>
                    </a>
                </router-link>
                <ul>
                    <li><router-link to="/buyer-dashboard/all-notifications"><a>All Notifications</a></router-link></li>
                </ul>
            </li>
            <!--Orders-->
            <li class="">
                <router-link to="#" class="has-arrow">
                    <a aria-expanded="false">
                        <div class="nav_icon_small">
                            <img src="@/assets/img/menu-icon/order.png">
                        </div>
                        <div class="nav_title">
                            <span>Orders</span>
                        </div>
                    </a>
                </router-link>
                <ul>
                    <li><router-link to="/buyer-dashboard/open-orders"><a>Open Orders</a></router-link></li>
                    <li><router-link to="/buyer-dashboard/closed-orders"><a>Closed Orders</a></router-link></li>
                    <li><router-link to="/buyer-dashboard/cancelled-orders"><a>Cancelled Orders</a></router-link></li>
                    <!-- <li><router-link to="/buyer-dashboard/order-review"><a>Order Review</a></router-link></li> -->
                </ul>
            </li>
            <!--Settings-->
            <li class="">
                <router-link to="#" class="has-arrow">
                    <a aria-expanded="false">
                        <div class="nav_icon_small">
                            <img src="@/assets/img/menu-icon/setting.png">
                        </div>
                        <div class="nav_title">
                            <span>Settings</span>
                        </div>
                    </a>
                </router-link>
                <ul>
                    <li><router-link to="/buyer-dashboard/edit-profile-details"><a>Edit Profile Details</a></router-link></li>
                    <li><router-link to="/buyer-dashboard/change-password"><a>Change Password</a></router-link></li>
                </ul>
            </li>
            <!--Log Out-->
            <li class="">
                <router-link to="#">
                    <a href @click.prevent="logOut" aria-expanded="false">
                        <div class="nav_icon_small">
                            <img src="@/assets/img/menu-icon/logout.png">
                        </div>
                        <div class="nav_title">
                            <span>Log Out</span>
                        </div>
                    </a>
                </router-link>
            </li>
        </ul>
    </nav>
    <!--Ends(side navbar)-->
</template>
<style scoped src="@/assets/vendors/themefy_icon/themify-icons.css"></style>
<style scoped src="@/assets/vendors/niceselect/css/nice-select.css"></style>
<style scoped src="@/assets/css/style.css"></style>
<script>
    export default {
         name: 'dashboard',
  computed: {
    currentUser() {
      const user = JSON.parse(localStorage.getItem("user"));
      console.log(user);
      if (user) {
          console.log(user)
        return user;
      }
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  },

  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  },
      mounted(){
        window.scrollTo(0,0)

        let externalScriptJquery = document.createElement('script')
        let externalScriptMetisMenu = document.createElement('script')
        let externalScriptCustom = document.createElement('script')

        externalScriptJquery.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js')
        externalScriptMetisMenu.setAttribute('src', 'https://cdn.statically.io/gh/NathTimi/Mart-script/main/metisMenu.js')
        externalScriptCustom.setAttribute('src', 'https://cdn.statically.io/gh/NathTimi/Mart-script/main/custom.js')

        document.head.appendChild(externalScriptJquery)
        document.head.appendChild(externalScriptMetisMenu)
        document.head.appendChild(externalScriptCustom)
      }
    }
</script>