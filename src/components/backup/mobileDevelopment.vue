<template>
  <div class="inner_pages">
    <navigation></navigation>
    <div class="breadcume our_services">
		<div class="container">
			<div class="breadcume_inner">
				<div class="breadcume_title">
					<h1>Our Services</h1>
					<ul class="nav justify-content-center nav-justified">
						<li class="nav-item active">
							<router-link class="nav-link color_white" to="/ourService/webdevelopment">
								<img src="/assets/d9_images/webdevelopment.png" alt="" title="" height="70"><br/>
								Web <br/>Development
							</router-link>
						</li>
						<li class="nav-item">
							<router-link class="nav-link color_white" to="/ourService/webdesign">
								<img src="/assets/d9_images/website_design.png" alt="" title="" height="70"><br/>
								Graphics <br/>Design
							</router-link>
						</li>
						<li class="nav-item">
							<router-link class="nav-link color_white" to="/ourService/cmsandecommerce">
								<img src="/assets/d9_images/ecommerce.png" alt="" title="" height="70"><br/>
								CMS & <br/>Ecommerce
							</router-link>
						</li>
						<li class="nav-item">
							<router-link class="nav-link color_white" to="/ourService/mobileDevelopment">
								<img src="/assets/d9_images/mobile_development.png" alt="" title="" height="70"><br/>
								Mobile <br/>Development
							</router-link>
						</li>
						<li class="nav-item">
							<router-link class="nav-link color_white" to="/ourService/enterpriseSolution">
								<img src="/assets/d9_images/enterprise.png" alt="" title="" height="70"><br/>
								Enterprice <br/>Solutions
							</router-link>
						</li>
						<li class="nav-item">
							<router-link class="nav-link color_white" to="/ourService/hireDedicatedResource">
								<img src="/assets/d9_images/hire_developer.png" alt="" title="" height="70"><br/>
								Hire <br/>Developers
							</router-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
    <div class="webdevelopment_services all_services appDevelopment">
        <div class="col-sm-6 left_services">
            <div class="services_text">
              <h2>Mobile App Development</h2>
              <ul>
                  <li><a class="development_menu_tab" href="#php">Android App Development</a></li>
                  <li><a class="development_menu_tab" href="#laravel">Iphone App Development</a></li>
                  <li><a class="development_menu_tab" href="#vue">Ipad App Development</a></li>
                  <li><a class="development_menu_tab" href="#wordpress">Cross Platform Mobile Development</a></li>
                  <!-- <li><a class="development_menu_tab" href="#react">React Js Development</a></li>
                  <li><a class="development_menu_tab" href="#node">Node JS Development</a></li> -->
              </ul>
            </div>
        </div>
        <div class="col-sm-6" style="padding:0px;">
          <div class="right_services"></div>
        </div>
    </div>

    <!-- android development  -->
      <div class="android all_services" id="php">
          <div class="col-sm-6 right_services"><div class="bg_img"></div></div>
          <div class="col-sm-6 left_services">
              <div class="services_text">
                <h2>Android App Development</h2>
                <p>Why D9ITHUB The best part with Android Apps are their user friendly and versatile nature. D9ITHUB with the set of expert developers develop apps which is in par with the latest updates that meets the expectations of the clients. The first step in our process of creating the Android Applications is to have an incisive research and apply the tools and technologies. This helps us to shape up a customized, powerful application which are scalable across any Android device. D9ITHUB also offers android development services in a global basis..</p>

                <!-- <p>Our team of skilled Android App Development focuses on providing customer centric solutions aimed at creating new opportunities for enterprises.</p>
                <ul>
                    <li><a>Open Source CMS/CRM/ERP Solutions</a></li>
                    <li><a>E-commerce Solutions</a></li>
                    <li><a>Database management</a></li>
                    <li><a>Customization and development of PHP frameworks</a></li>
                </ul> -->
              </div>
          </div>
      </div>
    <!-- android development -->

    <!-- Iphone development -->
        <div class=" all_services Iphone" id="laravel">
          <div class="col-sm-6 left_services">
              <div class="services_text">
                <h2>Iphone App Development</h2>
                <p>This fact has encouraged businesses to enhance their growth through this platform but the quality is utmost important. Graphic designs needs to be implemented with at most perfection otherwise the usage of the app almost diminishes. D9ithub has great set of iPhone app developers who are in pair with the guidelines of the iOS and thereby develop a great user interface. Frameworks, thematic structures along with the UI/UX also plays an important role for developing your iPhone application and we make sure the best is delivered every single time.</p>
              </div>
          </div>
          <div class="col-sm-6 right_services"><div class="bg_img"></div></div>
      </div>
    <!-- Iphone development -->

    <!-- Ipad development -->
        <div class="Ipad all_services" id="vue">
          <div class="col-sm-6 right_services"><div class="bg_img"></div></div>
          <div class="col-sm-6 left_services">
              <div class="services_text">
                <h2>Ipad App Development</h2>
                <p>Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.</p>
              </div>
          </div>
      </div>
    <!-- Ipad development -->

    <!-- Cross_platform development -->
        <div class="Cross_platform all_services" id="wordpress">
          <div class="col-sm-6 left_services">
              <div class="services_text">
                <h2>Cross Platform Mobile Development</h2>
                <p>D9ITHUB make sure that all the apps coded once run on the multiple mobile platforms with ease. Every mobile device has its own screen and resolution. We bring out designs that bring in the best UI navigation and the user experience similar to that of the native mobile applications. Our hybrid set of apps suits any type of industry whether a start-up or an enterprise in the most affordable manner..</p>

                <!-- <ul>
                    <li><a>WordPress CMS Development & Integration</a></li>
                    <li><a>WordPress Website Development & Customization</a></li>
                    <li><a>WordPress Website Design & Themes</a></li>
                    <li><a>WordPress Design Integration</a></li>
                </ul> -->
              </div>
          </div>
          <div class="col-sm-6 right_services"><div class="bg_img"></div></div>
      </div>
    <!-- Cross_platformdevelopment -->

    <!-- React development  -->
      <!-- <div class="react all_services" id="react">
          <div class="col-sm-6 right_services"><div class="bg_img"></div></div>
          <div class="col-sm-6 left_services">
              <div class="services_text">
                <h2>React JS Development</h2>
                <p>D9ITHUB offers custom PHP Web Application Development Services to build an app using the latest PHP frameworks. As a leading PHP Development company, we offer expertise in developing scalable apps, as well as APIs.</p>

                <p>Our team of skilled PHP developers focuses on providing customer centric solutions aimed at creating new opportunities for enterprises.</p>
                <ul>
                    <li><a>Open Source CMS/CRM/ERP Solutions</a></li>
                    <li><a>E-commerce Solutions</a></li>
                    <li><a>Database management</a></li>
                    <li><a>Customization and development of PHP frameworks</a></li>
                </ul>
              </div>
          </div>
      </div> -->
    <!-- React development -->

    <!-- Node js development -->
        <!-- <div class="node all_services" id="node">
          <div class="col-sm-6 left_services">
              <div class="services_text">
                <h2>Node JS Development</h2>
                <p>D9ITHUB a leading WordPress development company in India, USA providing deep architectural and implementation knowledge in enterprise level WordPress portal design, information architecture, development and support. We have successfully delivered WordPress sites for SMEs, brands, publishers and large enterprise level company. Our expertise is focused on designing and developing WordPress Sites of all complexity and magnitude right from startups to complex responsive multi-site installations for big companies.</p>
              </div>
          </div>
          <div class="col-sm-6 right_services"><div class="bg_img"></div></div>
      </div> -->
    <!-- Node js development -->
  </div>
</template>
    



<script>
import navigation from "../components/navigation";

export default {
  components: {
    navigation
  },
  data: () => ({
    show: false
  }),
  mounted(){
      $(document).ready(function(){
      // Add smooth scrolling to all links
      $(".development_menu_tab").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            // window.location.hash = hash;
          });
        } // End if
      });
    });
  }
  
};



</script>

<style>
</style>
