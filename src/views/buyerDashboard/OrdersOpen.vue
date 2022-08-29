<template>
  <title>Open Orders - Buyer Dashboard | Produce Mart</title>
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
                    <h3>Open Orders</h3>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="dashboard_breadcam text-right">
                    <p>
                      <router-link to="/buyer-dashboard/home"
                        ><a>Dashboard</a></router-link
                      >
                      <i class="fas fa-caret-right"></i> Open Orders
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
                    <h4>All Open Orders</h4>
                    <div class="box_right d-flex lms_block">
                      <div class="serach_field_2">
                        <div class="search_inner">
                          <form Active="#">
                            <div class="search_field">
                              <input
                                type="text"
                                placeholder="Search by order id or product name..."
                              />
                            </div>
                            <button type="submit">
                              <i class="bi bi-search"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="fileDownloadOption mb-3">
                    <button type="button" title="Download as CSV file">
                      CSV
                    </button>
                    <button type="button" title="Download as PDF file">
                      PDF
                    </button>
                  </div>
                  <div class="QA_table mb_30">
                    <table class="table lms_table_active">
                      <thead>
                        <tr>
                          <th scope="col">Order ID</th>
                          <th scope="col">Product</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Status</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(order, i) in orders" :key="i">
                          <th scope="row">{{order._id}}</th>
                          <td>{{ order.quote.product.name }}</td>
                          <td>
                            {{ order.quote.quantity }}
                            {{ order.quote.product.package.unit }}
                          </td>
                          <td><a class="btn-awaiting">Open</a></td>
                          <td>
                            <router-link
                              :to="
                                '/buyer-dashboard/view-open-order/' +
                                order.quote._id
                              "
                              class="viewOrder"
                              >View Order</router-link
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
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
<style scoped src="@/assets/css/styleSupport.css"></style>
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
      orders: "",
      buyerId: JSON.parse(localStorage.getItem("user"))._id,
      token: JSON.parse(localStorage.getItem("user")).token,
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    this.getAllOrders();
    
  },
  methods: {
    async getAllOrders() {
      const res = await fetch(
        "https://producemart.herokuapp.com/getBuyersOrders/" + this.buyerId,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: this.token,
          },
        }
      );
      const { data } = await res.json();
      this.orders = data.filter((order) => order.sent_supplier);
      //console.log(data);
    },
  },
};
</script>
