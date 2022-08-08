<template>
  <div>
  <title>View Supplier - Super Admin Dashboard | Produce Mart</title>
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
                    <h3>View Supplier</h3>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="dashboard_breadcam text-right">
                    <p>
                      <router-link to="/dashboard/home"
                        ><a>Dashboard</a></router-link
                      >
                      <i class="fas fa-caret-right"></i> {{ supplier.firstname }}
                          {{ supplier.lastname }}
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
                    <h4>Supplier Details</h4>
                  </div>
                  <div class="row mb-4">
                    <div class="col-sm-6">
                      <h2 class="span">Full Name: {{ supplier.firstname }}
                          {{ supplier.lastname }}
                      </h2>
                      
                      <h2 class="span">Username: {{ supplier.username }}</h2>
                      <h2 class="span">Phone: {{ supplier.phone_no }}</h2>
                      <h2 class="span">Address: 
                        <button class="sendToSupplier" data-bs-toggle="modal"
                                    data-bs-target="#detailsModal">View Address</button>
                      </h2>
                    </div>
                    <div class="col-sm-6">
                      <div class="float-end">
                        <h2 class="span">Company Name: {{ supplier.company_name }}</h2>
                        <!-- <div>Nigeria</div>
                                                <div>Street Address, Lagos.</div> -->
                        <h2 class="span">
                          Email: <a>{{ supplier.email }}</a>
                        </h2>
                        <div v-if="supplier.status == 'pending'">
                          <h2 class="span">Status: <span class="status_btn" style="background: #f98c00;">{{ supplier.status }}</span></h2>
                        </div>
                        <div v-if="supplier.status == 'active'">
                          <h2 class="span">Status: <span class="status_btn">{{ supplier.status }}</span></h2>
                        </div>
                        <div v-if="supplier.status == 'disabled'">
                          <h2 class="span">Status: <span class="status_btn" style="background: #000;">{{ supplier.status }}</span></h2>
                        </div>
                      </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-md-6 d-grid gap-2">
                          <button class="btn btn-outline-dark" @click="$router.push('/dashboard/addSupplierAudit/'+supplier._id)" type="button">Add Audit Certificate</button>
                        </div>
                        <div class="col-md-6 d-grid gap-2" v-if="supplier.status == 'pending'">
                          <button class="btn btn-mart" @click="approveSupplier" type="button">Approve Supplier</button>
                        </div>
                        <div class="col-md-6 d-grid gap-2" v-if="supplier.status == 'active'">
                          <button class="btn btn-mart" @click="disableSupplier" type="button">Disable Supplier</button>
                        </div>
                        <div class="col-md-6 d-grid gap-2" v-if="supplier.status == 'disabled'">
                          <button class="btn btn-mart" @click="approveSupplier" type="button">Actvate Supplier</button>
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
                    <h4>Supplier Audit(s)</h4>
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
                          <th scope="col">Name</th>
                          <th scope="col">Number</th>
                          <th scope="col">Issuing Body</th>
                          <th scope="col">Date Issued</th>
                          <th scope="col">Valid (From)</th>
                          <th scope="col">Valid (To)</th>
                          <th scope="col">Status</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody v-for="(item, i) in audits" :key="item._id">
                        <tr>
                          <td>{{i + 1}}</td>
                          <td>{{item.certification_name}}</td>
                          <td>{{item.certification_number}}</td>
                          <td>{{item.issuingBody}}</td>
                          <td>{{getDate(item.dateOfIssue)}}</td>
                          <td>{{getDate(item.validityPeriod.from)}}</td>
                          <td>{{getDate(item.validityPeriod.to)}}</td>
                          <td v-if="item.progress == 'pending'">
                            <a href="#" style="background: #f98c00;" class="status_btn">{{item.progress}}</a>
                          </td>
                          <td v-if="item.progress == 'approved'">
                            <a href="#" class="status_btn">{{item.progress}}</a>
                          </td>
                          <td v-if="item.progress == 'declined'">
                            <a href="#" style="background: red;" class="status_btn">{{item.progress}}</a>
                          </td>
                          <td>
                            <div class="action_btns d-flex justify-content-center">
                              <router-link :to="'/dashboard/view-audit/'+item._id" title="View Audit" class="action_btn mr_10">
                                <i class="far fa-eye"></i>
                              </router-link>
                              <!-- <a href="#" title="Delete" class="action_btn">
                                <i class="fas fa-trash"></i>
                              </a> -->
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
              <h5 class="modal-title" id="detailsModalLabel">
                Address Details
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="QA_table mb_30">
                <h1 class="summaryHead"><!-- {{ order?.shipper?.companyName }} --></h1>
                <div
                  class="byRoad"
                  
                >
                  <p class="summaryHeadSub"></p>
                  <table class="table green_mouse">
                    <thead>
                      <tr>
                        <th class="center">Headquater</th>
                        <th class="center">Street</th>
                        <th class="center">City</th>
                        <th class="center">State</th>
                        <th class="center">Country</th>
                      </tr>
                    </thead>
                    <tbody v-for="(item, i) in supplier.address" :key="item._id">
                      <tr class="bodyRow">
                      <td class="tdBody">
                        {{
                          item.name
                        }}
                      </td>
                      <td class="tdBody">
                        {{
                          item.street
                        }}
                      </td>
                      <td class="tdBody">
                        {{
                          item.city
                        }}
                      </td>
                      <td class="tdBody">
                        {{
                          item.state
                        }}
                      </td>
                      <td class="tdBody">
                        {{
                          item.country
                        }}
                      </td>
                    </tr>
                    </tbody>
                    
                  </table>
                  <hr>
                </div>
              </div>
            </div>
            <div class="modal-footer modalFooter">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Close
              </button>
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

    let externalScriptCustom = document.createElement("script");
    externalScriptCustom.setAttribute(
      "src",
      "https://cdn.statically.io/gh/NathTimi/Mart-script/main/custom.js"
    );
    document.head.appendChild(externalScriptCustom);
    this.fetchSupplier();
  },
  data() {
    return {
      supplier: '',
      token: JSON.parse(localStorage.getItem("user")).token,
      supplierId: this.$route.params.id,
      audits: [],
    };
  },
  methods: {
    getDate(value){
      return new Date(value).toLocaleDateString()
    },
    async disableSupplier(){
      const res = await fetch(
        `https://producemart.herokuapp.com/disableUser/${this.supplierId}`,
        {
          method: "PUT",
          headers: {
            Authorization: this.token,
          },
        })
      const data  = await res.json();
      //console.log(res)
      if (data.status == true) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Supplier Disabled`,
          showConfirmButton: false,
          timer: 3500
        })
        this.fetchSupplier();
      }
    },
    async approveSupplier(){
      const res = await fetch(
        `https://producemart.herokuapp.com/approveUser/${this.supplierId}`,
        {
          method: "PUT",
          headers: {
            Authorization: this.token,
          },
        })
      const data  = await res.json();
      //console.log(data)
      if (data.status == true) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Supplier Activated`,
          showConfirmButton: false,
          timer: 3500
        })
        this.fetchSupplier();
      }
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