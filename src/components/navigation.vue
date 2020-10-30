<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light sticky-top p-0" >
            <div class="container p-0">
                <router-link class="navbar-brand"  to="/" v-scroll-to="'#home'">
                    <img src="/assets/d9_images/d9ithublogo.png" alt="" class="fixed_header">
                </router-link>

                <button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse"  data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <router-link to="/" v-scroll-to="'#home'" class="nav-link">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/?about" v-scroll-to="'#aboutus'" class="nav-link">About Us</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/?ourService" class="nav-link" v-scroll-to="'#ourService'"> Our Services </router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <router-link to="/?portfolio" v-scroll-to="'#portfolio'" class="nav-link dropdown-toggle" >Portfolio</router-link>
                            <ul class="dropdown-menu" >
                                <li><router-link class="dropdown-item" to="/Php">Web Development</router-link></li>
                                <li><router-link class="dropdown-item" to="/webdesign">Graphics & Wesite Design</router-link></li>
                            </ul> 
                        </li>
                        <li>
                            <router-link to="/?ourTeam" v-scroll-to="'#ourTeam'" class="nav-link">Our Team</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/?testimonial" v-scroll-to="'#testimonial'" class="nav-link">Testimonial</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/?contactus" v-scroll-to="'#contactus'" class="nav-link">Contact Us</router-link>
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
                show: false
            }),
        methods: {
            falseShow () {
                this.show = false
            }
        },            
    };
</script>
