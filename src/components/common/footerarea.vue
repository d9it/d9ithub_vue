<template>
   <div>
      <footer class="footer" id="footer">
         <div class="footer-top">
            <div class="container">
               <div class="footer-top-bg row">
                  <div class="footer-box text-center top_review">
                     <a class="client_review" href="https://www.facebook.com/d9ithub18/" aria-label="facebook link" target="_blank">
                        <img src="/assets/d9_images/facebook.png" alt="img" width="100%" height="auto">
                     </a>
                  </div>
                  <div class="footer-box text-center top_review">
                     <a class="client_review" href="https://in.linkedin.com/company/d9ithub" target="_blank" aria-label="Linkedin link">
                        <img src="/assets/d9_images/linkedin.png" alt="img" width="100%" height="auto">
                     </a>
                  </div>
                  <div class="footer-box text-center top_review">
                     <a class="client_review" href="https://www.google.com/maps/place/D9ithub+Software+Solutions+Pvt+Ltd/@23.0220291,72.5348394,17z/data=!3m1!4b1!4m6!3m5!1s0x395c2988041721e1:0x89a4e253244ed3e2!8m2!3d23.0220242!4d72.5374143!16s%2Fg%2F11g6j8fbqy?entry=ttu" target="_blank" aria-label="google review">
                        <img src="/assets/d9_images/Google-Review-Logo.png" alt="img" width="100%" height="auto">
                     </a>
                  </div>
                  <div class="footer-box text-center top_review">
                     <a class="client_review" href="https://www.upwork.com/agencies/893775696471093248/" aria-label="upwork link" target="_blank">
                        <img src="/assets/d9_images/upwork.png" alt="img" width="100%" height="auto">
                     </a>
                  </div>
                  <div class="footer-box text-center top_review">
                     <a class="client_review" href="https://clutch.co/profile/d9ithub-software-solutions-private#highlights" target="_blank" aria-label="clutch link">
                        <img src="/assets/d9_images/clutch.png" alt="img" width="100%" height="auto">
                     </a>
                  </div>
               </div>
            </div>
         </div>
         <!-- Footer top end-->
         <div class="footer-main bg-overlay">
            <div class="container">
               <div class="row">
                  <div class="col-lg-4 col-md-12 footer-widget footer-about">
                     <img src="/assets/d9_images/d9ithublogo_white.png" alt="img" width="100%" height="auto" class="footer_logo">
                     <p>D9ithub is a global web development, mobile development and software solution provider in Ahmedabad, India. D9ithub having a art of off source development center in india which provides a high quality and reasonable cost with effective solution for their worldwide clients.</p>
                  </div>
                  <!-- About us end-->
                  <div class="col-lg-3 col-md-12 footer-widget">
                     <h3 class="widget-title">Quick Links</h3>
                     <ul class="list-dash">
                        <li @click="setRouteActive('aboutus')"><router-link to="/aboutus">About Us</router-link></li>
                        <li @click="setRouteActive('ourService')"><router-link to="/ourService">Our Services </router-link></li>
                        <li @click="setRouteActive('portfolio')"><router-link to="/php">Portfolio</router-link></li>
                        <li @click="setRouteActive('ourTeam')"><router-link to="/ourteam">Our Team</router-link></li>
                        <li @click="setRouteActive('testimonial')"><router-link to="/testimonial">Testimonial</router-link></li>
                        <li @click="setRouteActive('contactus')"><router-link to="/contactus">Contact Us</router-link></li>
                        <!-- <li @click="setRouteActive('career')"><router-link to="/career">Career</router-link></li> -->
                     </ul>
                  </div>
                  <div class="col-lg-5 col-md-12 footer-widget">
                     <div class="footer-top footer_contactus" style="position: relative;top: 0;">
                        <div class="footer-box">
                           <i class="icon icon-location-pin"></i>
                           <div class="footer-box-content">
                              <h3>Visit Us</h3>
                              <p>Head Office: &nbsp; C-1204, A-Wing, STRATUM at Venus Grounds Nr. Jhansi ki Rani statue, Nehru Nagar, Ahmedabad, Gujarat 380015</p>
                              <hr class="footer_address_divider my-2">
                              <p>Branch Office: &nbsp; C-1204, A-Wing, STRATUM at Venus Grounds Nr. Jhansi ki Rani statue, Nehru Nagar, Ahmedabad, Gujarat 380015</p>
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
                              <p><a href="mailto:hr@d9ithub.com">hr@d9ithub.com</a> <br/> <a href="mailto:d9ithub@gmail.com">d9ithub@gmail.com</a></p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <!-- Footer Main-->
         <div class="copyright">
            <div class="container">
               <div class="row">
                  <div class="col-lg-12 col-md-12 text-center">
                     <div class="copyright-info"><span>Copyright © 2023 D9ITHUB. All Rights Reserved.</span></div>
                  </div>
               </div>
            </div>
         </div>
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