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
							<li class="nav-item">
								<router-link class="nav-link color_white" to="/psd">
									<img src="/assets/d9_images/psd.png" alt="" title="" height="60"><br/>
									PSD 
								</router-link>
							</li>
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
									<a href="javascript:void(0)">
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
			imagePath: '/assets/d9_images/p_logo/1.jpg',
		},
		{
			imagePath: '/assets/d9_images/p_logo/2.jpg',
		},
		// {
		// 	imagePath: '/assets/d9_images/p_logo/3.jpg',
		// },
		{
			imagePath: '/assets/d9_images/p_logo/4.jpg',
		},
		{
			imagePath: '/assets/d9_images/p_logo/5.jpg',
		},
		{
			imagePath: '/assets/d9_images/p_logo/6.jpg',
		},
		{
			imagePath: '/assets/d9_images/p_logo/7.jpg',
		},
		{
			imagePath: '/assets/d9_images/p_logo/8.jpg',
		},
		{
			imagePath: '/assets/d9_images/p_logo/9.jpg',
		},
		{
			imagePath: '/assets/d9_images/p_logo/10.jpg',
		},
		{
			imagePath: '/assets/d9_images/p_logo/11.jpg',
		},
		{
			imagePath: '/assets/d9_images/p_logo/12.jpg',
		},
		{
			imagePath: '/assets/d9_images/p_logo/13.jpg',
		},
		{
			imagePath: '/assets/d9_images/p_logo/14.jpg',
		},
		{
			imagePath: '/assets/d9_images/p_logo/15.jpg',
		},
		{
			imagePath: '/assets/d9_images/p_logo/16.jpg',
		},
		{
			imagePath: '/assets/d9_images/p_logo/17.jpg',
		},
		{
			imagePath: '/assets/d9_images/p_logo/18.jpg',
		},
		{
			imagePath: '/assets/d9_images/p_logo/19.jpg',
		},
		{
			imagePath: '/assets/d9_images/p_logo/20.jpg',
		},
		{
			imagePath: '/assets/d9_images/p_logo/21.jpg',
		},
		{
			imagePath: '/assets/d9_images/p_logo/22.jpg',
		},
		{
			imagePath: '/assets/d9_images/p_logo/23.jpg',
		},
		{
			imagePath: '/assets/d9_images/p_logo/24.jpg',
		},
		{
			imagePath: '/assets/d9_images/p_logo/25.jpg',
		},
		{
			imagePath: '/assets/d9_images/p_logo/26.jpg',
		},
		{
			imagePath: '/assets/d9_images/p_logo/27.jpg',
		},
		{
			imagePath: '/assets/d9_images/p_logo/28.jpg',
		},
		{
			imagePath: '/assets/d9_images/p_logo/29.jpg',
		},
		{
			imagePath: '/assets/d9_images/p_logo/30.jpg',
		},
		{
			imagePath: '/assets/d9_images/p_logo/31.jpg',
		},
		{
			imagePath: '/assets/d9_images/p_logo/32.jpg',
		},
		{
			imagePath: '/assets/d9_images/p_logo/33.jpg',
		},
		{
			imagePath: '/assets/d9_images/p_logo/34.jpg',
		},
		{
			imagePath: '/assets/d9_images/p_logo/35.jpg',
		},
		{
			imagePath: '/assets/d9_images/p_logo/36.jpg',
		},
		{
			imagePath: '/assets/d9_images/p_logo/37.jpg',
		},
		{
			imagePath: '/assets/d9_images/p_logo/38.jpg',
		},
		{
			imagePath: '/assets/d9_images/p_logo/39.jpg',
		},
		{
			imagePath: '/assets/d9_images/p_logo/40.jpg',
		},
		{
			imagePath: '/assets/d9_images/p_logo/41.jpg',
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
