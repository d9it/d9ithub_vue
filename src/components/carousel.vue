<template>
	<div id="home">
		<!-- start slider area -->
		<div id="mistify">
			<div class="mistify__slide">
				<a class="mistify__slide-content mist-link" href="javascript:void(0);">
					<h1 class="mistify__slide-title" >Web <br/>Development</h1>
					<p class="mistify__slide-description">Build secure and scalable web applications supported by innovative solutions, ingenious methodology and global delivery model. 70+ web projects delivered worldwide.</p>
					<p class="mistify__slide-timestamp"></p>
				</a>
				<img class="mistify__slide-background" src="assets/d9_images/webdevelopment.jpg" alt="bg">
			</div>
			<div class="mistify__slide">
				<a class="mistify__slide-content mist-link" href="javascript:void(0);">
					<h1 class="mistify__slide-title">CMS & Ecommerce <br/>Development</h1>
					<p class="mistify__slide-description">Explore Open Source development with custom CMS and E-Commerce Solutions - supporting quick, accurate, and high performance deliverables to improve business ROI.</p>
					<p class="mistify__slide-timestamp"></p>
				</a>
				<img class="mistify__slide-background" src="assets/d9_images/Ecommerce.jpg" alt="bg">
			</div>
			<div class="mistify__slide">
				<a class="mistify__slide-content mist-link" href="javascript:void(0);">
					<h1 class="mistify__slide-title">Graphics & Website <br/>Design </h1>
					<p class="mistify__slide-description">Leading Graphics & Website Design Company in India having delivered many website with animation. </p>
					<p class="mistify__slide-timestamp"></p>
				</a>
				<img class="mistify__slide-background" src="assets/d9_images/Webdesign.jpg" alt="bg">
			</div>
			<div class="mistify__slide">
				<a class="mistify__slide-content mist-link" href="javascript:void(0);">
					<h1 class="mistify__slide-title">Mobile <br/>Development</h1>
					<p class="mistify__slide-description">Leading mobile (iPhone / iOS, Android) application development companies in India offering mobile apps development services for enterprises and startups - Delivered 50+ native and cross-platform mobile apps.</p>
					<p class="mistify__slide-timestamp"></p>
				</a>
				<img class="mistify__slide-background" src="assets/d9_images/Mobile.jpg" alt="bg">
			</div>
			<div class="mistify__slide">
				<a class="mistify__slide-content mist-link" href="javascript:void(0);">
					<h1 class="mistify__slide-title">Hire Dedicated <br/>Resources</h1>
					<p class="mistify__slide-description">Choose from flexi-hiring models that are guided by proven methodologies and quick turnaround to deliver extraordinary business solution.</p>
					<p class="mistify__slide-timestamp"></p>
				</a>
				<img class="mistify__slide-background" src="assets/d9_images/Hireresources.jpg" alt="bg">
			</div>
			<div class="mistify__slide">
				<a class="mistify__slide-content mist-link" href="javascript:void(0);">
					<h1 class="mistify__slide-title">Enterprise<br/>Solutions</h1>
					<p class="mistify__slide-description">Enterprise solutions to transform your business and address key challenges to drive maximum value, accelerate workflows, and improve efficiency.</p>
					<p class="mistify__slide-timestamp"></p>
				</a>
				<img class="mistify__slide-background" src="assets/d9_images/Enterprise.jpg" alt="bg">
			</div>
		</div>
	</div>
   <!-- end slider area -->
</template>

<script>
export default {
	data: () => ({
		show: false
	}),
	mounted() {
		$(document).ready(function() {

		// default initialization
		// autoplaySpeed : 5000, dots: true
		//$('#mistify').mistify();

		// custom initialization
		if ($('#mistify').length) {
			$('#mistify').mistify({
				arrows: true,
				autoPlay: true,
				autoplaySpeed: 5000,
				dots: true,
				readMoreText: 'mehr'
			});
		}

		$('.scroll-top').on('click', function(e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, 'slow');
		});

		$('.mist-link').on('click', function(e) {
			e.preventDefault();
			var url = $(this).attr('href');
			$('body').addClass('overlay-wrapped');
			$('.mist-overlay').addClass('slideInReady').show();
			setTimeout(function() {
				$('.mist-overlay').addClass('slideIn');
			}, 100);

			setTimeout(function() {
				window.location.href = url;
			}, 2200);
		});

		$('.inner-page__prev-post, .inner-page__next-post')
			.on('mouseover', function() {
				$(this).addClass('active');
			})
			.on('mouseout', function() {
				$(this).removeClass('active');
			});
	});

	$(window).on('load', function() {
		$('body').removeClass('overlay-wrapped');
		$('.mist-overlay').addClass('slideOut');
		setTimeout(function() {
			$('.mist-overlay').hide().removeClass('slideOut');
		}, 2200);
	});
	}
};
</script>