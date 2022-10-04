<template>
  <footer class="mainFooter">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-3 Hide">
          <div class="footerCol">
            <div class="pmg">
              <img src="@/assets/img/pmlg.png" alt="">
            </div>
            <div class="aligm-icon">
              <div class="media-icons">
                <a href="https://www.facebook.com/producemartcom"><i class="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/producemartdotcom/"><i class="fab fa-twitter"></i></a>
                <a href="https://twitter.com/producemartcom"><i class="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/company/producemart-com/about/?viewAsMember=true"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="footerCol">
            <h4>Company</h4>
            <div class="divText">
              <p><router-link to="/about"><a>About Us</a></router-link></p>
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
            <!-- <p><router-link to="/contact"><a>Contact Us</a></router-link></p> -->
            <p><router-link to="/products"><a>View Product</a></router-link></p>
            <p><router-link to="/request-a-product"><a>Request a Product</a></router-link></p>
            <h4 class="mt-4">Resources</h4>
            <!-- <p><router-link to="#"><a>Ebook Download</a></router-link></p>
            <p><router-link to="#"><a>Import Export Guide</a></router-link></p> -->
            <p><router-link to="/blog"><a>Blog</a></router-link></p>
            <p><router-link to="/faq"><a>FAQs</a></router-link></p>
          </div>
        </div>
        <div class="col-md-2">
          <div class="footerCol">
            <h4>Legal</h4>
            <p><router-link to="/terms"><a>Terms & Conditions</a></router-link></p>
            <p><router-link to="/privacy"><a>Privacy Policy</a></router-link></p>
            <p><router-link to="/cookies"><a>Cookies Policy</a></router-link></p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="footerCol mobile">
            <div class="pmg">
              <img src="@/assets/img/pmlg.png" alt="">
            </div>
            <div class="media-icons">
              <a href="https://www.facebook.com/producemartcom"><i class="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com/producemartcom"><i class="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com/producemartdotcom/"><i class="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/company/producemart-com/about/?viewAsMember=true"><i class="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div class="col-md-1"></div>
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
<style>
  .footerCol .pmg img{
    width: 80%;
  }
.media-icons{
    display: flex;
}
.Hide{
  display: none;
}
@media(max-width: 1299px){
  .mobile{
    display: none;
  }
  .Hide{
  display: block;
}
}
@media(max-width: 767px){
  .footerCol .pmg img{
    width: 50%;
    display: block;
    margin: auto;
  }
  .aligm-icon{
    display: block !important;
    margin: auto !important;
    width: 40% ;
  }
}
@media(max-width: 520px){
  .aligm-icon{
    display: block !important;
    margin: auto !important;
    width: 50%;
  }
}
 .media-icons a{
    height: 40px;
    width: 40px;
    margin: 0 8px;
    border-radius: 10%;
    text-align: center;
    line-height: 40px;
    color: #fff;
    font-size: 17px;
    text-decoration: none;
    transition: all 0.4s ease;
}
.media-icons a:nth-child(1){
  background: #fff;
  color: #4267B2 !important;
}
.media-icons a:nth-child(1):hover{
  color: #fff !important;
  background: #4267B2;
}
.media-icons a:nth-child(2){
  background: #fff;
    color: #1DA1F2 !important;
}
.media-icons a:nth-child(2):hover{
    color: #fff !important;
    background: #1DA1F2;
}
.media-icons a:nth-child(3){
  color:#E1306C !important;
  background: #fff;
}
.media-icons a:nth-child(3):hover{
    color: #fff !important;
    background: #E1306C;
}
.media-icons a:nth-child(4){
  color: #0077B5 !important;
    background: #fff;
}
.media-icons a:nth-child(4):hover{
    color: #fff !important;
    background: #0077B5;
}
</style>
<script>
  import ScrollTopArrow from '@/components/scrollArrow'
  export default {
    components: {
      ScrollTopArrow
    },
    created() {
      (function(d, src, c) { var t=d.scripts[d.scripts.length - 1],s=d.createElement('script');s.id='la_x2s6df8d';s.async=true;s.src=src;s.onload=s.onreadystatechange=function(){var rs=this.readyState;if(rs&&(rs!='complete')&&(rs!='loaded')){return;}c(this);};t.parentElement.insertBefore(s,t.nextSibling);})(document, 'https://producemart.ladesk.com/scripts/track.js', function(e){ LiveAgent.createButton('06dmo8ib', e); });

      (function(d, src, c) { var t=d.scripts[d.scripts.length - 1],s=d.createElement('script');s.id='la_x2s6df8d';s.async=true;s.src=src;s.onload=s.onreadystatechange=function(){var rs=this.readyState;if(rs&&(rs!='complete')&&(rs!='loaded')){return;}c(this);};t.parentElement.insertBefore(s,t.nextSibling);})(document, 'https://producemart.ladesk.com/scripts/track.js', function(e){ LiveAgent.createButton('fj6urn21', e); });
    },
    mounted(){
      //Copyright Date
      function newDate() {
        return new Date().getFullYear();
      }
      document.onload = document.getElementById("autodate").innerHTML = newDate();
    }
  }
</script>

