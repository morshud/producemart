<template>
  <div>
    <title>Certification - Supplier Dashboard | Produce Mart</title>
    <dash-sidebar />
    <section class="main_content dashboard_part large_header_bg">
      <dash-navbar />
      <!--Main Content-->
      <div class="main_content_iner">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <!--Breadcrumb-->
            <div class="col-12">
              <div class="dashboard_header mb_50">
                <div class="row">
                  <div class="col-lg-8">
                    <div class="dashboard_header_title">
                      <h3>Upload Certificate</h3>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="dashboard_breadcam text-right">
                      <p>
                        <router-link to="/supplier-dashboard/home"
                          ><a>Dashboard</a>
                        </router-link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--Mail Sidebar-->
            <div class="col-lg-12 mb-3">
              <h5 class="">
                Provide your certification info and documents to become a
                certified supplier
              </h5>
            </div>
            <div class="col-md-12 white_box editProfile">
              <form @submit.prevent="uploadAuditCert">
              <div class="row d-flex">
                <div class="row my-3">
                  <div class="col">
                    <div class="form-group">
                      <label for="certificate name">Certificate Name</label>
                      <input
                        type="text"
                        v-model="file[1].name"
                        class="form-control"
                        required
                        id=""
                      />
                    </div>
                  </div>
                </div>
                <div class="row my-3">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="">Certificate Number</label>
                      <input
                        type="text"
                        v-model="file[1].cert_number"
                        id=""
                        required
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="">Date Issued</label>
                      <input
                        type="date"
                        required
                        v-model="file[1].dateOfIssue"
                        class="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div class="row my-3">
                  <div class="col">
                    <div class="form-group">
                      <label for="">Name of Issuing Body</label>
                      <input
                        type="text"
                        v-model="file[1].issuingBody"
                        id=""
                        required
                        class="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div class="row my-3">
                  <label>Validation Period</label>
                  <div class="col">
                    <div class="form-group">
                      <label for="">From</label>
                      <input
                        type="date"
                        v-model="file[1].periodFrom"
                        id=""
                        required
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <label for="">To</label>
                      <input
                        type="date"
                        v-model="file[1].periodTo"
                        id=""
                        class="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div class="row my-3">
                  <div class="col">
                    <div class="form-group">
                      <label>Upload Certification</label>
                      <input
                        type="file"
                        class="input form-control"
                        required
                        @change="onFileChange(1)"
                      />
                    </div>
                  </div>
                </div>
                <div class="row my-3">
                  <div v-if="addFile.length">
                    <div
                      class="row add-more-certi"
                      v-for="(newFile, i) in addFile"
                      :key="i"
                    >
                      <div class="row my-3">
                        <div class="col">
                          <div class="form-group">
                            <label for="certificate name"
                              >Certificate Name</label
                            >
                            <input
                              type="text"
                              v-model="file[newFile].name"
                              class="form-control"
                              required
                              id=""
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row my-3">
                        <div class="col">
                          <div class="form-group">
                            <label for="">Certificate Number</label>
                            <input
                              type="text"
                              v-model="file[newFile].cert_number"
                              id=""
                              class="form-control"
                            />
                          </div>
                        </div>
                        <div class="col">
                          <div class="form-group">
                            <label for="">Date Issued</label>
                            <input
                              type="date"
                              v-model="file[newFile].dateOfIssue"
                              id=""
                              class="form-control"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row my-3">
                        <div class="col">
                          <div class="form-group">
                            <label for="">Name of Issuing Body</label>
                            <input
                              type="text"
                              v-model="file[newFile].issuingBody"
                              id=""
                              class="form-control"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row my-3">
                        <legend>Validation Period</legend>
                        <div class="col">
                          <div class="form-group">
                            <label for="">From</label>
                            <input
                              type="date"
                              v-model="file[newFile].periodFrom"
                              id=""
                              class="form-control"
                            />
                          </div>
                        </div>
                        <div class="col">
                          <div class="form-group">
                            <label for="">To</label>
                            <input
                              type="date"
                              v-model="file[newFile].periodTo"
                              id=""
                              class="form-control"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row my-3">
                        <div class="col my-3">
                          <div class="form-group">
                            <label>Upload Certification</label>
                            <input
                              type="file"
                              class="input form-control"
                              @change="onFileChange(newFile)"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row my-3">
                        <div class="col">
                          <span @click="removeFile(newFile)" class="removeField"
                            >Remove Field</span
                          >
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="upload-certi-dynamic"></div>
                  </div>
                  <div class="uploadMore" v-if="addFile.length < 3">
                    <span @click="addMoreCert"
                      >Upload More <i class="bi bi-plus-circle"></i
                    ></span>
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col d-grid gap-2">
                    <button type="button" class="btn btn-outline-dark">Cancel</button>
                  </div>
                  <div class="col d-grid gap-2">
                    <button type="submit" class="btn btn-dark">Proceed</button>
                  </div>
                </div>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
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
import Swal from 'sweetalert2';
import axios from "axios";
export default {
  name: "Produce Mart",
  components: {
    "dash-sidebar": DashSidebar,
    "dash-navbar": DashNavbar,
    "dash-footer": DashFooter,
  },
  data() {
    return {
      audit: "",
      token: JSON.parse(localStorage.getItem("user")).token,
      image: {},
      imgSizeMsg: "",
      addImg: [],
      cert_name: "",
      file: { 1: {} },
      addFile: [],
      displayImg: [],
    };
  },
  computed: {
    /* isDisabled() {
      if (this.file == "") {
        return true;
      } else {
        return false;
      }
    }, */
  },
  methods: {
    uploadAuditCert() {
      console.log(this.file);
      const fd = new FormData();
      if (this.file) {
        for (let cert in this.file) {
          fd.append("file", this.file[cert].img);
          fd.append("cert_name", this.file[cert].name);
          fd.append("cert_no", this.file[cert].cert_number);
          fd.append("dateOfIssue", this.file[cert].dateOfIssue);
          fd.append("issuingBody", this.file[cert].issuingBody);
          fd.append("periodFrom", this.file[cert].periodFrom);
          fd.append("periodTo", this.file[cert].periodTo);
        }
      }
      axios.post('https://producemart.herokuapp.com/addAudit', fd, {
        headers: {
          Authorization: this.token,
        },
      })
      .then(res => {
      console.log(res);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Certificate upload successful`,
          showConfirmButton: false,
          timer: 3500
        })
        this.$router.push('/supplier-dashboard/home')
      })
    },
    onFileChange(n) {
      this.file[n].img = event.target.files[0];
      //console.log(this.file);
    },
    onFieldChange(n) {
      this.imgSizeMsg = "";
      this.image[n] = event.target.files[0];
      // console.log(this.image[n].size);
      if (this.image[n].size < 250000) {
        this.displayImg[n - 1] = URL.createObjectURL(this.image[n]);
      } else {
        this.imgSizeMsg =
          "***File too large, image upload should not be more than 200kb***";
        delete this.image[n];
        this.displayImg[n - 1] && this.displayImg.pop();
      }

      // console.log(this.displayImg[n - 1]);
    },
    removeDispImg(n) {
      this.displayImg.splice(n, 1);
      delete this.image[n];
    },
    removeField(n) {
      this.displayImg.splice(n, 1);
      delete this.image[n];
      this.addImg.splice(n - 1, 1);
    },
    addMoreCert() {
      this.addFile.push(this.addFile.length + 2);
      this.file[this.addFile.length + 1] = {};
    },
    removeFile(n) {
      this.addFile.pop();
      delete this.file[n];
    },
    removeFileUpload(n) {
      delete this.file[n].img;
      //this.$refs["fileUpload"].value = null;
    },
  },
};
</script>
