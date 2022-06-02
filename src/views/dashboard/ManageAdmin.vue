<template>
  <title>Create Admin - Super Admin Dashboard | Produce Mart</title>
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
                    <h3>Create Admin</h3>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="dashboard_breadcam text-right">
                    <p>
                      <router-link to="/dashboard/home"
                        ><a>Dashboard</a></router-link
                      >
                      <i class="fas fa-caret-right"></i> Create Admin
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Mail Sidebar-->
          <div class="col-md-10 white_box addSubAdmin mb-30">
            <div class="row">
              <form @submit.prevent="updateAdmin" v-if="admin">
                <div class="row justify-content-center">
                  <div class="col-lg-12 mb-4 mt-2">
                    <label>Username</label>
                    <input
                      type="text"
                      class="input"
                      placeholder="Enter username"
                      v-model="admin.username"
                    />
                  </div>
                  <div class="col-lg-6 mb-4 mt-2">
                    <label>First Name</label>
                    <input
                      type="text"
                      class="input"
                      placeholder="Enter first name"
                      v-model="admin.firstname"
                    />
                  </div>
                  <div class="col-lg-6 mb-4 mt-2">
                    <label>Last Name</label>
                    <input
                      type="text"
                      class="input"
                      placeholder="Enter last name"
                      v-model="admin.lastname"
                    />
                  </div>
                  <div class="col-lg-6 mb-4">
                    <label>Email Address</label>
                    <input
                      type="email"
                      class="input"
                      placeholder="Enter email address"
                      v-model="admin.email"
                    />
                  </div>
                  <div class="col-lg-6 mb-4">
                    <label>Password</label>
                    <input
                      type="text"
                      class="input"
                      placeholder="Enter password"
                      v-model="password"
                    />
                  </div>
                  <div class="col-lg-12 mb-4">
                    <label>Admin Roles</label>
                    <select class="input" v-model="admin.role">
                      <option hidden>Select Roles</option>
                      <option>Operations Admin</option>
                      <option>Reporting Admin</option>
                      <option>Super Admin</option>
                    </select>
                  </div>
                  <div class="col-lg-6 mb-1">
                    <input
                      type="submit"
                      value="Create Admin"
                      class="createsubadmin"
                    />
                  </div>
                  <div
                    class="col-lg-12 mb-4 mt-2 text-center signuas"
                    v-show="loading"
                  >
                    <span class="spinner-border spinner-border-sm"></span>
                  </div>
                </div>
              </form>
              <div></div>
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
  mounted() {
    window.scrollTo(0, 0);

    let externalScriptCustom = document.createElement("script");
    externalScriptCustom.setAttribute(
      "src",
      "https://cdn.statically.io/gh/NathTimi/Mart-script/main/custom.js"
    );
    document.head.appendChild(externalScriptCustom);
    this.getAdmin();
  },
  data() {
    return {
      token: JSON.parse(localStorage.getItem("user")).token,
      admin: null,
      id: this.$route.params.id,
      loading: false,
    };
  },
  methods: {
    async updateAdmin() {
      this.loading = true;
      this.admin.role = this.admin.role.replace(" ", "").toLowerCase();
      const res = await fetch(
        "https://producemart.herokuapp.com/" + this.id + "/admin-update",
        {
          method: "PATCH",
          headers: {
            Authorization: this.token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.admin),
        }
      );
      const data = await res.json();
      if (data.status == true) {
        this.loading = false;
        this.$router.push("/dashboard/view-admin");
      }
      console.log(data);
    },
    async getAdmin() {
      const res = await fetch(
        "https://producemart.herokuapp.com/getAdminId/" + this.id,
        {
          method: "GET",
          headers: {
            Authorization: this.token,
          },
        }
      );
      const data = await res.json();
      if (data.status == true) {
        this.admin = data.data;
        this.admin.role = this.admin.role
          .replace(this.admin.role[0], this.admin.role[0].toUpperCase())
          .replace("admin", " Admin");
        console.log(this.admin);
      }
    },
  },
};
</script>
