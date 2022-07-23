<template>
<div>
  <title>Transactions - Super Admin Dashboard | Produce Mart</title>
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
                    <h3>Transaction History</h3>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="dashboard_breadcam text-right">
                    <p>
                      <router-link to="/dashboard/home"
                        ><a>Dashboard</a></router-link
                      >
                      <i class="fas fa-caret-right"></i> Transaction History
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
                    <h4>Latest Transaction(s)</h4>
                    <div class="box_right d-flex lms_block">
                      <div class="serach_field_2">
                        <div class="search_inner">
                          <form Active="#">
                            <div class="search_field">
                              <input type="text" placeholder="Search here..." />
                            </div>
                            <button type="submit">
                              <i class="bi bi-search"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="fileDownloadOption mb-3">
                    <button type="button" title="Download as CSV file">
                      CSV
                    </button>
                    <button type="button" title="Download as PDF file">
                      PDF
                    </button>
                  </div> -->
                  <div class="QA_table mb_30">
                    <table class="table lms_table_active">
                      <thead>
                        <tr>
                          <th scope="col">S/N</th>
                          <th scope="col">User</th>
                          <!-- <th scope="col">Trans ID</th>
                          <th scope="col">Ref No</th> -->
                          <th scope="col">Status</th>
                          <th scope="col">Gateway Type</th>
                          <th scope="col">Trans Type</th>
                          <th scope="col">Amount</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, i) in transactions" :key="i">
                          
                          <td>{{ i+1 }}</td>
                          <td>
                            <div v-if="item.user != null">
                              <span>
                                {{item.user.firstname}} {{item.user.lastname}}
                              </span>
                            </div>
                          </td>
                          <td>
                            <div v-if="item.status == 'awaiting_funds'">
                              <span style="background: #ff8d14" class="status_btn">
                                Awaiting Fund
                              </span>
                            </div>
                            <div v-else-if="item.status == 'Success'">
                              <span class="status_btn">
                                Success
                              </span>
                            </div>
                            <div v-else>
                              <span style="background: #000;" class="status_btn">
                                {{item.status}}
                              </span>
                            </div>
                          </td>
                          <td>
                            <div v-if="item.gateway == 'trust_share'">
                              <span >
                                Trust Share
                              </span>
                            </div>
                            <div v-if="item.gateway == 'paypal'">
                              <span >
                                Paypal
                              </span>
                            </div>
                          </td>
                          <td>
                            <div v-if="item.type == 'release funds'">
                              <span >
                                Release Fund
                              </span>
                            </div>
                            <div v-else-if="item.type == 'escrow'">
                              <span >
                                Escrow
                              </span>
                            </div>
                            <div v-else-if="item.type == 'adminfee'">
                              <span >
                                Admin Fee
                              </span>
                            </div>
                            <div v-else>
                              <span >
                                {{item.type}}
                              </span>
                            </div>
                          </td>
                          <td>${{ item.amount }}</td>
                          <td>
                            <div class="action_btns d-flex justify-content-center">
                              <router-link :to="'/dashboard/transactionDetails/'+item._id" title="View Supplier" class="action_btn mr_10">
                                <i class="far fa-eye"></i>
                              </router-link>
                              <!-- <a href="#" title="Delete" class="action_btn">
                                <i class="fas fa-trash"></i>
                              </a> -->
                            </div>
                          </td>
                          <!-- <td>
                            <div class="action_btns d-flex">
                              <router-link to="/dashboard/edit-supplier-content"
                                ><a title="Edit" class="action_btn mr_10">
                                  <i class="far fa-edit"></i> </a
                              ></router-link>
                              <a href="#" title="Delete" class="action_btn">
                                <i class="fas fa-trash"></i>
                              </a>
                            </div>
                          </td> -->
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
  mounted() {
    window.scrollTo(0, 0);

    let externalScriptCustom = document.createElement("script");
    externalScriptCustom.setAttribute(
      "src",
      "https://cdn.statically.io/gh/NathTimi/Mart-script/main/custom.js"
    );
    document.head.appendChild(externalScriptCustom);
    this.fetchSuppliers();
  },
  data() {
    return {
      transactions: null,
      token: JSON.parse(localStorage.getItem("user")).token,
    };
  },
  methods: {
    async fetchSuppliers() {
      this.users = null;
      const res = await fetch(
        "https://producemart.herokuapp.com/getAlltransactions",
        {
          method: "GET",
          headers: {
            Authorization: this.token,
          },
        }
      );
      const { data } = await res.json();
      this.transactions = data
    },
  },
};
</script>
