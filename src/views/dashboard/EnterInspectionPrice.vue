<template>
<div>
  <title>Inspection Price - Super Admin Dashboard | Produce Mart</title>
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
                    <h3>Inspection Price</h3>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="dashboard_breadcam text-right">
                    <p>
                      <router-link to="/dashboard/home"
                        ><a>Dashboard</a></router-link
                      >
                      <i class="fas fa-caret-right"></i>
                      <router-link to="/dashboard/view-quotes"
                        ><a>View Quotes</a></router-link
                      >
                      <i class="fas fa-caret-right"></i> Inspection Price
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Main-->
          <div class="col-md-12">
            <div class="white_card card_height_100 mb_30 pt-4">
              <div class="white_card_body">
                <div class="QA_section">
                  <div class="white_box_tittle list_header">
                    <h4>Inspector List</h4>
                  </div>
                  <div class="QA_table mb_30">
                    <table class="table lms_table_active">
                      <thead>
                        <tr>
                          <th scope="col">S/N</th>
                          <th scope="col">Company Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">Enter Details</th>
                          <th scope="col">View Details</th>
                          <th scope="col">Choose Preferred<br />Inspector</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(inspector, i) in inspectors" :key="i">
                          <th scope="row">{{ i + 1 }}</th>
                          <td>
                            {{ inspector.firstName }} {{ inspector.lastName }}
                          </td>
                          <td>
                            <div v-for="item in inspector.email" :key="item">
                            <span>{{item.email}}</span></div>
                          </td>
                          <td>
                            <a
                              class="enterPricesBtn"
                              data-bs-toggle="modal"
                              data-bs-target="#inspectorModal"
                              @click="
                                name =
                                  inspector.firstName + ' ' + inspector.lastName
                              "
                              >Input Details</a
                            >
                          </td>
                          <td>
                            <a
                              class="viewBoxBtn"
                              data-bs-toggle="modal"
                              data-bs-target="#viewModal"
                              >View</a
                            >
                          </td>
                          <td>
                            <label class="lblCheck">
                              <input
                                class="iptCheck"
                                type="radio"
                                name="shipper"
                                @click="inspectorId = inspector._id"
                              />
                              <span class="checkboxSpan"></span>
                            </label>
                          </td>
                        </tr>
                        <!-- <tr>
                          <th scope="row">2</th>
                          <td>Mat & Nit Dual Logistics Limited</td>
                          <td>mndual@me.com</td>
                          <td><a class="enterPricesBtn">Input Details</a></td>
                          <td><a class="viewBoxBtn">View</a></td>
                          <td>
                            <label class="lblCheck">
                              <input
                                class="iptCheck"
                                type="radio"
                                name="inspector"
                              />
                              <span class="checkboxSpan"></span>
                            </label>
                          </td>
                        </tr> -->
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="col-lg-12 text-right" @click="saveInspector">
                  <router-link :to="'/dashboard/quotes/' + id" class="backBtn"
                    ><i class="bi bi-arrow-left-short"></i> Back to quotes
                    summary</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Inspector Modal Input -->
    <div
      class="modal fade"
      id="inspectorModal"
      tabindex="-1"
      aria-labelledby="inspectorModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="inspectorModalLabel">
              Enter Info For Single Man Operations
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form class="priForm">
              <div class="row">
                <div class="col-lg-6 mb-2">
                  <label>Inspection Cost ($)</label>
                  <input
                    type="number"
                    class="input"
                    v-model="inspectorDetails.inspection_cost"
                  />
                </div>
                <div class="col-lg-6 mb-2">
                  <label>estimated duration</label>
                  <input
                    type="number"
                    class="input customInput"
                    v-model="inspectorDetails.inspection_duration"
                  />
                  <select
                    class="custSlt"
                    v-model="inspectorDetails.inspection_duration_period"
                  >
                    <option value="hours">hours</option>
                    <option value="days">days</option>
                    <option value="weeks">weeks</option>
                    <option value="months">months</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer modalFooter">
            <button type="button" data-bs-dismiss="modal">Save Changes</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Inspector Modal View -->
    <div
      class="modal fade"
      id="viewModal"
      tabindex="-1"
      aria-labelledby="viewModalLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="viewModalLabel">
              Details of Single Man Operations
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="summaryTable">
              <h1 class="summaryHead">View Quote</h1>
              <div class="byRoad">
                <p class="summaryHeadSub">Inpection</p>
                <table>
                  <tr class="bodyRow">
                    <td class="tdMain">Inspection Cost</td>
                    <td class="tdBody">$3000</td>
                  </tr>
                  <tr class="bodyRow">
                    <td class="tdMain">Estimated Duration</td>
                    <td class="tdBody">3 weeks</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div class="modal-footer modalFooter">
            <button type="button" data-bs-dismiss="modal">Ok</button>
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
<style scoped src="@/assets/css/styleSupport.css"></style>
<style scoped src="@/assets/css/slider.css"></style>
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
  created() {
    this.getinspectors();
  },
  data() {
    return {
      name: "",
      inspectorId: null,
      inspectors: null,
      inspectorDetails: {},
      id: this.$route.params.id,
      token: JSON.parse(localStorage.getItem("user")).token,
    };
  },
  methods: {
    async getinspectors() {
      const res = await fetch(
        "https://producemart.herokuapp.com/getAllInspector",
        {
          headers: {
            Authorization: this.token,
          },
        }
      );
      const { data } = await res.json();
      this.inspectors = data;
    },
    saveInspector() {
      this.inspectorDetails.inspectorId = this.inspectorId;
      let orderDetails = JSON.parse(localStorage.getItem("orderDetails"));
      let names = JSON.parse(localStorage.getItem("names"));
      if (orderDetails) {
        orderDetails = { ...orderDetails, ...this.inspectorDetails };
        names = { ...names, inspector: this.name };
      } else {
        orderDetails = { ...this.inspectorDetails };
        names = { inspector: this.name };
      }
      localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
      localStorage.setItem("names", JSON.stringify(names));
    },
  },
};
</script>
