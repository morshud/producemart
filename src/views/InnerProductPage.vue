<template>
  <title>Products | Produce Mart</title>
  <mainHeader />
  <searchHeader />

  <!--Page Breadcrumb-->
  <section class="pageProductBreadcrumb">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="textHead">
            <p>
              <router-link to="/" class="routeLink">Home</router-link>
              <span>></span>
              <router-link to="/products" class="routeLink"
                >All Products</router-link
              >
            </p>
            <h2>{{ product && product.name }}</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Page Breadcrumb Ends-->

  <main class="productInnerMain">
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-6" v-if="product">
          <swiper
            :style="{
              '--swiper-navigation-color': '#78c97f',
              '--swiper-pagination-color': '#78c97f',
            }"
            :effect="'flip'"
            :grabCursor="true"
            :pagination="true"
            :navigation="true"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide v-for="(img, i) in product.img_url" :key="i">
              <img :src="img" />
            </swiper-slide>
          </swiper>
          <div class="shareDiv">
            <p>Share this product:</p>
            <a href="#"><img src="../assets/img/socialFacebook.png" /></a>
            <a href="#"><img src="../assets/img/socialInstagram.png" /></a>
            <a href="#"><img src="../assets/img/socialTwitter.png" /></a>
            <a href="#"><img src="../assets/img/socialLink.png" /></a>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="row productIntroText justify-content-center">
            <div class="col-lg-12 detailsDiv">
              <span>Product Name</span>
              <p>{{ product && product.name }} - CODE-1976</p>
              <small
                ><img src="@/assets/img/dashboard-img/medalGold.png" /> Gold
                Rated Supplier | <a href="#">See Audit Report</a></small
              >
            </div>
            <div class="col-lg-12 detailsDiv">
              <span>Price</span>
              <p>
                <strong>Shipping:</strong> {{ product.shipment.price }} per
                {{ product.shipment.weight }}{{ product.shipment.weight_unit }}
              </p>
              <p>
                <strong>Package:</strong> {{ product.package.price }} per
                {{ product.package.unit }}
              </p>
            </div>
            <div class="col-lg-4 detailsDivBelow">
              <h5>Crop Year</h5>
              <h6>2022</h6>
            </div>
            <div class="col-lg-4 detailsDivBelow">
              <h5>Produce Variety</h5>
              <h6>{{ product && product.variety }}</h6>
            </div>
            <div class="col-lg-4 detailsDivBelow">
              <h5>Supply Ability</h5>
              <h6>10,000 bags per week</h6>
            </div>
            <div class="col-lg-4 detailsDivBelow">
              <h5>Available</h5>
              <h6>
                From: 02-Jan-2022 <br />
                To: 02-Nov-2022
              </h6>
            </div>
            <div class="col-lg-4 detailsDivBelow">
              <h5>Grade, Style & Quality</h5>
              <h6>Fresh</h6>
            </div>
            <div class="col-lg-4 detailsDivBelow">
              <h5>Minimum Order Quantity</h5>
              <h6>
                {{ product.order.min_quantity }} {{ product.order.qty_unit }}
              </h6>
            </div>
            <!-- <div class="col-lg-4 detailsDivBelow">
              <h5>Incoterms</h5>
              <h6>EXW - EX Works</h6>
            </div> -->
          </div>
        </div>
        <div class="col-lg-12 text-center">
          <div class="btnDiv">
            <a
              type="button"
              @click="showModal"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              >Request Quote <i class="bi bi-arrow-right"></i
            ></a>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      ref="exampleModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Request a Quote</h5>
            <button
              type="button"
              class="btn-close"
              @click="modal.hide()"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body modalBody">
            <form v-if="userAuth" id="msform" @submit.prevent="addQuote">
              <!-- progressbar -->
              <ul id="progressbar">
                <li class="active">Quantity</li>
                <li>Shipping</li>
                <li>Quote summary</li>
              </ul>
              <!-- Step 1 -->
              <fieldset>
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-md-5">
                      <h1>Let the supplier know how best to serve you</h1>
                    </div>
                    <div class="col-md-5">
                      <img src="@/assets/img/requestQuote1.png" />
                    </div>
                  </div>
                </div>
                <h2 class="fs-title">
                  Indicate the quantity of the produce you want
                </h2>
                <input
                  type="text"
                  :value="
                    product.package.price + ' per ' + product.package.unit
                  "
                  disabled
                  class="input"
                />
                <input
                  :min="product.order.min_quantity"
                  @keyup="minimum(product.order.min_quantity)"
                  type="number"
                  :placeholder="
                    'Minimum order quantity for this product is ' +
                    product.order.min_quantity +
                    product.package.unit
                  "
                  v-model="quantity"
                  class="input"
                />
                <p style="color: red">{{ errMessage }}</p>
                <input
                  type="button"
                  name="next"
                  class="next action-button"
                  value="Next"
                />
              </fieldset>

              <!-- Step 2 -->
              <fieldset>
                <!-- <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-md-5">
                                            <h1>Let us know what to look out for during inspection</h1>
                                        </div>
                                        <div class="col-md-5">
                                            <img src="@/assets/img/requestQuote2.png">
                                        </div>
                                    </div>
                                </div>
                                <h2 class="fs-title">Product Specification</h2>
                                <textarea cols="30" rows="3" class="textarea" placeholder="Start typing..."></textarea>
                                <h3>Choose Inspection Services <span>(you can select more than one option)</span></h3>
                                <div class="checkboxDiv">
                                    <input type="checkbox" id="full"> <label for="full">Full Inspection</label>
                                </div>
                                <div class="checkboxDiv">
                                    <input type="checkbox" id="random"> <label for="random">Random Inspection</label>
                                </div>
                                <h3>Extra Inspection Services</h3>
                                <div class="checkboxDiv">
                                    <input type="checkbox" id="supervision"> <label for="supervision">Supervision of loading</label>
                                </div> -->
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-md-5">
                      <h1>You are almost done!</h1>
                    </div>
                    <div class="col-md-5">
                      <img src="@/assets/img/requestQuote2.png" />
                    </div>
                  </div>
                </div>
                <h2 class="fs-title">Choose shipping service</h2>
                <div class="checkboxDiv">
                  <input type="checkbox" :checked="air" @click="air = !air" />
                  <label for="air">Send by air</label>
                </div>
                <div class="checkboxDiv">
                  <input type="checkbox" :checked="sea" @click="sea = !sea" />
                  <label for="sea">Send by sea</label>
                </div>
                <div class="checkboxDiv">
                  <input
                    type="checkbox"
                    :checked="road"
                    @click="road = !road"
                  />
                  <label for="road">Send by road</label>
                </div>
                <!-- Send by air -->
                <div class="container showDivBelow" v-if="air">
                  <div class="row">
                    <div class="col-lg-12">
                      <h3>Destinations - Send By Air</h3>
                      <div class="lineHr"></div>
                    </div>
                    <div class="col-lg-12 mb-2">
                      <label>Country</label>
                      <select v-model="airCountry" class="input">
                        <option value="Country" hidden>Select Country</option>
                        <option
                          v-for="(country, i) in countries"
                          :value="country"
                          :key="i"
                        >
                          {{ country }}
                        </option>
                      </select>
                    </div>
                    <div class="col-lg-12 mb-2">
                      <label>Port</label>
                      <select v-model="airPort" class="input">
                        <option>Select Port</option>
                        <option value="Lagos">Lagos</option>
                      </select>
                    </div>
                    <div class="col-lg-12">
                      <label>Incoterms</label>
                      <select v-model="airIncoterm" class="input">
                        <option>Select Incoterm</option>
                        <option value="EXW - ExWorks">EXW - ExWorks</option>
                        <option value="FCA - Free Carrier">
                          FCA - Free Carrier
                        </option>
                        <option value="CIP - Carriage & Insurance Paid">
                          CIP - Carriage & Insurance Paid
                        </option>
                        <option value="CPT - Carriage Paid To">
                          CPT - Carriage Paid To
                        </option>
                        <option value="DDP - Delivered Duty Paid">
                          DDP - Delivered Duty Paid
                        </option>
                        <option value="DAP - Delivered at Place">
                          DAP - Delivered at Place
                        </option>
                        <option value="DPU - Delivered at Place Unload">
                          DPU - Delivered at Place Unload
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <!-- Send by sea -->
                <div class="container showDivBelow" v-if="sea">
                  <div class="row">
                    <div class="col-lg-12">
                      <h3>Destinations - Send By Sea</h3>
                      <div class="lineHr"></div>
                    </div>
                    <div class="col-lg-12 mb-2">
                      <label>Country</label>
                      <select v-model="seaCountry" class="input">
                        <option value="Country" hidden>Select Country</option>
                        <option
                          v-for="(country, i) in countries"
                          :value="country"
                          :key="i"
                        >
                          {{ country }}
                        </option>
                      </select>
                    </div>
                    <div class="col-lg-12 mb-2">
                      <label>Port</label>
                      <select v-model="seaPort" class="input">
                        <option>Select Port</option>
                        <option value="Lagos">Lagos</option>
                      </select>
                    </div>
                    <div class="col-lg-12">
                      <label>Incoterms</label>
                      <select v-model="seaIncoterm" class="input">
                        <option>Select Incoterm</option>
                        <option value="EXW - ExWorks">EXW - ExWorks</option>
                        <option value="FCA - Free Carrier">
                          FCA - Free Carrier
                        </option>
                        <option value="CIP - Carriage & Insurance Paid">
                          CIP - Carriage & Insurance Paid
                        </option>
                        <option value="CPT - Carriage Paid To">
                          CPT - Carriage Paid To
                        </option>
                        <option value="DDP - Delivered Duty Paid">
                          DDP - Delivered Duty Paid
                        </option>
                        <option value="DAP - Delivered at Place">
                          DAP - Delivered at Place
                        </option>
                        <option value="DPU - Delivered at Place Unload">
                          DPU - Delivered at Place Unload
                        </option>
                        <option value="FAS - Free Alongside Shipping">
                          FAS - Free Alongside Shipping
                        </option>
                        <option value="FOB - Free On Board">
                          FOB - Free On Board
                        </option>
                        <option value="CFR - Cost & Freight">
                          CFR - Cost & Freight
                        </option>
                        <option value="CIF - Cost Insurance Freght">
                          CIF - Cost Insurance Freght
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <!-- Send by road -->
                <div class="container showDivBelow" v-if="road">
                  <div class="row">
                    <div class="col-lg-12">
                      <h3>Destinations - Send By Road</h3>
                      <div class="lineHr"></div>
                    </div>
                    <div class="col-lg-12 mb-2">
                      <label>Address 1</label>
                      <textarea
                        v-model="roadAdd1"
                        cols="30"
                        rows="3"
                        class="textarea"
                      ></textarea>
                    </div>
                    <div class="col-lg-12 mb-2">
                      <label>Address 2</label>
                      <textarea
                        v-model="roadAdd2"
                        cols="30"
                        rows="3"
                        class="textarea"
                      ></textarea>
                    </div>
                    <div class="col-lg-6 mb-2">
                      <label>City</label>
                      <input v-model="roadCity" type="text" class="input" />
                    </div>
                    <div class="col-lg-6 mb-2">
                      <label>State/Province</label>
                      <input v-model="roadState" type="text" class="input" />
                    </div>
                    <div class="col-lg-6 mb-2">
                      <label>Country</label>
                      <select v-model="roadCountry" class="input">
                        <option value="Country" hidden>Select Country</option>
                        <option
                          v-for="(country, i) in countries"
                          :value="country"
                          :key="i"
                        >
                          {{ country }}
                        </option>
                      </select>
                    </div>
                    <div class="col-lg-6">
                      <label>Postal/Zip code</label>
                      <input v-model="roadZip" type="text" class="input" />
                    </div>
                    <div class="col-lg-12">
                      <label>Incoterms</label>
                      <select v-model="roadIncoterm" class="input">
                        <option>Select Incoterm</option>
                        <option value="EXW - ExWorks">EXW - ExWorks</option>
                        <option value="FCA - Free Carrier">
                          FCA - Free Carrier
                        </option>
                        <option value="CIP - Carriage & Insurance Paid">
                          CIP - Carriage & Insurance Paid
                        </option>
                        <option value="CPT - Carriage Paid To">
                          CPT - Carriage Paid To
                        </option>
                        <option value="DDP - Delivered Duty Paid">
                          DDP - Delivered Duty Paid
                        </option>
                        <option value="DAP - Delivered at Place">
                          DAP - Delivered at Place
                        </option>
                        <option value="DPU - Delivered at Place Unload">
                          DPU - Delivered at Place Unload
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <input
                  type="button"
                  name="previous"
                  class="previous action-button"
                  value="Previous"
                />
                <input
                  type="button"
                  name="next"
                  class="next action-button"
                  value="Next"
                />
              </fieldset>

              <!-- Step 3 -->
              <fieldset>
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-md-5">
                      <h1>Just making sure you're all set up!</h1>
                    </div>
                    <div class="col-md-5">
                      <img src="@/assets/img/requestQuote3.png" />
                    </div>
                  </div>
                </div>
                <h6>Your Order Summary</h6>
                <!-- Order -->
                <div class="summaryTable">
                  <h1 class="summaryHead">Order</h1>
                  <table>
                    <tr class="bodyRow">
                      <td class="tdMain">Quantity</td>
                      <td class="tdBody">
                        {{ quantity }} {{ product.package.unit }}
                      </td>
                    </tr>
                    <tr class="bodyRow">
                      <td class="tdMain">Dated on</td>
                      <td class="tdBody">
                        {{ new Date().toISOString().slice(0, 10) }}
                      </td>
                    </tr>
                    <tr class="bodyRow">
                      <td class="tdMain">Time</td>
                      <td class="tdBody">
                        {{ new Date().toLocaleTimeString() }}
                      </td>
                    </tr>
                    <tr class="bodyRow">
                      <td class="tdMain">Estimated Cost</td>
                      <td class="tdBody">
                        ${{ quantity * product.package.price.slice(1) }}
                      </td>
                    </tr>
                    <tr class="bodyRow">
                      <td class="tdMain">Estimated Weight</td>
                      <td class="tdBody">200kg</td>
                    </tr>
                  </table>
                </div>
                <!-- Destination -->
                <div class="summaryTable">
                  <h1 class="summaryHead">Destination</h1>
                  <p v-if="!road || !sea || !road">
                    No Destination was selected hence Quote cannot be sent
                  </p>
                  <div class="byRoad" v-if="road && roadAdd1">
                    <p class="summaryHeadSub">by road</p>
                    <table>
                      <tr class="bodyRow">
                        <td class="tdMain">Address 1</td>
                        <td class="tdBody">{{ roadAdd1 }}</td>
                      </tr>
                      <tr class="bodyRow">
                        <td class="tdMain">Address 2</td>
                        <td class="tdBody">
                          {{ roadAdd2 }}
                        </td>
                      </tr>
                      <tr class="bodyRow">
                        <td class="tdMain">City</td>
                        <td class="tdBody">{{ roadCity }}</td>
                      </tr>
                      <tr class="bodyRow">
                        <td class="tdMain">State/Province</td>
                        <td class="tdBody">{{ roadState }}</td>
                      </tr>
                      <tr class="bodyRow">
                        <td class="tdMain">Country</td>
                        <td class="tdBody">{{ roadCountry }}</td>
                      </tr>
                      <tr class="bodyRow">
                        <td class="tdMain">Postal Code</td>
                        <td class="tdBody">{{ roadZip }}</td>
                      </tr>
                      <tr class="bodyRow">
                        <td class="tdMain">Incoterm</td>
                        <td class="tdBody">{{ roadIncoterm }}</td>
                      </tr>
                    </table>
                  </div>
                  <div class="bySea" v-if="sea && seaPort">
                    <p class="summaryHeadSub">by sea</p>
                    <table>
                      <tr class="bodyRow">
                        <td class="tdMain">SeaPort</td>
                        <td class="tdBody">{{ seaPort }}</td>
                      </tr>
                      <tr class="bodyRow">
                        <td class="tdMain">Country</td>
                        <td class="tdBody">{{ seaCountry }}</td>
                      </tr>
                      <tr class="bodyRow">
                        <td class="tdMain">Incoterm</td>
                        <td class="tdBody">{{ seaIncoterm }}</td>
                      </tr>
                    </table>
                  </div>
                  <div class="byAir" v-if="air && airPort">
                    <p class="summaryHeadSub">by air</p>
                    <table>
                      <tr class="bodyRow">
                        <td class="tdMain">AirPort</td>
                        <td class="tdBody">{{ airPort }}</td>
                      </tr>
                      <tr class="bodyRow">
                        <td class="tdMain">Country</td>
                        <td class="tdBody">{{ airCountry }}</td>
                      </tr>
                      <tr class="bodyRow">
                        <td class="tdMain">Incoterm</td>
                        <td class="tdBody">{{ airIncoterm }}</td>
                      </tr>
                    </table>
                  </div>
                </div>

                <input
                  type="button"
                  name="previous"
                  class="previous action-button"
                  value="Previous"
                />
                <input
                  type="submit"
                  name="submit"
                  class="submit action-button"
                  value="Submit"
                />
              </fieldset>
            </form>
            <div v-else class="row justify-content-center">
              <h5 @click="modal.hide()">
                Please
                <router-link to="/login"
                  ><a class="authLogin">Login</a></router-link
                >
                or
                <router-link to="/buyer-registration"
                  ><a class="authLogin">SignUp</a></router-link
                >
                to request a quote
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-12">
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active tabs-button"
                id="pills-product-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-product"
                type="button"
                role="tab"
                aria-controls="pills-product"
                aria-selected="true"
              >
                Product Details
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link tabs-button"
                id="pills-characteristics-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-characteristics"
                type="button"
                role="tab"
                aria-controls="pills-characteristics"
                aria-selected="false"
              >
                Characteristics
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link tabs-button"
                id="pills-packaging-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-packaging"
                type="button"
                role="tab"
                aria-controls="pills-packaging"
                aria-selected="false"
              >
                Packaging
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link tabs-button"
                id="pills-certification-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-certification"
                type="button"
                role="tab"
                aria-controls="pills-certification"
                aria-selected="false"
              >
                Certification
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link tabs-button"
                id="pills-review-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-review"
                type="button"
                role="tab"
                aria-controls="pills-review"
                aria-selected="false"
              >
                Review
              </button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <!--Product Details-->
            <div
              class="tab-pane fade show active"
              id="pills-product"
              role="tabpanel"
              aria-labelledby="pills-product-tab"
            >
              <div class="row detailsMore">
                <div class="col-lg-12">
                  <h1>Product Details</h1>
                  <p>
                    {{ product && product.description }}
                  </p>
                  <h1>More Details</h1>
                  <table>
                    <tr>
                      <td class="thead">Product Category</td>
                      <td class="tbody">{{ product && product.category }}</td>
                    </tr>
                    <tr>
                      <td class="thead">Farming Method</td>
                      <td class="tbody">{{ product && product.farmMethod }}</td>
                    </tr>
                    <tr>
                      <td class="thead">Country of Origin</td>
                      <td class="tbody">{{ product && product.country }}</td>
                    </tr>
                    <tr>
                      <td class="thead">Location of Produce</td>
                      <td class="tbody">{{ product && product.location }}</td>
                    </tr>
                    <tr>
                      <td class="thead">GMO (Genetically Modified Organism)</td>
                      <td class="tbody">{{ product && product.GMO }}</td>
                    </tr>
                    <tr>
                      <td class="thead">Crop Year</td>
                      <td class="tbody">16-02-2022</td>
                    </tr>
                    <tr>
                      <td class="thead">Is Produce Available Year Round?</td>
                      <td class="tbody">
                        {{
                          product &&
                          (product.yearRoundAvailable
                            ? product.yearRoundAvailable.status
                            : "No details available")
                        }}
                      </td>
                    </tr>
                    <tr>
                      <td class="thead">Special Storage Condition</td>
                      <td class="tbody">
                        {{
                          product &&
                          (product.specialStorageCondition
                            ? product.specialStorageCondition.status
                            : "No details available")
                        }}
                      </td>
                    </tr>
                    <tr>
                      <td class="thead">
                        Is Temperature Controlled Equipment Required For
                        Transportation?
                      </td>
                      <td class="tbody">
                        {{
                          product &&
                          (product.temperatureControlled
                            ? product.temperatureControlled.status
                            : "No details available")
                        }}
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <!--Characteristics-->
            <div
              class="tab-pane fade"
              id="pills-characteristics"
              role="tabpanel"
              aria-labelledby="pills-characteristics-tab"
            >
              <div class="row detailsMore">
                <div class="col-lg-12" v-if="product">
                  <h1>Product Characteristics</h1>
                  <table v-if="product.character">
                    <tr v-for="(xter, val, i) in product.character" :key="i">
                      <td class="thead">
                        {{ val == "comment" ? "Additional Comments" : val }}
                      </td>
                      <td class="tbody">{{ product.character[val] }}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <!--Packaging-->
            <div
              class="tab-pane fade"
              id="pills-packaging"
              role="tabpanel"
              aria-labelledby="pills-packaging-tab"
            >
              <div class="row detailsMore">
                <div class="col-lg-12">
                  <h1>Packaging & Minimum Order</h1>
                  <th class="headerTable">Individual Packages (1 unit)</th>
                  <table>
                    <tr>
                      <td class="thead">Package Unit</td>
                      <td class="tbody"></td>
                    </tr>
                    <tr>
                      <td class="thead">Volume of Packaging</td>
                      <td class="tbody"></td>
                    </tr>
                    <tr>
                      <td class="thead">Weight of Packaging</td>
                      <td class="tbody"></td>
                    </tr>
                    <tr>
                      <td class="thead">Price of Packaging</td>
                      <td class="tbody"></td>
                    </tr>
                  </table>
                  <th class="headerTable">Bulk Packages</th>
                  <table>
                    <tr>
                      <td class="thead">Shipment Packaging</td>
                      <td class="tbody"></td>
                    </tr>
                    <tr>
                      <td class="thead">Weight of Shipment Package</td>
                      <td class="tbody"></td>
                    </tr>
                    <tr>
                      <td class="thead">Dimension of Shipment Package</td>
                      <td class="tbody"></td>
                    </tr>
                    <tr>
                      <td class="thead">Price of Shipment</td>
                      <td class="tbody"></td>
                    </tr>
                    <tr>
                      <td class="thead">Number of Unit Per Shipment Package</td>
                      <td class="tbody"></td>
                    </tr>
                    <tr>
                      <td class="thead">Shipping in Container</td>
                      <td class="tbody"></td>
                    </tr>
                    <tr>
                      <td class="thead">Supplier Ability</td>
                      <td class="tbody"></td>
                    </tr>
                    <tr>
                      <td class="thead">Minimum Order Quantity</td>
                      <td class="tbody"></td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <!--Certification-->
            <div
              class="tab-pane fade"
              id="pills-certification"
              role="tabpanel"
              aria-labelledby="pills-certification-tab"
            >
              <div class="row detailsMore" v-if="product">
                <div class="col-lg-12">
                  <h1>Certifications</h1>
                  <table v-if="product.certification">
                    <tr v-for="(cert, i) in product.certification" :key="i">
                      <td class="thead certi">{{ cert.name }}</td>
                      <td class="tbody certi">
                        <a :href="cert.file_url" target="_blank"
                          >View Certification</a
                        >
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <!--Review-->
            <div
              class="tab-pane fade"
              id="pills-review"
              role="tabpanel"
              aria-labelledby="pills-review-tab"
            >
              <div class="row justify-content-center mt-4">
                <div class="col-md-5 text-center">
                  <div class="overallRated">
                    <h1>4<span> out of 5</span></h1>
                    <p class="star">
                      <span><i class="fa fa-star rated"></i></span>
                      <span><i class="fa fa-star rated"></i></span>
                      <span><i class="fa fa-star rated"></i></span>
                      <span><i class="fa fa-star rated"></i></span>
                      <span><i class="fa fa-star"></i></span>
                    </p>
                    <p class="ratingText">3 reviews</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="progressDiv">
                    <div class="starNumber">
                      <p>5 stars</p>
                    </div>
                    <div class="starProgress">
                      <div class="progress">
                        <div
                          class="progress-bar bg-success"
                          role="progressbar"
                          style="width: 50%"
                          aria-valuemax="100"
                        >
                          1 rating
                        </div>
                      </div>
                    </div>
                    <div class="clear"></div>
                  </div>
                  <div class="progressDiv">
                    <div class="starNumber">
                      <p>4 stars</p>
                    </div>
                    <div class="starProgress">
                      <div class="progress">
                        <div
                          class="progress-bar bg-success"
                          role="progressbar"
                          style="width: 50%"
                          aria-valuemax="100"
                        >
                          1 rating
                        </div>
                      </div>
                    </div>
                    <div class="clear"></div>
                  </div>
                  <div class="progressDiv">
                    <div class="starNumber">
                      <p>3 stars</p>
                    </div>
                    <div class="starProgress">
                      <div class="progress">
                        <div
                          class="progress-bar bg-success"
                          role="progressbar"
                          style="width: 0%"
                          aria-valuemax="100"
                        >
                          0 rating
                        </div>
                      </div>
                    </div>
                    <div class="clear"></div>
                  </div>
                  <div class="progressDiv">
                    <div class="starNumber">
                      <p>2 stars</p>
                    </div>
                    <div class="starProgress">
                      <div class="progress">
                        <div
                          class="progress-bar bg-success"
                          role="progressbar"
                          style="width: 50%"
                          aria-valuemax="100"
                        >
                          1 rating
                        </div>
                      </div>
                    </div>
                    <div class="clear"></div>
                  </div>
                  <div class="progressDiv">
                    <div class="starNumber">
                      <p>1 star</p>
                    </div>
                    <div class="starProgress">
                      <div class="progress">
                        <div
                          class="progress-bar bg-success"
                          role="progressbar"
                          style="width: 0%"
                          aria-valuemax="100"
                        >
                          0 rating
                        </div>
                      </div>
                    </div>
                    <div class="clear"></div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="reviews">
                    <h1>Reviews (3)</h1>
                    <div class="box">
                      <h4>Simon Isaac</h4>
                      <p class="star">
                        <span><i class="fa fa-star"></i></span>
                        <span><i class="fa fa-star"></i></span>
                        <span><i class="fa fa-star"></i></span>
                        <span><i class="fa fa-star"></i></span>
                        <span><i class="fa fa-star"></i></span>
                      </p>
                      <p class="time">3 hours ago</p>
                      <p class="comment">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Omnis et quae qui saepe a. In, inventore beatae.
                        Fuga, perspiciatis iste!
                      </p>
                    </div>
                    <div class="box">
                      <h4>Susan Adebimpe</h4>
                      <p class="star">
                        <span><i class="fa fa-star"></i></span>
                        <span><i class="fa fa-star"></i></span>
                        <span><i class="fa fa-star"></i></span>
                        <span><i class="fa fa-star"></i></span>
                      </p>
                      <p class="time">20 hours ago</p>
                      <p class="comment">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rerum cupiditate porro quaerat esse dolorem optio.
                      </p>
                    </div>
                    <div class="box">
                      <h4>Susan Adebimpe</h4>
                      <p class="star">
                        <span><i class="fa fa-star"></i></span>
                        <span><i class="fa fa-star"></i></span>
                      </p>
                      <p class="time">1 day ago</p>
                      <p class="comment">Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <section class="ourProduct">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12 similarProduct mb-3">
          <h2>Similar product you may like</h2>
        </div>
        <div class="col-md-12">
          <div class="container contProduct">
            <div class="row">
              <div class="itemProduct" v-for="(prod, i) in products" :key="i">
                <router-link to="#">
                  <div class="imgArea">
                    <img :src="prod.img_url[0]" draggable="false" />
                  </div>
                </router-link>
                <div class="detailArea">
                  <h5>{{ prod.name }}</h5>
                  <p>
                    {{ prod.package.price }} per {{ prod.package.weight
                    }}{{ prod.package.unit }}
                  </p>
                  <router-link
                    :to="'/products/inner-product/' + prod._id"
                    class="route-link"
                    ><a>View Products <i class="bi bi-arrow-right"></i></a
                  ></router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <mainFooter />
</template>
<style scoped src="@/assets/css/slider.css"></style>
<style scoped src="@/assets/css/styleFrontend.css"></style>
<style scoped src="@/assets/css/bootstrap.css"></style>
<script>
import MainHeader from "./mainHeader.vue";
import SearchHeader from "./searchHeader.vue";
import MainFooter from "./mainFooter.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation } from "swiper";
import { Modal } from "bootstrap";
import $ from "jquery";
require("jquery.easing");
import { countries } from "../assets/countries";
import QUOTE from "./../service/quote-service";
import Swal from "sweetalert2";
export default {
  name: "Produce Mart",
  components: {
    Swiper,
    SwiperSlide,
    mainHeader: MainHeader,
    searchHeader: SearchHeader,
    mainFooter: MainFooter,
  },
  created() {
    this.getProduct();
    this.getAllproducts();
  },
  mounted() {
    window.scrollTo(0, 0);
    //jQuery time
    var current_fs, next_fs, previous_fs; //fieldsets
    var left, opacity, scale; //fieldset properties which we will animate
    var animating; //flag to prevent quick multi-click glitches
    $(".next").click(function () {
      if (animating) return false;
      animating = true;
      current_fs = $(this).parent();
      next_fs = $(this).parent().next();
      //activate next step on progressbar using the index of next_fs
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
      //show the next fieldset
      next_fs.show();
      //hide the current fieldset with style
      current_fs.animate(
        { opacity: 0 },
        {
          step: function (now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale current_fs down to 80%
            scale = 1 - (1 - now) * 0.2;
            //2. bring next_fs from the right(50%)
            left = now * 50 + "%";
            //3. increase opacity of next_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({
              transform: "scale(" + scale + ")",
              position: "absolute",
            });
            next_fs.css({ left: left, opacity: opacity });
          },
          duration: 800,
          complete: function () {
            current_fs.hide();
            animating = false;
          },
          //this comes from the custom easing plugin
          easing: "easeInOutBack",
        }
      );
    });
    $(".previous").click(function () {
      if (animating) return false;
      animating = false;
      current_fs = $(this).parent();
      previous_fs = $(this).parent().prev();
      //de-activate current step on progressbar
      $("#progressbar li")
        .eq($("fieldset").index(current_fs))
        .removeClass("active");
      //show the previous fieldset
      previous_fs.show();
      //hide the current fieldset with style
      current_fs.animate(
        { opacity: 0 },
        {
          step: function (now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale previous_fs from 80% to 100%
            scale = 0.8 + (1 - now) * 0.2;
            //2. take current_fs to the right(50%) - from 0%
            left = (1 - now) * 50 + "%";
            //3. increase opacity of previous_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({ left: left });
            previous_fs.css({
              transform: "scale(" + scale + ")",
              opacity: opacity,
            });
          },
          duration: 800,
          complete: function () {
            current_fs.hide();
            animating = false;
          },
          //this comes from the custom easing plugin
          easing: "easeInOutBack",
        }
      );
    });
  },
  data() {
    return {
      product: {
        shipment: {
          price: "",
          weight: "",
          weight_unit: "",
        },
        package: {
          price: "",
          unit: "",
        },
        order: {
          min_quantity: "",
          qty_unit: "",
        },
      },
      quantity: "",
      airCountry: "",
      airPort: "",
      airIncoterm: "",
      seaCountry: "",
      seaPort: "",
      seaIncoterm: "",
      roadAdd1: "",
      roadAdd2: "",
      roadCity: "",
      roadState: "",
      roadCountry: "",
      roadZip: "",
      roadIncoterm: "",
      products: null,
      id: this.$route.params.id,
      countries: countries,
      EffectFlip,
      Pagination,
      Navigation,
      modal: null,
      errMessage: "",
      air: false,
      road: false,
      sea: false,
    };
  },
  computed: {
    userAuth() {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user && user.token) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    async getProduct() {
      const res = await fetch(
        "https://producemart.herokuapp.com/getProductById/" + this.id
      );
      const { data } = await res.json();
      this.product = data;
    },
    showModal() {
      this.modal = new Modal(this.$refs.exampleModal);
      this.modal.show();
    },
    addQuote() {
      const data = {
        quantity: this.quantity,
        airCountry: this.airCountry,
        airPort: this.airPort,
        airIncoterm: this.airIncoterm,
        seaCountry: this.seaCountry,
        seaPort: this.seaPort,
        seaIncoterm: this.seaIncoterm,
        roadAddress: this.roadAdd1 + "," + this.roadAdd2,
        roadCity: this.roadCity,
        roadState: this.roadState,
        roadCountry: this.roadCountry,
        postal_code: this.roadZip,
      };
      QUOTE.addProductQuote(data, this.id)
        .then((res) => {
          console.log(res);
          this.modal.hide();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${res.data.message}`,
            showConfirmButton: false,
            timer: 5500,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    minimum(item) {
      if (this.quantity < item) {
        this.errMessage = `oOps!, quantity cannot be less than ${item}`;
      } else if (this.quantity >= item) {
        this.errMessage = "";
      } else if (this.quantity == "") {
        this.errMessage = "";
      } else {
        this.errMessage = "";
      }
    },

    async getAllproducts() {
      const res = await fetch(
        "https://producemart.herokuapp.com/getAllProducts"
      );
      const { data } = await res.json();

      this.products = data
        .filter((val) => val.status == "active" && val._id != this.id)
        .splice(0, 3);

      // this.products = data;
      // console.log(this.products);
    },
  },
};
</script>
