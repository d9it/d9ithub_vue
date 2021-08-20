<template>
    <div>
        <LoaderComponent v-if="showLoader"></LoaderComponent>
        <div class="main_top_content">
            <navigation></navigation>
        </div>
        <Carousel id="home"></Carousel>
        <HomeAbout></HomeAbout>
        <HomeServices></HomeServices>
        <HomePortfolio></HomePortfolio>
        <HomeOurteam></HomeOurteam>
        <HomeTestimonial></HomeTestimonial>
        <HomeContactus></HomeContactus>
        <footerarea></footerarea>
    </div>
</template>

<script>
    // import navigation from '../components/navigation';
    // import Carousel from '../components/carousel';
    // import HomeAbout from '../views/homeabout';
    // import HomeServices from '../views/homeservices';
    // import HomePortfolio from '../views/homeportfolio';
    // import HomeOurteam from '../views/homeourteam';
    // import HomeTestimonial from '../views/hometestimonial';
    // import HomeContactus from '../views/homecontactus';
    // import footerarea from '../views/footerarea'
    // import LoaderComponent from '../components/loader/loader'
    // const navigation = () => import("../components/navigation.vue");

    export default {
        components: {
            navigation: () => import("../components/navigation.vue"),
            Carousel: () => import("../components/carousel.vue"),
            HomeAbout: () => import("../views/homeabout.vue"),
            HomeServices: () => import("../views/homeservices.vue"),
            HomePortfolio: () => import("../views/homeportfolio.vue"),
            HomeOurteam: () => import("../views/homeourteam.vue"),
            HomeTestimonial: () => import("../views/hometestimonial.vue"),
            HomeContactus: () => import("../views/homecontactus.vue"),
            footerarea: () => import("../views/footerarea.vue"),
            LoaderComponent: () => import("../components/loader/loader.vue")
        },
        name: 'Home',
        data: () => ({
            show: false,
            showLoader: false
        }),
        mounted(){
            const self = this
            document.onreadystatechange = function() { 
                if (document.readyState !== "complete") {  
                    self.showLoader = true;
                } else { 
                    self.showLoader = false;
                } 
            };
        }
    };    
</script>
