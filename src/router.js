import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
// import PortfolioComponent from './components/PortfolioComponent'
import aboutus from "./components/aboutUs"
import ourService from "./components/ourService"
import ourTeam from "./components/ourTeam"
import testimonial from "./components/testimonial"
import contactus from "./components/contactUs"
import career from "./components/CareerComponent"
import blog from "./components/blogComponent"
import blogdetail from "./components/blogDetailComponent"
// all services pages
import webDevelopment from "./components/services/webDevelopment"
import mobileDevelopment from "./components/services/mobileDevelopment"
import cmsAndEcomDevelopment from "./components/services/cmsAndEcomDevelopment"
import graphicsAndWebDesign from "./components/services/graphicsAndWebDesign"
import enterpriseSolutions from "./components/services/enterpriseSolutions"
import hireDedicatedResources from "./components/services/hireDedicatedResources"
import searchEngineOptimization from "./components/services/searchEngineOptimization"
import digitalMarketing from "./components/services/digitalMarketing"
import socialMediaMarketing from "./components/services/socialMediaMarketing"
//<!-------------- for  lazy routes component !--------------------------------->
// import Php from "./components/Phpdevelopment"
// import laravel from "./components/laraveldevelopment"
// import vue from "./components/vuedevelopment"
// import wordpress from "./components/wordpressdevelopment"
// import cms from "./components/cmsdevelopment"
// import mobile from "./components/mobileappdevelopment"
// import webdesign from "./components/webdesign"
// import psd from "./components/psdComponent"
// import logo from "./components/logoComponent"
// import banner from "./components/bannerComponent"
// import responsive from "./components/responsiveComponent"
// import appdesign from "./components/appdesignComponent"
// import pagenotfound from "./components/404page"

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
    {
      path: "/aboutus",
      name: "aboutus",
      component: aboutus,
    },
    {
      path: "/ourService",
      name: "ourService",
      component: ourService,
    },
    {
      path: "/ourteam",
      name: "ourteam",
      component: ourTeam,
    },
    {
      path: "/testimonial",
      name: "testimonial",
      component: testimonial,
    },
    {
      path: "/contactus",
      name: "contactus",
      component: contactus,
    },
    {
      path: "/ourService/webDevelopment",
      name: "webDevelopment",
      component: webDevelopment,
    },
    {
      path: "/ourService/mobileDevelopment",
      name: "webDevelopment",
      component: mobileDevelopment,
    },
    {
      path: "/ourService/cmsAndEcomDevelopment",
      name: "webDevelopment",
      component: cmsAndEcomDevelopment,
    },
    {
      path: "/ourService/hireDedicatedResources",
      name: "webDevelopment",
      component: hireDedicatedResources,
    },
    {
      path: "/ourService/graphicsAndWebDesign",
      name: "webDevelopment",
      component: graphicsAndWebDesign,
    },
    {
      path: "/ourService/enterpriseSolutions",
      name: "webDevelopment",
      component: enterpriseSolutions,
    },
    {
      path: "/ourService/searchEngineOptimization",
      name: "webDevelopment",
      component: searchEngineOptimization,
    },
    {
      path: "/ourService/digitalMarketing",
      name: "webDevelopment",
      component: digitalMarketing,
    },
    {
      path: "/ourService/socialMediaMarketing",
      name: "webDevelopment",
      component: socialMediaMarketing,
    },
    {
      path: "/career",
      name: "career",
      component: career,
    },
    {
      path: "/blog",
      name: "blog",
      component: blog,
    },
    {
      path: "/blogdetail",
      name: "blogdetail",
      component: blogdetail,
    },
    {
      path: "*",
      name: "404page",
      component: () =>  import('@/components/404page.vue'),
    },
    {
      path: "/php",
      name: "php",
      component: () =>  import('@/components/Phpdevelopment.vue'),
    },
    {
      path: "/laravel",
      name: "laravel",
      component: () =>  import('@/components/laraveldevelopment.vue'),
    },    
    {
      path: "/vue",
      name: "vue",
      component: () =>  import('@/components/vuedevelopment.vue'),
    },
    {
      path: "/wordpress",
      name: "wordpress",
      component: () =>  import('@/components/wordpressdevelopment.vue'),
    },
    {
      path: "/ecommerce",
      name: "cms",
      component: () =>  import('@/components/cmsdevelopment.vue'),
    },
    {
      path: "/mobile",
      name: "mobile",
      component: () =>  import('@/components/mobileappdevelopment.vue'),
    },  
    {
      path: "/webdesign",
      name: "webdesign",
      component: () =>  import('@/components/webdesign.vue'),
    }, 
    {
      path: "/psd",
      name: "psd",
      component: () =>  import('@/components/psdComponent.vue'),
    }, 
    {
      path: "/logo",
      name: "logo",
      component: () =>  import('@/components/logoComponent.vue'),
    }, 
    {
      path: "/banner",
      name: "banner",
      component: () =>  import('@/components/bannerComponent.vue'),
    }, 
    {
      path: "/responsive",
      name: "responsive",
      component: () =>  import('@/components/responsiveComponent.vue'),
    }, 
    {
      path: "/appdesign",
      name: "appdesign",
      component: () =>  import('@/components/appdesignComponent.vue'),
    },  
    // {
    //   path: "/career",
    //   name: "Career",
    //   component: career,
    // },
  ]
});
