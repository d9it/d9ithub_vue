<template>
  <div class="main_top_content">
    <navigation></navigation>
    <div class="contact_us">
      <div class="contact_inner">
        <div class="contact-info">
          <div class="section-title">
            <h1>Contact Details</h1>
          </div>
          <div class="text_contact">
            <p class="element"></p>
          </div>
          <div class="widget-content">
            <ul class="icon_contact">
              <li>
                <a class="fa fa-phone"></a>Phone:
                <span href="tel:+91-7567456843">+91-7567456843 , +91-9374686975</span>
              </li>
              <!-- <li>
                <a class="fa fa-phone" ></a>Phone:
                <span href="tel:+91-9374686975">+91-9374686975</span>
              </li>-->
              <li>
                <a class="fa fa-envelope"></a>Email:
                <span href="mailto:d9ithub@gmail.com">d9ithub@gmail.com</span>
              </li>
              <li>
                <a class="fas fa-clock"></a>Monday to Friday: 09:30AM to 7:00PM
              </li>
              <li>
                <a href class="fas fa-map-marker-alt icon-font"></a> 25, 3rd Floor, 4D Square Mall Visat, Motera, Ahmedabad
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navigation from "../components/navigation";
import Typed from "typed.js";
export default {
  components: {
    navigation
  },
  data: () => ({
    show: false
  }),
  mounted(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    var typed = new Typed(".element", {
      // Waits 1000ms after typing "First"
      strings: [
        "Please find below contact details  <br> and contact us today!"
      ],
      typeSpeed: 100,
      backSpeed: 20,
      fadeOut: false,
      loop: true,
      loopCount: 5
      // onComplete: self => {
      //   this.do();
      // }
    });
    document.querySelectorAll(".typed-cursor")[0].style.display = "none";
  }
};
</script>
