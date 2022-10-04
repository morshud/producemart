<template>
  <!--Top Navbar-->
  <div class="container-fluid no-gutters">
    <div class="row">
      <div class="col-lg-12 p-0">
        <div
          class="header_iner d-flex justify-content-between align-items-center"
        >
          <!--Hamburger-->
          <a class="line_icon d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block d-xxl-block" style="cursor: pointer" >
          </a>
          <a class="line_icon d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none d-xxl-none" style="cursor: pointer" @click.prevent="showMenuDash">
            <img src="@/assets/img/dashboard-img/line_img.png" />
          </a>
          <nav class="sidebar dark_sidebar" :class="showMenu ? 'showSidebar' : 'showOnlyMobile'" :style="{ visibility: showMenu ? 'left' : '0 !important' }" v-bind="$attrs">
            <div class="logo d-flex justify-content-between">
              <router-link class="large_logo" to="/"
                ><img
                  src="@/assets/img/logo.png"
                  alt="Produce Mart Logo"
              /></router-link>
              <router-link class="small_logo" to="/"
                ><img
                  src="@/assets/img/main-logo.png"
                  alt="Produce Mart Logo"
              /></router-link>
              <button type="button" style="background: transparent;border: 0;margin-left: -10px;" data-toggle="tooltip" data-placement="left" title="Close Sidebar Menu" class="btn-offcanvas-close" @click.prevent="closeSidbarMenu">
                        <i class="bi bi-x-lg"></i>
                    </button>
            </div>
            <ul id="sidebar_menu">
              <!--Dashboard-->
              <li class="">
                <router-link to="/supplier-dashboard/home" class="dashboardMainLink">
                  <div class="nav_icon_small">
                    <img src="@/assets/img/menu-icon/dashboard.png" />
                  </div>
                  <div class="nav_title">
                    <span :class="path == '/supplier-dashboard/home' && 'active-nav'"
                      >Dashboard</span
                    >
                  </div>
                </router-link>
              </li>

              <!--Log Out-->
              <li class="">
                <router-link to="/supplier-dashboard/bid-product" >
                  <a aria-expanded="false">
                    <div class="nav_icon_small">
                      <img src="@/assets/img/menu-icon/bid.png" />
                    </div>
                    <div class="nav_title">
                      <span :class="path == '/supplier-dashboard/bid-product' && 'active-nav'"
                      >Bids</span
                    >
                    </div>
                  </a>
                </router-link>
              </li>


              <!--Notifications-->
              <li class="">
                <router-link to="#" class="has-arrow">
                  <a aria-expanded="false">
                    <div class="nav_icon_small">
                      <img src="@/assets/img/menu-icon/notification.png" />
                    </div>
                    <div class="nav_title">
                      <span>Notifications</span>
                    </div>
                  </a>
                </router-link>
                <ul>
                  <li
                    :class="
                      path == '/supplier-dashboard/all-notifications' && 'active-nav'
                    "
                  >
                    <router-link to="/supplier-dashboard/all-notifications"
                      ><a>All Notifications</a></router-link
                    >
                  </li>
                  <!-- <li>
                    <router-link to="/supplier-dashboard/deleted-notifications"
                      ><a>Deleted Notifications</a></router-link
                    >
                  </li> -->
                </ul>
              </li>
              <!--Orders-->
              <li class="">
                <router-link to="#" class="has-arrow">
                  <a aria-expanded="false">
                    <div class="nav_icon_small">
                      <img src="@/assets/img/menu-icon/order.png" />
                    </div>
                    <div class="nav_title">
                      <span>Orders</span>
                    </div>
                  </a>
                </router-link>
                <ul>
                  <li
                    :class="path == '/supplier-dashboard/open-orders' && 'active-nav'"
                  >
                    <router-link to="/supplier-dashboard/open-orders"
                      ><a>Open Orders</a></router-link
                    >
                  </li>
                  <li
                    :class="path == '/supplier-dashboard/closed-orders' && 'active-nav'"
                  >
                    <router-link to="/supplier-dashboard/closed-orders"
                      ><a>Closed Orders</a></router-link
                    >
                  </li>
                  <li
                    :class="
                      path == '/supplier-dashboard/cancelled-orders' && 'active-nav'
                    "
                  >
                    <router-link to="/supplier-dashboard/cancelled-orders"
                      ><a>Cancelled Orders</a></router-link
                    >
                  </li>
                </ul>
              </li>
              <!--Products-->
              <li class="">
                <router-link to="#" class="has-arrow">
                  <a aria-expanded="false">
                    <div class="nav_icon_small">
                      <img src="@/assets/img/menu-icon/product.png" />
                    </div>
                    <div class="nav_title">
                      <span>Products</span>
                    </div>
                  </a>
                </router-link>
                <ul>
                  <li
                    :class="
                      path == '/supplier-dashboard/upload-product' && 'active-nav'
                    "
                  >
                    <router-link to="/supplier-dashboard/upload-product"
                      ><a>Upload Product</a></router-link
                    >
                  </li>
                  <li
                    :class="
                      path == '/supplier-dashboard/published-products' && 'active-nav'
                    "
                  >
                    <router-link to="/supplier-dashboard/published-products"
                      ><a>Published Products</a></router-link
                    >
                  </li>
                  <li
                    :class="
                      path == '/supplier-dashboard/pending-products' && 'active-nav'
                    "
                  >
                    <router-link to="/supplier-dashboard/pending-products"
                      ><a>Pending Products</a></router-link
                    >
                  </li>
                  <!-- <li>
                    <router-link to="/supplier-dashboard/rejected-products"
                      ><a>Rejected Products</a></router-link
                    >
                  </li> -->
                  <li
                    :class="
                      path == '/supplier-dashboard/unavailable-products' && 'active-nav'
                    "
                  >
                    <router-link to="/supplier-dashboard/unavailable-products"
                      ><a>Unavailable Products</a></router-link
                    >
                  </li>
                  <li
                    :class="
                      path == '/supplier-dashboard/draft-products' && 'active-nav'
                    "
                  >
                    <router-link to="/supplier-dashboard/draft-products"
                      ><a>Draft Products</a></router-link
                    >
                  </li>
                </ul>
              </li>
              <!--Certifications-->
              <li class="">
                <router-link to="#" class="has-arrow">
                  <a aria-expanded="false">
                    <div class="nav_icon_small">
                      <img src="@/assets/img/menu-icon/order.png" />
                    </div>
                    <div class="nav_title">
                      <span>Certifications</span>
                    </div>
                  </a>
                </router-link>
                <ul>
                  <li
                    :class="path == '/supplier-dashboard/request-audit' && 'active-nav'"
                  >
                    <router-link to="/supplier-dashboard/request-audit"
                      ><a>Request Audit</a></router-link
                    >
                  </li>
                  <li
                    :class="path == '/supplier-dashboard/view-supplier-audit' && 'active-nav'"
                  >
                    <router-link to="/supplier-dashboard/view-supplier-audit"
                      ><a>View Audit</a></router-link
                    >
                  </li>
                  <li
                    :class="path == '/supplier-dashboard/uploadCertificate' && 'active-nav'"
                  >
                    <router-link to="/supplier-dashboard/uploadCertificate"
                      ><a>Upload Certificate</a></router-link
                    >
                  </li>
                </ul>
              </li>
              <!--Sales Analytics-->
              <!-- <li class="">
                <router-link to="/supplier-dashboard/sales-analytics">
                  <a aria-expanded="false">
                    <div class="nav_icon_small">
                      <img src="@/assets/img/menu-icon/sales-analysis.png" />
                    </div>
                    <div class="nav_title">
                      <span
                        :class="
                          path == '/supplier-dashboard/sales-analytics' && 'active-nav'
                        "
                        >Sales Analytics</span
                      >
                    </div>
                  </a>
                </router-link>
              </li> -->
              <!--Settings-->
              <li class="">
                <router-link to="#" class="has-arrow">
                  <a aria-expanded="false">
                    <div class="nav_icon_small">
                      <img src="@/assets/img/menu-icon/address.png" />
                    </div>
                    <div class="nav_title">
                      <span>Addresses</span>
                    </div>
                  </a>
                </router-link>
                <ul>
                  <li
                    :class="
                      path == '/supplier-dashboard/add-new-address' && 'active-nav'
                    "
                  >
                    <router-link to="/supplier-dashboard/add-new-address"
                      ><a>Add New Address</a></router-link
                    >
                  </li>
                  <li
                    :class="path == '/supplier-dashboard/View-address' && 'active-nav'"
                  >
                    <router-link to="/supplier-dashboard/View-address"
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
                      <img src="@/assets/img/menu-icon/setting.png" />
                    </div>
                    <div class="nav_title">
                      <span>Settings</span>
                    </div>
                  </a>
                </router-link>
                <ul>
                  <li
                    :class="
                      path == '/supplier-dashboard/edit-profile-details' && 'active-nav'
                    "
                  >
                    <router-link to="/supplier-dashboard/edit-profile-details"
                      ><a>Edit Profile Details</a></router-link
                    >
                  </li>
                  <li
                    :class="
                      path == '/supplier-dashboard/change-password' && 'active-nav'
                    "
                  >
                    <router-link to="/supplier-dashboard/change-password"
                      ><a>Change Password</a></router-link
                    >
                  </li>
                </ul>
              </li>
              <!--Log Out-->
              <li class="">
                <router-link to="#">
                  <a href @click.prevent="logOut" aria-expanded="false">
                    <div class="nav_icon_small">
                      <img src="@/assets/img/menu-icon/logout.png" />
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
          <!-- <div class="serach_field-area d-flex align-items-center">
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
          </div> -->
          <div
            class="header_right d-flex justify-content-between align-items-center"
          >
            <!--Notification-->
            <div class="header_notification_warp d-flex align-items-center">
              <li>
                <router-link
                  class="bell_notification_clicker"
                  to="/supplier-dashboard/all-notifications"
                  v-if="notifications"
                >
                  <img src="@/assets/img/icon/bell.svg" alt="" />
                  <span :class="notifications && 'ifNotification'">{{
                    notifications.filter((prod) => !prod.read).length
                  }}</span>
                </router-link>
                <!-- <div class="Menu_NOtification_Wrap">
                  <div class="notification_Header">
                    <h4>Notifications</h4>
                  </div>
                  <div class="Notification_body" v-if="notifications">
                    <div
                      class="single_notify d-flex align-items-center"
                      v-for="(note, i) in notifications.slice(0, 5)"
                      :key="i"
                    >
                      <div class="notify_thumb">
                        <a href="#"
                          ><img src="@/assets/img/customers/1.png" alt=""
                        /></a>
                      </div>
                      <div class="notify_content">
                        <a href="#">
                          <h5>{{ note.type }}</h5>
                        </a>
                        <p>{{ note.content }}</p>
                      </div>
                    </div>
                  </div>
                  <div class="nofity_footer">
                    <div class="submit_button text-center pt_20">
                      <router-link
                        to="/supplier-dashboard/all-notifications"
                        class="btn_1"
                        >See More</router-link
                      >
                    </div>
                  </div>
                </div> -->
              </li>
            </div>
            <!--Profile-->
            <div class="profile_info">
              <img class="avatar" :src="user.img_url" alt="#" v-if="user.img_url" /> 
              <img class="avatar" src="@/assets/img/client_img.png" alt="#" v-else />
              Hi, {{ user.firstname }} <i class="bi bi-caret-down"></i>
              <div class="profile_info_iner">
                <div class="profile_author_name">
                  <p style="font-size: 15px;">Supplier Account</p>
                  <h5>{{ user.firstname }} {{ user.lastname[0] }}.</h5>
                  <p style="margin-top: -10px;font-size: 12px;font-weight: 500;">{{user.company_name}}</p>
                </div>
                <div class="profile_info_details">
                  
                  <router-link to="/supplier-dashboard/home">
                    <img src="@/assets/img/menu-icon/dashboard.png" style="border: 0;border-radius: 0;margin-right: 10px;"> Dashboard
                  </router-link>
                  <router-link to="/supplier-dashboard/profile" style="margin-left: -22px;"
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
<style scoped src="@/assets/css/styleSupport.css"></style>
<script>
export default {
  name: "dashboard",
  //   computed: {
  //     async currentUser() {
  //       return this.user =
  //     },
  //   },
  
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")),
      notifications: null,
      showMenu: false,
    };
  },

  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
    showMenuDash(){
      this.showMenu ? this.showMenu = false : this.showMenu = true;
    },
    closeSidbarMenu(){
      this.showMenu = false;
    },
    async getAllNotifications() {
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
      this.notifications = data;
      //   console.log(this.notifications);
    },
  },
  mounted() {
    this.getAllNotifications();
    // if (!this.currentUser) {
    //     this.$router.push('/login');
    // }
    // console.log(JSON.parse(localStorage.getItem("data")));

    window.scrollTo(0, 0);
    /*window.addEventListener('click', (e) => {
      if (!this.$el.contains(e.target)){
        this.showMenu = false
      }
    })*/

    
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
      "https://cdn.statically.io/gh/morshud/JsFiles/main/custom.js"
    );

    document.head.appendChild(externalScriptJquery)
        document.head.appendChild(externalScriptMetisMenu)
        document.head.appendChild(externalScriptCustom)
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