<template>
  <title>Add New Address - Supplier Dashboard | Produce Mart</title>
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
                    <h3>Add New Address</h3>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="dashboard_breadcam text-right">
                    <p>
                      <router-link to="/supplier-dashboard/home"
                        ><a>Dashboard</a></router-link
                      >
                      <i class="fas fa-caret-right"></i> Add New Address
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
                    <h3 class="m-0">Add Address</h3>
                  </div>
                </div>
              </div>
              <div
                class="alert alert-warning alert-dismissible fade show"
                role="alert"
                v-if="message"
              >
                {{ message }}
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
              <div class="white_card_body">
                <form @submit.prevent="addAdress">
                  <div class="row">
                    <div class="col-lg-12 mb-2">
                      <div class="common_input mb_15">
                        <label>Address Title</label>
                        <input
                          type="text"
                          class="input"
                          placeholder="Warehouse, Headquater, farm etc."
                          v-model="address.name"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12 mb-2">
                      <div class="common_input">
                        <label>Street</label>
                        <input
                          cols="30"
                          rows="3"
                          placeholder="19, John green way."
                          v-model="address.street"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12 mb-2">
                      <div class="common_input">
                        <label>City</label>
                        <input
                          cols="30"
                          rows="3"
                          placeholder="New york"
                          v-model="address.city"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12 mb-2">
                      <div class="common_input">
                        <label>State</label>
                        <input
                          cols="30"
                          rows="3"
                          placeholder="Georgia"
                          v-model="address.state"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12 mb-2">
                      <div class="common_input">
                        <label>Country</label>
                        <select class="input" v-model="address.country">
                          <option value="Country" hidden>Select Country</option>
                          <option
                            v-for="(country, i) in countries"
                            :value="country"
                            :key="i"
                          >
                            {{ country }}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="create_report_btn mt_30">
                        <button
                          type="submit"
                          class="btn_1 radius_btn d-block text-center"
                          :disabled="loading"
                        >
                          Add Address
                        </button>
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
import { countries } from "@/assets/countries";
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
      message: "",
      loading: false,
      countries: countries,
      token: JSON.parse(localStorage.getItem("user")).token,
      address: { name: "", street: "", city: "", state: "", country: "" },
    };
  },
  methods: {
    notEmpty() {
      for (let inp in this.address) {
        if (this.address[inp] == "") {
          console.log(inp);
          this.message =
            inp == "name"
              ? "Please fill the title field"
              : `Please fill the ${inp} field`;
          return false;
        }
      }
      return true;
    },
    async addAdress() {
      console.log("Submitting!!!");
      this.loading = true;
      if (this.notEmpty()) {
        const res = await fetch(
          "https://producemart.herokuapp.com/addAddress",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: this.token,
            },
            body: JSON.stringify(this.address),
          }
        );
        const data = await res.json();
        if (data.status) {
          this.loading = false;
          this.$router.push("/supplier-dashboard/View-address");
        } else {
          this.message = data.message
            ? data.message
            : "Unable to add address, try again.";
        }
        console.log(data);
      } else {
        this.loading = false;
      }
    },
  },
};
</script>
