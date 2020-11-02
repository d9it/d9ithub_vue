<template>
    <div>
        <div class="main_top_content">
            <navigation></navigation>
        </div>
        <Carousel></Carousel>
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
            footerarea
        },
        name: 'Home',
        data: () => ({
            show: false
        }),
        mounted(){
            setTimeout(() => {
                this.$nextTick(() => {
                    if(location.hash){
                        this.$scrollTo(`${location.hash}`)
                    }
                })
            },500)
        }
    };    
</script>
