<template>
  <title>Upload Products - Supplier Dashboard | Produce Mart</title>
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
                    <h3>Upload Products</h3>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="dashboard_breadcam text-right">
                    <p>
                      <router-link to="/supplier-dashboard/home"
                        ><a>Dashboard</a></router-link
                      >
                      <i class="fas fa-caret-right"></i> Upload Products
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Main-->
          <div class="col-md-11">
            <form
              class="form"
              @submit.prevent="handleProductUpload('upload')"
              enctype="multipart/form-data"
            >
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
                    <input type="text" class="input" v-model="name" required />
                  </div>
                  <div class="col-lg-6 mb-3">
                    <label>Product Variety <span>*</span></label>
                    <input
                      type="text"
                      class="input"
                      v-model="variety"
                      required
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
                    ></textarea>
                  </div>
                  <div class="col-lg-6 mb-3">
                    <label>Farming Method <span>*</span></label>
                    <select class="input" v-model="farmMethod">
                      <option hidden>Select Method</option>
                      <option>Organic</option>
                      <option>Integrated</option>
                      <option>Conventional</option>
                    </select>
                  </div>
                  <div class="col-lg-6 mb-3">
                    <label>GMO <span>*</span></label>
                    <select class="input" v-model="gmo">
                      <option hidden>Select</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                  <div class="col-lg-12 mb-3">
                    <label>Country of origin <span>*</span></label>
                    <select class="input" v-model="country">
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
                      v-model="location"
                    ></textarea>
                  </div>
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
                      />
                      <label for="noAvailable" class="radioSpan"
                        >NO, only available from</label
                      >
                    </fieldset>
                    <div v-if="available">
                      From:
                      <input
                        type="date"
                        class="inputShow"
                        v-model="yearRoundAvailableFrom"
                      />

                      To:
                      <input
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
                        type="radio"
                        @click="storage = false"
                        name="storage"
                        id="noStorage"
                        value="No"
                        v-model="specialStorageConditionStatus"
                      />
                      <label for="noStorage" class="radioSpan">NO</label>

                      <input
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
                        type="radio"
                        @click="temperature = false"
                        name="temperature"
                        id="noTemperature"
                        value="No"
                        v-model="temperatureControlledStatus"
                      />
                      <label for="noTemperature" class="radioSpan">NO</label>
                      <input
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
                    >
                      Next
                    </button>
                  </div>
                  <div class="col-sm-12">
                    <p
                      class="saveAndContinue"
                      @click="handleProductUpload('save')"
                    >
                      <a>Save & Continue Later</a>
                    </p>
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
                          @click="setCategory('oil')"
                          name="category"
                          id="idOil"
                          v-model="items.oil.check"
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
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Grade, Style or Quality</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.grade"
                        placeholder="e.g. Extra Virgin, Premium, Extra etc"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Purity(%)</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.purity"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Acidity(%)</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.acidity"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Taste</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.taste"
                        placeholder="e.g. Sweet Fruity"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>smell</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.smell"
                        placeholder="e.g. notes of almond"
                      />
                    </div>
                    <div class="categoryInnerDivLarge mb-3">
                      <label>Use</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.use"
                        placeholder="e.g. Human Food, Animal Feed"
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
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Grade, Style or Quality</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.grade"
                        placeholder="e.g. Fresh, Dried"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>maturity</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.maturity"
                        placeholder="e.g. 100%"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>size</label>
                      <input
                        type="text"
                        class="input inputSize"
                        v-model="character.size"
                      />
                      <select class="input selectSize">
                        <option>cm</option>
                        <option>mm</option>
                        <option>inches</option>
                      </select>
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Taste</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.taste"
                        placeholder="e.g. Sweet, Crisp"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Weight (kg)</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.weight"
                        placeholder="e.g. 0.38 KG"
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
                        type="text"
                        class="input"
                        v-model="character.gradeprocessType"
                        placeholder="e.g. Blanching"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Grade, Style or Quality</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.tyle"
                        placeholder="e.g. Dried, Frozen, Fresh"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>color</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.color"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>freezing process</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.freezingProcess"
                        placeholder="e.g. IQF"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Taste</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.taste"
                        placeholder="e.g. Natural, Fresh"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>shape</label>
                      <input
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
                        type="text"
                        class="input"
                        v-model="character.color"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Grade, Style or Quality</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.grade"
                        placeholder="e.g. Dried"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>drying process</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.dryProcess"
                        placeholder="e.g. Air Dried"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>moisture (max %)</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.moisture"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>admixture (max %)</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.admixture"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>broken (max %)</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.broken"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>use</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.use"
                        placeholder="e.g. Human Food, Animal Feed"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>imperfect rate (max %)</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.imperfectRate"
                      />
                    </div>
                    <div class="categoryInnerDivLarge mb-3">
                      <label>size</label>
                      <input
                        type="text"
                        class="input inputSize"
                        v-model="character.size"
                      />
                      <select class="input selectSize">
                        <option>cm</option>
                        <option>mm</option>
                        <option>inches</option>
                      </select>
                    </div>
                    <div class="categoryInnerDivLarge mb-3">
                      <label>Additional comment</label>
                      <textarea
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
                        type="text"
                        class="input"
                        v-model="character.color"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>style</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.style"
                        placeholder="e.g. InShell, Dried"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>shell type</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.shellType"
                        placeholder="e.g. Hard, soft, Semi-Hard, Natural, Bleached"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Grade or Quality</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.grade"
                        placeholder="e.g. WW240, SW, LBW, DW, WS, LP, SP, JQ, K-SPEC"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>USDA Grade (Applies to Almonds)</label>
                      <select class="input" v-model="character.usdaGrade">
                        <option hidden>Select</option>
                        <option>US Fancy</option>
                        <option>US Extra N.1</option>
                        <option>US N.1 (Supreme)</option>
                        <option>US Select Shelter Run</option>
                        <option>US Standard Shelter Run</option>
                        <option>US No. 1 Whole & Broken</option>
                        <option>US No. 1 Pieces</option>
                      </select>
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>size</label>
                      <input
                        type="text"
                        class="input inputSize"
                        v-model="character.size"
                      />
                      <select class="input selectSize">
                        <option>p.oz</option>
                        <option>cm</option>
                        <option>mm</option>
                        <option>inches</option>
                      </select>
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>form</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.form"
                        placeholder="e.g. Whole, Nuggets, Slices, Crushed, Diced, Flour, Roasted, Granules"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>moisture (max %)</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.moisture"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Kernels per KG</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.kernelsPerKg"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Defects (max %)</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.defects"
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
                        type="text"
                        class="input"
                        v-model="character.color"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>grade</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.grade"
                        placeholder="e.g. Grade 1"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>coffee type</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.coffeeType"
                        placeholder="e.g 100% Robusta Blend Coffee Bean"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Defects</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.defects"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>processing type</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.processType"
                        placeholder="e.g. Roasted, Washed"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>bean size</label>
                      <input
                        type="text"
                        class="input inputSize"
                        v-model="character.beanSize"
                      />
                      <select class="input selectSize">
                        <option>cm</option>
                        <option>mm</option>
                        <option>inches</option>
                      </select>
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>maturity</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.maturity"
                        placeholder="e.g. 100%"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Taste</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.taste"
                        placeholder="e.g. Sweet Fruity"
                      />
                    </div>
                    <div class="categoryInnerDivLarge mb-3">
                      <label>moisture (max %)</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.moisture"
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
                        type="text"
                        class="input"
                        v-model="character.color"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>style, grade or quality</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.style"
                        placeholder="e.g. Silk, Fresh"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>number of petals</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.noOfPetals"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>petals size</label>
                      <input
                        type="text"
                        class="input inputSize"
                        v-model="character.petalSize"
                      />
                      <select class="input selectSize">
                        <option>cm</option>
                        <option>mm</option>
                        <option>inches</option>
                      </select>
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>bud size (cm)</label>
                      <input
                        type="text"
                        class="input inputSize"
                        v-model="character.budSize"
                      />
                      <select class="input selectSize">
                        <option>cm</option>
                        <option>mm</option>
                        <option>inches</option>
                      </select>
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>head size (cm)</label>
                      <input
                        type="text"
                        class="input inputSize"
                        v-model="character.headSize"
                      />
                      <select class="input selectSize">
                        <option>cm</option>
                        <option>mm</option>
                        <option>inches</option>
                      </select>
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>sterm lenght</label>
                      <input
                        type="text"
                        class="input inputSize"
                        v-model="character.stermLen"
                      />
                      <select class="input selectSize">
                        <option>cm</option>
                        <option>mm</option>
                        <option>inches</option>
                      </select>
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>stem per bunch</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.stemPerBunch"
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
                        type="text"
                        class="input"
                        v-model="character.color"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>style, grade or quality</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.style"
                        placeholder="e.g. Silk, Fresh"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>drying process</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.dryProcess"
                        placeholder="e.g. Air Dried"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Taste</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.taste"
                        placeholder="e.g. Bland"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>smell</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.smell"
                        placeholder="e.g. notes of almond"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>moisture (max %)</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.mositure"
                        placeholder="e.g. Custom"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>admixture (max %)</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.admixture"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>use</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.use"
                        placeholder="e.g. Human Food, Animal Feed"
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
                        type="text"
                        class="input"
                        v-model="character.color"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>style, grade or quality</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.style"
                        placeholder="e.g. Dried, Frozen"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>processing type</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.processType"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>Taste</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.taste"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>shape</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.shape"
                      />
                    </div>
                    <div class="categoryInnerDiv mb-3">
                      <label>size</label>
                      <input
                        type="text"
                        class="input inputSize"
                        v-model="character.size"
                      />
                      <select class="input selectSize">
                        <option>cm</option>
                        <option>mm</option>
                        <option>inches</option>
                      </select>
                    </div>
                    <div class="categoryInnerDivLarge mb-3">
                      <label>Defects</label>
                      <input
                        type="text"
                        class="input"
                        v-model="character.defects"
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
                    <p
                      class="saveAndContinue"
                      @click="handleProductUpload('save')"
                    >
                      <a>Save & Continue Later</a>
                    </p>
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
                  <div class="col-ting">
                    <div class="control-group file-upload" id="file-upload1">
                      <div class="image-box text-center">
                        <p>Upload Image</p>
                        <img src="" alt="" />
                      </div>
                      <div class="controls" style="display: none">
                        <input
                          type="file"
                          name="contact_image_1"
                          accept=".jpg, .jpeg, .png, .webp"
                          @change="onFieldChange(1)"
                        />
                      </div>
                    </div>
                  </div>
                  <small class="uploadSmallPicture"
                    >(accepted image format: jpeg, jpg, png, webp)</small
                  >
                </div>

                <div class="col-lg-6 mt-2 mb-3 upload-more-image">
                  <label>Upload Additional Image</label>
                  <div class="col-ting">
                    <div class="control-group file-upload" id="file-upload1">
                      <div class="image-box text-center">
                        <p>Upload Image</p>
                        <img src="" alt="" />
                      </div>
                      <div class="controls" style="display: none">
                        <input
                          type="file"
                          name="contact_image_1"
                          accept=".jpg, .jpeg, .png, .webp"
                          @change="onFieldChange(2)"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div v-if="addImg.length">
                  <div
                    class="col-lg-6 mt-2 mb-3 upload-more-image"
                    v-for="(newImg, i) in addImg"
                    :key="i"
                  >
                    <label>Upload Additional Image</label>
                    <input type="file" />
                    <div class="col-ting">
                      <div class="control-group file-upload" id="file-upload1">
                        <div class="image-box text-center">
                          <p>Upload Image {{ newImg }}</p>
                          <img src="" alt="" />
                        </div>
                        <div class="controls" style="display: none">
                          <input
                            type="file"
                            name="contact_image_1"
                            accept=".jpg, .jpeg, .png, .webp"
                            @change="onFieldChange(newImg)"
                          />
                        </div>
                      </div>
                    </div>
                    <span
                      @click="addImg.pop()"
                      remove-field
                      btn-remove-field
                      class="removeField"
                      >Remove Field</span
                    >
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="upload-dynamic"></div>
                </div>
                <div class="uploadMore" v-if="addImg.length < 2">
                  <span @click="addImg.push(addImg.length + 3)"
                    >Upload More <i class="bi bi-plus-circle"></i
                  ></span>
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
                    <p
                      class="saveAndContinue"
                      @click="handleProductUpload('save')"
                    >
                      <a>Save & Continue Later</a>
                    </p>
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
                    <select class="input" v-model="file[1].name">
                      <option hidden>Select Certificate</option>
                      <option>option 1</option>
                      <option>option 2</option>
                      <option>option 3</option>
                      <option>others</option>
                    </select>
                  </div>
                  <div class="col-lg-6 mb-3">
                    <label>Certificate Number</label>
                    <input type="text" class="input" />
                  </div>
                  <div class="col-lg-6 mb-3">
                    <label>Date of Issue</label>
                    <input type="date" class="input" />
                  </div>
                  <div class="col-lg-12 mb-3">
                    <label>Name of Issuing Body</label>
                    <input type="text" class="input" />
                  </div>
                  <div class="col-lg-12 mb-3">
                    <label>Validity Period</label>
                    <div class="row">
                      <div class="col-lg-6">
                        <span>From:</span>
                        <input type="date" class="input" />
                      </div>
                      <div class="col-lg-6">
                        <span>To:</span>
                        <input type="date" class="input" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <label>Upload Certification</label>
                    <input
                      type="file"
                      class="input"
                      @change="onFileChange(1)"
                    />
                  </div>
                </div>
                <div v-if="addFile.length">
                  <div
                    class="row add-more-certi"
                    v-for="(newFile, i) in addFile"
                    :key="i"
                  >
                    <div class="col-lg-12 mt-4 mb-3">
                      <label>Certification Name{{ newFile }}</label>
                      <select class="input" v-model="file[newFile].name">
                        <option>Select Certificate</option>
                        <option>option 1</option>
                        <option>option 2</option>
                        <option>option 3</option>
                        <option>others</option>
                      </select>
                    </div>
                    <div class="col-lg-6 mb-3">
                      <label>Certificte Number</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="col-lg-6 mb-3">
                      <label>Date of Issue</label>
                      <input type="date" class="input" />
                    </div>
                    <div class="col-lg-12 mb-3">
                      <label>Name of Issuing Body</label>
                      <input type="text" class="input" />
                    </div>
                    <div class="col-lg-12 mb-3">
                      <label>Validity Period</label>
                      <div class="row">
                        <div class="col-lg-6">
                          <span>From:</span>
                          <input type="date" class="input" />
                        </div>
                        <div class="col-lg-6">
                          <span>To:</span>
                          <input type="date" class="input" />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <label>Upload Certification</label>
                      <input
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
                <div class="uploadMore">
                  <span @click="addMoreCert"
                    >Upload More <i class="bi bi-plus-circle"></i
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
                        <td>{{ i }}</td>
                        <td>{{ newCert.name }}</td>
                        <td>{{ newCert.img.name }}</td>
                      </tr>
                    </table>
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
                    <p
                      class="saveAndContinue"
                      @click="handleProductUpload('save')"
                    >
                      <a>Save & Continue Later</a>
                    </p>
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
                  <div class="col-lg-4 radioDiv mb-2">
                    <input
                      type="checkbox"
                      @click="setShipping('fluid')"
                      name="category"
                      id="idOil"
                      v-model="shipping.fluid.check"
                    />
                    <label for="idOil" class="radioSpan">Fluid (Liquid)</label>
                  </div>
                  <div class="col-lg-4 radioDiv mb-2">
                    <input
                      type="checkbox"
                      @click="setShipping('others')"
                      name="category"
                      id="idFruit"
                      v-model="shipping.others.check"
                    />
                    <label class="radioSpan" for="idFruit">Others</label>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6 mt-4 mb-3">
                    <label>Packaging Unit</label>
                    <input
                      type="text"
                      class="input"
                      v-model="packages.unit"
                      placeholder="e.g. Bag, Box,Vacuum Pack, Sack, Other"
                    />
                  </div>
                  <div class="col-lg-6 mt-4 mb-3" v-if="shipping.fluid.check">
                    <label>Volume of Packaging (litre)</label>
                    <input
                      type="text"
                      class="input"
                      v-model="packages.pckVol"
                    />
                  </div>
                  <div class="col-lg-6 mt-4 mb-3 categoryInnerDiv">
                    <label>Weight of Packaging</label>
                    <input
                      type="text"
                      class="input inputSize"
                      v-model="packages.pckWgt"
                    />
                    <select class="input selectSize">
                      <option>kg</option>
                      <option>lb</option>
                    </select>
                  </div>
                  <div class="col-lg-6 mt-4 mb-3">
                    <label>Price of Packaging ($)</label>
                    <input
                      type="text"
                      class="input"
                      v-model="packages.pckPrice"
                    />
                  </div>
                </div>
                <div class="lineHR"></div>
                <div class="col-lg-12 text-center headerH1">
                  <h1>Shipment</h1>
                </div>
                <div class="row">
                  <div class="col-lg-6 mt-4 mb-3">
                    <label>Shipment Packaging</label>
                    <select class="input" v-model="shipment.shipPckng">
                      <option hidden>Select</option>
                      <option>Crate</option>
                      <option>Box</option>
                      <option>Bag</option>
                      <option>Pack</option>
                      <option>Pallet</option>
                      <option>Carton</option>
                    </select>
                  </div>
                  <div class="col-lg-6 mt-4 mb-3 categoryInnerDiv">
                    <label>Weight of Shipment package</label>
                    <input
                      type="text"
                      class="input inputSize"
                      v-model="shipment.ShipWgt"
                    />
                    <select class="input selectSize">
                      <option>kg</option>
                      <option>lb</option>
                    </select>
                  </div>
                  <div class="col-lg-12 mt-4 mb-3">
                    <label>Price of shipment ($)</label>
                    <input
                      type="text"
                      class="input"
                      v-model="shipment.shipPrice"
                    />
                  </div>
                  <div class="col-lg-12 mt-4 mb-3">
                    <label>Number Of Units Per Shipment Package</label>
                    <input
                      type="text"
                      class="input"
                      placeholder="e.g. 12 x 1Ltr bottle in a box"
                      v-model="shipment.noOfUnits"
                    />
                    <input
                      type="text"
                      class="input"
                      placeholder="e.g. 40 boxes per pallet"
                      v-model="shipment.noOfUnits"
                    />
                  </div>
                  <div class="col-lg-12 mt-4 mb-3">
                    <label>Shipping in Container</label>
                    <small
                      >How many units can fit in a 20 foot shipping container?
                      This is useful information for the buyer to see the size
                      of the shipment</small
                    >
                    <input
                      type="text"
                      class="input"
                      v-model="shipment.shipContainer"
                    />
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
                    <input type="text" class="input" v-model="min_quantity" />
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
                        <input
                          type="text"
                          class="input"
                          v-model="supply_ability.qty"
                        />
                      </div>
                      <div class="col-lg-6 mb-3">
                        <label>frequency</label>
                        <select class="input" v-model="supply_ability.freq">
                          <option>Week</option>
                          <option>Month</option>
                          <option>Quarter</option>
                          <option>Year</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12 mt-3 mb-3">
                    <input
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
                  <a href="#" class="btn btn-prev">Previous</a>
                  <input
                    type="submit"
                    value="Submit"
                    class="btn"
                    :disabled="!status"
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
export default {
  name: "Produce Mart",
  components: {
    "dash-sidebar": DashSidebar,
    "dash-navbar": DashNavbar,
    "dash-footer": DashFooter,
  },
  mounted() {
    window.scrollTo(0, 0);
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

    $(".image-box").click(function (event) {
      var previewImg = $(this).children("img");

      $(this).siblings().children("input").trigger("click");

      $(this)
        .siblings()
        .children("input")
        .change(function () {
          var reader = new FileReader();

          reader.onload = function (e) {
            var urll = e.target.result;
            $(previewImg).attr("src", urll);
            previewImg.parent().css("background", "transparent");
            previewImg.show();
            previewImg.siblings("p").hide();
          };
          reader.readAsDataURL(this.files[0]);
        });
    });
  },
  data() {
    return {
      loading: false,
      message: "",
      countries: countries,
      available: false,
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
        fluid: { check: false },
        others: { check: false },
      },
      name: "",
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
      packages: {},
      shipment: {},
      min_quantity: "",
      supply_ability: {},

      status: null,
    };
  },

  methods: {
    async handleProductUpload(uploadOrSave) {
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
      this.min_quantity && fd.append("min_quantity", this.min_quantity);
      this.supply_ability &&
        fd.append("supply_ability", JSON.stringify(this.supply_ability));
      uploadOrSave == "upload"
        ? fd.append("status", "pending")
        : fd.append("status", "incomplete");

      const res = await fetch(
        "https://producemart.herokuapp.com/createProduct",
        {
          method: "POST",
          headers: {
            Authorization: this.token,
          },
          body: fd,
        }
      );
      if (res.ok) {
        console.log(res);
        const data = await res.json();
        if (uploadOrSave == "save") {
          this.loading = false;
          if (data.status)
            this.$router.push("/supplier-dashboard/draft-products");
          else
            data.message
              ? (this.message = data.message)
              : (this.message = "Please try again.");
        } else {
          this.loading = false;
          this.$router.push("/supplier-dashboard/pending-products");
        }
      } else {
        this.loading = false;
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
      this.image[n] = event.target.files[0];
    },
    addMoreCert() {
      this.addFile.push(this.addFile.length + 2);
      this.file[this.addFile.length + 1] = {};
    },
    removeFile(n) {
      this.addFile.pop();
      delete this.file[n];
    },
  },
};
</script>
