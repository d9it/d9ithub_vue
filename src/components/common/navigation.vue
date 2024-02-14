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
        <nav class="navbar navbar-expand-lg sticky-top p-0" >                     
            <div class="container p-0">
                <router-link class="navbar-brand text-center" @click.native="setRouteActive('home')"  to="/">
                    <img src="/assets/d9_images/d9ithublogo.png" alt="img" width="100%" height="auto" class="fixed_header">
                    <span>A caring eye for your software solutions</span>                    
                </router-link>

                <button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse"  data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="d-flex align-items-center">
                        <router-link class="navbar-brand text-center p-4" @click.native="setRouteActive('home')"  to="/">
                            <img src="/assets/d9_images/d9ithublogo.png" alt="img" width="100%" height="auto" class="fixed_header">
                        </router-link>
                        <button class="navbar-toggler custom-toggler ml-auto mr-3 px-3" type="button" data-toggle="collapse"  data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="text-white"><i class="fas fa-times"></i></span>
                        </button>
                    </div>

                    <ul class="navbar-nav ml-auto" id="navbarTab">
                        <li :class="{'nav-item':true, 'active':this.$store.state.activeRoute == 'home'}" @click="setRouteActive('home')">
                            <router-link to="/" class="nav-link">Home</router-link>
                        </li>
                        <li :class="{'nav-item':true, 'dropdown':true, 'active': this.$store.state.activeRoute == 'aboutus'}" >
                            <a href="/aboutus" class="nav-link dropdown-toggle" >About Us</a>
                            <ul class="dropdown-menu" >
                                <li @click="setRouteActive('aboutus')">
                                    <router-link class="dropdown-item" to="/aboutus">About D9ithub</router-link>
                                </li>
                                <li @click="setRouteActive('aboutus')">
                                    <router-link class="dropdown-item" to="/ourteam">Our Team</router-link>
                                </li>
                                <!-- <li @click="setRouteActive('aboutus')">
                                    <router-link class="dropdown-item" to="/career">Career</router-link>
                                </li> -->
                            </ul> 
                        </li>
                        <li :class="{'nav-item': true, 'active': this.$store.state.activeRoute == 'ourService'}" @mouseenter="exapndDropdown" @mouseleave="closeDropdown">
                            <router-link to="/ourService" class="nav-link dropdown-toggle">Our Services</router-link>
                            <!-- show at large screen -->
                            <div class="dropdrown_content_large expand" @mouseenter="exapndDropdown" @mouseleave="closeDropdown">
                                <div class="dropdown_slider_content row m-0">
                                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <router-link to="/ourService/webDevelopment" class="dropdown_slider_item">
                                            <img src="/assets/d9_images/webservices.png" alt="img">
                                            <p>Web Development</p>
                                        </router-link>
                                        <router-link to="/ourService/mobileDevelopment" class="dropdown_slider_item">
                                            <img src="/assets/d9_images/mobileservices.png" alt="img">
                                            <p>Mobile Development</p>
                                        </router-link>
                                        <router-link to="/ourService/cmsAndEcomDevelopment" class="dropdown_slider_item">
                                            <img src="/assets/d9_images/ecommerceservices.png" alt="img">
                                            <p>CMS & Ecommerce Development</p>
                                        </router-link>
                                        <router-link to="/ourService/graphicsAndWebDesign" class="dropdown_slider_item">
                                            <img src="/assets/d9_images/graphicservices.png" alt="img">
                                            <p>Graphics & Website Design</p>
                                        </router-link>
                                        <router-link to="/ourService/enterpriseSolutions" class="dropdown_slider_item">
                                            <img src="/assets/d9_images/enterprice_solution.png" alt="img">
                                            <p>Enterprise Solutions</p>
                                        </router-link>
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <router-link to="/ourService/hireDedicatedResources" class="dropdown_slider_item">
                                            <img src="/assets/d9_images/hireservices.png" alt="img">
                                            <p>Hire Dedicated Resources</p>
                                        </router-link>
                                        <router-link to="/ourService/searchEngineOptimization" class="dropdown_slider_item">
                                            <img src="/assets/d9_images/seo_optimization.png" alt="img">
                                            <p>Search Engine Optimization</p>
                                        </router-link>
                                        <router-link to="/ourService/digitalMarketing" class="dropdown_slider_item">
                                            <img src="/assets/d9_images/digital_marketing.png" alt="img">
                                            <p>Digital Marketing</p>
                                        </router-link>
                                        <router-link to="/ourService/socialMediaMarketing" class="dropdown_slider_item">
                                            <img src="/assets/d9_images/social_media.png" alt="img">
                                            <p>Social Media Marketing</p>
                                        </router-link>
                                    </div>
                                </div>
                            </div> 
                        </li>
                        <li :class="{'nav-item': true, 'active': this.$store.state.activeRoute == 'portfolio'}" @mouseenter="exapndDropdown" @mouseleave="closeDropdown">
                            <router-link to="" class="nav-link dropdown-toggle">Portfolio</router-link>
                            <!-- show at large screen -->
                            <div class="dropdrown_content_large expand" @mouseenter="exapndDropdown" @mouseleave="closeDropdown">
                                <div class="dropdown_slider_content row m-0">
                                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <h6 class="mb-3 px-2"><strong>Web Development</strong></h6>
                                        <router-link to="/php" class="dropdown_slider_item">
                                            <img src="/assets/d9_images/php_blue.png" alt="img">
                                            <p>PHP</p>
                                        </router-link>
                                        <router-link to="/laravel" class="dropdown_slider_item">
                                            <img src="/assets/d9_images/laravel_blue.png" alt="img">
                                            <p>Laravel</p>
                                        </router-link>
                                        <router-link to="/vue" class="dropdown_slider_item">
                                            <img src="/assets/d9_images/vue_blue.png" alt="img">
                                            <p>Vue</p>
                                        </router-link>
                                        <router-link to="/wordpress" class="dropdown_slider_item">
                                            <img src="/assets/d9_images/wordpress_blue.png" alt="img">
                                            <p>Wordpress</p>
                                        </router-link>
                                        <router-link to="/ecommerce" class="dropdown_slider_item">
                                            <img src="/assets/d9_images/ecommerceservices.png" alt="img">
                                            <p>Ecommerce</p>
                                        </router-link>
                                        <router-link to="/mobile" class="dropdown_slider_item">
                                            <img src="/assets/d9_images/mobileapp_blue.png" alt="img">
                                            <p>Mobile app</p>
                                        </router-link>
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <h6 class="mb-3 px-2"><strong>Graphics & Wesite Design</strong></h6>
                                        <router-link to="/webdesign" class="dropdown_slider_item">
                                            <img src="/assets/d9_images/webdesign_blue.png" alt="img">
                                            <p>Web Design</p>
                                        </router-link>
                                        <router-link to="/psd" class="dropdown_slider_item">
                                            <img src="/assets/d9_images/psd_blue.png" alt="img">
                                            <p>PSD</p>
                                        </router-link>
                                        <router-link to="/logo" class="dropdown_slider_item">
                                            <img src="/assets/d9_images/logo_blue.png" alt="img">
                                            <p>Logo</p>
                                        </router-link>
                                        <router-link to="/responsive" class="dropdown_slider_item">
                                            <img src="/assets/d9_images/responsive_blue.png" alt="img">
                                            <p>Responsive</p>
                                        </router-link>
                                    </div>
                                </div>
                            </div> 
                        </li>
                        <li :class="{'nav-item':true, 'active': this.$store.state.activeRoute == 'testimonial'}" @click="setRouteActive('testimonial')">
                            <router-link to="/testimonial" class="nav-link">Testimonial</router-link>
                        </li>
                        <li :class="{'nav-item':true, 'active': this.$store.state.activeRoute == 'testimonial'}" @click="setRouteActive('testimonial')">
                            <router-link to="/blog" class="nav-link">Blog</router-link>
                        </li>
                        <li :class="{'nav-item':true, 'active': this.$store.state.activeRoute == 'contactus'}" @click="setRouteActive('contactus')">
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
                expand: false,
                collapsed: false,
            }),
        methods: {
            falseShow () {
                this.show = false
            },
            setRouteActive(route){
                console.log(route, '-route-');
                this.$v_session.set('activeRoute', route)
                this.$store.state.activeRoute = route;
                this.$nextTick(()=> {
                    setTimeout(() => {
                        const options = {
                            easing: 'ease-int',
                            lazy: true,
                        } 
                        this.$scrollTo(`#${route}`, 0, options) 
                    },100)
                });
                if($('.navbar-toggler').is(':visible')) {
                    $('#navbarCollapse').removeClass('show');
                }
            },
            exapndDropdown() {
                this.collapsed = false;
                this.expand = true;
            },
            closeDropdown() {
                this.expand = false;
            },
            collapseDropdown() {
                this.expand = false;
                this.collapsed = !this.collapsed;
            },
            scrollLeftSide() {
                document.getElementsByClassName('dropdown_slider')[0].scrollLeft -= 100;
                document.getElementsByClassName('dropdown_slider')[1].scrollLeft -= 100;
            },
            scrollRightSide() {
                document.getElementsByClassName('dropdown_slider')[0].scrollLeft += 100;
                document.getElementsByClassName('dropdown_slider')[1].scrollLeft += 100;
            }
        },
        mounted() {
            if(this.$v_session.has('activeRoute')){
                this.$store.state.activeRoute = this.$v_session.get('activeRoute')
                const options = {
                    easing: 'ease-int',
                    lazy: true,
                } 
                this.$scrollTo(`#${this.$store.state.activeRoute}`, 0, options)
            }
        }  
    };
</script>
