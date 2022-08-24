<template>
  <title>Request a Product | Produce Mart</title>
  <header class="mainHeader">
      <nav class="navbar navbar-expand-lg navbar-light navbar-color">
          <div class="container-fluid">
              <div class="authDiv mobileAuthDiv">
                  <router-link to="/login"><a class="authLogin">Login</a></router-link>
              </div>
              <a class="navbar-brand" href="/">   
                  <img src="@/assets/img/logo.png">
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                  <i class="bi bi-text-right"></i>
              </button>
              <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                  <div class="offcanvas-header">
                      <div class="offcanvasImg">
                          <a class="navbar-brand" href="/">   
                              <img src="@/assets/img/logo.png">
                          </a>
                      </div>
                      <button type="button" class="btn-offcanvas-close" data-bs-dismiss="offcanvas" aria-label="Close">
                          <i class="bi bi-x-lg"></i>
                      </button>
                  </div>
                  <div class="offcanvas-body">
                      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                          <li class="nav-item">
                              <router-link to="/" class="route-link"><a class="nav-link">Home</a></router-link>
                          </li>
                          <li class="nav-item">
                              <router-link to="/about" class="route-link"><a class="nav-link">About Us</a></router-link>
                          </li>
                          <li class="nav-item">
                              <router-link to="/products" class="route-link"><a class="nav-link">View Products</a></router-link>
                          </li>
                          <li class="nav-item">
                              <router-link to="/blog" class="route-link"><a class="nav-link">Blog</a></router-link>
                          </li>
                          <li class="nav-item">
                              <router-link to="/request-a-product" class="route-link"><a class="nav-link activeLink">Request a Product</a></router-link>
                          </li>
                          <li class="nav-item">
                              <router-link to="/faq" class="route-link"><a class="nav-link">FAQs</a></router-link>
                          </li>
                      </ul>
                      <searchInner/>
                      <div class="authDiv desktopAuthDiv">
                            <div v-if="user.role == 'buyer'">
                                <div class="profile_info" style="margin-left: 50px;">
                                  <img :src="user.img_url" alt="#" v-if="user.img_url" /> 
                                  <img src="@/assets/img/client_img.png" alt="#" v-else />
                                  Hi, <span style="text-transform: capitalize;">{{ user.firstname }}</span> <i class="bi bi-caret-down"></i>
                                  <div class="profile_info_iner">
                                    <div class="profile_author_name">
                                      <p style="font-size: 15px;">Buyer Account</p>
                                      <h5>{{ user.firstname }} {{ user.lastname[0] }}.</h5>
                                      <p style="margin-top:0;font-size: 12px;font-weight: 500;">GreenMOuse</p>
                                    </div>
                                    <div class="profile_info_details">
                                      
                                      <router-link to="/buyer-dashboard/home">
                                        <img src="@/assets/img/menu-icon/dashboard.png" style="border: 0;border-radius: 0;margin-right: 10px;"> Dashboard
                                      </router-link>
                                      <router-link to="/buyer-dashboard/profile" style="margin-left: -17px !important;"
                                        ><i style="margin-right: 8px;font-size: 20px;" class="bi bi-person-circle"></i> My Profile</router-link
                                      >
                                      <a @click.prevent="logOut">
                                        <img src="@/assets/img/menu-icon/logout.png" style="border: 0;border-radius: 0;margin-right: 10px; width: 15px;"  /> Log Out
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <!-- <a style="cursor: pointer" @click="logOut" class="authSignup">Logout</a> -->
                            </div>
                            <div v-else-if="user.role == 'supplier'">
                                <div class="profile_info" style="margin-left: 50px;">
                                  <img :src="user.img_url" alt="#" v-if="user.img_url" /> 
                                  <img src="@/assets/img/client_img.png" alt="#" v-else />
                                  Hi, <span style="text-transform: capitalize;">{{ user.firstname }}</span> <i class="bi bi-caret-down"></i>
                                  <div class="profile_info_iner">
                                    <div class="profile_author_name">
                                      <p style="font-size: 15px;">Supplier Account</p>
                                      <h5>{{ user.firstname }} {{ user.lastname[0] }}.</h5>
                                      <p style="margin-top:0;font-size: 12px;font-weight: 500;">GreenMOuse</p>
                                    </div>
                                    <div class="profile_info_details">
                                      
                                      <router-link to="/supplier-dashboard/home">
                                        <img src="@/assets/img/menu-icon/dashboard.png" style="border: 0;border-radius: 0;margin-right: 10px;"> Dashboard
                                      </router-link>
                                      <router-link to="/supplier-dashboard/profile" style="margin-left: -17px !important;"
                                        ><i style="margin-right: 8px;font-size: 20px;" class="bi bi-person-circle"></i> My Profile</router-link
                                      >
                                      <a @click.prevent="logOut">
                                        <img src="@/assets/img/menu-icon/logout.png" style="border: 0;border-radius: 0;margin-right: 10px; width: 15px;"  /> Log Out
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <!-- <a style="cursor: pointer" @click="logOut" class="authSignup">Logout</a> -->
                            </div>
                            <div v-else>
                                <router-link to="/login"><a class="authLogin">Login</a></router-link>
                                <router-link to="buyer-registration"><a class="authSignup">Sign Up</a></router-link>
                            </div>
                      </div>
                  </div>
              </div>
          </div>
      </nav>
  </header>
  <searchHeader/>
  
  <!--Page Breadcrumb-->
  <section class="pageBreadcrumb requestPageBread">
      <div class="container">
          <div class="row justify-content-center">
                <div class="col-lg-10 text-center">
                    <div class="textHead">
                        <p class="subhead">Produce Mart</p>
                        <h2>Request A Product</h2>
                        <p class="belowHead">Fill in all required info below to request a product.</p>
                    </div>
                </div>
          </div>
      </div>
  </section><!--Page Breadcrumb Ends-->

  <!--Request Quote Content-->
  <main class="requestQuoteContent">
    <section>
      <div class="container">
        <div class="row">
          <!--Request A Product-->
          <div class="col-lg-12 mb-4">

            <a v-if="user.role == 'buyer'" href="#" class="btnRequestBtn" @click="requestProductModal" data-bs-toggle="modal" data-bs-target="#requestProduct">Request A Product <i class="bi bi-arrow-right"></i></a>
            <a v-if="user == '' || user.role == 'superadmin'" href="#" class="btnRequestBtn" @click="requestProductNotUser">Request A Product <i class="bi bi-arrow-right"></i></a>
            <!-- Modal -->
            <div class="modal fade" ref="requestProduct"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false" tabindex="-1" aria-labelledby="requestProductLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Request a Product Form</h5>
                    <button type="button" class="btn-close" @click="modal.hide()" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <section class="formSec">
                      <div class="container">
                        <div v-if="userAuth" class="row justify-content-center">
                          <div class="col-lg-12">
                            <form @submit.prevent="requestProduct">
                              <div class="row">
                                <!--Product Name-->
                                <div class="col-lg-12 mb-4">
                                  <label>Product Name</label>
                                  <input type="text" required v-model="productName" placeholder="Enter your product name" class="input">
                                </div>
                                <!--Price-->
                                <div class="col-lg-6 mb-4">
                                  <label>Price <small>(in $)</small></label>
                                  <input type="text" v-model="price" required list="price" class="input">
                                </div>

                                <div class="col-lg-6 mb-4">
                                  <label>Quantity</label>
                                  <input required v-model="quantity" type="number" placeholder="Enter your product variety" class="input">
                                </div>
                                <!--Weight-->
                                <div class="col-lg-6 mb-4">
                                  <label>Weight</label>
                                  <select required v-model="weight" class="input">
                                    <option hidden>Specify Weight</option>
                                    <option>Kilogram (KG)</option>
                                    <option>LB</option>
                                    <option>ton</option>
                                    <option>metric ton</option>
                                  </select>
                                </div>
                                <!--Product Variety-->
                                <div class="col-lg-6 mb-4">
                                  <label>Product Variety</label>
                                  <input required v-model="productVariety" type="text" placeholder="Enter your product variety" class="input">
                                </div>
                                <!--Product Description-->
                                <div class="col-lg-12 mb-4">
                                  <label>Product Description</label>
                                  <textarea v-model="productDesc" required rows="3" placeholder="Enter your product description" class="input"></textarea>
                                </div>
                                <!--Food Category-->
                                <div class="col-lg-6 mb-4">
                                  <label>Category</label>
                                  <select required v-model="productCategory" class="input">
                                    <option hidden>Choose Category</option>
                                    <option value="vegetable">Vegetable</option>
                                    <option value="fruit">Fruits</option>
                                    <option value="oil">Oil</option>
                                    <option value="grain">Grain</option>
                                    <option value="nut">Nut</option>
                                    <option value="coffee">Coffee</option>
                                    <option value="flower">Flower</option>
                                    <option value="feed">Feed</option>
                                    <option value="others">Others</option>
                                  </select>
                                </div>
                                <!--Supply Frequency-->
                                <div class="col-lg-6 mb-4">
                                  <label>Supply Frequency</label>
                                  <select required v-model="supplyFrequency" class="input">
                                    <option hidden>Select Supply Frequency</option>
                                    <option value="One-off">One-off</option>
                                    <option value="Frequent">Frequent</option>
                                  </select>
                                </div>
                                <!--Quantity-->
                                
                                <!--Crop Year-->
                                <div class="col-lg-12 mb-4">
                                  <div class="row">
                                    <div class="col-lg-12">
                                      <label>Crop Year</label>
                                    </div>
                                    <div class="col-md-6">
                                      <label class="innerLabel">Start Date</label>
                                      <input required v-model="startDate" type="date" class="input">
                                    </div>
                                    <div class="col-md-6">
                                      <label class="innerLabel">End Date</label>
                                      <input required v-model="endDate" type="date" class="input">
                                    </div>
                                  </div>
                                </div>
                                <!--Product Characteristics-->
                                <div class="col-lg-12 mb-4">
                                  <label>Product Characteristics</label>
                                  <textarea required v-model="productCharacter" rows="3" placeholder="Enter your product characteristics" class="input"></textarea>
                                </div>
                                <!--country_of_origin Country-->
                                <div class="col-lg-12 mb-4">
                                  <label>Country of Origin</label>
                                  <select required v-model="country_of_origin" class="input">
                                    <option disabled selected hidden>Please specify the country of origin you want your product from, if you have a preference.</option>
                                    <option value="No preference">I dont have a preference</option>
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
                                <div class="col-lg-12 mb-4">
                                  <label>Location</label>
                                  <select required v-model="location" pl class="input">
                                    <option disabled selected hidden>Please specify the location you want buy the product from, if you have a preference.</option>
                                    <option value="No preference">I dont have a preference</option>
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
                                <!--Incoterms-->
                                <!--Additional Specification-->
                                <div class="col-lg-12 mb-4">
                                  <label>Additional Specification</label>
                                  <textarea required v-model="addSpec" rows="3" placeholder="Additional spec..." class="input"></textarea>
                                </div>
                                <div class="col-lg-12">
                                  <button type="submit">Request Product</button>
                                </div>
                                 
                              </div>
                            </form>
                          </div>
                        </div>
                        <div v-else class="row justify-content-center">
                          <h5>Please <router-link to="/login"><a class="authLogin">Login</a></router-link> to request a product quote</h5>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--Filter Request-->
          <div class="col-lg-12 filterDiv filterFormMobile">
            <a class="btnFilter" data-bs-toggle="offcanvas" href="#offcanvasFilter" role="button" aria-controls="offcanvasExample">
              <i class="bi bi-filter-square-fill"></i> Filter Request
            </a>
            <div class="offcanvas offcanvas-start filterRequestCanvas" tabindex="-1" id="offcanvasFilter" aria-labelledby="offcanvasExampleLabel">
              <div class="offcanvas-header">
                <h5></h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <form class="filterForm">
                  <div class="row">
                    <div class="col-lg-12">
                      <h1>Filter Request By:</h1>
                    </div>
                    <div class="col-lg-12 formBox">
                      <label>Keyword</label>
                      <input type="text" v-model="searchQuery" placeholder="Product name" class="input">
                    </div>
                    <div class="col-lg-12 formBox">
                      <label>Category Filter</label>
                      <div class="checkBoxDiv" >
                        <input value="vegetable" v-model="filtersAppied" type="checkbox"> <span>Vegetables</span>
                      </div>
                      <div class="checkBoxDiv">
                        <input value="oil" v-model="filtersAppied" type="checkbox"> <span>Oils</span>
                      </div>
                      <div class="checkBoxDiv">
                        <input value="fruit" v-model="filtersAppied" type="checkbox"> <span>Fruits</span>
                      </div>
                      <div class="checkBoxDiv">
                        <input value="grain" v-model="filtersAppied" type="checkbox"> <span>Grains/Beans/Pulses</span>
                      </div>
                      <div class="checkBoxDiv">
                        <input value="nut" v-model="filtersAppied" type="checkbox"> <span>Nuts/Seeds</span>
                      </div>
                      <div class="checkBoxDiv">
                        <input value="coffee" v-model="filtersAppied" type="checkbox"> <span>Coffee</span>
                      </div>
                      <div class="checkBoxDiv">
                        <input value="flower" v-model="filtersAppied" type="checkbox"> <span>Flower</span>
                      </div>
                      <div class="checkBoxDiv">
                        <input value="feed" v-model="filtersAppied" type="checkbox"> <span>Animal Feeds</span>
                      </div>
                      <div class="checkBoxDiv">
                        <input value="others" v-model="filtersAppied" type="checkbox"> <span>Animal Feeds</span>
                      </div>
                    </div>
                    <div class="col-lg-12 formBox">
                      <label>Product Location</label>
                      <input type="text" v-model="locationSearch" placeholder="Enter location" class="input">
                    </div>
                    <!-- <div class="col-lg-12 formBox">
                      <label>Price Range</label>
                      <input type="text" placeholder="Min Price" class="input minPrice">
                      <input type="text" placeholder="Max Price" class="input maxPrice">
                    </div> -->
                    <div class="col-lg-12 formBox">
                      <label>Supply Frequency</label>
                      <div class="checkBoxDiv"> 
                        <input v-model="FrequencyCheck" value="One-off" type="checkbox"> <span>One-Off</span>
                      </div>
                      <div class="checkBoxDiv">
                        <input v-model="FrequencyCheck" value="Frequent" type="checkbox"> <span>Frequent</span>
                      </div>
                    </div>
                    <!-- <div class="col-lg-12 formBox">
                      <label>Crop Year</label>
                      <input type="text" placeholder="Start year" class="input minPrice">
                      <input type="text" placeholder="End year" class="input maxPrice">
                    </div>
                    <div class="col-lg-12 mb-3">
                      <button type="submit" class="button">Apply Filter</button>
                    </div> -->
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 filterFormDesktop">
            <form class="filterForm">
              <div class="row">
                <div class="col-lg-12 formBox">
                  <label>Keyword</label>
                  <input type="text" v-model="searchQuery" placeholder="Product name" class="input">
                </div>
                <div class="col-lg-12 formBox">
                  <label>Category Filter</label>
                  <div class="checkBoxDiv" >
                    <input value="vegetable" v-model="filtersAppied" type="checkbox"> <span>Vegetables</span>
                  </div>
                  <div class="checkBoxDiv">
                    <input value="oil" v-model="filtersAppied" type="checkbox"> <span>Oils</span>
                  </div>
                  <div class="checkBoxDiv">
                    <input value="fruit" v-model="filtersAppied" type="checkbox"> <span>Fruits</span>
                  </div>
                  <div class="checkBoxDiv">
                    <input value="grain" v-model="filtersAppied" type="checkbox"> <span>Grains/Beans/Pulses</span>
                  </div>
                  <div class="checkBoxDiv">
                    <input value="nut" v-model="filtersAppied" type="checkbox"> <span>Nuts/Seeds</span>
                  </div>
                  <div class="checkBoxDiv">
                    <input value="coffee" v-model="filtersAppied" type="checkbox"> <span>Coffee</span>
                  </div>
                  <div class="checkBoxDiv">
                    <input value="flower" v-model="filtersAppied" type="checkbox"> <span>Flower</span>
                  </div>
                  <div class="checkBoxDiv">
                    <input value="feed" v-model="filtersAppied" type="checkbox"> <span>Animal Feeds</span>
                  </div>
                  <div class="checkBoxDiv">
                    <input value="others" v-model="filtersAppied" type="checkbox"> <span>Animal Feeds</span>
                  </div>
                </div>
                <div class="col-lg-12 formBox">
                  <label>Product Location</label>
                  <input type="text" v-model="locationSearch" placeholder="Enter location" class="input">
                </div>
                <!-- <div class="col-lg-12 formBox">
                  <label>Price Range</label>
                  <input type="text" placeholder="Min Price" class="input minPrice">
                  <input type="text" placeholder="Max Price" class="input maxPrice">
                </div> -->
                <div class="col-lg-12 formBox">
                  <label>Supply Frequency</label>
                  <div class="checkBoxDiv">
                    <input v-model="FrequencyCheck" value="One-off" type="checkbox"> <span>One-Off</span>
                  </div>
                  <div class="checkBoxDiv">
                    <input v-model="FrequencyCheck" value="Frequent" type="checkbox"> <span>Frequent</span>
                  </div>
                </div>
                <!-- <div class="col-lg-12 formBox">
                  <label>Crop Year</label>
                  <input type="text" placeholder="Start year" class="input minPrice">
                  <input type="text" placeholder="End year" class="input maxPrice">
                </div>-->
              </div>
            </form>
          </div>
          <div class="col-lg-9">
            <div class="row">
              <div class="col-lg-12" v-for="(item, i) in resultQuery" :key="item._id">
                <div class="bulletBoard">
                  <div class="row">
                    <div class="col-md-6">
                      <p>Product Name: <span>{{item.name}}</span></p>
                      <p>Product Price: <span>${{item.price}}</span></p>
                      <p>Food Category: <span>{{item.category}}</span></p>
                      <p>Supply Frequency: <span>{{item.supplyFrequency}}</span></p>
                      <p>Quantity: <span>{{item.quantity}}</span></p>
                      <p>Characteristics: 
                        <a class="" v-if="item.readChar == 'false'" @click="item.readChar = 'true'" type="button" style="color: #73D97C;text-decoration: none;text-transform: full-size-kana;font-weight: 500;">View...</a>
                        <span v-if="item.readChar == 'true'">{{item.characteristics}} </span> <a class="" v-if="item.readChar == 'true'" @click="item.readChar = 'false'" type="button" style="color: #73D97C;text-decoration: none;text-transform: full-size-kana;font-weight: 500;">Close...</a>
                      </p>
                    </div>
                    <div class="col-md-6">
                      <p>Weight: <span>{{item.weight}}</span></p>
                      <p>Country of origin: <span>{{item.country}}</span></p>
                      <p>Location: <span>{{item.location}}</span></p>
                      <p>Crop Year (Start Year): <span>{{getDate(item.cropYear.start_date)}}</span></p>
                      <p>Crop Year (End Year): <span>{{getDate(item.cropYear.end_date)}}</span></p>
                      <p>Aditional Info: 
                        <a class="" v-if="item.readAddInfo == 'false'" @click="item.readAddInfo = 'true'" type="button" style="color: #73D97C;text-decoration: none;text-transform: full-size-kana;font-weight: 500;">View...</a>
                        <span v-if="item.readAddInfo == 'true'">{{item.additional_info}} </span> <a class="" v-if="item.readAddInfo == 'true'" @click="item.readAddInfo = 'false'" type="button" style="color: #73D97C;text-decoration: none;text-transform: full-size-kana;font-weight: 500;">Close...</a>
                      </p>
                    </div>
                  </div>
                  <p>
                    Product Description: <span v-if="item.readMore == 'false'">{{item.description.substring(0, 100) }}</span> <a class="" v-if="item.readMore == 'false' && item.description.length >= 100" @click="item.readMore = 'true'" type="button" style="color: #73D97C;text-decoration: none;text-transform: full-size-kana;font-weight: 500;">Read more...</a>
                    <span v-if="item.readMore == 'true'">{{item.description}} </span> <a class="" v-if="item.readMore == 'true'" @click="item.readMore = 'false'" type="button" style="color: #73D97C;text-decoration: none;text-transform: full-size-kana;font-weight: 500;">Read less...</a>
                  </p>
                  <div class="btnDiv">
                    <a type="button" @click="respondRequest(item._id, item.status)">Product Response</a>
                  </div>
                </div>
              </div>
              <div class="col-md-12 text-center paginationSection">
                <button @click="prevPage" class="arrows"><i class="bi bi-arrow-left-circle-fill"></i></button>
                <button class="btnButton active">{{current_page}}</button>
                <button @click="nextPage" class="arrows"><i class="bi bi-arrow-right-circle-fill"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <main-footer />
</template>
<style scoped src="@/assets/css/styleFrontend.css"></style>
<style scoped src="@/assets/css/bootstrap.css"></style>
<script>
    import MainHeader from './mainHeader.vue'
    import SearchHeader from './searchHeader.vue'
    import MainFooter from './mainFooter.vue'
    import SearchInner from './searchInner.vue'
    import QUOTE from './../service/quote-service'
    import Swal from 'sweetalert2';
    import { Modal } from "bootstrap";
    import axios from 'axios'
    export default {
      name: "Produce Mart",
      components:{
      'mainHeader': MainHeader,
      'searchHeader': SearchHeader,
        mainFooter: MainFooter,
      'searchInner': SearchInner,
      },
      data(){
        return{
          productRequestList: [],
          FrequencyCheck: [],
          productName: '',
          searchQuery: '',
          locationSearch: '',
          user: JSON.parse(localStorage.getItem("user")) || '',
          price: '',
          productVariety: '',
          productDesc: '',
          productCategory: '',
          supplyFrequency: '',
          location: '',
          quantity: '',
          weight: '',
          startDate: '',
          endDate: '',
          productCharacter: '',
          country_of_origin: '',
          addSpec: '',
          statusMessage: false,
          modal: null,
          filtersAppied: [],
          size: 3,
          current_page: 1,
        }
      },
      created(){
        this.getRequestProduct()
      },
      computed:{
        userAuth(){
          const user = JSON.parse(localStorage.getItem("user"));
          if(user && user.token){
            return true
          }
          else{
            return false
          }

          if (this.modal != null) {
            this.modal.hide()
          }
        },
        resultQuery() {

          if (this.searchQuery != '') {
            let out = this.productRequestList;
            //console.log(this.productRequestList)
            return out.filter((items) => {
              return this.searchQuery
                .toLowerCase()
                .split(" ")
                .every((v) => items.name.toLowerCase().includes(v));
            });
          } 
          if (this.locationSearch != '') {
            let out = this.productRequestList;
            //console.log(this.productRequestList)
            return out.filter((items) => {
              return this.locationSearch
                .toLowerCase()
                .split(" ")
                .every((v) => items.location.toLowerCase().includes(v));
            });
          } 
          if (this.filtersAppied.length > 0) {
            return this.productRequestList.filter(item => this.filtersAppied.includes(item.category));
          }
          if (this.FrequencyCheck.length > 0) {
            return this.productRequestList.filter(item => this.FrequencyCheck.includes(item.supplyFrequency));
          }
          if (this.FrequencyCheck.length > 0 && this.filtersAppied.length > 0) {
            return this.productRequestList.filter(item => this.filtersAppied.includes(item.category)) && this.productRequestList.filter(item => this.FrequencyCheck.includes(item.supplyFrequency));;
          }
          return this.productRequestList.filter((row, index) => {
            let start = (this.current_page-1)*this.size;
            let end = this.current_page*this.size;
            if(index >= start && index < end) return true;
          });
        },
        category() {
        }
      },
      methods: {
        toggler(obj, flag){
          obj.splice('Flag', flag);
        },
        nextPage() {
        //console.log('helo')
          if((this.current_page*this.size) < this.productRequestList.length) this.current_page++;
        },
        prevPage() {
          if(this.current_page > 1) this.current_page--;
        },
        getDate(value){
          return new Date(value).toLocaleDateString()
        },
        getRequestProduct(){
          QUOTE.GetAllRequest().then((res) => {
            //console.log(res.data)
            const unbid = res.data.data.filter((item) => item.status == 'pending')
            const data = unbid.map(obj => ({ ...obj, readMore: 'false', readChar: 'false', readAddInfo: 'false' }))
            this.productRequestList = data
            
          })
        },
        logOut() {
          this.$store.dispatch("auth/logout");
          this.$router.push("/login");
        },
        requestProductNotUser(){
          Swal.fire({
            title: 'Sorry! You are not logged In as a Buyer yet, click on register or login as a buyer to proceed this operation',
            showDenyButton: true,
            //showCancelButton: true,
            confirmButtonText: 'Register',
            confirmButtonColor: '#000000',
            denyButtonText: `Login`,
            denyButtonColor: '#ffffff',
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              this.$router.push('/buyer-registration')
            } else if (result.isDenied) {
              this.$router.push('/login')
            }
          })
        },
        requestProduct(){
          const productRequests = {
            "name": this.productName,
            "price": this.price,
            "variety": this.productVariety,
            "description": this.productDesc,
            "category": this.productCategory,
            "quantity": this.quantity,
            "start_date": this.startDate,
            "end_date": this.endDate,
            "characteristics": this.productCharacter,
            "frequency": this.supplyFrequency,
            "additional_info": this.addSpec,
            "country": this.country_of_origin,
            "location": this.location,
            "weight": this.weight,
            "userId": this.user._id
          }
          QUOTE.RequestProduct(productRequests).then(res => {
            this.getRequestProduct()
            this.modal.hide();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `Your request has been successfully placed`,
              showConfirmButton: false,
              timer: 3500
            })

            this.clearForm()
          })
          .catch(err => {
            console.log(err);
          })
        },
        respondRequest(value, status) {
          /*this.modal = new Modal(this.$refs.respondRequest);
          //this.modal.show();*/
          console.log(value)
          if (status == 'pending') {
            if (this.user.role === 'supplier') {
              Swal.fire({
                title: 'Are you sure you have this product requested by the buyer?',
                showDenyButton: true,
                //showCancelButton: true,
                confirmButtonText: 'Yes, place bid',
                confirmButtonColor: '#000000',
                denyButtonText: `No, I don't`,
                denyButtonColor: '#ffffff',
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  axios.get("https://producemart.herokuapp.com/getRequestBidByUserId/" + value, {
                    params: {
                      userId: this.user._id,
                    },
                    headers: {
                      "Authorization": this.user.token,
                      "Content-Type": "application/json"
                    },
                  }).then((res) => {
                    if (res.data.status == false) {
                      //Swal.fire('Congratulation, you have successfully placed your bid!', '', 'success')
                      const sendData = {
                        requestId: value,
                        userId: this.user._id
                      }
                      QUOTE.PlaceBid(sendData).then(() => {
                        Swal.fire('Congratulation, you have successfully placed your bid!', '', 'success')
                      })
                    } else {
                      Swal.fire('You have already place a bid on this request!', '', 'info')
                    }
                  })
                } else if (result.isDenied) {
                  Swal.fire('Sorry your bid not place!', '', 'error')
                }
              })
            } else {
              Swal.fire({
                title: 'Sorry! You are not logged In as a Supplier yet, click on register or login as a buyer to proceed this operation',
                showDenyButton: true,
                //showCancelButton: true,
                confirmButtonText: 'Register',
                confirmButtonColor: '#000000',
                denyButtonText: `Login`,
                denyButtonColor: '#ffffff',
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  this.$router.push('/supplier-registration')
                } else if (result.isDenied) {
                  this.$router.push('/login')
                }
              })
            }
          }
          if (status == 'Awaiting Url') {
            Swal.fire('Sorry! You can\'t bid this product again, a Supplier already selected' , '', 'info')
          }
          if (status == 'uploaded') {
            Swal.fire('Sorry! You can\'t bid this product again, Product already uploaded' , '', 'info')
          }
          
        },
        requestProductModal(){
          this.modal = new Modal(this.$refs.requestProduct);
          this.modal.show();
        },
        clearForm(){
          this.productName = ''
          this.price = ''
          this.productVariety = ''
          this.productDesc = ''
          this.productCategory = ''
          this.supplyFrequency = ''
          this.quantity = ''
          this.weight = ''
          this.startDate = ''
          this.endDate = ''
          this.productCharacter = ''
          this.country_of_origin = ''
          this.addSpec = ''
        }
      },
      mounted(){
        
      }
    }
</script>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
 .swal2-popup {
    font-size: 16px !important;
    font-family: 'Montserrat', sans-serif !important;
    width: 555px !important;
  }

  .swal2-title{
    font-size: 16px !important;
    margin-top: 20px !important;
  }

  .swal2-deny{
    background: #FFFFFF !important;
    border: 1px solid #000000 !important;
    border-radius: 15px !important;
    color: #000000 !important;
    font-family: 'Montserrat', sans-serif !important;
    font-weight: 600 !important;
    font-size: 14px !important;
  }

  .swal2-confirm{
    background: #000 !important;
    border: 0 !important;
    outline: none !important;
    border-radius: 15px !important;
    color: #ffffff !important;
    font-family: 'Montserrat', sans-serif !important;
    font-weight: 600 !important;
    font-size: 14px !important;
  }

  .swal2-styled.swal2-default-outline:focus{
    box-shadow: none !important;
  }

</style>