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
                                       <textarea class="form-control form-message required-field" id="message" placeholder="Comments" rows="5"></textarea>
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
                              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.3250474631736!2d72.52253786596333!3d23.01183452131643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2988041721e1%3A0x89a4e253244ed3e2!2sD9ithub%20Software%20Solutions!5e0!3m2!1sen!2sin!4v1605087074724!5m2!1sen!2sin" width="100%" height="350" frameborder="0" style="border:0;border-radius: 12px;border: 6px solid #084ba2;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                              <!-- <div class="ts-contact-info"><span class="ts-contact-icon float-left"><i class="icon icon-location-pin"></i></span>
                                 <div class="ts-contact-content">
                                    <h3 class="ts-contact-title">Find Us</h3>
                                    <p>C/1102, Titanium City Center, Next To Sachin Tower, 100ft Anandnagar Road, Close to Prahladnagar, Ahmedabad</p>
                                 </div>
                              </div>
                              <div class="ts-contact-info"><span class="ts-contact-icon float-left"><i class="icon icon-phone"></i></span>
                                 <div class="ts-contact-content">
                                    <h3 class="ts-contact-title">Call Us</h3>
                                    <p>+91-756-745-6843 , +91-937-468-6975</p>
                                 </div>
                              </div>
                              <div class="ts-contact-info last"><span class="ts-contact-icon float-left"><i class="icon icon-envelope-open"></i></span>
                                 <div class="ts-contact-content">
                                    <h3 class="ts-contact-title">Mail Us</h3>
                                    <p>d9ithub@gmail.com</p>
                                 </div>
                              </div>
                              <div class="ts-contact-info last"><span class="ts-contact-icon float-left"><i class="icon icon-clock"></i></span>
                                 <div class="ts-contact-content">
                                    <h3 class="ts-contact-title">Office Time</h3>
                                    <p>9-30 AM to 7-00 PM ( Monday - Friday )</p>
                                 </div>
                              </div> -->
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