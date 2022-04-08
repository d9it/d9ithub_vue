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
							<li class="nav-item active">
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
							<li class="nav-item">
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
									<a :href="portfolioData.imagePath">
										<img :src="portfolioData.imagePath" alt="" title="" class="pro-img">
									</a>
								</div>
								<div class="hover-block">
									<div class="text-cont">
										<div class="bg-rotate">
											<a :href="portfolioData.sitelink" target="_blank" class="info-icon ">
												<img src="/assets/d9_images/laravel.png" alt="" class="rotate-img-diag" width="40">
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
	import navigation from '../components/common/navigation';	
    import footerarea from '../components/common/footerarea'

export default {
  components: {
	navigation,
	footerarea
  },
  data: () => ({
	show: false,
	portfolio: [
		{
			sitelink: 'http://budgetpetcart.d9ithub.com/',
			imagePath: '/assets/d9_images/webp/nightingalepass.webp',
			title: 'Nightingale Pass',
			description: 'The Nightingale Pass, developed with the NHS in mind.Nurses must repeat the lengthy process every time they move roles. It makes no sense.',
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
			imagePath: '/assets/d9_images/webp/preety_pins.webp',
			title: 'Pretty Pins Wizard',
			description: 'Pretty Pins Wizard site based in custome texture design. The site offers quality of products for peoples.',
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
			imagePath: '/assets/d9_images/webp/canadapet.webp',
			title: 'CanadaPet Vet',
			description: 'CanadaPet Vet is dedicated to supplying quality pet care products at affordable prices. We care and are dedicated to providing best pet care, always!',
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
			imagePath: '/assets/d9_images/webp/clicknomic.webp',
			title: 'Clicknomic',
			description: 'clicknomic is an automated marketing reporting tool created to help marketers save hours of work and create their reports in the blink of an eye.',
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
			imagePath: '/assets/d9_images/webp/budgetpetmall.webp',
			title: 'Budgetpet Mall',
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
		// {
		// 	sitelink: 'http://workhub360.d9ithub.com/',
		// 	imagePath: '/assets/d9_images/workhub360.jpg',
		// 	title: 'Workhub360',
		// 	description: 'WorkHub360 is a joint venture created to help businesses grow by providing technical and administrative support as well as on demand professional advice.',
		// 	technology: [
		// 		{
		// 			className: 'fab fa-laravel',
		// 			technologyName: 'Laravel'
		// 		},
		// 		{
		// 			className: 'fab fa-vuejs',
		// 			technologyName: 'Vue'
		// 		},
		// 		{
		// 			className: 'fab fa-html5',
		// 			technologyName: 'HTML 5'
		// 		},
		// 		{
		// 			className: 'fab fa-css3-alt',
		// 			technologyName: 'CSS 3'
		// 		},
		// 		{
		// 			className: 'fab fa-bootstrap',
		// 			technologyName: 'Bootstrap'
		// 		}
		// 	]
		// },
		{
			sitelink: 'https://mycanvasstory.com/',
			imagePath: '/assets/d9_images/webp/mycanvasstory.webp',
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
		// {
		// 	sitelink: 'https://learnhub360.com/',
		// 	imagePath: '/assets/d9_images/learnhub.jpg',
		// 	title: 'Axel Training Services',
		// 	description: 'We have highly qualified trainers and assessors focusing specifically on the needs of all our learners / candidates from all backgrounds.',
		// 	technology: [
		// 		{
		// 			className: 'fab fa-laravel',
		// 			technologyName: 'Laravel'
		// 		},
		// 		{
		// 			className: 'fab fa-vuejs',
		// 			technologyName: 'Vue'
		// 		},
		// 		{
		// 			className: 'fab fa-html5',
		// 			technologyName: 'HTML 5'
		// 		},
		// 		{
		// 			className: 'fab fa-css3-alt',
		// 			technologyName: 'CSS 3'
		// 		},
		// 		{
		// 			className: 'fab fa-bootstrap',
		// 			technologyName: 'Bootstrap'
		// 		}
		// 	]
		// },
		{
			sitelink: 'https://www.samantc.com/',
			imagePath: '/assets/d9_images/webp/education.webp',
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
			sitelink: 'http://designtool.pointclickanddesign.com/',
			imagePath: '/assets/d9_images/webp/point_click.webp',
			title: 'Point click & Design',
			description: 'This Point click & design site based in custome texture design. The site offers quality of products for peoples.',
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
			sitelink: 'https://one.sprocketmedia.com/',
			imagePath: '/assets/d9_images/webp/onemag.webp',
			title: 'ONE magazine',
			description: 'ONE Magazine stands firmly at this intersection. A customizable lifestyle magazine, that connects on a deeper level. it`s the perfect complement to your marketing mix.',
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
			sitelink: 'http://www.thepifcoin.com/',
			imagePath: '/assets/d9_images/webp/pifcoin.webp',
			title: 'pifcoin',
			description: 'Pifcoin is a means to track, inspire and most importantly, promote paying acts of kindness forward. The goal is to further advocate the "pay it forward" agenda by physically using a coin passed from one person to the next.',
				technology: [
				{
					className: 'fab fa-laravel',
					technologyName: 'Laravel'
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
		{
			imagePath: '/assets/d9_images/webp/erjaan_solution.webp',
			title: 'ERJAAN SOLUTIONS',
			description: 'Erjaan is a saudi company specializing in cloud smart surveys solutions aiming to help organizations in business, healthcare and education sectors to make smarter decisions to drive growth by collecting and analyzing the right data from the right sources.',
			technology: [
				{
					className: 'fab fa-laravel',
					technologyName: 'Laravel'
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
		{
			sitelink: 'http://ecommerce.d9ithub.com/',
			imagePath: '/assets/d9_images/webp/epickgo.webp',
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
			imagePath: '/assets/d9_images/jwm.jpg',
			title: 'jwm racing',
			description: 'This EpickNgo site based in UAE. The site offers quality of products for peoples.',
			technology: [
				{
					className: 'fab fa-laravel',
					technologyName: 'Laravel'
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
		{
			sitelink: 'http://wegov.nyc/',
			imagePath: '/assets/d9_images/webp/mygov.webp',
			title: 'MYGOV.NYC',
			description: 'We believe that a path to a more effective NYC government, one that produces better and projects and services.',
			technology: [
				{
					className: 'fab fa-laravel',
					technologyName: 'Laravel'
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
		{
			imagePath: '/assets/d9_images/socialmedia.jpg',
			title: 'Search.rec Ninja',
			description: 'One search with instant results across these networks. Low monthly subscription or discount for annual sign ups.',
			technology: [
				{
					className: 'fab fa-laravel',
					technologyName: 'Laravel'
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
	$(document).ready(function() {
		$('.image_height a').lightbox(); 
	});
  }
  
};



</script>
