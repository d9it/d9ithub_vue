import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
// import PortfolioComponent from './components/PortfolioComponent'
// import testimonial from "./components/testimonial"
// import ourTeam from "./components/ourTeam"
// import ourService from "./components/ourService"
// import aboutUs from "./components/aboutUs"
import career from "./components/CareerComponent"
// import contactus from "./components/contactUs"
import Php from "./components/Phpdevelopment"
import laravel from "./components/laraveldevelopment"
import vue from "./components/vuedevelopment"
import wordpress from "./components/wordpressdevelopment"
import cms from "./components/cmsdevelopment"
import mobile from "./components/mobileappdevelopment"
import webdesign from "./components/webdesign"
import psd from "./components/psdComponent"
import logo from "./components/logoComponent"
import banner from "./components/bannerComponent"
import responsive from "./components/responsiveComponent"
import appdesign from "./components/appdesignComponent"
import pagenotfound from "./components/404page"

Vue.use(Router);

export default new Router({
  mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    // {
    //   path: "/portfolio",
    //   name: "Portfolio",
    //   component: PortfolioComponent,
    // },
    {
      path: "*",
      name: "404page",
      component: pagenotfound,
    },
    {
      path: "/php",
      name: "php",
      component: Php,
    },
    {
      path: "/laravel",
      name: "laravel",
      component: laravel,
    },    
    {
      path: "/vue",
      name: "vue",
      component: vue,
    },
    {
      path: "/wordpress",
      name: "wordpress",
      component: wordpress,
    },
    {
      path: "/ecommerce",
      name: "cms",
      component: cms,
    },
    {
      path: "/mobile",
      name: "mobile",
      component: mobile,
    },  
    {
      path: "/webdesign",
      name: "webdesign",
      component: webdesign,
    }, 
    {
      path: "/psd",
      name: "psd",
      component: psd,
    }, 
    {
      path: "/logo",
      name: "logo",
      component: logo,
    }, 
    {
      path: "/banner",
      name: "banner",
      component: banner,
    }, 
    {
      path: "/responsive",
      name: "responsive",
      component: responsive,
    }, 
    {
      path: "/appdesign",
      name: "appdesign",
      component: appdesign,
    },  
    {
      path: "/career",
      name: "Career",
      component: career,
    },
  ]
});
