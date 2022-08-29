<template>
  <title>My Profile - Supplier Dashboard | Produce Mart</title>
  <dash-sidebar />

  <section class="main_content dashboard_part large_header_bg">
    <dash-navbar />
    <!--Main Content-->
    <div class="main_content_iner">
      <div class="container-fluid p-0">
        <div class="row justify-content-center">
          <!--Breadcrumb-->
          <div class="col-12">
            <div class="dashboard_header mb_50">
              <div class="row">
                <div class="col-lg-8">
                  <div class="dashboard_header_title">
                    <h3>My Profile</h3>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="dashboard_breadcam text-right">
                    <p>
                      <router-link to="/supplier-dashboard/home"
                        ><a>Dashboard</a></router-link
                      >
                      <i class="fas fa-caret-right"></i> Profile
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Main-->
          <div class="col-md-10 white_box myProfile">
            <div class="row">
              <div class="card custom-card">
                <div class="card-profile">
                  <img
                    class="rounded-circle"
                    src="@/assets/img/dashboard-img/default-dp.jpg"
                    v-if="!user.img_url"
                  />
                  <img class="rounded-circle" :src="user.img_url" v-else />
                </div>
                <div class="text-center profile-details">
                  <h4>{{ user.firstname }} {{ user.lastname }}</h4>
                  <h6>{{ user.role }}</h6>
                  <h6>{{ user.email }}</h6>
                  <h6>{{ user.phone_no }}</h6>
                </div>
                <div class="card-footer row mt-3">
                  <div class="col-4 col-sm-4">
                    <h6>Buyers</h6>
                    <h3>350</h3>
                  </div>
                  <div class="col-4 col-sm-4">
                    <h6>Sales</h6>
                    <h3>1,000</h3>
                  </div>
                  <div class="col-4 col-sm-4">
                    <h6>Products</h6>
                    <h3>100</h3>
                  </div>
                </div>
              </div>

              <div class="col-sm-12 mt-4">
                <router-link
                  class="route-link"
                  to="/supplier-dashboard/edit-profile-details"
                  >Edit Profile Details</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <dash-footer />
  </section>
</template>
<style scoped src="@/assets/vendors/themefy_icon/themify-icons.css"></style>
<style scoped src="@/assets/vendors/niceselect/css/nice-select.css"></style>
<style scoped src="@/assets/css/style.css"></style>
<script>
import DashSidebar from "./dash-sidebar.vue";
import DashNavbar from "./dash-navbar.vue";
import DashFooter from "./dash-footer.vue";
export default {
  name: "Produce Mart",
  components: {
    "dash-sidebar": DashSidebar,
    "dash-navbar": DashNavbar,
    "dash-footer": DashFooter,
  },
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")),
    };
  },
  mounted() {
    window.scrollTo(0, 0);

    
  },
};
</script>
