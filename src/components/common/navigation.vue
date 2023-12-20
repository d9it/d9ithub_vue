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
                <router-link class="navbar-brand text-center" @click.native="setRouteActive('home')"  to="/">
                    <img src="/assets/d9_images/d9ithublogo.png" alt="" class="fixed_header">
                    <span>A caring eye for your software solutions</span>                    
                </router-link>

                <button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse"  data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav ml-auto" id="navbarTab">
                        <li :class="{'nav-item': true, 'active': this.$store.state.activeRoute == 'home'}" @click="setRouteActive('home')">
                            <router-link to="/" class="nav-link">Home</router-link>
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
                        <li :class="{'nav-item d-block hide-at-small-screen': true, 'active': this.$store.state.activeRoute == 'ourService'}" @mouseenter="exapndDropdown" @mouseleave="closeDropdown">  <!-- @click="setRouteActive('ourService')" -->
                            <router-link to="" class="nav-link dropdown-toggle" v-scroll-to="'#ourService'">Our Services</router-link>
                        </li>
                        <!-- show at small screen -->
                        <li :class="{'nav-item d-none show-at-small-screen': true, 'active': this.$store.state.activeRoute == 'ourService'}" @click="collapseDropdown">
                            <router-link to="" class="nav-link dropdown-toggle" v-scroll-to="'#ourService'">Our Services</router-link>
                            <div :class="{'dropdrown_content_large': true, 'expand': collapsed}">
                                <div>
                                    <div class="row">
                                        <div class="col-md-4 col-sm-6">
                                            <h5>Development Services</h5>
                                            <ul>
                                                <li>
                                                    <router-link to="/ourService/webDevelopment" class="nav-link"><i class="fas fa-cogs"></i> Web Development</router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/ourService/mobileDevelopment" class="nav-link"><i class="fas fa-mobile-alt"></i> Mobile Development</router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/ourService/cmsAndEcomDevelopment" class="nav-link"><i class="fab fa-opencart"></i> CMS & Ecommerce Development</router-link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-md-4 col-sm-6">
                                            <h5>Designing & Other Services</h5>
                                            <ul>
                                                <li>
                                                    <router-link to="/ourService/graphicsAndWebDesign" class="nav-link"><i class="fas fa-palette"></i> Graphics Design</router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/ourService/enterpriseSolutions" class="nav-link"><i class="far fa-lightbulb"></i> Enterprise Solutions</router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/ourService/graphicsAndWebDesign" class="nav-link"><i class="fas fa-globe-africa"></i> Website Design</router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/ourService/hireDedicatedResources" class="nav-link"><i class="fas fa-users"></i> Hire Dedicated Resources</router-link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-md-4 col-sm-6">
                                            <h5>Marketing Services</h5>
                                            <ul>
                                                <li>
                                                    <router-link to="/ourService/searchEngineOptimization" class="nav-link"><i class="fas fa-search-location"></i> Search Engine Optimization</router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/ourService/digitalMarketing" class="nav-link"><i class="fas fa-bullhorn"></i> Digital Marketing</router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/ourService/socialMediaMarketing" class="nav-link"><i class="fas fa-desktop"></i> Social Media Marketing</router-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="pt-3" style="border-top: 2px solid rgba(128, 128, 128, 0.216);">
                                        <div class="we-deal-with w-100 d-flex align-items-start justify-content-between flex-wrap">
                                            <h4>We Deal With Services</h4>
                                            <div @click="setRouteActive('ourService')">
                                                <router-link to="/ourService" class="under mt-1">View All</router-link>
                                            </div>
                                        </div>
                                        <div class="dropdown_slider">
                                            <div class="dropdown_slider_content">
                                                <div class="dropdown_slider_item">
                                                    <div>
                                                        <img src="/assets/d9_images/webservices.png" alt="" title="" >
                                                    </div>
                                                    <p>Web Development</p>
                                                </div>
                                                <div class="dropdown_slider_item">
                                                    <div>
                                                        <img src="/assets/d9_images/mobileservices.png" alt="" title="" >
                                                    </div>
                                                    <p>Mobile Development</p>
                                                </div>
                                                <div class="dropdown_slider_item">
                                                    <div>
                                                        <img src="/assets/d9_images/ecommerceservices.png" alt="" title="" >
                                                    </div>
                                                    <p>CMS & Ecomm.</p>
                                                </div>
                                                <div class="dropdown_slider_item">
                                                    <div>
                                                        <img src="/assets/d9_images/graphicservices.png" alt="" title="" >
                                                    </div>
                                                    <p>Grapics & Web Design</p>
                                                </div>
                                                <div class="dropdown_slider_item">
                                                    <div>
                                                        <img src="/assets/d9_images/enterprice_solution.png" alt="" title="" >
                                                    </div>
                                                    <p>Enterprise Solution</p>
                                                </div>
                                                <div class="dropdown_slider_item">
                                                    <div>
                                                        <img src="/assets/d9_images/seo_optimization.png" alt="" title="" >
                                                    </div>
                                                    <p>SEO</p>
                                                </div>
                                                <div class="dropdown_slider_item">
                                                    <div>
                                                        <img src="/assets/d9_images/digital_marketing.png" alt="" title="" >
                                                    </div>
                                                    <p>Digital Marketing</p>
                                                </div>
                                                <div class="dropdown_slider_item">
                                                    <div>
                                                        <img src="/assets/d9_images/social_media.png" alt="" title="" >
                                                    </div>
                                                    <p>Social Media Marketing</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
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
            <!-- show at large screen -->
            <div :class="{'dropdrown_content_large': true, 'expand': expand}"  @mouseenter="exapndDropdown" @mouseleave="closeDropdown">
                <div class="container px-0">
                    <div class="row">
                        <div class="col-7 py-4" style="border-right: 3px solid rgba(128, 128, 128, 0.216);">
                            <div class="row">
                                <div class="col-4">
                                    <h5>Development Services</h5>
                                    <ul>
                                        <li>
                                            <router-link to="/ourService/webDevelopment" class="nav-link"><i class="fas fa-cogs"></i> Web Development</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/ourService/mobileDevelopment" class="nav-link"><i class="fas fa-mobile-alt"></i> Mobile Development</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/ourService/cmsAndEcomDevelopment" class="nav-link"><i class="fab fa-opencart"></i> CMS & Ecommerce Development</router-link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-4">
                                    <h5>Designing & Other Services</h5>
                                    <ul>
                                        <li>
                                            <router-link to="/ourService/graphicsAndWebDesign" class="nav-link"><i class="fas fa-palette"></i> Graphics Design</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/ourService/enterpriseSolutions" class="nav-link"><i class="far fa-lightbulb"></i> Enterprise Solutions</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/ourService/graphicsAndWebDesign" class="nav-link"><i class="fas fa-globe-africa"></i> Website Design</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/ourService/hireDedicatedResources" class="nav-link"><i class="fas fa-users"></i> Hire Dedicated Resources</router-link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-4">
                                    <h5>Marketing Services</h5>
                                    <ul>
                                        <li>
                                            <router-link to="/ourService/searchEngineOptimization" class="nav-link"><i class="fas fa-search-location"></i> Search Engine Optimization</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/ourService/digitalMarketing" class="nav-link"><i class="fas fa-bullhorn"></i> Digital Marketing</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/ourService/socialMediaMarketing" class="nav-link"><i class="fas fa-desktop"></i> Social Media Marketing</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-5 py-4 pl-4">
                            <div class="w-100 d-flex align-items-start justify-content-between">
                                <h4>We Deal With Services</h4>
                                <div @click="setRouteActive('ourService')">
                                    <router-link to="/ourService" class="under mt-1">View All</router-link>
                                </div>
                            </div>
                            <div class="dropdown_slider">
                                <div class="dropdown_slider_content">
                                    <div class="dropdown_slider_item">
                                        <div>
                                            <img src="/assets/d9_images/webservices.png" alt="" title="" >
                                        </div>
                                        <p>Web Development</p>
                                    </div>
                                    <div class="dropdown_slider_item">
                                        <div>
                                            <img src="/assets/d9_images/mobileservices.png" alt="" title="" >
                                        </div>
                                        <p>Mobile Development</p>
                                    </div>
                                    <div class="dropdown_slider_item">
                                        <div>
                                            <img src="/assets/d9_images/ecommerceservices.png" alt="" title="" >
                                        </div>
                                        <p>CMS & Ecomm.</p>
                                    </div>
                                    <div class="dropdown_slider_item">
                                        <div>
                                            <img src="/assets/d9_images/graphicservices.png" alt="" title="" >
                                        </div>
                                        <p>Grapics & Web Design</p>
                                    </div>
                                    <div class="dropdown_slider_item">
                                        <div>
                                            <img src="/assets/d9_images/enterprice_solution.png" alt="" title="" >
                                        </div>
                                        <p>Enterprise Solution</p>
                                    </div>
                                    <div class="dropdown_slider_item">
                                        <div>
                                            <img src="/assets/d9_images/seo_optimization.png" alt="" title="" >
                                        </div>
                                        <p>SEO</p>
                                    </div>
                                    <div class="dropdown_slider_item">
                                        <div>
                                            <img src="/assets/d9_images/digital_marketing.png" alt="" title="" >
                                        </div>
                                        <p>Digital Marketing</p>
                                    </div>
                                    <div class="dropdown_slider_item">
                                        <div>
                                            <img src="/assets/d9_images/social_media.png" alt="" title="" >
                                        </div>
                                        <p>Social Media Marketing</p>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex align-items-start">  
                                <button class="slider-aerrows" @click.prevent="scrollLeftSide">
                                    <i class="fas fa-angle-left"></i>
                                </button>
                                <button class="slider-aerrows" @click.prevent="scrollRightSide">
                                    <i class="fas fa-angle-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
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
