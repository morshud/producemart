<template>
    <title>Supplier Dashboard | Produce Mart</title>
    <dash-sidebar/>
    <!--Main Content-->
    <section class="main_content dashboard_part large_header_bg">
        <dash-navbar/>

        <div class="main_content_iner overly_inner ">
            <div class="container-fluid p-0">
                <!--Breadcrumb-->
                <div class="row">
                    <div class="col-12">
                        <div class="dashboard_header mb_50">
                            <div class="row">
                                <div class="col-lg-8">
                                    <div class="dashboard_header_title">
                                        <h3>Supplier Dashboard</h3>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="dashboard_breadcam text-right">
                                        <p>
                                            Dashboard
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-12 text-center alertDashMessage mb-4">
                        <p><i class="bi bi-info-circle-fill"></i> <router-link to="/supplier-dashboard/request-audit">Complete your audit so you can upload your products.</router-link></p>
                    </div>  
                    <!--Top 4 Boxes-->
                    <div class="col-xl-12">
                        <div class="white_card card_height_100 mb_30 user_crm_wrapper">
                            <div class="row">
                                <div class="col-lg-3">
                                    <router-link to="/supplier-dashboard/request-audit">
                                        <div class="crm_box crmBoxDanger">
                                            <h4>Audit</h4>
                                            <p>Certifications</p>
                                            <img src="@/assets/img/dashboard-img/dash-certificate.png" ondragstart="return false;">
                                        </div>
                                    </router-link>
                                </div>
                                <div class="col-lg-3">
                                    <div class="crm_box">
                                        <h4>5,455</h4>
                                        <p>Total Orders</p>
                                        <img src="@/assets/img/dashboard-img/totalOrder.png" ondragstart="return false;">
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="crm_box">
                                        <h4>100,000</h4>
                                        <p>Total Sales</p>
                                        <img src="@/assets/img/dashboard-img/totalSales.png" ondragstart="return false;">
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="crm_box">
                                        <h4>5,300</h4>
                                        <p>Total Products</p>
                                        <img src="@/assets/img/dashboard-img/totalProduct.png" ondragstart="return false;">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--Table-->
                    <div class="col-lg-9">
                        <div class="white_card card_height_100 mb_30">
                            <div class="white_card_header">
                                <div class="box_header m-0">
                                </div>
                            </div>
                            <div class="white_card_body">
                                <div class="QA_section">
                                    <div class="white_box_tittle list_header">
                                    <h4>Recent Orders</h4>
                                    <div class="box_right d-flex lms_block">
                                        <div class="serach_field_2">
                                            <div class="search_inner">
                                                <form Active="#">
                                                <div class="search_field">
                                                    <input type="text" placeholder="Search content here...">
                                                </div>
                                                <button type="submit"><i class="bi bi-search"></i> </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="QA_table mb_30">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Order ID</th>
                                                <th scope="col">Product Name</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Order Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Cocoa-QBL-38L20</td>
                                                <td>Cocoa</td>
                                                <td>100 bags</td>
                                                <td>2022--03-31</td>
                                                <td><a href="#" class="status_await">Awaiting Inspection</a></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Banana-BNL-324LL</td>
                                                <td>Banana</td>
                                                <td>250 bags</td>
                                                <td>2022--03-25</td>
                                                <td><a href="#" class="status_await">Awaiting Shipping</a></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Oil-RBL-2029G</td>
                                                <td>Oil</td>
                                                <td>1200 ltrs</td>
                                                <td>2022--03-20</td>
                                                <td><a href="#" class="status_btn-pending">Awaiting Delivery</a></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Beans-WER-G29G</td>
                                                <td>Beans</td>
                                                <td>50 bags</td>
                                                <td>2022--03-10</td>
                                                <td><a href="#" class="status_btn">Delivered</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--Recent Notification-->
                    <div class="col-xl-3">
                        <div class="white_card card_height_100 mb_30">
                            <div class="white_card_header">
                                <div class="box_header m-0">
                                    <div class="main-title">
                                    <h3 class="m-0">Recent Notification</h3>
                                    </div>
                                    <div class="header_more_tool">
                                        <div class="dropdown">
                                            <span class="dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="bi bi-three-dots"></i>
                                            </span>
                                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                                <a class="dropdown-item" href="#"> <i class="bi bi-printer"></i> Print</a>
                                                <a class="dropdown-item" href="#"> <i class="bi bi-download"></i> Download</a>
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
                                            <div class="activity_bell "></div>
                                            <div class="timeLine_inner d-flex align-items-center">
                                                <div class="activity_wrap">
                                                    <h6>5 min ago</h6>
                                                    <p>You've gotten a new notification</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="activity_bell "></div>
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
                    </div>
                    <!--Chart Bar-->
                    <div class="col-xl-7">
                        <div class="white_card mb_30 card_height_100">
                            <div class="white_card_header">
                                <div class="row align-items-center justify-content-between flex-wrap">
                                    <div class="col-lg-4">
                                    <div class="main-title">
                                        <h3 class="m-0">Sales Analysis</h3>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="white_card_body">
                                <div id="chartBar"></div>
                            </div>
                        </div>
                    </div>
                    <!--Chart Circle-->
                    <div class="col-xl-4">
                        <div class="white_card card_height_100 mb_30">
                        <div class="white_card_header">
                            <div class="box_header m-0">
                                <div class="main-title">
                                    <h3 class="m-0">Order Analysis</h3>
                                </div>
                            </div>
                        </div>
                        <div class="white_card_body">
                            <div id="chartCircle"></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <dash-footer/>
    </section>
</template>
<style scoped src="@/assets/vendors/themefy_icon/themify-icons.css"></style>
<style scoped src="@/assets/vendors/niceselect/css/nice-select.css"></style>
<style scoped src="@/assets/css/style.css"></style>
<script>
    import DashSidebar from './dash-sidebar.vue'
    import DashNavbar from './dash-navbar.vue'
    import DashFooter from './dash-footer.vue'
    export default {
      name: "Produce Mart",
      components:{
      'dash-sidebar': DashSidebar,
      'dash-navbar': DashNavbar,
      'dash-footer': DashFooter,
      },
      mounted(){
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
                opacity: 0.06
                }
            },
            colors: ["#00E396", "#008FFB"],
            stroke: {
                curve: "smooth",
                width: 3
            },
            dataLabels: {
                enabled: false
            },
            series: [
                {
                name: "Total Sales",
                data: generateDayWiseTimeSeries(0, 18)
                },
                {
                name: "Total Views",
                data: generateDayWiseTimeSeries(1, 18)
                }
            ],
            markers: {
                size: 0,
                strokeColor: "#fff",
                strokeWidth: 3,
                strokeOpacity: 1,
                fillOpacity: 1,
                hover: {
                size: 6
                }
            },
            xaxis: {
                type: "datetime",
                axisBorder: {
                show: false
                },
                axisTicks: {
                show: false
                }
            },
            yaxis: {
                labels: {
                offsetX: 14,
                offsetY: -5
                },
                tooltip: {
                enabled: true
                }
            },
            grid: {
                padding: {
                left: -5,
                right: 5
                }
            },
            tooltip: {
                x: {
                format: "dd MMM yyyy"
                }
            },
            legend: {
                position: "top",
                horizontalAlign: "left"
            },
            fill: {
                type: "solid",
                fillOpacity: 0.7
            }
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

            ////chartCircle
            var options = {
                chart: {
                    type: "donut",
                     "toolbar": {
                        "show": true,
                        "tools": {
                            "download": true,
                        },
                        "autoSelected": "zoom"
                    },
                },
                dataLabels: {
                    enabled: false
                },
                series: [18, 18, 18, 45],
                "labels": ["Cocoa", "Banana", "Palm Oil", "Beans"],
                responsive: [
                    {
                    breakpoint: 480,
                    options: {
                        chart: {
                        width: 300
                        },
                        legend: {
                        show: false
                        }
                    }
                    }
                ],
                legend: {
                    position: "right",
                    offsetX: -40,
                    offsetY: 0,
                    height: 250
                }
            };
            var chart = new ApexCharts(document.querySelector("#chartCircle"), options);
            chart.render();

            ////Scroll To Top
            window.scrollTo(0,0)

            ////Custom JS
            let externalScriptCustom = document.createElement('script')
            externalScriptCustom.setAttribute('src', 'https://cdn.statically.io/gh/NathTimi/Mart-script/main/custom.js')
            document.head.appendChild(externalScriptCustom)
      }
    }
</script>