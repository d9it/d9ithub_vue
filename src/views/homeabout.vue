<template>
    <div>
        <div class="home_about_us" id="aboutus">
            <section class="about_us">
                <div class="container p-0">
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="block-decorate-img">
                                <img src="/assets/d9_images/aboutus.png" alt="" title="">
                            </div>
                        </div>
                        <div class="col-lg-7 col-12">
                            <div class="home_abouttext">
                                <div class="middle_heading">About us</div>
                                <div id="demo" class="carousel slide" data-ride="carousel">
                                    <!-- The slideshow -->
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <div class="right_about_slide">
                                                <h3 class="devider-bottom">Who We Are?</h3>
                                                <p class="mt-3">
                                                    We are team of people who are dedicated, experienced and motivated for providing best quality products. We believe in 100% customer satisfaction and we always try to provide excellent quality products to the customers over the world. It does not matter which country the client belongs to, we have clients around the globe.
                                                </p>
                                                <a class="btn btn_blue" href="#">Read More</a>
                                            </div>
                                        </div>
                                        <div class="carousel-item ">
                                            <div class="right_about_slide">
                                                <h3 class="devider-bottom">What We Do?</h3>
                                                <p class="mt-3">
                                                    We love creating easy to use, effective and beautiful websites and specialize in responsive web design, HTML5 & Mobile applications. D9ithub has expertise on the forefront of new and progressive technologies. We have a great and loyal client base, some of which we have been working with for over 3 years! We don’t really advertise and most of our work is from referrals or repeat business.
                                                </p>
                                                <a class="btn btn_blue" href="#">Read More</a>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div class="right_about_slide">
                                                <h3 class="devider-bottom">Why D9ithub?</h3>
                                                <p class="mt-3">
                                                    D9ithub specializes in Web Applications, Mobile Application, Framework, Open source & E-Commerce Development. Also, we have possessed expertise in Web designing, Logo designing, Brand Identity Design, Digital Marketing, Software Testing and much more. You name the digital service, we have it. We do not only provide the service but our after- service approach is something that will keep you tied-up with us for a longer period of time .
                                                </p>
                                                <a class="btn btn_blue" href="#">Read More</a>
                                            </div>
                                        </div>                                       
                                    </div>

                                    <!-- Indicators -->
                                    <ul class="carousel-indicators">
                                        <li data-target="#demo" data-slide-to="0" class="active"></li>
                                        <li data-target="#demo" data-slide-to="1"></li>
                                        <li data-target="#demo" data-slide-to="2"></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="decor-text decor-text-1">ABOUT</div>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
        },
        data: () => ({
            show: false
        }),
    };
    
</script>