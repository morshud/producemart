<template>
  <title>Pending Products - Supplier Dashboard | Produce Mart</title>
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
                    <h3>Pending Products</h3>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="dashboard_breadcam text-right">
                    <p>
                      <router-link to="/supplier-dashboard/home"
                        ><a>Dashboard</a></router-link
                      >
                      <i class="fas fa-caret-right"></i> Pending Products
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="headerP mb-3">
            <p>
              This page shows all pending products that are awaiting the admin's
              review. It also includes products that have been rejected and
              require further action, after a review.
            </p>
          </div>

          <!--Main-->
          <div class="col-md-12">
            <div class="white_card card_height_100 mb_30 pt-4">
              <div class="white_card_body">
                <div class="QA_section">
                  <div class="white_box_tittle list_header">
                    <h4>Pending Products List</h4>
                    <div class="box_right d-flex lms_block">
                      <div class="serach_field_2">
                        <div class="search_inner">
                          <form Active="#">
                            <div class="search_field">
                              <input
                                type="text"
                                placeholder="Search products here..."
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
                  <!-- <div class="fileDownloadOption mb-3">
                    <button type="button" title="Download as CSV file">
                      CSV
                    </button>
                    <button type="button" title="Download as PDF file">
                      PDF
                    </button>
                  </div> -->
                  <div
                    class="QA_table mb_30"
                    v-if="pendingProducts || rejectedProducts"
                  >
                    <table class="table lms_table_active">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Product Name</th>
                          <th scope="col">Status</th>
                          <th>Date Of Submission</th>
                          <th scope="col">Comments</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(product, i) in rejectedProducts" :key="i">
                          <th scope="row"><i class="fas fa-warning"></i></th>
                          <td>{{ product.name }}</td>
                          <td>{{ product.status }}</td>
                          <td>{{ dateFormat(product.updatedAt) }}</td>
                          <td>
                            <p
                              v-for="(fdbk, i) in product.feedback"
                              :key="i"
                              style="text-decoration: underline"
                            >
                              <router-link
                                :to="
                                  '/supplier-dashboard/view-products/' +
                                  product._id
                                "
                                >{{ fdbk.comment }}</router-link
                              >
                            </p>
                          </td>
                          <!-- <td>
                            <div class="action_btns d-flex">
                              <router-link
                                :to="
                                  '/supplier-dashboard/view-products/' +
                                  product._id
                                "
                                title="View & Edit"
                                class="action_btn mr_10"
                              >
                                <i class="far fa-edit"></i>
                              </router-link>
                              <span
                                @click="deleteProduct(product._id)"
                                title="Delete"
                                class="action_btn"
                              >
                                <i class="fas fa-trash"></i>
                              </span>
                            </div>
                          </td> -->
                        </tr>
                        <tr v-for="(product, i) in pendingProducts" :key="i">
                          <th scope="row">{{ i + 1 }}</th>
                          <td>{{ product.name }}</td>
                          <td>{{ product.status }}</td>
                          <td>{{ dateFormat(product.updatedAt) }}</td>
                          <td>Awaiting review by Admin</td>
                          <!-- <td>
                            <div class="action_btns d-flex">
                              <router-link
                                :to="
                                  '/supplier-dashboard/view-products/' +
                                  product._id
                                "
                                title="View & Edit"
                                class="action_btn mr_10"
                              >
                                <i class="far fa-edit"></i>
                              </router-link>
                              <span
                                @click="deleteProduct(product._id)"
                                title="Delete"
                                class="action_btn"
                              >
                                <i class="fas fa-trash"></i>
                              </span>
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
</template>
<style scoped src="@/assets/vendors/themefy_icon/themify-icons.css"></style>
<style scoped src="@/assets/vendors/niceselect/css/nice-select.css"></style>
<style scoped src="@/assets/css/style.css"></style>
<script>
import DashSidebar from "./dash-sidebar.vue";
import DashNavbar from "./dash-navbar.vue";
import DashFooter from "./dash-footer.vue";
import { month } from "@/assets/months";
export default {
  name: "Produce Mart",
  components: {
    "dash-sidebar": DashSidebar,
    "dash-navbar": DashNavbar,
    "dash-footer": DashFooter,
  },
  mounted() {
    window.scrollTo(0, 0);

    
    this.fetchPublishedProduct();
  },
  data() {
    return {
      token: JSON.parse(localStorage.getItem("user")).token,
      pendingProducts: [],
      rejectedProducts: [],
    };
  },
  methods: {
    async fetchPublishedProduct() {
      this.products = [];
      const res = await fetch(
        "https://producemart.herokuapp.com/getPendingProductByUser",
        {
          method: "GET",
          headers: {
            Authorization: this.token,
          },
        }
      );
      const { data } = await res.json();
      this.rejectedProducts = data.filter(
        (prod) => prod.status == "rejected" && prod.available
      );
      this.pendingProducts = data.filter(
        (prod) => prod.status == "pending" && prod.available
      );

      // console.log(this.pendingProducts);
    },
    async deleteProduct(id) {
      const res = await fetch(
        "https://producemart.herokuapp.com/deleteProduct/" + id,
        {
          method: "DELETE",
          headers: {
            Authorization: this.token,
          },
        }
      );
      const data = await res.json();
      this.fetchPublishedProduct();
    },
    dateFormat(date) {
      let d = new Date(date);
      return (
        (d.getDay() < 10 ? "0" + d.getDay() : d.getDay()) +
        "-" +
        month[d.getMonth()] +
        "-" +
        d.getFullYear()
      );
    },
  },
};
</script>
