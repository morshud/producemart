<template>
  <title>Request Products - Buyer Admin Dashboard | Produce Mart</title>
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
                    <h3>Request Products</h3>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="dashboard_breadcam text-right">
                    <p>
                      <router-link to="/supplier-dashboard/home"
                        ><a>Dashboard</a></router-link
                      >
                      <i class="fas fa-caret-right"></i> Request Products
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
                    <h4>Requested Product List</h4>
                    
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
                  <p class="page" style="padding: 0px 0 30px 0 !important; margin-top: -30px;">
                      This page shows the products you requested using the <router-link to="/request-a-product">Request a  Product</router-link> page.<br> You can track and manage your requests here.”
                    </p>
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
                          <th scope="col">Price($)</th>
                          <th scope="col">Quantity</th>

                          <th scope="col">Crop Year (Start Year)</th>
                          <th scope="col">Crop Year (End Year)</th>

                          <th scope="col">Category</th>

                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody v-for="(item, i) in productRequestList">
                        <tr>
                          <td>#</td>
                          <td>{{item.name}}</td>
                          <td>
                            ${{item.price}} per {{item.weight}}
                          </td>
                          <td>{{item.quantity}}</td>
                          <td>{{getDate(item.cropYear.start_date)}}</td>
                          <td>{{getDate(item.cropYear.end_date)}}</td>

                          <td>{{item.category}}</td>

                          <td>
                            <div class="action_btns d-flex">
                              <router-link
                                :to="'/buyer-dashboard/product-request/'+ item._id"
                                title="View"
                                class="action_btn mr_10"
                              >
                                <i class="far fa-eye"></i>
                              </router-link>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                   
                    <!-- Popup Box Delete -->
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
<style>
  .table .page{
    padding: 10px 0 30px 0 !important;
  }
</style>
<script>
import DashSidebar from "./dash-sidebar.vue";
import DashNavbar from "./dash-navbar.vue";
import DashFooter from "./dash-footer.vue";
import QUOTE from './../../service/quote-service'
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
  data() {
    return {
      productRequestList: [],
      search: "",
      user: JSON.parse(localStorage.getItem("user")),
    };
  },
  created(){
    this.getAllBuyerRequest()
  },
  methods: {
    getAllBuyerRequest() {
      QUOTE.GetAllBuyerRequest(this.user._id)
      .then((res) => {
        this.productRequestList = res.data.data
      })
      /*const res = await fetch(
        "http://localhost:3000/getAllBuyerRequest"
      );
      const { data } = await res.json();*/
      

      // this.products = data;
      // console.log(this.products);
    },
    getDate(value){
      return new Date(value).toLocaleDateString()
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
