<template>
	<div class="inner_pages">
		<navigation></navigation>
		<div class="breadcume our_services">
			<div class="container">
				<div class="breadcume_inner">
					<div class="breadcume_title">
						<h1>Web Development</h1>
						<ul class="bradcume_nav">
							<li class="nav-item">
								<router-link class="nav-link color_white" to="/php">
									<img src="/assets/d9_images/php.png" alt="" title="" height="60"><br/>
									PHP
								</router-link>
							</li>
							<li class="nav-item ">
								<router-link class="nav-link color_white" to="/laravel">
									<img src="/assets/d9_images/laravel.png" alt="" title="" height="60"><br/>
									Laravel
								</router-link>
							</li>
							<li class="nav-item">
								<router-link class="nav-link color_white" to="/vue">
									<img src="/assets/d9_images/vue.png" alt="" title="" height="60"><br/>
									Vue
								</router-link>
							</li>
							<li class="nav-item">
								<router-link class="nav-link color_white" to="/wordpress">
									<img src="/assets/d9_images/wordpress.png" alt="" title="" height="60"><br/>
									Wordpress
								</router-link>
							</li>
							<li class="nav-item active">
								<router-link class="nav-link color_white" to="/ecommerce">
									<img src="/assets/d9_images/ecommerce.png" alt="" title="" height="60"><br/>
									Ecommerce
								</router-link>
							</li>
							<li class="nav-item">
								<router-link class="nav-link color_white" to="/mobile">
									<img src="/assets/d9_images/mobile_development.png" alt="" title="" height="60"><br/>
									Mobile app
								</router-link>
							</li>
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
									<a :href="portfolioData.sitelink" target="_blank">
										<img :src="portfolioData.imagePath" alt="" title="" class="pro-img">
									</a>
								</div>
								<div class="hover-block">
									<div class="text-cont">
										<div class="bg-rotate">
											<a :href="portfolioData.sitelink" target="_blank" class="info-icon ">
												<img src="/assets/d9_images/php.png" alt="" class="rotate-img-diag" width="40">
											</a>
										</div>
										<a :href="portfolioData.sitelink" target="_blank">
											<h1>{{portfolioData.title}}</h1>
											<p>{{portfolioData.description}}</p>
										</a>
									</div>
									<div class="bg1-icon">
										<div class="icon-show">
											<h5>Technology</h5>
											<ul class="nav nav-pills nav-justified">
												<li class="nav-item" v-for="(portfolioDescription, index) in portfolioData.technology" :key="index">
													<i :class="portfolioDescription.className"></i>
													{{portfolioDescription.technologyName}}
												</li>
											</ul>
										</div>
									</div>
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
			sitelink: 'http://ecommerce.d9ithub.com/',
			imagePath: '/assets/d9_images/epickgo.jpg',
			title: 'EPICKNGO',
			description: 'This EpickNgo site based in UAE. The site offers quality of products for peoples.',
			technology: [
				{
					className: 'fab fa-laravel',
					technologyName: 'Laravel'
				},
				{
					className: 'fab fa-vuejs',
					technologyName: 'Vue'
				},
				{
					className: 'fab fa-html5',
					technologyName: 'HTML 5'
				},
				{
					className: 'fab fa-css3-alt',
					technologyName: 'CSS 3'
				},
				{
					className: 'fab fa-bootstrap',
					technologyName: 'Bootstrap'
				}
			]
		},
		{
			sitelink: 'https://learnhub360.com/',
			imagePath: '/assets/d9_images/learnhub.jpg',
			title: 'Axel Training Services',
			description: 'Our main objectives is to make all our courses / training sessions more efficient and practical for a better understanding of it, providing to all our learners / candidates the knowledge and self-trust which will lead to perform their job safe, correct and efficient.',
			technology: [
				{
					className: 'fab fa-laravel',
					technologyName: 'Laravel'
				},
				{
					className: 'fab fa-vuejs',
					technologyName: 'Vue'
				},
				{
					className: 'fab fa-html5',
					technologyName: 'HTML 5'
				},
				{
					className: 'fab fa-css3-alt',
					technologyName: 'CSS 3'
				},
				{
					className: 'fab fa-bootstrap',
					technologyName: 'Bootstrap'
				}
			]
		},
		{
			sitelink: 'http://budgetpetcart.d9ithub.com/',
			imagePath: '/assets/d9_images/budgetpet.jpg',
			title: 'Budgetpet Cart',
			description: 'Budgetpet Cart is dedicated to supplying quality pet care products at affordable prices. We care and are dedicated to providing best pet care, always!',
			technology: [
				{
					className: 'fab fa-laravel',
					technologyName: 'Laravel'
				},
				{
					className: 'fab fa-vuejs',
					technologyName: 'Vue'
				},
				{
					className: 'fab fa-html5',
					technologyName: 'HTML 5'
				},
				{
					className: 'fab fa-css3-alt',
					technologyName: 'CSS 3'
				},
				{
					className: 'fab fa-bootstrap',
					technologyName: 'Bootstrap'
				}
			]
		},
		{
			sitelink: 'https://mycanvasstory.com/',
			imagePath: '/assets/d9_images/mycanvasstory.jpg',
			title: 'Mycanvas Story',
			description: 'Let your`s be evergreen on the Canvas. My Canvas Story is your best destination for customized canvas prints.',
			technology: [
				{
					className: 'fab fa-laravel',
					technologyName: 'Laravel'
				},
				{
					className: 'fab fa-vuejs',
					technologyName: 'Vue'
				},
				{
					className: 'fab fa-html5',
					technologyName: 'HTML 5'
				},
				{
					className: 'fab fa-css3-alt',
					technologyName: 'CSS 3'
				},
				{
					className: 'fab fa-bootstrap',
					technologyName: 'Bootstrap'
				}
			]
		},
		{
			sitelink: 'http://workhub360.d9ithub.com/',
			imagePath: '/assets/d9_images/workhub360.jpg',
			title: 'Workhub360',
			description: 'WorkHub360 is a joint venture created to help businesses grow by providing technical and administrative support as well as on demand professional advice.',
			technology: [
				{
					className: 'fab fa-laravel',
					technologyName: 'Laravel'
				},
				{
					className: 'fab fa-vuejs',
					technologyName: 'Vue'
				},
				{
					className: 'fab fa-html5',
					technologyName: 'HTML 5'
				},
				{
					className: 'fab fa-css3-alt',
					technologyName: 'CSS 3'
				},
				{
					className: 'fab fa-bootstrap',
					technologyName: 'Bootstrap'
				}
			]
		},
		{
			sitelink: 'https://www.samantc.com/',
			imagePath: '/assets/d9_images/education.jpg',
			title: 'Sama AL Nokhba Training Center',
			description: 'Sama AL-Nokhba training center provide essential services for the sucess of aspiring ondividuals with direct training or smart training techniques.',
			technology: [
				{
					className: 'fab fa-laravel',
					technologyName: 'Laravel'
				},
				{
					className: 'fab fa-vuejs',
					technologyName: 'Vue'
				},
				{
					className: 'fab fa-html5',
					technologyName: 'HTML 5'
				},
				{
					className: 'fab fa-css3-alt',
					technologyName: 'CSS 3'
				},
				{
					className: 'fab fa-bootstrap',
					technologyName: 'Bootstrap'
				}
			]
		},
		{
			imagePath: '/assets/d9_images/tierra_oceano.jpg',
			title: 'TIERRA OCEANO',
			description: 'We strive to make beautiful, lasting products that are eco-friendly, and that you can use with pride.',
			technology: [
				{
					className: 'fab fa-wordpress-simple',
					technologyName: 'Wordpress'
				},
				{
					className: 'fab fa-html5',
					technologyName: 'HTML 5'
				},
				{
					className: 'fab fa-css3-alt',
					technologyName: 'CSS 3'
				},
				{
					className: 'fab fa-bootstrap',
					technologyName: 'Bootstrap'
				},
			]
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
