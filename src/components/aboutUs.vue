<template>
	<div class="inner_pages">
		<navigation></navigation>
		<!-- START Breadcume area -->
		<div class="breadcume our_services innerall">
			<div class="container">
				<div class="breadcume_inner">
					<div class="breadcume_title">
						<h1 data-aos="zoom-in" data-aos-duration="1200">About D9ITHUB</h1>
					</div>
				</div>
			</div>
		</div>
		<!-- end Breadcume area -->
		<div class="container">
			<div class="inner_about mb-5 pb-5">
				<div class="row">
					<div class="col-md-1 col-lg-1"></div>
					<div class="col-md-5 col-sm-6 col-12"  data-aos="zoom-in" data-aos-duration="1200">
						<img src="/assets/d9_images/who_we_are.png" alt="" title="">
					</div>
					<div class="col-md-5 col-sm-6 col-12">
						<div class="right_about_slide home_abouttext pt-5">
							<h3 class="devider-bottom" data-aos="fade-left" data-aos-duration="1000">Who We Are?</h3>
							<p class="mt-3" data-aos="fade-left" data-aos-duration="1500">We are team of people who are dedicated, experienced and motivated for providing best quality products. We believe in 100% customer satisfaction and we always try to provide excellent quality products to the customers over the world. It does not matter which country the client belongs to, we have clients around the globe.</p>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-1 col-lg-1"></div>
					<div class="col-md-5 col-sm-6 col-12">
						<div class="right_about_slide home_abouttext pt-5">
							<h3 class="devider-bottom" data-aos="fade-right" data-aos-duration="1000">What We Do?</h3>
							<p class="mt-3" data-aos="fade-right" data-aos-duration="1500">We love creating easy to use, effective and beautiful websites and specialize in responsive web design, HTML5 & Mobile applications. D9ithub has expertise on the forefront of new and progressive technologies. We have a great and loyal client base, some of which we have been working with for over 3 years! We don’t really advertise and most of our work is from referrals or repeat business.</p>
						</div>
					</div>
					<div class="col-md-5 col-sm-6 col-12"  data-aos="zoom-in" data-aos-duration="1200">
						<img src="/assets/d9_images/what_we_do.png" alt="" title="">
					</div>
				</div>
				<div class="row">
					<div class="col-md-1 col-lg-1"></div>
					<div class="col-md-5 col-sm-6 col-12"  data-aos="zoom-in" data-aos-duration="1200">
						<img src="/assets/d9_images/why_d9.png" alt="" title="">
					</div>
					<div class="col-md-5 col-sm-6 col-12">
						<div class="right_about_slide home_abouttext pt-5">
							<h3 class="devider-bottom" data-aos="fade-left" data-aos-duration="1000">Why D9ithub?</h3>
							<p class="mt-3" data-aos="fade-left" data-aos-duration="1500">D9ithub specializes in Web Applications, Mobile Application, Framework, Open source & E-Commerce Development. Also, we have possessed expertise in Web designing, Logo designing, Brand Identity Design, Digital Marketing, Software Testing and much more. You name the digital service, we have it. We do not only provide the service but our after- service approach is something that will keep you tied-up with us for a longer period of time.</p>
						</div>
					</div>
				</div>
			</div>
			<!-- <div class="inner_about">
				<div class="row">
					<div class="col-md-6">
						<div class="right_about_slide home_abouttext">
							<h3 class="devider-bottom">D9ithub Growth</h3>
						</div>
					</div>
				</div>
			</div> -->
		</div>
		<footerarea></footerarea>
	</div>
</template>

<script>
	import navigation from "../components/common/navigation"
	import footerarea from '../components/common/footerarea'
	import AboveFooter from '../components/common/abovefooter'
	export default {
		components: {
			navigation,
			AboveFooter,
			footerarea
		},
		data: () => ({
            show: false
        }),
		mounted(){
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		}
    };
</script>

