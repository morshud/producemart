<template>
  <!--Side Navbar-->
  <nav class="sidebar dark_sidebar">
    <div class="logo d-flex justify-content-between">
      <router-link class="large_logo" to="/"
        ><img
          src="@/assets/img/dashboard-img/dash-logo.png"
          alt="Produce Mart Logo"
      /></router-link>
      <router-link class="small_logo" to="/"
        ><img
          src="@/assets/img/dashboard-img/mini_logo.png"
          alt="Produce Mart Logo"
      /></router-link>
    </div>
    <ul id="sidebar_menu">
      <!--Dashboard-->
      <li class="">
        <router-link to="/supplier-dashboard/home" class="dashboardMainLink">
          <div class="nav_icon_small">
            <img src="@/assets/img/menu-icon/dashboard.png" />
          </div>
          <div class="nav_title">
            <span>Dashboard</span>
          </div>
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
          <li>
            <router-link to="/supplier-dashboard/mail-box"
              ><a>Mail Box</a></router-link
            >
          </li>
          <li>
            <router-link to="/supplier-dashboard/compose-mail"
              ><a>Compose Mail</a></router-link
            >
          </li>
          <li>
            <router-link to="/supplier-dashboard/sent-mail"
              ><a>Sent Mail</a></router-link
            >
          </li>
          <li>
            <router-link to="/supplier-dashboard/draft-mail"
              ><a>Drafts</a></router-link
            >
          </li>
          <li>
            <router-link to="/supplier-dashboard/trash-mail"
              ><a>Trash</a></router-link
            >
          </li>
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
          <li>
            <router-link to="/supplier-dashboard/open-orders"
              ><a>Open Orders</a></router-link
            >
          </li>
          <li>
            <router-link to="/supplier-dashboard/closed-orders"
              ><a>Closed Orders</a></router-link
            >
          </li>
          <li>
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
          <li>
            <router-link to="/supplier-dashboard/upload-product"
              ><a>Upload Product</a></router-link
            >
          </li>
          <li>
            <router-link to="/supplier-dashboard/published-products"
              ><a>Published Products</a></router-link
            >
          </li>
          <li>
            <router-link to="/supplier-dashboard/pending-products"
              ><a>Pending Products</a></router-link
            >
          </li>
          <li>
            <router-link to="/supplier-dashboard/rejected-products"
              ><a>Rejected Products</a></router-link
            >
          </li>
          <li>
            <router-link to="/supplier-dashboard/disable-products"
              ><a>Unavailable Products</a></router-link
            >
          </li>
          <li>
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
          <li>
            <router-link to="/supplier-dashboard/request-audit"
              ><a>Request Audit</a></router-link
            >
          </li>
        </ul>
      </li>
      <!--Sales Analytics-->
      <li class="">
        <router-link to="/supplier-dashboard/sales-analytics">
          <a aria-expanded="false">
            <div class="nav_icon_small">
              <img src="@/assets/img/menu-icon/sales-analysis.png" />
            </div>
            <div class="nav_title">
              <span>Sales Analytics</span>
            </div>
          </a>
        </router-link>
      </li>
      <!--Settings-->
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
          <li>
            <router-link to="/supplier-dashboard/add-new-address"
              ><a>Add New Address</a></router-link
            >
          </li>
          <li>
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
          <li>
            <router-link to="/supplier-dashboard/edit-profile-details"
              ><a>Edit Profile Details</a></router-link
            >
          </li>
          <li>
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
  <!--Ends(side navbar)-->
</template>
<style scoped src="@/assets/vendors/themefy_icon/themify-icons.css"></style>
<style scoped src="@/assets/vendors/niceselect/css/nice-select.css"></style>
<style scoped src="@/assets/css/style.css"></style>
<style scoped src="@/assets/css/styleSupport.css"></style>
<script>
export default {
  name: "dashboard",
  computed: {
    currentUser() {
      const user = JSON.parse(localStorage.getItem("user"));
      console.log(user);
      if (user) {
        console.log(user);
        return user;
      }
    },
  },
  mounted() {
    // if (!this.currentUser) {
    //     this.$router.push('/login');
    // }

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

  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
};
</script>
