<template>
  <title>Edit Profile Details - Super Admin Dashboard | Produce Mart</title>
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
                    <h3>Edit Profile Details</h3>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="dashboard_breadcam text-right">
                    <p>
                      <router-link to="/dashboard/home"
                        ><a>Dashboard</a></router-link
                      >
                      <i class="fas fa-caret-right"></i>
                      <router-link to="/dashboard/profile"
                        ><a>Profile</a></router-link
                      >
                      <i class="fas fa-caret-right"></i> Edit Profile Details
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Main-->
          <div class="col-md-9 white_box editProfileDetail">
            <div class="row">
              <form @submit.prevent="editProfile">
                <div
                  v-if="message"
                  :class="successful ? 'alert-success' : 'alert-danger'"
                  class="alert alert-dismissible fade show"
                  role="alert"
                >
                  {{ message }}
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="col-lg-12">
                  <div class="row text-center">
                    <div class="col-lg-12">
                      <h4>Change Profile Picture</h4>
                      <div class="profile-img-area">
                        <img src="@/assets/img/dashboard-img/default-dp.jpg" />
                      </div>
                      <label
                        class="custom-file-upload"
                        title="Upload Profile Picture"
                      >
                        <input type="file" />
                        <i class="bi bi-upload"></i>
                      </label>
                      <button class="deleteProfilePic" type="submit">
                        <i class="bi bi-trash3-fill"></i> Delete Picture
                      </button>
                    </div>
                  </div>
                  <div class="row mb-3 mt-4">
                    <div class="col-sm-3">
                      <label>First Name</label>
                    </div>
                    <div class="col-sm-9">
                      <input name="firstname" type="text" class="input" />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <label>Last Name</label>
                    </div>
                    <div class="col-sm-9">
                      <input name="lastname" type="text" class="input" />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <label>Phone</label>
                    </div>
                    <div class="col-sm-9">
                      <input name="phone_no" type="text" class="input" />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <label>Email</label>
                    </div>
                    <div class="col-sm-9">
                      <input name="email" type="text" class="input" />
                    </div>
                  </div>

                  <div class="row mb-3 mt-2 justify-content-center">
                    <div class="col-sm-4">
                      <input
                        type="submit"
                        value="Save Changes"
                        class="saveChanges"
                      />
                    </div>
                  </div>
                </div>
              </form>
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
      message: "",
      successful: false,
      loading: false,
    };
  },

  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },

  methods: {},
  mounted() {
    window.scrollTo(0, 0);

    
  },
};
</script>
