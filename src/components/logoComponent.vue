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
							<!-- <li class="nav-item">
								<router-link class="nav-link color_white" to="/psd">
									<img src="/assets/d9_images/psd.png" alt="" title="" height="60"><br/>
									PSD 
								</router-link>
							</li> -->
							<li class="nav-item active">
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
							</li>							 -->
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
									<a href="#">
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
			imagePath: '/assets/d9_images/p_logo/logo31.png',
		},
		{
			imagePath: '/assets/d9_images/p_logo/logo30.png',
		},
		{
			imagePath: '/assets/d9_images/p_logo/logo29.png',
		},
		{
			imagePath: '/assets/d9_images/p_logo/logo1.png',
		},
		{
			imagePath: '/assets/d9_images/p_logo/logo2.png',
		},
		{
			imagePath: '/assets/d9_images/p_logo/logo3.png',
		},
		{
			imagePath: '/assets/d9_images/p_logo/logo4.png',
		},
		{
			imagePath: '/assets/d9_images/p_logo/logo5.png',
		},
		{
			imagePath: '/assets/d9_images/p_logo/logo6.png',
		},
		{
			imagePath: '/assets/d9_images/p_logo/logo7.png',
		},
		{
			imagePath: '/assets/d9_images/p_logo/logo8.png',
		},
		{
			imagePath: '/assets/d9_images/p_logo/logo9.png',
		},
		{
			imagePath: '/assets/d9_images/p_logo/logo10.png',
		},
		{
			imagePath: '/assets/d9_images/p_logo/logo11.png',
		},
		{
			imagePath: '/assets/d9_images/p_logo/logo12.png',
		},
		{
			imagePath: '/assets/d9_images/p_logo/logo13.png',
		},
		{
			imagePath: '/assets/d9_images/p_logo/logo14.png',
		},
		{
			imagePath: '/assets/d9_images/p_logo/logo15.png',
		},
		{
			imagePath: '/assets/d9_images/p_logo/logo16.png',
		},
		{
			imagePath: '/assets/d9_images/p_logo/logo17.png',
		},
		{
			imagePath: '/assets/d9_images/p_logo/logo18.png',
		},
		{
			imagePath: '/assets/d9_images/p_logo/logo19.png',
		},
		{
			imagePath: '/assets/d9_images/p_logo/logo20.png',
		},
		{
			imagePath: '/assets/d9_images/p_logo/logo21.png',
		},
		{
			imagePath: '/assets/d9_images/p_logo/logo22.png',
		},
		{
			imagePath: '/assets/d9_images/p_logo/logo23.png',
		},
		{
			imagePath: '/assets/d9_images/p_logo/logo24.png',
		},
		{
			imagePath: '/assets/d9_images/p_logo/logo25.png',
		},
		{
			imagePath: '/assets/d9_images/p_logo/logo26.png',
		},
		{
			imagePath: '/assets/d9_images/p_logo/logo27.png',
		},
		{
			imagePath: '/assets/d9_images/p_logo/logo28.png',
		},
	]
  }),
  mounted(){
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
  }
  
};



</script>
