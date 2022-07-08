<template>
  <title>Super Admin Dashboard | Produce Mart</title>
  <dash-sidebar />
  <!--Main Content-->
  <section class="main_content dashboard_part large_header_bg">
    <dash-navbar />

    <div class="main_content_iner overly_inner">
      <div class="container-fluid p-0">
        <!--Breadcrumb-->
        <div class="row">
          <div class="col-12">
            <div class="dashboard_header mb_50">
              <div class="row">
                <div class="col-lg-8">
                  <div class="dashboard_header_title">
                    <h3>
                      {{
                        admin.role
                          .replace(admin.role[0], admin.role[0].toUpperCase())
                          .replace("admin", " Admin")
                      }}
                    </h3>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="dashboard_breadcam text-right">
                    <p>Dashboard</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <!--Top 4 Boxes-->
          <div class="col-xl-12">
            <div class="white_card card_height_100 mb_30 user_crm_wrapper">
              <div class="row">
                <div class="col-lg-4">
                  <div class="crm_box">
                    <h4>{{ dashboardParams && dashboardParams.buyer }}</h4>
                    <p>Buyers</p>
                    <img
                      src="@/assets/img/dashboard-img/dash-buyer.png"
                      ondragstart="return false;"
                    />
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="crm_box">
                    <h4>{{ dashboardParams && dashboardParams.supplier }}</h4>
                    <p>Suppliers</p>
                    <img
                      src="@/assets/img/dashboard-img/dash-seller.png"
                      ondragstart="return false;"
                    />
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="crm_box">
                    <h4>
                      {{
                        dashboardParams &&
                        dashboardParams.pendingProduct +
                          dashboardParams.disableProduct +
                          dashboardParams.activeProduct
                      }}
                    </h4>
                    <p>
                      Products
                      <small v-if="dashboardParams"
                        ><strong>A: </strong
                        >{{ dashboardParams.activeProduct }} <strong>P: </strong
                        >{{ dashboardParams.pendingProduct }}
                        <strong>D: </strong
                        >{{ dashboardParams.disableProduct }}</small
                      >
                    </p>
                    <img
                      src="@/assets/img/dashboard-img/dash-product.png"
                      ondragstart="return false;"
                    />
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="crm_box">
                    <h4>{{ dashboardParams && dashboardParams.quotes }}</h4>
                    <p>Quotes</p>
                    <img
                      src="@/assets/img/dashboard-img/dash-quote.png"
                      ondragstart="return false;"
                    />
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="crm_box">
                    <h4>0</h4>
                    <p>Orders</p>
                    <img
                      src="@/assets/img/dashboard-img/dash-quote.png"
                      ondragstart="return false;"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--Table-->
          <div class="col-lg-12">
            <div class="white_card card_height_100 mb_30">
              <div class="white_card_header">
                <div class="box_header m-0"></div>
              </div>
              <div class="white_card_body">
                <div class="QA_section">
                  <div class="white_box_tittle list_header">
                    <h4>Active Users</h4>
                    <div class="box_right d-flex lms_block">
                      <div class="serach_field_2">
                        <div class="search_inner">
                          <form Active="#">
                            <div class="search_field">
                              <input
                                type="text"
                                placeholder="Search content here..."
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
                  <div class="QA_table mb_30">
                    <table class="table" v-if="filteredUsers">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">Last Login</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(user, i) in filteredUsers" :key="user._id">
                          <th scope="row">{{ i + 1 }}</th>
                          <td>{{ user.firstname }} {{ user.lastname }}</td>
                          <td>{{ user.email }}</td>
                          <td>2022--03-30</td>
                          <td><a href="#" class="status_btn">Active</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Recent Notification
          <div class="col-xl-3">
            <div class="white_card card_height_100 mb_30">
              <div class="white_card_header">
                <div class="box_header m-0">
                  <div class="main-title">
                    <h3 class="m-0">Recent Notification</h3>
                  </div>
                  <div class="header_more_tool">
                    <div class="dropdown">
                      <span
                        class="dropdown-toggle"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="bi bi-three-dots"></i>
                      </span>
                      <div
                        class="dropdown-menu dropdown-menu-right"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a class="dropdown-item" href="#">
                          <i class="bi bi-printer"></i> Print</a
                        >
                        <a class="dropdown-item" href="#">
                          <i class="bi bi-download"></i> Download</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="white_card_body">
                <div class="Activity_timeline">
                  <ul>
                    <li>
                      <div class="activity_bell"></div>
                      <div class="timeLine_inner d-flex align-items-center">
                        <div class="activity_wrap">
                          <h6>5 min ago</h6>
                          <p>You've gotten a new notification</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="activity_bell"></div>
                      <div class="timeLine_inner d-flex align-items-center">
                        <div class="activity_wrap">
                          <h6>5 min ago</h6>
                          <p>You've gotten a new notification</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="activity_bell"></div>
                      <div class="timeLine_inner d-flex align-items-center">
                        <div class="activity_wrap">
                          <h6>5 min ago</h6>
                          <p>You've gotten a new notification</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> -->

          <!--Chart Bar-->
          <!-- <div class="col-xl-7">
            <div class="white_card mb_30 card_height_100">
              <div class="white_card_header">
                <div
                  class="row align-items-center justify-content-between flex-wrap"
                >
                  <div class="col-lg-4">
                    <div class="main-title">
                      <h3 class="m-0">Sales History</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="white_card_body">
                <div id="chartBar"></div>
              </div>
            </div>
          </div> -->

          <!--Chart Pie-->
          <!-- <div class="col-xl-5">
            <div class="white_card card_height_100 mb_30">
              <div class="white_card_header">
                <div class="box_header m-0">
                  <div class="main-title">
                    <h3 class="m-0">Stats</h3>
                  </div>
                </div>
              </div>
              <div>
                <div id="chartPie"></div>
              </div>
            </div>
          </div> -->

          <!--New Users-->
          <!-- <div class="col-xl-8">
            <div class="white_card card_height_100 mb_30">
              <div class="white_card_header">
                <div class="row align-items-center">
                  <div class="box_header m-0 mb-3">
                    <div class="main-title"></div>
                    <div class="header_more_tool">
                      <div class="dropdown">
                        <span
                          class="dropdown-toggle"
                          id="dropdownMenuButton"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i class="bi bi-three-dots"></i>
                        </span>
                        <div
                          class="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a class="dropdown-item" href="#">
                            <i class="bi bi-printer"></i> Print</a
                          >
                          <a class="dropdown-item" href="#">
                            <i class="bi bi-download"></i> Download</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="main-title">
                      <h3 class="m-0">New Users</h3>
                    </div>
                  </div>
                  <div class="col-lg-8">
                    <div class="row justify-content-end">
                      <div class="col-lg-8 d-flex justify-content-end">
                        <div
                          class="serach_field-area theme_bg d-flex align-items-center"
                        >
                          <div class="search_inner">
                            <form action="#">
                              <div class="search_field">
                                <input type="text" placeholder="Search" />
                              </div>
                              <button type="submit">
                                <img
                                  src="@/assets/img/icon/icon_search.svg"
                                  alt=""
                                />
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="white_card_body">
                <div
                  class="single_user_pil d-flex align-items-center justify-content-between mb-0"
                >
                  <div class="user_pils_thumb d-flex align-items-center">
                    <div class="thumb_34 mr_15 mt-0">
                      <img
                        class="@/assets/img-fluid radius_50"
                        src="@/assets/img/customers/1.png"
                        alt=""
                      />
                    </div>
                    <span class="f_s_14 f_w_400 text_color_11">John Smith</span>
                  </div>
                  <div class="user_info">Seller</div>
                  <div class="action_btns d-flex">
                    <a href="#" class="action_btn mr_10">
                      <i class="far fa-edit"></i>
                    </a>
                    <a href="#" class="action_btn">
                      <i class="fas fa-trash"></i>
                    </a>
                  </div>
                </div>
                <div
                  class="single_user_pil d-flex align-items-center justify-content-between mb-0"
                >
                  <div class="user_pils_thumb d-flex align-items-center">
                    <div class="thumb_34 mr_15 mt-0">
                      <img
                        class="@/assets/img-fluid radius_50"
                        src="@/assets/img/customers/1.png"
                        alt=""
                      />
                    </div>
                    <span class="f_s_14 f_w_400 text_color_11"
                      >Victor Smart</span
                    >
                  </div>
                  <div class="user_info">Seller</div>
                  <div class="action_btns d-flex">
                    <a href="#" class="action_btn mr_10">
                      <i class="far fa-edit"></i>
                    </a>
                    <a href="#" class="action_btn">
                      <i class="fas fa-trash"></i>
                    </a>
                  </div>
                </div>
                <div
                  class="single_user_pil d-flex align-items-center justify-content-between mb-0"
                >
                  <div class="user_pils_thumb d-flex align-items-center">
                    <div class="thumb_34 mr_15 mt-0">
                      <img
                        class="@/assets/img-fluid radius_50"
                        src="@/assets/img/customers/1.png"
                        alt=""
                      />
                    </div>
                    <span class="f_s_14 f_w_400 text_color_11">Chukka Eke</span>
                  </div>
                  <div class="user_info">Buyer</div>
                  <div class="action_btns d-flex">
                    <a href="#" class="action_btn mr_10">
                      <i class="far fa-edit"></i>
                    </a>
                    <a href="#" class="action_btn">
                      <i class="fas fa-trash"></i>
                    </a>
                  </div>
                </div>
                <div
                  class="single_user_pil d-flex align-items-center justify-content-between mb-0"
                >
                  <div class="user_pils_thumb d-flex align-items-center">
                    <div class="thumb_34 mr_15 mt-0">
                      <img
                        class="@/assets/img-fluid radius_50"
                        src="@/assets/img/customers/1.png"
                        alt=""
                      />
                    </div>
                    <span class="f_s_14 f_w_400 text_color_11">Nath Timi</span>
                  </div>
                  <div class="user_info">Buyer</div>
                  <div class="action_btns d-flex">
                    <a href="#" class="action_btn mr_10">
                      <i class="far fa-edit"></i>
                    </a>
                    <a href="#" class="action_btn">
                      <i class="fas fa-trash"></i>
                    </a>
                  </div>
                </div>
                <div
                  class="single_user_pil d-flex align-items-center justify-content-between mb-0"
                >
                  <div class="user_pils_thumb d-flex align-items-center">
                    <div class="thumb_34 mr_15 mt-0">
                      <img
                        class="@/assets/img-fluid radius_50"
                        src="@/assets/img/customers/1.png"
                        alt=""
                      />
                    </div>
                    <span class="f_s_14 f_w_400 text_color_11"
                      >Promise Stephen</span
                    >
                  </div>
                  <div class="user_info">Seller</div>
                  <div class="action_btns d-flex">
                    <a href="#" class="action_btn mr_10">
                      <i class="far fa-edit"></i>
                    </a>
                    <a href="#" class="action_btn">
                      <i class="fas fa-trash"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
          <!--Chart Circle-->
          <!-- <div class="col-xl-4">
            <div class="white_card card_height_100 mb_30">
              <div class="white_card_header">
                <div class="box_header m-0">
                  <div class="main-title">
                    <h3 class="m-0">Sales of the last week</h3>
                  </div>
                </div>
              </div>
              <div class="white_card_body">
                <div id="chartCircle"></div>
                <div class="monthly_plan_wraper">
                  <div
                    class="single_plan d-flex align-items-center justify-content-between"
                  >
                    <div class="plan_left d-flex align-items-center">
                      <div class="thumb">
                        <img src="@/assets/img/icon2/7.svg" alt="" />
                      </div>
                      <div>
                        <h5>Most Sales</h5>
                        <span>Authors with the best sales</span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="single_plan d-flex align-items-center justify-content-between"
                  >
                    <div class="plan_left d-flex align-items-center">
                      <div class="thumb">
                        <img src="@/assets/img/icon2/6.svg" alt="" />
                      </div>
                      <div>
                        <h5>Total sales lead</h5>
                        <span>40% increased on week-to-week reports</span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="single_plan d-flex align-items-center justify-content-between"
                  >
                    <div class="plan_left d-flex align-items-center">
                      <div class="thumb">
                        <img src="@/assets/img/icon2/5.svg" alt="" />
                      </div>
                      <div>
                        <h5>Average Bestseller</h5>
                        <span>Pitstop Email Marketing</span>
                      </div>
                    </div>
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
  name: "dashboard",
  computed: {},
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  },

  data() {
    return {
      users: null,
      dashboardParams: null,
      admin: JSON.parse(localStorage.getItem("user")),
      search: "",
    };
  },
  computed: {
    filteredUsers() {
      if (this.users) {
        return this.users.filter(
          (user) =>
            user.firstname.toLowerCase().includes(this.search.toLowerCase()) ||
            user.lastname.toLowerCase().includes(this.search.toLowerCase())
        );
      }
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/admin//login");
    },
    async fetchUsers() {
      this.users = null;
      const res = await fetch("https://producemart.herokuapp.com/getAllUsers");
      const { data } = await res.json();
      this.users =
        this.admin.role == "superadmin"
          ? data
          : data.filter(
              (admin) => admin.role == "supplier" || admin.role == "buyer"
            );
      console.log(this.users[0].role);
      console.log(data);
    },
    async getDashboardParam() {
      const res = await fetch("https://producemart.herokuapp.com/getDashboard");
      const { data } = await res.json();
      console.log(data);
      this.dashboardParams = data;
    },
  },
  mounted() {
    this.fetchUsers();
    this.getDashboardParam();
    ////chartBar
    var options = {
      chart: {
        type: "area",
        height: 300,
        foreColor: "#000",
        stacked: true,
        dropShadow: {
          enabled: true,
          enabledSeries: [0],
          top: -2,
          left: 2,
          blur: 5,
          opacity: 0.06,
        },
      },
      colors: ["#00E396", "#008FFB"],
      stroke: {
        curve: "smooth",
        width: 3,
      },
      dataLabels: {
        enabled: false,
      },
      series: [
        {
          name: "Total Sales",
          data: generateDayWiseTimeSeries(0, 18),
        },
        {
          name: "Total Views",
          data: generateDayWiseTimeSeries(1, 18),
        },
      ],
      markers: {
        size: 0,
        strokeColor: "#fff",
        strokeWidth: 3,
        strokeOpacity: 1,
        fillOpacity: 1,
        hover: {
          size: 6,
        },
      },
      xaxis: {
        type: "datetime",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          offsetX: 14,
          offsetY: -5,
        },
        tooltip: {
          enabled: true,
        },
      },
      grid: {
        padding: {
          left: -5,
          right: 5,
        },
      },
      tooltip: {
        x: {
          format: "dd MMM yyyy",
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
      },
      fill: {
        type: "solid",
        fillOpacity: 0.7,
      },
    };
    var chart = new ApexCharts(document.querySelector("#chartBar"), options);
    chart.render();

    function generateDayWiseTimeSeries(s, count) {
      var values = [
        [2, 3, 8, 7, 22, 16, 23, 7, 11, 5, 12, 5, 10, 4, 15, 2, 6, 2],
        [4, 3, 10, 9, 29, 19, 25, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
      ];
      var i = 0;
      var series = [];
      var x = new Date("03 Mar 2022").getTime();
      while (i < count) {
        series.push([x, values[s][i]]);
        x += 86400000;
        i++;
      }
      return series;
    }

    ////chartPie
    var options = {
      chart: {
        height: 280,
        type: "pie",
        toolbar: {
          show: true,
          tools: {
            download: true,
          },
          autoSelected: "zoom",
        },
      },
      series: [1, 3, 2],
      labels: ["Buyers", "Sellers", "Orders"],
    };
    var chart = new ApexCharts(document.querySelector("#chartPie"), options);
    chart.render();

    ////chartCircle
    var options = {
      chart: {
        type: "donut",
        toolbar: {
          show: true,
          tools: {
            download: true,
          },
          autoSelected: "zoom",
        },
      },
      dataLabels: {
        enabled: false,
      },
      series: [44, 55, 13],
      labels: ["Sales", "Bestseller", "Total Sales"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              show: false,
            },
          },
        },
      ],
      legend: {
        position: "right",
        offsetX: -40,
        offsetY: 0,
        height: 250,
      },
    };
    var chart = new ApexCharts(document.querySelector("#chartCircle"), options);
    chart.render();

    ////Scroll To Top
    window.scrollTo(0, 0);

    ////Custom JS
    let externalScriptCustom = document.createElement("script");
    externalScriptCustom.setAttribute(
      "src",
      "https://cdn.statically.io/gh/NathTimi/Mart-script/main/custom.js"
    );
    document.head.appendChild(externalScriptCustom);
  },
};
</script>
