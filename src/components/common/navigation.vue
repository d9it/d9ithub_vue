<template>
    <div>
        <div class="top_header">
            <div class="container">
                <div class="row m-0">
                    <div class="col-md-12 text-center">
                        <p>Top Developers & Designers Agency(45 hours / week) - Website & Mobile Application Development</p>
                    </div>
                </div>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light sticky-top p-0" >
            <div class="container p-0">
                <router-link class="navbar-brand text-center" @click.native="setRouteActive('home')"  to="/" v-scroll-to="'#home'">
                    <img src="/assets/d9_images/d9ithublogo.png" alt="" class="fixed_header">
                    <span>A caring eye for your software solutions</span>
                </router-link>

                <button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse"  data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav ml-auto" id="navbarTab">
                        <li :class="{'nav-item': true, 'active': this.$store.state.activeRoute == 'home'}" @click="setRouteActive('home')">
                            <router-link to="/" id="home" class="nav-link">Home</router-link>
                        </li>
                        <!-- <li :class="{'nav-item': true, 'active': this.$store.state.activeRoute == 'aboutus'}" @click="setRouteActive('aboutus')">
                            <router-link to="/aboutus" class="nav-link">About Us</router-link>
                        </li> -->
                        <li :class="{'nav-item':true, 'dropdown':true, 'active': this.$store.state.activeRoute == 'aboutus'}" >
                            <a href="javascript:void(0)" class="nav-link dropdown-toggle" >About Us</a>
                            <ul class="dropdown-menu" >
                                <li @click="setRouteActive('aboutus')"><router-link class="dropdown-item" to="/aboutus">About D9ithub</router-link></li>
                                <li @click="setRouteActive('aboutus')"><router-link class="dropdown-item" to="/ourteam">Our Team</router-link></li>
                            </ul> 
                        </li>
                        <li :class="{'nav-item': true, 'active': this.$store.state.activeRoute == 'ourService'}" @click="setRouteActive('ourService')">
                            <router-link to="/ourService" class="nav-link" v-scroll-to="'#ourService'"> Our Services </router-link>
                        </li>
                        <li :class="{'nav-item':true, 'dropdown':true, 'active': this.$store.state.activeRoute == 'portfolio'}" >
                            <a href="javascript:void(0)" class="nav-link dropdown-toggle" >Portfolio</a>
                            <ul class="dropdown-menu" >
                                <li :class="{'nav-item':true, 'dropdown':true, 'active': this.$store.state.activeRoute == 'portfolio'}" @click="setRouteActive('portfolio')">
                                    <router-link class="dropdown-item dropdown-toggle" to="/php">Web Development</router-link>
                                    <ul class="dropdown-menu" >
                                        <li @click="setRouteActive('portfolio')"><router-link class="dropdown-item" to="/php">PHP</router-link></li>
                                        <li @click="setRouteActive('portfolio')"><router-link class="dropdown-item" to="/laravel">Laravel</router-link></li>
                                        <li @click="setRouteActive('portfolio')"><router-link class="dropdown-item" to="/vue">Vue</router-link></li>
                                        <li @click="setRouteActive('portfolio')"><router-link class="dropdown-item" to="/wordpress">Wordpress</router-link></li>
                                        <li @click="setRouteActive('portfolio')"><router-link class="dropdown-item" to="/ecommerce">Ecommerce</router-link></li>
                                        <li @click="setRouteActive('portfolio')"><router-link class="dropdown-item" to="/mobile">Mobile app</router-link></li>
                                    </ul>
                                </li>
                                <li :class="{'nav-item':true, 'dropdown':true, 'active': this.$store.state.activeRoute == 'portfolio'}" @click="setRouteActive('portfolio')">
                                    <router-link class="dropdown-item dropdown-toggle" to="/webdesign">Graphics & Wesite Design</router-link>
                                    <ul class="dropdown-menu" >
                                        <li @click="setRouteActive('portfolio')"><router-link class="dropdown-item" to="/webdesign">Web Design</router-link></li>
                                        <li @click="setRouteActive('portfolio')"><router-link class="dropdown-item" to="/psd">PSD</router-link></li>
                                        <li @click="setRouteActive('portfolio')"><router-link class="dropdown-item" to="/logo">Logo</router-link></li>
                                        <li @click="setRouteActive('portfolio')"><router-link class="dropdown-item" to="/responsive">Responsive</router-link></li>
                                    </ul>
                                </li>
                            </ul> 
                        </li>
                        <!-- <li :class="{'nav-item': true, 'active': this.$store.state.activeRoute == 'ourTeam'}" @click="setRouteActive('ourTeam')">
                            <router-link to="/ourteam" class="nav-link">Our Team</router-link>
                        </li> -->
                        <li :class="{'nav-item': true, 'active': this.$store.state.activeRoute == 'testimonial'}" @click="setRouteActive('testimonial')">
                            <router-link to="/testimonial" class="nav-link">Testimonial</router-link>
                        </li>
                        <!-- <li :class="{'nav-item': true, 'active': this.$store.state.activeRoute == 'career'}" @click="setRouteActive('career')">
                            <router-link to="/career" class="nav-link">Career</router-link>
                        </li> -->
                        <li :class="{'nav-item': true, 'active': this.$store.state.activeRoute == 'contactus'}" @click="setRouteActive('contactus')">
                            <router-link to="/contactus" class="nav-link">Contact Us</router-link>
                        </li>
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
