<template>
  <div>
  <title>Bid Product Details - Supplier Admin Dashboard | Produce Mart</title>
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
                    <h3>Bid Product Details</h3>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="dashboard_breadcam text-right">
                    <p>
                      <router-link to="/dashboard/home"
                        ><a>Dashboard</a></router-link
                      >
                      <i class="fas fa-caret-right"></i> Bid Product Details
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 QA_section mb-4">
            <div class="white_card card_height_100 mb_30 pt-4">
              <div class="white_card_body">
                <div class="QA_section">
                  <div class="white_box_tittle list_header">
                    <h4>Bid Product Details</h4>
                  </div>
                  <div class="row mb-4">
                    <div class="col-sm-4">
                      <h2 class="span">Product Name :  10 Bags of Banana
                      </h2>
                      
                      <h2 class="span">Destination Country :  South Africa</h2>
                      <h2 class="span">Supply Frequency :  One-Off</h2>
                    </div>
                    <div class="col-sm-4">
                      <div class="">
                        <h2 class="span">Product Price :  $500</h2>
                        <!-- <div>Nigeria</div>
                                                <div>Street Address, Lagos.</div> -->
                        <h2 class="span">
                          Weight :  4kg
                        </h2>
                        <h2 class="span">Quantity :  100</h2>
                        
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="">
                        <h2 class="span">Estimated Cost:  $100,000</h2>
                        <!-- <div>Nigeria</div>
                                                <div>Street Address, Lagos.</div> -->
                        <h2 class="span">
                          Crop Year (Start) :  15/04/22
                        </h2>
                        <h2 class="span">
                          Crop Year (End) :  15/04/22
                        </h2>
                      </div>
                    </div>
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
                    <h4>Bidding Suppliers List(s)</h4>
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
                    <table class="table green_mouse">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Supplier Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">Audit Certificate</th>

                          <th scope="col">Joined Date</th>
                          <th scope="col">Total Sales</th>

                          <th scope="col">Total Product</th>

                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#</td>
                          <td>Another Banga</td>
                          <td>
                            supplier@gmail.com
                          </td>
                          <td>Audit Cert</td>
                          <td>15/04/22</td>
                          <td>20</td>

                          <td>40</td>

                          <td>
                            <div class="action_btns d-flex">
                              Awaiting Url
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

  
  </section>
  <dash-footer />
  </div>

</template>
<style scoped src="@/assets/vendors/themefy_icon/themify-icons.css"></style>
<style scoped src="@/assets/vendors/niceselect/css/nice-select.css"></style>
<style scoped src="@/assets/css/style.css"></style>
<style scoped src="@/assets/css/styleSupport.css"></style>
<script>
import DashSidebar from "./dash-sidebar.vue";
import DashNavbar from "./dash-navbar.vue";
import DashFooter from "./dash-footer.vue";
import axios from 'axios'
import Swal from 'sweetalert2';
export default {
  name: "Produce Mart",
  components: {
    "dash-sidebar": DashSidebar,
    "dash-navbar": DashNavbar,
    "dash-footer": DashFooter,
  },
  mounted() {
    window.scrollTo(0, 0);
    //this.fetchSupplier();
  },
  data() {
    return {
      token: JSON.parse(localStorage.getItem("user")).token,
    };
  },
  methods: {
    getDate(value){
      return new Date(value).toLocaleDateString()
    },
    async fetchSupplier() {
      const res = await fetch(
        `https://producemart.herokuapp.com/user/${this.supplierId}`,
        {
          method: "GET",
          headers: {
            Authorization: this.token,
          },
        }
      );
      const { data } = await res.json();
      //console.log(data)
      this.supplier = data
      this.audits = data.audit
      //console.log(this.audits)
      /*const pending = data.filter(
        (user) => user.status == "pending"
      );*/
    },
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap');

h2.span{
  font-family: 'Montserrat', sans-serif;
  line-height: 25px;
  font-size: 14px !important;
  font-weight: 500 !important;
}
.btn-mart{
  background: #000;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-size: 12px !important;
  padding: 10px 35px;
}
</style> 