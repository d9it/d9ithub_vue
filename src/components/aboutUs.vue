<template>
	<div class="inner_pages">
		<navigation></navigation>
		<!-- START Breadcume area -->
		<div class="breadcume">
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
							<h3 class="devider-bottom">What We Do</h3>
							<p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum tincidunt sem. Nulla ipsum lorem, interdum vel tincidunt sit amet, aliquam sit amet lectus. Mauris eu tincidunt sapien.</p>
						</div>
					</div>
				</div>
			</div>
			<div class="inner_about">
				<div class="row">
					<div class="col-md-6">
						<div class="right_about_slide home_abouttext">
							<h3 class="devider-bottom">Who We Are?</h3>
							<p class="mt-3">We Are Reputed and Recognized for developing robust mobile apps.</p>
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
							<h3 class="devider-bottom">Why D9ithub</h3>
							<p class="mt-3">D9ithub specializes in Web Applications, Mobile Application, Framework, Open source & E-Commerce Development. Also, we have possessed expertise in Web designing, Logo designing, Brand Identity Design, Digital Marketing, Software Testing and much more. You name the digital service, we have it. We do not only provide the service but our after- service approach is something that will keep you tied-up with us for a longer period of time .</p>
						</div>
					</div>
				</div>
			</div>
			<div class="inner_about">
				<div class="row">
					<div class="col-md-6">
						<div class="right_about_slide home_abouttext">
							<h3 class="devider-bottom">D9ithub Growth</h3>
							<p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum tincidunt sem. Nulla ipsum lorem, interdum vel tincidunt sit amet, aliquam sit amet lectus. Mauris eu tincidunt sapien.</p>
						</div>
					</div>
					<div class="col-md-6">
						<img src="/assets/d9_images/d9_growth.jpg" alt="" title="">
					</div>
				</div>
			</div>
		</div>
		<AboveFooter></AboveFooter>
		<footerarea></footerarea>
	</div>
</template>

<script>
	import navigation from "../components/navigation"
	import footerarea from '../views/footerarea'
	import AboveFooter from '../views/abovefooter'
	export default {
		components: {
			navigation,
			AboveFooter,
			footerarea
		},
		data: () => ({
            show: false
        }),
    };
</script>

