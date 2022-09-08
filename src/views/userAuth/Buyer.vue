<template>
  <title>Buyer Registration | Produce Mart</title>
  <section class="reg">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="headLogin">
            <h3>
              <router-link to="/">
                <img src="@/assets/img/adminImg/logo.png" />
              </router-link>
              <span>Sign Up (Buyer)</span>
              <div class="line-rule"></div>
            </h3>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="imageArea imageBuyer">
            <img
              class="image11"
              ondragstart="return false;"
              src="@/assets/img/dashboard-img/image11.png"
            />
            <img
              class="image22"
              ondragstart="return false;"
              src="@/assets/img/dashboard-img/image22.png"
            />
            <img
              class="image33"
              ondragstart="return false;"
              src="@/assets/img/dashboard-img/image33.png"
            />
          </div>
        </div>
        <div class="col-lg-1"></div>
        <div class="col-lg-6">
          <div class="signupDiv">
            <form @submit.prevent="handleRegister">
              <div
                v-if="message"
                class="alert"
                :class="successful ? 'alert-success' : 'alert-danger'"
              >
                {{ message }}
              </div>
              <div class="row">
                <!--Name-->
                <div class="col-lg-12">
                  <label>Name</label>
                  <div class="row">
                    <div class="col-md-6 mb-2">
                      <i class="bi bi-person"></i>
                      <input
                        v-model="user.firstname"
                        type="text"
                        placeholder="First name"
                        name="firstname"
                        class="input"
                        required
                      />
                    </div>
                    <div class="col-md-6 mb-4">
                      <i class="bi bi-person"></i>
                      <input
                        v-model="user.lastname"
                        type="text"
                        placeholder="Last name"
                        name="lastname"
                        class="input"
                        required
                      />
                    </div>
                  </div>
                </div>
                <!--Email-->
                <div class="col-lg-12 mb-4">
                  <label>Email address</label>
                  <div class="row">
                    <div class="col-md-12">
                      <i class="bi bi-envelope"></i>
                      <input
                        v-model="user.email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        class="input"
                        required
                      />
                    </div>
                  </div>
                </div>
                <!--Phone Number-->
                <div class="col-lg-6 mb-4">
                  <label>Phone Number</label>
                  <div class="row">
                    <div class="col-md-12">
                      <i class="bi bi-telephone"></i>
                      <input
                        v-model="user.phone_no"
                        type="tel"
                        @keypress="NumbersOnly"
                        name="phone_no"
                        placeholder="Enter your phone number"
                        class="input"
                        id="telephone"
                        required
                      />
                    </div>
                  </div>
                </div>
                <!--Username-->
                <div class="col-lg-6 mb-4">
                  <label>Username</label>
                  <div class="row">
                    <div class="col-md-12">
                      <i class="bi bi-person-rolodex"></i>
                      <input
                        v-model="user.username"
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        class="input"
                      />
                    </div>
                  </div>
                </div>
                <!--Password-->
                <div class="col-lg-12 mb-4">
                  <label>Password</label>
                  <div class="row">
                    <div class="col-md-12">
                      <i class="bi bi-lock"></i>
                      <input
                        v-model="user.password"
                        name="password"
                        type="password"
                        required
                        placeholder="Enter your password"
                        class="input"
                      />
                    </div>
                  </div>
                </div>
                <!--Company name-->
                <div class="col-lg-12 mb-4">
                  <label>Company Name</label>
                  <div class="row">
                    <div class="col-md-12">
                      <i class="bi bi-building"></i>
                      <input
                        v-model="user.company_name"
                        name="company_name"
                        type="text"
                        placeholder="Enter company name"
                        class="input"
                        required
                      />
                    </div>
                  </div>
                </div>
                <!--Company name-->
                <div class="col-lg-12 mb-4">
                  <label>Country</label>
                  <div class="row">
                    <div class="col-md-12">
                      <i class="bi bi-building"></i>
                      <select v-model="user.country" required class="input">
                        <option selected>Please mention your country</option>
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
                  </div>
                </div>
                <!--Agreement-->
                <div class="col-lg-12 agreement">
                  <p>
                    By clicking sign up, you agree to the
                    <router-link to="#" class="route-link">Terms</router-link> &
                    <router-link to="#" class="route-link"
                      >Privacy Policy.</router-link
                    >
                  </p>
                </div>
                <!--Signup-->
                <div class="col-lg-12 mb-4 mt-2">
                  <input type="submit" value="Sign Up" class="submit" />
                </div>
                <div
                  class="col-lg-12 mb-4 mt-2 text-center signuas"
                  v-show="loading"
                >
                  <span class="spinner-border spinner-border-sm"></span>
                </div>
                <!--Signup as a supplier-->
                <div class="col-lg-12 mt-2 text-center signuas">
                  <router-link
                    to="/supplier-registration"
                    class="route-link"
                    :disabled="loading"
                    >Sign Up as a Supplier</router-link
                  >
                </div>
              </div>
            </form>
          </div>
          <!--Already have account-->
          <div class="col-lg-12 text-center optionBelow">
            <p>
              Already have an account?
              <span
                ><router-link to="/login" class="route-link"
                  >Login</router-link
                ></span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped src="@/assets/css/authStyle.css"></style>
<style scoped src="@/assets/css/bootstrap.min.css"></style>
<script>
//intlTelInput
import "intl-tel-input/build/css/intlTelInput.css";
import "intl-tel-input/build/js/intlTelInput.js";
import intlTelInput from "intl-tel-input";
export default {
  name: "Register",
  data() {
    return {
      user: {
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        phone_no: "",
        password: "",
        country: "",
        company_name: "",
      },
      loading: false,
      submitted: false,
      successful: false,
      message: "",
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/buyer-dashboard/home");
    }
    const input = document.querySelector("#telephone");
    intlTelInput(input, { preferredCountries: ["us", "ng", "ca"] });
    window.scrollTo(0, 0);
  },
  methods: {
    NumbersOnly(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();;
      } else {
        return true;
      }
    },
    handleRegister() {
      this.message = "";
      this.loading = true;
      this.submitted = true;
      console.log(this.user);

      this.$store.dispatch("auth/register", this.user).then(
        (data) => {
          this.message = data.message;
          this.successful = true;
          this.message ? (this.loading = !this.loading) : this.loading;
          //this.$router.push("/login");
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            /*  error.message */ error.response.data.errors[0].message ||
            "password does not match or too short";
          /* error.toString(); */
          this.successful = false;
          this.loading = false;
        }
      );
    },
  },
};
</script>
