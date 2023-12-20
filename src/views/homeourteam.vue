<template>
    <div>
        <div class="home_ourteam">
            <div class="services_warpper">
                <div class="container p-0">
                    <div class="homeservice_content text-center">
                        <p class="text_sub" data-aos="zoom-in" data-aos-duration="1000">Our Strength</p>
                    </div>
                </div>
                <div class="mis-stage">
                    <ol class="mis-slider">
                        <li class="mis-slide" data-aos="flip-left" data-aos-duration="1500">
                            <a class="mis-container">
                                <figure>
                                    <img src="/assets/d9_images/webp/digvijayvaghela.webp" alt="img" width="100%" height="auto">
                                    <figcaption>Digvijaysinh Vaghela</figcaption>
                                    <span>Managing Director</span>
                                </figure>
                            </a>
                        </li>
                        <li class="mis-slide" data-aos="flip-left" data-aos-duration="1500">
                            <a class="mis-container">
                                <figure>
                                    <img src="/assets/d9_images/webp/dhruvpatel.webp" alt="img" width="100%" height="auto">
                                    <figcaption>Dhruv Patel</figcaption>
                                    <span>CEO</span>
                                </figure>
                            </a>
                        </li>                       
                        <li class="mis-slide" data-aos="flip-left" data-aos-duration="1500">
                            <a class="mis-container">
                                <figure>
                                    <img src="/assets/d9_images/webp/palaksukhadiya.webp" alt="img" width="100%" height="auto">
                                    <figcaption>Palak Sukhadiya</figcaption>
                                    <span>Web & Graphics Designer</span>
                                </figure>
                            </a>
                        </li>
                        <li class="mis-slide" data-aos="flip-left" data-aos-duration="1500">
                            <a class="mis-container">
                                <figure>
                                    <img src="/assets/d9_images/webp/amitsolanki.webp" alt="img" width="100%" height="auto">
                                    <figcaption>Amit Solanki</figcaption>
                                    <span>Sr. Laravel & AWS Developer</span>
                                </figure>
                            </a>
                        </li>
                        <li class="mis-slide" data-aos="flip-left" data-aos-duration="1500">
                            <a class="mis-container">
                                <figure>
                                    <img src="/assets/d9_images/webp/sandeep_singh.webp" alt="img" width="100%" height="auto">
                                    <figcaption>Sandeep Singh</figcaption>
                                    <span>Full Stack & DevOps Developer</span>
                                </figure>
                            </a>
                        </li>
                        <li class="mis-slide" data-aos="flip-left" data-aos-duration="1500">
                            <a class="mis-container">
                                <figure>
                                    <img src="/assets/d9_images/webp/tulsi_vanod.webp" alt="img" width="100%" height="auto">
                                    <figcaption>Tulsi Vanol</figcaption>
                                    <span>Java & Mobile App Developer</span>
                                </figure>
                            </a>
                        </li>
                        <li class="mis-slide" data-aos="flip-left" data-aos-duration="1500">
                            <a class="mis-container">
                                <figure>
                                    <img src="/assets/d9_images/webp/chetan_singhal.webp" alt="img" width="100%" height="auto">
                                    <figcaption>Chetan Singhal</figcaption>
                                    <span>Sr. Laravel & Backend Developer</span>
                                </figure>
                            </a>
                        </li> 
                        <li class="mis-slide" data-aos="flip-left" data-aos-duration="1500">
                            <a class="mis-container">
                                <figure>
                                    <img src="/assets/d9_images/webp/hardik_chaniyara.webp" alt="img" width="100%" height="auto">
                                    <figcaption>Hardik Chaniyara</figcaption>
                                    <span>React Js Developer</span>
                                </figure>
                            </a>
                        </li>
                        <li class="mis-slide" data-aos="flip-left" data-aos-duration="1500">
                            <a class="mis-container">
                                <figure>
                                    <img src="/assets/d9_images/webp/jagrut_rabadiya.webp" alt="img" width="100%" height="auto">
                                    <figcaption>Jagrut Rabadiya</figcaption>
                                    <span>UI/UX Designer</span>
                                </figure>
                            </a>
                        </li>   
                        <li class="mis-slide" data-aos="flip-left" data-aos-duration="1500">
                            <a class="mis-container">
                                <figure>
                                    <img src="/assets/d9_images/webp/kinjaljain.webp" alt="img" width="100%" height="auto">
                                    <figcaption>Kinjal Jain</figcaption>
                                    <span>Jr. Frontend/React Js Developer</span>
                                </figure>
                            </a>
                        </li>                          
                        <li class="mis-slide" data-aos="flip-left" data-aos-duration="1500">
                            <a class="mis-container">
                                <figure>
                                    <img src="/assets/d9_images/webp/maulik_dobariya.webp" alt="img" width="100%" height="auto">
                                    <figcaption>Maulik Dobariya</figcaption>
                                    <span>Laravel & API Expert</span>
                                </figure>
                            </a>
                        </li>                     
                    </ol>
                </div>
            </div>
            <!-- <div class="decor-text decor-text-1">Strength</div> -->
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
        mounted(){
            $(document).ready(function(){
                jQuery(function ($) {
                    var slider = $('.mis-stage').miSlider({
                        slidesOnStage: false,
                        slidePosition: 'center',
                        slideStart: 'beg',
                        slideScaling: 150,
                        offsetV:0,
                        centerV: true,
                        navButtonsOpacity: 1
                    });
                });
            })
        }
    };
    
</script>
