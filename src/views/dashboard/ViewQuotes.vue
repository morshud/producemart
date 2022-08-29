<template>
  <title>View Quotes - Super Admin Dashboard | Produce Mart</title>
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
                    <h3>View Quotes</h3>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="dashboard_breadcam text-right">
                    <p>
                      <router-link to="/dashboard/home"
                        ><a>Dashboard</a></router-link
                      >
                      <i class="fas fa-caret-right"></i> View Quotes
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
                    <div class="box_right d-flex lms_block">
                      <div class="serach_field_2">
                        <div class="search_inner">
                          <form Active="#">
                            <div class="search_field">
                              <input type="text" placeholder="Search here..." />
                            </div>
                            <button type="submit">
                              <i class="bi bi-search"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="QA_table mb_30">
                    <table class="table lms_table_active">
                      <thead>
                        <tr>
                          <th scope="col">S/N</th>
                          <th scope="col">Quotes ID</th>
                          <th scope="col">From</th>
                          <th scope="col">Email</th>
                          <th scope="col">Date</th>
                          <th scope="col">Status</th>
                          <th scope="col">Link</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, i) in quotes" :key="item.id">
                          <th scope="row">{{ i + 1 }}</th>
                          <td>#{{ item._id }}</td>
                          <td>Supplier - {{ item.supplier.company_name }}</td>
                          <td>{{ item.buyer.email }}</td>
                          <td>
                            {{
                              new Date(item.createdAt)
                                .toISOString()
                                .slice(0, 10)
                            }}
                          </td>
                          <td></td>
                          <td>
                            <router-link :to="'/dashboard/quotes/' + item._id"
                              ><button class="status_view">
                                View
                              </button></router-link
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <!-- <nav aria-label="Page navigation example" class="m-2">
                      <ul class="pagination justify-content-end">
                        <li class="page-item disabled">
                          <a
                            class="page-link"
                            href="#"
                            tabindex="-1"
                            aria-disabled="true"
                            >Previous</a
                          >
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">1</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">3</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">Next</a>
                        </li>
                      </ul>
                    </nav> -->
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
import QUOTE from "../../service/quote-service";
export default {
  name: "Produce Mart",
  components: {
    "dash-sidebar": DashSidebar,
    "dash-navbar": DashNavbar,
    "dash-footer": DashFooter,
  },
  data() {
    return {
      quotes: [],
    };
  },
  created() {
    this.getQuotes();
  },
  methods: {
    getQuotes() {
      QUOTE.getQuotes().then((res) => {
        this.quotes = res.data.data;
        console.log(res.data);
      });
    },
  },
  mounted() {
    window.scrollTo(0, 0);

    
  },
};
</script>
