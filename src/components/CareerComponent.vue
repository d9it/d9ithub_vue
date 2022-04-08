<template>
  	<div class="inner_pages">
		<navigation></navigation>
		<!-- START Breadcume area -->
		<div class="breadcume career">
			<div class="container">
				<div class="breadcume_inner">
					<div class="breadcume_title">
						<h1>Career</h1>
					</div>
				</div>
			</div>
		</div>
		<!-- end Breadcume area -->
		<div class="header_about career">
			<div class="container" >
				<div class="inner_career"  >
					<div class="section-title" >
						<h2>Senior Wordpress Developer</h2>
					</div>
					<div class="col-sm-12 col-xs-12 col-md-12">
						<div class="career_detail">
							<div class="row">
								<div class="col-sm-8 col-xs-12 col-md-8">
									<h3>Requirement: </h3>
									<div>
										<ul class="requirement_detail">
											<li>Minimum 1 year of experience in PHP, wordpress, MySQL and JavaScript</li>
											<li>Must have knowledge of OOPS Concepts</li>
											<li>Develop and manage wordpress websites, blogs, landing pages, CMS integration, theme/ template design etc. </li>
											<li>Basic Knowledge of Wordpress,psd to html,CSS3,HTML5,Boostrap,psd to wordpress,etc.</li> 
											<li>Develop and manage wordpress architecture and plugins</li>
											<li>Knowledge of latest trends and technologies required </li>
											<li>Good knowledge of coding, server deployment & troubleshooting required  </li>
											<li>Good English Communication Skills</li>
											<li>Having basic knowledge of theme integration & PSD to Wordpress is a plus</li>
											<li>Knowledge of other PHP CMS like magento will be add on thing.</li>
										</ul>
									</div>
									<h3><br/>Roles & Responsibilities: </h3>
									<div>
										<ul class="requirement_detail">
											<li>Working on full projects of wordpress,website development,from scratch to finish.</li>
											<li>Delivering 100% responsive & perfect cross browser compatibility on projects.</li>
											<li>Communicating with clients for changes in website, layout, bugs fixing and delivering the project</li>
											<li>Making Website SEO friendly & as per the guidelines of Search Engines</li>
										</ul>
									</div>
									<p>To apply, please send your CV to <b>d9ithub@gmail.com</b> with the position reference in the subject.</p>
								</div>
								<div class="col-sm-4 col-xs-12 col-md-4">
									<div class="right_career">
										<h3><i class="fas fa-briefcase"></i> &nbsp;Experience </h3>
										<ul>
											<li><p>2 - 4 Year</p></li>
										</ul>
										<h3><i class="fas fa-user"></i> &nbsp;No. Of Positions </h3>
										<ul>
											<li><p>1</p></li>
										</ul>
										<h3><i class="fas fa-graduation-cap"></i> &nbsp;Education Qualification </h3>
										<ul>
											<li><p>Graduates (BE, BTECH, BCA, MTECH, MCA)</p></li>
										</ul>
										<h3><i class="fas fa-address-card"></i> &nbsp;Job Type</h3>
										<ul>
											<li><p>Full-time</p></li>
										</ul>
										<h3><i class="fas fa-building"></i> &nbsp;Industry </h3>
										<ul>
											<li><p>IT-Software / Software Services</p></li>
										</ul>
										<h3><i class="fas fa-clock"></i> &nbsp;Working Hours</h3>
										<ul>
											<li>Mon-Fri/ 9.30 AM to 7 PM</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<AboveFooter></AboveFooter>
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


