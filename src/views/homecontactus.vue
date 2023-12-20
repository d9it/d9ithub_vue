<template>
	<div>
		<div class="home_contactus">
			<div class="container py-0">
				<div class="homeservice_content">
					<p class="text_sub text-center" data-aos="zoom-in" data-aos-duration="1000">Contact Us</p>
				</div>
				<div class="contact-wrapper row">
					<div class="col-md-6">
						<img src="/assets/d9_images/contactus.png" alt="" title="" style="max-width:100%">
					</div>
					<div class="contact-box col-md-6 form-box">
						<form class="contact-form" >
							<div class="row">
								<div class="col-lg-12">
									<div class="form-group" data-aos="zoom-out-left" data-aos-duration="1000">
										<input class="form-control" id="name" name="name" placeholder="Your Name" type="text" required="">
									</div>
								</div>
								<!-- Col end-->
								<div class="col-lg-12">
									<div class="form-group" data-aos="zoom-out-left" data-aos-duration="1200">
										<input class="form-control " id="Email" name="Email" placeholder="Email" type="text" required="">
									</div>
								</div>
								<div class="col-lg-12">
									<div class="form-group" data-aos="zoom-out-left" data-aos-duration="1400">
										<input class="form-control" id="Phone" name="Phone" placeholder="Phone Number" type="text" required="">
									</div>
								</div>
								<div class="col-lg-12">
									<div class="form-group" data-aos="zoom-out-left" data-aos-duration="1600">
										<textarea class="form-control form-message required-field" id="message" placeholder="Comments" rows="5"></textarea>
									</div>
								</div>
								<!-- Col 12 end-->
							</div>
							<!-- Form row end-->
							<div class="text-right">
								<button class="btn btn_link mt-2" type="submit">Contact US</button>
							</div>
						</form>
						<!-- Form end-->
					</div>
				</div> 
				<div class="row home_contact_us_section">
					<div class="col-sm-6 col-lg-3">
						<div class="inner_contact">
							<div class="ts-contact-info">
								<span class="ts-contact-icon float-left"><i class="icon icon-location-pin"></i></span>
								<div class="ts-contact-content">
									<h3 class="ts-contact-title">Head Office</h3>
									<p>C-1204, A-Wing, STRATUM at Venus Grounds Nr. Jhansi ki Rani statue, Nehru Nagar, Ahmedabad, Gujarat 380015</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-6 col-lg-3">
						<div class="inner_contact">
							<div class="ts-contact-info">
								<!-- <span class="ts-contact-icon float-left"><i class="icon icon-location-pin"></i></span> -->
								<span class="ts-contact-icon float-left"><i class="icon icon-briefcase"></i></span>
								<div class="ts-contact-content">
									<h3 class="ts-contact-title">Branch Office</h3>
									<p>C-1204, A-Wing, STRATUM at Venus Grounds Nr. Jhansi ki Rani statue, Nehru Nagar, Ahmedabad, Gujarat 380015</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-6 col-lg-3">
						<div class="inner_contact">
							<div class="ts-contact-info">
								<span class="ts-contact-icon float-left"><i class="icon icon-phone"></i></span>
								<div class="ts-contact-content">
									<h3 class="ts-contact-title">Call Us</h3>
									<p>+91-756-745-6843<br/>+91-937-468-6975</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-6 col-lg-3">
						<div class="inner_contact">
							<div class="ts-contact-info last">
								<span class="ts-contact-icon float-left"><i class="icon icon-envelope-open"></i></span>
								<div class="ts-contact-content">
									<h3 class="ts-contact-title">Mail Us</h3>
									<p>hr@d9ithub.com <br/>d9ithub@gmail.com</p>
								</div>
							</div>
						</div>
					</div>
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