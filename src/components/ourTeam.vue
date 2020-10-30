<template>
  <div class="main_top_content">
    <navigation></navigation>
    <div class="header_about our_team">
      <div class="container">
        <!-- --------------------desktop------------- -->
        <div class="row desktop">
          <div class="col-sm-6"></div>
          <div class="col-md-6">
            <div class="main-timeline">
              <transition
                name="custom-classes-transition"
                enter-active-class="animated fadeInRight "
                leave-active-class="animated fadeOutRight "
              >
                <div v-if="show" :key="1" color="blue lighten-2" dark>
                  <div class="timeline">
                    <a href="#" class="timeline-content">
                      <h3 class="title">Digvijay Vaghela</h3>
                      <p class="description">Founder / Director.</p>
                      <!--  -->
                      <div class="team_circle_bg"></div>
                      <div class="timeline-icon">
                        <img src="assets/images/digvijayvaghela.jpg" alt>
                      </div>
                      <!-- <span class="timeline-year">About</span> -->
                    </a>
                  </div>
                </div>
              </transition>

              <transition
                name="custom-classes-transition"
                enter-active-class="animated fadeInLeft"
                leave-active-class="animated fadeOutLeft"
              >
                <!-- <div v-if="show" :key="2">
                                
                </div>-->
                <div v-if="show" :key="2" class="timeline">
                  <a href="#" class="timeline-content">
                    <h3 class="title">Dhruv Patel</h3>
                    <p class="description">Co - Founder / CEO.</p>
                    
                    <div class="team_circle_bg"></div>
                    <div class="timeline-icon">
                      <img src="assets/images/dhruvpatel.jpg" alt>
                    </div>
                  </a>
                </div>
              </transition>
                <div  :key="3" class="timeline" v-on:scroll="handleonscroll" data-aos="fade-right">
                  <a href="#" class="timeline-content">
                    <h3 class="title">Kandarp Pandya</h3>
                    <p class="description">Sr. Frontend / Web Developer.</p>
                    
                    <div class="team_circle_bg"></div>
                    <div class="timeline-icon">
                      <img src="assets/images/kandarppandya.jpg" alt>
                    </div>
                  </a>
                </div>
                <div  :key="4" class="timeline" data-aos="fade-right">
                  <a href="#" class="timeline-content" >
                    <h3 class="title">Palak Sukhadiya</h3>
                    <p class="description">Sr. UI/UX Designer.</p>
                    
                    <div class="team_circle_bg"></div>
                    <div class="timeline-icon">
                      <img src="assets/images/palaksukhadiya.jpg" alt>
                    </div>
                  </a>
                </div>
                <div  :key="5" class="timeline" v-on:scroll="handleonscroll" data-aos="fade-right">
                  <a href="#" class="timeline-content">
                    <h3 class="title">Amit Solanki</h3>
                    <p class="description">Sr. Laravel Developer.</p>
                    
                    <div class="team_circle_bg"></div>
                    <div class="timeline-icon">
                      <img src="assets/images/amitsolanki.png" alt>
                    </div>
                  </a>
                </div>
                <div  :key="6" class="timeline" data-aos="fade-right">
                  <a href="#" class="timeline-content">
                    <h3 class="title">Sandeep Singh</h3>
                    <p class="description">UI/UX Developer.</p>
                    
                    <div class="team_circle_bg"></div>
                    <div class="timeline-icon">
                      <img src="assets/images/sandeep_singh.jpg" alt>
                    </div>
                  </a>
                </div>
                <div  :key="7" class="timeline" data-aos="fade-right">
                  <a href="#" class="timeline-content">
                    <h3 class="title">Rushi Purohit</h3>
                    <p class="description">MEAN Stack Developer.</p>
                    
                    <div class="team_circle_bg"></div>
                    <div class="timeline-icon">
                      <img src="assets/images/rushi_purohit.jpg" alt>
                    </div>
                  </a>
                </div>
            </div>
          </div>
        </div>
         <!-- --------------------desktop------------- -->
         <!--------------- mobile -------------------->
        <div class="row mobile">
          
          <div class="col-md-12">
            <div class="main-timeline">
              <div class="owl-carousel owl-theme" id="team-slider">
              <div class="item">
                <div  :key="1" color="blue lighten-2" dark>
                  <div class="timeline">
                    <a href="#" class="timeline-content">
                      <h3 class="title">Digvijay Vaghela</h3>
                      <p class="description">Founder / Director.</p>
                      
                      <div class="team_circle_bg"></div>
                      <div class="timeline-icon">
                        <img src="assets/images/digvijayvaghela.jpg" alt>
                      </div>
                      <!-- <span class="timeline-year">About</span> -->
                    </a>
                  </div>
                </div>
              </div>
              <div class="item">
                <div  :key="2" class="timeline">
                  <a href="#" class="timeline-content">
                    <h3 class="title">Dhruv Patel</h3>
                    <p class="description">Co - Founder / CEO.</p>
                    
                    <div class="team_circle_bg"></div>
                    <div class="timeline-icon">
                      <img src="assets/images/dhruvpatel.jpg" alt>
                    </div>
                  </a>
                </div>
              </div>
              <div class="item">
                <div  :key="3" class="timeline" v-on:scroll="handleonscroll" >
                  <a href="#" class="timeline-content">
                    <h3 class="title">Kandarp Pandya</h3>
                    <p class="description">Sr. Frontend / Web Developer.</p>
                    
                    <div class="team_circle_bg"></div>
                    <div class="timeline-icon">
                      <img src="assets/images/kandarppandya.jpg" alt>
                    </div>
                  </a>
                </div>
              </div>
              <div class="item">
                <div  :key="4" class="timeline" >
                  <a href="#" class="timeline-content" >
                    <h3 class="title">Palak Sukhadiya</h3>
                    <p class="description">Sr. UI/UX Designer.</p>
                    
                    <div class="team_circle_bg"></div>
                    <div class="timeline-icon">
                      <img src="assets/images/palaksukhadiya.jpg" alt>
                    </div>
                  </a>
                </div>
              </div>
              <div class="item">
                <div  :key="5" class="timeline" v-on:scroll="handleonscroll" >
                  <a href="#" class="timeline-content">
                    <h3 class="title">Amit Solanki</h3>
                    <p class="description">Sr. Laravel Developer.</p>
                    
                    <div class="team_circle_bg"></div>
                    <div class="timeline-icon">
                      <img src="assets/images/amitsolanki.png" alt>
                    </div>
                  </a>
                </div>
              </div>
              <div class="item">
                <div  :key="6" class="timeline" >
                  <a href="#" class="timeline-content">
                    <h3 class="title">Sandeep Singh</h3>
                    <p class="description">UI/UX Developer.</p>
                    
                    <div class="team_circle_bg"></div>
                    <div class="timeline-icon">
                      <img src="assets/images/sandeep_singh.jpg" alt>
                    </div>
                  </a>
                </div>
              </div>
              <div class="item">
                <div  :key="7" class="timeline">
                  <a href="#" class="timeline-content">
                    <h3 class="title">Rushi Purohit</h3>
                    <p class="description">MEAN Stack Developer.</p>
                    
                    <div class="team_circle_bg"></div>
                    <div class="timeline-icon">
                      <img src="assets/images/rushi_purohit.jpg" alt>
                    </div>
                  </a>
                </div>
            </div>
            </div>
            </div>
          </div>
        </div>
         <!--------------- mobile -------------------->
      </div>
    </div>
  </div>
</template>

<script>
import navigation from "../components/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  components: {
    navigation
  },
  data: () => ({
    show: false,
    scrollShow3: false,
    scrollShow4: false,
    scrollShow5: false,
    scrollShow6: false,
    scrollShow7: false
  }),
  methods: {
    handleonscroll() {
      this.scrollShow = true;
    },
    handleonscroll1() {
      this.scrollShow1 = true;
    }
  },
  mounted() {
    this.show = true;
    
    $(document).ready(function() {
				  var owl = $('#team-slider');
				  owl.owlCarousel({
					items: 1,
					loop: true,
					margin: 10,
					autoplay: true,
					autoplayTimeout: 8000,
					autoplayHoverPause:false
				  });
				  $('.play').on('click', function() {
					owl.trigger('play.owl.autoplay', [1000])
				  })
				  $('.stop').on('click', function() {
					owl.trigger('stop.owl.autoplay')
				  })
        }) 
        
    AOS.init();

    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom" // defines which position of the element regarding to window should trigger the animation
    });
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleonscroll);
  }
};
</script>

