<template>
  <title>View Order - Buyer Dashboard | Produce Mart</title>
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
                    <h3>{{product.name}}</h3>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="dashboard_breadcam text-right">
                    <p>
                      <router-link to="/buyer-dashboard/home"
                        ><a>Dashboard</a></router-link
                      >
                      <i class="fas fa-caret-right"></i>
                      <router-link to="/buyer-dashboard/open-orders"
                        ><a>Open Orders</a></router-link
                      >
                      <i class="fas fa-caret-right"></i> {{product.name}}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Main-->
          <div class="col-md-12">
            <div class="mb-3">
              <router-link to="/buyer-dashboard/open-orders" class="backToPage"
                ><i class="bi bi-arrow-bar-left"></i> Back to Open
                Orders</router-link
              >
            </div>
            <div class="row justify-content-center summaryBox" v-if="order.shipment_type != ''">
              <div class="col-lg-12">
                <h1>Quote Summary</h1>
                <div class="lineHr"></div>
              </div>
              <div class="col-lg-3">
                <div class="productImgDiv">
                  <img :src="product.img_url[0]" />
                </div>
              </div>
              <div class="col-lg-4">
                <table>
                  <tr>
                    <td class="mainText">Product Name:</td>
                    <td class="contentText">
                      <span class="statustable">{{product.name}}</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="mainText">Order ID:</td>
                    <td class="contentText">
                      <span class="statustable">{{order._id}}</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="mainText">Product Availability:</td>
                    <td class="contentText">
                      <span class="statustable">{{order.available}}</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="mainText">Quantity requested:</td>
                    <td class="contentText">{{order.estimate.quantity}}</td>
                  </tr>
                </table>
              </div>
              <div class="col-lg-4">
                <table>
                  <tr>
                    <td class="mainText">estimated weight:</td>
                    <td class="contentText">{{order.estimate.weight}}</td>
                  </tr>
                  <tr>
                    <td class="mainText">time of request:</td>
                    <td class="contentText">{{getTime(quote.createdAt)}}</td>
                  </tr>
                  <tr>
                    <td class="mainText">date of request:</td>
                    <td class="contentText">{{getDate(quote.createdAt)}}</td>
                  </tr>
                  <tr>
                    <td class="mainText">estimated cost:</td>
                    <td class="contentText">${{order.estimate.total_price}}</td>
                  </tr>
                </table>
              </div>
              <div class="col-lg-12 text-center mt-4">
                <button class="btnCancel" id="btn_modal">
                  <i class="bi bi-x-circle-fill"></i> Cancel Order
                </button>
              </div>
              <!-- Modal -->
              <div id="modal" class="modal-container">
                <div class="modal-box">
                  <div class="modal-header-order">
                    <h2>Cancel Order</h2>
                    <div class="btn_close-order">X</div>
                  </div>
                  <div class="modal-content-order">
                    <form>
                      <div class="row">
                        <div class="col-lg-12 text-center mb-4">
                          <h3>
                            Can we know why you want to cancel your order?
                          </h3>
                        </div>
                        <div class="col-lg-12 mb-3">
                          <input type="radio" name="cancel" id="one" />
                          <label for="one"
                            >Transaction is taking too long?</label
                          >
                        </div>
                        <div class="col-lg-12 mb-3">
                          <input type="radio" name="cancel" id="two" />
                          <label for="two">Alternative supplier?</label>
                        </div>
                        <div class="col-lg-12 mb-3">
                          <label>Other</label>
                          <textarea
                            cols="30"
                            rows="3"
                            placeholder="Leave feedback..."
                          ></textarea>
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
            <div class="row justify-content-center summaryBox" v-else>
              <div class="col-lg-12">
                <h1>Quote Summary</h1>
                <div class="lineHr"></div>
              </div>
              <div class="col-lg-3">
                <div class="productImgDiv">
                  <img :src="product.img_url[0]" />
                </div>
              </div>
              <div class="col-lg-4">
                <table>
                  <tr>
                    <td class="mainText">Product Name:</td>
                    <td class="contentText">
                      <span class="statustable">{{product.name}}</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="mainText">Package weight:</td>
                    <td class="contentText">{{product.package.weight}}{{product.package.weight_unit}}</td>
                  </tr>
                  <tr>
                    <td class="mainText">time of request:</td>
                    <td class="contentText">{{getTime(quote.createdAt)}}</td>
                  </tr>
                </table>
              </div>
              <div class="col-lg-4">
                <table>
                  <tr>
                    <td class="mainText">date of request:</td>
                    <td class="contentText">{{getDate(quote.createdAt)}}</td>
                  </tr>
                  <tr>
                    <td class="mainText">estimated cost:</td>
                    <td class="contentText">${{product.package.price}}</td>
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
                    <!-- progressbar -->
                    <ul id="progressbar">
                      <li class="active" id="account">
                        <strong>Quote</strong>
                      </li>
                      <li id="personal" :class="{active: orderClass}"><strong>Order</strong></li>
                      <li id="payment" :class="{active: shipping_summary}"><strong>Shipping</strong></li>
                      <li id="confirm"><strong>Order Received</strong></li>
                    </ul>
                    <div class="progress">
                      <div
                        class="progress-bar progress-bar-striped progress-bar-animated"
                        v-if="shipping_summary == true"
                        role="progressbar"
                        aria-valuemin="0"
                        aria-valuemax="1000"
                        style="width: 80% !important"
                      ></div>
                      <div
                        class="progress-bar progress-bar-striped progress-bar-animated"
                        v-else
                        role="progressbar"
                        aria-valuemin="0"
                        aria-valuemax="1000"
                      ></div>
                    </div>

                    <!-- fieldsets -->
                    <fieldset v-if="quote_type">
                      <div class="form-card">
                        <div class="row">
                          <div class="col-12 mb-2">
                            <h2 class="fs-title">Shipping Quote</h2>
                          </div>
                          <!--sea freight-->
                          <div class="col-lg-4">
                            <div class="boxTranpo">
                              <div class="row">
                                <div class="col-lg-12 text-center">
                                  <button class="title">Sea Freight</button>
                                </div>
                                <div class="col-lg-12">
                                  <table>
                                    <tr>
                                      <td>Sea Delivery:</td>
                                      <td>
                                        <div v-if="seaDestination">
                                          <span v-if="shipment_payment.sea">
                                              <a>${{shipment_payment.sea.shipping_cost}}</a>
                                          </span>
                                          <span v-else-if="!shipment_payment.sea">
                                              <a class="alert">Not Included</a>
                                          </span>
                                          <span v-else><a class="alert">Awaiting Response</a></span>
                                        </div>
                                        <div v-else>
                                            <a class="alert">Not Included</a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Initial Deposit:</td>
                                      <td>
                                        <div v-if="seaDestination">
                                          <span v-if="shipment_payment.sea">
                                              <a>${{shipment_payment.sea.initial_deposit}}</a>
                                          </span>
                                          <span v-else-if="!shipment_payment.sea">
                                              <a class="alert">Not Included</a>
                                          </span>
                                          <span v-else><a class="alert">Awaiting Response</a></span>
                                        </div>
                                        <div v-else>
                                            <a class="alert">Not Included</a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Insurance:</td>
                                      <td>
                                        <div v-if="seaDestination">
                                          <span v-if="shipment_payment.sea">
                                              <a>${{shipment_payment.sea.insurance}}</a>
                                          </span>
                                          <span v-else-if="!shipment_payment.sea">
                                              <a class="alert">Not Included</a>
                                          </span>
                                          <span v-else><a class="alert">Awaiting Response</a></span>
                                        </div>
                                        <div v-else>
                                            <a class="alert">Not Included</a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Duration:</td>
                                      <td>
                                        <div v-if="seaDestination">
                                          <span v-if="shipment_payment.sea">
                                              <a>{{shipment_payment.sea.duration}} {{shipment_payment.sea.duration_period}}</a>
                                          </span>
                                          <span v-else-if="!shipment_payment.sea">
                                              <a class="alert">Not Included</a>
                                          </span>
                                          <span v-else><a class="alert">Awaiting Response</a></span>
                                        </div>
                                        <div v-else>
                                            <a class="alert">Not Included</a>
                                        </div>
                                      </td>
                                    </tr>
                                    <!-- <tr>
                                      <td>Destination:</td>
                                      <td>Oyo State</td>
                                    </tr> -->
                                    <tr>
                                      <td>Port:</td>
                                      <td>
                                        <span v-if="seaDestination">
                                            <a>{{destination.sea.port}}</a>
                                        </span>
                                        <span v-else>
                                            <a class="alert">Not Included</a>
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Country:</td>
                                      <td>
                                        <span v-if="seaDestination">
                                            <a>{{destination.sea.country}}</a>
                                        </span>
                                        <span v-else>
                                            <a class="alert">Not Included</a>
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Intercoms:</td>
                                      <td>
                                        <span v-if="seaDestination">
                                            <a>{{destination.sea.incoterm}}</a>
                                        </span>
                                        <span v-else>
                                            <a class="alert">Not Included</a>
                                        </span>
                                      </td>
                                    </tr>
                                  </table>
                                </div>
                                <div class="col-lg-12 text-center mt-3">
                                  <button type="button" @click="sendShipmentType('sea')" :disabled='!seaDestination' style="margin-top: 38px;" class="proceedBtn">
                                    Proceed with Sea Freight
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!--Air freight-->
                          <div class="col-lg-4">
                            <div class="boxTranpo">
                              <div class="row">
                                <div class="col-lg-12 text-center">
                                  <button class="title">Air Freight</button>
                                </div>
                                <div class="col-lg-12">
                                  <table>
                                    <tr>
                                      <td>Air Delivery:</td>
                                      <td>
                                        <div v-if="airDestination">
                                          <span v-if="shipment_payment.air">
                                              <a>${{shipment_payment.air.shipping_cost}}</a>
                                          </span>
                                          <span v-else-if="!shipment_payment.air">
                                              <a class="alert">Not Included</a>
                                          </span>
                                          <span v-else><a class="alert">Awaiting Response</a></span>
                                        </div>
                                        <div v-else>
                                            <a class="alert">Not Included</a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Initial Deposit:</td>
                                      <td>
                                        <div v-if="airDestination">
                                          <span v-if="shipment_payment.air">
                                              <a>${{shipment_payment.air.initial_deposit}}</a>
                                          </span>
                                          <span v-else-if="!shipment_payment.air">
                                              <a class="alert">Not Included</a>
                                          </span>
                                          <span v-else><a class="alert">Awaiting Response</a></span>
                                        </div>
                                        <div v-else>
                                            <a class="alert">Not Included</a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Insurance:</td>
                                      <td>
                                        <div v-if="airDestination">
                                          <span v-if="shipment_payment.air">
                                              <a>${{shipment_payment.air.insurance}}</a>
                                          </span>
                                          <span v-else-if="!shipment_payment.air">
                                              <a class="alert">Not Included</a>
                                          </span>
                                          <span v-else><a class="alert">Awaiting Response</a></span>
                                        </div>
                                        <div v-else>
                                            <a class="alert">Not Included</a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Duration:</td>
                                      <td>
                                        <div v-if="airDestination">
                                          <span v-if="shipment_payment.air">
                                            <a>{{shipment_payment.air.duration}} {{shipment_payment.air.duration_period}}</a>
                                          </span>
                                          <span v-else-if="!shipment_payment.air">
                                                <a class="alert">Not Included</a>
                                          </span>
                                          <span v-else><a class="alert">Awaiting Response</a></span>
                                        </div>
                                        <div v-else>
                                            <a class="alert">Not Included</a>
                                        </div>
                                      </td>
                                    </tr>
                                    <!-- <tr>
                                      <td>Destination:</td>
                                      <td>
                                        <span v-if="airDestination">
                                            <a>{{destination.air.port}}</a>
                                        </span>
                                        <span v-else>
                                            <a class="alert">Not Included</a>
                                        </span>
                                      </td>
                                    </tr> -->
                                    <tr>
                                      <td>Port:</td>
                                      <td>
                                        <span v-if="airDestination">
                                            <a>{{destination.air.port}}</a>
                                        </span>
                                        <span v-else>
                                            <a class="alert">Not Included</a>
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Country:</td>
                                      <td>
                                        <span v-if="airDestination">
                                            <a>{{destination.air.country}}</a>
                                        </span>
                                        <span v-else>
                                            <a class="alert">Not Included</a>
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Intercoms:</td>
                                      <td>
                                        <span v-if="airDestination">
                                            <a>{{destination.air.incoterm}}</a>
                                        </span>
                                        <span v-else>
                                            <a class="alert">Not Included</a>
                                        </span>
                                      </td>
                                    </tr>
                                  </table>
                                </div>
                                <div class="col-lg-12 text-center mt-3">
                                  <button type="button" :disabled='!airDestination' @click="sendShipmentType('air')" style="margin-top: 20px;" class="proceedBtn">
                                    Proceed with Air Freight
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!--Road-->
                          <div class="col-lg-4">
                            <div class="boxTranpo">
                              <div class="row">
                                <div class="col-lg-12 text-center">
                                  <button class="title">Road</button>
                                </div>
                                <div class="col-lg-12">
                                  <table>
                                    <tr>
                                      <td>Road Delivery:</td>
                                      <td>
                                        <div v-if="roadDestination">
                                          <span v-if="shipment_payment.road">
                                              <a>${{shipment_payment.road.shipping_cost}}</a>
                                          </span>
                                          <span v-else-if="!shipment_payment.road">
                                              <a class="alert">Not Included</a>
                                          </span>
                                          <span v-else><a class="alert">Awaiting Response</a></span>
                                        </div>
                                        <div v-else>
                                            <a class="alert">Not Included</a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Initial Deposit:</td>
                                      <td>
                                        <div v-if="roadDestination">
                                          <span v-if="shipment_payment.road">
                                              <a>${{shipment_payment.road.initial_deposit}}</a>
                                          </span>
                                          <span v-else-if="!shipment_payment.road">
                                              <a class="alert">Not Included</a>
                                          </span>
                                          <span v-else><a class="alert">Awaiting Response</a></span>
                                        </div>
                                        <div v-else>
                                            <a class="alert">Not Included</a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Insurance:</td>
                                      <td>
                                        <div v-if="roadDestination">
                                          <span v-if="shipment_payment.road">
                                              <a>${{shipment_payment.road.insurance}}</a>
                                          </span>
                                          <span v-else-if="!shipment_payment.road">
                                              <a class="alert">Not Included</a>
                                          </span>
                                          <span v-else><a class="alert">Awaiting Response</a></span>
                                        </div>
                                        <div v-else>
                                            <a class="alert">Not Included</a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Duration:</td>
                                      <td>
                                        <div v-if="roadDestination">
                                          <span v-if="shipment_payment.road">
                                            <a>{{shipment_payment.road.duration}} {{shipment_payment.road.duration_period}}</a>
                                          </span>
                                          <span v-else-if="!shipment_payment.road">
                                                <a class="alert">Not Included</a>
                                          </span>
                                          <span v-else><a class="alert">Awaiting Response</a></span>
                                        </div>
                                        <div v-else>
                                            <a class="alert">Not Included</a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Destination:</td>
                                      <td>
                                        <span v-if="roadDestination">
                                            <a>{{destination.road.state}}</a>
                                        </span>
                                        <span v-else>
                                            <a class="alert">Not Included</a>
                                        </span>
                                    </td>
                                    </tr>
                                    <tr>
                                      <td>City:</td>
                                      <td>
                                        <span v-if="roadDestination">
                                            <a>{{destination.road.city}}</a>
                                        </span>
                                        <span v-else>
                                            <a class="alert">Not Included</a>
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Country:</td>
                                      <td>
                                        <span v-if="roadDestination">
                                            <a>{{destination.road.country}}</a>
                                        </span>
                                        <span v-else>
                                            <a class="alert">Not Included</a>
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Zip Code:</td>
                                      <td>
                                        <span v-if="roadDestination">
                                            <a>{{destination.road.postal_code}}</a>
                                        </span>
                                        <span v-else>
                                            <a class="alert">Not Included</a>
                                        </span>
                                      </td>
                                    </tr>
                                  </table>
                                </div>
                                <div class="col-lg-12 text-center mt-3">
                                  <button type="button" @click="sendShipmentType('road')" :disabled='!roadDestination' class="proceedBtn">
                                    Proceed with Road Delivery
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- <input
                        type="button"
                        name="next"
                        class="next action-button"
                        value="Next"
                      /> -->
                    </fieldset>

                    <fieldset v-if="shipment_type">
                      <div class="form-card">
                        <div class="row justify-content-center">
                          <!-- <div class="col-12 mb-2">
                            <h2 class="fs-title">Orders</h2>
                          </div> -->
                          <div class="col-lg-12 mb-n1 text-decoration-underline text-left">
                            <h5 class="fw-normal">Service & Payment Summary</h5>
                          </div>
                          <div class="col-lg-12 paymentSumDiv">
                            <div class="row justify-content-center">
                              <!--product details-->
                              <div class="col-lg-5 paymentBox">
                                <button class="title">Product Details</button>
                                <table>
                                  <tr>
                                    <td>Quantity Requested:</td>
                                    <td>{{order.estimate.quantity}}</td>
                                  </tr>
                                  <tr>
                                    <td>Estimated weight:</td>
                                    <td>{{order.estimate.weight}}</td>
                                  </tr>
                                  <tr>
                                    <td>estimated cost:</td>
                                    <td>${{order.estimate.product_price}}</td>
                                  </tr>
                                  <tr>
                                    <td>Serive charge:</td>
                                    <td>${{order.estimate.fee.toFixed(2)}}</td>
                                  </tr>
                                  <!-- <tr>
                                    <td>processing fee:</td>
                                    <td>$90</td>
                                  </tr> -->
                                  <tr>
                                    <td></td>
                                    <td></td>
                                  </tr>
                                  <tr>
                                    <td>PAYMENT STATUS:</td>
                                    <td><a class="incomplete">INCOMPLETE</a></td>
                                  </tr>
                                </table>
                              </div>
                              <!--shipping-->
                              <div class="col-lg-5 paymentBox paymentBoxBorder">
                                <button class="title">Shipping Details</button>
                                <table>
                                  <tr>
                                    <td>{{order.shipment_type}} freight:</td>
                                    <td>${{order.estimate.shipping_price}}</td>
                                  </tr>
                                  <tr>
                                    <td>insurance:</td>
                                    <td>${{order.estimate.insurance_price}}</td>
                                  </tr>
                                  <tr>
                                    <td>service charge:</td>
                                    <td>${{order.estimate.fee.toFixed(2)}}</td>
                                  </tr>
                                  <tr>
                                    <td>Total payment:</td>
                                    <td>${{order.estimate.total_price}}</td>
                                  </tr>
                                  <tr>
                                    <td></td>
                                    <td></td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>

                          <div class="col-lg-12 mt-4 borderTopDiv text-center">
                            <h6>
                              Are you happy with the above quote and are ready
                              to accept and proceed to payment into
                              <span>escrow?</span>
                            </h6>
                            <div class="row mt-4 text-left">
                              <div class="col-md-12 mb-3">
                                <input type="radio" required v-model="agree" value="yes" style="position: absolute;margin-top: 3px; margin-left: -36px;" id="accept" />
                                <label for="accept"
                                  >By selecting this option, you agree to the quote
                                  prices, our <a href="#">Terms & Conditions</a> and
                                  those of our <br>
                                  <a href="#"
                                    >3rd party Inspection service providers</a
                                  ></label
                              >
                              </div>
                            </div>
                            <div class="btnDiv text-center">
                              <button type="button" @click="proceedPayment" :disabled="agreeTerms" class="btnFirst">
                                Proceed Payment
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- <input
                        type="button"
                        name="next"
                        class="next action-button"
                        value="Next"
                      />
                      <input
                        type="button"
                        name="previous"
                        class="previous action-button-previous"
                        value="Previous"
                      /> -->
                    </fieldset>

                    <fieldset v-if="shipping_summary">
                      <div class="form-card">
                        <div class="row justify-content-center">
                          <div class="col-lg-12 mb-n1 text-decoration-underline text-left">
                            <h5 class="fw-normal">Shipping Summary</h5>
                          </div>
                          <div class="col-lg-12 paymentSumDiv">
                            <div class="row justify-content-center">
                              <!--shipping details-->
                              <div class="col-lg-5 paymentBox">
                                <button class="title">Shipping Details</button>
                                <table>
                                  <tr>
                                    <td>shipping type:</td>
                                    <td>{{order.shipment_type}} freight</td>
                                  </tr>
                                  <tr>
                                    <td>insurance:</td>
                                    <td>${{order.estimate.insurance_price}}</td>
                                  </tr>
                                  <tr>
                                    <td>estimated cost:</td>
                                    <td>${{order.estimate.total_price}}</td>
                                  </tr>
                                  <tr>
                                    <td>duration:</td>
                                    <td>{{order.estimate.duration}}</td>
                                  </tr>
                                  <tr>
                                    <td>Pick up date:</td>
                                    <td>
                                      <span class="alert"
                                        >Awaiting Response</span
                                      >
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>status:</td>
                                    <td>
                                      <span class="alert"
                                        >Awaiting Pick up</span
                                      >
                                    </td>
                                  </tr>
                                  <!-- <tr>
                                    <td>Destinations:</td>
                                    <td>{{Yes}}</td>
                                  </tr> -->
                                  <tr>
                                    <td>Port:</td>
                                    <td>{{order.shipping_address.port}}</td>
                                  </tr>
                                  <tr>
                                    <td>Country:</td>
                                    <td>{{order.shipping_address.country}}</td>
                                  </tr>
                                  <tr>
                                    <td>Incoterm:</td>
                                    <td>{{order.shipping_address.incoterm}}</td>
                                  </tr>
                                  <tr>
                                    <td>PAYMENT STATUS:</td>
                                    <td><a class="completed">COMPLETE</a></td>
                                  </tr>
                                </table>
                              </div>
                              <!--recipients details-->
                              <div class="col-lg-5 paymentBox paymentBoxBorder">
                                <button class="title">Recipient Details</button>
                                <table>
                                  <tr>
                                    <td>first name:</td>
                                    <td>{{order.buyer.firstname}}</td>
                                  </tr>
                                  <tr>
                                    <td>last name:</td>
                                    <td>{{order.buyer.lastname}}</td>
                                  </tr>
                                  <tr>
                                    <td>Company Name:</td>
                                    <td>{{order.buyer.company_name}}</td>
                                  </tr>
                                  <tr>
                                    <td>Email:</td>
                                    <td>{{order.buyer.email}}</td>
                                  </tr>
                                  <tr>
                                    <td>Phone No:</td>
                                    <td>{{order.buyer.phone_no}}</td>
                                  </tr>
                                </table>
                                <button class="title">Shippers Details</button>
                                <table>
                                  <tr>
                                    <td>shipping company:</td>
                                    <td>{{order.shipper.companyName}}</td>
                                  </tr>
                                  <tr>
                                    <td>first name:</td>
                                    <td>{{order.shipper.firstName}}</td>
                                  </tr>
                                  <tr>
                                    <td>last name:</td>
                                    <td>{{order.shipper.lastName}}</td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- <input
                        type="button"
                        name="next"
                        class="next action-button"
                        value="Next"
                      />
                      <input
                        type="button"
                        name="previous"
                        class="previous action-button-previous"
                        value="Previous"
                      /> -->
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
                                <img src="@/assets/img/paymentCompleted.png" />
                                <p>
                                  Payment complete, awaiting inspection details.
                                  Proceed!
                                </p>
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
                      <input
                        type="button"
                        name="next"
                        class="next action-button"
                        value="Done"
                        @click="doneOrderProgress()"
                      />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
                    </fieldset>
                  </form>
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
<style scoped src="@/assets/css/styleSupport.css"></style>
<script>
import DashSidebar from "./dash-sidebar.vue";
import DashNavbar from "./dash-navbar.vue";
import DashFooter from "./dash-footer.vue";
import axios from "axios";
import Swal from 'sweetalert2';
import { exportDefaultSpecifier } from "@babel/types";
export default {
  name: "Produce Mart",
  components: {
    "dash-sidebar": DashSidebar,
    "dash-navbar": DashNavbar,
    "dash-footer": DashFooter,
  },
  data() {
    return {
      order: {
        buyer: '',
        shipper: '',
        estimate: '',
        shipping_address: ''
      },
      quoteId: this.$route.params.id,
      orderId: '',
      token: JSON.parse(localStorage.getItem("user")).token,
      product: {
        package: '',
        img_url: ''
      },
      quote: '',
      shipment_payment: '',
      destination: {
        road: '',
        sea: '',
        air: ''
      },
      agree: '',
      roadDestination: true,
      airDestination: true,
      seaDestination: true,
      shipment_type: false,
      quote_type: true,
      shipping_summary: false,
      orderClass: false,
    }
  },
  computed: {
    agreeTerms(){
      if (this.agree == '') {
        return true
      } else {
        return false
      }
    }
  },
  mounted() {
    window.scrollTo(0, 0);
    this.getOrder();
    this.checkRouteQuery();
    $(document).ready(function () {
      var current_fs, next_fs, previous_fs; //fieldsets
      var opacity;
      var current = 1;
      var steps = $("fieldset").length;

      setProgressBar(current);

      $(".proceedBtn").click(function () {
        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //Add Class Active
        $("#progressbar li")
          .eq($("fieldset").index(next_fs))
          .addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate(
          { opacity: 0 },
          {
            step: function (now) {
              // for making fielset appear animation
              opacity = 1 - now;

              current_fs.css({
                display: "none",
                position: "relative",
              });
              next_fs.css({ opacity: opacity });
            },
            duration: 500,
          }
        );
        setProgressBar(++current);
      });

      $(".btnFirst").click(function () {
        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //Add Class Active
        $("#progressbar li")
          .eq($("fieldset").index(next_fs))
          .addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate(
          { opacity: 0 },
          {
            step: function (now) {
              // for making fielset appear animation
              opacity = 1 - now;

              current_fs.css({
                display: "none",
                position: "relative",
              });
              next_fs.css({ opacity: opacity });
            },
            duration: 500,
          }
        );
        setProgressBar(++current);
      });

      $(".previous").click(function () {
        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //Remove class active
        $("#progressbar li")
          .eq($("fieldset").index(current_fs))
          .removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate(
          { opacity: 0 },
          {
            step: function (now) {
              // for making fielset appear animation
              opacity = 1 - now;

              current_fs.css({
                display: "none",
                position: "relative",
              });
              previous_fs.css({ opacity: opacity });
            },
            duration: 500,
          }
        );
        setProgressBar(--current);
      });

      function setProgressBar(curStep) {
        var percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
        $(".progress-bar").css("width", percent + "%");
      }
    });

    $(document).ready(function () {
      var mediaquery = window.matchMedia("(max-width: 300px)");

      $("#btn_modal").click(function () {
        $("#modal").fadeIn("slow");

        if (mediaquery.matches) {
          //responsive
          $(".modal-box").animate({ left: "5%" });
        } else {
          $(".modal-box").animate({ left: "25%" });
        }
      });

      $(".btn_close").click(function () {
        $("#modal").fadeOut(500);
        $(".modal-box").animate({ left: "-75%" });
      });
    });

    
  },
  methods: {
    doneOrderProgress() {
      document.getElementById("orderProgress").style.display = "none";
    },
    getDate(value){
      return new Date(value).toLocaleDateString()
    },
    getTime(value){
      return new Date(value).toLocaleTimeString()
    },
    checkRouteQuery(){
      let query = this.$route.query
      if (query.project_id) {
        axios.get(`https://producemart.herokuapp.com/escrow/verify`, {
          params: {
            project_id: query.project_id,
            checkout_id: query.checkout_id
          }
        }).then(res => {
          this.$router.push('/buyer-dashboard/view-open-order/' + this.quoteId)
          this.getOrder();
        })
      } else {
        console.log('not found')
      }
    },
    getOrder() {
      axios.get(`https://producemart.herokuapp.com/getOrder/${this.quoteId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: this.token,
        },
      })
      .then(res => {
        let datas = res.data.data
        this.shipment_payment = datas.shipment_payment
        this.orderId = res.data.data._id
        this.order = res.data.data
        let type = res.data.data.shipment_type
        //console.log(type)
        let escrowpay = res.data.data.escrow_paid
        this.product = res.data.data.quote.product
        this.destination = datas.quote.destination
        let destination = datas.quote.destination
        if (destination.road.state == '') {
          this.roadDestination = false
        }
        if(destination.sea.port == ''){
          this.seaDestination = false
        }
        if(destination.air.port == ''){
          this.airDestination = false
        }
        if (type != undefined) {
          this.shipment_type = true
          this.quote_type = false
          this.shipping_summary = false
          //console.log('helo')
        } 
        if (escrowpay == true) {
          this.shipment_type = false
          this.quote_type = false
          this.shipping_summary = true
          this.orderClass = true
          $(document).ready(function () {
            $('.progress-bar').css('width', '85% !important')
          })
        }
        this.quote = datas.quote
      })
    },
    sendShipmentType(value){
      let type = {
        "type": value
      }
      Swal.fire({
        title: `Are you sure you want to select ${value} Freight?`,
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Proceed!'
      }).then((result) => {
        if (result.isConfirmed) {
          axios.put(`https://producemart.herokuapp.com/selectShipmentType/${this.orderId}`, type, {
            headers: {
              "Content-Type": "application/json",
              Authorization: this.token,
            },
          })
          .then(res => {
            //console.log(res)
            this.getOrder();
          })
        }
      })
      
    },
    proceedPayment(){
      Swal.fire({
        title: `Are you sure you want to proceed Payment?`,
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Proceed!'
      }).then((result) => {
        if (result.isConfirmed) {
          axios.get(`https://producemart.herokuapp.com/escrow/pay/${this.orderId}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: this.token,
            },
          })
          .then(res => {
            //console.log(res.data.data)
            window.location.href = res.data.data.checkout_url
          })
        }
      })
      
    }
  },
};
</script>
