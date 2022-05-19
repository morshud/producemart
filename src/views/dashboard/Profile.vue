<template>
    <title>My Profile - Super Admin Dashboard | Produce Mart</title>
    <dash-sidebar/>

    <section class="main_content dashboard_part large_header_bg">
        <dash-navbar/>
        <!--Main Content-->
        <div class="main_content_iner ">
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
                                            <router-link to="/dashboard/home"><a>Dashboard</a></router-link> <i class="fas fa-caret-right"></i> Profile
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
                                <div class="card-profile"><img class="rounded-circle" src="@/assets/img/dashboard-img/default-dp.jpg" data-original-title="" title=""></div>
                                <div class="text-center profile-details">
                                    <h4>{{content.firstname}}</h4>
                                    <h6>{{content.username}}</h6>
                                    <h6>{{content.email}}</h6>
                                    <h6>{{content.phone_no}}</h6>
                                    <h6>{{content.company_name}}</h6>
                                </div>
                                <div class="card-footer row mt-3">
                                    <div class="col-4 col-sm-4">
                                        <h6>Buyers</h6>
                                        <h3>35,000</h3>
                                    </div>
                                    <div class="col-4 col-sm-4">
                                        <h6>Suppliers</h6>
                                        <h3>40,000</h3>
                                    </div>
                                    <div class="col-4 col-sm-4">
                                        <h6>Inspectors</h6>
                                        <h3>25,000</h3>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-12 mt-4">
                                <router-link class="route-link" to="/dashboard/edit-profile-details">Edit Profile Details</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <dash-footer/>
    </section>
</template>
<style scoped src="@/assets/vendors/themefy_icon/themify-icons.css"></style>
<style scoped src="@/assets/vendors/niceselect/css/nice-select.css"></style>
<style scoped src="@/assets/css/style.css"></style>
<script>
    import DashSidebar from './dash-sidebar.vue'
    import DashNavbar from './dash-navbar.vue'
    import DashFooter from './dash-footer.vue'
    export default {
      name: "Produce Mart",
      components:{
      'dash-sidebar': DashSidebar,
      'dash-navbar': DashNavbar,
      'dash-footer': DashFooter,
      },
       data() {
    return {
      content: '',
      message: '',
      successful: false,
      loading: false,
       profile: {
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        accountname: '',
        accountnumber: '',
        bankname: '',
        about: '',

      },
      password: {
        oldPassword: '',
        newPassword: '',
        confirmpassword: '',
      }
    };
  },

  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },

  created() {

     if (!this.loggedIn) {
      this.$router.push('');
    }

    ProfileService.getProfile().then(
      response => {
        this.content = response.data.profile;
        this.profile = this.content;
      },
      error => {
        this.message =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
        this.successful = false;
      }
    );
  },
  methods: { 
      format_date(value){
         if (value) {
           return moment(String(value)).format('MM/DD/YYYY hh:mm')
          }
      },

      editProfile(){
        this.loading = true;
        ProfileService.editProfile(this.profile).then(
          response => {
            this.message = response.data.message;
            this.successful = true;
            this.loading = false;

},
          error => {
            this.message =
              (error.response && error.response.data && error.response.data.message) ||
              /* error.messag */error.response.data.errors[0].message|| "something went wrong please try again";
              error.toString();
            this.successful = false;
            this.loading = false;
          }
        );
      },

      changePassword(){
        this.loading = true;
        ProfileService.changePassword(this.password).then(
          response => {
            this.message = response.data.message;
            this.successful = true;
            this.loading = false;
          },
          error => {
            this.message =
              (error.response && error.response.data && error.response.data.message) ||
              /* error.messag */error.response.data.errors[0].message|| "something went wrong please try again";
              error.toString();
            this.successful = false;
            this.loading = false;
          }
        );
      }
   },
      mounted(){
        window.scrollTo(0,0)

        let externalScriptCustom = document.createElement('script')
        externalScriptCustom.setAttribute('src', 'https://cdn.statically.io/gh/NathTimi/Mart-script/main/custom.js')
        document.head.appendChild(externalScriptCustom)
      }
    }
</script>