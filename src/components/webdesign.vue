<template>
	<div class="inner_pages">
		<LoaderComponent v-if="showLoader"></LoaderComponent>
		<navigation></navigation>
		<div class="breadcume our_services">
			<div class="container">
				<div class="breadcume_inner">
					<div class="breadcume_title">
						<h1>Graphics & Website </h1>
						<ul class="bradcume_nav">
							<li class="nav-item active">
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
								<div class="hover-block">
									<div class="text-cont">
										<div class="bg-rotate">
											<a href="#" target="_blank" class="info-icon ">
												<img src="/assets/d9_images/webdesign.png" alt="" class="rotate-img-diag" width="40">
											</a>
										</div>
										<a href="#" target="_blank">
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
	import LoaderComponent from '../components/loader/loader'

export default {
  components: {
	navigation,
	footerarea,
	LoaderComponent
  },
  data: () => ({
    show: false,
    showLoader: false,
	portfolio: [
		{
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
			imagePath: '/assets/d9_images/point_click.jpg',
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
			imagePath: '/assets/d9_images/pifcoin.jpg',
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
			imagePath: '/assets/d9_images/onemag.jpg',
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
		{
			imagePath: '/assets/d9_images/mygov.jpg',
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
			imagePath: '/assets/d9_images/erjaan_solution.jpg',
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
			imagePath: '/assets/d9_images/sarapis.jpg',
			title: 'SARAPIS',
			description: 'Sarapis is a New York-state incorporated, federally designated 501.c.3 nonprofit organization.',
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
		{
			imagePath: '/assets/d9_images/just_my_doc.jpg',
			title: 'JUST MYDOC',
			description: 'JustMyDoc is the Virtual Patient Medical Home platform that will revolutionize our healthcare system by lowering cost at the consumer level.',
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
		{
			imagePath: '/assets/d9_images/openskies_tech.jpg',
			title: 'OPENSKIES TECH’S',
			description: 'Openskies Tech’s goal is to transition work process from client location to its delivery center, risk free, rapidly and seamlessly.',
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
		{
			imagePath: '/assets/d9_images/reneissance.jpg',
			title: 'RENAISSANCE',
			description: 'Renaissance Studio of Design is a New York based web design company focusing on developing dynamic and cost effective.',
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
		{
			imagePath: '/assets/d9_images/draft_animal_power.jpg',
			title: 'DRAFT ANIMAL POWER',
			description: 'The goal of the Draft Animal-Power Network is to provide year-round educational and networking opportunities.',
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
		{
			imagePath: '/assets/d9_images/khayaldave.jpg',
			title: 'Khayal dave',
			description: 'Khayal is photographer based in Ahmedabad, Gujarat. But he travels on assignment all over India.',
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
	const self = this
	document.onreadystatechange = function() { 
		if (document.readyState !== "complete") {  
			self.showLoader = true;
		} else { 
			self.showLoader = false;
		} 
	};
  }
  
};



</script>
