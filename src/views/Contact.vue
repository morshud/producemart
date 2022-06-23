<template>
  <title>Contact Us | Produce Mart</title>
  <mainHeader/>
  <searchHeader/>
  
  <!--Page Breadcrumb-->
  <section class="pageBreadcrumb contactPageBread">
      <div class="container">
          <div class="row justify-content-center">
                <div class="col-lg-10 text-center">
                    <div class="textHead">
                        <p class="subhead">Produce Mart</p>
                        <h2>Contact Us</h2>
                        <p class="belowHead">Want to get in touch ? You are more than welcome to leave a message.</p>
                    </div>
                </div>
          </div>
      </div>
  </section><!--Page Breadcrumb Ends-->

  <!--Contact Us Content-->
  <main class="contactContent">

      <!--Details - Message-->
      <section class="detailsMessage">
          <div class="container">
              <div class="row">
                  <div class="col-lg-5">
                      <div class="contactDetails">
                          <h4>Contact Info</h4>
                          <div class="box boxFirst">
                              <div class="box1">
                                  <i class="bi bi-phone-vibrate-fill"></i>
                              </div>
                              <div class="box2">
                                  <p><a href="tel:">+1-2129462707</a></p>
                                  <p><a href="tel:">+1-2129462707</a></p>
                              </div>
                          </div>
                          <div class="box">
                              <div class="box1 box11">
                                  <i class="bi bi-geo-alt-fill"></i>
                              </div>
                              <div class="box2">
                                  <p><a href="#addressMap">CGC Camp, 500m after Ushafa Bridge New Market, Ushafa Agwantiv Road, Bwari District, F.C.T. Abuja</a></p>
                              </div>
                          </div>
                          <div class="box">
                              <div class="box1 box111">
                                  <i class="bi bi-envelope-open-fill"></i>
                              </div>
                              <div class="box2">
                                  <p><a href="mailto:support@producemart.com">support@producemart.com</a></p>
                                  <p><a href="mailto:info@producemart.com">info@producemart.com</a></p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-1"></div>
                  <div class="col-lg-6">
                      <div class="contactMessage">
                          <h4>Leave a Message</h4>
                          <form>
                              <div class="row">
                                  <div class="col-md-6 mb-3">
                                      <label>Name</label>
                                      <input type="text" placeholder="Your name" class="input">
                                  </div>
                                  <div class="col-md-6 mb-3">
                                      <label>Email</label>
                                      <input type="email" placeholder="Your email" class="input">
                                  </div>
                                  <div class="col-md-6 mb-3">
                                      <label>Phone No</label>
                                      <input type="tel" placeholder="Your phone number" class="input">
                                  </div>
                                  <div class="col-md-6 mb-3">
                                      <label>Subject</label>
                                      <input type="text" placeholder="Enter subject" class="input">
                                  </div>
                                  <div class="col-md-12 mb-3">
                                      <label>Message</label>
                                      <textarea cols="30" rows="3" placeholder="Enter your message" class="input"></textarea>
                                  </div>
                                  <div class="col-md-12">
                                      <button type="submit">Submit</button>
                                  </div>
                              </div>
                          </form>
                        </div>
                  </div>
              </div>
          </div>
      </section>  

      <!--Map Area-->
      <section class="mapArea" id="addressMap">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12">
                      <h4>Contact Info</h4>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63013.066655609524!2d7.368122079101569!3d9.215946300000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104dddee81fe3bcd%3A0x9253074b49ca598!2sSCC%20Junction!5e0!3m2!1sen!2sng!4v1648480556495!5m2!1sen!2sng" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
              </div>
          </div>
      </section>
  </main>

    <footer class="mainFooter">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="footerCol">
                        <h4>Contact Info</h4>
                        <div class="divText">
                        <i class="bi bi-geo-alt"></i> CGC Camp, 500m after Ushafa Bridge New Market, Ushafa Agwantiv Road, Bwari District, F.C.T. Abuja
                        </div>
                        <div class="divText">
                        <i class="bi bi-telephone"></i> +2348082268957
                        </div>
                        <div class="divText">
                        <i class="bi bi-globe"></i> www.producemart.com
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="footerCol">
                        <h4>Company</h4>
                        <p><router-link to="/about"><a>About Us</a></router-link></p>
                        <p><router-link to="/contact"><a>Contact Us</a></router-link></p>
                        <p><router-link to="/products"><a>Products</a></router-link></p>
                        <p><router-link to="/request-a-product"><a>Request a Product</a></router-link></p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="footerCol">
                        <h4>Legal</h4>
                        <p><router-link to="/terms"><a>Terms & Conditions</a></router-link></p>
                        <p><router-link to="/privacy"><a>Privacy Policy</a></router-link></p>
                        <p><router-link to="/cookies"><a>Cookies Policy</a></router-link></p>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="footerCol">
                        <h4>Resources</h4>
                        <p><router-link to="#"><a>Ebook Download</a></router-link></p>
                        <p><router-link to="#"><a>Import Export Guide</a></router-link></p>
                        <p><router-link to="/blog"><a>Blog</a></router-link></p>
                        <p><router-link to="/faq"><a>FAQs</a></router-link></p>
                    </div>
                </div>
                <div class="col-md-1">
                    <div class="social-icon">
                        <a href="#" target="_blank" title="Like us on Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" target="_blank" title="Follow us on Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="#" target="_blank" title="Follow us on Twitter"><i class="fab fa-twitter"></i></a>
                        <a href="#" target="_blank" title="Connect with us on LinkedIn"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container copyrightFooter">
        <div class="row">
            <div class="col-lg-12 text-center">
            <p>
                Copyright &copy; <span id="autodate"></span> 
                Produce Mart. | All Rights Reserved.
            </p>
            </div>
        </div>
        </div>
  </footer>
</template>
<style scoped src="@/assets/css/styleFrontend.css"></style>
<style scoped src="@/assets/css/bootstrap.css"></style>
<script>
    import MainHeader from './mainHeader.vue'
    import SearchHeader from './searchHeader.vue'
    export default {
      name: "Produce Mart",
      components:{
      'mainHeader': MainHeader,
      'searchHeader': SearchHeader,
      },
      mounted(){
        window.scrollTo(0,0)
      }
    }
</script>