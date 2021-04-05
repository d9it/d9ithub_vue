<template>
	<div class="inner_pages">
		<navigation></navigation>
		<div class="breadcume our_services">
			<div class="container">
				<div class="breadcume_inner">
					<div class="breadcume_title">
						<h1>Graphics & Website </h1>
						<ul class="bradcume_nav">
							<li class="nav-item ">
								<router-link class="nav-link color_white" to="/webdesign">
									<img src="/assets/d9_images/webdesign.png" alt="" title="" height="60"><br/>
									Web Design
								</router-link>
							</li>
							<li class="nav-item active">
								<router-link class="nav-link color_white" to="/psd">
									<img src="/assets/d9_images/psd.png" alt="" title="" height="60"><br/>
									PSD 
								</router-link>
							</li>
							<li class="nav-item">
								<router-link class="nav-link color_white" to="/logo">
									<img src="/assets/d9_images/logo.png" alt="" title="" height="60"><br/>
									Logo
								</router-link>
							</li>
							<!-- <li class="nav-item">
								<router-link class="nav-link color_white" to="/banner">
									<img src="/assets/d9_images/banner.png" alt="" title="" height="60"><br/>
									Banner
								</router-link>
							</li> -->
							<li class="nav-item">
								<router-link class="nav-link color_white" to="/responsive">
									<img src="/assets/d9_images/responsive.png" alt="" title="" height="60"><br/>
									Responsive
								</router-link>
							</li>
                            <!-- <li class="nav-item ">
								<router-link class="nav-link color_white" to="/appdesign">
									<img src="/assets/d9_images/mobileapp.png" alt="" title="" height="60"><br/>
									App Design 
								</router-link>
							</li>-->
						</ul>
					</div>
				</div>
			</div>
		</div>

		<!-- start All php project -->	
			<div class="container">
				<div class="portfolio_inner">
					<div class="row">
						<div class="col-md-4" v-for="(portfolioData, index) in portfolio" :key="index">
							<div class="inner_shadow">
								<div class="image_height">
									<a :href="portfolioData.imagePath">
										<img :src="portfolioData.imagePath" alt="" title="" class="pro-img">
									</a>
								</div>
							</div>
						</div>
					</div>	
				</div>
			</div>
		<!-- end   All php project -->	
		<footerarea></footerarea>	
  	</div>
</template>

<script>
import navigation from '../components/navigation';	
import footerarea from '../views/footerarea'

export default {
  	components: {
		navigation,
		footerarea
  	},
	data: () => ({
		show: false,
		portfolio: [
			{
				imagePath: '/assets/d9_images/psd_portfolio/web_budgetpetcart.jpg',
				title: 'Budgetpet Cart',
			},
			{
				imagePath: '/assets/d9_images/psd_portfolio/web_mycanvasstory.jpg',
				title: 'Mycanvas Story',
			},
			// {
			// 	imagePath: '/assets/d9_images/psd_portfolio/web_workhub360.jpg',
			// 	title: 'Workhub360',
			// },
			{
				imagePath: '/assets/d9_images/psd_portfolio/web_education.jpg',
				title: 'Sama AL Nokhba Training Center',
			},
			{
				imagePath: '/assets/d9_images/psd_portfolio/web_point_click.jpg',
				title: 'Point click & Design',
			},
			{
				imagePath: '/assets/d9_images/psd_portfolio/web_epick&go.jpg',
				title: 'EPICKNGO',
			},
			{
				imagePath: '/assets/d9_images/psd_portfolio/web_bluestarfootball.jpg',
				title: 'Bluestar Football',
			},
			{
				imagePath: '/assets/d9_images/psd_portfolio/web_crushwalk.jpg',
				title: 'Cushman & Wakefield',
			},
			{
				imagePath: '/assets/d9_images/psd_portfolio/web_searchninja.jpg',
				title: 'Search.rec Ninja',
			},
			{
				imagePath: '/assets/d9_images/psd_portfolio/web_mygov.jpg',
				title: 'MYGOV.NYC',
			},
			{
				imagePath: '/assets/d9_images/psd_portfolio/web_draftanimalpower.jpg',
				title: 'Draft Animal Power',
			},
			{
				imagePath: '/assets/d9_images/psd_portfolio/web_kevianagroup.jpg',
				title: 'Keviana Group',
			},
			{
				imagePath: '/assets/d9_images/psd_portfolio/web_services4.jpg',
				title: 'Services 4',
			},
		]
	}),
  	mounted(){
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
		$(document).ready(function() {
			$('.image_height a').lightbox(); 
		});
	}
};



</script>
