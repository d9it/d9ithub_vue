<template>
    <div>
        <div id="ourTeam" class="height_fixed"></div>
        <div class="home_ourteam">
            <div class="services_warpper">
                <div class="container p-0">
                    <div class="homeservice_content">
                        <p class="text_sub">Our Strength</p>
                    </div>
                </div>
                <div class="mis-stage">
                    <ol class="mis-slider">
                        <li class="mis-slide">
                            <a class="mis-container">
                                <figure>
                                    <img src="/assets/d9_images/webp/digvijayvaghela.webp" alt="" title="">
                                    <figcaption>Digvijay Vaghela</figcaption>
                                    <span>Founder / Director</span>
                                </figure>
                            </a>
                        </li>
                        <li class="mis-slide">
                            <a class="mis-container">
                                <figure>
                                    <img src="/assets/d9_images/webp/dhruvpatel.webp" alt="" title="">
                                    <figcaption>Dhruv Patel</figcaption>
                                    <span>Co - Founder / CEO</span>
                                </figure>
                            </a>
                        </li>
                        <li class="mis-slide">
                            <a class="mis-container">
                                <figure>
                                    <img src="/assets/d9_images/webp/kandarppandya.webp" alt="" title="">
                                    <figcaption>Kandarp Pandya</figcaption>
                                    <span>Sr. Frontend / Web Developer</span>
                                </figure>
                            </a>
                        </li>
                        <li class="mis-slide">
                            <a class="mis-container">
                                <figure>
                                    <img src="/assets/d9_images/webp/palaksukhadiya.webp" alt="" title="">
                                    <figcaption>Palak Sukhadiya</figcaption>
                                    <span>Sr. UI/UX Designer</span>
                                </figure>
                            </a>
                        </li>
                        <li class="mis-slide">
                            <a class="mis-container">
                                <figure>
                                    <img src="/assets/d9_images/webp/amitsolanki.webp" alt="" title="">
                                    <figcaption>Amit Solanki</figcaption>
                                    <span>Sr. Laravel Developer</span>
                                </figure>
                            </a>
                        </li>
                        <li class="mis-slide">
                            <a class="mis-container">
                                <figure>
                                    <img src="/assets/d9_images/webp/sandeep_singh.webp" alt="" title="">
                                    <figcaption>Sandeep Singh</figcaption>
                                    <span>UI/UX Developer</span>
                                </figure>
                            </a>
                        </li>
                        <li class="mis-slide">
                            <a class="mis-container">
                                <figure>
                                    <img src="/assets/d9_images/webp/Asadgovani.webp" alt="" title="">
                                    <figcaption>Asad Govani</figcaption>
                                    <span>Sr. Mobile App Developer</span>
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
