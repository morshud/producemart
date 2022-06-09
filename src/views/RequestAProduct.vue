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
                          <router-link to="/login"><a class="authLogin">Login</a></router-link>
                          <router-link to="buyer-registration"><a class="authSignup">Sign Up</a></router-link>
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
            <a href="#" class="btnRequestBtn" data-bs-toggle="modal" data-bs-target="#exampleModal">Request A Product <i class="bi bi-arrow-right"></i></a>
            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Request a Product Form</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <section class="formSec">
                      <div class="container">
                        <div v-if="statusMessage" class="alert alert-success alert-dismissible fade show" role="alert">
                          Success! {{statusMessage}}
                        </div>
                        <div v-if="userAuth" class="row justify-content-center">
                          <div class="col-lg-12">
                            <form @submit.prevent="requestQuote">
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
                                  <datalist id="price">
                                      <option value="Negotiable"></option>
                                  </datalist>
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
                                  <label>Food Category</label>
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
                                    <option>One-off</option>
                                    <option>Frequent</option>
                                  </select>
                                </div>
                                <!--Quantity-->
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
                                <!--Destination Country-->
                                <div class="col-lg-6 mb-4">
                                  <label>Destination Country</label>
                                  <select required v-model="destination" class="input">
                                    <option hidden>Select Country</option>
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
                                <div class="col-lg-6 mb-4">
                                  <label>Incoterms</label>
                                  <select required v-model="incoterm" class="input">
                                    <option>Select</option>
                                    <option>Option here</option>
                                    <option>Option here</option>
                                  </select>
                                </div>
                                <!--Additional Specification-->
                                <div class="col-lg-12 mb-4">
                                  <label>Additional Specification</label>
                                  <textarea required v-model="addSpec" rows="3" placeholder="Additional spec..." class="input"></textarea>
                                </div>
                                <div class="col-lg-12">
                                  <button type="submit">Request Quote</button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div v-else class="row justify-content-center">
                          <h3>Please <router-link to="/login"><a class="authLogin">Login</a></router-link> to request a product quote</h3>
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
                      <input type="text" placeholder="Product name" class="input">
                    </div>
                    <div class="col-lg-12 formBox">
                      <label>Category Filter</label>
                      <div class="checkBoxDiv">
                        <input type="checkbox"> <span>Vegetables</span>
                      </div>
                      <div class="checkBoxDiv">
                        <input type="checkbox"> <span>Oils</span>
                      </div>
                      <div class="checkBoxDiv">
                        <input type="checkbox"> <span>Fruits</span>
                      </div>
                      <div class="checkBoxDiv">
                        <input type="checkbox"> <span>Grains/Beans/Pulses</span>
                      </div>
                      <div class="checkBoxDiv">
                        <input type="checkbox"> <span>Nuts/Seeds</span>
                      </div>
                      <div class="checkBoxDiv">
                        <input type="checkbox"> <span>Coffee</span>
                      </div>
                      <div class="checkBoxDiv">
                        <input type="checkbox"> <span>Flower</span>
                      </div>
                      <div class="checkBoxDiv">
                        <input type="checkbox"> <span>Animal Feeds</span>
                      </div>
                    </div>
                    <div class="col-lg-12 formBox">
                      <label>Product Location</label>
                      <input type="text" placeholder="Enter location" class="input">
                    </div>
                    <div class="col-lg-12 formBox">
                      <label>Price Range</label>
                      <input type="text" placeholder="Min Price" class="input minPrice">
                      <input type="text" placeholder="Max Price" class="input maxPrice">
                    </div>
                    <div class="col-lg-12 formBox">
                      <label>Supply Frequency</label>
                      <div class="checkBoxDiv">
                        <input type="checkbox"> <span>One-Off</span>
                      </div>
                      <div class="checkBoxDiv">
                        <input type="checkbox"> <span>Frequent</span>
                      </div>
                    </div>
                    <div class="col-lg-12 formBox">
                      <label>Crop Year</label>
                      <input type="text" placeholder="Start year" class="input minPrice">
                      <input type="text" placeholder="End year" class="input maxPrice">
                    </div>
                    <div class="col-lg-12 mb-3">
                      <button type="submit" class="button">Apply Filter</button>
                    </div>
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
                  <input type="text" placeholder="Product name" class="input">
                </div>
                <div class="col-lg-12 formBox">
                  <label>Category Filter</label>
                  <div class="checkBoxDiv">
                    <input type="checkbox"> <span>Vegetables</span>
                  </div>
                  <div class="checkBoxDiv">
                    <input type="checkbox"> <span>Oils</span>
                  </div>
                  <div class="checkBoxDiv">
                    <input type="checkbox"> <span>Fruits</span>
                  </div>
                  <div class="checkBoxDiv">
                    <input type="checkbox"> <span>Grains/Beans/Pulses</span>
                  </div>
                  <div class="checkBoxDiv">
                    <input type="checkbox"> <span>Nuts/Seeds</span>
                  </div>
                  <div class="checkBoxDiv">
                    <input type="checkbox"> <span>Coffee</span>
                  </div>
                  <div class="checkBoxDiv">
                    <input type="checkbox"> <span>Flower</span>
                  </div>
                  <div class="checkBoxDiv">
                    <input type="checkbox"> <span>Animal Feeds</span>
                  </div>
                </div>
                <div class="col-lg-12 formBox">
                  <label>Product Location</label>
                  <input type="text" placeholder="Enter location" class="input">
                </div>
                <div class="col-lg-12 formBox">
                  <label>Price Range</label>
                  <input type="text" placeholder="Min Price" class="input minPrice">
                  <input type="text" placeholder="Max Price" class="input maxPrice">
                </div>
                <div class="col-lg-12 formBox">
                  <label>Supply Frequency</label>
                  <div class="checkBoxDiv">
                    <input type="checkbox"> <span>One-Off</span>
                  </div>
                  <div class="checkBoxDiv">
                    <input type="checkbox"> <span>Frequent</span>
                  </div>
                </div>
                <div class="col-lg-12 formBox">
                  <label>Crop Year</label>
                  <input type="text" placeholder="Start year" class="input minPrice">
                  <input type="text" placeholder="End year" class="input maxPrice">
                </div>
              </div>
            </form>
          </div>
          <div class="col-lg-9">
            <div class="row">
              <div class="col-lg-12">
                <div class="bulletBoard">
                  <p>Product Name: <span>10 Bags of Banana</span></p>
                  <p>Product Price: <span>$500</span></p>
                  <p>Product Variety: <span></span></p>
                  <p>Food Category: <span>Vegetable</span></p>
                  <p>Supply Frequency: <span>One-Off</span></p>
                  <p>Quantity: <span>100</span></p>
                  <p>Weight: <span>kg</span></p>
                  <p>Destination Country: <span>South Africa</span></p>
                  <p>Intercoms: <span>Specify Here</span></p>
                  <p>Crop Year (Start Year): <span>15/04/2022</span></p>
                  <p>Crop Year (End Year): <span>15/05/2022</span></p>
                  <p>Product Description: <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, vero incidunt consectetur inventore at perferendis non ab totam ex rerum delectus repellendus consequuntur porro omnis voluptatem neque facere laboriosam dicta cum. Provident placeat neque incidunt enim saepe adipisci nesciunt suscipit officiis laborum deserunt, ea error facere quibusdam repellendus cumque facilis!</span></p>
                  <div class="btnDiv">
                    <a href="#">Product Response</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="bulletBoard">
                  <p>Product Name: <span>10 Bags of Banana</span></p>
                  <p>Product Price: <span>$500</span></p>
                  <p>Product Variety: <span></span></p>
                  <p>Food Category: <span>Vegetable</span></p>
                  <p>Supply Frequency: <span>One-Off</span></p>
                  <p>Quantity: <span>100</span></p>
                  <p>Weight: <span>kg</span></p>
                  <p>Destination Country: <span>South Africa</span></p>
                  <p>Intercoms: <span>Specify Here</span></p>
                  <p>Crop Year (Start Year): <span>15/04/2022</span></p>
                  <p>Crop Year (End Year): <span>15/05/2022</span></p>
                  <p>Product Description: <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, vero incidunt consectetur inventore at perferendis non ab totam ex rerum delectus repellendus consequuntur porro omnis voluptatem neque facere laboriosam dicta cum. Provident placeat neque incidunt enim saepe adipisci nesciunt suscipit officiis laborum deserunt, ea error facere quibusdam repellendus cumque facilis!</span></p>
                  <div class="btnDiv">
                    <a href="#">Product Response</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="bulletBoard">
                  <p>Product Name: <span>10 Bags of Banana</span></p>
                  <p>Product Price: <span>$500</span></p>
                  <p>Product Variety: <span></span></p>
                  <p>Food Category: <span>Vegetable</span></p>
                  <p>Supply Frequency: <span>One-Off</span></p>
                  <p>Quantity: <span>100</span></p>
                  <p>Weight: <span>kg</span></p>
                  <p>Destination Country: <span>South Africa</span></p>
                  <p>Intercoms: <span>Specify Here</span></p>
                  <p>Crop Year (Start Year): <span>15/04/2022</span></p>
                  <p>Crop Year (End Year): <span>15/05/2022</span></p>
                  <p>Product Description: <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, vero incidunt consectetur inventore at perferendis non ab totam ex rerum delectus repellendus consequuntur porro omnis voluptatem neque facere laboriosam dicta cum. Provident placeat neque incidunt enim saepe adipisci nesciunt suscipit officiis laborum deserunt, ea error facere quibusdam repellendus cumque facilis!</span></p>
                  <div class="btnDiv">
                    <a href="#">Product Response</a>
                  </div>
                </div>
              </div>
              <div class="col-md-12 text-center paginationSection">
                <button class="arrows"><i class="bi bi-arrow-left-circle-fill"></i></button>
                <button class="btnButton active">1</button>
                <button class="btnButton">2</button>
                <button class="btnButton">3</button>
                <button class="btnButton">4</button>
                <button class="arrows"><i class="bi bi-arrow-right-circle-fill"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <mainFooter/>
</template>
<script>
    import MainHeader from './mainHeader.vue'
    import SearchHeader from './searchHeader.vue'
    import MainFooter from './mainFooter.vue'
    import SearchInner from './searchInner.vue'
    import QUOTE from './../service/quote-service'
    export default {
      name: "Produce Mart",
      components:{
      'mainHeader': MainHeader,
      'searchHeader': SearchHeader,
      'mainFooter': MainFooter,
      'searchInner': SearchInner,
      },
      data(){
        return{
          productName: '',
          price: '',
          productVariety: '',
          productDesc: '',
          productCategory: '',
          supplyFrequency: '',
          quantity: '',
          weight: '',
          startDate: '',
          endDate: '',
          productCharacter: '',
          destination: '',
          incoterm: '',
          addSpec: '',
          statusMessage: ""
        }
      },
      computed:{
        userAuth(){
          const user = JSON.parse(localStorage.getItem("user"));
          if(user && user.token){
            console.log("hello")
            return true
          }
          else{
            console.log("No token")
            return false
          }
        }
      },
      methods: {
        requestQuote(){
          const quoteRequests = {
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
            "country": this.destination,
            "weight": this.weight,
            "intercoms": this.incoterm
          }
          QUOTE.CreateQuote(quoteRequests).then(res => {
            console.log(res);
            this.clearForm()
            this.statusMessage = res.data.message
            setTimeout(function () {
              this.statusMessage = ""
            }, 5000);
          })
          .catch(err => {
            console.log(err);
          })
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
          this.destination = ''
          this.incoterm = ''
          this.addSpec = ''
        }
      },
      mounted(){
        window.scrollTo(0,0)
      }
    }
</script>