<template>
    <title>Cancelled Orders - Supplier Dashboard | Produce Mart</title>
    <dash-sidebar/>

    <section class="main_content dashboard_part large_header_bg">
        <dash-navbar/>
        <!--Main Content-->
        <div class="main_content_iner ">
            <div class="container-fluid p-0">
                <div class="row justify-content-center">
                    <!--Breadcrumb-->
                    <div class="col-12">
                        <div class="dashboard_header mb_50">
                            <div class="row">
                                <div class="col-lg-8">
                                    <div class="dashboard_header_title">
                                    <h3>Order Product Name Here</h3>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="dashboard_breadcam text-right">
                                        <p>
                                            <router-link to="/supplier-dashboard/home"><a>Dashboard</a></router-link> <i class="fas fa-caret-right"></i> <router-link to="/supplier-dashboard/cancelled-orders"><a>Cancelled Orders</a></router-link> <i class="fas fa-caret-right"></i> Order Product Name Here
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--Main-->
                    <div class="col-md-12">
                        <div class="mb-3">
                            <router-link to="/supplier-dashboard/cancelled-orders" class="backToPage"><i class="bi bi-arrow-bar-left"></i> Back to Cancelled Orders</router-link>
                        </div>
                        <div class="row justify-content-center summaryBox">
                            <div class="col-lg-12">
                                <h1>Quote Summary</h1>
                                <div class="lineHr"></div>
                            </div>
                            <div class="col-lg-3">
                                <div class="productImgDiv">
                                    <img src="@/assets/img/products/product1.png" />
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <table>
                                    <tr>
                                        <td class="mainText">Product Name: </td>
                                        <td class="contentText"><span class="statustable">Bana- 197621</span></td>
                                    </tr>
                                    <tr>
                                        <td class="mainText">estimated weight:</td>
                                        <td class="contentText">200kg</td>
                                    </tr>
                                    <tr>
                                        <td class="mainText">time of request:</td>
                                        <td class="contentText">10:00am</td>
                                    </tr>
                                    
                                </table>
                            </div>
                            <div class="col-lg-4">
                                <table>
                                    <tr>
                                        <td class="mainText">date of request:</td>
                                        <td class="contentText">25-May-2022</td>
                                    </tr>
                                    <tr>
                                        <td class="mainText">estimated cost:</td>
                                        <td class="contentText">$100,000</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div class="container-fluid orderProcessSteps" id="orderProgress">
                        <div class="row justify-content-center">
                            <div class="col-lg-12 text-center p-0 mt-3 mb-2">
                                <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
                                    <form id="msform">
                                        <fieldset>
                                            <div class="form-card">
                                                <div class="row justify-content-center">
                                                    <div class="col-12 mb-2">
                                                        <h2 class="fs-title">Orders Status</h2>
                                                    </div>
                                                    <div class="col-12 boxWhite">
                                                        <div class="row justify-content-center">
                                                            <div class="col-lg-8 text-center">
                                                                <img src="@/assets/img/dashboard-img/cancelledorder.png">
                                                                <h6>Unfortunately, this order has been terminated by the buyer. Go back to the dashbord to see your other orders</h6>
                                                                <a href="/supplier-dashboard" class="btnA">Go Back to Dashboard </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <input type="button" name="next" class="next action-button" value="Done" @click="doneOrderProgress()" />
                                        </fieldset>
                                    </form>
                                </div>
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
<style scoped src="@/assets/css/styleSupport.css"></style>
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
        window.scrollTo(0,0)

        $(document).ready(function(){

            var current_fs, next_fs, previous_fs; //fieldsets
            var opacity;
            var current = 1;
            var steps = $("fieldset").length;

            setProgressBar(current);

            $(".next").click(function(){

                current_fs = $(this).parent();
                next_fs = $(this).parent().next();

                //Add Class Active
                $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

                //show the next fieldset
                next_fs.show();
                //hide the current fieldset with style
                current_fs.animate({opacity: 0}, {
                step: function(now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                'display': 'none',
                'position': 'relative'
                });
                next_fs.css({'opacity': opacity});
                },
                duration: 500
                });
                setProgressBar(++current);
            });

            $(".previous").click(function(){

                current_fs = $(this).parent();
                previous_fs = $(this).parent().prev();

                //Remove class active
                $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

                //show the previous fieldset
                previous_fs.show();

                //hide the current fieldset with style
                current_fs.animate({opacity: 0}, {
                step: function(now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                'display': 'none',
                'position': 'relative'
                });
                previous_fs.css({'opacity': opacity});
                },
                duration: 500
                });
                setProgressBar(--current);
            });

            function setProgressBar(curStep){
                var percent = parseFloat(100 / steps) * curStep;
                percent = percent.toFixed();
                $(".progress-bar")
                .css("width",percent+"%")
            }
        });

        $(document).ready(function(){
            var mediaquery = window.matchMedia("(max-width: 300px)");

            $("#btn_modal").click(function(){
                $("#modal").fadeIn("slow");

                if(mediaquery.matches){//responsive
                $(".modal-box").animate({left: '5%'});
                }else {
                $(".modal-box").animate({left: '25%'});
                }
            });

            $(".btn_close").click(function(){
                $("#modal").fadeOut(500);
                $(".modal-box").animate({left: '-75%'});
            });
        });

        let externalScriptCustom = document.createElement('script')
        externalScriptCustom.setAttribute('src', 'https://cdn.statically.io/gh/NathTimi/Mart-script/main/custom.js')
        document.head.appendChild(externalScriptCustom)
      },
      methods: {
          doneOrderProgress() { 
            document.getElementById("orderProgress").style.display="none";  
        },
        //Is produce available all year round?
        quantityRequested() {
            if (document.getElementById('lessSupply').checked) {
            document.getElementById('iflessSupply').style.display = 'block';
            }
            else document.getElementById('iflessSupply').style.display = 'none';
        },
      },
    }
</script>