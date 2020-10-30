<template>
	<div class="inner_pages">
		<navigation></navigation>
		<div class="breadcume our_services">
			<div class="container">
				<div class="breadcume_inner">
					<div class="breadcume_title">
						<h1>Web Development</h1>
						<ul class="bradcume_nav">
							<li class="nav-item active">
								<router-link class="nav-link color_white" to="/php">
									<img src="/assets/d9_images/php.png" alt="" title="" height="60"><br/>
									PHP
								</router-link>
							</li>
							<li class="nav-item">
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
								<a href="#">
									<img :src="portfolioData.imagePath" alt="" title="" class="pro-img">
								</a>
							</div>
							<div class="hover-block">
								<div class="text-cont">
									<div class="bg-rotate">
										<a href="#" target="_blank" class="info-icon ">
											<img src="/assets/d9_images/php.png" alt="" class="rotate-img-diag" width="40">
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

export default {
	components: {
		navigation,
		footerarea
	},
	data: () => ({
		show: false,
		portfolio: [
			{
				imagePath: '/assets/d9_images/point_click.jpg',
				title: 'Point click & Design',
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
				imagePath: '/assets/d9_images/pifcoin.jpg',
				title: 'pifcoin',
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
				description: 'There’s a sea of marketing tools at your disposal. But how many help you promote yourself not only as an expert in your field.',
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
				imagePath: '/assets/d9_images/socialmedia.jpg',
				title: 'Search.rec Ninja',
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
				description: 'Leading mobile (iPhone / iOS, Android) application development companies in India offering mobile apps development services.',
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
				imagePath: '/assets/d9_images/jgrobo_marketing.jpg',
				title: 'JGROBO',
				description: 'Founded in 2014, we are industry leaders in the development of marketing automation systems.',
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
				imagePath: '/assets/d9_images/beth_clifton.jpg',
				title: 'BETH CLIFTON',
				description: 'Beth serves as a Real Estate Agent at The Boulevard Company, and specializes in applying her ethics.',
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
	}
	
};



</script>
