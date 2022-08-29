<template>
  <title>Unavailable Products - Supplier Dashboard | Produce Mart</title>
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
                    <h3>Unavailable Products</h3>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="dashboard_breadcam text-right">
                    <p>
                      <router-link to="/supplier-dashboard/home"
                        ><a>Dashboard</a></router-link
                      >
                      <i class="fas fa-caret-right"></i> Unavailable Products
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="headerP mb-3">
            <p>
              This page shows all products that you made unavailable or have
              been disabled by admin. These products can not be viewed by
              Buyers.
            </p>
          </div>
          <!--Main-->
          <div class="col-md-12">
            <div class="white_card card_height_100 mb_30 pt-4">
              <div class="white_card_body">
                <div class="QA_section">
                  <div class="white_box_tittle list_header">
                    <h4>Unavailable Products List</h4>
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
                  <div class="QA_table mb_30" v-if="unavailableProducts">
                    <table class="table lms_table_active">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Product Name</th>
                          <th scope="col">Unavailable Date</th>
                          <!-- <th scope="col">Product Availability</th> -->
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(product, i) in unavailableProducts"
                          :key="i"
                        >
                          <th scope="row">
                            {{ i + 1 }}
                          </th>
                          <td>{{ product.name }}</td>
                          <td>{{ dateFormat(product.updatedAt) }}</td>
                          <!-- <td>
                            <span class="spanAction">Unavailable</span>
                            <label
                              class="switchDisable"
                              title="Loading..."
                              disabled
                              v-if="loading && id == product._id"
                            >
                              <input
                                type="checkbox"
                                id="myCheckbox"
                                checked
                                disabled
                              />
                              <span class="slider round" disabled></span>
                            </label>
                            <label
                              class="switchDisable"
                              @click="makeUnavailable(product._id)"
                              title="Click to make available"
                              v-else
                            >
                              <input type="checkbox" id="myCheckbox" />
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
                              <span
                                @click="deleteProduct(product._id)"
                                title="Delete"
                                class="action_btn"
                              >
                                <i class="fas fa-trash"></i>
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr v-for="(product, i) in disabledProducts" :key="i">
                          <th scope="row">
                            <i class="fas fa-warning"></i>
                          </th>

                          <td>{{ product.name }}</td>
                          <td>{{ dateFormat(product.updatedAt) }}</td>

                          <!-- <td>product disabled</td> -->

                          <td><p>Disabled by admin</p></td>
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
      loading: false,
      id: null,
      token: JSON.parse(localStorage.getItem("user")).token,
      unavailableProducts: null,
      disabledProducts: null,
    };
  },
  methods: {
    async fetchPublishedProduct() {
      const res = await fetch(
        "https://producemart.herokuapp.com/getAllProducts",
        {
          method: "GET",
        }
      );
      const { data } = await res.json();
      this.unavailableProducts = data.filter((prod) => prod.available == false);
      this.disabledProducts = data.filter((prod) => prod.status == "disabled");
      console.log(this.unavailableProducts);
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
    //       body: JSON.stringify({ available: true }),
    //     }
    //   );
    //   if (res.ok) {
    //     this.loading = false;
    //     this.fetchPublishedProduct();
    //     Swal.fire({
    //       title: "Product made available!",
    //       text: "You can view product in the published product page.",
    //       icon: "success",
    //       confirmButtonColor: "#97f29f",
    //       confirmButtonText: "Ok",
    //     });
    //   } else {
    //     this.loading = false;
    //     Swal.fire({
    //       title: "ooPs!",
    //       text: "Unable to make product available at the moment please try again later",
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
