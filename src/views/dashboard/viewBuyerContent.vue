<template>
  <div>
  <title>View Buyer - Super Admin Dashboard | Produce Mart</title>
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
                    <h3>View Buyer</h3>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="dashboard_breadcam text-right">
                    <p>
                      <router-link to="/dashboard/home"
                        ><a>Dashboard</a></router-link
                      >
                      <i class="fas fa-caret-right"></i> {{ buyer.firstname }}
                          {{ buyer.lastname }}
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
                    <h4>Buyer Details</h4>
                  </div>
                  <div class="row mb-4">
                    <div class="col-sm-6">
                      <h2 class="span">Full Name: {{ buyer.firstname }}
                          {{ buyer.lastname }}
                      </h2>
                      
                      <h2 class="span">Username: {{ buyer.username }}</h2>
                      <h2 class="span">Phone: {{ buyer.phone_no }}</h2>
                      <h2 class="span">Address: 
                        {{buyer.address}}
                      </h2>
                    </div>
                    <div class="col-sm-6">
                      <div class="float-end">
                        <h2 class="span">Company Name: {{ buyer.company_name }}</h2>
                        <!-- <div>Nigeria</div>
                                                <div>Street Address, Lagos.</div> -->
                        <h2 class="span">
                          Email: <a>{{ buyer.email }}</a>
                        </h2>
                        <div v-if="buyer.emailVerified == false">
                          <h2 class="span">Status: <span class="status_btn" style="background: #000;">Incomplete</span></h2>
                        </div>
                        <div v-if="buyer.emailVerified == true && buyer.status == 'active'">
                          <h2 class="span">Status: <span class="status_btn">Active</span></h2>
                        </div>
                        <div v-if="buyer.status == 'disabled' && buyer.emailVerified == true">
                          <h2 class="span">Status: <span class="status_btn" style="background: red;">{{ buyer.status }}</span></h2>
                        </div>
                      </div>
                    </div>
                    <div class="row mt-4">
                        <!-- <div class="col-md-6 d-grid gap-2">
                          <button class="btn btn-outline-dark" @click="$router.push('/dashboard/addbuyerAudit/'+buyer._id)" type="button">Add Audit Certificate</button>
                        </div> -->
                        <div class="text-center" v-if="buyer.emailVerified == false">
                          <button class="btn btn-mart" @click="$router.push('/dashboard/incomplete-buyers')" type="button">Go Back</button>
                        </div>
                        <div class="text-center" v-if="buyer.emailVerified == true && buyer.status == 'active'">
                          <button class="btn btn-mart" @click="disableBuyer" type="button">Disable Buyer</button>
                        </div>
                        <div class="text-center" v-if="buyer.status == 'disabled' && buyer.emailVerified == true">
                          <button class="btn btn-mart" @click="approveBuyer" type="button">Actvate Buyer</button>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--Main-->
          <!-- <div class="col-md-12">
            <div class="white_card card_height_100 mb_30 pt-4">
              <div class="white_card_body">
                <div class="QA_section">
                  <div class="white_box_tittle list_header">
                    <h4>buyer Audit(s)</h4>
                  </div>
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
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
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
    this.fetchBuyer();
  },
  data() {
    return {
      buyer: '',
      token: JSON.parse(localStorage.getItem("user")).token,
      buyerId: this.$route.params.id,
    };
  },
  methods: {
    getDate(value){
      return new Date(value).toLocaleDateString()
    },
    async disableBuyer(){
      const res = await fetch(
        `https://producemart.herokuapp.com/disableUser/${this.buyerId}`,
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
          title: `Buyer Disabled`,
          showConfirmButton: false,
          timer: 3500
        })
        this.fetchBuyer();
      }
    },
    async approveBuyer(){
      const res = await fetch(
        `https://producemart.herokuapp.com/approveUser/${this.buyerId}`,
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
          title: `Buyer Activated`,
          showConfirmButton: false,
          timer: 3500
        })
        this.fetchBuyer();
      }
    },
    async fetchBuyer() {
      const res = await fetch(
        `https://producemart.herokuapp.com/user/${this.buyerId}`,
        {
          method: "GET",
          headers: {
            Authorization: this.token,
          },
        }
      );
      const { data } = await res.json();
      //console.log(data)
      this.buyer = data
      //this.audits = data.audit
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