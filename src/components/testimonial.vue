<template>
    <div class="inner_pages">
		<navigation></navigation>
		<!-- START Breadcume area -->
		<div class="breadcume our_services innerall">
			<div class="container">
				<div class="breadcume_inner">
					<div class="breadcume_title">
						<h1 data-aos="zoom-in" data-aos-duration="1200">Testimonial</h1>
					</div>
				</div>
			</div>
		</div>
		<!-- end Breadcume area -->
		<div class="testimonial_inside text-center">
			<div class="container">
				<div class="row">
					<div class="col-md-6 col-lg-4 col-sm-12 col-12 client_team" data-aos="flip-left" data-aos-duration="1200">
						<div class="inner_testimonial">
							<p>My account manager was Dhruv at D9ithub. My project involved simple IT tasks and website compressing that I was afraid to go ahead with. The website compressing significantly improved the speed on the desktop viewing . Dhruv responded to my emails/questions promptly. I would strongly recommended his services.</p>
							<img src="/assets/d9_images/user_icon.png" alt="" title="">
							<h3>Lea Sears</h3>
						</div>
					</div>
					<div class="col-md-6 col-lg-4 col-sm-12 col-12 client_team" data-aos="flip-left" data-aos-duration="1200">
						<div class="inner_testimonial">
							<p>The team at D9ithub has been instrumental in assisting me with various business/technology projects. They are experts in their craft and have delivered very elegant solutions in very tight time constraints. From general business consulting to software solutions they are the team I count on for everything.</p>
							<img src="/assets/d9_images/user_icon.png" alt="" title="">
							<h3>Edwin Huberdeau</h3>
						</div>
					</div>
					<div class="col-md-6 col-lg-4 col-sm-12 col-12 client_team" data-aos="flip-left" data-aos-duration="1200">
						<div class="inner_testimonial">
							<p>Working with D9 has been great!  I needed help with a tricky e-commerce coding issue, and they not only resolved the issue, but have also provided other services to support developing and optimizing my clients' sites.  Communication is great, and the quality of work is first class. They come highly recommend by me!</p>
							<img src="/assets/d9_images/user_icon.png" alt="" title="">
							<h3>Lisa Gibson</h3>
						</div>
					</div>
					<div class="col-md-6 col-lg-4 col-sm-12 col-12 client_team" data-aos="flip-left" data-aos-duration="1200">
						<div class="inner_testimonial">
							<p>I have hired them for a number of web development tasks, and have been consistently impressed in all aspects -- efficient, high quality, and well-priced.  Highly recommend.</p>
							<img src="/assets/d9_images/user_icon.png" alt="" title="">
							<h3>Reece Sellin</h3>
						</div>
					</div>
					<div class="col-md-6 col-lg-4 col-sm-12 col-12 client_team" data-aos="flip-left" data-aos-duration="1200">
						<div class="inner_testimonial">
							<p>I have had d9ithub perform many projects for me and they have completed all of them on time and with great quality, I continue to use them exclusively.</p>
							<img src="/assets/d9_images/user_icon.png" alt="" title="">
							<h3>Dean Jones</h3>
						</div>
					</div>
					<div class="col-md-6 col-lg-4 col-sm-12 col-12 client_team" data-aos="flip-left" data-aos-duration="1200">
						<div class="inner_testimonial">
							<p>Has been very helpful and completed tasks in a timely fashion to a good standard. Will use again and again</p>
							<img src="/assets/d9_images/user_icon.png" alt="" title="">
							<h3>Danielle McCarthy</h3>
						</div>
					</div>
					<div class="col-md-6 col-lg-4 col-sm-12 col-12 client_team" data-aos="flip-left" data-aos-duration="1200">
						<div class="inner_testimonial">
							<p>Great communicator, efficient and attentive to clients details and needs. Definitely recommend and will use for future projects!</p>
							<img src="/assets/d9_images/user_icon.png" alt="" title="">
							<h3>Renee J-Allen</h3>
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
