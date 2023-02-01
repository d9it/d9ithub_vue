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
                                    <img src="/assets/d9_images/webp/digvijayvaghela.webp" alt="" title="">
                                    <figcaption>Digvijaysinh Vaghela</figcaption>
                                    <span>Managing Director</span>
                                </figure>
                            </a>
                        </li>
                        <li class="mis-slide" data-aos="flip-left" data-aos-duration="1500">
                            <a class="mis-container">
                                <figure>
                                    <img src="/assets/d9_images/webp/dhruvpatel.webp" alt="" title="">
                                    <figcaption>Dhruv Patel</figcaption>
                                    <span>CEO</span>
                                </figure>
                            </a>
                        </li>                       
                        <li class="mis-slide" data-aos="flip-left" data-aos-duration="1500">
                            <a class="mis-container">
                                <figure>
                                    <img src="/assets/d9_images/webp/palaksukhadiya.webp" alt="" title="">
                                    <figcaption>Palak Sukhadiya</figcaption>
                                    <span>Web & Graphics Designer</span>
                                </figure>
                            </a>
                        </li>
                        <li class="mis-slide" data-aos="flip-left" data-aos-duration="1500">
                            <a class="mis-container">
                                <figure>
                                    <img src="/assets/d9_images/webp/amitsolanki.webp" alt="" title="">
                                    <figcaption>Amit Solanki</figcaption>
                                    <span>Sr. Laravel & AWS Developer</span>
                                </figure>
                            </a>
                        </li>
                        <li class="mis-slide" data-aos="flip-left" data-aos-duration="1500">
                            <a class="mis-container">
                                <figure>
                                    <img src="/assets/d9_images/webp/sandeep_singh.webp" alt="" title="">
                                    <figcaption>Sandeep Singh</figcaption>
                                    <span>Full Stack & DevOps Developer</span>
                                </figure>
                            </a>
                        </li>
                        <li class="mis-slide" data-aos="flip-left" data-aos-duration="1500">
                            <a class="mis-container">
                                <figure>
                                    <img src="/assets/d9_images/webp/tulsi_vanod.webp" alt="" title="">
                                    <figcaption>Tulsi Vanol</figcaption>
                                    <span>Java & Mobile App Developer</span>
                                </figure>
                            </a>
                        </li>
                        <li class="mis-slide" data-aos="flip-left" data-aos-duration="1500">
                            <a class="mis-container">
                                <figure>
                                    <img src="/assets/d9_images/webp/hardik_chaniyara.webp" alt="" title="">
                                    <figcaption>Hardik Chaniyara</figcaption>
                                    <span>React Js Developer</span>
                                </figure>
                            </a>
                        </li>
                        <li class="mis-slide" data-aos="flip-left" data-aos-duration="1500">
                            <a class="mis-container">
                                <figure>
                                    <img src="/assets/d9_images/webp/jagrut_rabadiya.webp" alt="" title="">
                                    <figcaption>Jagrut Rabadiya</figcaption>
                                    <span>UI/UX Designer</span>
                                </figure>
                            </a>
                        </li>   
                        <li class="mis-slide" data-aos="flip-left" data-aos-duration="1500">
                            <a class="mis-container">
                                <figure>
                                    <img src="/assets/d9_images/webp/kinjaljain.webp" alt="" title="">
                                    <figcaption>Kinjal Jain</figcaption>
                                    <span>Jr. Frontend/React Js Developer</span>
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
