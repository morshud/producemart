<template>
    <footer class="mainFooter">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="footerCol">
            <h4>Company</h4>
            <div class="divText">
              <p>
                Producemart.com is a brand new online B2B marketplace for wholesale agricultural produce and ingredients. It aims to make it simpler than ever to list and source produce at a local, regional or international level.
              </p>
            </div>
            <div class="divText">
              <i class="bi bi-geo-alt"></i> 128 City Road, London, EC1V 2NX
            </div>
            <!-- <div class="divText">
              <i class="bi bi-telephone"></i> +2348082268957
            </div>
            <div class="divText">
              <i class="bi bi-globe"></i> www.producemart.com
            </div> -->
          </div>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-2">
          <div class="footerCol">
            <h4>Services</h4>
            <p><router-link to="/about"><a>About Us</a></router-link></p>
            <!-- <p><router-link to="/contact"><a>Contact Us</a></router-link></p> -->
            <p><router-link to="/products"><a>View Products</a></router-link></p>
            <p><router-link to="/request-a-product"><a>Request a Product</a></router-link></p>
            <p><router-link to="/faq" class="route-link"><a>FAQs</a></router-link></p>
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
            <!-- <p><router-link to="#"><a>Ebook Download</a></router-link></p>
            <p><router-link to="#"><a>Import Export Guide</a></router-link></p> -->
            <p><router-link to="/blog"><a>Blog</a></router-link></p>
            <p><router-link to="/faq"><a>FAQs</a></router-link></p>
          </div>
        </div>
      </div>
    </div>
    <div class="container copyrightFooter">
      <div class="row">
        <div class="col-lg-12 text-center">
          <p>
            Copyright &copy; <span id="autodate"></span> 
            Produce Mart. | All Rights Reserved. | Version 0.1.0
          </p>
        </div>
      </div>
    </div>
  </footer>
  <ScrollTopArrow></ScrollTopArrow>
</template>
<style scoped src="@/assets/css/styleFrontend.css"></style>
<style scoped src="@/assets/css/bootstrap.css"></style>

<script>
    import ScrollTopArrow from '@/components/scrollArrow'
    export default {
      components: {
        ScrollTopArrow
      },
      mounted(){
        //Copyright Date
        function newDate() {
          return new Date().getFullYear();
        }
        document.onload = document.getElementById("autodate").innerHTML = newDate();

        (function(d, src, c) { var t=d.scripts[d.scripts.length - 1],s=d.createElement('script');s.id='la_x2s6df8d';s.async=true;s.src=src;s.onload=s.onreadystatechange=function(){var rs=this.readyState;if(rs&&(rs!='complete')&&(rs!='loaded')){return;}c(this);};t.parentElement.insertBefore(s,t.nextSibling);})(document, 'https://producemart.ladesk.com/scripts/track.js', function(e){ LiveAgent.createButton('06dmo8ib', e); });

        (function(d, src, c) { var t=d.scripts[d.scripts.length - 1],s=d.createElement('script');s.id='la_x2s6df8d';s.async=true;s.src=src;s.onload=s.onreadystatechange=function(){var rs=this.readyState;if(rs&&(rs!='complete')&&(rs!='loaded')){return;}c(this);};t.parentElement.insertBefore(s,t.nextSibling);})(document, 'https://producemart.ladesk.com/scripts/track.js', function(e){ LiveAgent.createButton('fj6urn21', e); });
        }
    }
</script>

