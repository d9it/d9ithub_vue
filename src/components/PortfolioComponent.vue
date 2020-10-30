<template>
  <div>
    <div class="main_top_content">
      <navigation></navigation>
      <div class>
        <div class="recipe-wrapper bg desktop">
          <div class="navigation">
            <i
              :class="{'js-navigate': true, 'js-left': true, 'icon-arrow-left-circle': true, 'icons': true, 'disabled': backDisable}"
              lick="forBack"
            ></i>
            <i
              :class="{'js-navigate': true, 'js-right': true, 'icon-arrow-right-circle': true, 'icons': true, 'disabled': nextDisable}"
              lick="forNext"
            ></i>
          </div>

          <div class="recipe-image">
            <div :class="{'recipe': true, 'active': showId == 1}">
              <img class="pie-photo" src="assets/images/ecommerce.png">
            </div>
            <div :class="{'recipe': true, 'active': showId == 2}">
              <img class="pie-photo" src="assets/images/mygov.png">
            </div>
            <div :class="{'recipe': true, 'active': showId == 3}">
              <img class="pie-photo" src="assets/images/re.png">
            </div>
            <div :class="{'recipe': true, 'active': showId == 4}">
              <img class="pie-photo" src="assets/images/onemagazine.png">
            </div>
            <div :class="{'recipe': true, 'active': showId == 5}">
              <img class="pie-photo" src="assets/images/erjaansolution.png">
            </div>
            <div :class="{'recipe': true, 'active': showId == 6}">
              <img class="pie-photo" src="assets/images/tierraocean.png">
            </div>
            <div :class="{'recipe': true, 'active': showId == 7}">
              <img class="pie-photo" src="assets/images/openskies-tech.png">
            </div>
            <div :class="{'recipe': true, 'active': showId == 8}">
              <img class="pie-photo" src="assets/images/justmydoc.png">
            </div>
            <div :class="{'recipe': true, 'active': showId == 9}">
              <img class="pie-photo" src="assets/images/sarapis.png">
            </div>
            <div :class="{'recipe': true, 'active': showId == 10}">
              <img class="pie-photo" src="assets/images/beth.png">
            </div>
            <div :class="{'recipe': true, 'active': showId == 11}">
              <img class="pie-photo" src="assets/images/jgrobo.png">
            </div>
            <div :class="{'recipe': true, 'active': showId == 12}">
              <img class="pie-photo" src="assets/images/draftanimal.png">
            </div>
          </div>
          <div class="recipe-content">
            <div :class="{'recipe': true, 'active': showId == 1, 'blue': true}">
              <div class="recipe-content-inner">
                <div class="inner_portfolio">
                  <h1 class="pie-name">Ecommerce</h1>
                  <div class="pie-serving">
                    <img src="assets/images/LaravelLogo.png" alt>
                    <img src="assets/images/HTML_Logo.png" alt>
                    <img src="assets/images/css3.png" alt>
                    <img src="assets/images/bootstrap-stack.png" alt>
                    <img src="assets/images/vue.png" alt>
                  </div>
                  <div
                    class="pie-context"
                  >This ecommerce site based in UAE. The site offers quality of products for peoples.</div>
                  <div class="pie-cta">
                    <router-link to>See More</router-link>
                  </div>
                </div>
              </div>
            </div>
            <div :class="{'recipe': true, 'active': showId == 2}">
              <div class="recipe-content-inner">
                <div class="inner_portfolio">
                  <h1 class="pie-name">MyGov.NYC</h1>
                  <div class="pie-serving">
                    <img src="assets/images/HTML_Logo.png" alt>
                    <img src="assets/images/css3.png" alt>
                    <img src="assets/images/bootstrap-stack.png" alt>
                    <img src="assets/images/wordpress2.png" alt>
                  </div>
                  <div class="pie-context">
                    We believe that a path to a more effective NYC government, one that produces better and projects and services with for less money and in less time, requires two things:
                    <ul style="text-align:left;">
                      <li>
                        <b>Transparency</b> so the public can see how government turns taxpayer money into projects and services                      </li>
                      <li>
                        <b>Participation</b> so the public can direct the government’s actions and holding it accountable.
                      </li>
                    </ul>
                  </div>
                  <div class="pie-cta">
                    <router-link to>See More</router-link>
                  </div>
                </div>
              </div>
            </div>
            <div :class="{'recipe': true, 'active': showId == 3, 'green': true}">
              <div class="recipe-content-inner">
                <div class="inner_portfolio">
                  <h1 class="pie-name">Renaissance - Divi Site</h1>
                  <div class="pie-serving">
                    <img src="assets/images/divitheme.png" alt>
                    <img src="assets/images/HTML_Logo.png" alt>
                    <img src="assets/images/css3.png" alt>
                    <img src="assets/images/bootstrap-stack.png" alt>
                    <img src="assets/images/wordpress2.png" alt>
                  </div>
                  <div
                    class="pie-context"
                  >Renaissance Studio of Design is a New York based web design company focusing on developing dynamic, cost effective, and easy to use websites and graphic designs.</div>
                  <div class="pie-cta">
                    <router-link to>See More</router-link>
                  </div>
                </div>
              </div>
            </div>
            <div :class="{'recipe': true, 'active': showId == 4, 'yellow': true}">
              <div class="recipe-content-inner">
                <div class="inner_portfolio">
                  <h1 class="pie-name">One.Sprocketmedia</h1>
                  <div class="pie-serving">
                    <img src="assets/images/LaravelLogo.png" alt>
                    <img src="assets/images/HTML_Logo.png" alt>
                    <img src="assets/images/css3.png" alt>
                    <img src="assets/images/bootstrap-stack.png" alt>
                    <img src="assets/images/vue.png" alt>
                  </div>
                  <div class="pie-context">
                    There’s a sea of marketing tools at your disposal. But how many help you promote yourself not only as an expert in your field, but as someone who genuinely cares about the people you provide your services?
                    <br>
                    <br>You’ve always offered insights. And now you can offer inspiration.
                    This is where ONE delivers.
                  </div>
                  <div class="pie-cta">
                    <router-link to>See More</router-link>
                  </div>
                </div>
              </div>
            </div>
            <div :class="{'recipe': true, 'active': showId == 5, 'brown': true}">
              <div class="recipe-content-inner">
                <div class="inner_portfolio">
                  <h1 class="pie-name">Erjaan Solutions</h1>
                  <div class="pie-serving">
                    <img src="assets/images/LaravelLogo.png" alt>
                    <img src="assets/images/HTML_Logo.png" alt>
                    <img src="assets/images/css3.png" alt>
                    <img src="assets/images/bootstrap-stack.png" alt>
                  </div>
                  <div class="pie-context">
                    Erjaan is a Saudi company specializing in cloud smart surveys solutions aiming to help organizations in business , healthcare and education sectors to make smarter decisions to drive growth by collecting and analyzing the right data from the right sources.
                    <br>
                    <br>Erjaan is used by businesses, educational institutions, students, and healthcare provider to build, send , collect and analyze data every day.
                  </div>
                  <div class="pie-cta">
                    <router-link to>See More</router-link>
                  </div>
                </div>
              </div>
            </div>
            <div :class="{'recipe': true, 'active': showId == 6, 'blue': true}">
              <div class="recipe-content-inner">
                <div class="inner_portfolio">
                  <h1 class="pie-name">Tierra Oceano</h1>
                  <div class="pie-serving">
                    <img src="assets/images/HTML_Logo.png" alt>
                    <img src="assets/images/css3.png" alt>
                    <img src="assets/images/bootstrap-stack.png" alt>
                    <img src="assets/images/wordpress2.png" alt>
                  </div>
                  <div
                    class="pie-context"
                  >We strive to make beautiful, lasting products that are eco-friendly, and that you can use with pride.</div>
                  <div class="pie-cta">
                    <router-link to>See More</router-link>
                  </div>
                </div>
              </div>
            </div>
            <div :class="{'recipe': true, 'active': showId == 7, 'red': true}">
              <div class="recipe-content-inner">
                <div class="inner_portfolio">
                  <h1 class="pie-name">Openskies Tech’s</h1>
                  <div class="pie-serving">
                    <img src="assets/images/HTML_Logo.png" alt>
                    <img src="assets/images/css3.png" alt>
                    <img src="assets/images/bootstrap-stack.png" alt>
                    <img src="assets/images/wordpress2.png" alt>
                  </div>
                  <div
                    class="pie-context"
                  >Openskies Tech’s goal is to transition work process from client location to its delivery center, risk free, rapidly and seamlessly. With a carefully designed process life cycle framework</div>
                  <div class="pie-cta">
                    <router-link to>See More</router-link>
                  </div>
                </div>
              </div>
            </div>
            <div :class="{'recipe': true, 'active': showId == 8, 'pink': true}">
              <div class="recipe-content-inner">
                <div class="inner_portfolio">
                  <h1 class="pie-name">Just Mydoc</h1>
                  <div class="pie-serving">
                    <img src="assets/images/HTML_Logo.png" alt>
                    <img src="assets/images/css3.png" alt>
                    <img src="assets/images/bootstrap-stack.png" alt>
                    <img src="assets/images/wordpress2.png" alt>
                  </div>
                  <div class="pie-context">
                    JustMyDoc is the Virtual Patient Medical Home platform that will revolutionize our healthcare system by lowering cost at the consumer level.
                    <br>
                    <br>The growth of self-insured health plans is fast and furious. Which makes JustMyDoc the ideal, long-term solution to help control and even lower these costs at the employer level.
                  </div>
                  <div class="pie-cta">
                    <router-link to>See More</router-link>
                  </div>
                </div>
              </div>
            </div>
            <div :class="{'recipe': true, 'active': showId == 9, 'red': true}">
              <div class="recipe-content-inner">
                <div class="inner_portfolio">
                  <h1 class="pie-name">Sarapis</h1>
                  <div class="pie-serving">
                    <img src="assets/images/HTML_Logo.png" alt>
                    <img src="assets/images/css3.png" alt>
                    <img src="assets/images/bootstrap-stack.png" alt>
                    <img src="assets/images/wordpress2.png" alt>
                  </div>
                  <div
                    class="pie-context"
                  >Sarapis is a New York-state incorporated, federally designated 501.c.3 nonprofit organization. Contributions to Sarapis are tax-deductible. The organization was formed in 2010 for “charitable and educational purposes”, which it accomplishes “by providing free consultations, trainings, and educational resources to nonprofit organizations to help them develop and deploy free/libre/open­source (“FLO”) technologies in order to operate more effectively.”</div>
                  <div class="pie-cta">
                    <router-link to>See More</router-link>
                  </div>
                </div>
              </div>
            </div>
            <div :class="{'recipe': true, 'active': showId == 10, 'green': true}">
              <div class="recipe-content-inner">
                <div class="inner_portfolio">
                  <h1 class="pie-name">Beth Clifton Properties</h1>
                  <div class="pie-serving">
                    <img src="assets/images/HTML_Logo.png" alt>
                    <img src="assets/images/css3.png" alt>
                    <img src="assets/images/bootstrap-stack.png" alt>
                    <img src="assets/images/wordpress2.png" alt>
                  </div>
                  <div
                    class="pie-context"
                  >Beth serves as a Real Estate Agent at The Boulevard Company, and specializes in applying her ethics, experience and expertise to representing buyers and sellers. Additionally, Beth is a sought after consultant. She is a seasoned renovator and builder of fine homes and has spent decades cultivating her discerning eye for the ideal property and design.</div>
                  <div class="pie-cta">
                    <router-link to>See More</router-link>
                  </div>
                </div>
              </div>
            </div>
            <div :class="{'recipe': true, 'active': showId == 11, 'yellow': true}">
              <div class="recipe-content-inner">
                <div class="inner_portfolio">
                  <h1 class="pie-name">Jgrobo Marketing</h1>
                  <div class="pie-serving">
                    <img src="assets/images/HTML_Logo.png" alt>
                    <img src="assets/images/css3.png" alt>
                    <img src="assets/images/bootstrap-stack.png" alt>
                    <img src="assets/images/wordpress2.png" alt>
                  </div>
                  <div
                    class="pie-context"
                  >Founded in 2014, we are industry leaders in the development of marketing automation systems, call center – CRM integrations, fully-integrated lead validation/verification tools, and lead processing solutions. We have developed solutions that work seamlessly with a range of popular CRMs such as: Infusionsoft, Active Campaign, ONTRAPORT, Salesforce, and GreenRope. JGRobo Marketing, Inc. is an Infusionsoft Certified Partner Company. Our specialty is integrating complex, multiple-source lead marketing campaign data into our client’s existing business and marketing software suites.</div>
                  <div class="pie-cta">
                    <router-link to>See More</router-link>
                  </div>
                </div>
              </div>
            </div>
            <div :class="{'recipe': true, 'active': showId == 12, 'pink': true}">
              <div class="recipe-content-inner">
                <div class="inner_portfolio">
                  <h1 class="pie-name">Draft Animal Power</h1>
                  <div class="pie-serving">
                    <img src="assets/images/HTML_Logo.png" alt>
                    <img src="assets/images/css3.png" alt>
                    <img src="assets/images/bootstrap-stack.png" alt>
                    <img src="assets/images/wordpress2.png" alt>
                  </div>
                  <div
                    class="pie-context"
                  >The goal of the Draft Animal-Power Network is to provide year-round educational and networking opportunities, highlighting ongoing efforts of people throughout the region who are educating, mentoring and building community around animal-power and renewable land use. Our mission: Advancing the use of draft animals and promoting sustainable land stewardship to build community through education and networking.</div>
                  <div class="pie-cta">
                    <router-link to>See More</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mobile">
          <div class="nav_area">
            <i 
              :class="{'js-navigate': true, 'js-left': true, 'icon-arrow-left-circle': true, 'icons': true, 'disabled': backDisable1}"
              lick="forBack1"
            ></i>
            <i
              :class="{'js-navigate': true, 'js-right': true, 'icon-arrow-right-circle': true, 'icons': true, 'disabled': nextDisable1}"
              lick="forNext1"
            ></i>
           </div>
        
          <!-- <div class="navigation">
            <button lick="newentry++" :disabled="newentry==12"><i class="icon-circle-arrow-right"></i></button>
            <button lick="newentry--" :disabled="newentry==1" ><i class="icon-circle-arrow-left"></i></button>
          </div> -->
          <!-- ------------------one  -------------->
          <div class="main_content_portfolio" v-if="newentry == 1">
            <div class="main_image_container" data-aos="fade-right">
              <img class="pie-photo" src="assets/images/ecommerce.png">
            </div>
            <div class="inner_portfolio" data-aos="fade-left">
              <h1 class="pie-name">Ecommerce</h1>
              <div class="pie-serving">
                <img src="assets/images/LaravelLogo.png" alt>
                <img src="assets/images/HTML_Logo.png" alt>
                <img src="assets/images/css3.png" alt>
                <img src="assets/images/bootstrap-stack.png" alt>
                <img src="assets/images/vue.png" alt>
              </div>
              <div
                class="pie-context"
              >This ecommerce site based in UAE. The site offers quality of products for peoples.</div>
              <div class="pie-cta">
                <router-link to>See More</router-link>
              </div>
            </div>
          </div>
          <!-------------------- two ---------------->
          <div class="main_content_portfolio" v-if="newentry == 2">
            <div class="main_image_container" data-aos="fade-left">
              <img class="pie-photo" src="assets/images/mygov.png">
            </div>
            <div class="inner_portfolio" data-aos="fade-left">
              <h1 class="pie-name">MyGov.NYC</h1>
              <div class="pie-serving">
                <img src="assets/images/HTML_Logo.png" alt>
                <img src="assets/images/css3.png" alt>
                <img src="assets/images/bootstrap-stack.png" alt>
                <img src="assets/images/wordpress2.png" alt>
              </div>
              <div class="pie-context">
                We believe that a path to a more effective NYC government, one that produces better and projects and services with for less money and in less time, requires two things:
                <ul style="text-align:left;">
                  <li>
                    <b>Transparency</b> so the public can see how government turns taxpayer money into projects and services                  </li>
                  <li>
                    <b>Participation</b> so the public can direct the government’s actions and holding it accountable.
                  </li>
                </ul>
              </div>
              <div class="pie-cta">
                <router-link to>See More</router-link>
              </div>
            </div>
          </div>
          <!------------------- three---------------------------- -->
          <div class="main_content_portfolio" v-if="newentry == 3">
            <div class="main_image_container" data-aos="fade-right" >
              <img class="pie-photo" src="assets/images/re.png">
            </div>
            <div class="inner_portfolio" data-aos="fade-left">
              <h1 class="pie-name">Renaissance - Divi Site</h1>
              <div class="pie-serving">
                <img src="assets/images/divitheme.png" alt>
                <img src="assets/images/HTML_Logo.png" alt>
                <img src="assets/images/css3.png" alt>
                <img src="assets/images/bootstrap-stack.png" alt>
                <img src="assets/images/wordpress2.png" alt>
              </div>
              <div
                class="pie-context"
              >Renaissance Studio of Design is a New York based web design company focusing on developing dynamic, cost effective, and easy to use websites and graphic designs.</div>
              <div class="pie-cta">
                <router-link to>See More</router-link>
              </div>
            </div>
          </div>

          <!------------------- Four------------------------------>

          <div class="main_content_portfolio" v-if="newentry == 4">
            <div class="main_image_container" data-aos="fade-left">
              <img class="pie-photo" src="assets/images/onemagazine.png">
            </div>
            <div class="inner_portfolio" data-aos="fade-left">
              <h1 class="pie-name">One.Sprocketmedia</h1>
              <div class="pie-serving">
                <img src="assets/images/LaravelLogo.png" alt>
                <img src="assets/images/HTML_Logo.png" alt>
                <img src="assets/images/css3.png" alt>
                <img src="assets/images/bootstrap-stack.png" alt>
                <img src="assets/images/vue.png" alt>
              </div>
              <div class="pie-context">
                There’s a sea of marketing tools at your disposal. But how many help you promote yourself not only as an expert in your field, but as someone who genuinely cares about the people you provide your services?
                <br>
                <br>You’ve always offered insights. And now you can offer inspiration.
                This is where ONE delivers.
              </div>
              <div class="pie-cta">
                <router-link to>See More</router-link>
              </div>
            </div>
          </div>

          <!------------------- five------------------------------>
          <div class="main_content_portfolio" v-if="newentry == 5">
            <div class="main_image_container" data-aos="fade-right">
              <img class="pie-photo" src="assets/images/erjaansolution.png">
            </div>
            <div class="inner_portfolio" data-aos="fade-left">
              <h1 class="pie-name">Erjaan Solutions</h1>
              <div class="pie-serving">
                <img src="assets/images/LaravelLogo.png" alt>
                <img src="assets/images/HTML_Logo.png" alt>
                <img src="assets/images/css3.png" alt>
                <img src="assets/images/bootstrap-stack.png" alt>
              </div>
              <div class="pie-context">
                Erjaan is a Saudi company specializing in cloud smart surveys solutions aiming to help organizations in business , healthcare and education sectors to make smarter decisions to drive growth by collecting and analyzing the right data from the right sources.
                <br>
                <br>Erjaan is used by businesses, educational institutions, students, and healthcare provider to build, send , collect and analyze data every day.
              </div>
              <div class="pie-cta">
                <router-link to>See More</router-link>
              </div>
            </div>
          </div>
          <!------------------- Six------------------------------>
          <div class="main_content_portfolio" v-if="newentry == 6">
            <div class="main_image_container" data-aos="fade-left">
              <img class="pie-photo" src="assets/images/tierraocean.png">
            </div>
            <div class="inner_portfolio" data-aos="fade-left">
              <h1 class="pie-name">Tierra Oceano</h1>
              <div class="pie-serving">
                <img src="assets/images/HTML_Logo.png" alt>
                <img src="assets/images/css3.png" alt>
                <img src="assets/images/bootstrap-stack.png" alt>
                <img src="assets/images/wordpress2.png" alt>
              </div>
              <div
                class="pie-context"
              >We strive to make beautiful, lasting products that are eco-friendly, and that you can use with pride.</div>
              <div class="pie-cta">
                <router-link to>See More</router-link>
              </div>
            </div>
          </div>

          <!------------------- Seven------------------------------>
          <div class="main_content_portfolio" v-if="newentry == 7">
            <div class="main_image_container" data-aos="fade-right">
              <img class="pie-photo" src="assets/images/openskies-tech.png">
            </div>
            <div class="inner_portfolio" data-aos="fade-left">
              <h1 class="pie-name">Openskies Tech’s</h1>
              <div class="pie-serving">
                <img src="assets/images/HTML_Logo.png" alt>
                <img src="assets/images/css3.png" alt>
                <img src="assets/images/bootstrap-stack.png" alt>
                <img src="assets/images/wordpress2.png" alt>
              </div>
              <div
                class="pie-context"
              >Openskies Tech’s goal is to transition work process from client location to its delivery center, risk free, rapidly and seamlessly. With a carefully designed process life cycle framework</div>
              <div class="pie-cta">
                <router-link to>See More</router-link>
              </div>
            </div>
          </div>
          <!------------------- Eight------------------------------>
          <div class="main_content_portfolio" v-if="newentry == 8">
            <div class="main_image_container" data-aos="fade-left">
              <img class="pie-photo" src="assets/images/justmydoc.png">
            </div>
            <div class="inner_portfolio" data-aos="fade-left">
              <h1 class="pie-name">Just Mydoc</h1>
              <div class="pie-serving">
                <img src="assets/images/HTML_Logo.png" alt>
                <img src="assets/images/css3.png" alt>
                <img src="assets/images/bootstrap-stack.png" alt>
                <img src="assets/images/wordpress2.png" alt>
              </div>
              <div class="pie-context">
                JustMyDoc is the Virtual Patient Medical Home platform that will revolutionize our healthcare system by lowering cost at the consumer level.
                <br>
                <br>The growth of self-insured health plans is fast and furious. Which makes JustMyDoc the ideal, long-term solution to help control and even lower these costs at the employer level.
              </div>
              <div class="pie-cta">
                <router-link to>See More</router-link>
              </div>
            </div>
          </div>
          <!------------------- nine------------------------------>
          <div class="main_content_portfolio" v-if="newentry == 9">
            <div class="main_image_container" data-aos="fade-right">
              <img class="pie-photo" src="assets/images/sarapis.png">
            </div>
            <div class="inner_portfolio" data-aos="fade-left">
              <h1 class="pie-name">Sarapis</h1>
              <div class="pie-serving">
                <img src="assets/images/HTML_Logo.png" alt>
                <img src="assets/images/css3.png" alt>
                <img src="assets/images/bootstrap-stack.png" alt>
                <img src="assets/images/wordpress2.png" alt>
              </div>
              <div
                class="pie-context"
              >Sarapis is a New York-state incorporated, federally designated 501.c.3 nonprofit organization. Contributions to Sarapis are tax-deductible. The organization was formed in 2010 for “charitable and educational purposes”, which it accomplishes “by providing free consultations, trainings, and educational resources to nonprofit organizations to help them develop and deploy free/libre/open­source (“FLO”) technologies in order to operate more effectively.”</div>
              <div class="pie-cta">
                <router-link to>See More</router-link>
              </div>
            </div>
          </div>
          <!------------------- ten------------------------------>
          <div class="main_content_portfolio" v-if="newentry == 10">
            <div class="main_image_container" data-aos="fade-left">
              <img class="pie-photo" src="assets/images/beth.png">
            </div>
            <div class="inner_portfolio" data-aos="fade-left">
              <h1 class="pie-name">Beth Clifton Properties</h1>
              <div class="pie-serving">
                <img src="assets/images/HTML_Logo.png" alt>
                <img src="assets/images/css3.png" alt>
                <img src="assets/images/bootstrap-stack.png" alt>
                <img src="assets/images/wordpress2.png" alt>
              </div>
              <div
                class="pie-context"
              >Beth serves as a Real Estate Agent at The Boulevard Company, and specializes in applying her ethics, experience and expertise to representing buyers and sellers. Additionally, Beth is a sought after consultant. She is a seasoned renovator and builder of fine homes and has spent decades cultivating her discerning eye for the ideal property and design.</div>
              <div class="pie-cta">
                <router-link to>See More</router-link>
              </div>
            </div>
          </div>
          <!------------------- Eleven------------------------------>
          <div class="main_content_portfolio" v-if="newentry == 11">
            <div class="main_image_container" data-aos="fade-right">
              <img class="pie-photo" src="assets/images/jgrobo.png">
            </div>
            <div class="inner_portfolio" data-aos="fade-left">
              <h1 class="pie-name">Tierra Oceano</h1>
              <div class="pie-serving">
                <img src="assets/images/HTML_Logo.png" alt>
                <img src="assets/images/css3.png" alt>
                <img src="assets/images/bootstrap-stack.png" alt>
                <img src="assets/images/wordpress2.png" alt>
              </div>
              <div
                class="pie-context"
              >We strive to make beautiful, lasting products that are eco-friendly, and that you can use with pride.</div>
              <div class="pie-cta">
                <router-link to>See More</router-link>
              </div>
            </div>
          </div>
          <!----------------------tWELE--------------------------->
          <div class="main_content_portfolio" v-if="newentry == 12">
            <div class="main_image_container" data-aos="fade-left">
              <img class="pie-photo" src="assets/images/draftanimal.png">
            </div>
            <div class="inner_portfolio" data-aos="fade-left">
              <h1 class="pie-name">Draft Animal Power</h1>
              <div class="pie-serving">
                <img src="assets/images/HTML_Logo.png" alt>
                <img src="assets/images/css3.png" alt>
                <img src="assets/images/bootstrap-stack.png" alt>
                <img src="assets/images/wordpress2.png" alt>
              </div>
              <div
                class="pie-context"
              >The goal of the Draft Animal-Power Network is to provide year-round educational and networking opportunities, highlighting ongoing efforts of people throughout the region who are educating, mentoring and building community around animal-power and renewable land use. Our mission: Advancing the use of draft animals and promoting sustainable land stewardship to build community through education and networking.</div>
              <div class="pie-cta">
                <router-link to>See More</router-link>
              </div>
            </div>
          </div>
        </div>
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
    showId: 1,
    showCount: 12,
    backDisable: true,
    nextDisable: false,
    backDisable1: true,
    nextDisable1: false,
    newentry: 1

  }),
  mounted() {
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

    $(document).ready(function() {
      // Add smooth scrolling to all links
      $(".development_menu_tab").on("click", function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $("html, body").animate(
            {
              scrollTop: $(hash).offset().top
            },
            800,
            function() {
              // Add hash (#) to URL when done scrolling (default click behavior)
              // window.location.hash = hash;
            }
          );
        } // End if
      });
    });
  },
  methods: {
    forNext() {
      if (this.showId == 12) {
        this.nextDisable = true;
      } else {
        this.showId++;
      }
      this.backDisable = false;
    },
    forBack() {
      if (this.showId == 1) {
        this.backDisable = true;
      } else {
        this.showId--;
      }
      this.nextDisable = false;
    },
    forNext1() {
    
      if (this.newentry == 12) {
        this.nextDisable1 = true;
      } else {
        this.newentry++;
      }
      this.backDisable1 = false;
    },
    forBack1() {
      if (this.newentry == 1) {
        this.backDisable1 = true;
      } else {
        this.newentry--;
      }
      this.nextDisable1 = false;
    }
  }
};
</script>
<style scoped>

</style>
