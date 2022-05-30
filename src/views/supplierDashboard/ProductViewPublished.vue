<template>
  <title>View Product - Supplier Dashboard | Produce Mart</title>
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
                    <h3>Product Name Here</h3>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="dashboard_breadcam text-right">
                    <p>
                      <router-link to="/supplier-dashboard/home"
                        ><a>Dashboard</a></router-link
                      >
                      <i class="fas fa-caret-right"></i>
                      <router-link to="/supplier-dashboard/view-products"
                        ><a>Published Products</a></router-link
                      >
                      <i class="fas fa-caret-right"></i> Product Name Here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Main-->
          <div class="col-md-12">
            <div class="mb-3">
              <router-link
                to="/supplier-dashboard/published-products"
                class="backToPage"
                ><i class="bi bi-arrow-bar-left"></i> Back to Published
                Products</router-link
              >
            </div>
            <div class="row justify-content-center summaryBox" v-if="product">
              <div class="col-lg-12">
                <h1>Product Summary</h1>
                <div class="lineHr"></div>
              </div>
              <div class="col-lg-3">
                <div class="productImgDiv">
                  <img :src="product[0].img_url[0]" />
                </div>
              </div>
              <div class="col-lg-4">
                <table>
                  <tr>
                    <td class="mainText">Product Name:</td>
                    <td class="contentText">
                      <span class="statustable">{{ product[0].name }}</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="mainText">Product Category:</td>
                    <td class="contentText">{{ product[0].category }}</td>
                  </tr>
                  <tr>
                    <td class="mainText">farming method:</td>
                    <td class="contentText">{{ product[0].farmMethod }}</td>
                  </tr>
                  <tr>
                    <td class="mainText">country of origin:</td>
                    <td class="contentText">{{ product[0].country }}</td>
                  </tr>
                </table>
              </div>
              <div class="col-lg-4">
                <table>
                  <tr>
                    <td class="mainText">GMO:</td>
                    <td class="contentText">{{ product[0].GMO }}</td>
                  </tr>
                  <tr>
                    <td class="mainText">weight of packaging:</td>
                    <td class="contentText">
                      {{ product[0].packages && product[0].packages.pckWgt }}
                    </td>
                  </tr>
                  <tr>
                    <td class="mainText">price of packaging:</td>
                    <td class="contentText">
                      ${{ product[0].packages && product[0].packages.pckPrice }}
                    </td>
                  </tr>
                </table>
              </div>
              <div class="row mt-4">
                <div class="col-lg-6">
                  <span class="spanAction">Enable Product</span>
                  <label class="switchDisable">
                    <input
                      type="checkbox"
                      id="myCheckbox"
                      @change="toggleCheck()"
                    />
                    <span class="slider round"></span>
                  </label>
                  <span class="spanAction">Disable Product</span>

                  <!-- <div class="disableBtn">
                                        <a href="#disable-click">Open Modal Content</a>
                                    </div>
                                    <div id="disable-click" class="disable-box">
                                        <div class="disable-content">
                                            <h1>Are you sure you want to disable this product?</h1>
                                            <p>Customers will no longer be able to view this product.</p>
                                            <p>Disabled products can be found in the 'unpublished products' section of the MY PRODUCTS tab.</p>
                                            <div class="actionBtn">
                                                <a href="#" class="cancel-btn">Cancel</a>
                                                <a href="#" class="disable-btn">Disable!</a>
                                            </div>
                                            <a href="#" class="modal__close">&times;</a>
                                        </div>
                                    </div> -->
                </div>
              </div>
            </div>
          </div>

          <!--Product Details-->
          <div class="col-md-12 mt-5" id="aLink">
            <form class="form">
              <!-- Progress bar -->
              <div class="progressbar">
                <div class="progress" id="progress"></div>
                <div
                  class="progress-step progress-step-active"
                  data-title="Product Details"
                ></div>
                <div
                  class="progress-step"
                  data-title="Product Characteristics"
                ></div>
                <div class="progress-step" data-title="Image Selection"></div>
                <div class="progress-step" data-title="Certifications"></div>
                <div class="progress-step" data-title="Packaging"></div>
                <div class="progress-step" data-title="Minimum Order"></div>
              </div>

              <!-- Step 1 - Product Details -->
              <div
                class="row form-step form-step-active justify-content-center"
              >
                <div class="col-lg-12 text-center headerH1">
                  <h1>Product Details</h1>
                </div>
                <div class="lineHR"></div>
                <div class="headerP">
                  <p>
                    The form below can be used to specify the details of your
                    product including; Name, variety, description etc.
                  </p>
                </div>
                <div class="lineHR"></div>
                <div class="row mt-4 mb-3">
                  <div class="col-lg-6 mb-3">
                    <label>Product Name <span>*</span></label>
                    <input type="text" class="input" required />
                  </div>
                  <div class="col-lg-6 mb-3">
                    <label>Product Variety <span>*</span></label>
                    <input type="text" class="input" required />
                  </div>
                  <div class="col-lg-12 mb-3">
                    <label>Product Description <span>*</span></label>
                    <textarea
                      cols="30"
                      rows="4"
                      class="input"
                      required
                    ></textarea>
                  </div>
                  <div class="col-lg-6 mb-3">
                    <label>Farming Method <span>*</span></label>
                    <select class="input" required>
                      <option hidden>Select Method</option>
                      <option>Organic</option>
                      <option>Integrated</option>
                      <option>Conventional</option>
                    </select>
                  </div>
                  <div class="col-lg-6 mb-3">
                    <label>GMO <span>*</span></label>
                    <select class="input" required>
                      <option hidden>Select</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                  <div class="col-lg-12 mb-3">
                    <label>Country of origin <span>*</span></label>
                    <select class="input" required>
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
                  <div class="col-lg-12 mb-3">
                    <label>Location Of Produce <span>*</span></label>
                    <textarea
                      cols="30"
                      rows="4"
                      class="input"
                      placeholder="Address"
                      required
                    ></textarea>
                  </div>
                  <div class="col-lg-12 mb-3">
                    <label>intercoms <span>*</span></label>
                    <select class="input" required>
                      <option hidden>Select</option>
                      <option>Option 1</option>
                      <option>Option 2</option>
                    </select>
                  </div>
                  <div class="col-lg-12 mb-3">
                    <label
                      >Is produce available all year round?
                      <span>*</span></label
                    >
                    <fieldset>
                      <input
                        type="radio"
                        @click="yesnoAvailable()"
                        name="available"
                        id="yesAvailable"
                        checked
                      />
                      <label for="yesAvailable" class="radioSpan"
                        >YES, available year round</label
                      >
                      <input
                        type="radio"
                        @click="yesnoAvailable()"
                        name="available"
                        id="noAvailable"
                      />
                      <label for="noAvailable" class="radioSpan"
                        >NO, only available from</label
                      >
                    </fieldset>
                    <div id="ifNoAvailable">
                      From: <input type="date" class="inputShow" /> To:
                      <input type="date" class="inputShow" />
                    </div>
                  </div>
                  <div class="col-lg-12 mb-3">
                    <label>Special Storage Conditions? <span>*</span></label>
                    <fieldset>
                      <input
                        type="radio"
                        @click="yesnoStorage()"
                        name="storage"
                        id="noStorage"
                        checked
                      />
                      <label for="noStorage" class="radioSpan">NO</label>
                      <input
                        type="radio"
                        @click="yesnoStorage()"
                        name="storage"
                        id="yesStorage"
                      />
                      <label for="yesStorage" class="radioSpan">YES</label>
                    </fieldset>
                    <div id="ifYesStorage">
                      <textarea
                        cols="30"
                        rows="3"
                        class="textareaShow"
                        placeholder="Enter storage requirements..."
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-lg-12 mb-3">
                    <label
                      >Is temperature controlled equipment required for
                      transportation? <span>*</span></label
                    >
                    <fieldset>
                      <input
                        type="radio"
                        @click="yesnoTemperature()"
                        name="temperature"
                        id="noTemperature"
                        checked
                      />
                      <label for="noTemperature" class="radioSpan">NO</label>
                      <input
                        type="radio"
                        @click="yesnoTemperature()"
                        name="temperature"
                        id="yesTemperature"
                      />
                      <label for="yesTemperature" class="radioSpan">YES</label>
                    </fieldset>
                    <div id="ifYesTemperature">
                      <textarea
                        cols="30"
                        rows="3"
                        class="textareaShow"
                        placeholder="Enter details..."
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6"></div>
                  <div class="col-sm-6">
                    <button
                      type="button"
                      class="btn btn-next width-100 ml-auto"
                    >
                      Next
                    </button>
                  </div>
                  <div class="col-sm-12">
                    <p class="saveAndContinue"><a>Save & Continue Later</a></p>
                  </div>
                </div>
              </div>

              <!-- Step 2 - Product Characteristics -->
              <div class="row form-step">
                <div class="col-lg-12 text-center headerH1">
                  <h1>Product Characteristics</h1>
                </div>
                <div class="lineHR"></div>
                <div class="headerP">
                  <p>
                    The form below can be used to specify the details of your
                    product including; Name, variety, description etc.
                  </p>
                </div>
                <div class="lineHR"></div>
                <div class="row mt-4 mb-3">
                  <div class="col-lg-12 mb-3">
                    <label>Select Your Product Category <span>*</span></label>
                    <div class="row">
                      <div class="col-lg-4 radioDiv mb-2">
                        <input
                          type="checkbox"
                          @click="productOil()"
                          name="category"
                          id="idOil"
                        />
                        <label for="idOil" class="radioSpan">Oils</label>
                      </div>
                      <div class="col-lg-4 radioDiv mb-2">
                        <input
                          type="checkbox"
                          @click="productFruit()"
                          name="category"
                          id="idFruit"
                        />
                        <label class="radioSpan" for="idFruit">Fruits</label>
                      </div>
                      <div class="col-lg-4 radioDiv mb-2">
                        <input
                          type="checkbox"
                          @click="productVegetable()"
                          name="category"
                          id="idVegetable"
                        />
                        <label class="radioSpan" for="idVegetable"
                          >Vegetables</label
                        >
                      </div>
                      <div class="col-lg-4 radioDiv mb-2">
                        <input
                          type="checkbox"
                          @click="productGrain()"
                          name="category"
                          id="idGrain"
                        />
                        <label class="radioSpan" for="idGrain"
                          >Grains/Beans/Pulses</label
                        >
                      </div>
                      <div class="col-lg-4 radioDiv mb-2">
                        <input
                          type="checkbox"
                          @click="productNut()"
                          name="category"
                          id="idNut"
                        />
                        <label class="radioSpan" for="idNut">Nuts/Seeds</label>
                      </div>
                      <div class="col-lg-4 radioDiv mb-2">
                        <input
                          type="checkbox"
                          @click="productCoffee()"
                          name="category"
                          id="idCoffee"
                        />
                        <label class="radioSpan" for="idCoffee">Coffee</label>
                      </div>
                      <div class="col-lg-4 radioDiv mb-2">
                        <input
                          type="checkbox"
                          @click="productFlower()"
                          name="category"
                          id="idFlower"
                        />
                        <label class="radioSpan" for="idFlower">Flower</label>
                      </div>
                      <div class="col-lg-4 radioDiv mb-2">
                        <input
                          type="checkbox"
                          @click="productAnimalFeed()"
                          name="category"
                          id="idAnimalFeed"
                        />
                        <label class="radioSpan" for="idAnimalFeed"
                          >Animal Feeds</label
                        >
                      </div>
                      <div class="col-lg-4 radioDiv mb-2">
                        <input
                          type="checkbox"
                          @click="productOther()"
                          name="category"
                          id="idOther"
                        />
                        <label class="radioSpan" for="idOther">Others</label>
                      </div>
                    </div>
                  </div>
                  <!--Oil Category-->
                  <div class="row mt-1 categoryDiv" id="ifOil">
                    <div class="col-lg-12 mb-2">
                      <h3>Oil category</h3>
                      <div class="lineHr"></div>
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>processing Type</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Grade</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Purity(%)</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Acidity(%)</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Taste</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>smell</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDivLarge mb-3">
                      <label>Use</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDivLarge mb-3">
                      <label>Additional comment</label>
                      <textarea
                        cols="30"
                        rows="4"
                        class="input"
                        placeholder="E.G extra specifications"
                      ></textarea>
                    </div>
                  </div>
                  <!--Fruit Category-->
                  <div class="row mt-1 categoryDiv" id="ifFruit">
                    <div class="col-lg-12 mb-2">
                      <h3>Fruit Category</h3>
                      <div class="lineHr"></div>
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>color</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Grade, style or quality</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>maturity</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>size (cm)</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Taste</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Weight (kg)</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDivLarge mb-3">
                      <label>Additional comment</label>
                      <textarea
                        cols="30"
                        rows="4"
                        class="input"
                        placeholder="E.G extra specifications"
                      ></textarea>
                    </div>
                  </div>
                  <!--Vegetable Category-->
                  <div class="row mt-1 categoryDiv" id="ifVegetable">
                    <div class="col-lg-12 mb-2">
                      <h3>Vegetable Category</h3>
                      <div class="lineHr"></div>
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>processing type</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Grade, style or quality</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>color</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>freezing process</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Taste</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>shape</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDivLarge mb-3">
                      <label>Additional comment</label>
                      <textarea
                        cols="30"
                        rows="4"
                        class="input"
                        placeholder="E.G extra specifications"
                      ></textarea>
                    </div>
                  </div>
                  <!--Grains/Beans/Pulses Category-->
                  <div class="row mt-1 categoryDiv" id="ifGrain">
                    <div class="col-lg-12 mb-2">
                      <h3>Grains/Beans/Pulses Category</h3>
                      <div class="lineHr"></div>
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>color</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Grade, style or quality</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>drying process</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>moisture</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>admixture</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>broken</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>use</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>imperfect rate</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDivLarge mb-3">
                      <label>size (cm)</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDivLarge mb-3">
                      <label>Additional comment</label>
                      <textarea
                        cols="30"
                        rows="4"
                        class="input"
                        placeholder="E.G extra specifications"
                      ></textarea>
                    </div>
                  </div>
                  <!--Nuts/Seeds Category-->
                  <div class="row mt-1 categoryDiv" id="ifNut">
                    <div class="col-lg-12 mb-2">
                      <h3>Nuts/Seeds Category</h3>
                      <div class="lineHr"></div>
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>color</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>style</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>shell type</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>grade or quality</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>USDA Grade</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>size</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>form</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>moisture</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Kernels per KG</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Defects</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDivLarge mb-3">
                      <label>Additional comment</label>
                      <textarea
                        cols="30"
                        rows="4"
                        class="input"
                        placeholder="E.G extra specifications"
                      ></textarea>
                    </div>
                  </div>
                  <!--Coffee Category-->
                  <div class="row mt-1 categoryDiv" id="ifCoffee">
                    <div class="col-lg-12 mb-2">
                      <h3>Coffee Category</h3>
                      <div class="lineHr"></div>
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>color</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>grade</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>coffee type</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Defects</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>processing type</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>bean size (cm)</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>maturity</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Taste</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDivLarge mb-3">
                      <label>moisture</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDivLarge mb-3">
                      <label>Additional comment</label>
                      <textarea
                        cols="30"
                        rows="4"
                        class="input"
                        placeholder="E.G extra specifications"
                      ></textarea>
                    </div>
                  </div>
                  <!--Flower Category-->
                  <div class="row mt-1 categoryDiv" id="ifFlower">
                    <div class="col-lg-12 mb-2">
                      <h3>Flower Category</h3>
                      <div class="lineHr"></div>
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>color</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>style, grade or quality</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>number of petals</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>petals size (cm)</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>bud size (cm)</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>head size (cm)</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>sterm lenght (cm)</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>stem per bunch</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDivLarge mb-3">
                      <label>Additional comment</label>
                      <textarea
                        cols="30"
                        rows="4"
                        class="input"
                        placeholder="E.G extra specifications"
                      ></textarea>
                    </div>
                  </div>
                  <!--Animal Feeds Category-->
                  <div class="row mt-1 categoryDiv" id="ifAnimalFeed">
                    <div class="col-lg-12 mb-2">
                      <h3>Animal Feeds Category</h3>
                      <div class="lineHr"></div>
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>color</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>style, grade or quality</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>drying process</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Taste</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>smell</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>moisture</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>admixture</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>use</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDivLarge mb-3">
                      <label>Additional comment</label>
                      <textarea
                        cols="30"
                        rows="4"
                        class="input"
                        placeholder="E.G extra specifications"
                      ></textarea>
                    </div>
                  </div>
                  <!--Others Category-->
                  <div class="row mt-1 categoryDiv" id="ifOther">
                    <div class="col-lg-12 mb-2">
                      <h3>Others</h3>
                      <div class="lineHr"></div>
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>color</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>style, grade or quality</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>processing type</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Taste</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>shape</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>size (CM)</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDivLarge mb-3">
                      <label>Defects</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="categoryInnerDivLarge mb-3">
                      <label>Additional comment</label>
                      <textarea
                        cols="30"
                        rows="4"
                        class="input"
                        placeholder="E.G extra specifications"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <button type="button" class="btn btn-prev width-100">
                      Previous
                    </button>
                  </div>
                  <div class="col-sm-6">
                    <button type="button" class="btn btn-next width-100">
                      Next
                    </button>
                  </div>
                  <div class="col-sm-12">
                    <p class="saveAndContinue"><a>Save & Continue Later</a></p>
                  </div>
                </div>
              </div>

              <!-- Step 3 - Image Selection -->
              <div class="row form-step">
                <div class="col-lg-12 text-center headerH1">
                  <h1>Product Image</h1>
                </div>
                <div class="lineHR"></div>
                <div class="headerP">
                  <p>
                    The form below can be used to specify the details of your
                    product including; Name, variety, description etc.
                  </p>
                </div>
                <div class="lineHR"></div>
                <div class="col-lg-12 mt-4 mb-3">
                  <label>Upload Primary Image <span>*</span></label>
                  <input
                    type="file"
                    class="input"
                    accept=".jpg, .jpeg, .png, .webp"
                    required
                  />
                  <small class="uploadSmallPicture"
                    >(accepted image format: jpeg, jpg, png, webp)</small
                  >
                </div>
                <div class="col-lg-12 mt-2 mb-3 upload-more-image">
                  <label>Upload Additional Image</label>
                  <input
                    type="file"
                    class="input"
                    accept=".jpg, .jpeg, .png, .webp"
                  />
                </div>
                <div class="row mt-3">
                  <div class="upload-dynamic"></div>
                </div>
                <div class="uploadMore">
                  <a class="add-extra-field"
                    >Upload More <i class="bi bi-plus-circle"></i
                  ></a>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <button type="button" class="btn btn-prev width-100">
                      Previous
                    </button>
                  </div>
                  <div class="col-sm-6">
                    <button type="button" class="btn btn-next width-100">
                      Next
                    </button>
                  </div>
                  <div class="col-sm-12">
                    <p class="saveAndContinue"><a>Save & Continue Later</a></p>
                  </div>
                </div>
              </div>

              <!-- Step 4 - Certification -->
              <div class="row form-step">
                <div class="col-lg-12 text-center headerH1">
                  <h1>Certification</h1>
                </div>
                <div class="lineHR"></div>
                <div class="headerP">
                  <p>
                    The form below can be used to specify the details of your
                    product including; Name, variety, description etc.
                  </p>
                </div>
                <div class="lineHR"></div>
                <div class="row add-more-certi">
                  <div class="col-lg-12 mt-4 mb-3">
                    <label>Certification Name</label>
                    <input type="text" class="input" />
                  </div>
                  <div class="col-lg-12">
                    <label>Upload Certification</label>
                    <input type="file" class="input" />
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="upload-certi-dynamic"></div>
                </div>
                <div class="uploadMore">
                  <a class="add-certi"
                    >Upload More <i class="bi bi-plus-circle"></i
                  ></a>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <button type="button" class="btn btn-prev width-100">
                      Previous
                    </button>
                  </div>
                  <div class="col-sm-6">
                    <button type="button" class="btn btn-next width-100">
                      Next
                    </button>
                  </div>
                  <div class="col-sm-12">
                    <p class="saveAndContinue"><a>Save & Continue Later</a></p>
                  </div>
                </div>
              </div>

              <!-- Step 5 - Packaging -->
              <div class="row form-step">
                <div class="col-lg-12 text-center headerH1">
                  <h1>Packaging</h1>
                </div>
                <div class="lineHR"></div>
                <div class="headerP">
                  <p>
                    The form below can be used to specify the details of your
                    product including; Name, variety, description etc.
                  </p>
                </div>
                <div class="lineHR"></div>
                <div class="row">
                  <div class="col-lg-6 mt-4 mb-3">
                    <label>Packaging Unit</label>
                    <input type="text" class="input" />
                  </div>
                  <div class="col-lg-6 mt-4 mb-3">
                    <label>Volume of Packaging (litre)</label>
                    <input type="text" class="input" />
                  </div>
                  <div class="col-lg-6 mt-4 mb-3">
                    <label>Weight of Packaging</label>
                    <select class="input">
                      <option hidden>Select Weight</option>
                      <option>KG</option>
                      <option>LB</option>
                    </select>
                  </div>
                  <div class="col-lg-6 mt-4 mb-3">
                    <label>Price of Packaging ($)</label>
                    <input type="text" class="input" />
                  </div>
                </div>
                <div class="lineHR"></div>
                <div class="col-lg-12 text-center headerH1">
                  <h1>Shipment</h1>
                </div>
                <div class="row">
                  <div class="col-lg-6 mt-4 mb-3">
                    <label>Shipment Packaging</label>
                    <select class="input">
                      <option hidden>Select</option>
                      <option>Crate</option>
                      <option>Box</option>
                      <option>Bag</option>
                      <option>Pack</option>
                      <option>Pallet</option>
                      <option>Carton</option>
                      <option>Container</option>
                    </select>
                  </div>
                  <div class="col-lg-6 mt-4 mb-3">
                    <label>Weight of Shipment package</label>
                    <input type="text" class="input" />
                  </div>
                  <div class="col-lg-12 mt-4 mb-3">
                    <label>Price of shipment ($)</label>
                    <input type="text" class="input" />
                  </div>
                  <div class="col-lg-12 mt-4 mb-3">
                    <label>Number Of Units Per Shipment Package</label>
                    <input
                      type="text"
                      class="input"
                      placeholder="e.g. 12 x 1Ltr bottle in a box"
                    />
                    <input
                      type="text"
                      class="input"
                      placeholder="e.g. 40 boxes per pallet"
                    />
                  </div>
                  <div class="col-lg-12 mt-4 mb-3">
                    <label>Shipping in Container</label>
                    <small
                      >How many units can fit in a 20 foot shipping container?
                      This is useful information for the buyer to see the size
                      of the shipment</small
                    >
                    <input type="text" class="input" />
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <button type="button" class="btn btn-prev width-100">
                      Previous
                    </button>
                  </div>
                  <div class="col-sm-6">
                    <button type="button" class="btn btn-next width-100">
                      Next
                    </button>
                  </div>
                  <div class="col-sm-12">
                    <p class="saveAndContinue"><a>Save & Continue Later</a></p>
                  </div>
                </div>
              </div>

              <!-- Step 6 - Minimum Order -->
              <div class="row form-step">
                <div class="col-lg-12 text-center headerH1">
                  <h1>Minimum Order</h1>
                </div>
                <div class="lineHR"></div>
                <div class="headerP">
                  <p>
                    The form below can be used to specify the details of your
                    product including; Name, variety, description etc.
                  </p>
                </div>
                <div class="lineHR"></div>
                <div class="row justify-content-center">
                  <div class="col-lg-7 mb-4">
                    <label>Minimum Order Quantity</label>
                    <small
                      >Minimum number of units customers can request to buy for
                      this product</small
                    >
                    <input type="text" class="input" />
                  </div>
                  <div class="col-lg-12 text-center">
                    <label>Supply Ability</label>
                    <small
                      >Please specify how much (quantity) and how often
                      (frequency) you can supply this product. E.g. 2,000 MT
                      every month</small
                    >
                    <div class="row mt-2">
                      <div class="col-lg-6 mb-3">
                        <label>Quantity</label>
                        <input type="text" class="input" />
                      </div>
                      <div class="col-lg-6 mb-3">
                        <label>frequency</label>
                        <select class="input">
                          <option>Week</option>
                          <option>Month</option>
                          <option>Quarter</option>
                          <option>Year</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12 mt-3 mb-3">
                    <input type="checkbox" id="acceptTerms" required />
                    <label for="acceptTerms" class="labelTerms"
                      >By submitting this product, you agree to our
                      <a href="/terms" target="_blank">Terms & conditions</a>
                      and that you have all the required documentation and
                      licenses to export this product. You also agree that
                      producemart will not be responsible for obtaining these
                      licenses or documents on your behalf.</label
                    >
                  </div>
                </div>
                <div class="btns-group">
                  <a href="#" class="btn btn-prev">Previous</a>
                  <input type="submit" value="Submit" class="btn" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <dash-footer />
  </section>
</template>
<style scoped src="@/assets/vendors/themefy_icon/themify-icons.css"></style>
<style scoped src="@/assets/vendors/niceselect/css/nice-select.css"></style>
<style scoped src="@/assets/css/stepsform.css"></style>
<style scoped src="@/assets/css/style.css"></style>
<style scoped src="@/assets/css/styleSupport.css"></style>
<script>
import DashSidebar from "./dash-sidebar.vue";
import DashNavbar from "./dash-navbar.vue";
import DashFooter from "./dash-footer.vue";
import { countries } from "@/assets/countries";
export default {
  name: "Produce Mart",
  components: {
    "dash-sidebar": DashSidebar,
    "dash-navbar": DashNavbar,
    "dash-footer": DashFooter,
  },
  mounted() {
    window.scrollTo(0, 0);

    $(".add-extra-field").click(function () {
      $(".upload-more-image").clone().appendTo(".upload-dynamic");
      $(".upload-dynamic .upload-more-image").addClass("single remove");
      $(".single .add-extra-field").remove();
      $(".single").append(
        '<a href="#" id="p2" class="remove-field btn-remove-field">Remove Field</a>'
      );
      $(".upload-dynamic > .single").attr("class", "remove");
      $(".upload-dynamic input").each(function () {
        var count = 0;
        var fieldname = $(this).attr("name");
        $(this).attr("name", fieldname + count);
        count++;
      });
    });
    $(document).on("click", ".remove-field", function (e) {
      $(this).parent(".remove").remove();
      e.preventDefault();
    });

    $(".add-certi").click(function () {
      $(".add-more-certi").clone().appendTo(".upload-certi-dynamic");
      $(".upload-certi-dynamic .add-more-certi").addClass("single remove");
      $(".single .add-certi").remove();
      $(".single").append(
        '<a href="#" id="p2" class="remove-field btn-remove-field">Remove Field</a>'
      );
      $(".upload-certi-dynamic > .single").attr("class", "remove");
      $(".upload-certi-dynamic input").each(function () {
        var count = 0;
        var fieldname = $(this).attr("name");
        $(this).attr("name", fieldname + count);
        count++;
      });
    });
    $(document).on("click", ".remove-field", function (e) {
      $(this).parent(".remove").remove();
      e.preventDefault();
    });

    const prevBtns = document.querySelectorAll(".btn-prev");
    const nextBtns = document.querySelectorAll(".btn-next");
    const progress = document.getElementById("progress");
    const formSteps = document.querySelectorAll(".form-step");
    const progressSteps = document.querySelectorAll(".progress-step");

    let formStepsNum = 0;

    nextBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        formStepsNum++;
        updateFormSteps();
        updateProgressbar();
      });
    });

    prevBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        formStepsNum--;
        updateFormSteps();
        updateProgressbar();
      });
    });

    function updateFormSteps() {
      formSteps.forEach((formStep) => {
        formStep.classList.contains("form-step-active") &&
          formStep.classList.remove("form-step-active");
      });

      formSteps[formStepsNum].classList.add("form-step-active");
    }

    function updateProgressbar() {
      progressSteps.forEach((progressStep, idx) => {
        if (idx < formStepsNum + 1) {
          progressStep.classList.add("progress-step-active");
        } else {
          progressStep.classList.remove("progress-step-active");
        }
      });

      const progressActive = document.querySelectorAll(".progress-step-active");

      progress.style.width =
        ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
    }

    let externalScriptCustom = document.createElement("script");
    externalScriptCustom.setAttribute(
      "src",
      "https://cdn.statically.io/gh/NathTimi/Mart-script/main/custom.js"
    );
    document.head.appendChild(externalScriptCustom);
    this.getProduct();
  },
  data() {
    return {
      token: JSON.parse(localStorage.getItem("user")).token,
      countries: countries,
      id: this.$route.params.id,
      product: null,
    };
  },
  methods: {
    toggleCheck() {
      if (document.getElementById("myCheckbox").checked === false) {
        document.getElementById("aLink").style.display = "block";
      } else {
        document.getElementById("aLink").style.display = "none";
      }
    },
    //Is produce available all year round?
    yesnoAvailable() {
      if (document.getElementById("noAvailable").checked) {
        document.getElementById("ifNoAvailable").style.display = "block";
      } else document.getElementById("ifNoAvailable").style.display = "none";
    },
    //Special Storage Conditions?
    yesnoStorage() {
      if (document.getElementById("yesStorage").checked) {
        document.getElementById("ifYesStorage").style.display = "block";
      } else document.getElementById("ifYesStorage").style.display = "none";
    },
    //Is temperature controlled equipment required for transportation?
    yesnoTemperature() {
      if (document.getElementById("yesTemperature").checked) {
        document.getElementById("ifYesTemperature").style.display = "block";
      } else document.getElementById("ifYesTemperature").style.display = "none";
    },

    productOil() {
      var x = document.getElementById("ifOil");
      if (!x.style.display || x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    },

    productFruit() {
      var x = document.getElementById("ifFruit");
      if (!x.style.display || x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    },

    productVegetable() {
      var x = document.getElementById("ifVegetable");
      if (!x.style.display || x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    },

    productGrain() {
      var x = document.getElementById("ifGrain");
      if (!x.style.display || x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    },

    productNut() {
      var x = document.getElementById("ifNut");
      if (!x.style.display || x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    },

    productCoffee() {
      var x = document.getElementById("ifCoffee");
      if (!x.style.display || x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    },

    productFlower() {
      var x = document.getElementById("ifFlower");
      if (!x.style.display || x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    },

    productAnimalFeed() {
      var x = document.getElementById("ifAnimalFeed");
      if (!x.style.display || x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    },

    productOther() {
      var x = document.getElementById("ifOther");
      if (!x.style.display || x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    },
    async getProduct() {
      const product = null;
      const res = await fetch(
        "https://producemart.herokuapp.com/getProductbyUser/" + this.id,
        {
          method: "GET",
          headers: {
            Authorization: this.token,
          },
        }
      );
      const { data } = await res.json();
      this.product = data;
      console.log(data);
    },
  },
};
</script>
