<template>
  <title>Disabled Products - Super Admin Dashboard | Produce Mart</title>
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
                    <h3>Disable Products</h3>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="dashboard_breadcam text-right">
                    <p>
                      <router-link to="/dashboard/home"
                        ><a>Dashboard</a></router-link
                      >
                      <i class="fas fa-caret-right"></i> Disable Products
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
                    <h4>Disabled Products List</h4>
                    <div class="box_right d-flex lms_block">
                      <div class="serach_field_2">
                        <div class="search_inner">
                          <form Active="#">
                            <div class="search_field">
                              <input
                                type="text"
                                placeholder="Search products here..."
                                v-model="search"
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
                  <div class="QA_table mb_30">
                    <table class="table lms_table_active">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Product Name</th>
                          <!-- <th scope="col">Product Variety</th>
                          <th scope="col">Product Weight</th>
                          <th scope="col">Product Dimension</th> -->
                          <!-- <th scope="col">Supplier ID</th> -->
                          <th scope="col">Price($)</th>
                          <th scope="col">Category</th>
                          <!-- <th scope="col">Product Detail</th>
                          <th scope="col">Product Characteristics</th> -->
                          <th scope="col">Product Image</th>
                          <th scope="col">Certification</th>
                          <!-- <th scope="col">Packaging</th>
                          <th scope="col">Minimum Order Quantity</th> -->
                          <th scope="col">State</th>
                          <th scope="col">Activate</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(product, i) in filteredProducts" :key="i">
                          <td>{{ i+1 }}</td>
                          <td>{{ product.name }}</td>
                          <!-- <td>{{ product.variety }}</td>
                          <td>{{ product.weight }}</td>
                          <td>{{ product.dimension }}</td> -->
                          <!-- <td>{{ product.userId._id }}</td> -->
                          <td>{{ product.package.price }}</td>
                          <td>{{ product.category }}</td>
                          <!-- <td scope="row">{{ product.farmMethod }}</td>
                          <td>{{ product.description }}</td> -->
                          <td scope="row">
                            <img width="80" :src="product.img_url[0]" alt="" />
                          </td>
                          <td>
                            <a
                              :href="product.certification[0].file_url"
                              target="_blank"
                              v-if="product.certification.length > 0"
                              >View Certificate</a
                            >
                            <span v-else>No Certification uploaded</span>
                          </td>
                          <!-- <td>{{ product.packaging }}</td>
                          <td>{{ product.qty }}</td> -->
                          <td>{{ product.status }}</td>
                          <td>
                            <span
                              @click="activateOrDeact(product._id, 'active')"
                              class="status_btn"
                              >Activate</span
                            >
                          </td>
                          <td>
                            <div class="action_btns d-flex">
                              <router-link
                                :to="'/dashboard/product-review/' + product._id"
                                target="_blank"
                                title="View"
                                class="action_btn mr_10"
                              >
                                <i class="far fa-eye"></i>
                              </router-link>
                              <!-- <span
                                @click="
                                  activateOrDeact(product._id, 'disabled')
                                "
                                title="Disable"
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
    this.getAllproducts();
  },
  data() {
    return {
      products: null,
      search: "",
      token: JSON.parse(localStorage.getItem("user")).token,
    };
  },
  methods: {
    async getAllproducts() {
      const res = await fetch(
        "https://producemart.herokuapp.com/getAllProducts"
      );
      const { data } = await res.json();

      this.products = data.filter((val) => val.status == "disabled");
      //console.log(this.products);
    },
    async activateOrDeact(id, action) {
      // console.log(this.token);
      const res = await fetch(
        "https://producemart.herokuapp.com/verifyProduct/" + id,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: this.token,
          },
          body: JSON.stringify({ verify: action }),
        }
      );
      if (res.ok) this.getAllproducts();
    },
  },
  computed: {
    filteredProducts() {
      if (this.products) {
        return this.products.filter((product) =>
          product.name.toLowerCase().includes(this.search.toLowerCase())
        );
      }
    },
  },
};
</script>
