<template>
	<div class="inner_pages">
		<navigation></navigation>
		<!-- START Breadcume area -->
		<div class="breadcume our_services innerall">
			<div class="container">
				<div class="breadcume_inner">
					<div class="breadcume_title">
						<h1>About Us</h1>
					</div>
				</div>
			</div>
		</div>
		<!-- end Breadcume area -->
		<div class="container">
			<div class="inner_about">
				<div class="row">
					<div class="col-md-6">
						<img src="/assets/d9_images/what_we_do.jpg" alt="" title="">
					</div>
					<div class="col-md-6">
						<div class="right_about_slide home_abouttext">
							<h3 class="devider-bottom">Who We Are?</h3>
							<p class="mt-3">We are team of people who are dedicated, experienced and motivated for providing best quality products. We believe in 100% customer satisfaction and we always try to provide excellent quality products to the customers over the world. It does not matter which country the client belongs to, we have clients around the globe.</p>
						</div>
					</div>
				</div>
			</div>
			<div class="inner_about">
				<div class="row">
					<div class="col-md-6">
						<div class="right_about_slide home_abouttext">
							<h3 class="devider-bottom">What We Do?</h3>
							<p class="mt-3">We love creating easy to use, effective and beautiful websites and specialize in responsive web design, HTML5 & Mobile applications. D9ithub has expertise on the forefront of new and progressive technologies. We have a great and loyal client base, some of which we have been working with for over 3 years! We don’t really advertise and most of our work is from referrals or repeat business.</p>
						</div>
					</div>
					<div class="col-md-6">
						<img src="/assets/d9_images/who_we_are.jpg" alt="" title="">
					</div>
				</div>
			</div>
			<div class="inner_about">
				<div class="row">
					<div class="col-md-6">
						<img src="/assets/d9_images/why_d9.jpg" alt="" title="">
					</div>
					<div class="col-md-6">
						<div class="right_about_slide home_abouttext">
							<h3 class="devider-bottom">Why D9ithub?</h3>
							<p class="mt-3">D9ithub specializes in Web Applications, Mobile Application, Framework, Open source & E-Commerce Development. Also, we have possessed expertise in Web designing, Logo designing, Brand Identity Design, Digital Marketing, Software Testing and much more. You name the digital service, we have it. We do not only provide the service but our after- service approach is something that will keep you tied-up with us for a longer period of time.</p>
						</div>
					</div>
				</div>
			</div>
			<div class="inner_about">
				<div class="row">
					<div class="col-md-6">
						<div class="right_about_slide home_abouttext">
							<h3 class="devider-bottom">D9ithub Growth</h3>
						</div>
					</div>
				</div>
			</div>
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

