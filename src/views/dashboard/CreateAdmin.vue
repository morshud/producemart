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
              <form @submit.prevent="createAdmin">
                <div class="row justify-content-center">
                  <div class="col-lg-12 mb-4 mt-2">
                    <label>Username</label>
                    <input
                      type="text"
                      class="input"
                      placeholder="Enter username"
                      v-model="username"
                    />
                  </div>
                  <div class="col-lg-6 mb-4 mt-2">
                    <label>First Name</label>
                    <input
                      type="text"
                      class="input"
                      placeholder="Enter first name"
                      v-model="firstname"
                    />
                  </div>
                  <div class="col-lg-6 mb-4 mt-2">
                    <label>Last Name</label>
                    <input
                      type="text"
                      class="input"
                      placeholder="Enter last name"
                      v-model="lastname"
                    />
                  </div>
                  <div class="col-lg-6 mb-4">
                    <label>Email Address</label>
                    <input
                      type="email"
                      class="input"
                      placeholder="Enter email address"
                      v-model="email"
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
                    <select class="input" v-model="role">
                      <option hidden>Select Roles</option>
                      <option>Operating Admin</option>
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

    
  },
  data() {
    return {
      token: JSON.parse(localStorage.getItem("user")).token,
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      role: "",
      loading: false,
      message: "",
    };
  },
  methods: {
    async createAdmin() {
      console.log(this.role.replace(" ", "").toLowerCase());
      this.loading = true;
      let bdy = {
        username: this.username,
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
        role: this.role.replace(" ", "").toLowerCase(),
      };
      console.log(bdy);
      const res = await fetch("https://producemart.herokuapp.com/createAdmin", {
        method: "POST",
        headers: {
          Authorization: this.token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bdy),
      });
      const data = await res.json();
      if (data.status == true) {
        this.loading = false;
        this.$router.push("/dashboard/view-admin");
      } else {
        this.message = data.message;
      }

      console.log(data);
    },
  },
};
</script>
