<template>
   <div>
      <footer class="footer" id="footer">
         <div class="footer-top">
            <div class="container">
               <div class="footer-top-bg row">
                  <div class="col-lg-12 footer-box text-center">
                     <div class="footer-box-content m-0">
                        <h3 class="footer_text">Top Developers & Designers Agency(45 hours / week) - Website & Mobile Application Development</h3>
                     </div>
                  </div>
                  <!-- <div class="col-lg-4 footer-box"><i class="icon icon-location-pin"></i>
                     <div class="footer-box-content">
                        <h3>Head Office</h3>
                        <p>C/1102, Titanium City Center, Next To Sachin Tower, 100ft Anandnagar Road, Close to Prahladnagar, Ahmedabad</p>
                     </div>
                  </div>
                  <div class="col-lg-4 footer-box"><i class="icon icon-phone"></i>
                     <div class="footer-box-content">
                        <h3>Call Us</h3>
                        <p>+91-756-745-6843 <br/>+91-937-468-6975</p>
                     </div>
                  </div>
                  <div class="col-lg-4 footer-box"><i class="icon icon-envelope-open"></i>
                     <div class="footer-box-content">
                        <h3>Mail Us</h3>
                        <p>d9ithub@gmail.com</p>
                     </div>
                  </div> -->
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
                     <h3 class="widget-title">Follow Us</h3>
                     <div class="footer-social">
                        <ul>
                           <li><a href="https://www.facebook.com/d9ithub18/" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                           <li><a href="https://in.linkedin.com/company/d9ithub" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                           <!-- <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                           <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                           <li><a href="#"><i class="fab fa-instagram"></i></a></li> -->
                        </ul>
                     </div>
                  </div>
                  <!-- About us end-->
                  <div class="col-lg-3 col-md-12 footer-widget">
                     <h3 class="widget-title">Quick Links</h3>
                     <ul class="list-dash">
                        <li @click="setRouteActive('aboutus')"><router-link to="/">About Us</router-link></li>
                        <li @click="setRouteActive('ourService')"><router-link to="/"> Our Services </router-link></li>
                        <li @click="setRouteActive('portfolio')"><router-link to="/">Portfolio</router-link></li>
                        <li @click="setRouteActive('ourTeam')"><router-link to="/">Our Team</router-link></li>
                        <li @click="setRouteActive('testimonial')"><router-link to="/">Testimonial</router-link></li>
                        <li @click="setRouteActive('contactus')"><router-link to="/">Contact Us</router-link></li>
                        <!-- <li @click="setRouteActive('career')"><router-link to="/career">Career</router-link></li> -->
                     </ul>
                  </div>
                  <div class="col-lg-5 col-md-12W footer-widget">
                     <!-- <div class="newsletter-introtext">Don’t miss to subscribe to our new feeds, kindly fill the form below.</div>
                     <form class="newsletter-form" id="newsletter-form" action="#" method="post">
                        <div class="form-group">
                           <input class="form-control form-control-lg" id="newsletter-form-email" type="email" name="email" placeholder="Email Address" autocomplete="off">
                           <button class="btn btn-primary"><i class="fa fa-paper-plane"></i></button>
                        </div>
                     </form> -->
                     <div class="footer-top footer_contactus" style="position: relative;top: 0;">
                        <div class="footer-box">
                           <i class="icon icon-location-pin"></i>
                           <div class="footer-box-content">
                              <h3>Head Office</h3>
                              <p>C/1102, Titanium City Center, Next To Sachin Tower, 100ft Anandnagar Road, Close to Prahladnagar, Ahmedabad, Gujarat, India - 380015</p>
                           </div>
                        </div>
                        <div class="footer-box">
                           <i class="icon icon-phone"></i>
                           <div class="footer-box-content">
                              <h3>Call Us</h3>
                              <p><a href="tel:917567456843"> +91-756-745-6843 </a><br/><a href="tel:919374686975"> +91-937-468-6975</a></p>
                           </div>
                        </div>
                        <div class="footer-box">
                           <i class="icon icon-envelope-open"></i>
                           <div class="footer-box-content">
                              <h3>Mail Us</h3>
                              <p><a href="mailto:d9ithub@gmail.com">d9ithub@gmail.com</a></p>
                           </div>
                        </div>
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
                     <div class="copyright-info"><span>Copyright © 2021 D9ITHUB. All Rights Reserved.</span></div>
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
        methods:{
            setRouteActive(route){
                this.$v_session.set('activeRoute', route)
                this.$store.state.activeRoute = route;
                this.$nextTick(()=> {
                    setTimeout(() => {
                        const options = {
                            easing: 'ease-int',
                            lazy: true,
                        } 
                        this.$scrollTo(`#${route}`, 200, options) 
                    },100)
                })
            }
        }
    };
    
</script>