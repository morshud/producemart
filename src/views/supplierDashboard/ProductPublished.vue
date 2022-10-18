<template>
  <title>Published Products - Supplier Dashboard | Produce Mart</title>
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
                    <h3>Published Products</h3>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="dashboard_breadcam text-right">
                    <p>
                      <router-link to="/supplier-dashboard/home"
                        ><a>Dashboard</a></router-link
                      >
                      <i class="fas fa-caret-right"></i> Published Products
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="lineHR"></div> -->
          <div class="headerP mb-3">
            <p>
              This page shows all product that have been approved by admin and
              listed on the website.
            </p>
          </div>
          <!-- <div class="lineHR"></div> -->

          <!--Main-->
          <div class="col-md-12">
            <div class="white_card card_height_100 mb_30 pt-4">
              <div class="white_card_body">
                <div class="QA_section">
                  <div class="white_box_tittle list_header">
                    <h4>Published Products List</h4>
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
                  <div class="QA_table mb_30" v-if="products">
                    <table class="table lms_table_active">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Product Name</th>
                          <th scope="col">Published Date</th>
                          <th scope="col">Product Url</th>
                          <!-- <th scope="col">Product Availability</th> -->
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(product, i) in products" :key="i">
                          <th scope="row">{{ i + 1 }}</th>
                          <td>{{ product.name }}</td>
                          <td>{{ product.updatedAt }}</td>
                          <td>
                            <router-link :to="'/products/inner-product/'+ product._id">
                              https://producemart.ten.vercel.app/products/inner-product/{{product._id}}
                            </router-link>
                          </td>
                          <!-- <td>
                            <span class="spanAction">Unavailable</span>
                            <label
                              class="switchDisable"
                              title="Loading..."
                              v-if="loading && id == product._id"
                              disabled
                            >
                              <input type="checkbox" id="myCheckbox" disabled />
                              <span class="slider round" disabled></span>
                            </label>
                            <label
                              class="switchDisable"
                              title="Click to make unavailable"
                              @click="makeUnavailable(product._id)"
                              v-else
                            >
                              <input type="checkbox" id="myCheckbox" checked />
                              <span class="slider round"></span>
                            </label>
                            <span class="spanAction">Available</span>
                          </td> -->
                          <td>
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
                              <!-- <span
                                @click="deleteProduct(product._id)"
                                title="Delete"
                                class="action_btn"
                              >
                                <i class="fas fa-trash"></i>
                              </span> -->
                            </div>
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
import Swal from "sweetalert2";

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
      loading: false,
      baseURL: window.location.path,
      id: null,
      token: JSON.parse(localStorage.getItem("user")).token,
      products: [],
    };
  },
  methods: {
    async fetchPublishedProduct() {
      const res = await fetch(
        "https://producemart.herokuapp.com/getProductsbyUser?status=active",
        {
          method: "GET",
          headers: {
            Authorization: this.token,
          },
        }
      );
      const { data } = await res.json();
      this.products = data.filter((prod) => prod.available);
      //console.log(data);
    },
    // async makeUnavailable(id) {
    //   this.id = id;
    //   this.loading = true;
    //   const res = await fetch(
    //     "https://producemart.herokuapp.com/productAvailability/" + id,
    //     {
    //       method: "PATCH",
    //       headers: {
    //         Authorization: this.token,
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ available: false }),
    //     }
    //   );
    //   if (res.ok) {
    //     this.loading = false;
    //     this.fetchPublishedProduct();
    //     Swal.fire({
    //       title: "Product made unavailable!",
    //       text: "You can view product in the unavailable page and also make available when product is available",
    //       icon: "success",
    //       confirmButtonColor: "#97f29f",
    //       confirmButtonText: "Ok",
    //     });
    //   } else {
    //     this.loading = false;
    //     Swal.fire({
    //       title: "ooPs!",
    //       text: "Unable to make product unavailable at the moment please try again later",
    //       icon: "error",
    //       confirmButtonColor: "#97f29f",
    //       confirmButtonText: "Ok",
    //     });
    //   }
    // },
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
  },
};
</script>
