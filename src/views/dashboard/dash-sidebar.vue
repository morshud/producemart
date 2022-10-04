<template>
  <!--Side Navbar-->
  <nav class="sidebar dark_sidebar">
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
              <img src="@/assets/img/menu-icon/email.png" />
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
                    <img src="@/assets/img/menu-icon/search.png">
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
  <!--Ends(side navbar)-->
</template>
<style scoped src="@/assets/vendors/themefy_icon/themify-icons.css"></style>
<style scoped src="@/assets/vendors/niceselect/css/nice-select.css"></style>
<style scoped src="@/assets/css/style.css"></style>
<script>
export default {
  name: "dashboard",
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")),
      path: this.$route.path,
    };
  },

  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/admin/login");
    },
  },
  mounted() {
    if (!this.user) {
      this.$router.push("/admin/login");
    }
    // console.log("alaye", this.user);
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
