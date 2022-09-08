<template>
  <title>Add new Mail - Super Admin Dashboard | Produce Mart</title>
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
                    <h3>Add Mail</h3>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="dashboard_breadcam text-right">
                    <p>
                      <router-link to="/dashboard/home"
                        ><a>Dashboard</a></router-link
                      >
                      <i class="fas fa-caret-right"></i> Add new mail
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Main-->
          <div class="col-md-12">
            <div class="white_card card_height_100 mb_30">
              <div class="white_card_header">
                <div class="box_header m-0">
                  <div class="main-title">
                    <h3 class="m-0">Add new Mail</h3>
                  </div>
                </div>
              </div>
              <div class="white_card_body">
                <form @submit.prevent="saveMail">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="common_input mb_15">
                        <label for="type">Select Type of mail</label>
                        <select name="type" id="" v-model="type">
                          <option value="buyer">buyer</option>
                          <option value="supplier">supplier</option>
                          <option value="shipper">shipper</option>
                          <option value="inspector">inspector</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="common_input mb_15">
                        <label for="action"
                          >What action triggers the mail</label
                        >
                        <input
                          v-model="action"
                          type="text"
                          placeholder="Welcomeaction"
                          name="action"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="common_input mb_15">
                        <label for="description"
                          >Breifly decsribe the mail</label
                        >

                        <input
                          v-model="description"
                          type="text"
                          placeholder="Email triggers when user is logged in"
                          name="description"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="common_input mb_15">
                        <label for="content">Mail Content</label>
                        <textarea
                          v-model="content"
                          cols="30"
                          rows="4"
                          placeholder="Address"
                          name="content"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="create_report_btn mt_30">
                        <button
                          type="submit"
                          class="btn_1 radius_btn d-block text-center"
                        >
                          Save mail
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
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
  mounted() {
    window.scrollTo(0, 0);

    
  },

  data() {
    return {
      type: "",
      action: "",
      content: "",
      description: "",
      token: JSON.parse(localStorage.getItem("user")).token,
    };
  },
  methods: {
    async saveMail() {
      const body = {
        type: this.type,
        action: this.action,
        content: this.content,
        description: this.description,
      };
      //console.log(body);
      const res = await fetch(
        "https://producemart.herokuapp.com/createEmail/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: this.token,
          },
          body: JSON.stringify(body),
        }
      );
      const data = await res.json();
      //console.log(data);
      if ((data.status = true)) {
        if (this.type == "supplier") {
          this.$router.push("/dashboard/supplier-email");
        } else if (this.type == "buyer") {
          this.$router.push("/dashboard/buyer-email");
        } else if (this.type == "shipper") {
          this.$router.push("/dashboard/shipper-email");
        } else {
          this.$router.push("/dashboard/inspector-email");
        }
      }
    },
  },
};
</script>
