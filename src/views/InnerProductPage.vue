<template>
  <title>Products | Produce Mart</title>
  <mainHeader/>
  <searchHeader/>
  
  <!--Page Breadcrumb-->
  <section class="pageProductBreadcrumb">
      <div class="container">
          <div class="row">
                <div class="col-lg-12">
                    <div class="textHead">
                        <p><router-link to="/" class="routeLink">Home</router-link> <span>></span> <router-link to="/products" class="routeLink">All Products</router-link></p>
                        <h2>Product Name Here</h2>
                    </div>
                </div>
          </div>
      </div>
  </section><!--Page Breadcrumb Ends-->

  <main class="productInnerMain">
      <div class="container mt-5">
          <div class="row">
              <div class="col-lg-6">
                  <swiper :style="{'--swiper-navigation-color': '#78c97f','--swiper-pagination-color': '#78c97f',}" :effect="'flip'" :grabCursor="true" :pagination="true" :navigation="true" :modules="modules" class="mySwiper">
                    <swiper-slide>
                        <img src="../assets/img/products/product1.png" />
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/img/products/product11.png" />
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/img/products/product111.png" />
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/img/products/product1111.png" />
                    </swiper-slide>
                </swiper>
                <div class="shareDiv">
                    <p>Share this product:</p>
                    <a href="#"><img src="../assets/img/socialFacebook.png"></a>
                    <a href="#"><img src="../assets/img/socialInstagram.png"></a>
                    <a href="#"><img src="../assets/img/socialTwitter.png"></a>
                    <a href="#"><img src="../assets/img/socialLink.png"></a>
                </div>
              </div>
              <div class="col-lg-6">
                  <div class="row productIntroText justify-content-center">
                      <div class="col-lg-12 detailsDiv">
                        <span>Product Name</span>
                        <p>Product Name Here - CODE-1976</p>
                        <small><img src="@/assets/img/dashboard-img/medalGold.png"> Gold Rated Supplier | <a href="#">See Audit Report</a></small>
                      </div>
                      <div class="col-lg-12 detailsDiv">
                        <span>Price</span>
                        <p>$500 per 100kg</p>
                        <p>$1,500 per bag</p>
                      </div>
                      <div class="col-lg-4 detailsDivBelow">
                          <h5>Crop Year</h5>
                          <h6>2021, 2022</h6>
                      </div>
                      <div class="col-lg-4 detailsDivBelow">
                          <h5>Produce Variety</h5>
                          <h6>2021, 2022</h6>
                      </div>
                      <div class="col-lg-4 detailsDivBelow">
                          <h5>Supply Ability</h5>
                          <h6>10,000 bags per week</h6>
                      </div>
                      <div class="col-lg-4 detailsDivBelow">
                          <h5>Available</h5>
                          <h6>From: 02-Jan-2022 <br> To: 02-Nov-2022</h6>
                      </div>
                      <div class="col-lg-4 detailsDivBelow">
                          <h5>Grade, Style & Quality</h5>
                          <h6>Fresh</h6>
                      </div>
                      <div class="col-lg-4 detailsDivBelow">
                          <h5>Minimum Order</h5>
                          <h6>1000 bags</h6>
                      </div>
                      <div class="col-lg-4 detailsDivBelow">
                          <h5>Incoterms</h5>
                          <h6>EXW - EX Works</h6>
                      </div>
                  </div>
              </div>
              <div class="col-lg-12 text-center">
                <div class="btnDiv">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Request Quote <i class="bi bi-arrow-right"></i></a>
                </div>
              </div>
          </div>
      </div>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Request a Quote</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body modalBody">
                        <form id="msform">
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
                                            <img src="@/assets/img/requestQuote1.png">
                                        </div>
                                    </div>
                                </div>
                                <h2 class="fs-title">Indicate the quantity of the produce you want</h2>
                                <input type="text" value="$500 per 100kg" disabled class="input">
                                <input type="text" placeholder="Input quantity" class="input">
                                <input type="button" name="next" class="next action-button" value="Next" />
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
                                            <img src="@/assets/img/requestQuote2.png">
                                        </div>
                                    </div>
                                </div>
                                <h2 class="fs-title">Choose shipping service</h2>
                                <div class="checkboxDiv">
                                    <input type="checkbox" id="air" @click="sendAir()"> <label for="air">Send by air</label>
                                </div>
                                <div class="checkboxDiv">
                                    <input type="checkbox" id="sea" @click="sendSea()"> <label for="sea">Send by sea</label>
                                </div>
                                <div class="checkboxDiv">
                                    <input type="checkbox" id="road" @click="sendRoad()"> <label for="road">Send by road</label>
                                </div>
                                <!-- Send by air -->
                                <div class="container showDivBelow" id="ifSendAir">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <h3>Destinations - Send By Air</h3>
                                            <div class="lineHr"></div>
                                        </div>
                                        <div class="col-lg-12 mb-2">
                                            <label>Country</label>
                                            <select class="input">
                                                <option value="Country" hidden>Select Country</option>
                                                <option value="Afganistan">Afghanistan</option>
                                                <option value="Albania">Albania</option>
                                                <option value="Algeria">Algeria</option>
                                                <option value="American Samoa">American Samoa</option>
                                                <option value="Andorra">Andorra</option>
                                                <option value="Angola">Angola</option>
                                                <option value="Anguilla">Anguilla</option>
                                                <option value="Antigua & Barbuda">Antigua & Barbuda</option>
                                                <option value="Argentina">Argentina</option>
                                                <option value="Armenia">Armenia</option>
                                                <option value="Aruba">Aruba</option>
                                                <option value="Australia">Australia</option>
                                                <option value="Austria">Austria</option>
                                                <option value="Azerbaijan">Azerbaijan</option>
                                                <option value="Bahamas">Bahamas</option>
                                                <option value="Bahrain">Bahrain</option>
                                                <option value="Bangladesh">Bangladesh</option>
                                                <option value="Barbados">Barbados</option>
                                                <option value="Belarus">Belarus</option>
                                                <option value="Belgium">Belgium</option>
                                                <option value="Belize">Belize</option>
                                                <option value="Benin">Benin</option>
                                                <option value="Bermuda">Bermuda</option>
                                                <option value="Bhutan">Bhutan</option>
                                                <option value="Bolivia">Bolivia</option>
                                                <option value="Bonaire">Bonaire</option>
                                                <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
                                                <option value="Botswana">Botswana</option>
                                                <option value="Brazil">Brazil</option>
                                                <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                                                <option value="Brunei">Brunei</option>
                                                <option value="Bulgaria">Bulgaria</option>
                                                <option value="Burkina Faso">Burkina Faso</option>
                                                <option value="Burundi">Burundi</option>
                                                <option value="Cambodia">Cambodia</option>
                                                <option value="Cameroon">Cameroon</option>
                                                <option value="Canada">Canada</option>
                                                <option value="Canary Islands">Canary Islands</option>
                                                <option value="Cape Verde">Cape Verde</option>
                                                <option value="Cayman Islands">Cayman Islands</option>
                                                <option value="Central African Republic">Central African Republic</option>
                                                <option value="Chad">Chad</option>
                                                <option value="Channel Islands">Channel Islands</option>
                                                <option value="Chile">Chile</option>
                                                <option value="China">China</option>
                                                <option value="Christmas Island">Christmas Island</option>
                                                <option value="Cocos Island">Cocos Island</option>
                                                <option value="Colombia">Colombia</option>
                                                <option value="Comoros">Comoros</option>
                                                <option value="Congo">Congo</option>
                                                <option value="Cook Islands">Cook Islands</option>
                                                <option value="Costa Rica">Costa Rica</option>
                                                <option value="Cote DIvoire">Cote DIvoire</option>
                                                <option value="Croatia">Croatia</option>
                                                <option value="Cuba">Cuba</option>
                                                <option value="Curaco">Curacao</option>
                                                <option value="Cyprus">Cyprus</option>
                                                <option value="Czech Republic">Czech Republic</option>
                                                <option value="Denmark">Denmark</option>
                                                <option value="Djibouti">Djibouti</option>
                                                <option value="Dominica">Dominica</option>
                                                <option value="Dominican Republic">Dominican Republic</option>
                                                <option value="East Timor">East Timor</option>
                                                <option value="Ecuador">Ecuador</option>
                                                <option value="Egypt">Egypt</option>
                                                <option value="El Salvador">El Salvador</option>
                                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                <option value="Eritrea">Eritrea</option>
                                                <option value="Estonia">Estonia</option>
                                                <option value="Ethiopia">Ethiopia</option>
                                                <option value="Falkland Islands">Falkland Islands</option>
                                                <option value="Faroe Islands">Faroe Islands</option>
                                                <option value="Fiji">Fiji</option>
                                                <option value="Finland">Finland</option>
                                                <option value="France">France</option>
                                                <option value="French Guiana">French Guiana</option>
                                                <option value="French Polynesia">French Polynesia</option>
                                                <option value="French Southern Ter">French Southern Ter</option>
                                                <option value="Gabon">Gabon</option>
                                                <option value="Gambia">Gambia</option>
                                                <option value="Georgia">Georgia</option>
                                                <option value="Germany">Germany</option>
                                                <option value="Ghana">Ghana</option>
                                                <option value="Gibraltar">Gibraltar</option>
                                                <option value="Great Britain">Great Britain</option>
                                                <option value="Greece">Greece</option>
                                                <option value="Greenland">Greenland</option>
                                                <option value="Grenada">Grenada</option>
                                                <option value="Guadeloupe">Guadeloupe</option>
                                                <option value="Guam">Guam</option>
                                                <option value="Guatemala">Guatemala</option>
                                                <option value="Guinea">Guinea</option>
                                                <option value="Guyana">Guyana</option>
                                                <option value="Haiti">Haiti</option>
                                                <option value="Hawaii">Hawaii</option>
                                                <option value="Honduras">Honduras</option>
                                                <option value="Hong Kong">Hong Kong</option>
                                                <option value="Hungary">Hungary</option>
                                                <option value="Iceland">Iceland</option>
                                                <option value="Indonesia">Indonesia</option>
                                                <option value="India">India</option>
                                                <option value="Iran">Iran</option>
                                                <option value="Iraq">Iraq</option>
                                                <option value="Ireland">Ireland</option>
                                                <option value="Isle of Man">Isle of Man</option>
                                                <option value="Israel">Israel</option>
                                                <option value="Italy">Italy</option>
                                                <option value="Jamaica">Jamaica</option>
                                                <option value="Japan">Japan</option>
                                                <option value="Jordan">Jordan</option>
                                                <option value="Kazakhstan">Kazakhstan</option>
                                                <option value="Kenya">Kenya</option>
                                                <option value="Kiribati">Kiribati</option>
                                                <option value="Korea North">Korea North</option>
                                                <option value="Korea Sout">Korea South</option>
                                                <option value="Kuwait">Kuwait</option>
                                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                <option value="Laos">Laos</option>
                                                <option value="Latvia">Latvia</option>
                                                <option value="Lebanon">Lebanon</option>
                                                <option value="Lesotho">Lesotho</option>
                                                <option value="Liberia">Liberia</option>
                                                <option value="Libya">Libya</option>
                                                <option value="Liechtenstein">Liechtenstein</option>
                                                <option value="Lithuania">Lithuania</option>
                                                <option value="Luxembourg">Luxembourg</option>
                                                <option value="Macau">Macau</option>
                                                <option value="Macedonia">Macedonia</option>
                                                <option value="Madagascar">Madagascar</option>
                                                <option value="Malaysia">Malaysia</option>
                                                <option value="Malawi">Malawi</option>
                                                <option value="Maldives">Maldives</option>
                                                <option value="Mali">Mali</option>
                                                <option value="Malta">Malta</option>
                                                <option value="Marshall Islands">Marshall Islands</option>
                                                <option value="Martinique">Martinique</option>
                                                <option value="Mauritania">Mauritania</option>
                                                <option value="Mauritius">Mauritius</option>
                                                <option value="Mayotte">Mayotte</option>
                                                <option value="Mexico">Mexico</option>
                                                <option value="Midway Islands">Midway Islands</option>
                                                <option value="Moldova">Moldova</option>
                                                <option value="Monaco">Monaco</option>
                                                <option value="Mongolia">Mongolia</option>
                                                <option value="Montserrat">Montserrat</option>
                                                <option value="Morocco">Morocco</option>
                                                <option value="Mozambique">Mozambique</option>
                                                <option value="Myanmar">Myanmar</option>
                                                <option value="Nambia">Nambia</option>
                                                <option value="Nauru">Nauru</option>
                                                <option value="Nepal">Nepal</option>
                                                <option value="Netherland Antilles">Netherland Antilles</option>
                                                <option value="Netherlands">Netherlands (Holland, Europe)</option>
                                                <option value="Nevis">Nevis</option>
                                                <option value="New Caledonia">New Caledonia</option>
                                                <option value="New Zealand">New Zealand</option>
                                                <option value="Nicaragua">Nicaragua</option>
                                                <option value="Niger">Niger</option>
                                                <option value="Nigeria">Nigeria</option>
                                                <option value="Niue">Niue</option>
                                                <option value="Norfolk Island">Norfolk Island</option>
                                                <option value="Norway">Norway</option>
                                                <option value="Oman">Oman</option>
                                                <option value="Pakistan">Pakistan</option>
                                                <option value="Palau Island">Palau Island</option>
                                                <option value="Palestine">Palestine</option>
                                                <option value="Panama">Panama</option>
                                                <option value="Papua New Guinea">Papua New Guinea</option>
                                                <option value="Paraguay">Paraguay</option>
                                                <option value="Peru">Peru</option>
                                                <option value="Phillipines">Philippines</option>
                                                <option value="Pitcairn Island">Pitcairn Island</option>
                                                <option value="Poland">Poland</option>
                                                <option value="Portugal">Portugal</option>
                                                <option value="Puerto Rico">Puerto Rico</option>
                                                <option value="Qatar">Qatar</option>
                                                <option value="Republic of Montenegro">Republic of Montenegro</option>
                                                <option value="Republic of Serbia">Republic of Serbia</option>
                                                <option value="Reunion">Reunion</option>
                                                <option value="Romania">Romania</option>
                                                <option value="Russia">Russia</option>
                                                <option value="Rwanda">Rwanda</option>
                                                <option value="St Barthelemy">St Barthelemy</option>
                                                <option value="St Eustatius">St Eustatius</option>
                                                <option value="St Helena">St Helena</option>
                                                <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                                                <option value="St Lucia">St Lucia</option>
                                                <option value="St Maarten">St Maarten</option>
                                                <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
                                                <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
                                                <option value="Saipan">Saipan</option>
                                                <option value="Samoa">Samoa</option>
                                                <option value="Samoa American">Samoa American</option>
                                                <option value="San Marino">San Marino</option>
                                                <option value="Sao Tome & Principe">Sao Tome & Principe</option>
                                                <option value="Saudi Arabia">Saudi Arabia</option>
                                                <option value="Senegal">Senegal</option>
                                                <option value="Seychelles">Seychelles</option>
                                                <option value="Sierra Leone">Sierra Leone</option>
                                                <option value="Singapore">Singapore</option>
                                                <option value="Slovakia">Slovakia</option>
                                                <option value="Slovenia">Slovenia</option>
                                                <option value="Solomon Islands">Solomon Islands</option>
                                                <option value="Somalia">Somalia</option>
                                                <option value="South Africa">South Africa</option>
                                                <option value="Spain">Spain</option>
                                                <option value="Sri Lanka">Sri Lanka</option>
                                                <option value="Sudan">Sudan</option>
                                                <option value="Suriname">Suriname</option>
                                                <option value="Swaziland">Swaziland</option>
                                                <option value="Sweden">Sweden</option>
                                                <option value="Switzerland">Switzerland</option>
                                                <option value="Syria">Syria</option>
                                                <option value="Tahiti">Tahiti</option>
                                                <option value="Taiwan">Taiwan</option>
                                                <option value="Tajikistan">Tajikistan</option>
                                                <option value="Tanzania">Tanzania</option>
                                                <option value="Thailand">Thailand</option>
                                                <option value="Togo">Togo</option>
                                                <option value="Tokelau">Tokelau</option>
                                                <option value="Tonga">Tonga</option>
                                                <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                                                <option value="Tunisia">Tunisia</option>
                                                <option value="Turkey">Turkey</option>
                                                <option value="Turkmenistan">Turkmenistan</option>
                                                <option value="Turks & Caicos Is">Turks & Caicos Is</option>
                                                <option value="Tuvalu">Tuvalu</option>
                                                <option value="Uganda">Uganda</option>
                                                <option value="United Kingdom">United Kingdom</option>
                                                <option value="Ukraine">Ukraine</option>
                                                <option value="United Arab Erimates">United Arab Emirates</option>
                                                <option value="United States of America">United States of America</option>
                                                <option value="Uraguay">Uruguay</option>
                                                <option value="Uzbekistan">Uzbekistan</option>
                                                <option value="Vanuatu">Vanuatu</option>
                                                <option value="Vatican City State">Vatican City State</option>
                                                <option value="Venezuela">Venezuela</option>
                                                <option value="Vietnam">Vietnam</option>
                                                <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                                                <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                                                <option value="Wake Island">Wake Island</option>
                                                <option value="Wallis & Futana Is">Wallis & Futana Is</option>
                                                <option value="Yemen">Yemen</option>
                                                <option value="Zaire">Zaire</option>
                                                <option value="Zambia">Zambia</option>
                                                <option value="Zimbabwe">Zimbabwe</option>
                                            </select>
                                        </div>
                                        <div class="col-lg-12 mb-2">
                                            <label>Port</label>
                                            <select class="input">
                                                <option>Select Port</option>
                                            </select>
                                        </div>
                                        <div class="col-lg-12">
                                            <label>Incoterms</label>
                                            <select class="input">
                                                <option>Select Port</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <!-- Send by sea -->
                                <div class="container showDivBelow" id="ifSendSea">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <h3>Destinations - Send By Sea</h3>
                                            <div class="lineHr"></div>
                                        </div>
                                        <div class="col-lg-12 mb-2">
                                            <label>Country</label>
                                            <select class="input">
                                                <option value="Country" hidden>Select Country</option>
                                                <option value="Afganistan">Afghanistan</option>
                                                <option value="Albania">Albania</option>
                                                <option value="Algeria">Algeria</option>
                                                <option value="American Samoa">American Samoa</option>
                                                <option value="Andorra">Andorra</option>
                                                <option value="Angola">Angola</option>
                                                <option value="Anguilla">Anguilla</option>
                                                <option value="Antigua & Barbuda">Antigua & Barbuda</option>
                                                <option value="Argentina">Argentina</option>
                                                <option value="Armenia">Armenia</option>
                                                <option value="Aruba">Aruba</option>
                                                <option value="Australia">Australia</option>
                                                <option value="Austria">Austria</option>
                                                <option value="Azerbaijan">Azerbaijan</option>
                                                <option value="Bahamas">Bahamas</option>
                                                <option value="Bahrain">Bahrain</option>
                                                <option value="Bangladesh">Bangladesh</option>
                                                <option value="Barbados">Barbados</option>
                                                <option value="Belarus">Belarus</option>
                                                <option value="Belgium">Belgium</option>
                                                <option value="Belize">Belize</option>
                                                <option value="Benin">Benin</option>
                                                <option value="Bermuda">Bermuda</option>
                                                <option value="Bhutan">Bhutan</option>
                                                <option value="Bolivia">Bolivia</option>
                                                <option value="Bonaire">Bonaire</option>
                                                <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
                                                <option value="Botswana">Botswana</option>
                                                <option value="Brazil">Brazil</option>
                                                <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                                                <option value="Brunei">Brunei</option>
                                                <option value="Bulgaria">Bulgaria</option>
                                                <option value="Burkina Faso">Burkina Faso</option>
                                                <option value="Burundi">Burundi</option>
                                                <option value="Cambodia">Cambodia</option>
                                                <option value="Cameroon">Cameroon</option>
                                                <option value="Canada">Canada</option>
                                                <option value="Canary Islands">Canary Islands</option>
                                                <option value="Cape Verde">Cape Verde</option>
                                                <option value="Cayman Islands">Cayman Islands</option>
                                                <option value="Central African Republic">Central African Republic</option>
                                                <option value="Chad">Chad</option>
                                                <option value="Channel Islands">Channel Islands</option>
                                                <option value="Chile">Chile</option>
                                                <option value="China">China</option>
                                                <option value="Christmas Island">Christmas Island</option>
                                                <option value="Cocos Island">Cocos Island</option>
                                                <option value="Colombia">Colombia</option>
                                                <option value="Comoros">Comoros</option>
                                                <option value="Congo">Congo</option>
                                                <option value="Cook Islands">Cook Islands</option>
                                                <option value="Costa Rica">Costa Rica</option>
                                                <option value="Cote DIvoire">Cote DIvoire</option>
                                                <option value="Croatia">Croatia</option>
                                                <option value="Cuba">Cuba</option>
                                                <option value="Curaco">Curacao</option>
                                                <option value="Cyprus">Cyprus</option>
                                                <option value="Czech Republic">Czech Republic</option>
                                                <option value="Denmark">Denmark</option>
                                                <option value="Djibouti">Djibouti</option>
                                                <option value="Dominica">Dominica</option>
                                                <option value="Dominican Republic">Dominican Republic</option>
                                                <option value="East Timor">East Timor</option>
                                                <option value="Ecuador">Ecuador</option>
                                                <option value="Egypt">Egypt</option>
                                                <option value="El Salvador">El Salvador</option>
                                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                <option value="Eritrea">Eritrea</option>
                                                <option value="Estonia">Estonia</option>
                                                <option value="Ethiopia">Ethiopia</option>
                                                <option value="Falkland Islands">Falkland Islands</option>
                                                <option value="Faroe Islands">Faroe Islands</option>
                                                <option value="Fiji">Fiji</option>
                                                <option value="Finland">Finland</option>
                                                <option value="France">France</option>
                                                <option value="French Guiana">French Guiana</option>
                                                <option value="French Polynesia">French Polynesia</option>
                                                <option value="French Southern Ter">French Southern Ter</option>
                                                <option value="Gabon">Gabon</option>
                                                <option value="Gambia">Gambia</option>
                                                <option value="Georgia">Georgia</option>
                                                <option value="Germany">Germany</option>
                                                <option value="Ghana">Ghana</option>
                                                <option value="Gibraltar">Gibraltar</option>
                                                <option value="Great Britain">Great Britain</option>
                                                <option value="Greece">Greece</option>
                                                <option value="Greenland">Greenland</option>
                                                <option value="Grenada">Grenada</option>
                                                <option value="Guadeloupe">Guadeloupe</option>
                                                <option value="Guam">Guam</option>
                                                <option value="Guatemala">Guatemala</option>
                                                <option value="Guinea">Guinea</option>
                                                <option value="Guyana">Guyana</option>
                                                <option value="Haiti">Haiti</option>
                                                <option value="Hawaii">Hawaii</option>
                                                <option value="Honduras">Honduras</option>
                                                <option value="Hong Kong">Hong Kong</option>
                                                <option value="Hungary">Hungary</option>
                                                <option value="Iceland">Iceland</option>
                                                <option value="Indonesia">Indonesia</option>
                                                <option value="India">India</option>
                                                <option value="Iran">Iran</option>
                                                <option value="Iraq">Iraq</option>
                                                <option value="Ireland">Ireland</option>
                                                <option value="Isle of Man">Isle of Man</option>
                                                <option value="Israel">Israel</option>
                                                <option value="Italy">Italy</option>
                                                <option value="Jamaica">Jamaica</option>
                                                <option value="Japan">Japan</option>
                                                <option value="Jordan">Jordan</option>
                                                <option value="Kazakhstan">Kazakhstan</option>
                                                <option value="Kenya">Kenya</option>
                                                <option value="Kiribati">Kiribati</option>
                                                <option value="Korea North">Korea North</option>
                                                <option value="Korea Sout">Korea South</option>
                                                <option value="Kuwait">Kuwait</option>
                                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                <option value="Laos">Laos</option>
                                                <option value="Latvia">Latvia</option>
                                                <option value="Lebanon">Lebanon</option>
                                                <option value="Lesotho">Lesotho</option>
                                                <option value="Liberia">Liberia</option>
                                                <option value="Libya">Libya</option>
                                                <option value="Liechtenstein">Liechtenstein</option>
                                                <option value="Lithuania">Lithuania</option>
                                                <option value="Luxembourg">Luxembourg</option>
                                                <option value="Macau">Macau</option>
                                                <option value="Macedonia">Macedonia</option>
                                                <option value="Madagascar">Madagascar</option>
                                                <option value="Malaysia">Malaysia</option>
                                                <option value="Malawi">Malawi</option>
                                                <option value="Maldives">Maldives</option>
                                                <option value="Mali">Mali</option>
                                                <option value="Malta">Malta</option>
                                                <option value="Marshall Islands">Marshall Islands</option>
                                                <option value="Martinique">Martinique</option>
                                                <option value="Mauritania">Mauritania</option>
                                                <option value="Mauritius">Mauritius</option>
                                                <option value="Mayotte">Mayotte</option>
                                                <option value="Mexico">Mexico</option>
                                                <option value="Midway Islands">Midway Islands</option>
                                                <option value="Moldova">Moldova</option>
                                                <option value="Monaco">Monaco</option>
                                                <option value="Mongolia">Mongolia</option>
                                                <option value="Montserrat">Montserrat</option>
                                                <option value="Morocco">Morocco</option>
                                                <option value="Mozambique">Mozambique</option>
                                                <option value="Myanmar">Myanmar</option>
                                                <option value="Nambia">Nambia</option>
                                                <option value="Nauru">Nauru</option>
                                                <option value="Nepal">Nepal</option>
                                                <option value="Netherland Antilles">Netherland Antilles</option>
                                                <option value="Netherlands">Netherlands (Holland, Europe)</option>
                                                <option value="Nevis">Nevis</option>
                                                <option value="New Caledonia">New Caledonia</option>
                                                <option value="New Zealand">New Zealand</option>
                                                <option value="Nicaragua">Nicaragua</option>
                                                <option value="Niger">Niger</option>
                                                <option value="Nigeria">Nigeria</option>
                                                <option value="Niue">Niue</option>
                                                <option value="Norfolk Island">Norfolk Island</option>
                                                <option value="Norway">Norway</option>
                                                <option value="Oman">Oman</option>
                                                <option value="Pakistan">Pakistan</option>
                                                <option value="Palau Island">Palau Island</option>
                                                <option value="Palestine">Palestine</option>
                                                <option value="Panama">Panama</option>
                                                <option value="Papua New Guinea">Papua New Guinea</option>
                                                <option value="Paraguay">Paraguay</option>
                                                <option value="Peru">Peru</option>
                                                <option value="Phillipines">Philippines</option>
                                                <option value="Pitcairn Island">Pitcairn Island</option>
                                                <option value="Poland">Poland</option>
                                                <option value="Portugal">Portugal</option>
                                                <option value="Puerto Rico">Puerto Rico</option>
                                                <option value="Qatar">Qatar</option>
                                                <option value="Republic of Montenegro">Republic of Montenegro</option>
                                                <option value="Republic of Serbia">Republic of Serbia</option>
                                                <option value="Reunion">Reunion</option>
                                                <option value="Romania">Romania</option>
                                                <option value="Russia">Russia</option>
                                                <option value="Rwanda">Rwanda</option>
                                                <option value="St Barthelemy">St Barthelemy</option>
                                                <option value="St Eustatius">St Eustatius</option>
                                                <option value="St Helena">St Helena</option>
                                                <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                                                <option value="St Lucia">St Lucia</option>
                                                <option value="St Maarten">St Maarten</option>
                                                <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
                                                <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
                                                <option value="Saipan">Saipan</option>
                                                <option value="Samoa">Samoa</option>
                                                <option value="Samoa American">Samoa American</option>
                                                <option value="San Marino">San Marino</option>
                                                <option value="Sao Tome & Principe">Sao Tome & Principe</option>
                                                <option value="Saudi Arabia">Saudi Arabia</option>
                                                <option value="Senegal">Senegal</option>
                                                <option value="Seychelles">Seychelles</option>
                                                <option value="Sierra Leone">Sierra Leone</option>
                                                <option value="Singapore">Singapore</option>
                                                <option value="Slovakia">Slovakia</option>
                                                <option value="Slovenia">Slovenia</option>
                                                <option value="Solomon Islands">Solomon Islands</option>
                                                <option value="Somalia">Somalia</option>
                                                <option value="South Africa">South Africa</option>
                                                <option value="Spain">Spain</option>
                                                <option value="Sri Lanka">Sri Lanka</option>
                                                <option value="Sudan">Sudan</option>
                                                <option value="Suriname">Suriname</option>
                                                <option value="Swaziland">Swaziland</option>
                                                <option value="Sweden">Sweden</option>
                                                <option value="Switzerland">Switzerland</option>
                                                <option value="Syria">Syria</option>
                                                <option value="Tahiti">Tahiti</option>
                                                <option value="Taiwan">Taiwan</option>
                                                <option value="Tajikistan">Tajikistan</option>
                                                <option value="Tanzania">Tanzania</option>
                                                <option value="Thailand">Thailand</option>
                                                <option value="Togo">Togo</option>
                                                <option value="Tokelau">Tokelau</option>
                                                <option value="Tonga">Tonga</option>
                                                <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                                                <option value="Tunisia">Tunisia</option>
                                                <option value="Turkey">Turkey</option>
                                                <option value="Turkmenistan">Turkmenistan</option>
                                                <option value="Turks & Caicos Is">Turks & Caicos Is</option>
                                                <option value="Tuvalu">Tuvalu</option>
                                                <option value="Uganda">Uganda</option>
                                                <option value="United Kingdom">United Kingdom</option>
                                                <option value="Ukraine">Ukraine</option>
                                                <option value="United Arab Erimates">United Arab Emirates</option>
                                                <option value="United States of America">United States of America</option>
                                                <option value="Uraguay">Uruguay</option>
                                                <option value="Uzbekistan">Uzbekistan</option>
                                                <option value="Vanuatu">Vanuatu</option>
                                                <option value="Vatican City State">Vatican City State</option>
                                                <option value="Venezuela">Venezuela</option>
                                                <option value="Vietnam">Vietnam</option>
                                                <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                                                <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                                                <option value="Wake Island">Wake Island</option>
                                                <option value="Wallis & Futana Is">Wallis & Futana Is</option>
                                                <option value="Yemen">Yemen</option>
                                                <option value="Zaire">Zaire</option>
                                                <option value="Zambia">Zambia</option>
                                                <option value="Zimbabwe">Zimbabwe</option>
                                            </select>
                                        </div>
                                        <div class="col-lg-12 mb-2">
                                            <label>Port</label>
                                            <select class="input">
                                                <option>Select Port</option>
                                            </select>
                                        </div>
                                        <div class="col-lg-12">
                                            <label>Incoterms</label>
                                            <select class="input">
                                                <option>Select Port</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <!-- Send by road -->
                                <div class="container showDivBelow" id="ifSendRoad">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <h3>Destinations - Send By Road</h3>
                                            <div class="lineHr"></div>
                                        </div>
                                        <div class="col-lg-12 mb-2">
                                            <label>Address 1</label>
                                            <textarea cols="30" rows="3" class="textarea"></textarea>
                                        </div>
                                        <div class="col-lg-12 mb-2">
                                            <label>Address 2</label>
                                            <textarea cols="30" rows="3" class="textarea"></textarea>
                                        </div>
                                        <div class="col-lg-6 mb-2">
                                            <label>City</label>
                                            <input type="text" class="input">
                                        </div>
                                        <div class="col-lg-6 mb-2">
                                            <label>State/Province</label>
                                            <input type="text" class="input">
                                        </div>
                                        <div class="col-lg-6 mb-2">
                                            <label>Country</label>
                                            <select class="input">
                                                <option value="Country" hidden>Select Country</option>
                                                <option value="Afganistan">Afghanistan</option>
                                                <option value="Albania">Albania</option>
                                                <option value="Algeria">Algeria</option>
                                                <option value="American Samoa">American Samoa</option>
                                                <option value="Andorra">Andorra</option>
                                                <option value="Angola">Angola</option>
                                                <option value="Anguilla">Anguilla</option>
                                                <option value="Antigua & Barbuda">Antigua & Barbuda</option>
                                                <option value="Argentina">Argentina</option>
                                                <option value="Armenia">Armenia</option>
                                                <option value="Aruba">Aruba</option>
                                                <option value="Australia">Australia</option>
                                                <option value="Austria">Austria</option>
                                                <option value="Azerbaijan">Azerbaijan</option>
                                                <option value="Bahamas">Bahamas</option>
                                                <option value="Bahrain">Bahrain</option>
                                                <option value="Bangladesh">Bangladesh</option>
                                                <option value="Barbados">Barbados</option>
                                                <option value="Belarus">Belarus</option>
                                                <option value="Belgium">Belgium</option>
                                                <option value="Belize">Belize</option>
                                                <option value="Benin">Benin</option>
                                                <option value="Bermuda">Bermuda</option>
                                                <option value="Bhutan">Bhutan</option>
                                                <option value="Bolivia">Bolivia</option>
                                                <option value="Bonaire">Bonaire</option>
                                                <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
                                                <option value="Botswana">Botswana</option>
                                                <option value="Brazil">Brazil</option>
                                                <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                                                <option value="Brunei">Brunei</option>
                                                <option value="Bulgaria">Bulgaria</option>
                                                <option value="Burkina Faso">Burkina Faso</option>
                                                <option value="Burundi">Burundi</option>
                                                <option value="Cambodia">Cambodia</option>
                                                <option value="Cameroon">Cameroon</option>
                                                <option value="Canada">Canada</option>
                                                <option value="Canary Islands">Canary Islands</option>
                                                <option value="Cape Verde">Cape Verde</option>
                                                <option value="Cayman Islands">Cayman Islands</option>
                                                <option value="Central African Republic">Central African Republic</option>
                                                <option value="Chad">Chad</option>
                                                <option value="Channel Islands">Channel Islands</option>
                                                <option value="Chile">Chile</option>
                                                <option value="China">China</option>
                                                <option value="Christmas Island">Christmas Island</option>
                                                <option value="Cocos Island">Cocos Island</option>
                                                <option value="Colombia">Colombia</option>
                                                <option value="Comoros">Comoros</option>
                                                <option value="Congo">Congo</option>
                                                <option value="Cook Islands">Cook Islands</option>
                                                <option value="Costa Rica">Costa Rica</option>
                                                <option value="Cote DIvoire">Cote DIvoire</option>
                                                <option value="Croatia">Croatia</option>
                                                <option value="Cuba">Cuba</option>
                                                <option value="Curaco">Curacao</option>
                                                <option value="Cyprus">Cyprus</option>
                                                <option value="Czech Republic">Czech Republic</option>
                                                <option value="Denmark">Denmark</option>
                                                <option value="Djibouti">Djibouti</option>
                                                <option value="Dominica">Dominica</option>
                                                <option value="Dominican Republic">Dominican Republic</option>
                                                <option value="East Timor">East Timor</option>
                                                <option value="Ecuador">Ecuador</option>
                                                <option value="Egypt">Egypt</option>
                                                <option value="El Salvador">El Salvador</option>
                                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                <option value="Eritrea">Eritrea</option>
                                                <option value="Estonia">Estonia</option>
                                                <option value="Ethiopia">Ethiopia</option>
                                                <option value="Falkland Islands">Falkland Islands</option>
                                                <option value="Faroe Islands">Faroe Islands</option>
                                                <option value="Fiji">Fiji</option>
                                                <option value="Finland">Finland</option>
                                                <option value="France">France</option>
                                                <option value="French Guiana">French Guiana</option>
                                                <option value="French Polynesia">French Polynesia</option>
                                                <option value="French Southern Ter">French Southern Ter</option>
                                                <option value="Gabon">Gabon</option>
                                                <option value="Gambia">Gambia</option>
                                                <option value="Georgia">Georgia</option>
                                                <option value="Germany">Germany</option>
                                                <option value="Ghana">Ghana</option>
                                                <option value="Gibraltar">Gibraltar</option>
                                                <option value="Great Britain">Great Britain</option>
                                                <option value="Greece">Greece</option>
                                                <option value="Greenland">Greenland</option>
                                                <option value="Grenada">Grenada</option>
                                                <option value="Guadeloupe">Guadeloupe</option>
                                                <option value="Guam">Guam</option>
                                                <option value="Guatemala">Guatemala</option>
                                                <option value="Guinea">Guinea</option>
                                                <option value="Guyana">Guyana</option>
                                                <option value="Haiti">Haiti</option>
                                                <option value="Hawaii">Hawaii</option>
                                                <option value="Honduras">Honduras</option>
                                                <option value="Hong Kong">Hong Kong</option>
                                                <option value="Hungary">Hungary</option>
                                                <option value="Iceland">Iceland</option>
                                                <option value="Indonesia">Indonesia</option>
                                                <option value="India">India</option>
                                                <option value="Iran">Iran</option>
                                                <option value="Iraq">Iraq</option>
                                                <option value="Ireland">Ireland</option>
                                                <option value="Isle of Man">Isle of Man</option>
                                                <option value="Israel">Israel</option>
                                                <option value="Italy">Italy</option>
                                                <option value="Jamaica">Jamaica</option>
                                                <option value="Japan">Japan</option>
                                                <option value="Jordan">Jordan</option>
                                                <option value="Kazakhstan">Kazakhstan</option>
                                                <option value="Kenya">Kenya</option>
                                                <option value="Kiribati">Kiribati</option>
                                                <option value="Korea North">Korea North</option>
                                                <option value="Korea Sout">Korea South</option>
                                                <option value="Kuwait">Kuwait</option>
                                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                <option value="Laos">Laos</option>
                                                <option value="Latvia">Latvia</option>
                                                <option value="Lebanon">Lebanon</option>
                                                <option value="Lesotho">Lesotho</option>
                                                <option value="Liberia">Liberia</option>
                                                <option value="Libya">Libya</option>
                                                <option value="Liechtenstein">Liechtenstein</option>
                                                <option value="Lithuania">Lithuania</option>
                                                <option value="Luxembourg">Luxembourg</option>
                                                <option value="Macau">Macau</option>
                                                <option value="Macedonia">Macedonia</option>
                                                <option value="Madagascar">Madagascar</option>
                                                <option value="Malaysia">Malaysia</option>
                                                <option value="Malawi">Malawi</option>
                                                <option value="Maldives">Maldives</option>
                                                <option value="Mali">Mali</option>
                                                <option value="Malta">Malta</option>
                                                <option value="Marshall Islands">Marshall Islands</option>
                                                <option value="Martinique">Martinique</option>
                                                <option value="Mauritania">Mauritania</option>
                                                <option value="Mauritius">Mauritius</option>
                                                <option value="Mayotte">Mayotte</option>
                                                <option value="Mexico">Mexico</option>
                                                <option value="Midway Islands">Midway Islands</option>
                                                <option value="Moldova">Moldova</option>
                                                <option value="Monaco">Monaco</option>
                                                <option value="Mongolia">Mongolia</option>
                                                <option value="Montserrat">Montserrat</option>
                                                <option value="Morocco">Morocco</option>
                                                <option value="Mozambique">Mozambique</option>
                                                <option value="Myanmar">Myanmar</option>
                                                <option value="Nambia">Nambia</option>
                                                <option value="Nauru">Nauru</option>
                                                <option value="Nepal">Nepal</option>
                                                <option value="Netherland Antilles">Netherland Antilles</option>
                                                <option value="Netherlands">Netherlands (Holland, Europe)</option>
                                                <option value="Nevis">Nevis</option>
                                                <option value="New Caledonia">New Caledonia</option>
                                                <option value="New Zealand">New Zealand</option>
                                                <option value="Nicaragua">Nicaragua</option>
                                                <option value="Niger">Niger</option>
                                                <option value="Nigeria">Nigeria</option>
                                                <option value="Niue">Niue</option>
                                                <option value="Norfolk Island">Norfolk Island</option>
                                                <option value="Norway">Norway</option>
                                                <option value="Oman">Oman</option>
                                                <option value="Pakistan">Pakistan</option>
                                                <option value="Palau Island">Palau Island</option>
                                                <option value="Palestine">Palestine</option>
                                                <option value="Panama">Panama</option>
                                                <option value="Papua New Guinea">Papua New Guinea</option>
                                                <option value="Paraguay">Paraguay</option>
                                                <option value="Peru">Peru</option>
                                                <option value="Phillipines">Philippines</option>
                                                <option value="Pitcairn Island">Pitcairn Island</option>
                                                <option value="Poland">Poland</option>
                                                <option value="Portugal">Portugal</option>
                                                <option value="Puerto Rico">Puerto Rico</option>
                                                <option value="Qatar">Qatar</option>
                                                <option value="Republic of Montenegro">Republic of Montenegro</option>
                                                <option value="Republic of Serbia">Republic of Serbia</option>
                                                <option value="Reunion">Reunion</option>
                                                <option value="Romania">Romania</option>
                                                <option value="Russia">Russia</option>
                                                <option value="Rwanda">Rwanda</option>
                                                <option value="St Barthelemy">St Barthelemy</option>
                                                <option value="St Eustatius">St Eustatius</option>
                                                <option value="St Helena">St Helena</option>
                                                <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                                                <option value="St Lucia">St Lucia</option>
                                                <option value="St Maarten">St Maarten</option>
                                                <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
                                                <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
                                                <option value="Saipan">Saipan</option>
                                                <option value="Samoa">Samoa</option>
                                                <option value="Samoa American">Samoa American</option>
                                                <option value="San Marino">San Marino</option>
                                                <option value="Sao Tome & Principe">Sao Tome & Principe</option>
                                                <option value="Saudi Arabia">Saudi Arabia</option>
                                                <option value="Senegal">Senegal</option>
                                                <option value="Seychelles">Seychelles</option>
                                                <option value="Sierra Leone">Sierra Leone</option>
                                                <option value="Singapore">Singapore</option>
                                                <option value="Slovakia">Slovakia</option>
                                                <option value="Slovenia">Slovenia</option>
                                                <option value="Solomon Islands">Solomon Islands</option>
                                                <option value="Somalia">Somalia</option>
                                                <option value="South Africa">South Africa</option>
                                                <option value="Spain">Spain</option>
                                                <option value="Sri Lanka">Sri Lanka</option>
                                                <option value="Sudan">Sudan</option>
                                                <option value="Suriname">Suriname</option>
                                                <option value="Swaziland">Swaziland</option>
                                                <option value="Sweden">Sweden</option>
                                                <option value="Switzerland">Switzerland</option>
                                                <option value="Syria">Syria</option>
                                                <option value="Tahiti">Tahiti</option>
                                                <option value="Taiwan">Taiwan</option>
                                                <option value="Tajikistan">Tajikistan</option>
                                                <option value="Tanzania">Tanzania</option>
                                                <option value="Thailand">Thailand</option>
                                                <option value="Togo">Togo</option>
                                                <option value="Tokelau">Tokelau</option>
                                                <option value="Tonga">Tonga</option>
                                                <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                                                <option value="Tunisia">Tunisia</option>
                                                <option value="Turkey">Turkey</option>
                                                <option value="Turkmenistan">Turkmenistan</option>
                                                <option value="Turks & Caicos Is">Turks & Caicos Is</option>
                                                <option value="Tuvalu">Tuvalu</option>
                                                <option value="Uganda">Uganda</option>
                                                <option value="United Kingdom">United Kingdom</option>
                                                <option value="Ukraine">Ukraine</option>
                                                <option value="United Arab Erimates">United Arab Emirates</option>
                                                <option value="United States of America">United States of America</option>
                                                <option value="Uraguay">Uruguay</option>
                                                <option value="Uzbekistan">Uzbekistan</option>
                                                <option value="Vanuatu">Vanuatu</option>
                                                <option value="Vatican City State">Vatican City State</option>
                                                <option value="Venezuela">Venezuela</option>
                                                <option value="Vietnam">Vietnam</option>
                                                <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                                                <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                                                <option value="Wake Island">Wake Island</option>
                                                <option value="Wallis & Futana Is">Wallis & Futana Is</option>
                                                <option value="Yemen">Yemen</option>
                                                <option value="Zaire">Zaire</option>
                                                <option value="Zambia">Zambia</option>
                                                <option value="Zimbabwe">Zimbabwe</option>
                                            </select>
                                        </div>
                                        <div class="col-lg-6">
                                            <label>Postal/Zip code</label>
                                            <input type="text" class="input">
                                        </div>
                                    </div>
                                </div>
                                <input type="button" name="previous" class="previous action-button" value="Previous" />
                                <input type="button" name="next" class="next action-button" value="Next" />
                            </fieldset>

                            <!-- Step 3 -->
                            <fieldset>
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-md-5">
                                            <h1>Just making sure you're all set up!</h1>
                                        </div>
                                        <div class="col-md-5">
                                            <img src="@/assets/img/requestQuote3.png">
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
                                            <td class="tdBody">10 bags</td>
                                        </tr>
                                        <tr class="bodyRow">
                                            <td class="tdMain">Dated on</td>
                                            <td class="tdBody">25-04-2022</td>
                                        </tr>
                                        <tr class="bodyRow">
                                            <td class="tdMain">Time</td>
                                            <td class="tdBody">8:10am</td>
                                        </tr>
                                        <tr class="bodyRow">
                                            <td class="tdMain">Estimated Cost</td>
                                            <td class="tdBody">$20,000</td>
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
                                    <div class="byRoad">
                                        <p class="summaryHeadSub">by road</p>
                                        <table>
                                            <tr class="bodyRow">
                                                <td class="tdMain">Address 1</td>
                                                <td class="tdBody">5, Awe Avenue, Off Oshodi Road</td>
                                            </tr>
                                            <tr class="bodyRow">
                                                <td class="tdMain">Address 2</td>
                                                <td class="tdBody">No 6, Rotimi Williams Street, Ojota</td>
                                            </tr>
                                            <tr class="bodyRow">
                                                <td class="tdMain">City</td>
                                                <td class="tdBody">Ado-Ekiti</td>
                                            </tr>
                                            <tr class="bodyRow">
                                                <td class="tdMain">State/Province</td>
                                                <td class="tdBody">Ekiti</td>
                                            </tr>
                                            <tr class="bodyRow">
                                                <td class="tdMain">Country</td>
                                                <td class="tdBody">Nigeria</td>
                                            </tr>
                                            <tr class="bodyRow">
                                                <td class="tdMain">Postal Code</td>
                                                <td class="tdBody">1000001</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div class="bySea">
                                        <p class="summaryHeadSub">by sea</p>
                                        <table>
                                            <tr class="bodyRow">
                                                <td class="tdMain">SeaPort</td>
                                                <td class="tdBody">Apapa port, Lagos</td>
                                            </tr>
                                            <tr class="bodyRow">
                                                <td class="tdMain">Country</td>
                                                <td class="tdBody">Nigeria</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div class="byAir">
                                        <p class="summaryHeadSub">by air</p>
                                        <table>
                                            <tr class="bodyRow">
                                                <td class="tdMain">AirPort</td>
                                                <td class="tdBody">Asaba International Airport</td>
                                            </tr>
                                            <tr class="bodyRow">
                                                <td class="tdMain">Country</td>
                                                <td class="tdBody">Nigeria</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                
                                <input type="button" name="previous" class="previous action-button" value="Previous" />
                                <input type="submit" name="submit" class="submit action-button" value="Submit" />
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>

      <div class="container mt-5">
          <div class="row">
              <div class="col-lg-12">
                  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                          <button class="nav-link active tabs-button" id="pills-product-tab" data-bs-toggle="pill" data-bs-target="#pills-product" type="button" role="tab" aria-controls="pills-product" aria-selected="true">Product Details</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tabs-button" id="pills-characteristics-tab" data-bs-toggle="pill" data-bs-target="#pills-characteristics" type="button" role="tab" aria-controls="pills-characteristics" aria-selected="false">Characteristics</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tabs-button" id="pills-packaging-tab" data-bs-toggle="pill" data-bs-target="#pills-packaging" type="button" role="tab" aria-controls="pills-packaging" aria-selected="false">Packaging</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tabs-button" id="pills-certification-tab" data-bs-toggle="pill" data-bs-target="#pills-certification" type="button" role="tab" aria-controls="pills-certification" aria-selected="false">Certification</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tabs-button" id="pills-review-tab" data-bs-toggle="pill" data-bs-target="#pills-review" type="button" role="tab" aria-controls="pills-review" aria-selected="false">Review</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <!--Product Details-->
                        <div class="tab-pane fade show active" id="pills-product" role="tabpanel" aria-labelledby="pills-product-tab">
                            <div class="row detailsMore">
                                <div class="col-lg-12">
                                    <h1>Product Details</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio aliquid molestiae sequi odit cumque sit, delectus tenetur quibusdam voluptates, accusamus omnis mollitia earum. Corporis velit voluptates dolorum quae nobis illum inventore ullam amet accusantium est, harum officia nihil. Voluptatum officia culpa iure voluptates non. Cupiditate cum, dicta distinctio illo, natus iste, labore ratione placeat tempore quod sunt odio repellat! Tempore commodi, necessitatibus consequuntur reiciendis quam omnis qui esse similique architecto hic quod, ut, amet eveniet repellat accusamus nulla cum enim at. Distinctio pariatur, fuga doloribus quo veniam illum nisi modi quasi mollitia consequatur quia quod commodi sequi praesentium ex deleniti.</p>
                                    <h1>More Details</h1>
                                    <table>
                                        <tr>
                                            <td class="thead">Product Category</td>
                                            <td class="tbody">Fruits</td>
                                        </tr>
                                        <tr>
                                            <td class="thead">Farming Method</td>
                                            <td class="tbody">None</td>
                                        </tr>
                                        <tr>
                                            <td class="thead">Country of Origin</td>
                                            <td class="tbody">Nigeira</td>
                                        </tr>
                                        <tr>
                                            <td class="thead">Location of Produce</td>
                                            <td class="tbody">Lagos</td>
                                        </tr>
                                        <tr>
                                            <td class="thead">GMO (Genetically Modified Organism)</td>
                                            <td class="tbody">None</td>
                                        </tr>
                                        <tr>
                                            <td class="thead">Crop Year</td>
                                            <td class="tbody">16-02-2022</td>
                                        </tr>
                                        <tr>
                                            <td class="thead">Is Produce Available Year Round?</td>
                                            <td class="tbody">Yes</td>
                                        </tr>
                                        <tr>
                                            <td class="thead">Special Storage Condition</td>
                                            <td class="tbody">Should be stored at around 12°C</td>
                                        </tr>
                                        <tr>
                                            <td class="thead">Is Temperature Controlled Equipment Required For Transportation?</td>
                                            <td class="tbody">Yes</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <!--Characteristics-->
                        <div class="tab-pane fade" id="pills-characteristics" role="tabpanel" aria-labelledby="pills-characteristics-tab">
                            <div class="row detailsMore">
                                <div class="col-lg-12">
                                    <h1>Product Characteristics</h1>
                                    <table>
                                        <tr>
                                            <td class="thead">Processing Type</td>
                                            <td class="tbody">Refined</td>
                                        </tr>
                                        <tr>
                                            <td class="thead">Acidity</td>
                                            <td class="tbody">11%</td>
                                        </tr>
                                        <tr>
                                            <td class="thead">Grade</td>
                                            <td class="tbody">Extra virgin</td>
                                        </tr>
                                        <tr>
                                            <td class="thead">Taste</td>
                                            <td class="tbody">Sweet</td>
                                        </tr>
                                        <tr>
                                            <td class="thead">Purity</td>
                                            <td class="tbody">11%</td>
                                        </tr>
                                        <tr>
                                            <td class="thead">Smell</td>
                                            <td class="tbody">Note of almond</td>
                                        </tr>
                                        <tr>
                                            <td class="thead">Use</td>
                                            <td class="tbody">Human use</td>
                                        </tr>
                                        <tr>
                                            <td class="thead">Additional Comments</td>
                                            <td class="tbody">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quasi vitae nisi ullam tempora porro facilis natus recusandae aliquid cum ipsa hic, non amet, obcaecati possimus autem alias in? Corrupti!</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <!--Packaging-->
                        <div class="tab-pane fade" id="pills-packaging" role="tabpanel" aria-labelledby="pills-packaging-tab">
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
                        <div class="tab-pane fade" id="pills-certification" role="tabpanel" aria-labelledby="pills-certification-tab">
                            <div class="row detailsMore">
                                <div class="col-lg-12">
                                    <h1>Certifications</h1>
                                    <table>
                                        <tr>
                                            <td class="thead certi">Halal Certificate</td>
                                            <td class="tbody certi"><a href="#">View Certification</a></td>
                                        </tr>
                                        <tr>
                                            <td class="thead certi">Kosher Certificate</td>
                                            <td class="tbody certi"><a href="#">View Certification</a></td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <!--Review-->
                        <div class="tab-pane fade" id="pills-review" role="tabpanel" aria-labelledby="pills-review-tab">
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
                                                <div class="progress-bar bg-success" role="progressbar" style="width: 50%;" aria-valuemax="100">1 rating</div>
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
                                                <div class="progress-bar bg-success" role="progressbar" style="width: 50%;" aria-valuemax="100">1 rating</div>
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
                                                <div class="progress-bar bg-success" role="progressbar" style="width: 0%;" aria-valuemax="100">0 rating</div>
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
                                                <div class="progress-bar bg-success" role="progressbar" style="width: 50%;" aria-valuemax="100">1 rating</div>
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
                                                <div class="progress-bar bg-success" role="progressbar" style="width: 0%;" aria-valuemax="100">0 rating</div>
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
                                            <p class="comment">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et quae qui saepe a. In, inventore beatae. Fuga, perspiciatis iste!</p>
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
                                            <p class="comment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cupiditate porro quaerat esse dolorem optio.</p>
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
                            <div class="itemProduct">
                                <router-link to="/inner-product">
                                <div class="imgArea">
                                    <img src="@/assets/img/products/product1.png" draggable="false">
                                </div>
                                </router-link>
                                <div class="detailArea">
                                <h5>Ripe Banana</h5>
                                <p>$10 per 100kg</p>
                                <router-link to="/inner-product" class="route-link"><a>View Products <i class="bi bi-arrow-right"></i></a></router-link>
                                </div>
                            </div>
                            <div class="itemProduct">
                                <router-link to="#">
                                <div class="imgArea">
                                    <img src="@/assets/img/products/product11.png" draggable="false">
                                </div>
                                </router-link>
                                <div class="detailArea">
                                <h5>Palm Kernel</h5>
                                <p>$10 per 100kg</p>
                                <router-link to="#" class="route-link"><a>View Products <i class="bi bi-arrow-right"></i></a></router-link>
                                </div>
                            </div>
                            <div class="itemProduct">
                                <router-link to="#">
                                <div class="imgArea">
                                    <img src="@/assets/img/products/product111.png" draggable="false">
                                </div>
                                </router-link>
                                <div class="detailArea">
                                <h5>Cocoa</h5>
                                <p>$10 per 100kg</p>
                                <router-link to="#" class="route-link"><a>View Products <i class="bi bi-arrow-right"></i></a></router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </section>

  <mainFooter/>
</template>
<style scoped src="@/assets/css/slider.css"></style>
<script>
    import MainHeader from './mainHeader.vue'
    import SearchHeader from './searchHeader.vue'
    import MainFooter from './mainFooter.vue'
    import { Swiper, SwiperSlide } from "swiper/vue";
    import "swiper/css";
    import "swiper/css/effect-flip";
    import "swiper/css/pagination";
    import "swiper/css/navigation";
    import { EffectFlip, Pagination, Navigation } from "swiper";
    import $ from "jquery";
    require("jquery.easing");
    
    export default {
      name: "Produce Mart",
      components:{
          Swiper,
          SwiperSlide,
      'mainHeader': MainHeader,
      'searchHeader': SearchHeader,
      'mainFooter': MainFooter,
      },
      setup() {
            return {
            modules: [EffectFlip, Pagination, Navigation],
            };
        },
      mounted(){
        window.scrollTo(0,0)
        
        //jQuery time
        var current_fs, next_fs, previous_fs; //fieldsets
        var left, opacity, scale; //fieldset properties which we will animate
        var animating; //flag to prevent quick multi-click glitches

        $(".next").click(function(){
            if(animating) return false;
            animating = true;
            
            current_fs = $(this).parent();
            next_fs = $(this).parent().next();
            
            //activate next step on progressbar using the index of next_fs
            $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
            
            //show the next fieldset
            next_fs.show(); 
            //hide the current fieldset with style
            current_fs.animate({opacity: 0}, {
                step: function(now, mx) {
                    //as the opacity of current_fs reduces to 0 - stored in "now"
                    //1. scale current_fs down to 80%
                    scale = 1 - (1 - now) * 0.2;
                    //2. bring next_fs from the right(50%)
                    left = (now * 50)+"%";
                    //3. increase opacity of next_fs to 1 as it moves in
                    opacity = 1 - now;
                    current_fs.css({
                'transform': 'scale('+scale+')',
                'position': 'absolute'
            });
                    next_fs.css({'left': left, 'opacity': opacity});
                }, 
                duration: 800, 
                complete: function(){
                    current_fs.hide();
                    animating = false;
                }, 
                //this comes from the custom easing plugin
                easing: 'easeInOutBack'
            });
        });

        $(".previous").click(function(){
            if(animating) return false;
            animating = false;
            
            current_fs = $(this).parent();
            previous_fs = $(this).parent().prev();
            
            //de-activate current step on progressbar
            $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
            
            //show the previous fieldset
            previous_fs.show(); 
            //hide the current fieldset with style
            current_fs.animate({opacity: 0}, {
                step: function(now, mx) {
                    //as the opacity of current_fs reduces to 0 - stored in "now"
                    //1. scale previous_fs from 80% to 100%
                    scale = 0.8 + (1 - now) * 0.2;
                    //2. take current_fs to the right(50%) - from 0%
                    left = ((1-now) * 50)+"%";
                    //3. increase opacity of previous_fs to 1 as it moves in
                    opacity = 1 - now;
                    current_fs.css({'left': left});
                    previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
                }, 
                duration: 800, 
                complete: function(){
                    current_fs.hide();
                    animating = false;
                }, 
                //this comes from the custom easing plugin
                easing: 'easeInOutBack'
            });
        });
      },
      methods:{
        sendAir() {
            var x = document.getElementById("ifSendAir");
            if (!x.style.display || x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        },
        sendSea() {
            var x = document.getElementById("ifSendSea");
            if (!x.style.display || x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        },
        sendRoad() {
            var x = document.getElementById("ifSendRoad");
            if (!x.style.display || x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        },
      }
    }
</script>