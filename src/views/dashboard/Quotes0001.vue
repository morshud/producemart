<template>
  <title>Quotes - Super Admin Dashboard | Produce Mart</title>
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
                    <h3>View Quotes</h3>
                    <span
                      ><strong>{{ product.name }}</strong></span
                    >
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
                      <i class="fas fa-caret-right"></i> Quotes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Main-->
          <div class="col-md-12">
            <div class="row">
              <div class="col-12 QA_section mb-4">
                <!-- <div class="fileDownloadOption mb-3">
                                    <button type="button" title="Download as CSV file">CSV</button>
                                    <button type="button" title="Download as PDF file">PDF</button>
                                </div> -->
                <div class="card QA_table">
                  <div class="card-header">
                    #{{ quote._id }} - Quotation From Supplier
                    <strong>{{ supplier.firstname }}</strong>
                  </div>
                  <div class="card-body">
                    <div class="row mb-4">
                      <div class="col-sm-6">
                        <h6 class="mb-3">From:</h6>
                        <div>
                          <strong
                            >Supplier:
                            <a href="#"
                              >{{ supplier.firstname }}
                              {{ supplier.lastname }}</a
                            ></strong
                          >
                        </div>
                        <div>
                          Email: <a>{{ supplier.email }}</a>
                        </div>
                        <div>Phone: {{ supplier.phone_no }}</div>
                      </div>
                      <div class="col-sm-6">
                        <h6 class="mb-3">TO:</h6>
                        <div>
                          <strong
                            >Buyer:
                            <a href="#"
                              >{{ buyer.firstname }} {{ buyer.lastname }}</a
                            ></strong
                          >
                        </div>
                        <!-- <div>Nigeria</div>
                                                <div>Street Address, Lagos.</div> -->
                        <div>
                          Email: <a>{{ buyer.email }}</a>
                        </div>
                        <div>Phone: {{ buyer.phone_no }}</div>
                      </div>
                    </div>
                    <div class="table-responsive-sm">
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th class="center">#</th>
                            <th class="center">Quote ID</th>
                            <th class="center">Product Name</th>
                            <th class="center">Product Variety</th>
                            <th class="center">
                              Quantity <br />
                              Ordered
                            </th>
                            <th class="right">Price of Product ($)</th>
                            <th class="right">Total ($)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="center">#</td>
                            <td class="left strong">#{{ quote._id }}</td>
                            <td class="left strong">{{ product.name }}</td>
                            <td class="right">{{ product.variety }}</td>
                            <td class="center">
                              {{ quote.quantity }}{{ product.order?.qty_unit }}
                            </td>
                            <td class="right">
                              {{ product && product.package?.price }}
                            </td>
                            <td class="right">
                              ${{
                                product &&
                                quote.quantity * product.package?.price.slice(1)
                              }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div class="row faq-section mt-3">
                      <div class="col-lg-12">
                        <div class="faq-box">
                          <details>
                            <summary>Show More Details</summary>
                            <div class="faq-content">
                              <!-- Order -->
                              <div class="summaryTable">
                                <h1 class="summaryHead">Order</h1>
                                <table>
                                  <tr class="bodyRow">
                                    <td class="tdMain">Quantity</td>
                                    <td class="tdBody">
                                      {{ quote.quantity }}
                                      {{ product && product.package?.unit }}
                                    </td>
                                  </tr>
                                  <tr class="bodyRow">
                                    <td class="tdMain">Dated on</td>
                                    <td class="tdBody">
                                      {{
                                        new Date().toISOString().slice(0, 10)
                                      }}
                                    </td>
                                  </tr>
                                  <tr class="bodyRow">
                                    <td class="tdMain">Time</td>
                                    <td class="tdBody">
                                      {{ new Date().toLocaleTimeString() }}
                                    </td>
                                  </tr>
                                  <tr class="bodyRow">
                                    <td class="tdMain">Estimated Cost</td>
                                    <td class="tdBody">
                                      ${{
                                        product &&
                                        quote.quantity *
                                          product.package?.price.slice(1)
                                      }}
                                    </td>
                                  </tr>
                                  <tr class="bodyRow">
                                    <td class="tdMain">Estimated Weight</td>
                                    <td class="tdBody">200kg</td>
                                  </tr>
                                </table>
                              </div>
                              <!-- Destination -->
                              <div class="summaryTable">
                                <h1 class="summaryHead">Destination</h1>
                                <div
                                  class="byRoad"
                                  v-if="destination.road?.country"
                                >
                                  <p class="summaryHeadSub">by road</p>
                                  <table>
                                    <tr class="bodyRow">
                                      <td class="tdMain">Address 1</td>
                                      <td class="tdBody">
                                        {{ destination.road?.address }}
                                      </td>
                                    </tr>
                                    <tr class="bodyRow">
                                      <td class="tdMain">Address 2</td>
                                      <td class="tdBody">
                                        {{ destination.road?.roadAdd2 }}
                                      </td>
                                    </tr>
                                    <tr class="bodyRow">
                                      <td class="tdMain">City</td>
                                      <td class="tdBody">
                                        {{ destination.road?.city }}
                                      </td>
                                    </tr>
                                    <tr class="bodyRow">
                                      <td class="tdMain">State/Province</td>
                                      <td class="tdBody">
                                        {{ destination.road?.state }}
                                      </td>
                                    </tr>
                                    <tr class="bodyRow">
                                      <td class="tdMain">Country</td>
                                      <td class="tdBody">
                                        {{ destination.road?.country }}
                                      </td>
                                    </tr>
                                    <tr class="bodyRow">
                                      <td class="tdMain">Postal Code</td>
                                      <td class="tdBody">
                                        {{ destination.road?.postal_code }}
                                      </td>
                                    </tr>
                                    <tr class="bodyRow">
                                      <td class="tdMain">Incoterm</td>
                                      <td class="tdBody">
                                        {{ destination.road?.incoterm }}
                                      </td>
                                    </tr>
                                  </table>
                                </div>
                                <div
                                  class="bySea"
                                  v-if="destination.sea?.country"
                                >
                                  <p class="summaryHeadSub">by sea</p>
                                  <table>
                                    <tr class="bodyRow">
                                      <td class="tdMain">SeaPort</td>
                                      <td class="tdBody">
                                        {{ destination.sea?.port }}
                                      </td>
                                    </tr>
                                    <tr class="bodyRow">
                                      <td class="tdMain">Country</td>
                                      <td class="tdBody">
                                        {{ destination.sea?.country }}
                                      </td>
                                    </tr>
                                    <tr class="bodyRow">
                                      <td class="tdMain">Incoterm</td>
                                      <td class="tdBody">
                                        {{ destination.sea?.incoterm }}
                                      </td>
                                    </tr>
                                  </table>
                                </div>
                                <div
                                  class="byAir"
                                  v-if="destination.air?.country"
                                >
                                  <p class="summaryHeadSub">by air</p>
                                  <table>
                                    <tr class="bodyRow">
                                      <td class="tdMain">AirPort</td>
                                      <td class="tdBody">
                                        {{ destination.air?.port }}
                                      </td>
                                    </tr>
                                    <tr class="bodyRow">
                                      <td class="tdMain">Country</td>
                                      <td class="tdBody">
                                        {{ destination.air?.country }}
                                      </td>
                                    </tr>
                                    <tr class="bodyRow">
                                      <td class="tdMain">Incoterm</td>
                                      <td class="tdBody">
                                        {{ destination.air?.incoterm }}
                                      </td>
                                    </tr>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </details>
                        </div>
                      </div>
                    </div>

                    <div class="row justify-content-end">
                      <div class="col-lg-6 ml-auto QA_section">
                        <table class="table table-clear QA_table tableBox">
                          <tbody>
                            <tr>
                              <td class="left">
                                <strong>Total Weight</strong>
                              </td>
                              <td class="right">
                                {{ quote.quantity * product.package?.weight }}
                                {{ product.package?.unit }}
                              </td>
                            </tr>
                            <tr>
                              <td class="left">
                                <strong>Shipping Price ($)</strong>
                              </td>
                              <td class="right">80</td>
                            </tr>
                            <tr>
                              <td class="left">
                                <strong>Total Price ($)</strong>
                              </td>
                              <td class="right">420</td>
                            </tr>
                            <tr>
                              <td class="left">
                                <strong>Overall Cost ($)</strong>
                              </td>
                              <td class="right">
                                <strong>500</strong>
                              </td>
                            </tr>
                            <tr>
                              <td class="left">
                                <strong>Status</strong>
                              </td>
                              <td class="right">
                                <strong
                                  ><a href="#" class="status_btn"
                                    >Active</a
                                  ></strong
                                >
                              </td>
                            </tr>
                            <tr>
                              <td class="left">
                                <strong>Shipping Price</strong>
                              </td>
                              <td class="right">
                                <router-link
                                  :to="'/dashboard/shipping-price/' + quote._id"
                                  class="enterPricesBtn"
                                  >Enter Price</router-link
                                >
                              </td>
                            </tr>
                            <tr>
                              <td class="left">
                                <strong>Inspection Price</strong>
                              </td>
                              <td class="right">
                                <router-link
                                  :to="
                                    '/dashboard/inspection-price/' + quote._id
                                  "
                                  class="enterPricesBtn"
                                  >Enter Price</router-link
                                >
                              </td>
                            </tr>
                            <tr>
                              <td class="left">
                                <strong>Action</strong>
                              </td>
                              <td class="right">
                                <button
                                  class="enterPricesBtn"
                                  @click="saveQuote"
                                  v-if="!loading"
                                >
                                  save
                                </button>
                                <div
                                  class="col-lg-12 mb-4 mt-2 text-center signuas"
                                  v-else
                                >
                                  <span
                                    class="spinner-border spinner-border-sm"
                                  ></span>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div class="row" v-if="order">
                      <div class="col-lg-12 mt-2 mb-2">
                        <h4>Selected Shipper and Inspector</h4>
                      </div>
                      <div class="table-responsive-sm">
                        <table class="table">
                          <thead>
                            <tr>
                              <th class="center">Shipper</th>
                              <th class="center">Inspector</th>
                              <th class="center">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="center">
                                {{ order?.shipper?.firstName }}
                                {{ order?.shipper.lastName }}
                              </td>
                              <td class="center">
                                {{ order?.inspector?.firstName }}
                                {{ order?.inspector?.lastName }}
                              </td>
                              <td class="center">
                                <button
                                  class="sendToSupplier"
                                  data-bs-toggle="modal"
                                  data-bs-target="#detailsModal"
                                >
                                  Preview Details
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 text-right">
                <router-link to="/dashboard/view-quotes" class="backBtn"
                  ><i class="bi bi-arrow-left-short"></i> Back to all
                  quotes</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Preview Details Modal -->
    <div
      class="modal fade"
      id="detailsModal"
      tabindex="-1"
      aria-labelledby="detailsModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="detailsModalLabel">Preview Details</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="summaryTable">
              <h1 class="summaryHead">{{ order?.shipper?.companyName }}</h1>
              <div
                class="byRoad"
                v-if="order?.shipment_payment?.road?.road_cost"
              >
                <p class="summaryHeadSub">by road</p>
                <table>
                  <tr class="bodyRow">
                    <td class="tdMain">Shipping Cost</td>
                    <td class="tdBody">
                      ${{
                        order?.shipment_payment &&
                        order?.shipment_payment?.road?.road_cost
                      }}
                    </td>
                  </tr>
                  <tr class="bodyRow">
                    <td class="tdMain">Initial Deposit</td>
                    <td class="tdBody">
                      ${{
                        order?.shipment_payment &&
                        order?.shipment_payment?.road?.road_deposit
                      }}
                    </td>
                  </tr>
                  <tr class="bodyRow">
                    <td class="tdMain">Insurance</td>
                    <td class="tdBody">
                      ${{
                        order?.shipment_payment &&
                        order?.shipment_payment?.road?.road_insurance
                      }}
                    </td>
                  </tr>
                  <tr class="bodyRow">
                    <td class="tdMain">Estimated Duration</td>
                    <td class="tdBody">
                      {{
                        order?.shipment_payment &&
                        order?.shipment_payment?.road?.road_duration
                      }}
                      {{
                        order?.shipment_payment &&
                        order?.shipment_payment?.road?.road_duration_period
                      }}
                    </td>
                  </tr>
                </table>
              </div>
              <div class="bySea" v-if="order?.shipment_payment?.sea?.sea_cost">
                <p class="summaryHeadSub">by sea</p>
                <table>
                  <tr class="bodyRow">
                    <td class="tdMain">Shipping Cost</td>
                    <td class="tdBody">
                      ${{
                        order?.shipment_payment &&
                        order?.shipment_payment?.sea?.sea_cost
                      }}
                    </td>
                  </tr>
                  <tr class="bodyRow">
                    <td class="tdMain">Initial Deposit</td>
                    <td class="tdBody">
                      ${{
                        order?.shipment_payment &&
                        order?.shipment_payment?.sea?.sea_deposit
                      }}
                    </td>
                  </tr>
                  <tr class="bodyRow">
                    <td class="tdMain">Insurance</td>
                    <td class="tdBody">
                      ${{
                        order?.shipment_payment &&
                        order?.shipment_payment?.sea?.sea_insurance
                      }}
                    </td>
                  </tr>
                  <tr class="bodyRow">
                    <td class="tdMain">Estimated Duration</td>
                    <td class="tdBody">
                      {{
                        order?.shipment_payment &&
                        order?.shipment_payment?.sea?.sea_duration
                      }}
                      {{
                        order?.shipment_payment &&
                        order?.shipment_payment?.sea?.sea_duration_period
                      }}
                    </td>
                  </tr>
                </table>
              </div>
              <div class="byAir" v-if="order?.shipment_payment?.air?.air_cost">
                <p class="summaryHeadSub">by air</p>
                <table>
                  <tr class="bodyRow">
                    <td class="tdMain">Shipping Cost</td>
                    <td class="tdBody">
                      ${{
                        order?.shipment_payment &&
                        order?.shipment_payment?.air?.air_cost
                      }}
                    </td>
                  </tr>
                  <tr class="bodyRow">
                    <td class="tdMain">Initial Deposit</td>
                    <td class="tdBody">
                      ${{
                        order?.shipment_payment &&
                        order?.shipment_payment?.air?.air_deposit
                      }}
                    </td>
                  </tr>
                  <tr class="bodyRow">
                    <td class="tdMain">Insurance</td>
                    <td class="tdBody">
                      ${{
                        order?.shipment_payment &&
                        order?.shipment_payment?.air?.air_insurance
                      }}
                    </td>
                  </tr>
                  <tr class="bodyRow">
                    <td class="tdMain">Estimated Duration</td>
                    <td class="tdBody">
                      {{
                        order?.shipment_payment &&
                        order?.shipment_payment?.air?.air_duration
                      }}
                      {{
                        order?.shipment_payment &&
                        order?.shipment_payment?.air?.air_duration_period
                      }}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="summaryTable">
              <h1 class="summaryHead">
                {{ order?.inspector && order?.inspector?.companyName }}
              </h1>
              <div class="byRoad">
                <p class="summaryHeadSub">Inpection</p>
                <table>
                  <tr class="bodyRow">
                    <td class="tdMain">Inspection Cost</td>
                    <td class="tdBody">
                      {{
                        order?.inspection_payment &&
                        order?.inspection_payment?.inspection_cost
                      }}
                    </td>
                  </tr>
                  <tr class="bodyRow">
                    <td class="tdMain">Estimated Duration</td>
                    <td class="tdBody">
                      {{
                        order?.inspection_payment &&
                        order?.inspection_payment?.inspection_duration
                      }}
                      {{
                        order?.inspection_payment &&
                        order?.inspection_payment?.inspection_duration_period
                      }}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div class="modal-footer modalFooter">
            <button type="button" @click="sendToUser('supplier')">
              Send to Supplier
            </button>
            <button type="button" @click="sendToUser('buyer')">
              Send to Buyer
            </button>
          </div>
          <div class="col-lg-12 mb-4 mt-2 text-center signuas" v-if="loading">
            <span class="spinner-border spinner-border-sm"></span>
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
import QUOTE from "../../service/quote-service";
import Swal from "sweetalert2";
export default {
  name: "Produce Mart",
  components: {
    "dash-sidebar": DashSidebar,
    "dash-navbar": DashNavbar,
    "dash-footer": DashFooter,
  },
  data() {
    return {
      quoteId: this.$route.params.id,
      loading: false,
      order: null,
      buyer: {},
      destination: {},
      supplier: {},
      product: {},
      quote: "",
      orderDetails: null,
      names: null,
      token: JSON.parse(localStorage.getItem("user")).token,
    };
  },
  created() {
    this.getSingleQuote();
    this.getOrder();
    setTimeout(() => {
      this.names = JSON.parse(localStorage.getItem("names"));
      this.orderDetails = JSON.parse(localStorage.getItem("orderDetails"));
    }, 3000);
  },
  methods: {
    getSingleQuote() {
      QUOTE.getSingleQuote(this.quoteId).then((res) => {
        let result = res.data.data;
        this.product = result.product;
        this.supplier = result.supplier;
        this.buyer = result.buyer;
        this.destination = result.destination;
        this.quote = result;
        console.log("Result", result);
      });
    },
    async getOrder() {
      const res = await fetch(
        "https://producemart.herokuapp.com/getOrder/" + this.quoteId,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: this.token,
          },
        }
      );
      const data = await res.json();
      if (data.data) this.order = data.data;
      else this.order = null;
    },
    async saveQuote() {
      console.log("submitting");
      this.loading = true;
      const res = await fetch(
        "https://producemart.herokuapp.com/createOrder/" + this.quoteId,
        {
          method: "POST",
          headers: {
            Authorization: this.token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.orderDetails),
        }
      );
      if (res.ok) {
        localStorage.removeItem("orderDetails");
        localStorage.removeItem("names");
        this.getOrder();
        Swal.fire("successful!", "Quote has been sent !", "success");
      }
      this.loading = false;
    },
    async sendToUser(role) {
      let API_URL =
        role == "supplier"
          ? "https://producemart.herokuapp.com/sendSupplier/"
          : "https://producemart.herokuapp.com/sendBuyer/";
      this.loading = true;
      const res = await fetch(API_URL + this.quoteId, {
        method: "PUT",
        headers: {
          Authorization: this.token,
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        Swal.fire("successful!", `Quote has been sent ${role}!`, "success");
      }
      this.loading = false;
    },
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
};
</script>
