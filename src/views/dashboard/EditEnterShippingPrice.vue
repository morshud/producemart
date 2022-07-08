<template>
  <title>Edit Shipping Price - Super Admin Dashboard | Produce Mart</title>
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
                    <h3>Edit Shipping Price</h3>
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
                      <i class="fas fa-caret-right"></i>Edit Shipping Price
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
                    <h4>Shippers List</h4>
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
                          <th scope="col">Choose Preferred<br />Shipper</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(shipper, i) in shippers" :key="i">
                          <th scope="row">{{ i + 1 }}</th>
                          <td>
                            {{ shipper.firstName }} {{ shipper.lastName }}
                          </td>
                          <td>{{ shipper.email }}</td>
                          <td>
                            <a
                              class="enterPricesBtn"
                              data-bs-toggle="modal"
                              data-bs-target="#shipperModal"
                              @click="
                                name =
                                  shipper.firstName + ' ' + shipper.lastName
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
                                @click="order.shipperId = shipper._id"
                                :checked="order.shipperId == shipper._id"
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
                                name="shipper"
                              />
                              <span class="checkboxSpan"></span>
                            </label>
                          </td>
                        </tr> -->
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="col-lg-12 text-right">
                  <span @click="editShipperPrice" class="backBtn"
                    ><i class="bi bi-arrow-left-short"></i> Update Shipper
                    price</span
                  >
                </div>
                <div
                  class="col-lg-12 mb-4 mt-2 text-center signuas"
                  v-if="loading"
                >
                  <span class="spinner-border spinner-border-sm"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Shipper Modal Input -->
    <div
      class="modal fade"
      id="shipperModal"
      tabindex="-1"
      aria-labelledby="shipperModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="shipperModalLabel">
              Enter Info For {{ name }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body modalShipper">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active tabs-button"
                  id="sendAir-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#sendAir"
                  type="button"
                  role="tab"
                  aria-controls="sendAir"
                  aria-selected="true"
                >
                  Send By Air
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link tabs-button"
                  id="sendSea-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#sendSea"
                  type="button"
                  role="tab"
                  aria-controls="sendSea"
                  aria-selected="false"
                >
                  Send By Sea
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link tabs-button"
                  id="sendLand-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#sendLand"
                  type="button"
                  role="tab"
                  aria-controls="sendLand"
                  aria-selected="false"
                >
                  Send By Land
                </button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="sendAir"
                role="tabpanel"
                aria-labelledby="sendAir-tab"
              >
                <form class="priForm">
                  <div class="row">
                    <div class="col-lg-12 mt-2">
                      <h4>Send By Air</h4>
                    </div>
                    <div class="col-lg-6 mb-2">
                      <label>shipping cost ($)</label>
                      <input
                        type="number"
                        class="input"
                        v-model="order.air_cost"
                      />
                    </div>
                    <div class="col-lg-6 mb-2">
                      <label>initial deposit ($)</label>
                      <input
                        type="number"
                        class="input"
                        v-model="order.air_deposit"
                      />
                    </div>
                    <div class="col-lg-6 mb-2">
                      <label>insurance ($)</label>
                      <input
                        type="number"
                        class="input"
                        v-model="order.air_insurance"
                      />
                    </div>
                    <div class="col-lg-6 mb-2">
                      <label>estimated duration</label>
                      <input
                        type="number"
                        class="input customInput"
                        v-model="order.air_duration"
                      />
                      <select
                        class="custSlt"
                        v-model="order.air_duration_period"
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
              <div
                class="tab-pane fade"
                id="sendSea"
                role="tabpanel"
                aria-labelledby="sendSea-tab"
              >
                <form class="priForm">
                  <div class="row">
                    <div class="col-lg-12 mt-2">
                      <h4>Send By Sea</h4>
                    </div>
                    <div class="col-lg-6 mb-2">
                      <label>shipping cost ($)</label>
                      <input
                        type="number"
                        class="input"
                        v-model="order.sea_cost"
                      />
                    </div>
                    <div class="col-lg-6 mb-2">
                      <label>initial deposit ($)</label>
                      <input
                        type="number"
                        class="input"
                        v-model="order.sea_deposit"
                      />
                    </div>
                    <div class="col-lg-6 mb-2">
                      <label>insurance ($)</label>
                      <input
                        type="number"
                        class="input"
                        v-model="order.sea_insurance"
                      />
                    </div>
                    <div class="col-lg-6 mb-2">
                      <label>estimated duration</label>
                      <input
                        type="number"
                        class="input customInput"
                        v-model="order.sea_duration"
                      />
                      <select
                        class="custSlt"
                        v-model="order.sea_duration_period"
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
              <div
                class="tab-pane fade"
                id="sendLand"
                role="tabpanel"
                aria-labelledby="sendLand-tab"
              >
                <form class="priForm">
                  <div class="row">
                    <div class="col-lg-12 mt-2">
                      <h4>Send By Land</h4>
                    </div>
                    <div class="col-lg-6 mb-2">
                      <label>shipping cost ($)</label>
                      <input
                        type="number"
                        class="input"
                        v-model="order.road_cost"
                      />
                    </div>
                    <div class="col-lg-6 mb-2">
                      <label>initial deposit ($)</label>
                      <input
                        type="number"
                        class="input"
                        v-model="order.road_deposit"
                      />
                    </div>
                    <div class="col-lg-6 mb-2">
                      <label>insurance ($)</label>
                      <input
                        type="number"
                        class="input"
                        v-model="order.road_insurance"
                      />
                    </div>
                    <div class="col-lg-6 mb-2">
                      <label>estimated duration</label>
                      <input
                        type="number"
                        class="input customInput"
                        v-model="order.road_duration"
                      />
                      <select
                        class="custSlt"
                        v-model="order.road_duration_period"
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
            </div>
          </div>
          <div class="modal-footer modalFooter">
            <button type="button" data-bs-dismiss="modal">Save Changes</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Shipper Modal View -->
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
              Details of Taiwo Taiwo Limited
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body modalShipper">
            <div class="summaryTable">
              <h1 class="summaryHead">View Quote</h1>
              <div class="byRoad">
                <p class="summaryHeadSub">by road</p>
                <table>
                  <tr class="bodyRow">
                    <td class="tdMain">Shipping Cost</td>
                    <td class="tdBody">$3000</td>
                  </tr>
                  <tr class="bodyRow">
                    <td class="tdMain">Initial Deposit</td>
                    <td class="tdBody">$2000</td>
                  </tr>
                  <tr class="bodyRow">
                    <td class="tdMain">Insurance</td>
                    <td class="tdBody">$50</td>
                  </tr>
                  <tr class="bodyRow">
                    <td class="tdMain">Estimated Duration</td>
                    <td class="tdBody">3 weeks</td>
                  </tr>
                </table>
              </div>
              <div class="bySea">
                <p class="summaryHeadSub">by sea</p>
                <table>
                  <tr class="bodyRow">
                    <td class="tdMain">Shipping Cost</td>
                    <td class="tdBody">$2000</td>
                  </tr>
                  <tr class="bodyRow">
                    <td class="tdMain">Initial Deposit</td>
                    <td class="tdBody">$1000</td>
                  </tr>
                  <tr class="bodyRow">
                    <td class="tdMain">Insurance</td>
                    <td class="tdBody">$50</td>
                  </tr>
                  <tr class="bodyRow">
                    <td class="tdMain">Estimated Duration</td>
                    <td class="tdBody">10 weeks</td>
                  </tr>
                </table>
              </div>
              <div class="byAir">
                <p class="summaryHeadSub">by air</p>
                <table>
                  <tr class="bodyRow">
                    <td class="tdMain">Shipping Cost</td>
                    <td class="tdBody">$4000</td>
                  </tr>
                  <tr class="bodyRow">
                    <td class="tdMain">Initial Deposit</td>
                    <td class="tdBody">$2500</td>
                  </tr>
                  <tr class="bodyRow">
                    <td class="tdMain">Insurance</td>
                    <td class="tdBody">$50</td>
                  </tr>
                  <tr class="bodyRow">
                    <td class="tdMain">Estimated Duration</td>
                    <td class="tdBody">1 week</td>
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

    let externalScriptCustom = document.createElement("script");
    externalScriptCustom.setAttribute(
      "src",
      "https://cdn.statically.io/gh/NathTimi/Mart-script/main/custom.js"
    );
    document.head.appendChild(externalScriptCustom);
  },
  created() {
    this.getshippers();
    this.getOrder();
  },
  data() {
    return {
      loading: false,
      name: "",
      shipperId: null,
      shippers: null,
      shipperDetails: {},
      id: this.$route.params.id,
      token: JSON.parse(localStorage.getItem("user")).token,
      order: {},
    };
  },
  methods: {
    async getshippers() {
      const res = await fetch(
        "https://producemart.herokuapp.com/getAllShipper",
        {
          headers: {
            Authorization: this.token,
          },
        }
      );
      const { data } = await res.json();
      this.shippers = data;
    },
    async getOrder() {
      const res = await fetch(
        "https://producemart.herokuapp.com/getOrder/" + this.id,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: this.token,
          },
        }
      );
      const { data } = await res.json();

      let road = {
        road_cost: data.shipment_payment.road.shipping_cost.slice(1),
        road_deposit: data.shipment_payment.road.initial_deposit.slice(1),
        road_insurance: data.shipment_payment.road.insurance.slice(1),
        road_duration: data.shipment_payment.road.duration,
        road_duration_period: data.shipment_payment.road.duration_period,
      };
      let sea = {
        sea_cost: data.shipment_payment.sea.shipping_cost.slice(1),
        sea_deposit: data.shipment_payment.sea.initial_deposit.slice(1),
        sea_insurance: data.shipment_payment.sea.insurance.slice(1),
        sea_duration: data.shipment_payment.sea.duration,
        sea_duration_period: data.shipment_payment.sea.duration_period,
      };
      let air = {
        air_cost: data.shipment_payment.air.shipping_cost.slice(1),
        air_deposit: data.shipment_payment.air.initial_deposit.slice(1),
        air_insurance: data.shipment_payment.air.insurance.slice(1),
        air_duration: data.shipment_payment.air.duration,
        air_duration_period: data.shipment_payment.air.duration_period,
      };

      let inspector = {
        inspectorId: data.inspector._id,
        inspection_cost: data.inspection_payment.inspection_cost,
        inspection_duration: data.inspection_payment.duration,
        inspection_duration_period: data.inspection_payment.duration_period,
      };
      this.order = {
        shipperId: data.shipper._id,
        ...road,
        ...sea,
        ...air,
        ...inspector,
      };

      console.log(this.order);
    },
    async editShipperPrice() {
      this.loading = true;
      const res = await fetch(
        "https://producemart.herokuapp.com/updateOrder/" + this.id,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: this.token,
          },
          body: JSON.stringify(this.order),
        }
      );
      this.loading = false;
      if (res.ok) {
        this.$router.push("/dashboard/quotes/" + this.id);
      }
    },
  },
};
</script>
