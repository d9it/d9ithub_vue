<template>
	<div class="inner_pages">
		<navigation></navigation>
		<!-- START Breadcume area -->
		<div class="breadcume our_services innerall">
			<div class="container">
				<div class="breadcume_inner">
					<div class="breadcume_title">
						<h1 data-aos="zoom-in" data-aos-duration="1200">Enterprise Solutions</h1>
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
							<h3 data-aos="fade-right" data-aos-duration="1000">Enterprise Solutions</h3>
							<p class="mt-3" data-aos="fade-right" data-aos-duration="1500">Enterprise Solutions, often abbreviated as ESS, refers to software or services designed for businesses and organizations to help them operate efficiently, manage their resources effectively, and enhance their overall productivity. Enterprise Solutions are crucial for large businesses and organizations to streamline their operations, reduce costs, and enhance their overall efficiency and effectiveness.</p>
                            <router-link to="/contactus" class="btn btn_link mt-2" type="submit">Let's Connect</router-link>
						</div>
					</div>
					<div class="col-md-6 col-12 text-center pt-4"  data-aos="zoom-in" data-aos-duration="1200">
						<img src="/assets/d9_images/why_d9.png" alt="" title="" class="img-fluid">
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
							<h2>Our Detailed Enterprise Solutions Process</h2>
                            <p class="mb-0">These systems play a crucial role in helping organizations manage and optimize their day-to-day operations, make informed decisions, and achieve their business goals.</p>
                        </div>
                    </div>
                    <div class="col-md-7 mt-4">
                        <div class="service_inner_pages_card_item">
                            <h5>01</h5>
                            <hr>
                            <h3>Scalability</h3>
                            <p class="mb-0">Enterprise solutions are designed to scale as the organization grows, accommodating increased data, users, and functionalities.</p>
                        </div>
                        <div class="service_inner_pages_card_item">
                            <h5>02</h5>
                            <hr>
                            <h3>Integration</h3>
                            <p class="mb-0">They often integrate with existing systems and applications within the organization to ensure seamless data flow and communication between different departments.</p>
                        </div>
                        <div class="service_inner_pages_card_item">
                            <h5>03</h5>
                            <hr>
                            <h3>Comprehensive Functionality</h3>
                            <p class="mb-0">Enterprise solutions typically offer a wide range of features and functionalities to support various business processes such as finance, human resources, supply chain management, customer relationship management (CRM), and more.</p>
                        </div>
                        <div class="service_inner_pages_card_item">
                            <h5>04</h5>
                            <hr>
                            <h3>Customization</h3>
                            <p class="mb-0">These solutions can be customized to meet the specific needs and workflows of a particular organization, allowing for flexibility in adapting to unique business requirements.</p>
                        </div>
                        <div class="service_inner_pages_card_item">
                            <h5>05</h5>
                            <hr>
                            <h3>Security</h3>
                            <p class="mb-0">Enterprise solutions prioritize data security and often include robust security features to protect sensitive information.</p>
                        </div>
                        <div class="service_inner_pages_card_item">
                            <h5>06</h5>
                            <hr>
                            <h3>Collaboration and Communication</h3>
                            <p class="mb-0">Many enterprise solutions include tools for collaboration and communication to enhance teamwork and information sharing within the organization.</p>
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