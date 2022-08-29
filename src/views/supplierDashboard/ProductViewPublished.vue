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
                    <h3>{{ product?.name }}</h3>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="dashboard_breadcam text-right">
                    <p>
                      <router-link to="/supplier-dashboard/home"
                        ><a>Dashboard</a></router-link
                      >
                      <!-- <i class="fas fa-caret-right"></i>
                      <span><a>Published Products</a></span>
                      <i class="fas fa-caret-right"></i> {{ product?.name }} -->
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Main-->
          <div class="col-md-12">
            <div class="mb-3">
              <span @click="$router.back()" class="backToPage"
                ><i class="bi bi-arrow-bar-left"></i> Back</span
              >
            </div>
            <div
              class="row justify-content-center summaryBox"
              v-if="product && product.status != 'incomplete'"
            >
              <div class="col-lg-12">
                <h1>Product Summary</h1>
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
                      <span class="statustable">{{ product.name }}</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="mainText">Product Category:</td>
                    <td class="contentText">{{ product.category }}</td>
                  </tr>
                  <tr>
                    <td class="mainText">farming method:</td>
                    <td class="contentText">{{ product.farmMethod }}</td>
                  </tr>
                  <tr>
                    <td class="mainText">country of origin:</td>
                    <td class="contentText">{{ product.country }}</td>
                  </tr>
                </table>
              </div>
              <div class="col-lg-4">
                <table>
                  <tr>
                    <td class="mainText">GMO:</td>
                    <td class="contentText">{{ product.GMO }}</td>
                  </tr>
                  <tr>
                    <td class="mainText">weight of packaging:</td>
                    <td class="contentText">
                      {{ product.package && product.package.weight }}
                      {{ product.package && product.package.weight_unit }}
                    </td>
                  </tr>
                  <tr>
                    <td class="mainText">price of packaging:</td>
                    <td class="contentText">
                      {{ product.package && product.package.price }}
                    </td>
                  </tr>
                  <tr>
                    <td>Comments:</td>
                    <td>
                      <p v-for="(fdbk, i) in product.feedback" :key="i">
                        {{ fdbk.comment }}
                      </p>
                    </td>
                  </tr>
                </table>
              </div>

              <div class="row">
                <div class="col-lg-12">
                  <div id="wrapper">
                    <!-- <svg
                      viewBox="0 -135 100 135"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <g id="lock" fill="currentColor">
                        <g id="lock-body" @click="lockUnlock">
                          <path d="M0,0 h100 v-65 l-10, -10 h-80 l-10, 10z" />
                        </g>
                        <g id="lock-shackle">
                          <path
                            d="M10,-75 v-30 q 0,-30,30,-30 h20 q 30,0,30,30 v30 h-15 v-30 q 0,-15,-15,-15 h-20 q -15,0,-15,15 v30z"
                          />
                        </g>
                      </g>
                    </svg> -->
                  </div>
                </div>
              </div>
              <div
                class="row mt-4"
                v-if="product.status == 'active' || !product.available"
              >
                <div class="col-lg-12" @click="lockUnlock">
                  <span class="spanAction" v-if="lock"
                    ><i class="fas fa-lock"></i
                  ></span>
                  <span class="spanAction" v-else
                    ><i class="fas fa-unlock"></i
                  ></span>

                  <span style="padding-left: 10px" v-if="lock"
                    ><small>Click to Unlock Product to enable editing</small>
                  </span>
                  <span style="padding-left: 10px" v-else
                    ><small>Product Unlocked for editing.</small>
                  </span>
                </div>
                <div class="col-lg-12" v-if="!lock">
                  <label class="switchDisable">
                    <input
                      type="checkbox"
                      id="myCheckbox"
                      @click="makeUnavailable()"
                      :checked="prodAvailable"
                      :disabled="waitAvailabilityResponse"
                    />
                    <span class="slider round"></span>
                  </label>
                  <span class="spanAction" v-if="!waitAvailabilityResponse">{{
                    prodAvailable ? "Available" : "Unavailable"
                  }}</span>
                  <span class="spanAction" v-else>Please wait...</span>
                </div>
              </div>
            </div>
          </div>

          <!-- <Product Details -->
          <div class="col-md-12 mt-5" id="aLink">
            <form
              class="form"
              @submit.prevent="updateProduct('upload')"
              enctype="multipart/form-data"
              :key="refresh"
            >
              <!-- Progress bar -->
              <div class="progressbar">
                <div class="progress" id="progress"></div>
                <div
                  :class="
                    step == 1 || step > 1
                      ? 'progress-step progress-step-active'
                      : 'progress-step'
                  "
                  data-title="Product Details"
                ></div>
                <div
                  :class="
                    step == 2 || step > 2
                      ? 'progress-step progress-step-active'
                      : 'progress-step'
                  "
                  data-title="Product Characteristics"
                ></div>
                <div
                  :class="
                    step == 3 || step > 3
                      ? 'progress-step progress-step-active'
                      : 'progress-step'
                  "
                  data-title="Image Selection"
                ></div>
                <div
                  :class="
                    step == 4 || step > 4
                      ? 'progress-step progress-step-active'
                      : 'progress-step'
                  "
                  data-title="Certifications"
                ></div>
                <div
                  :class="
                    step == 5 || step > 5
                      ? 'progress-step progress-step-active'
                      : 'progress-step'
                  "
                  data-title="Packaging"
                ></div>
                <div
                  :class="
                    step == 6 || step > 6
                      ? 'progress-step progress-step-active'
                      : 'progress-step'
                  "
                  data-title="Minimum Order"
                ></div>
              </div>
              <div
                class="alert alert-warning alert-dismissible fade show"
                role="alert"
                v-if="message"
              >
                {{ message }}
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>

              <!-- Step 1 - Product Details -->
              <div
                :class="
                  step == 1
                    ? 'row form-step form-step-active justify-content-center'
                    : 'row form-step justify-content-center'
                "
              >
                <div class="col-lg-12 text-center headerH1">
                  <h1 @click="refresh += refresh">Product Details</h1>
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
                    <input
                      :disabled="lock"
                      type="text"
                      class="input"
                      v-model="name"
                      required
                    />
                  </div>
                  <div class="col-lg-6 mb-3">
                    <label>Product Variety <span>*</span></label>
                    <input
                      type="text"
                      class="input"
                      v-model="variety"
                      required
                      :disabled="lock"
                    />
                  </div>
                  <div class="col-lg-12 mb-3">
                    <label>Product Description <span>*</span></label>
                    <textarea
                      cols="30"
                      rows="4"
                      class="input"
                      required
                      v-model="description"
                      :disabled="lock"
                    ></textarea>
                  </div>
                  <div class="col-lg-6 mb-3">
                    <label>Farming Method <span>*</span></label>
                    <select class="input" v-model="farmMethod" :disabled="lock">
                      <option hidden>Select Method</option>
                      <option value="Organic">Organic</option>
                      <option value="Integrated">Integrated</option>
                      <option value="Conventional">Conventional</option>
                    </select>
                  </div>
                  <div class="col-lg-6 mb-3">
                    <label>GMO <span>*</span></label>
                    <select class="input" v-model="gmo" :disabled="lock">
                      <option hidden>Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div class="col-lg-12 mb-3">
                    <label>Country of origin <span>*</span></label>
                    <select class="input" v-model="country" :disabled="lock">
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
                    <select
                      class="input"
                      v-model="location"
                      v-if="address"
                      :disabled="lock"
                    >
                      <option hidden>Choose Address</option>
                      <option
                        v-for="(add, i) in address"
                        :key="i"
                        :value="add.city + ' ' + add.country"
                      >
                        {{ add.name }}: {{ add.street }} {{ add.city }}
                        {{ add.state }}
                        {{ add.country }}
                      </option>
                    </select>
                    <p class="mt-1 mb-1">
                      <router-link
                        to="/supplier-dashboard/add-new-address"
                        target="_blank"
                      >
                        <i class="bi bi-plus-circle-fill"></i>
                        Add new address.
                      </router-link>
                      <span class="address-refresh" @click="getAddress"
                        ><i class="bi bi-arrow-clockwise"></i> Refresh
                        address.</span
                      >
                    </p>
                  </div>
                  <!-- <div class="col-lg-12 mb-3">
                    <label>Location Of Produce <span>*</span></label>
                    <textarea
                      cols="30"
                      rows="4"
                      class="input"
                      placeholder="Address"
                      v-model="location"
                      :disabled="lock"
                    ></textarea>
                  </div> -->
                  <!-- <div class="col-lg-12 mb-3">
                    <label>intercoms</label>
                    <input
                      type="text"
                      class="input"
                      v-model="intercom"
                      disabled
                      placeholder="EXW - Ex Works"
                    />
                  </div> -->
                  <div class="col-lg-12 mb-3">
                    <label
                      >Is produce available all year round?
                      <span>*</span></label
                    >
                    <fieldset>
                      <input
                        type="radio"
                        @click="available = false"
                        value="yes"
                        name="available"
                        id="yesAvailable"
                        v-model="yearRoundAvailableStatus"
                        :disabled="lock"
                      />
                      <label for="yesAvailable" class="radioSpan"
                        >YES, available year round</label
                      >

                      <input
                        type="radio"
                        @click="available = true"
                        value="No"
                        name="available"
                        id="noAvailable"
                        v-model="yearRoundAvailableStatus"
                        :disabled="lock"
                      />
                      <label for="noAvailable" class="radioSpan"
                        >NO, only available from</label
                      >
                    </fieldset>
                    <div v-if="available">
                      From:
                      <input
                        :disabled="lock"
                        type="date"
                        class="inputShow"
                        v-model="yearRoundAvailableFrom"
                      />

                      To:
                      <input
                        :disabled="lock"
                        type="date"
                        class="inputShow"
                        v-model="yearRoundAvailableTo"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12 mb-3">
                    <label>Special Storage Conditions? <span>*</span></label>
                    <fieldset>
                      <input
                        :disabled="lock"
                        type="radio"
                        @click="storage = false"
                        name="storage"
                        id="noStorage"
                        value="No"
                        v-model="specialStorageConditionStatus"
                      />
                      <label for="noStorage" class="radioSpan">NO</label>

                      <input
                        :disabled="lock"
                        type="radio"
                        @click="storage = true"
                        name="storage"
                        value="Yes"
                        id="yesStorage"
                        v-model="specialStorageConditionStatus"
                      />
                      <label for="yesStorage" class="radioSpan">YES</label>
                    </fieldset>
                    <div v-if="storage">
                      <textarea
                        :disabled="lock"
                        cols="30"
                        rows="3"
                        class="textareaShow"
                        placeholder="Enter storage requirements..."
                        v-model="specialStorageConditionDetails"
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
                        :disabled="lock"
                        type="radio"
                        @click="temperature = false"
                        name="temperature"
                        id="noTemperature"
                        value="No"
                        v-model="temperatureControlledStatus"
                      />
                      <label for="noTemperature" class="radioSpan">NO</label>
                      <input
                        :disabled="lock"
                        type="radio"
                        @click="temperature = true"
                        name="temperature"
                        id="yesTemperature"
                        value="Yes"
                        v-model="temperatureControlledStatus"
                      />
                      <label for="yesTemperature" class="radioSpan">YES</label>
                    </fieldset>
                    <div v-if="temperature">
                      <textarea
                        :disabled="lock"
                        cols="30"
                        rows="3"
                        class="textareaShow"
                        placeholder="Enter details..."
                        v-model="temperatureControlledDetails"
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
                      @click="step = 2"
                    >
                      Next
                    </button>
                  </div>
                  <div class="col-sm-12">
                    <p
                      class="saveAndContinue"
                      @click="updateProduct('save')"
                      :disabled="lock"
                    >
                      <a>Save & Continue Later</a>
                    </p>
                  </div>
                </div>
              </div>

              <!-- Step 2 - Product Characteristics -->
              <div
                :class="
                  step == 2
                    ? 'row form-step form-step-active '
                    : 'row form-step'
                "
              >
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
                          @click="setCategory('oil')"
                          name="category"
                          id="idOil"
                          v-model="items.oil.check"
                          :disabled="lock"
                        />
                        <label for="idOil" class="radioSpan">Oils</label>
                      </div>
                      <div class="col-lg-4 radioDiv mb-2">
                        <input
                          type="checkbox"
                          @click="setCategory('fruit')"
                          name="category"
                          id="idFruit"
                          v-model="items.fruit.check"
                          :disabled="lock"
                        />
                        <label class="radioSpan" for="idFruit">Fruits</label>
                      </div>
                      <div class="col-lg-4 radioDiv mb-2">
                        <input
                          type="checkbox"
                          @click="setCategory('vegetable')"
                          name="category"
                          id="idVegetable"
                          v-model="items.vegetable.check"
                          :disabled="lock"
                        />
                        <label class="radioSpan" for="idVegetable"
                          >Vegetables</label
                        >
                      </div>
                      <div class="col-lg-4 radioDiv mb-2">
                        <input
                          type="checkbox"
                          @click="setCategory('grain')"
                          name="category"
                          id="idGrain"
                          v-model="items.grain.check"
                          :disabled="lock"
                        />
                        <label class="radioSpan" for="idGrain"
                          >Grains/Beans/Pulses</label
                        >
                      </div>
                      <div class="col-lg-4 radioDiv mb-2">
                        <input
                          type="checkbox"
                          @click="setCategory('nut')"
                          name="category"
                          id="idNut"
                          v-model="items.nut.check"
                          :disabled="lock"
                        />
                        <label class="radioSpan" for="idNut">Nuts/Seeds</label>
                      </div>
                      <div class="col-lg-4 radioDiv mb-2">
                        <input
                          type="checkbox"
                          @click="setCategory('coffee')"
                          name="category"
                          id="idCoffee"
                          v-model="items.coffee.check"
                          :disabled="lock"
                        />
                        <label class="radioSpan" for="idCoffee">Coffee</label>
                      </div>
                      <div class="col-lg-4 radioDiv mb-2">
                        <input
                          type="checkbox"
                          @click="setCategory('flower')"
                          name="category"
                          id="idFlower"
                          v-model="items.flower.check"
                          :disabled="lock"
                        />
                        <label class="radioSpan" for="idFlower">Flower</label>
                      </div>
                      <div class="col-lg-4 radioDiv mb-2">
                        <input
                          type="checkbox"
                          @click="setCategory('animalFeed')"
                          name="category"
                          id="idAnimalFeed"
                          v-model="items.animalFeed.check"
                          :disabled="lock"
                        />
                        <label class="radioSpan" for="idAnimalFeed"
                          >Animal Feeds</label
                        >
                      </div>
                      <div class="col-lg-4 radioDiv mb-2">
                        <input
                          type="checkbox"
                          @click="setCategory('others')"
                          name="category"
                          id="idOther"
                          v-model="items.others.check"
                          :disabled="lock"
                        />
                        <label class="radioSpan" for="idOther">Others</label>
                      </div>
                    </div>
                  </div>
                  <!--Oil Category-->
                  <div class="row mt-1 categoryDiv" v-if="items.oil.check">
                    <div class="col-lg-12 mb-2">
                      <h3>Oil category</h3>
                      <div class="lineHr"></div>
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>processing Type</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.processType"
                        placeholder="e.g. Cold Pressed, Refined"
                        :disabled="lock"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Grade, Style or Quality</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.grade"
                        placeholder="e.g. Extra Virgin, Premium, Extra etc"
                        :disabled="lock"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Purity(%)</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.purity"
                        :disabled="lock"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Acidity(%)</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.acidity"
                        :disabled="lock"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Taste</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.taste"
                        placeholder="e.g. Sweet Fruity"
                        :disabled="lock"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>smell</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.smell"
                        placeholder="e.g. notes of almond"
                        :disabled="lock"
                      />
                    </div>
                    <div class="categoryInnerDivLarge mb-3">
                      <label>Use</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.use"
                        placeholder="e.g. Human Food, Animal Feed"
                        :disabled="lock"
                      />
                    </div>
                    <div class="categoryInnerDivLarge mb-3">
                      <label>Additional comment</label>
                      <textarea
                        cols="30"
                        rows="4"
                        class="input"
                        placeholder="e.g. Extra Specifications"
                        v-model="character.comment"
                        :disabled="lock"
                      ></textarea>
                    </div>
                  </div>
                  <!--Fruit Category-->
                  <div class="row mt-1 categoryDiv" v-if="items.fruit.check">
                    <div class="col-lg-12 mb-2">
                      <h3>Fruit Category</h3>
                      <div class="lineHr"></div>
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>color</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.color"
                        :disabled="lock"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Grade, Style or Quality</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.grade"
                        placeholder="e.g. Fresh, Dried"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>maturity</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.maturity"
                        placeholder="e.g. 100%"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>size</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input inputSize"
                        v-model="character.size"
                      />
                      <select class="input selectSize" :disabled="lock">
                        <option value="cm">cm</option>
                        <option value="mm">mm</option>
                        <option value="inches">inches</option>
                      </select>
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Taste</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.taste"
                        placeholder="e.g. Sweet, Crisp"
                        :disabled="lock"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Weight (kg)</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.weight"
                        placeholder="e.g. 0.38 KG"
                        :disabled="lock"
                      />
                    </div>
                    <div class="categoryInnerDivLarge mb-3">
                      <label>Additional comment</label>
                      <textarea
                        :disabled="lock"
                        cols="30"
                        rows="4"
                        class="input"
                        placeholder="e.g. Extra Specifications"
                        v-model="character.comment"
                      ></textarea>
                    </div>
                  </div>
                  <!--Vegetable Category-->
                  <div
                    class="row mt-1 categoryDiv"
                    v-if="items.vegetable.check"
                  >
                    <div class="col-lg-12 mb-2">
                      <h3>Vegetable Category</h3>
                      <div class="lineHr"></div>
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>processing type</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.gradeprocessType"
                        placeholder="e.g. Blanching"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Grade, Style or Quality</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.tyle"
                        placeholder="e.g. Dried, Frozen, Fresh"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>color</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.color"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>freezing process</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.freezingProcess"
                        placeholder="e.g. IQF"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Taste</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.taste"
                        placeholder="e.g. Natural, Fresh"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>shape</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.shape"
                      />
                    </div>
                    <div class="categoryInnerDivLarge mb-3">
                      <label>Additional comment</label>
                      <textarea
                        cols="30"
                        rows="4"
                        class="input"
                        placeholder="e.g. Extra Specifications"
                        v-model="character.comment"
                        :disabled="lock"
                      ></textarea>
                    </div>
                  </div>
                  <!--Grains/Beans/Pulses Category-->
                  <div class="row mt-1 categoryDiv" v-if="items.grain.check">
                    <div class="col-lg-12 mb-2">
                      <h3>Grains/Beans/Pulses Category</h3>
                      <div class="lineHr"></div>
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>color</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.color"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Grade, Style or Quality</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.grade"
                        placeholder="e.g. Dried"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>drying process</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.dryProcess"
                        placeholder="e.g. Air Dried"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>moisture (max %)</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.moisture"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>admixture (max %)</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.admixture"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>broken (max %)</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.broken"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>use</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.use"
                        placeholder="e.g. Human Food, Animal Feed"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>imperfect rate (max %)</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.imperfectRate"
                      />
                    </div>
                    <div class="categoryInnerDivLarge mb-3">
                      <label>size</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input inputSize"
                        v-model="character.size"
                      />
                      <select :disabled="lock" class="input selectSize">
                        <option value="cm">cm</option>
                        <option value="mm">mm</option>
                        <option value="inches">inches</option>
                      </select>
                    </div>
                    <div class="categoryInnerDivLarge mb-3">
                      <label>Additional comment</label>
                      <textarea
                        :disabled="lock"
                        cols="30"
                        rows="4"
                        class="input"
                        placeholder="e.g. Extra Specifications"
                        v-model="character.comment"
                      ></textarea>
                    </div>
                  </div>
                  <!--Nuts/Seeds Category-->
                  <div class="row mt-1 categoryDiv" v-if="items.nut.check">
                    <div class="col-lg-12 mb-2">
                      <h3>Nuts/Seeds Category</h3>
                      <div class="lineHr"></div>
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>color</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.color"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>style</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.style"
                        placeholder="e.g. InShell, Dried"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>shell type</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.shellType"
                        placeholder="e.g. Hard, soft, Semi-Hard, Natural, Bleached"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Grade or Quality</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.grade"
                        placeholder="e.g. WW240, SW, LBW, DW, WS, LP, SP, JQ, K-SPEC"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>USDA Grade (Applies to Almonds)</label>
                      <select
                        :disabled="lock"
                        class="input"
                        v-model="character.usdaGrade"
                      >
                        <option hidden>Select</option>
                        <option value="US Fancy">US Fancy</option>
                        <option value="US Extra N.1">US Extra N.1</option>
                        <option value="US N.1 (Supreme)">
                          US N.1 (Supreme)
                        </option>
                        <option value="US Select Shelter Run">
                          US Select Shelter Run
                        </option>
                        <option value="US Standard Shelter Run">
                          US Standard Shelter Run
                        </option>
                        <option value="US No. 1 Whole & Broken">
                          US No. 1 Whole & Broken
                        </option>
                        <option value="US No. 1 Piece">US No. 1 Pieces</option>
                      </select>
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>size</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input inputSize"
                        v-model="character.size"
                      />
                      <select :disabled="lock" class="input selectSize">
                        <option value="p.oz">p.oz</option>
                        <option value="cm">cm</option>
                        <option value="mm">mm</option>
                        <option value="inches">inches</option>
                      </select>
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>form</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.form"
                        placeholder="e.g. Whole, Nuggets, Slices, Crushed, Diced, Flour, Roasted, Granules"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>moisture (max %)</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.moisture"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Kernels per KG</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.kernelsPerKg"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Defects (max %)</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.defects"
                      />
                    </div>
                    <div class="categoryInnerDivLarge mb-3">
                      <label>Additional comment</label>
                      <textarea
                        :disabled="lock"
                        cols="30"
                        rows="4"
                        class="input"
                        placeholder="e.g. Extra Specifications"
                        v-model="character.comment"
                      ></textarea>
                    </div>
                  </div>
                  <!--Coffee Category-->
                  <div class="row mt-1 categoryDiv" v-if="items.coffee.check">
                    <div class="col-lg-12 mb-2">
                      <h3>Coffee Category</h3>
                      <div class="lineHr"></div>
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>color</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.color"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>grade</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.grade"
                        placeholder="e.g. Grade 1"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>coffee type</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.coffeeType"
                        placeholder="e.g 100% Robusta Blend Coffee Bean"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Defects</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.defects"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>processing type</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.processType"
                        placeholder="e.g. Roasted, Washed"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>bean size</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input inputSize"
                        v-model="character.beanSize"
                      />
                      <select :disabled="lock" class="input selectSize">
                        <option value="cm">cm</option>
                        <option value="mm">mm</option>
                        <option value="inches">inches</option>
                      </select>
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>maturity</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.maturity"
                        placeholder="e.g. 100%"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Taste</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.taste"
                        placeholder="e.g. Sweet Fruity"
                      />
                    </div>
                    <div class="categoryInnerDivLarge mb-3">
                      <label>moisture (max %)</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.moisture"
                      />
                    </div>
                    <div class="categoryInnerDivLarge mb-3">
                      <label>Additional comment</label>
                      <textarea
                        :disabled="lock"
                        cols="30"
                        rows="4"
                        class="input"
                        placeholder="e.g. Extra Specifications"
                        v-model="character.comment"
                      ></textarea>
                    </div>
                  </div>
                  <!--Flower Category-->
                  <div class="row mt-1 categoryDiv" v-if="items.flower.check">
                    <div class="col-lg-12 mb-2">
                      <h3>Flower Category</h3>
                      <div class="lineHr"></div>
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>color</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.color"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>style, grade or quality</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.style"
                        placeholder="e.g. Silk, Fresh"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>number of petals</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.noOfPetals"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>petals size</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input inputSize"
                        v-model="character.petalSize"
                      />
                      <select :disabled="lock" class="input selectSize">
                        <option value="cm">cm</option>
                        <option value="mm">mm</option>
                        <option value="inches">inches</option>
                      </select>
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>bud size (cm)</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input inputSize"
                        v-model="character.budSize"
                      />
                      <select :disabled="lock" class="input selectSize">
                        <option value="cm">cm</option>
                        <option value="mm">mm</option>
                        <option value="inches">inches</option>
                      </select>
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>head size (cm)</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input inputSize"
                        v-model="character.headSize"
                      />
                      <select :disabled="lock" class="input selectSize">
                        <option value="cm">cm</option>
                        <option value="mm">mm</option>
                        <option value="inches">inches</option>
                      </select>
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>sterm lenght</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input inputSize"
                        v-model="character.stermLen"
                      />
                      <select :disabled="lock" class="input selectSize">
                        <option value="cm">cm</option>
                        <option value="mm">mm</option>
                        <option value="inches">inches</option>
                        >
                      </select>
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>stem per bunch</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.stemPerBunch"
                      />
                    </div>
                    <div class="categoryInnerDivLarge mb-3">
                      <label>Additional comment</label>
                      <textarea
                        :disabled="lock"
                        cols="30"
                        rows="4"
                        class="input"
                        placeholder="e.g. Extra Specifications"
                        v-model="character.comment"
                      ></textarea>
                    </div>
                  </div>
                  <!--Animal Feeds Category-->
                  <div
                    class="row mt-1 categoryDiv"
                    v-if="items.animalFeed.check"
                  >
                    <div class="col-lg-12 mb-2">
                      <h3>Animal Feeds Category</h3>
                      <div class="lineHr"></div>
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>color</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.color"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>style, grade or quality</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.style"
                        placeholder="e.g. Silk, Fresh"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>drying process</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.dryProcess"
                        placeholder="e.g. Air Dried"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Taste</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.taste"
                        placeholder="e.g. Bland"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>smell</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.smell"
                        placeholder="e.g. notes of almond"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>moisture (max %)</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.mositure"
                        placeholder="e.g. Custom"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>admixture (max %)</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.admixture"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>use</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.use"
                        placeholder="e.g. Human Food, Animal Feed"
                      />
                    </div>
                    <div class="categoryInnerDivLarge mb-3">
                      <label>Additional comment</label>
                      <textarea
                        :disabled="lock"
                        cols="30"
                        rows="4"
                        class="input"
                        placeholder="e.g. Extra Specifications"
                        v-model="character.comment"
                      ></textarea>
                    </div>
                  </div>
                  <!--Others Category-->
                  <div class="row mt-1 categoryDiv" v-if="items.others.check">
                    <div class="col-lg-12 mb-2">
                      <h3>Others</h3>
                      <div class="lineHr"></div>
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>color</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.color"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>style, grade or quality</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.style"
                        placeholder="e.g. Dried, Frozen"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>processing type</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.processType"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Taste</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.taste"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>shape</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.shape"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>size</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input inputSize"
                        v-model="character.size"
                      />
                      <select :disabled="lock" class="input selectSize">
                        <option value="cm">cm</option>
                        <option value="mm">mm</option>
                        <option value="inches">inches</option>
                      </select>
                    </div>
                    <div class="categoryInnerDivLarge mb-3">
                      <label>Defects</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="character.defects"
                      />
                    </div>
                    <div class="categoryInnerDivLarge mb-3">
                      <label>Additional comment</label>
                      <textarea
                        :disabled="lock"
                        cols="30"
                        rows="4"
                        class="input"
                        placeholder="e.g. Extra Specifications"
                        v-model="character.comment"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <button
                      type="button"
                      class="btn btn-prev width-100"
                      @click="step = 1"
                    >
                      Previous
                    </button>
                  </div>
                  <div class="col-sm-6">
                    <button
                      type="button"
                      class="btn btn-next width-100"
                      @click="step = 3"
                    >
                      Next
                    </button>
                  </div>
                  <div class="col-sm-12">
                    <p
                      class="saveAndContinue"
                      @click="updateProduct('save')"
                      :disabled="lock"
                    >
                      <a>Save & Continue Later</a>
                    </p>
                  </div>
                </div>
              </div>

              <!-- Step 3 - Image Selection -->
              <div
                :class="
                  step == 3
                    ? 'row form-step form-step-active '
                    : 'row form-step'
                "
              >
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
                <div
                  class="col-lg-12 mt-4 mb-3"
                  v-for="(img, i) in images"
                  :key="i"
                >
                  <label> Image {{ i + 1 }}</label>
                  <div class="col-ting">
                    <div class="control-group file-upload" id="file-upload1">
                      <div class="image-box text-center">
                        <img :src="img" alt="" />
                      </div>
                      <!-- <div class="controls" style="display: none">
                        <input :disabled="lock"
                          type="file"
                          
                          name="contact_image_1"
                          accept=".jpg, .jpeg, .png, .webp"
                          @change="onFieldChange(1)"
                        />
                      </div> -->
                    </div>
                  </div>
                  <small class="uploadSmallPicture"
                    >(accepted image format: jpeg, jpg, png, webp. Max file
                    size: 200kb)</small
                  >
                  <button
                    class="removeImgBtn"
                    type="button"
                    @click="deleteImg(img_id[i])"
                    v-if="!lock"
                  >
                    Remove Image
                  </button>
                </div>
                <!-- <div class="col-lg-12 mt-4 mb-3">
                  <label>Upload Primary Image <span>*</span></label>
                  <div class="col-ting">
                    <div
                      class="control-group file-upload"
                      id="file-upload1"
                      @click="$refs.inputFile.click()"
                    >
                      <div class="image-box text-center">
                        <p v-if="!displayImg[0]">
                          <i class="bi bi-plus-circle-fill"></i> <br />
                          Upload Image
                        </p>
                        <img :src="displayImg[0]" alt="" />
                      </div>
                      <div class="controls" style="display: none">
                        <input :disabled="lock"
                          type="file"
                          ref="inputFile"
                          name="contact_image_1"
                          accept=".jpg, .jpeg, .png, .webp"
                          @change="onFieldChange(1)"
                        />
                      </div>
                    </div>
                  </div>
                  <small class="uploadSmallPicture"
                    >(accepted image format: jpeg, jpg, png, webp. Max file
                    size: 200kb)</small
                  >
                  <button
                    class="removeImgBtn"
                    type="button"
                    @click="removeDispImg(0)"
                    v-if="displayImg[0]"
                  >
                    Remove Image
                  </button>
                  <small class="uploadSmallPicture" v-if="imgSizeMsg">{{
                    imgSizeMsg
                  }}</small>
                </div> -->
                <div
                  class="col-lg-6 mt-2 mb-3 upload-more-image"
                  v-for="(newImg, i) in addImg"
                  :key="i"
                >
                  <label>Upload Additional Image</label>
                  <div class="col-ting">
                    <div
                      class="control-group file-upload"
                      id="file-upload1"
                      @click="$refs.items[newImg].click()"
                    >
                      <div class="image-box text-center">
                        <p v-if="!displayImg[newImg]">
                          <i class="bi bi-plus-circle-fill"></i> <br />
                          Upload Image
                        </p>
                        <img :src="displayImg[newImg]" alt="" />
                      </div>
                      <div class="controls" style="display: none">
                        <input
                          :disabled="lock"
                          type="file"
                          ref="items"
                          name="contact_image_1"
                          accept=".jpg, .jpeg, .png, .webp"
                          @change="onFieldChange(newImg)"
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    class="removeImgBtn mb-2 mt-1"
                    type="button"
                    @click="removeDispImg(newImg)"
                    v-if="displayImg[i]"
                  >
                    Remove Image
                  </button>
                  <span
                    @click="removeField(newImg)"
                    remove-field
                    btn-remove-field
                    class="removeField mt-1"
                    >Remove Field</span
                  >
                  <small class="uploadSmallPicture" v-if="imgSizeMsg">{{
                    imgSizeMsg
                  }}</small>
                </div>

                <div class="row mt-3">
                  <div class="upload-dynamic"></div>
                </div>
                <div class="uploadMore" v-if="addImg.length < 2">
                  <span @click="addImg.push(addImg.length)" v-if="!lock"
                    >Upload More <i class="bi bi-plus-circle"></i
                  ></span>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <button
                      type="button"
                      class="btn btn-prev width-100"
                      @click="step = 2"
                    >
                      Previous
                    </button>
                  </div>
                  <div class="col-sm-6">
                    <button
                      type="button"
                      class="btn btn-next width-100"
                      @click="step = 4"
                    >
                      Next
                    </button>
                  </div>
                  <div
                    class="col-lg-12 mb-4 mt-2 text-center signuas"
                    v-show="loading"
                  >
                    <span class="spinner-border spinner-border-sm"></span>
                  </div>
                  <div class="col-sm-12">
                    <p
                      class="saveAndContinue"
                      @click="handleProductUpload('save')"
                      :disabled="lock"
                    >
                      <a>Save & Continue Later</a>
                    </p>
                  </div>
                </div>
              </div>

              <!-- Step 4 - Certification -->
              <div
                :class="
                  step == 4
                    ? 'row form-step form-step-active '
                    : 'row form-step'
                "
              >
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
                <div
                  class="row add-more-certi"
                  v-for="(cert, i) in certification"
                  :key="i"
                >
                  <div class="col-lg-12 mt-4 mb-3">
                    <label>Certification Name</label>
                    <select
                      :disabled="lock"
                      class="input"
                      v-model="cert.cert_name"
                    >
                      <option hidden>Select Certificate</option>
                      <option value="option 1">option 1</option>
                      <option value="option 2">option 2</option>
                      <option value="option 3">option 3</option>
                      <option value="others">others</option>
                    </select>
                  </div>
                  <div class="col-lg-6 mb-3">
                    <label>Certificate Number</label>
                    <input
                      :disabled="lock"
                      type="text"
                      class="input"
                      v-model="cert.cert_number"
                    />
                  </div>
                  <div class="col-lg-6 mb-3">
                    <label>Date of Issue</label>
                    <input
                      :disabled="lock"
                      type="date"
                      class="input"
                      v-model="cert.dateOfIssue"
                    />
                  </div>
                  <div class="col-lg-12 mb-3">
                    <label>Name of Issuing Body</label>
                    <input
                      :disabled="lock"
                      type="text"
                      class="input"
                      v-model="cert.issuingBody"
                    />
                  </div>
                  <div class="col-lg-12 mb-3">
                    <label>Validity Period</label>
                    <div class="row">
                      <div class="col-lg-6">
                        <span>From:</span>
                        <input
                          :disabled="lock"
                          type="date"
                          class="input"
                          v-model="cert.validityPeriod.from"
                        />
                      </div>
                      <div class="col-lg-6">
                        <span>To:</span>
                        <input
                          :disabled="lock"
                          type="date"
                          class="input"
                          v-model="cert.validityPeriod.to"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <a :href="cert.file_url" target="_blank"
                      >View Certification</a
                    >
                    <!-- <input
                      :disabled="lock"
                      type="file"
                      class="input"
                      @change="onFileChange(1)"
                    /> -->
                  </div>
                  <span
                    @click="deleteFile(cert._id, i)"
                    class="removeField"
                    v-if="!lock"
                    >Delete Cert</span
                  >
                </div>

                <div v-if="addFile.length">
                  <div
                    class="row add-more-certi"
                    v-for="(newFile, i) in addFile"
                    :key="i"
                  >
                    <div class="col-lg-12 mt-4 mb-3">
                      <label>Certification Name{{ newFile }}</label>
                      <select
                        :disabled="lock"
                        class="input"
                        v-model="file[newFile].name"
                      >
                        <option>Select Certificate</option>
                        <option value="option 1">option 1</option>
                        <option value="option 2">option 2</option>
                        <option value="option 3">option 3</option>
                        <option value="others">others</option>
                      </select>
                    </div>
                    <div class="col-lg-6 mb-3">
                      <label>Certificate Number</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="file[newFile].cert_number"
                      />
                    </div>
                    <div class="col-lg-6 mb-3">
                      <label>Date of Issue</label>
                      <input
                        :disabled="lock"
                        type="date"
                        class="input"
                        v-model="file[newFile].dateOfIssue"
                      />
                    </div>
                    <div class="col-lg-12 mb-3">
                      <label>Name of Issuing Body</label>
                      <input
                        :disabled="lock"
                        type="text"
                        class="input"
                        v-model="file[newFile].issuingBody"
                      />
                    </div>
                    <div class="col-lg-12 mb-3">
                      <label>Validity Period</label>
                      <div class="row">
                        <div class="col-lg-6">
                          <span>From:</span>
                          <input
                            :disabled="lock"
                            type="date"
                            class="input"
                            v-model="file[newFile].periodFrom"
                          />
                        </div>
                        <div class="col-lg-6">
                          <span>To:</span>
                          <input
                            :disabled="lock"
                            type="date"
                            class="input"
                            v-model="file[newFile].periodTo"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <label>Upload Certification</label>
                      <input
                        :disabled="lock"
                        type="file"
                        class="input"
                        @change="onFileChange(newFile)"
                      />
                    </div>
                    <span @click="removeFile(newFile)" class="removeField"
                      >Remove Field</span
                    >
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="upload-certi-dynamic"></div>
                </div>
                <div
                  class="uploadMore"
                  v-if="addFile.length < 4 - certification.length"
                >
                  <span @click="addMoreCert" v-if="!lock"
                    >Upload New Cert. <i class="bi bi-plus-circle"></i
                  ></span>
                </div>

                <!--Table Display-->
                <div
                  class="row justify-content-center mb-4 mt-4"
                  v-if="file[1].img"
                >
                  <div class="col-lg-10">
                    <table class="certificateTable">
                      <tr class="headingTable">
                        <td>S/N</td>
                        <td>Certificate Name</td>
                        <td>Certificate File</td>
                      </tr>
                      <tr v-for="(newCert, i) in file" :key="i">
                        <td v-if="newCert.img">{{ i }}</td>
                        <td v-if="newCert.img">{{ newCert.name }}</td>
                        <td v-if="newCert.img">{{ newCert.img?.name }}</td>
                        <td v-if="newCert.img">
                          <span @click="removeFileUpload(i)" class="removeField"
                            >Remove Field</span
                          >
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-6">
                    <button
                      type="button"
                      class="btn btn-prev width-100"
                      @click="step = 3"
                    >
                      Previous
                    </button>
                  </div>
                  <div class="col-sm-6">
                    <button
                      type="button"
                      class="btn btn-next width-100"
                      @click="step = 5"
                    >
                      Next
                    </button>
                  </div>
                  <div
                    class="col-lg-12 mb-4 mt-2 text-center signuas"
                    v-show="loading"
                  >
                    <span class="spinner-border spinner-border-sm"></span>
                  </div>
                  <div class="col-sm-12">
                    <p
                      class="saveAndContinue"
                      @click="handleProductUpload('save')"
                      :disabled="lock"
                    >
                      <a>Save & Continue Later</a>
                    </p>
                  </div>
                </div>
              </div>

              <!-- Step 5 - Packaging -->
              <div
                :class="
                  step == 5
                    ? 'row form-step form-step-active '
                    : 'row form-step'
                "
              >
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
                <div class="lineHR lineHRSpe"></div>
                <div class="row">
                  <div class="col-lg-4 radioDiv mb-2">
                    <input
                      :disabled="lock"
                      type="checkbox"
                      @click="setShipping('package_type')"
                      name="category"
                      id="packageType"
                      v-model="shipping.package_type.check"
                    />
                    <label for="packageType" class="radioSpan"
                      >Package Type</label
                    >
                  </div>
                  <div class="col-lg-4 radioDiv mb-2">
                    <input
                      :disabled="lock"
                      type="checkbox"
                      @click="setShipping('weight')"
                      name="category"
                      id="weight"
                      v-model="shipping.weight.check"
                    />
                    <label class="radioSpan" for="weight">Weight</label>
                  </div>
                </div>

                <!-- Package drop div -->
                <div class="row" v-if="shipping.package_type.check">
                  <div class="col-lg-6 mt-4 mb-3">
                    <label>Product Unit</label>
                    <small>Choose product packaging unit.</small>
                    <div class="divUnit">
                      <select
                        :disabled="lock"
                        class="input selectSize"
                        v-model="packages.unit"
                      >
                        <option value="crate">Crate</option>
                        <option value="box">Box</option>
                        <option value="pack">Pack</option>
                        <option value="pallete">Pallete</option>
                        <option value="carton">Carton</option>
                        <option value="others">Others</option>
                      </select>
                    </div>

                    <input
                      :disabled="lock"
                      v-if="packages.unit == 'others'"
                      type="text"
                      class="input"
                      v-model="otherPackageUnit"
                      placeholder="e.g. Bag, Box,Vacuum Pack, Sack, Other"
                    />
                    <label v-if="packages.unit && name"
                      >How many {{ name }} are in 1
                      {{
                        otherPackageUnit ? otherPackageUnit : packages.unit
                      }}?</label
                    >
                    <input
                      :disabled="lock"
                      v-if="packages.unit && name"
                      type="text"
                      class="input"
                      v-model="packages.per_unit"
                      placeholder="e.g. Bag, Box,Vacuum Pack, Sack, Other"
                    />
                  </div>
                  <!-- <div class="col-lg-6 mt-4 mb-3" v-if="shipping.fluid.check">
                    <label>Volume of Packaging (litre)</label>
                    <input :disabled="lock"
                      type="text"
                      class="input"
                      v-model="packages.volume"
                    />
                  </div> -->
                  <div class="col-lg-6 mt-4 mb-3 categoryInnerDiv">
                    <div class="row">
                      <div class="col-lg-12 headerPackOption">
                        <h5>Packaging Options</h5>
                      </div>
                      <div class="col-lg-12 mb-3">
                        <label>Weight of Packaging</label>
                        <small
                          >Enter
                          <span>{{
                            packages.unit != "others"
                              ? packages.unit
                              : otherPackageUnit
                          }}</span>
                          weight in kg or lb.</small
                        >
                        <input
                          :disabled="lock"
                          type="text"
                          class="input inputSize"
                          v-model="packages.weight"
                        />
                        <select
                          :disabled="lock"
                          class="input selectSize"
                          v-model="packages.weight_unit"
                        >
                          <option value="kg">kg</option>
                          <option value="lb">lb</option>
                          <option value="ton">ton</option>
                        </select>
                      </div>
                      <div class="col-lg-12 mt-3">
                        <label>Price of Packaging ($)</label>
                        <small
                          >Enter a price for one
                          <span>{{
                            packages.unit != "others"
                              ? packages.unit
                              : otherPackageUnit
                          }}</span>
                          unit that your are selling.</small
                        >
                        <input
                          :disabled="lock"
                          type="text"
                          class="input"
                          v-model="packages.price"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12 mt-4 mb-3">
                    <p
                      v-if="
                        name &&
                        packages.per_unit &&
                        packages.unit &&
                        packages.weight &&
                        packages.weight_unit &&
                        packages.price
                      "
                    >
                      <strong>Note: </strong>
                      {{
                        `1 ${packages.unit} of ${packages.per_unit} ${name}  weighs ${packages.weight}${packages.weight_unit} and your selling price is
                      ${packages.price}`
                      }}
                    </p>
                  </div>
                  <div class="col-lg-12 mt-4 mb-3">
                    <div class="row">
                      <div class="col-lg-12 headerPackOption">
                        <h5>Dimension of each product packages</h5>
                        <!-- <small
                          >We need the dimension for calculating shipping
                          costs.</small
                        > -->
                      </div>
                      <div class="col-lg-12">
                        <label>Select Unit (cm or inches)</label>
                        <div class="divSelectUnit justify-content-center">
                          <select
                            :disabled="lock"
                            class="input"
                            v-model="packages.dimension_unit"
                          >
                            <option value="cm">cm</option>
                            <option value="inches">inches</option>
                          </select>
                          <div class="divLWH">
                            <label>Lenght</label>
                            <input
                              :disabled="lock"
                              type="number"
                              class="input"
                              v-model="plen"
                            />
                          </div>
                          <div class="divLWH">
                            <label>Width</label>
                            <input
                              :disabled="lock"
                              type="number"
                              class="input"
                              v-model="pwid"
                            />
                          </div>
                          <div class="divLWH">
                            <label>Height</label>
                            <input
                              :disabled="lock"
                              type="number"
                              class="input"
                              v-model="phgt"
                            />
                          </div>
                          <div class="clear"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Weight drop div -->
                <div class="row" v-if="shipping.weight.check">
                  <div class="col-lg-6 mt-4 mb-3">
                    <label>Product Unit</label>
                    <select
                      :disabled="lock"
                      class="input selectSize"
                      v-model="packages.weight_unit"
                    >
                      <option value="ton">ton</option>
                      <option value="lb">lb</option>
                      <option value="kg">kg</option>
                    </select>
                  </div>
                  <div class="col-lg-6 mt-4 mb-3 categoryInnerDiv">
                    <div class="row">
                      <div class="col-lg-12 headerPackOption">
                        <h5>Packaging Options</h5>
                      </div>
                      <div class="col-lg-12 mb-3">
                        <label>Product Weight</label>
                        <small>Enter weight</small>
                        <input
                          :disabled="lock"
                          type="text"
                          class="input"
                          v-model="packages.weight"
                        />
                      </div>
                      <div class="col-lg-12 mb-3" v-if="items.oil.check">
                        <label>Product Volume</label>
                        <small>Enter Volume</small>
                        <input
                          :disabled="lock"
                          type="text"
                          class="input inputSize"
                          v-model="packages.volume"
                        />
                        <select
                          :disabled="lock"
                          class="input selectSize"
                          v-model="packages.weight_unit"
                        >
                          <option value="m^3">m<sup>3</sup></option>
                          <option value="cm^3">cm<sup>3</sup></option>
                          <option value="L">litre</option>
                        </select>
                      </div>
                      <div class="col-lg-12 mt-3">
                        <label>Price of Packaging ($)</label>
                        <small>Enter a price that you are selling.</small>
                        <input
                          :disabled="lock"
                          type="text"
                          class="input"
                          v-model="packages.price"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12 mt-4 mb-3">
                    <p
                      v-if="
                        name &&
                        packages.weight &&
                        packages.weight_unit &&
                        packages.price
                      "
                    >
                      <strong>Note: </strong>
                      {{
                        `${packages.weight}${packages.weight_unit} of ${name} sells at the price of
                      ${packages.price}`
                      }}
                    </p>
                  </div>
                </div>

                <div class="lineHRSpe2"></div>

                <!-- Shipment Starts Here -->
                <div class="col-lg-12 text-center headerH1">
                  <h1>Shipment</h1>
                </div>
                <div class="row">
                  <div class="col-lg-6 mt-4 mb-3">
                    <label>Shipment Packaging</label>
                    <select
                      :disabled="lock"
                      class="input"
                      v-model="shipment.package"
                    >
                      <option hidden>Select</option>
                      <option value="crate">Crate</option>
                      <option value="box">Box</option>
                      <option value="bag">Bag</option>
                      <option value="pack">Pack</option>
                      <option value="pallet">Pallet</option>
                      <option value="carton">Carton</option>
                    </select>
                  </div>
                  <div class="col-lg-6 mt-4 mb-3 categoryInnerDiv">
                    <label>Weight of Shipment package</label>
                    <input
                      :disabled="lock"
                      type="text"
                      class="input inputSize"
                      v-model="shipment.weight"
                    />
                    <select
                      :disabled="lock"
                      class="input selectSize"
                      v-model="shipment.weight_unit"
                    >
                      <option value="kg">kg</option>
                      <option value="lb">lb</option>
                      <option value="ton">ton</option>
                    </select>
                  </div>
                  <div class="col-lg-6 mt-4 mb-3">
                    <label>Price of shipment ($)</label>

                    <input
                      :disabled="lock"
                      type="text"
                      class="input"
                      v-model="shipment.price"
                    />
                  </div>
                  <div class="col-lg-12 mt-4 mb-3">
                    <p
                      v-if="
                        shipment.package &&
                        shipment.weight &&
                        shipment.weight_unit &&
                        shipment.price
                      "
                    >
                      <strong>Note: </strong>
                      {{
                        `1 ${shipment.package} weighs ${shipment.weight}${shipment.weight_unit} and your agreed shipping price is
                      ${shipment.price}`
                      }}
                    </p>
                  </div>
                  <div class="col-lg-12 mt-4 mb-3">
                    <label>Number Of Units Per Shipment Package</label>
                    <input
                      :disabled="lock"
                      type="text"
                      class="input"
                      placeholder="e.g. 12 x 1Ltr bottle in a box"
                      v-model="shipment.unit_package_box"
                    />
                    <!-- <input :disabled="lock"
                      type="text"
                      class="input"
                      placeholder="e.g. 40 boxes per pallet"
                      v-model="shipment.unit_package_pallet"
                    /> -->
                  </div>
                  <div class="col-lg-12 mt-4 mb-3">
                    <div class="row">
                      <div class="col-lg-12 headerPackOption">
                        <h5>Dimension of each shipping package</h5>
                        <small
                          >We need the dimension for calculating shipping
                          costs.</small
                        >
                      </div>
                      <div class="col-lg-12">
                        <label>Select Unit (cm or inches)</label>
                        <div class="divSelectUnit justify-content-center">
                          <select
                            :disabled="lock"
                            class="input"
                            v-model="shipment.dimension_unit"
                          >
                            <option value="cm">cm</option>
                            <option value="inches">inches</option>
                          </select>
                          <div class="divLWH">
                            <label>Lenght</label>
                            <input
                              :disabled="lock"
                              type="number"
                              class="input"
                              v-model="len"
                            />
                          </div>
                          <div class="divLWH">
                            <label>Width</label>
                            <input
                              :disabled="lock"
                              type="number"
                              class="input"
                              v-model="wid"
                            />
                          </div>
                          <div class="divLWH">
                            <label>Height</label>
                            <input
                              :disabled="lock"
                              type="number"
                              class="input"
                              v-model="hgt"
                            />
                          </div>
                          <div class="clear"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12 mt-4 mb-3 categoryInnerDiv">
                    <label>Shipping in Container</label>
                    <small
                      >How many shipping packages can fit in a 20 foot shipping
                      container? This is useful information for the buyer to see
                      the size of the shipment</small
                    >
                    <input
                      :disabled="lock"
                      type="text"
                      class="input inputSize"
                      v-model="shipment.unit_container"
                    />
                    <select
                      :disabled="lock"
                      class="input selectSize"
                      v-model="shipment.container_unit"
                    >
                      <option value="crate">Crate</option>
                      <option value="box">Box</option>
                      <option value="pack">Pack</option>
                      <option value="pallete">Pallete</option>
                      <option value="carton">Carton</option>
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <button
                      type="button"
                      class="btn btn-prev width-100"
                      @click="step = 4"
                    >
                      Previous
                    </button>
                  </div>
                  <div class="col-sm-6">
                    <button
                      type="button"
                      class="btn btn-next width-100"
                      @click="step = 6"
                    >
                      Next
                    </button>
                  </div>
                  <div
                    class="col-lg-12 mb-4 mt-2 text-center signuas"
                    v-show="loading"
                  >
                    <span class="spinner-border spinner-border-sm"></span>
                  </div>
                  <div class="col-sm-12">
                    <p
                      class="saveAndContinue"
                      @click="handleProductUpload('save')"
                      :disabled="lock"
                    >
                      <a>Save & Continue Later</a>
                    </p>
                  </div>
                </div>
              </div>

              <!-- Step 6 - Minimum Order -->
              <div
                :class="
                  step == 6
                    ? 'row form-step form-step-active '
                    : 'row form-step'
                "
              >
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
                  <div class="col-lg-7 mb-4 categoryInnerDiv">
                    <label>Minimum Order Quantity</label>
                    <small
                      >Minimum number of units customers can request to buy for
                      this product</small
                    >
                    <input
                      :disabled="lock"
                      type="text"
                      class="input inputSize"
                      v-model="order.min_quantity"
                    />
                    <select
                      :disabled="lock"
                      class="input selectSize"
                      v-model="order.qty_unit"
                    >
                      <option value="kg">kg</option>
                      <option value="lb">lb</option>
                      <option value="ton">ton</option>
                      <option value="crate">Crate</option>
                      <option value="box">Box</option>
                      <option value="pack">Pack</option>
                      <option value="pallete">Pallete</option>
                      <option value="carton">Carton</option>
                      <option value="carton" v-if="otherPackageUnit">
                        {{ otherPackageUnit }}
                      </option>
                    </select>
                  </div>
                  <div class="col-lg-12 text-center">
                    <label>Supply Ability</label>
                    <small
                      >Please specify how much (quantity) and how often
                      (frequency) you can supply this product. E.g. 2,000 MT
                      every month</small
                    >
                    <div class="row mt-2">
                      <div class="col-lg-7 mb-3 categoryInnerDiv">
                        <label>Quantity</label>
                        <input
                          :disabled="lock"
                          type="text"
                          class="input inputSize"
                          v-model="supply_ability.quantity"
                        />
                        <select
                          :disabled="lock"
                          class="input selectSize"
                          v-model="supply_ability.qty_unit"
                        >
                          <option value="kg">kg</option>
                          <option value="lb">lb</option>
                          <option value="ton">ton</option>
                        </select>
                      </div>
                      <div class="col-lg-5 mb-3">
                        <label>frequency</label>
                        <select
                          :disabled="lock"
                          class="input"
                          v-model="supply_ability.frequency"
                        >
                          <option value="weekly">Weekly</option>
                          <option value="monthly">Monthly</option>
                          <option value="quaterly">Quarterly</option>
                          <option value="yearly">Yearly</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12 mt-3 mb-3">
                    <input
                      :disabled="lock"
                      type="checkbox"
                      id="acceptTerms"
                      required
                      v-model="status"
                    />
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
                  <a href="#" class="btn btn-prev" @click="step = 5"
                    >Previous</a
                  >
                  <input
                    type="submit"
                    value="Submit"
                    class="btn"
                    :disabled="!status || loading || lock"
                  />
                </div>
                <div
                  class="col-lg-12 mb-4 mt-2 text-center signuas"
                  v-show="loading"
                >
                  <span class="spinner-border spinner-border-sm"></span>
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
import Swal from "sweetalert2";
export default {
  name: "Produce Mart",
  components: {
    "dash-sidebar": DashSidebar,
    "dash-navbar": DashNavbar,
    "dash-footer": DashFooter,
  },
  mounted() {
    window.scrollTo(0, 0);

    

    this.getAddress();
    this.getProduct();
  },
  data() {
    return {
      step: 1,
      address: null,
      lock: false,
      waitAvailabilityResponse: false,
      token: JSON.parse(localStorage.getItem("user")).token,
      countries: countries,
      id: this.$route.params.id,
      product: null,
      loading: false,
      message: "",
      available: null,
      prodAvailable: false,
      storage: false,
      temperature: false,
      token: JSON.parse(localStorage.getItem("user")).token,
      items: {
        oil: { check: false },
        fruit: { check: false },
        vegetable: { check: false },
        grain: { check: false },
        nut: { check: false },
        coffee: { check: false },
        flower: { check: false },
        animalFeed: { check: false },
        others: { check: false },
      },
      shipping: {
        package_type: { check: false },
        weight: { check: false },
      },
      name: null,
      variety: "",
      description: "",
      farmMethod: "",
      gmo: "",
      country: "",
      yearRoundAvailableStatus: "",
      yearRoundAvailableFrom: "",
      yearRoundAvailableTo: "",
      specialStorageConditionStatus: "",
      specialStorageConditionDetails: "",
      temperatureControlledStatus: "",
      temperatureControlledDetails: "",
      category: "",
      character: {},
      image: {},

      addImg: [],
      cert_name: "",
      file: { 1: {} },
      addFile: [],
      plen: "",
      pwid: "",
      phgt: "",
      packages: {},
      len: "",
      wid: "",
      hgt: "",
      shipment: {},
      order: {},
      supply_ability: {},
      displayImg: [],
      imgSizeMsg: "",
      images: [],
      img_id: [],
      certification: [],
      status: null,
      refresh: 1,
    };
  },
  methods: {
    async getAddress() {
      const res = await fetch(
        "https://producemart.herokuapp.com/getUserAddress/",
        {
          method: "GET",
          headers: {
            Authorization: this.token,
          },
        }
      );
      const { data } = await res.json();
      console.log(data);
      this.address = data;
    },
    lockUnlock() {
      this.lock = !this.lock;
      if (this.lock) {
        Swal.fire(
          "Attention!",
          "You have locked this product and it can not be edited!",
          "success"
        );
      } else {
        Swal.fire(
          "Attention!",
          "You have unlock this product for editing!",
          "success"
        );
      }
    },
    async makeUnavailable() {
      this.prodAvailable = !this.prodAvailable;
      this.waitAvailabilityResponse = true;
      let title = this.prodAvailable ? "available" : "unavailable";
      const res = await fetch(
        "https://producemart.herokuapp.com/productAvailability/" + this.id,
        {
          method: "PATCH",
          headers: {
            Authorization: this.token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ available: this.prodAvailable }),
        }
      );
      if (res.ok) {
        Swal.fire({
          title: `Product made ${title}!`,
          html: `You have now made this product ${title}. ${
            this.prodAvailable
              ? "The admin will review and approve any changes. You can view this product on the <a href='/supplier-dashboard/pending-products'>pending page.</a>"
              : "This product is now unavailable. Buyers can no longer view or request it. You can view and manage this product on the <a href='/supplier-dashboard/unavailable-products'>unavailable product page</a>"
          }`,
          icon: "success",
          confirmButtonColor: "#97f29f",
          confirmButtonText: "Ok",
        });
      } else {
        Swal.fire({
          title: "ooPs!",
          text: "Unable to change product availability at the moment please try again later",
          icon: "error",
          confirmButtonColor: "#97f29f",
          confirmButtonText: "Ok",
        });
      }
      this.waitAvailabilityResponse = false;
    },

    async updateProduct(uploadOrSave) {
      this.loading = true;
      console.log("submitting!!");
      let img_arr = [];
      let file_arr = [];
      let cert_name = [];
      console.log(this.image);
      console.log(this.file);
      console.log("status is", this.status);
      // for (let cert in this.file) {
      //   file_arr.push(this.file[cert].img);
      //   cert_name.push(this.file[cert].name);
      // }
      // for (let img in this.image) {
      //   img_arr.push(this.image[img]);
      // }

      console.log(img_arr);
      console.log(file_arr);
      console.log(cert_name);

      const fd = new FormData();

      this.name && fd.append("name", this.name);
      this.variety && fd.append("variety", this.variety);
      this.description && fd.append("description", this.description);
      this.farmMethod && fd.append("farmMethod", this.farmMethod);
      this.gmo && fd.append("GMO", this.gmo);
      this.country && fd.append("country", this.country);
      this.location && fd.append("location", this.location);
      this.intercom && fd.append("intercom", this.intercom);
      this.yearRoundAvailableStatus &&
        fd.append("yearRoundAvailableStatus", this.yearRoundAvailableStatus);
      this.yearRoundAvailableFrom &&
        fd.append("yearRoundAvailableStatus", this.yearRoundAvailableStatus);
      this.yearRoundAvailableTo &&
        fd.append("yearRoundAvailableTo", this.yearRoundAvailableTo);
      this.specialStorageConditionStatus &&
        fd.append(
          "specialStorageConditionStatus",
          this.specialStorageConditionStatus
        );
      this.specialStorageConditionDetails &&
        fd.append(
          "specialStorageConditionDetails",
          this.specialStorageConditionDetails
        );
      this.temperatureControlledStatus &&
        fd.append(
          "temperatureControlledStatus",
          this.temperatureControlledStatus
        );
      this.temperatureControlledDetails &&
        fd.append(
          "temperatureControlledDetails",
          this.temperatureControlledDetails
        );

      this.category && fd.append("category", this.category);
      this.character && fd.append("character", JSON.stringify(this.character));

      if (this.file) {
        for (let cert in this.file) {
          fd.append("file", this.file[cert].img);
          fd.append("cert_name", this.file[cert].name);
          fd.append("cert_number", this.file[cert].cert_number);
          fd.append("dateOfIssue", this.file[cert].dateOfIssue);
          fd.append("issuingBody", this.file[cert].issuingBody);
          fd.append("periodFrom", this.file[cert].periodFrom);
          fd.append("periodTo", this.file[cert].periodTo);
        }
      }
      if (this.image) {
        for (let img in this.image) {
          fd.append("image", this.image[img]);
        }
      }

      // if (this.image) {
      //   for (let i = 0; i < img_arr.length; i++) {
      //     fd.append("image", img_arr[i]);
      //   }
      // }
      // if (this.file) {
      //   for (let i = 0; i < file_arr.length; i++) {
      //     fd.append("file", file_arr[i]);
      //     fd.append("cert_name", cert_name[i]);
      //   }
      // }

      this.packages && fd.append("package", JSON.stringify(this.packages));
      this.shipment && fd.append("shipment", JSON.stringify(this.shipment));
      this.order.min_quantity && fd.append("min_quantity", this.min_quantity);
      this.order.min_quantity_unit &&
        fd.append("min_quantity", this.min_quantity_unit);
      this.supply_ability &&
        fd.append("supply_ability", JSON.stringify(this.supply_ability));
      uploadOrSave == "upload"
        ? fd.append("status", "pending")
        : fd.append("status", "incomplete");

      const res = await fetch(
        "https://producemart.herokuapp.com/updateProduct/" + this.id,
        {
          method: "PUT",
          headers: {
            Authorization: this.token,
          },
          body: fd,
        }
      );
      this.loading = false;
      let viewInDraftOrUnavailable = this.available ? "draft" : "unavailable";
      if (res.ok) {
        console.log(res);
        const data = await res.json();
        if (uploadOrSave == "save") {
          if (data.status) {
            Swal.fire({
              title: "Product Saved!",
              text: `Click Yes to view product in ${viewInDraftOrUnavailable} page or Cancel to continue editing`,
              icon: "success",
              confirmButtonColor: "#97f29f",
              confirmButtonText: "Yes",
              showCancelButton: true,
              cancelButtonColor: "#d33",
              cancelButtonText: "Cancel",
            }).then((result) => {
              if (result.isConfirmed) {
                this.$router.push(
                  `/supplier-dashboard/${viewInDraftOrUnavailable}-products`
                );
              } else {
                this.refresh += this.refresh;
                this.step = 1;
              }
            });
          } else
            data.message
              ? (this.message = data.message)
              : (this.message = "Please try again.");
        } else {
          Swal.fire({
            title: "Great Job!",
            text: "Product updated successfully and has been submitted for Admin's review",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#97f29f",
          });
          this.refresh += this.refresh;
          this.step = 1;
        }
      } else {
        this.message =
          "We are unable to save your response at the moment, please try again.";
      }
    },
    setCategory(item) {
      this.category = item;
      for (let newItem in this.items) {
        if (newItem != item) {
          this.items[newItem].check = false;
        }
      }
    },
    setShipping(cat) {
      for (let item in this.shipping) {
        if (item != cat) {
          this.shipping[item].check = false;
        }
      }
    },
    onFileChange(n) {
      this.file[n].img = event.target.files[0];
      console.log(this.file[n].img);
    },
    onFieldChange(n) {
      this.imgSizeMsg = "";
      this.image[n] = event.target.files[0];
      // console.log(this.image[n].size);
      if (this.image[n].size < 250000) {
        this.displayImg[n] = URL.createObjectURL(this.image[n]);
      } else {
        this.imgSizeMsg =
          "***File too large, image upload should not be more than 200kb***";
        delete this.image[n];
        this.displayImg[n - 1] && this.displayImg.pop();
      }
    },
    removeDispImg(n) {
      this.displayImg.splice(n, 1);
      delete this.image[n];
    },
    removeField(n) {
      this.displayImg.splice(n, 1);
      delete this.image[n];
      this.addImg.splice(n, 1);
    },
    async deleteImg(img_id, index) {
      this.images.splice(index, 1);
      // this.img_id.splice(index, 1);
      const res = await fetch(
        `https://producemart.herokuapp.com/deleteImage/${this.id}?imageId=${img_id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: this.token,
          },
        }
      );
      const { data } = await res.json();
      console.log(data);
    },
    async deleteFile(cert_id, index) {
      this.certification.splice(index, 1);
      const res = await fetch(
        `https://producemart.herokuapp.com/deleteCert/${this.id}?certId=${cert_id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: this.token,
          },
        }
      );
      const { data } = await res.json();
      console.log(data);
    },
    addMoreCert() {
      this.addFile.push(this.addFile.length + 1);
      this.file[this.addFile.length] = {};
    },
    removeFile(n) {
      this.addFile.pop();
      if (n >= 2) {
        delete this.file[n];
      } else {
        this.file[n] = { 1: {} };
      }
    },
    async getProduct() {
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
      this.product = data[0];
      this.lock =
        this.product.status == "active" || !this.product.available
          ? true
          : false;
      this.name = this.product.name;
      this.prodAvailable = this.product.available;
      this.variety = this.product.variety;
      this.description = this.product.description;
      this.farmMethod = this.product.farmMethod;
      this.gmo = this.product.GMO;
      this.country = this.product.country;
      console.log(this.product.location);
      console.log(this.address);
      let getLocation = this.address.filter((loc) =>
        this.product.location.includes(loc.city)
      )[0];
      this.location = `${getLocation.city} ${getLocation.country}`;
      console.log("Location", this.location);
      this.yearRoundAvailableStatus = this.product.yearRoundAvailable.status;
      this.yearRoundAvailableFrom = this.product.yearRoundAvailable.from;
      this.yearRoundAvailableTo = this.product.yearRoundAvailable.to;
      this.specialStorageConditionStatus =
        this.product.specialStorageCondition.status;
      this.specialStorageConditionDetails =
        this.product.specialStorageConditionDetails;
      this.temperatureControlledStatus =
        this.product.temperatureControlled.status;
      this.temperatureControlledDetails =
        this.product.temperatureControlledDetails;
      this.category = this.product.category;
      this.items[this.category].check = true;
      this.character = this.product.character ? this.product.character : {};
      this.images = this.product.img_url;
      this.img_id = this.product.img_id;
      this.certification = this.product.certification.map((cert) => {
        cert.dateOfIssue = this.dateFormat(cert.dateOfIssue);
        cert.validityPeriod.from = this.dateFormat(cert.validityPeriod.from);
        cert.validityPeriod.to = this.dateFormat(cert.validityPeriod.to);
        return cert;
      });

      this.packages = this.product.package ? this.product.package : {};
      this.packages?.unit
        ? (this.shipping.package_type.check = true)
        : (this.shipping.weight.check = true);
      let pDim = this.packages?.dimension?.replace(/\s/g, "");
      // console.log(dim);
      this.plen = pDim ? pDim.slice(0, pDim.indexOf("x")) : "";
      this.pwid = pDim
        ? pDim.slice(pDim.indexOf("x") + 1, pDim.lastIndexOf("x"))
        : "";
      this.phgt = pDim ? pDim.slice(pDim.lastIndexOf("x") + 1) : "";
      // console.log(this.len, this.wid, this.hgt);
      this.shipment = this.product.shipment ? this.product.shipment : {};
      let dim = this.shipment?.dimension.replace(/\s/g, "");
      // console.log(dim);
      this.len = dim ? dim.slice(0, dim.indexOf("x")) : "";
      this.wid = dim
        ? dim.slice(dim.indexOf("x") + 1, dim.lastIndexOf("x"))
        : "";
      this.hgt = dim ? dim.slice(dim.lastIndexOf("x") + 1) : "";
      // console.log(this.len, this.wid, this.hgt);
      this.order = this.product.order;
      (this.supply_ability = this.product.supply_ability
        ? this.product.supply_ability
        : {}),
        (this.status = this.product.status),
        console.log(data);
    },
    dateFormat(d) {
      let newDate = new Date(d);
      let m =
        newDate.getMonth() < 10 ? "0" + newDate.getMonth() : newDate.getMonth();
      let date =
        newDate.getDate() < 10 ? "0" + newDate.getDate() : newDate.getDate();
      let format = `${newDate.getFullYear()}-${m}-${date}`;
      console.log(d);
      return format;
    },
  },
};
</script>
