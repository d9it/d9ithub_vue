<template>
   <div>
      <footer class="footer" id="footer">
         <div class="footer-top">
            <div class="container">
               <div class="footer-top-bg row">
                  <div class="col-lg-4 footer-box"><i class="icon icon-location-pin"></i>
                     <div class="footer-box-content">
                        <h3>Head Office</h3>
                        <p>C/1102, Titanium City Center, Next To Sachin Tower, 100ft Anandnagar Road, Close to Prahladnagar, Ahmedabad</p>
                     </div>
                  </div>
                  <!-- Box 1 end-->
                  <div class="col-lg-4 footer-box"><i class="icon icon-phone"></i>
                     <div class="footer-box-content">
                        <h3>Call Us</h3>
                        <p>+91-756-745-6843 <br/>+91-937-468-6975</p>
                     </div>
                  </div>
                  <!-- Box 2 end-->
                  <div class="col-lg-4 footer-box"><i class="icon icon-envelope-open"></i>
                     <div class="footer-box-content">
                        <h3>Mail Us</h3>
                        <p>d9ithub@gmail.com</p>
                     </div>
                  </div>
                  <!-- Box 3 end-->
               </div>
               <!-- Content row end-->
            </div>
            <!-- Container end-->
         </div>
         <!-- Footer top end-->
         <div class="footer-main bg-overlay">
            <div class="container">
               <div class="row">
                  <div class="col-lg-4 col-md-12 footer-widget footer-about">
                     <h3 class="widget-title">About D9ithub</h3>
                     <p>D9ithub is a global web development, mobile development and software solution provider in Ahmedabad, India. D9ithub having a art of off source development center in india which provides a high quality and reasonable cost with effective solution for their worldwide clients.</p>
                  </div>
                  <!-- About us end-->
                  <div class="col-lg-4 col-md-12 footer-widget">
                     <h3 class="widget-title">Quick Links</h3>
                     <ul class="list-dash">
                        <li><a v-scroll-to="'#aboutus'" >About Us</a></li>
                        <li><a v-scroll-to="'#ourService'"> Our Services </a></li>
                        <li><a v-scroll-to="'#portfolio'" >Portfolio</a></li>
                        <li><a v-scroll-to="'#ourTeam'" >Our Team</a></li>
                        <li><a v-scroll-to="'#testimonial'" >Testimonial</a></li>
                        <li><a v-scroll-to="'#contactus'">Contact Us</a></li>
                        <li><router-link to="/career">Career</router-link></li>
                     </ul>
                  </div>
                  <div class="col-lg-4 col-md-12W footer-widget">
                     <h3 class="widget-title">Subscribe</h3>
                     <div class="newsletter-introtext">Don’t miss to subscribe to our new feeds, kindly fill the form below.</div>
                     <form class="newsletter-form" id="newsletter-form" action="#" method="post">
                        <div class="form-group">
                           <input class="form-control form-control-lg" id="newsletter-form-email" type="email" name="email" placeholder="Email Address" autocomplete="off">
                           <button class="btn btn-primary"><i class="fa fa-paper-plane"></i></button>
                        </div>
                     </form>
                     <div class="footer-social">
                        <ul>
                           <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                           <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                           <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                           <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                           <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                        </ul>
                     </div>
                  </div>
               </div>
               <!-- Content row end-->
            </div>
            <!-- Container end-->
         </div>
         <!-- Footer Main-->
         <div class="copyright">
            <div class="container">
               <div class="row">
                  <div class="col-lg-12 col-md-12 text-center">
                     <div class="copyright-info"><span>Copyright © 2018 D9ITHUB. All Rights Reserved.</span></div>
                  </div>
               </div>
               <!-- Row end-->
            </div>
            <!-- Container end-->
         </div>
         <!-- Copyright end-->
      </footer>
   </div>
</template>

<script>
    export default {
        components: {
        },
        data: () => ({
            show: false
        }),
    };
    
</script>