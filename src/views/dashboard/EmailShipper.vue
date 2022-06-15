<template>
  <title>Shipper Email - Super Admin Dashboard | Produce Mart</title>
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
                    <h3>Mail Box (Shipper)</h3>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="dashboard_breadcam text-right">
                    <p>
                      <router-link to="/dashboard/home"
                        ><a>Dashboard</a></router-link
                      >
                      <i class="fas fa-caret-right"></i> Mailbox
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Main Mail-->
          <div class="col-md-12">
            <div class="white_box QA_section mb_30">
              <div class="white_box_tittle list_header">
                <div class="box_right d-flex lms_block">
                  <div class="serach_field_2">
                    <div class="search_inner">
                      <form>
                        <div class="search_field">
                          <input
                            type="text"
                            placeholder="Search content here..."
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
              <div class="QA_table">
                <table class="table lms_table_active">
                  <thead>
                    <tr>
                      <th scope="col">
                        <label class="primary_checkbox d-flex mr-12">
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                      </th>
                      <!-- <th scope="col">name</th> -->
                      <th scope="col">Action</th>
                      <th scope="col">Content</th>
                      <th scope="col">Last Update</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(mail, i) in mails" :key="i">
                      <th scope="row">
                        <label class="primary_checkbox d-flex mr-12">
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                      </th>
                      <!-- <td>
                        <div class="media align-items-center">
                          <div class="media-body">
                            <p>Mark Wiyns</p>
                          </div>
                        </div>
                      </td> -->
                      <td>
                        <p>{{ mail.action }}</p>
                      </td>
                      <td>
                        <p>
                          {{ mail.content }}
                        </p>
                      </td>
                      <td>{{ mail.updatedAt }}</td>
                      <td>
                        <div class="action_btns d-flex">
                          <router-link
                            :to="'/products/edit-shipper-email/' + mail._id"
                            target="_blank"
                            title="Edit"
                            class="action_btn mr_10"
                          >
                            <i class="far fa-edit"></i>
                          </router-link>
                          <span
                            title="Disable"
                            class="action_btn"
                            @click="deleteMail(mail._id)"
                          >
                            <i class="fas fa-trash"></i>
                          </span>
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
    this.fetchEmail();
  },
  data() {
    return {
      mails: null,
      token: JSON.parse(localStorage.getItem("user")).token,
    };
  },
  methods: {
    async fetchEmail() {
      const res = await fetch(
        "https://producemart.herokuapp.com/getEmailByRole",
        {
          method: "GET",
          headers: {
            Authorization: this.token,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      const { data } = await res.json();
      this.mails = data.filter((mail) => mail.type == "shipper");
      console.log(data);
    },
    async deleteMail(id) {
      console.log("testing");
      const res = await fetch(
        "https://producemart.herokuapp.com/deleteEmail/" + id,
        {
          method: "DELETE",
          headers: {
            Authorization: this.token,
          },
        }
      );
      console.log(res);
      if (res.ok) {
        this.fetchEmail();
      }
    },
  },
};
</script>
