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
                                            <router-link to="/buyer-dashboard/home"><a>Dashboard</a></router-link> <i class="fas fa-caret-right"></i> <router-link to="/buyer-dashboard/open-orders"><a>Open Orders</a></router-link> <i class="fas fa-caret-right"></i> Order Product Name Here
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--Main-->
                    <div class="col-md-10">
                        <div class="mb-3">
                            <router-link to="/buyer-dashboard/open-orders" class="backToPage"><i class="bi bi-arrow-bar-left"></i> Back to Open Orders</router-link>
                        </div>
                        <div class="row justify-content-center summaryBox">
                            <div class="col-lg-12">
                                <h1>Your Quote Summary</h1>
                                <div class="lineHr"></div>
                            </div>
                            <div class="col-lg-4">
                                <div class="productImgDiv">
                                    <img src="@/assets/img/products/product1.png" />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="titleText">
                                    <h5>Product Name: <span>Cocoa - QBL1878</span></h5>
                                    <h5>Order ID: <span>Q60077</span></h5>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <table>
                                    <tr>
                                        <td class="mainText">Product Availability:</td>
                                        <td class="contentText"><span class="statustable">Awaiting Response</span></td>
                                    </tr>
                                    <tr>
                                        <td class="mainText">Quantity requested:</td>
                                        <td class="contentText">10 bags</td>
                                    </tr>
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
                                        <td class="contentText">05-05-2022</td>
                                    </tr>
                                    <tr>
                                        <td class="mainText">estimated cost:</td>
                                        <td class="contentText">$100,000</td>
                                    </tr>
                                </table>
                            </div>
                            <div class="col-lg-12 text-center mt-4">
                                <button class="btnCancel" id="btn_modal"><i class="bi bi-x-circle-fill"></i> Cancel Order</button>
                            </div>
                            <!-- Modal -->
                            <div id="modal" class="modal-container">
                                <div class="modal-box">
                                    <div class="modal-header">
                                        <h2>Cancel Order</h2>
                                        <div class="btn_close">X</div>
                                    </div>
                                    <div class="modal-content">
                                        <form>
                                            <div class="row">
                                                <div class="col-lg-12 text-center mb-4">
                                                    <h3>Can we know why you want to cancel your order?</h3>
                                                </div>
                                                <div class="col-lg-12 mb-3">
                                                    <input type="radio" name="cancel" id="one"> <label for="one">Transaction is taking too long?</label>
                                                </div>
                                                <div class="col-lg-12 mb-3">
                                                    <input type="radio" name="cancel" id="two"> <label for="one">Alternative supplier?</label>
                                                </div>
                                                <div class="col-lg-12 mb-3">
                                                    <label>Other</label>
                                                    <textarea cols="30" rows="3" placeholder="Leave feedback..."></textarea>
                                                </div>
                                                <div class="col-lg-12 text-center">
                                                    <button type="submit">Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container-fluid orderProcessSteps" id="orderProgress">
                        <div class="row justify-content-center">
                            <div class="col-lg-11 text-center p-0 mt-3 mb-2">
                                <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
                                    <form id="msform">
                                        <!-- progressbar -->
                                        <ul id="progressbar">
                                            <li class="active" id="account"><strong>Quote</strong></li>
                                            <li id="personal"><strong>Order</strong></li>
                                            <li id="payment"><strong>Shipping</strong></li>
                                            <li id="confirm"><strong>Release Fund</strong></li>
                                        </ul>
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>

                                        <!-- fieldsets -->
                                        <fieldset>
                                            <div class="form-card">
                                                <div class="row">
                                                    <div class="col-12 mb-2">
                                                        <h2 class="fs-title">Shipping Quote</h2>
                                                    </div>
                                                    <!--Sea Freight-->
                                                    <div class="row shippingBox">
                                                        <div class="col-md-12">
                                                            <input type="radio" name="shipping" id="sea"> <label for="sea" class="labelShipping">Shipping Mode: <span>Sea Freight</span></label>
                                                        </div>
                                                        <div class="col-lg-12">
                                                            <table>
                                                                <tr class="mainRow">
                                                                    <td class="mainHead">Services</td>
                                                                    <td class="mainHead">Price</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Sea freight:</td>
                                                                    <td><span class="alert">Awaiting Response</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Insurance:</td>
                                                                    <td><span class="alert">Awaiting Response</span></td>
                                                                </tr>
                                                            </table>
                                                            <div class="separator"><div class="line"></div><p>Other Details</p><div class="line"></div></div>
                                                            <table>
                                                                <tr>
                                                                    <td>duration:</td>
                                                                    <td><span class="alert">Awaiting Response</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Destination:</td>
                                                                </tr>
                                                                <tr class="footTable">
                                                                    <td>Port: Apapa port</td>
                                                                    <td>Country: Nigeria</td>
                                                                </tr>
                                                                <tr class="footTable">
                                                                    <td>Incoterms</td>
                                                                    <td></td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <!--Air Freight-->
                                                    <div class="row shippingBox">
                                                        <div class="col-md-12">
                                                            <input type="radio" name="shipping" id="air"> <label for="air" class="labelShipping">Shipping Mode: <span>Air Freight</span></label>
                                                        </div>
                                                        <div class="col-lg-12">
                                                            <table>
                                                                <tr class="mainRow">
                                                                    <td class="mainHead">Services</td>
                                                                    <td class="mainHead">Price</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Air freight:</td>
                                                                    <td><span class="alert">Awaiting Response</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Insurance:</td>
                                                                    <td><span class="alert">Awaiting Response</span></td>
                                                                </tr>
                                                            </table>
                                                            <div class="separator"><div class="line"></div><p>Other Details</p><div class="line"></div></div>
                                                            <table>
                                                                <tr>
                                                                    <td>duration:</td>
                                                                    <td><span class="alert">Awaiting Response</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Destination:</td>
                                                                </tr>
                                                                <tr class="footTable">
                                                                    <td>Port: moshod Abiola Airport</td>
                                                                    <td>Country: Nigeria</td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <!--Road-->
                                                    <div class="row shippingBox">
                                                        <div class="col-md-12">
                                                            <input type="radio" name="shipping" id="road"> <label for="road" class="labelShipping">Shipping Mode: <span>Road</span></label>
                                                        </div>
                                                        <div class="col-lg-12">
                                                            <table>
                                                                <tr class="mainRow">
                                                                    <td class="mainHead">Services</td>
                                                                    <td class="mainHead">Price</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Delivery by road:</td>
                                                                    <td><span class="alert">Awaiting Response</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Insurance:</td>
                                                                    <td><span class="alert">Awaiting Response</span></td>
                                                                </tr>
                                                            </table>
                                                            <div class="separator"><div class="line"></div><p>Other Details</p><div class="line"></div></div>
                                                            <table>
                                                                <tr>
                                                                    <td>duration:</td>
                                                                    <td><span class="alert">Awaiting Response</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Destination:</td>
                                                                </tr>
                                                                <tr class="footTable">
                                                                    <td>Address: 5 Awe Avenue, 5 Rotimi Williams Avenue</td>
                                                                    <td>Country: Nigeria</td>
                                                                </tr>
                                                                <tr class="footTable">
                                                                    <td>City: Ibadan</td>
                                                                    <td>State/Province: Oyo</td>
                                                                </tr>
                                                                <tr class="footTable">
                                                                    <td>Postal/Zip Code: 1000001</td>
                                                                </tr>
                                                            </table>
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
                                                        <h2 class="fs-title">Orders</h2>
                                                    </div>
                                                    <div class="col-lg-12 text-center">
                                                        <h3>Service & Payment Summary</h3>
                                                    </div>
                                                    <!--product details-->
                                                    <div class="row paymentBox">
                                                        <div class="col-lg-12">
                                                            <h5>Product Details</h5>
                                                        </div>
                                                        <div class="col-lg-12">
                                                            <table>
                                                                <tr>
                                                                    <td>Quantity requested:</td>
                                                                    <td>10 bags</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>estimated weight:</td>
                                                                    <td>200kg</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>estimated cost:</td>
                                                                    <td>$100,000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>service charge:</td>
                                                                    <td>$20</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Processing fee:</td>
                                                                    <td>$90</td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td><button>$1,110</button></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Payment status:</td>
                                                                    <td><span class="completed">Completed</span></td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <!--shipping-->
                                                    <div class="row paymentBox">
                                                        <div class="col-lg-12">
                                                            <h5>Shipping</h5>
                                                        </div>
                                                        <div class="col-lg-12">
                                                            <table>
                                                                <tr>
                                                                    <td>Sea Freight:</td>
                                                                    <td>$500</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>insurance:</td>
                                                                    <td>$200</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>service charge:</td>
                                                                    <td>$20</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Processing fee:</td>
                                                                    <td>$90</td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td><button>$790</button></td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-10 mt-4 borderTopDiv text-center">
                                                        <h6>Are you happy with the above quote and are ready to accept and proceed to payment?</h6>
                                                        <input type="radio" id="accept"> <label for="accept">By selecting this option, you agree to the quote prices, our Terms & Conditions and those of our 3rd party Inspection service providers</label>
                                                        <button type="button" class="btnFirst">Pay with Card</button>
                                                        <button type="button" class="btnSecond">Pay with Bank Account</button>
                                                        <p class="mt-3">A registerd PayPal account is required for payment</p>
                                                        <img src="@/assets/img/paypal.png">
                                                    </div>
                                                </div>
                                            </div>
                                            <input type="button" name="next" class="next action-button" value="Next" /> <input type="button" name="previous" class="previous action-button-previous" value="Previous" />
                                        </fieldset>

                                        <fieldset>
                                            <div class="form-card">
                                                <div class="row justify-content-center">
                                                    <div class="col-12 mb-2">
                                                        <h2 class="fs-title">Shipping</h2>
                                                    </div>
                                                    <div class="col-lg-12 text-center">
                                                        <h3>Shipping Summary</h3>
                                                    </div>
                                                    <div class="row paymentBox">
                                                        <div class="col-lg-12">
                                                            <table>
                                                                <tr>
                                                                    <td>shipping type:</td>
                                                                    <td>sea freight</td>
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
                                                                    <td><span class="alert">Awaiting Response</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>status</td>
                                                                    <td><span class="alert">Awaiting Pick up</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Destinations</td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr class="footTable">
                                                                    <td>Port: Apapa port</td>
                                                                    <td>Country: Nigeria</td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <!--recipient details-->
                                                    <div class="row paymentBox">
                                                        <div class="col-lg-12">
                                                            <h5>Recipient details</h5>
                                                        </div>
                                                        <div class="col-lg-12">
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
                                                        </div>
                                                    </div>
                                                    <!--shipper details-->
                                                    <div class="row paymentBox">
                                                        <div class="col-lg-12">
                                                            <h5>Shippers details</h5>
                                                        </div>
                                                        <div class="col-lg-12">
                                                            <table>
                                                                <tr>
                                                                    <td>shipping company:</td>
                                                                    <td><span class="alert">Awaiting response</span></td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <input type="button" name="next" class="next action-button" value="Next" /> <input type="button" name="previous" class="previous action-button-previous" value="Previous" />
                                        </fieldset>

                                        <fieldset>
                                            <div class="form-card">
                                                <div class="row justify-content-center">
                                                    <div class="col-12 mb-2">
                                                        <h2 class="fs-title">Release Funds</h2>
                                                    </div>
                                                    <div class="col-lg-12 paymentCom">
                                                        <div class="row justify-content-center">
                                                            <div class="col-lg-12 text-center">
                                                                <img src="@/assets/img/paymentCompleted.png">
                                                                <p>Payment complete, awaiting inspection details. Proceed!</p>
                                                            </div>
                                                            <div class="col-lg-8 payTable text-center">
                                                                <table>
                                                                    <tr>
                                                                        <td>amount payable:</td>
                                                                        <td><span class="alert">$110</span></td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                            <div class="col-lg-12 text-center mt-3 mb-3">
                                                                <button type="button">Release Funds</button>
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
        }
      },
    }
</script>