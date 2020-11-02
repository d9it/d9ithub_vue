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
    import navigation from '../components/navigation';
    import Carousel from '../components/carousel';
    import HomeAbout from '../views/homeabout';
    import HomeServices from '../views/homeservices';
    import HomePortfolio from '../views/homeportfolio';
    import HomeOurteam from '../views/homeourteam';
    import HomeTestimonial from '../views/hometestimonial';
    import HomeContactus from '../views/homecontactus';
    import footerarea from '../views/footerarea'
    import LoaderComponent from '../components/loader/loader'

    export default {
        components: {
            navigation,
            Carousel,
            HomeAbout,
            HomeServices,
            HomePortfolio,
            HomeOurteam,
            HomeTestimonial,
            HomeContactus,
            footerarea,
            LoaderComponent
        },
        name: 'Home',
        data: () => ({
            show: false,
            showLoader: false
        }),
        mounted(){
            this.showLoader = true
            const self = this;
            const events = [
                "onpageshow"
            ];

            // const eventLogger = event => {
            //     if(event.type == 'onpageshow') {
            //         self.showLoader = false
            //     }
            // };
            self.showLoader = false
            events.forEach(eventName =>
                window.addEventListener(eventName, eventLogger)
            );
        }
    };    
</script>
