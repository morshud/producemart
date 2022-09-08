<template>
  <title>Edit Buyer Mail - Super Admin Dashboard | Produce Mart</title>
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
                    <h3>Edit Mail</h3>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="dashboard_breadcam text-right">
                    <p>
                      <router-link to="/dashboard/home"
                        ><a>Dashboard</a></router-link
                      >
                      <i class="fas fa-caret-right"></i> Edit Buyer mail
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
                    <h3 class="m-0">Edit Buyer Mail</h3>
                  </div>
                </div>
              </div>
              <div class="white_card_body">
                <form @submit.prevent="updateBuyerMail" v-if="mail">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="common_input mb_15">
                        <input
                          v-model="mail.action"
                          type="text"
                          placeholder="Company Name"
                          disabled
                        />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="common_input mb_15">
                        <textarea
                          v-model="mail.content"
                          cols="30"
                          rows="4"
                          placeholder="Address"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="create_report_btn mt_30">
                        <button
                          type="submit"
                          class="btn_1 radius_btn d-block text-center"
                        >
                          Update Buyer mail
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

    
    this.getMail();
  },

  data() {
    return {
      id: this.$route.params.id,
      mail: null,
      token: JSON.parse(localStorage.getItem("user")).token,
    };
  },
  methods: {
    async getMail() {
      this.mail = null;

      const res = await fetch(
        "https://producemart.herokuapp.com/getEmailById/" + this.id,
        {
          headers: {
            Authorization: this.token,
          },
        }
      );
      const { data } = await res.json();
      this.mail = data;
      //console.log(this.mail);
    },
    async updateBuyerMail() {
      const body = {
        action: this.mail.action,
        content: this.mail.content,
      };
      //console.log(body);
      const res = await fetch(
        "https://producemart.herokuapp.com/updateEmail/" + this.id,
        {
          method: "PUT",
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
        this.$router.push("/dashboard/buyer-email");
      }
    },
  },
};
</script>
