<template>
    <div class="inner_pages">
        <navigation></navigation>
        <!-- START Breadcume area -->
        <div class="breadcume our_services innerall">
            <div class="container">
                <div class="breadcume_inner">
                    <div class="breadcume_title">
                        <h1 data-aos="zoom-in" data-aos-duration="1200">Blog</h1>
                    </div>
                </div>
            </div>
        </div>
        <!-- end Breadcume area -->

        <div class="testimonial_inside blog_section text-center">
			<div class="container">
				<div class="row">
                    <div class="col-md-6 col-lg-4 col-sm-12 col-12" data-aos="flip-left" data-aos-duration="1200">
						<div class="inner_blogpost">
							<div class="mb-3 blog_image">
                                <router-link to="/blogdetail">
                                    <img class="mb-3" src="/assets/d9_images/blog_1.jpg" alt="">
                                </router-link>
                            </div>
                            <div class="d-flex align-items-center">
                                <i class="fas fa-calendar-alt mr-2"></i>
                                <strong>10<sup>th</sup> Feb 2023</strong>
                            </div>
                            <router-link to="/blogdetail">
                                <h4>Reasons Why UX is Important in Website Development</h4>
                            </router-link>
                            <p>The website development process looks simple but the success of any website is a result of complex processes, brainstorming, collaboration, and endless communication between the project stakeholders, the website designers as well as the development team.</p>
						</div>
					</div>
                </div>
            </div>
        </div>

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


