<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light sticky-top p-0" >
            <div class="container p-0">
                <router-link class="navbar-brand" @click.native="setRouteActive('home')"  to="/" v-scroll-to="'#home'">
                    <img src="/assets/d9_images/d9ithublogo.png" alt="" class="fixed_header">
                </router-link>

                <button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse"  data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav ml-auto" id="navbarTab">
                        <li :class="{'nav-item': true, 'active': this.$store.state.activeRoute == 'home'}" @click="setRouteActive('home')">
                            <router-link to="/" id="home" class="nav-link">Home</router-link>
                        </li>
                        <li :class="{'nav-item': true, 'active': this.$store.state.activeRoute == 'aboutus'}" @click="setRouteActive('aboutus')">
                            <router-link to="/" class="nav-link">About Us</router-link>
                        </li>
                        <li :class="{'nav-item': true, 'active': this.$store.state.activeRoute == 'ourService'}" @click="setRouteActive('ourService')">
                            <router-link to="/" class="nav-link" v-scroll-to="'#ourService'"> Our Services </router-link>
                        </li>
                        <li :class="{'nav-item':true, 'dropdown':true, 'active': this.$store.state.activeRoute == 'portfolio'}" @click="setRouteActive('portfolio')">
                            <router-link to="/" class="nav-link dropdown-toggle" >Portfolio</router-link>
                            <ul class="dropdown-menu" >
                                <li @click="setRouteActive('portfolio')"><router-link class="dropdown-item" to="/php">Web Development</router-link></li>
                                <li @click="setRouteActive('portfolio')"><router-link class="dropdown-item" to="/webdesign">Graphics & Wesite Design</router-link></li>
                            </ul> 
                        </li>
                        <li :class="{'nav-item': true, 'active': this.$store.state.activeRoute == 'ourTeam'}" @click="setRouteActive('ourTeam')">
                            <router-link to="/" class="nav-link">Our Team</router-link>
                        </li>
                        <li :class="{'nav-item': true, 'active': this.$store.state.activeRoute == 'testimonial'}" @click="setRouteActive('testimonial')">
                            <router-link to="/" class="nav-link">Testimonial</router-link>
                        </li>
                        <li :class="{'nav-item': true, 'active': this.$store.state.activeRoute == 'contactus'}" @click="setRouteActive('contactus')">
                            <router-link to="/" class="nav-link">Contact Us</router-link>
                        </li>
                        <!-- <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" v-scroll-to="'#ourService'"> Our Services </a>
                            <ul class="dropdown-menu" >
                                <li><router-link class="dropdown-item" to="/ourService/webdevelopment">Web Development Services</router-link></li>
                                <li><router-link class="dropdown-item" to="/ourService/webdesign">Graphics & Website Design</router-link></li>
                                <li><router-link class="dropdown-item" to="/ourService/cmsandecommerce">CMS & Ecommerce services</router-link></li>
                                <li><router-link class="dropdown-item" to="/ourService/mobileDevelopment">Mobile Development Services</router-link></li>
                                <li><router-link class="dropdown-item" to="/ourService/enterpriseSolution">Enterprise Solutions</router-link></li>
                                <li><router-link class="dropdown-item" to="/ourService/hireDedicatedResource">Hire A Developer</router-link></li>
                            </ul> 
                        </li>-->
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        data: () => ({
                show: false,
            }),
        methods: {
            falseShow () {
                this.show = false
            },
            setRouteActive(route){
                this.$v_session.set('activeRoute', route)
                this.$store.state.activeRoute = route;
                this.$nextTick(()=> {
                    setTimeout(() => {
                        const options = {
                            easing: 'ease-int',
                            lazy: true,
                        } 
                        this.$scrollTo(`#${route}`, 200, options) 
                    },100)
                });
                if($('.navbar-toggler').is(':visible')) {
                    $('#navbarCollapse').removeClass('show');
                }
            }
        },
        mounted() {
            if(this.$v_session.has('activeRoute')){
                this.$store.state.activeRoute = this.$v_session.get('activeRoute')
                const options = {
                    easing: 'ease-int',
                    lazy: true,
                } 
                this.$scrollTo(`#${this.$store.state.activeRoute}`, 200, options)
            }
        }  
    };
</script>
