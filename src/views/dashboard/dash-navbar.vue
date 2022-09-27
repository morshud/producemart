<template>
  <!--Top Navbar-->
  <div class="container-fluid no-gutters">
    <div class="row">
      <div class="col-lg-12 p-0">
        <div
          class="header_iner d-flex justify-content-between align-items-center"
        >
          <!--Hamburger-->
          <div class="line_icon d-lg-block" role="button" @click.prevent="showMenuDash">
            <img src="@/assets/img/dashboard-img/line_img.png" />
          </div>
          <nav class="sidebar dark_sidebar" :class="showMenu ? 'showSidebar' : 'showOnlyMobile'">
            <div class="logo d-flex justify-content-between">
              <router-link class="large_logo" to="/dashboard/home"
                ><img
                  src="@/assets/img/logo.png"
                  alt="Produce Mart Logo"
              /></router-link>
              <router-link class="small_logo" to="/dashboard/home"
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
                <router-link to="/dashboard/home">
                  <a aria-expanded="false">
                    <div class="nav_icon_small">
                      <img src="@/assets/img/menu-icon/dashboard.png" />
                    </div>
                    <div class="nav_title">
                      <span :class="path == '/dashboard/home' && 'active-nav'"
                        >Dashboard</span
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
                  <li :class="path == '/dashboard/all-notifications' && 'active-nav'">
                    <router-link to="/dashboard/all-notifications"
                      ><a>All Notifications</a></router-link
                    >
                  </li>
                </ul>
              </li>
              <!--Emails-->
              <li class="" v-if="user.role == 'superadmin'">
                <router-link to="#" class="has-arrow">
                  <a aria-expanded="false">
                    <div class="nav_icon_small">
                      <img src="@/assets/img/menu-icon/notification.png" />
                    </div>
                    <div class="nav_title">
                      <span>Emails</span>
                    </div>
                  </a>
                </router-link>
                <ul>
                  <li :class="path == '/dashboard/buyer-email' && 'active-nav'">
                    <router-link to="/dashboard/buyer-email"><a>Buyers</a></router-link>
                  </li>
                  <li :class="path == '/dashboard/supplier-email' && 'active-nav'">
                    <router-link to="/dashboard/supplier-email"
                      ><a>Suppliers</a></router-link
                    >
                  </li>
                  <li :class="path == '/dashboard/inspector-email' && 'active-nav'">
                    <router-link to="/dashboard/inspector-email"
                      ><a>Inspector</a></router-link
                    >
                  </li>
                  <li :class="path == '/dashboard/shipper-email' && 'active-nav'">
                    <router-link to="/dashboard/shipper-email"
                      ><a>Shipper</a></router-link
                    >
                  </li>
                  <!-- <li>
                    <router-link to="/dashboard/add-email"
                      ><a>Add Email</a></router-link
                    >
                  </li> -->
                </ul>
              </li>

              <!-- Transaction  -->
              <li class="">
                <router-link to="/dashboard/transaction">
                  <a aria-expanded="false">
                    <div class="nav_icon_small">
                      <img src="@/assets/img/menu-icon/transaction.png" />
                    </div>
                    <div class="nav_title">
                      <span :class="path == '/dashboard/transaction' && 'active-nav'"
                        >Transactions</span
                      >
                    </div>
                  </a>
                </router-link>
              </li>

              <!--Products-->
              <li
                class=""
                v-if="user.role == 'superadmin' || user.role == 'operatingadmin'"
              >
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
                  <li :class="path == '/dashboard/active-products' && 'active-nav'">
                    <router-link to="/dashboard/active-products"
                      ><a>Active Products</a></router-link
                    >
                  </li>
                  <li :class="path == '/dashboard/pending-products' && 'active-nav'">
                    <router-link to="/dashboard/pending-products"
                      ><a>Pending Products</a></router-link
                    >
                  </li>
                  <li :class="path == '/dashboard/disable-products' && 'active-nav'">
                    <router-link to="/dashboard/disable-products"
                      ><a>Disable Products</a></router-link
                    >
                  </li>
                </ul>
              </li>
              <!--Orders-->
              <li
                class=""
                v-if="user.role == 'superadmin' || user.role == 'operatingadmin'"
              >
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
                  <li :class="path == '/dashboard/view-orders' && 'active-nav'">
                    <router-link to="/dashboard/view-orders"
                      ><a>View Orders</a></router-link
                    >
                  </li>
                </ul>
              </li>
              <!--Buyers-->
              <li
                class=""
                v-if="user.role == 'superadmin' || user.role == 'operatingadmin'"
              >
                <router-link to="#" class="has-arrow">
                  <a aria-expanded="false">
                    <div class="nav_icon_small">
                      <img src="@/assets/img/menu-icon/buyer.png" />
                    </div>
                    <div class="nav_title">
                      <span>Buyers</span>
                    </div>
                  </a>
                </router-link>
                <ul>
                  <li :class="path == '/dashboard/active-buyers' && 'active-nav'">
                    <router-link to="/dashboard/active-buyers"
                      ><a>Active Buyers</a></router-link
                    >
                  </li>
                  <li :class="path == '/dashboard/incomplete-buyers' && 'active-nav'">
                    <router-link to="/dashboard/incomplete-buyers"
                      ><a>Incomplete Buyers</a></router-link
                    >
                  </li>
                  <li :class="path == '/dashboard/disable-buyers' && 'active-nav'">
                    <router-link to="/dashboard/disable-buyers"
                      ><a>Disable Buyers</a></router-link
                    >
                  </li>
                </ul>
              </li>
              <!--Supplier-->
              <li
                class=""
                v-if="user.role == 'superadmin' || user.role == 'operatingadmin'"
              >
                <router-link to="#" class="has-arrow">
                  <a aria-expanded="false">
                    <div class="nav_icon_small">
                      <img src="@/assets/img/menu-icon/seller.png" />
                    </div>
                    <div class="nav_title">
                      <span>Suppliers</span>
                    </div>
                  </a>
                </router-link>
                <ul>
                  <li :class="path == '/dashboard/active-suppliers' && 'active-nav'">
                    <router-link to="/dashboard/active-suppliers"
                      ><a>Active Suppliers</a></router-link
                    >
                  </li>
                  <li :class="path == '/dashboard/pending-suppliers' && 'active-nav'">
                    <router-link to="/dashboard/pending-suppliers"
                      ><a>Pending Suppliers</a></router-link
                    >
                  </li>
                  <li
                    :class="path == '/dashboard/incomplete-suppliers' && 'active-nav'"
                  >
                    <router-link to="/dashboard/incomplete-suppliers"
                      ><a>Incomplete Suppliers</a></router-link
                    >
                  </li>
                  <li :class="path == '/dashboard/disable-suppliers' && 'active-nav'">
                    <router-link to="/dashboard/disable-suppliers"
                      ><a>Disable Suppliers</a></router-link
                    >
                  </li>
                </ul>
              </li>
              <!--Shipper-->
              <li class="" v-if="user.role == 'superadmin'">
                <router-link to="#" class="has-arrow">
                  <a aria-expanded="false">
                    <div class="nav_icon_small">
                      <img src="@/assets/img/menu-icon/shipper.png" />
                    </div>
                    <div class="nav_title">
                      <span>Shipper</span>
                    </div>
                  </a>
                </router-link>
                <ul>
                  <li :class="path == '/dashboard/add-shipper' && 'active-nav'">
                    <router-link to="/dashboard/add-shipper"
                      ><a>Add Shipper</a></router-link
                    >
                  </li>
                  <li :class="path == '/dashboard/view-shipper' && 'active-nav'">
                    <router-link to="/dashboard/view-shipper"
                      ><a>View Shipper</a></router-link
                    >
                  </li>
                </ul>
              </li>
              <!--Inspector-->
              <li class="" v-if="user.role == 'superadmin'">
                <router-link to="#" class="has-arrow">
                  <a aria-expanded="false">
                    <div class="nav_icon_small">
                      <img src="@/assets/img/menu-icon/inspector.png" />
                    </div>
                    <div class="nav_title">
                      <span>Inspector</span>
                    </div>
                  </a>
                </router-link>
                <ul>
                  <li :class="path == '/dashboard/add-inspector' && 'active-nav'">
                    <router-link to="/dashboard/add-inspector"
                      ><a>Add Inspector</a></router-link
                    >
                  </li>
                  <li :class="path == '/dashboard/view-inspectors' && 'active-nav'">
                    <router-link to="/dashboard/view-inspectors"
                      ><a>View Inspectors</a></router-link
                    >
                  </li>
                </ul>
              </li>
              <!--Quotes-->
              <li
                class=""
                v-if="user.role == 'superadmin' || user.role == 'operatingadmin'"
              >
                <router-link to="#" class="has-arrow">
                  <a aria-expanded="false">
                    <div class="nav_icon_small">
                      <img src="@/assets/img/menu-icon/quote.png" />
                    </div>
                    <div class="nav_title">
                      <span>Quotes</span>
                    </div>
                  </a>
                </router-link>
                <ul>
                  <li :class="path == '/dashboard/view-quotes' && 'active-nav'">
                    <router-link to="/dashboard/view-quotes"
                      ><a>View Quotes</a></router-link
                    >
                  </li>
                </ul>
              </li>
              <!--Blogs-->
              <li class="" v-if="user.role == 'superadmin'">
                <router-link to="#" class="has-arrow">
                  <a aria-expanded="false">
                    <div class="nav_icon_small">
                      <img src="@/assets/img/menu-icon/access-level.png" />
                    </div>
                    <div class="nav_title">
                      <span>Blog</span>
                    </div>
                  </a>
                </router-link>
                <ul>
                  <li :class="path == '/dashboard/write-blog' && 'active-nav'">
                    <router-link to="/dashboard/write-blog"
                      ><a>Write Blog</a></router-link
                    >
                  </li>
                  <li :class="path == '/dashboard/view-blog' && 'active-nav'">
                    <router-link to="/dashboard/view-blog"
                      ><a>View Blog</a></router-link
                    >
                  </li>
                </ul>
              </li>
              <!--Access Level-->
              <li class="" v-if="user.role == 'superadmin'">
                <router-link to="#" class="has-arrow">
                  <a aria-expanded="false">
                    <div class="nav_icon_small">
                      <img src="@/assets/img/menu-icon/access-level.png" />
                    </div>
                    <div class="nav_title">
                      <span>Access Level</span>
                    </div>
                  </a>
                </router-link>
                <ul>
                  <li :class="path == '/dashboard/create-admin' && 'active-nav'">
                    <router-link to="/dashboard/create-admin"
                      ><a>Create Admin</a></router-link
                    >
                  </li>
                  <li :class="path == '/dashboard/view-admin' && 'active-nav'">
                    <router-link to="/dashboard/view-admin"
                      ><a>View Admin</a></router-link
                    >
                  </li>
                </ul>
              </li>
              <!--Reports-->
              <li
                class=""
                v-if="user.role == 'superadmin' || user.role == 'reportingadmin'"
              >
                <router-link to="#" class="has-arrow">
                  <a aria-expanded="false">
                    <div class="nav_icon_small">
                      <img src="@/assets/img/menu-icon/sales-analysis.png" />
                    </div>
                    <div class="nav_title">
                      <span>Reports</span>
                    </div>
                  </a>
                </router-link>
                <ul>
                  <li :class="path == '/dashboard/user-reports' && 'active-nav'">
                    <router-link to="/dashboard/user-reports"
                      ><a>User Reports</a></router-link
                    >
                  </li>
                  <li :class="path == '/dashboard/quote-reports' && 'active-nav'">
                    <router-link to="/dashboard/quote-reports"
                      ><a>Quote Reports</a></router-link
                    >
                  </li>
                  <li :class="path == '/dashboard/order-reports' && 'active-nav'">
                    <router-link to="/dashboard/order-reports"
                      ><a>Order Reports</a></router-link
                    >
                  </li>
                  <li :class="path == '/dashboard/buyer-reports' && 'active-nav'">
                    <router-link to="/dashboard/buyer-reports"
                      ><a>Buyer Reports</a></router-link
                    >
                  </li>
                  <li :class="path == '/dashboard/supplier-reports' && 'active-nav'">
                    <router-link to="/dashboard/supplier-reports"
                      ><a>Supplier Reports</a></router-link
                    >
                  </li>
                </ul>
              </li>
              <!--Settings-->
              <li class="">
                <router-link to="/dashboard/search-result">
                    <a aria-expanded="false">
                        <div class="nav_icon_small">
                            <img src="@/assets/img/menu-icon/dashboard.png">
                        </div>
                        <div class="nav_title">
                            <span :class="path == '/dashboard/search-result' && 'active-nav'">Search Result</span>
                        </div>
                    </a>
                </router-link>
              </li>
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
                    :class="path == '/dashboard/edit-profile-details' && 'active-nav'"
                  >
                    <router-link to="/dashboard/edit-profile-details"
                      ><a>Edit Profile Details</a></router-link
                    >
                  </li>
                  <li :class="path == '/dashboard/change-password' && 'active-nav'">
                    <router-link to="/dashboard/change-password"
                      ><a>Change Password</a></router-link
                    >
                  </li>
                </ul>
              </li>
              <!--Log Out-->
              <li class="">
                <router-link to="#">
                  <a aria-expanded="false">
                    <div class="nav_icon_small">
                      <img src="@/assets/img/menu-icon/logout.png" />
                    </div>
                    <div class="nav_title">
                      <span><a @click.prevent="logOut">Log Out</a></span>
                    </div>
                  </a>
                </router-link>
              </li>
            </ul>
          </nav>
          <!--Search Bar-->
          <div class="serach_field-area d-flex align-items-center">
            <!-- <div class="search_inner">
                            <form action="#">
                                <div class="search_field">
                                    <input type="text" placeholder="Search">
                                </div>
                                <button type="submit"> <img src="@/assets/img/icon/icon_search.svg"> </button>
                            </form>
                        </div> -->
          </div>
          <div
            class="header_right d-flex justify-content-between align-items-center"
          >
            <!--Notification-->
            <div class="header_notification_warp d-flex align-items-center">
              <li>
                <router-link
                  class="bell_notification_clicker"
                  to="/dashboard/all-notifications"
                >
                  <img src="@/assets/img/icon/bell.svg" alt="" />
                  <span :class="notifications && 'ifNotification'">{{
                    notifications
                  }}</span>
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
                      <router-link
                        to="/dashboard/all-notifications"
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
              <img src="@/assets/img/client_img.png" alt="#" />
              Hi, {{ user.firstname }} <i class="bi bi-caret-down"></i>
              <div class="profile_info_iner">
                <div class="profile_author_name">
                  <p style="font-size: 15px;">Admin Account</p>
                  <h5>{{ user.firstname }} {{ user.lastname[0] }}.</h5>
                  <p style="margin-top: -10px;font-size: 12px;font-weight: 500;">Admintrator</p>
                </div>
                <div class="profile_info_details">
                  
                  <router-link to="/admin-dashboard/home">
                    <img src="@/assets/img/menu-icon/dashboard.png" style="border: 0;border-radius: 0;margin-right: 10px;"> Dashboard
                  </router-link>
                  <router-link to="/admin-dashboard/profile" style="margin-left: -22px;"
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
      // console.log(user);
      if (user) {
        // console.log(user);
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
      this.$router.push("/admin/login");
    },
    showMenuDash(){
      this.showMenu = true;
      //console.log(this.showMenu)
    },
    closeSidbarMenu(){
      this.showMenu = false;
    },
    async getAllNotifications() {
      const res = await fetch(
        "https://producemart.herokuapp.com/getAdminNotifications",
        {
          method: "GET",
          headers: {
            Authorization: this.user.token,
          },
        }
      );
      const { data } = await res.json();
      this.notifications = data.filter((prod) => !prod.read).length;

      //   console.log(this.notifications);
    },
  },
  mounted() {
    this.getAllNotifications();
    if (!this.currentUser) {
      this.$router.push("/admin/login");
    }
    window.scrollTo(0, 0);

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
