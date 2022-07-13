<template>
<div>
  <title>Change Password - Supplier Dashboard | Produce Mart</title>
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
                    <h3>Change Password</h3>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="dashboard_breadcam text-right">
                    <p>
                      <router-link to="/supplier-dashboard/home"
                        ><a>Dashboard</a></router-link
                      >
                      <i class="fas fa-caret-right"></i> Change Password
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Mail Sidebar-->
          <div class="col-md-9 white_box editProfileDetail">
            <div class="row">
              <div class="alert alert-danger" v-if="msg">
                {{ msg }}
              </div>
              <!-- <span class="text-muted"></span> -->
              <form @submit.prevent="handleChangePassword">
                <div class="row mb-3">
                  <div class="col-sm-3">
                    <label>Current Password</label>
                  </div>
                  <div class="col-sm-9">
                    <input type="password" class="input" v-model="password" />
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-sm-3">
                    <label>New Password</label>
                  </div>
                  <div class="col-sm-9">
                    <input
                      type="password"
                      class="input"
                      v-model="newPassword"
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-sm-3">
                    <label>Re-Enter New Password</label>
                  </div>
                  <div class="col-sm-9">
                    <input
                      type="password"
                      class="input"
                      v-model="confirmPassword"
                    />
                  </div>
                </div>
                <div class="row mb-3 mt-2 justify-content-center">
                  <div class="col-sm-4">
                    <input
                      type="submit"
                      value="Change Password"
                      class="saveChanges"
                    />
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
</div>
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
  mounted() {
    window.scrollTo(0, 0);

    let externalScriptCustom = document.createElement("script");
    externalScriptCustom.setAttribute(
      "src",
      "https://cdn.statically.io/gh/NathTimi/Mart-script/main/custom.js"
    );
    document.head.appendChild(externalScriptCustom);
  },
  data() {
    return {
      password: "",
      newPassword: "",
      confirmPassword: "",
      msg: "",
      token: JSON.parse(localStorage.getItem("user")).token,
    };
  },
  methods: {
    async handleChangePassword() {
      const update = {
        password: this.password,
        new_password: this.newPassword,
        confirm_password: this.confirmPassword,
      };
      console.log(update);
      const res = await fetch(
        "https://producemart.herokuapp.com/change-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: this.token,
          },
          body: JSON.stringify(update),
        }
      );
      const data = await res.json();
      if (data.status) {
        localStorage.removeItem("user");
        this.$router.push("/login");
      } else {
        this.msg = data.message;
      }
    },
  },
};
</script>
