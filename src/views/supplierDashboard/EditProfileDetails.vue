<template>
  <title>Edit Profile Details - Supplier Dashboard | Produce Mart</title>
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
                      <router-link to="/supplier-dashboard/home"
                        ><a>Dashboard</a></router-link
                      >
                      <i class="fas fa-caret-right"></i>
                      <router-link to="/supplier-dashboard/profile"
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
              <form
                @submit.prevent="handleUpdate"
                enctype="multipart/form-data"
              >
                <div class="col-lg-12">
                  <div class="row text-center">
                    <div class="col-lg-12">
                      <h4>Change Profile Picture</h4>
                      <div class="profile-img-area">
                        <img
                          src="@/assets/img/dashboard-img/default-dp.jpg"
                          v-if="!image"
                        />
                        <img :src="previewImage" v-else-if="previewImage" />
                        <img :src="image" v-else />
                      </div>
                      <label
                        class="custom-file-upload"
                        title="Upload Profile Picture"
                      >
                        <input type="file" accept="image/*" @change="onFileChange" />
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
                      <input type="text" class="input" v-model="firstname" />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <label>Last Name</label>
                    </div>
                    <div class="col-sm-9">
                      <input type="text" class="input" v-model="lastname" />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <label>Phone</label>
                    </div>
                    <div class="col-sm-9">
                      <input type="text" class="input" v-model="phone" />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <label>Company Name</label>
                    </div>
                    <div class="col-sm-9">
                      <input type="text" class="input" v-model="company" />
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
                  <div
                    class="col-lg-12 mb-4 mt-2 text-center signuas"
                    v-show="loading"
                  >
                    <span class="spinner-border spinner-border-sm"></span>
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
import axios from "axios";
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
      user: JSON.parse(localStorage.getItem("user")),
      firstname: JSON.parse(localStorage.getItem("user")).firstname,
      lastname: JSON.parse(localStorage.getItem("user")).lastname,
      phone: JSON.parse(localStorage.getItem("user")).phone_no,
      company: JSON.parse(localStorage.getItem("user")).company_name,
      token: JSON.parse(localStorage.getItem("user")).token,
      image: JSON.parse(localStorage.getItem("user")).img_url,
      loading: false,
      previewImage: '',
    };
  },
  methods: {
    async handleUpdate() {
      this.loading = !this.loading;
      const fd = new FormData();
      fd.append("image", this.image);
      fd.append("firstname", this.firstname);
      fd.append("lastname", this.lastname);
      fd.append("phone_no", this.phone);
      fd.append("company_name", this.company);

      const res = await fetch(
        `https://producemart.herokuapp.com/${this.user._id}/update`,
        {
          method: "PATCH",
          headers: {
            Authorization: this.token,
          },
          body: fd,
        }
      );
      const data = await res.json();
      console.log(data);
      {
        data.data &&
          localStorage.setItem(
            "user",
            JSON.stringify({ ...data.data, token: this.token })
          );
      }
      this.$router.push("/supplier-dashboard/profile");
    },
    onFileChange(e) {
      this.image = e.target.files[0];
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = e =>{
          this.previewImage = e.target.result;
          //console.log(this.previewImage);
      };
    },
  },
};
</script>
