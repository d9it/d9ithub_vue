<template>
    <div>
       <div id="contactus" class="height_fixed"></div>
        <div class="home_contactus home_ourteam">
            <div class="container py-0">
               <div class="homeservice_content">
                  <p class="text_sub text-center">Contact Us</p>
               </div>
               <div class="row">
                  <div class="col-md-1"></div>
                  <div class="col-md-10">
                     <div class="contact-wrapper">
                        <div class="contact-box form-box">
                           <form class="contact-form" >
                              <div class="row">
                                 <div class="col-lg-12">
                                    <div class="form-group">
                                       <input class="form-control" id="name" name="name" placeholder="Your Name" type="text" required="">
                                    </div>
                                 </div>
                                 <!-- Col end-->
                                 <div class="col-lg-12">
                                    <div class="form-group">
                                       <input class="form-control " id="Email" name="Email" placeholder="Email" type="text" required="">
                                    </div>
                                 </div>
                                 <div class="col-lg-12">
                                    <div class="form-group">
                                       <input class="form-control" id="Phone" name="Phone" placeholder="Phone Number" type="text" required="">
                                    </div>
                                 </div>
                                 <div class="col-lg-12">
                                    <div class="form-group">
                                       <textarea class="form-control form-message required-field" id="message" placeholder="Comments" rows="8"></textarea>
                                    </div>
                                 </div>
                                 <!-- Col 12 end-->
                              </div>
                              <!-- Form row end-->
                              <div class="text-right">
                                 <button class="btn btn_blue mt-2" type="submit">Contact US</button>
                              </div>
                           </form>
                           <!-- Form end-->
                        </div>
                        <div class="contact-box info-box">
                           <div class="contact-info-right">
                              <div class="ts-contact-info"><span class="ts-contact-icon float-left"><i class="icon icon-location-pin"></i></span>
                                 <div class="ts-contact-content">
                                    <h3 class="ts-contact-title">Find Us</h3>
                                    <p>C/1102, Titanium City Center, Next To Sachin Tower, 100ft Anandnagar Road, Close to Prahladnagar, Ahmedabad</p>
                                 </div>
                                 <!-- Contact content end-->
                              </div>
                              <div class="ts-contact-info"><span class="ts-contact-icon float-left"><i class="icon icon-phone"></i></span>
                                 <div class="ts-contact-content">
                                    <h3 class="ts-contact-title">Call Us</h3>
                                    <p>+91-756-745-6843 , +91-937-468-6975</p>
                                 </div>
                                 <!-- Contact content end-->
                              </div>
                              <div class="ts-contact-info last"><span class="ts-contact-icon float-left"><i class="icon icon-envelope-open"></i></span>
                                 <div class="ts-contact-content">
                                    <h3 class="ts-contact-title">Mail Us</h3>
                                    <p>d9ithub@gmail.com</p>
                                 </div>
                                 <!-- Contact content end-->
                              </div>
                              <div class="ts-contact-info last"><span class="ts-contact-icon float-left"><i class="icon icon-clock"></i></span>
                                 <div class="ts-contact-content">
                                    <h3 class="ts-contact-title">Office Time</h3>
                                    <p>9-30 AM to 7-00 PM ( Monday - Friday )</p>
                                 </div>
                                 <!-- Contact content end-->
                              </div>
                              <ul class="contact-info-social-links">
                                 <li><a href="#"><i class="icon icon-social-facebook"></i></a></li>
                                 <li><a href="#"><i class="icon icon-social-twitter"></i></a></li>
                                 <li><a href="#"><i class="icon icon-social-google"></i></a></li>
                                 <li><a href="#"><i class="icon icon-social-linkedin"></i></a></li>
                                 <li><a href="#"><i class="icon icon-social-instagram"></i></a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-md-1"></div>
               </div>
            </div>
        </div>
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