<template>
	<div class="inner_pages">
		<navigation></navigation>
		<!-- START Breadcume area -->
		<div class="breadcume our_services innerall">
			<div class="container">
				<div class="breadcume_inner">
					<div class="breadcume_title">
						<h1 data-aos="zoom-in" data-aos-duration="1200">Our Team</h1>
					</div>
				</div>
			</div>
		</div>
		<!-- end Breadcume area -->
		<div class="our_team text-center founder_bg">
			<div class="container">
				<h2 data-aos="zoom-in" data-aos-duration="1300">Founders</h2>
				<div class="row d-inline">
					<div class="col-md-3 col-lg-3 col-sm-6 col-12 team_detail">
						<div class="inside_team" data-aos="flip-right" data-aos-duration="1500">
							<img src="/assets/d9_images/webp/digvijayvaghela.webp" alt="" title="">
							<div class="detail_bg">
								<h3>Digvijaysinh Vaghela</h3>
								<p>Managing Director</p>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-lg-3 col-sm-6 col-12 team_detail">
						<div class="inside_team" data-aos="flip-right" data-aos-duration="1500">
							<img src="/assets/d9_images/webp/dhruvpatel.webp" alt="" title="">
							<div class="detail_bg">
								<h3>Dhruv Patel</h3>
								<p>CEO</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="our_team text-center">
			<div class="container">
				<h2 data-aos="zoom-in" data-aos-duration="1300">OUR STRENGTH</h2>
				<div class="row">
					<div class="col-md-3 col-lg-3 col-sm-6 col-12 team_detail">
						<div class="inside_team" data-aos="flip-right" data-aos-duration="1500">
							<img src="/assets/d9_images/webp/palaksukhadiya.webp" alt="" title="">
							<div class="detail_bg">
								<h3>Palak Sukhadiya</h3>
								<p>Web & Graphics Designer</p>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-lg-3 col-sm-6 col-12 team_detail">
						<div class="inside_team" data-aos="flip-right" data-aos-duration="1500">
							<img src="/assets/d9_images/webp/amitsolanki.webp" alt="" title="">
							<div class="detail_bg">
								<h3>Amit Solanki</h3>
								<p>Sr. Laravel & AWS Developer</p>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-lg-3 col-sm-6 col-12 team_detail">
						<div class="inside_team" data-aos="flip-right" data-aos-duration="1500">
							<img src="/assets/d9_images/webp/sandeep_singh.webp" alt="" title="">
							<div class="detail_bg">
								<h3>Sandeep Singh</h3>
								<p>Full Stack & DevOps Developer</p>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-lg-3 col-sm-6 col-12 team_detail">
						<div class="inside_team" data-aos="flip-right" data-aos-duration="1500">
							<img src="/assets/d9_images/webp/tulsi_vanod.webp" alt="" title="">
							<div class="detail_bg">
								<h3>Tulsi Vanol</h3>
								<p>Java & Mobile App Developer</p>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-lg-3 col-sm-6 col-12 team_detail">
						<div class="inside_team" data-aos="flip-right" data-aos-duration="1500">
							<img src="/assets/d9_images/webp/chetan_singhal.webp" alt="" title="">
							<div class="detail_bg">
								<h3>Chetan Singhal</h3>
								<p>Sr. Laravel & Backend Developer</p>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-lg-3 col-sm-6 col-12 team_detail">
						<div class="inside_team" data-aos="flip-right" data-aos-duration="1500">
							<img src="/assets/d9_images/webp/hardik_chaniyara.webp" alt="" title="">
							<div class="detail_bg">
								<h3>Hardik Chaniyara</h3>
								<p>React Js Developer</p>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-lg-3 col-sm-6 col-12 team_detail">
						<div class="inside_team" data-aos="flip-right" data-aos-duration="1500">
							<img src="/assets/d9_images/webp/jagrut_rabadiya.webp" alt="" title="">
							<div class="detail_bg">
								<h3>Jagrut Rabadiya</h3>
								<p>UI/UX Designer</p>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-lg-3 col-sm-6 col-12 team_detail">
						<div class="inside_team" data-aos="flip-right" data-aos-duration="1500">
							<img src="/assets/d9_images/webp/kinjaljain.webp" alt="" title="">
							<div class="detail_bg">
								<h3>Kinjal Jain</h3>
								<p>Jr. Frontend/React Js Developer</p>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-lg-3 col-sm-6 col-12 team_detail">
						<div class="inside_team" data-aos="flip-right" data-aos-duration="1500">
							<img src="/assets/d9_images/webp/maulik_dobariya.webp" alt="" title="">
							<div class="detail_bg">
								<h3>Maulik Dobariya</h3>
								<p>Laravel & API Expert</p>
							</div>
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

