<template>
  <title>View Audit - Supplier Dashboard | Produce Mart</title>
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
                    <h3>View Audit</h3>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="dashboard_breadcam text-right">
                    <p>
                      <router-link to="/supplier-dashboard/home"
                        ><a>Dashboard</a></router-link
                      >
                      <i class="fas fa-caret-right"></i> View Audit
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
                    <h4>View Audit(s)</h4>
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
                              <router-link :to="'/supplier-dashboard/view-audit-content/'+item._id" title="View Audit" class="action_btn mr_10">
                                <i class="far fa-eye"></i>
                              </router-link>
                              <div v-if="item.progress == 'declined' || item.progress == 'pending'">
                                <router-link :to="'/supplier-dashboard/edit-audit/'+item._id" title="View Audit" class="action_btn mr_10">
                                  <i class="far fa-edit"></i>
                                </router-link>
                                <a href="#" @click="deleteCertificate(item._id)" title="Delete" class="action_btn">
                                  <i class="fas fa-trash"></i>
                                </a>
                              </div>
                              
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
    this.getUser()
    
  },
  data(){
    return {
      token: JSON.parse(localStorage.getItem("user")).token,
      user: JSON.parse(localStorage.getItem("user")),
      supplierId: '',
      audits: [],
    }
  },
  methods: {
    getUser(){
      if (this.user.role == 'supplier'){
          this.supplierId = this.user._id
          this.getAudits()
      }
    },
    deleteCertificate(value){
      Swal.fire({
        title: 'Are you sure you want to delete certificate?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`https://producemart.herokuapp.com/deleteAudit/${value}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: this.token,
            },
          })
          .then(() => {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            this.$router.push('/supplier-dashboard/home')
          })
        }
      })
      
    },
    getDate(value){
      return new Date(value).toLocaleDateString()
    },
    async getAudits(){
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
      this.audits = data.audit
    }
  }
};
</script>
