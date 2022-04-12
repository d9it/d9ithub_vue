<template>
	<div class="inner_pages">
		<navigation></navigation>
		<!-- START Breadcume area -->
		<div class="breadcume our_services innerall">
			<div class="container">
				<div class="breadcume_inner">
					<div class="breadcume_title">
						<h1>Our Team</h1>
					</div>
				</div>
			</div>
		</div>
		<!-- end Breadcume area -->
		<div class="our_team text-center founder_bg">
			<div class="container">
				<h2>Founders</h2>
				<div class="row d-inline">
					<div class="col-md-3 col-lg-3 col-sm-6 col-12 team_detail">
						<div class="inside_team">
							<img src="/assets/d9_images/webp/digvijayvaghela.webp" alt="" title="">
							<div class="detail_bg">
								<h3>Digvijaysinh Vaghela</h3>
								<p>Founder / Director</p>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-lg-3 col-sm-6 col-12 team_detail">
						<div class="inside_team">
							<img src="/assets/d9_images/webp/dhruvpatel.webp" alt="" title="">
							<div class="detail_bg">
								<h3>Dhruv Patel</h3>
								<p>Co - Founder / CEO</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="our_team text-center">
			<div class="container">
				<h2>OUR STRENGTH</h2>
				<div class="row">
					<div class="col-md-3 col-lg-3 col-sm-6 col-12 team_detail">
						<div class="inside_team">
							<img src="/assets/d9_images/webp/kandarppandya.webp" alt="" title="">
							<div class="detail_bg">
								<h3>Kandarp Pandya</h3>
								<p>Sr. Frontend / Web Developer</p>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-lg-3 col-sm-6 col-12 team_detail">
						<div class="inside_team">
							<img src="/assets/d9_images/webp/palaksukhadiya.webp" alt="" title="">
							<div class="detail_bg">
								<h3>Palak Sukhadiya</h3>
								<p>Sr. UI/UX Designer</p>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-lg-3 col-sm-6 col-12 team_detail">
						<div class="inside_team">
							<img src="/assets/d9_images/webp/amitsolanki.webp" alt="" title="">
							<div class="detail_bg">
								<h3>Amit Solanki</h3>
								<p>Sr. Laravel Developer</p>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-lg-3 col-sm-6 col-12 team_detail">
						<div class="inside_team">
							<img src="/assets/d9_images/webp/sandeep_singh.webp" alt="" title="">
							<div class="detail_bg">
								<h3>Sandeep Singh</h3>
								<p>Sr. UI/UX Developer</p>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-lg-3 col-sm-6 col-12 team_detail">
						<div class="inside_team">
							<img src="/assets/d9_images/webp/Asadgovani.webp" alt="" title="">
							<div class="detail_bg">
								<h3>Asad Govani</h3>
								<p>Sr. Mobile App Developer</p>
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

