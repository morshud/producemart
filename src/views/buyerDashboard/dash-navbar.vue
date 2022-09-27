<template>
  <!--Top Navbar-->
  <div class="container no-gutters">
    <div class="row">
      <div class="col-lg-12 p-0">
        <div
          class="header_iner d-flex justify-content-between align-items-center"
        >
          <!--Hamburger-->
          <div type="button" role="button" class="line_icon d-lg-block" @click.prevent="showMenuDash">
            <img src="@/assets/img/dashboard-img/line_img.png" />
          </div>
          <nav class="sidebar dark_sidebar" :class="showMenu ? 'showSidebar' : 'showOnlyMobile'">
            <div class="logo d-flex justify-content-between">
                
                <router-link class="large_logo" to="/"><img src="@/assets/img/logo.png" alt="Produce Mart Logo"></router-link>
                <router-link class="small_logo" to="/"><img src="@/assets/img/main-logo.png" alt="Produce Mart Logo"></router-link>
                <button type="button" style="background: transparent;border: 0;margin-left: -10px;" data-toggle="tooltip" data-placement="left" title="Close Sidebar Menu" class="btn-offcanvas-close" @click.prevent="closeSidbarMenu">
                        <i class="bi bi-x-lg"></i>
                    </button>
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

                <li class="">
                    <router-link to="/buyer-dashboard/product-request">
                        <a aria-expanded="false">
                            <div class="nav_icon_small">
                                <img src="@/assets/img/menu-icon/dashboard.png">
                            </div>
                            <div class="nav_title">
                                <span>Requested Products</span>
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
                <li class="">
                    <router-link to="#" class="has-arrow">
                      <a aria-expanded="false">
                        <div class="nav_icon_small">
                          <img src="@/assets/img/menu-icon/setting.png" />
                        </div>
                        <div class="nav_title">
                          <span>Addresses</span>
                        </div>
                      </a>
                    </router-link>
                    <ul>
                      <li
                        :class="
                          path == '/buyer-dashboard/add-new-address' && 'active-nav'
                        "
                      >
                        <router-link to="/buyer-dashboard/add-new-address"
                          ><a>Add New Address</a></router-link
                        >
                      </li>
                      <li
                        :class="path == '/buyer-dashboard/View-address' && 'active-nav'"
                      >
                        <router-link to="/buyer-dashboard/View-address"
                          ><a>View All Address</a></router-link
                        >
                      </li>
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
          <!--Search Bar-->
          <div class="serach_field-area d-flex align-items-center">
            <div class="search_inner">
              <form action="#">
                <div class="search_field">
                  <input type="text" placeholder="Search" />
                </div>
                <button type="submit">
                  <img src="@/assets/img/icon/icon_search.svg" />
                </button>
              </form>
            </div>
          </div>
          <div
            class="header_right d-flex justify-content-between align-items-center"
          >
            <!--Notification-->
            <div class="header_notification_warp d-flex align-items-center">
              <li>
                <router-link class="bell_notification_clicker" to="/buyer-dashboard/all-notifications">
                  <img src="@/assets/img/icon/bell.svg" alt="" />
                  <span>{{notifications}}</span>
                </router-link>
                <!-- <div class="Menu_NOtification_Wrap">
                  <div class="notification_Header">
                    <h4>Notifications</h4>
                  </div>
                  <div class="Notification_body">
                    <div class="single_notify d-flex align-items-center">
                      <div class="notify_thumb">
                        <a href="#"
                          ><img src="@/assets/img/customers/1.png" alt=""
                        /></a>
                      </div>
                      <div class="notify_content">
                        <a href="#">
                          <h5>Cool Marketing</h5>
                        </a>
                        <p>Lorem ipsum dolor sit amet</p>
                      </div>
                    </div>
                    <div class="single_notify d-flex align-items-center">
                      <div class="notify_thumb">
                        <a href="#"
                          ><img src="@/assets/img/customers/1.png" alt=""
                        /></a>
                      </div>
                      <div class="notify_content">
                        <a href="#">
                          <h5>Awesome packages</h5>
                        </a>
                        <p>Lorem ipsum dolor sit amet</p>
                      </div>
                    </div>
                    <div class="single_notify d-flex align-items-center">
                      <div class="notify_thumb">
                        <a href="#"
                          ><img src="@/assets/img/customers/1.png" alt=""
                        /></a>
                      </div>
                      <div class="notify_content">
                        <a href="#">
                          <h5>what a packages</h5>
                        </a>
                        <p>Lorem ipsum dolor sit amet</p>
                      </div>
                    </div>
                    <div class="single_notify d-flex align-items-center">
                      <div class="notify_thumb">
                        <a href="#"
                          ><img src="@/assets/img/customers/1.png" alt=""
                        /></a>
                      </div>
                      <div class="notify_content">
                        <a href="#">
                          <h5>Cool Marketing</h5>
                        </a>
                        <p>Lorem ipsum dolor sit amet</p>
                      </div>
                    </div>
                    <div class="single_notify d-flex align-items-center">
                      <div class="notify_thumb">
                        <a href="#"
                          ><img src="@/assets/img/customers/1.png" alt=""
                        /></a>
                      </div>
                      <div class="notify_content">
                        <a href="#">
                          <h5>Awesome packages</h5>
                        </a>
                        <p>Lorem ipsum dolor sit amet</p>
                      </div>
                    </div>
                    <div class="single_notify d-flex align-items-center">
                      <div class="notify_thumb">
                        <a href="#"
                          ><img src="@/assets/img/customers/1.png" alt=""
                        /></a>
                      </div>
                      <div class="notify_content">
                        <a href="#">
                          <h5>what a packages</h5>
                        </a>
                        <p>Lorem ipsum dolor sit amet</p>
                      </div>
                    </div>
                  </div>
                  <div class="nofity_footer">
                    <div class="submit_button text-center pt_20">
                      <router-link to="/buyer-dashboard/all-notifications" class="btn_1">See More</router-link>
                    </div>
                  </div>
                </div> -->
              </li>
            </div>
            <!--Profile-->
            <div class="profile_info">
              <img :src="user.img_url" alt="#" v-if="user.img_url" /> 
              <img src="@/assets/img/client_img.png" alt="#" v-else />
              Hi, {{ user.firstname }} <i class="bi bi-caret-down"></i>
              <div class="profile_info_iner">
                <div class="profile_author_name">
                  <p style="font-size: 15px;">Buyer Account</p>
                  <h5>{{ user.firstname }} {{ user.lastname[0] }}.</h5>
                  <p style="margin-top: -10px;font-size: 12px;font-weight: 500;">{{user.company_name}}</p>
                </div>
                <div class="profile_info_details">
                  
                  <router-link to="/buyer-dashboard/home">
                    <img src="@/assets/img/menu-icon/dashboard.png" style="border: 0;border-radius: 0;margin-right: 10px;"> Dashboard
                  </router-link>
                  <router-link to="/buyer-dashboard/profile" style="margin-left: -22px;"
                    ><i style="margin-right: 8px;font-size: 20px;" class="bi bi-person-circle"></i> My Profile</router-link
                  >
                  <a @click.prevent="logOut">
                    <img src="@/assets/img/menu-icon/logout.png" style="border: 0;border-radius: 0;margin-right: 10px; width: 15px;"  /> Log Out
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped src="@/assets/vendors/themefy_icon/themify-icons.css"></style>
<style scoped src="@/assets/vendors/niceselect/css/nice-select.css"></style>
<style scoped src="@/assets/css/style.css"></style>
<script>
export default {
  name: "dashboard",
  computed: {
    currentUser() {
      const user = JSON.parse(localStorage.getItem("user"));
      //console.log(user);
      if (user) {
        //console.log(user);
        return user;
      }
    },
  },
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")),
      notifications: 0,
      showMenu: false,
    };
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
    showMenuDash(){
      this.showMenu = true;
      //console.log(this.showMenu)
    },
    closeSidbarMenu(){
      this.showMenu = false;
    },
     async getUserNotifications() {
      const res = await fetch(
        "https://producemart.herokuapp.com/getUserNotifications",
        {
          method: "GET",
          headers: {
            Authorization: this.user.token,
          },
        }
      );
      const { data } = await res.json();
      const filt = data.filter((item) => item.read == false)
      this.notifications = filt.length
      //   console.log(this.notifications);
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    if (!this.currentUser) {
      this.$router.push("/login");
    }
    this.getUserNotifications();
    let externalScriptJquery = document.createElement("script");
    let externalScriptMetisMenu = document.createElement("script");
    let externalScriptCustom = document.createElement("script");

    externalScriptJquery.setAttribute(
      "src",
      "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
    );
    externalScriptMetisMenu.setAttribute(
      "src",
      "https://cdn.statically.io/gh/NathTimi/Mart-script/main/metisMenu.js"
    );
    externalScriptCustom.setAttribute(
      "src",
      "https://cdn.statically.io/gh/NathTimi/Mart-script/main/custom.js"
    );

    document.head.appendChild(externalScriptJquery);
    document.head.appendChild(externalScriptMetisMenu);
    document.head.appendChild(externalScriptCustom);
  },
};
</script>
<style>
  .showSidebar{
    left: 0px !important;
  }
  .showOnlyMobile{
    display: none !important;
  }
</style>
