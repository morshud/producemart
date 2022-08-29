<template>
  <div>
  <title>View Audit - Super Admin Dashboard | Produce Mart</title>
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
                    <h3>View Certificate</h3>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="dashboard_breadcam text-right">
                    <p>
                      <router-link to="/dashboard/home"
                        ><a>Dashboard</a></router-link
                      >
                      <i class="fas fa-caret-right"></i> {{audit.name}}
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
                  <!-- <div class="white_box_tittle list_header">
                    <h4>Supplier Details</h4>
                  </div> -->
                  <div class="row mb-4">
                    <div class="col-sm-6">
                      <h2 class="span">Certificate Name : <strong>{{audit.certification_name}}</strong>
                      </h2>
                      
                      <h2 class="span">Certificate Number : <strong>{{audit.certification_number}}</strong></h2>
                      <h2 class="span">Name of Issuing Body :  <strong>{{audit.issuingBody}}</strong></h2>
                      <h2 class="span">Certificate Document : <strong><a target="_blank" :href="audit.certification_id">Click to View</a></strong></h2>
                    </div>
                    <div class="col-sm-6">
                      <div class="float-end">
                        <h2 class="span">Date Issued: <strong>{{getDate(audit.dateOfIssue)}}</strong></h2>
                        <!-- <div>Nigeria</div>
                                                <div>Street Address, Lagos.</div> -->
                        <h2 class="span">
                          Validation Period (From) :  <strong>{{getDate(audit.validityPeriod.from)}}</strong>
                        </h2>
                        <h2 class="span">Validation Period (To) :  <strong>{{getDate(audit.validityPeriod.to)}}</strong></h2>
                        <div v-if="audit.progress == 'pending'">
                            <h2 class="span">Status :  <span style="background: #f98c00;" class="status_btn"><strong>{{audit.progress}}</strong></span></h2>
                        </div>
                        <div v-else-if="audit.progress == 'approved'">
                          <h2 class="span">Status :  <span class="status_btn"><strong>{{audit.progress}}</strong></span></h2>
                        </div>
                        <div v-else>
                          <h2 class="span">Status :  <span style="background: red;" class="status_btn"><strong>{{audit.progress}}</strong></span></h2>
                        </div>
                      </div>
                    </div>
                    <div class="text-center" v-if="audit.progress == 'pending' || audit.progress == 'declined'">
                      <button class="btn btn-mart" @click="approveAudit('approved')" type="button">Approve Audit Certificate</button>
                    </div>

                    <div v-else class="text-center">
                      <button class="btn btn-mart" @click="$router.push('/dashboard/home')" type="button">Back to Dashboard</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 QA_section mb-4" v-if="audit.progress == 'pending' || audit.progress == 'declined'">
              <div class="white_card card_height_100 mb_30 pt-4">
                <div class="white_card_body">
                  <div class="QA_section">
                    <div class="white_box_tittle list_header">
                      <h4>Leave A Comment (Optional)</h4>
                    </div>
                    <div class="row mb-4">
                      <div class="col-md-12">
                        <textarea placeholder="Enter your review" v-model='comment' class="col-md-12 form-control" rows="3">
                          
                        </textarea>
                        <div class="row mt-4">
                          <div class="col-md-6 d-grid gap-2">
                            <button class="btn btn-outline-dark" type="button">Cancel</button>
                          </div>
                          <div class="col-md-6 d-grid gap-2">
                            <button class="btn btn-mart" @click="rejectAudit('declined')" type="button">Reject Audit</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 QA_section mb-4">
              <div class="white_card card_height_100 mb_30 pt-4">
                <div class="white_card_body">
                  <div class="QA_section">
                    <div class="white_box_tittle list_header">
                      <h4>Feedbacks</h4>
                    </div>
                    <div class="row mb-4">
                      <div class="col-md-12">
                        <ul>
                          <li v-for="(item, i) in feedbacks" :key="item._id">
                            <div class="row">
                              <div class="col-md-10">
                                <span>{{item.comment}}</span>
                              </div>
                              <div class="col-md-2">
                                <a @click="deleteFeedback(item._id)" title="Delete Feedback" class="action_btn">
                                  <i class="fas fa-trash"></i>
                                </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!--Main-->
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
  name: "View Audit",
  components: {
    "dash-sidebar": DashSidebar,
    "dash-navbar": DashNavbar,
    "dash-footer": DashFooter,
  },
  mounted() {
    window.scrollTo(0, 0);

    
    this.fetchAudit();
    this.getFeedBacks();
  },
  data() {
    return {
      audit: {
        validityPeriod:''
      },
      token: JSON.parse(localStorage.getItem("user")).token,
      certId: this.$route.params.id,
      comment: '',
      feedbacks: []
    };
  },
  methods: {
    deleteFeedback(value){
      //console.log(value)
      axios.delete(`https://producemart.herokuapp.com/deleteAuditFeedback/${value}`, {
        headers: {
          Authorization: this.token,
        },
      })
      .then(() => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Comment Deleted`,
          showConfirmButton: false,
          timer: 3500
        })
        this.fetchAudit()
        this.getFeedBacks()
      })
    },
    getFeedBacks(){
      axios.get(`https://producemart.herokuapp.com/getAuditFeedbackByAuditId/${this.certId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: this.token,
        },
      })
      .then(res => {
        //console.log(res.data.data)
        this.feedbacks = res.data.data
      })
    },
    approveAudit(value){
      let data = {
        "status": value
      }
      axios.put(`https://producemart.herokuapp.com/updateAuditStatus/${this.certId}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: this.token,
        },
      })
      .then(() => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Certificate Approved`,
          showConfirmButton: false,
          timer: 3500
        })
        this.fetchAudit();
      })
    },
    rejectAudit(value){
      let data = {
        "status": value
      }
      let comment = {
        "comment": this.comment
      }
      axios.put(`https://producemart.herokuapp.com/updateAuditStatus/${this.certId}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: this.token,
        },
      })
      .then(() => {
        axios.post(`https://producemart.herokuapp.com/addAuditFeedback/${this.certId}`, comment, {
          headers: {
            "Content-Type": "application/json",
            Authorization: this.token,
          },
        })
        .then(() => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Certificate Rejected`,
            showConfirmButton: false,
            timer: 3500
          })
          this.fetchAudit();
          this.getFeedBacks();
          this.comment = ''
        })
        
      })
    },
    async fetchAudit() {
      const res = await fetch(
        `https://producemart.herokuapp.com/getAudit/${this.certId}`,
        {
          method: "GET",
          headers: {
            Authorization: this.token,
          },
        }
      );
      const { data } = await res.json();
      //console.log(data)
      this.audit = data
      /*const pending = data.filter(
        (user) => user.status == "pending"
      );*/
    },
    getDate(value){
      return new Date(value).toLocaleDateString()
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