<template>
    <title>View Order - Buyer Dashboard | Produce Mart</title>
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
                                            <router-link to="/buyer-dashboard/home"><a>Dashboard</a></router-link> <i class="fas fa-caret-right"></i> <router-link to="/buyer-dashboard/closed-orders"><a>Closed Orders</a></router-link> <i class="fas fa-caret-right"></i> Order Product Name Here
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--Main-->
                    <div class="col-md-12">
                        <div class="mb-3">
                            <router-link to="/buyer-dashboard/closed-orders" class="backToPage"><i class="bi bi-arrow-bar-left"></i> Back to Closed Orders</router-link>
                        </div>
                        <div class="row justify-content-center summaryBox">
                            <div class="col-lg-12">
                                <h1>Your Quote Summary</h1>
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
                                        <td class="mainText">Order ID: </td>
                                        <td class="contentText"><span class="statustable">Bana- 197621</span></td>
                                    </tr>
                                    <tr>
                                        <td class="mainText">Product Availability:</td>
                                        <td class="contentText"><span class="statustable">Yes</span></td>
                                    </tr>
                                    <tr>
                                        <td class="mainText">Quantity requested:</td>
                                        <td class="contentText">10 bags</td>
                                    </tr>
                                    
                                </table>
                            </div>
                            <div class="col-lg-4">
                                <table>
                                    <tr>
                                        <td class="mainText">estimated weight:</td>
                                        <td class="contentText">200kg</td>
                                    </tr>
                                    <tr>
                                        <td class="mainText">time of request:</td>
                                        <td class="contentText">9:10am</td>
                                    </tr>
                                    <tr>
                                        <td class="mainText">date of request:</td>
                                        <td class="contentText">05-May-2022</td>
                                    </tr>
                                    <tr>
                                        <td class="mainText">estimated cost:</td>
                                        <td class="contentText">$100,000</td>
                                    </tr>
                                </table>
                            </div>
                            <div class="col-lg-12 text-center mt-3 successDiv">
                                <img src="@/assets/img/produceShipped.png">
                                <p>Produce successfully shipped</p>
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
                                                        <h2 class="fs-title">Shipping</h2>
                                                    </div>
                                                    <div class="col-lg-12 text-center">
                                                        <h3>Shipping Summary</h3>
                                                    </div>
                                                    <div class="col-lg-12 paymentSumDiv">
                                                        <div class="row justify-content-center">
                                                            <!--shipping details-->
                                                            <div class="col-lg-5 paymentBox">
                                                                <button class="title">Shipping Details</button>
                                                                <table>
                                                                    <tr>
                                                                        <td>shipping type:</td>
                                                                        <td>Road</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>insurance:</td>
                                                                        <td>yes</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>estimated cost:</td>
                                                                        <td>$100,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>duration:</td>
                                                                        <td>7 days</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Pick up date:</td>
                                                                        <td><span class="alert">02-06-2022</span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>status:</td>
                                                                        <td><span class="alert">Delivered</span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Address:</td>
                                                                        <td>5, Rotimi Williams Avenue</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Country:</td>
                                                                        <td>Nigeria</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>City:</td>
                                                                        <td>Ibadan</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>State/Province:</td>
                                                                        <td>Oyo</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Postal/Zip Code:</td>
                                                                        <td>100001</td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                            <!--recipients details-->
                                                            <div class="col-lg-5 paymentBox paymentBoxBorder">
                                                                <button class="title">Recipient Details</button>
                                                                <table>
                                                                    <tr>
                                                                        <td>first name:</td>
                                                                        <td>Ali</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>last name:</td>
                                                                        <td>Ayo</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Company Name:</td>
                                                                        <td>Futuristic Transporters</td>
                                                                    </tr>
                                                                </table>
                                                                <!--Shippers details-->
                                                                <button class="title">Shippers Details</button>
                                                                <table>
                                                                    <tr>
                                                                        <td>shipping company:</td>
                                                                        <td>DHL</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>invoice number:</td>
                                                                        <td>HMC3939345</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Date of invoice:</td>
                                                                        <td>02-06-2022</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>custom entry number:</td>
                                                                        <td>670 1684743H 08/07/22</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>DHL tracking no:</td>
                                                                        <td>98756743</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Customer no:</td>
                                                                        <td>98756743</td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                            <div class="col-lg-12 mt-4 mb-3 text-center">
                                                                <a href="/buyer-dashboard/order-review/review" class="btnFeedback">Leave Feedback</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <input type="button" name="next" class="next action-button" value="Next" />
                                        </fieldset>

                                        <fieldset>
                                            <div class="form-card">
                                                <div class="row justify-content-center">
                                                    <div class="col-12 mb-2">
                                                        <h2 class="fs-title">Inspection</h2>
                                                    </div>
                                                    <div class="col-lg-12 text-center">
                                                        <h3>Inspection Summary</h3>
                                                    </div>
                                                    <div class="row paymentBox justify-content-center">
                                                        <div class="col-lg-10">
                                                            <table>
                                                                <tr>
                                                                    <td>Inspection date:</td>
                                                                    <td>01-04-2022</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>inspection type:</td>
                                                                    <td>Full Inspection</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Supervision of loading?:</td>
                                                                    <td>Yes</td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <div class="accordion-item">
                                                            <header class="item-header">
                                                                <h4 class="item-question"><i class="bi bi-file-earmark-ruled-fill"></i> Inspection Report</h4>
                                                                <div class="item-icon"><i class='bx bx-chevron-down'></i></div>
                                                            </header>
                                                            <div class="item-content">
                                                                <p class="item-answer">
                                                                    <a href="#" download><i class="bi bi-download"></i> Download Report</a>
                                                                </p>
                                                                <p class="item-answer">
                                                                    <a href="#"><i class="bi bi-share-fill"></i> Share File</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="accordion-item">
                                                            <header class="item-header">
                                                                <h4 class="item-question"><i class="bi bi-paperclip"></i> Inspection Report Attachment</h4>
                                                                <div class="item-icon"><i class='bx bx-chevron-down'></i></div>
                                                            </header>
                                                            <div class="item-content">
                                                                <p class="item-answer">
                                                                    <a href="#" download><i class="bi bi-download"></i> Attachment 1</a>
                                                                </p>
                                                                <p class="item-answer">
                                                                    <a href="#" download><i class="bi bi-download"></i> Attachment 2</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12 mt-3 mb-3 text-center">
                                                        <a href="/buyer-dashboard/order-review/review" class="btnFeedback">Leave Feedback</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <input type="button" name="next" class="next action-button" value="Done" @click="doneOrderProgress()" />
                                            <input type="button" name="previous" class="previous action-button-previous" value="Previous" />
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

        const accordionBtns = document.querySelectorAll(".item-header");

        accordionBtns.forEach((accordion) => {
            accordion.onclick = function () {
                this.classList.toggle("active");

                let content = this.nextElementSibling;
                console.log(content);

                if (content.style.maxHeight) {
                    //this is if the accordion is open
                    content.style.maxHeight = null;
                } else {
                    //if the accordion is currently closed
                    content.style.maxHeight = content.scrollHeight + "px";
                    console.log(content.style.maxHeight);
                }
            };
        });


        let externalScriptCustom = document.createElement('script')
        externalScriptCustom.setAttribute('src', 'https://cdn.statically.io/gh/NathTimi/Mart-script/main/custom.js')
        document.head.appendChild(externalScriptCustom)
      },
      methods: {
          doneOrderProgress() { 
            document.getElementById("orderProgress").style.display="none";  
        }
      },
    }
</script>