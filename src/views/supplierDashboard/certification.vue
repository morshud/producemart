<template>
  <div>
    <title>Certification - Supplier Dashboard | Produce Mart</title>
    <dash-sidebar />
    <section class="main_content dashboard_part large_header_bg">
      <dash-navbar />
      <!--Main Content-->
      <div class="main_content_iner">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <!--Breadcrumb-->
            <div class="col-12">
              <div class="dashboard_header mb_50">
                <div class="row">
                  <div class="col-lg-8">
                    <div class="dashboard_header_title">
                      <h3>Certification</h3>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="dashboard_breadcam text-right">
                      <p>
                        <router-link to="/supplier-dashboard/home"
                          ><a>Dashboard</a>
                        </router-link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--Mail Sidebar-->
            <div class="col-md-12 white_box editProfileDetail">
              <div class="row d-flex">
                <div class="text-center">
                    <div class="title">
                        <h5 class="fw-bold">Do you have any audit and food safety certificates ?</h5>
                    </div>
                    <div class="d-flex justify-content-center my-4">
                        <div class="form-group mx-4">
                            <input type="radio" v-model="audit" value="yes" name="chek" id=""> 
                            <label for=""  class="mx-2">Yes, I have</label>
                        </div>
                        <div class="form-group mx-4">
                            <input type="radio" v-model="audit" value="no" class="" name="chek" id=""> 
                            <label for="" class="mx-2">No, I want one</label>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center">
                      <button type="button" @click="cancleAudit" style="width: 15%;font-size: 13px;font-weight: bold;" class="btn btn-outline-dark mx-3">Cancel</button>
                      <button :disabled='isDisabled' class="btn btn-dark mx-3" @click="proceedAudit" style="width: 15%;font-size: 13px;font-weight: bold; background: #000;">Proceed</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
  data() {
    return {
      audit: '',
    }
  },
  computed:{
    isDisabled(){
      if (this.audit == '') {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    proceedAudit(){
      if (this.audit == 'yes') {
        this.$router.push('/supplier-dashboard/uploadCertificate')
      }
      if (this.audit == 'no') {
        this.$router.push('/supplier-dashboard/request-audit')
      }
    }
  },
}
</script>
