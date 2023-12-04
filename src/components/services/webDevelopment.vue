<template>
	<div class="inner_pages">
		<navigation></navigation>
		<!-- START Breadcume area -->
		<div class="breadcume our_services innerall">
			<div class="container">
				<div class="breadcume_inner">
					<div class="breadcume_title">
						<h1 data-aos="zoom-in" data-aos-duration="1200">Web Development</h1>
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
							<h3 data-aos="fade-right" data-aos-duration="1000">Website Development Service & Solution</h3>
							<p class="mt-3" data-aos="fade-right" data-aos-duration="1500">Build secure and scalable web applications supported by innovative solutions, ingenious methodology and global delivery model. 70+ web projects delivered worldwide. Web development is the process of building and maintaining websites or web applications. It encompasses a variety of tasks and skills, including web design, front-end development, back-end development, and web server configuration.</p>
							<p class="mt-3" data-aos="fade-right" data-aos-duration="1500">Web development is a dynamic field with continuous advancements in technologies and frameworks. Developers often need to stay updated with the latest tools and practices to build modern and efficient web applications.</p>
                            <router-link to="/contactus" class="btn btn_link mt-2" type="submit">Let's Connect</router-link>
						</div>
					</div>
					<div class="col-md-6 col-12 text-center"  data-aos="zoom-in" data-aos-duration="1200">
						<img src="/assets/d9_images/what_we_do.png" alt="" title="" class="img-fluid">
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
							<h2>Our Detailed Web Development Process</h2>
                            <p class="mb-0">Web development is a dynamic field with continuous advancements in technologies and frameworks. Developers often need to stay updated with the latest tools and practices to build modern and efficient web applications.</p>
                        </div>
                    </div>
                    <div class="col-md-7 mt-4">
                        <div class="service_inner_pages_card_item">
                            <h5>01</h5>
                            <hr>
                            <h3>Web Design</h3>
                            <p class="mb-0">This involves creating the visual aspects of a website or web application. It includes the layout, color scheme, typography, and overall aesthetics. Web designers use tools like graphic design software to create the visual elements.</p>
                        </div>
                        <div class="service_inner_pages_card_item">
                            <h5>02</h5>
                            <hr>
                            <h3>Front-End Development</h3>
                            <p class="mb-0">Front-end development focuses on building the user interface and user experience of a website or web application. It involves using technologies like HTML, CSS, and JavaScript to create interactive and responsive web pages. Front-end developers ensure that the website looks good and functions well on different devices and browsers.</p>
                        </div>
                        <div class="service_inner_pages_card_item">
                            <h5>03</h5>
                            <hr>
                            <h3>Back-End Development</h3>
                            <p class="mb-0">Back-end development involves working on the server side of a website or web application. Back-end developers create the server logic, databases, and application architecture that enable the website to function. Common back-end programming languages include PHP, Python, Ruby, Java, and Node.js.</p>
                        </div>
                        <div class="service_inner_pages_card_item">
                            <h5>04</h5>
                            <hr>
                            <h3>Web Servers and Hosting</h3>
                            <p class="mb-0">Understanding how web servers operate and configuring them is crucial in web development. Developers need to choose an appropriate hosting environment for their web applications, considering factors such as scalability, performance, and security.</p>
                        </div>
                        <div class="service_inner_pages_card_item">
                            <h5>05</h5>
                            <hr>
                            <h3>Database Management</h3>
                            <p class="mb-0">Many web applications require databases to store and retrieve data. Developers must be familiar with database management systems (DBMS) and how to interact with databases using queries. Popular databases include MySQL, PostgreSQL, MongoDB, and SQLite.</p>
                        </div>
                        <div class="service_inner_pages_card_item">
                            <h5>06</h5>
                            <hr>
                            <h3>Web Standards and Protocols</h3>
                            <p class="mb-0">Developers need to adhere to web standards and protocols to ensure compatibility and accessibility. Understanding protocols such as HTTP and HTTPS is essential for communication between clients and servers.</p>
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
                    console.log($(window).scrollTop());
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