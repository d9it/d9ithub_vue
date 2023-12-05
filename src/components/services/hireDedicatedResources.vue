<template>
	<div class="inner_pages">
		<navigation></navigation>
		<!-- START Breadcume area -->
		<div class="breadcume our_services innerall">
			<div class="container">
				<div class="breadcume_inner">
					<div class="breadcume_title">
						<h1 data-aos="zoom-in" data-aos-duration="1200">Hire Dedicated Resources</h1>
					</div>
				</div>
			</div>
		</div>
		<!-- end Breadcume area -->
		<div class="container">
			<div class="web_dev_service pb-5">
				<div class="row align-items-center">
					<div class="col-md-6 col-12">
						<div class="pt-5">
							<h3 data-aos="fade-right" data-aos-duration="1000">Hire Dedicated Resources</h3>
							<p class="mt-3" data-aos="fade-right" data-aos-duration="1500">"Hire Dedicated Resources" refers to the practice of hiring professionals or teams to work exclusively on a particular project or tasks for a specified duration. This model is commonly used in the context of software development, web development, digital marketing, and other IT-related projects. The dedicated resources, such as developers, designers, or marketers, are exclusively allocated to your project and work as an extension of your in-house team.</p>
                            <router-link to="/contactus" class="btn btn_link mt-2" type="submit">Let's Connect</router-link>
						</div>
					</div>
					<div class="col-md-6 col-12 text-center pt-4"  data-aos="zoom-in" data-aos-duration="1200">
						<img src="/assets/d9_images/who_we_are.png" alt="" title="" class="img-fluid">
					</div>
				</div>
			</div>
		</div>
        <div class="review_services py-4">
            <div class="container">
				<div class="row">
                    <div class="col-md-4 text-center review_service_item">
                        <h4>COMPLETED PROJECT</h4>
                        <h2 class="mb-0">{{ projects }}+</h2>
                    </div>
                    <div class="col-md-4 text-center review_service_item">
                        <h4>EXPERIENCE</h4>
                        <h2 class="mb-0">{{ experience }}years</h2>
                    </div>
                    <div class="col-md-4 text-center review_service_item last">
                        <h4>CUSTOMERS</h4>
                        <h2 class="mb-0">{{ customer }}+</h2>
                    </div>
				</div>
			</div>
		</div>
        <div class="container">
            <div class="service_inner_pages_card py-4 mb-5">
				<div class="row position-relative">
                    <div class="col-md-5 mt-4">
                        <div class="services_left_side">
							<h2>Hire Dedicated Resource Process</h2>
                            <p class="mb-0">These systems play a crucial role in helping organizations manage and optimize their day-to-day operations, make informed decisions, and achieve their business goals.</p>
                        </div>
                    </div>
                    <div class="col-md-7 mt-4">
                        <div class="service_inner_pages_card_item">
                            <h5>01</h5>
                            <hr>
                            <h3>Exclusivity & Flexibility</h3>
                            <p class="mb-0">The hired professionals work exclusively on your project, allowing for a high level of focus and commitment and you have the flexibility to scale the team up or down based on project requirements. This can be particularly useful for dynamic projects with changing needs.</p>
                        </div>
                        <div class="service_inner_pages_card_item">
                            <h5>02</h5>
                            <hr>
                            <h3>Control</h3>
                            <p class="mb-0">You have more control over the selection process and can choose resources with specific skills and expertise that align with your project requirements.</p>
                        </div>
                        <div class="service_inner_pages_card_item">
                            <h5>03</h5>
                            <hr>
                            <h3>Communication</h3>
                            <p class="mb-0">As the dedicated resources work closely with your team, communication tends to be more seamless, fostering collaboration and understanding.</p>
                        </div>
                        <div class="service_inner_pages_card_item">
                            <h5>04</h5>
                            <hr>
                            <h3>Time Zone Advantage</h3>
                            <p class="mb-0">Depending on the outsourcing location, you might benefit from a time zone advantage. For example, you could have a team working on your project while you sleep, leading to faster turnaround times.</p>
                        </div>
                    </div>
				</div>
			</div>
		</div>
		<footerarea></footerarea>
	</div>
</template>

<script>
	import navigation from "../common/navigation"
	import footerarea from '../common/footerarea'
	import AboveFooter from '../common/abovefooter'
	export default {
		components: {
			navigation,
			AboveFooter,
			footerarea
		},
		data: () => ({
            show: false,
            projects: 0,
            experience: 0,
            customer: 0,
		}),
		mounted(){
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
            this.counter();
		},
        methods: {
            counter() {
                $(window).scroll(() => {
                    if ($(window).scrollTop() >= 200) {                        
                        const clearProject = setInterval(() => {
                            this.projects != 40 ? this.projects += 1 : clearInterval(clearProject);
                        }, 100);
                        const clearExp = setInterval(() => {
                            this.experience != 10 ? this.experience += 1 : clearInterval(clearExp);
                        }, 100);
                        const clearCustomer = setInterval(() => {
                            this.customer != 1140 ? this.customer += 1 : clearInterval(clearCustomer);
                        }, 100);
                    }
                })
            }
        }
    };
</script>