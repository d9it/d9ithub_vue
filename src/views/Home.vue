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
            setTimeout(()=> {
                console.log(location.search,'1111')
                if(location.search == ''){
                    this.$scrollTo('#home')
                }else if(location.search == '?about'){
                    this.$scrollTo('#aboutus')
                }else if(location.search == '?ourService'){
                    this.$scrollTo('#ourService')
                }else if(location.search == '?portfolio'){
                    this.$scrollTo('#portfolio')
                }else if(location.search == '?ourTeam'){
                    this.$scrollTo('#ourTeam')
                }else if(location.search == '?testimonial'){
                    this.$scrollTo('#testimonial')
                }else if(location.search == '?contactus'){
                    this.$scrollTo('#contactus')
                }
            },500)
        }  
    };    
</script>
