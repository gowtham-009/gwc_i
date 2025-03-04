<template>
    <div id="main-menu" class="wsmainfull menu clearfix" >
        <div class="wsmainwp clearfix" style=" margin-left: 6%;">
            <!-- HEADER BLACK LOGO -->
            <div class="desktoplogo ">
                <NuxtLink to="/" class="logo-black "><img src="/assets/images/gwc-logo.webp" class="rounded" alt="logo" style="min-height: 60px;" /></NuxtLink>
            </div>
          
            <div class="desktoplogo" style="position: absolute;" >
                <NuxtLink to="/" class="logo-white">
    <img src="/assets/images/gwc-logo.webp" alt="logo" class="rounded" :style="{ minHeight: minheight + 'px' }" />
</NuxtLink>
            </div>

            <!-- MAIN MENU -->
            <nav class="wsmenu clearfix" >
                <ul class="wsmenu-list nav-theme">
                    <!-- DROPDOWN SUB MENU -->
                    <li aria-haspopup="true" class="mg_link" :class="{ open: isOpen[0] }">
                        <span class="wsmenu-click 123" @click="toggle(0)"><i class="wsmenu-arrow"></i></span>
                        <NuxtLink to="#" class="h-link">Home <span class="wsarrow"></span></NuxtLink>
                        <div class="wsmegamenu w-75 clearfix">
                            <div class="container">
                                <div class="row">
                                    <!-- MEGAMENU LINKS -->
                                    <ul class="col-md-12 col-lg-3 link-list">
                                        <li><NuxtLink to="/demo-1">Demo 01</NuxtLink></li>
                                        <li><NuxtLink to="/demo-2">Demo 02</NuxtLink></li>
                                        <li><NuxtLink to="/demo-3">Demo 03</NuxtLink></li>
                                        <li><NuxtLink to="/demo-4">Demo 04</NuxtLink></li>
                                        <li><NuxtLink to="/demo-5">Demo 05</NuxtLink></li>
                                        <li><NuxtLink to="/demo-6">Demo 06</NuxtLink></li>
                                        <li><NuxtLink to="/demo-7">Demo 07</NuxtLink></li>
                                    </ul>
                                    <ul class="col-md-12 col-lg-3 link-list">
                                        <li><NuxtLink to="/demo-8">Demo 08</NuxtLink></li>
                                        <li><NuxtLink to="/demo-9">Demo 09</NuxtLink></li>
                                        <li><NuxtLink to="/demo-10">Demo 10</NuxtLink></li>
                                        <li><NuxtLink to="/demo-11">Demo 11</NuxtLink></li>
                                        <li><NuxtLink to="/demo-12">Demo 12</NuxtLink></li>
                                        <li><NuxtLink to="/demo-13">Demo 13</NuxtLink></li>
                                        <li><NuxtLink to="/demo-14">Demo 14</NuxtLink></li>
                                    </ul>
                                    <ul class="col-md-12 col-lg-3 link-list">
                                        <li><NuxtLink to="/demo-15">Demo 15</NuxtLink></li>
                                        <li><NuxtLink to="/demo-16">Demo 16</NuxtLink></li>
                                        <li><NuxtLink to="/demo-17">Demo 17</NuxtLink></li>
                                        <li><NuxtLink to="/demo-18">Demo 18</NuxtLink></li>
                                        <li><NuxtLink to="/demo-19">Demo 19</NuxtLink></li>
                                        <li><NuxtLink to="/demo-20">Demo 20</NuxtLink></li>
                                        <li><NuxtLink to="/demo-21">Demo 21</NuxtLink></li>
                                    </ul>
                                    <ul class="col-md-12 col-lg-3 link-list">
                                        <li><NuxtLink to="/demo-22">Demo 22</NuxtLink></li>
                                        <li><NuxtLink to="/demo-23">Demo 23</NuxtLink></li>
                                        <li><NuxtLink to="/demo-24">Demo 24</NuxtLink></li>
                                        <li><NuxtLink to="/demo-25">Demo 25</NuxtLink></li>
                                        <li><NuxtLink to="/demo-26">Demo 26</NuxtLink></li>
                                        <li><NuxtLink to="/demo-27">Demo 27</NuxtLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <!-- SIMPLE NAVIGATION LINK -->
                    <li class="nl-simple" aria-haspopup="true"><NuxtLink to="/about" class="h-link">About Us</NuxtLink></li>
                    <!-- MEGAMENU -->
                    <li aria-haspopup="true" class="mg_link" :class="{ open: isOpen[1] }">
                        <span class="wsmenu-click 123" @click="toggle(1)"><i class="wsmenu-arrow"></i></span>
                        <NuxtLink to="/#" class="h-link">Insurance <span class="wsarrow"></span></NuxtLink>
                        <div class="wsmegamenu w-75 clearfix">
                            <div class="container">
                                <div class="row">
                                    <!-- MEGAMENU LINKS -->
                                    <ul class="col-md-12 col-lg-3 link-list">
                                        <li><NuxtLink to="/about">About Us</NuxtLink></li>
                                        <li><NuxtLink to="/team">Our Team</NuxtLink></li>
                                        <li><NuxtLink to="/integrations">Integrations</NuxtLink></li>
                                        <li>
                                            <NuxtLink to="/careers">Careers <span class="sm-info">4</span></NuxtLink>
                                        </li>
                                        <li><NuxtLink to="/career-role">Career Details</NuxtLink></li>
                                        <li><NuxtLink to="/contacts">Contact Us</NuxtLink></li>
                                    </ul>
                                    <!-- MEGAMENU LINKS -->
                                    <ul class="col-md-12 col-lg-3 link-list">
                                        <li><NuxtLink to="/features">Core Features</NuxtLink></li>
                                        <li class="fst-li"><NuxtLink to="/projects">Our Projects</NuxtLink></li>
                                        <li><NuxtLink to="/project-details">Project Details</NuxtLink></li>
                                        <li><NuxtLink to="/reviews">Testimonials</NuxtLink></li>
                                        <li><NuxtLink to="/download">Download Page</NuxtLink></li>
                                        <li><NuxtLink to="/help-center">Help Center</NuxtLink></li>
                                    </ul>
                                    <!-- MEGAMENU LINKS -->
                                    <ul class="col-md-12 col-lg-3 link-list">
                                        <li class="fst-li"><NuxtLink to="/blog-listing">Blog Listing</NuxtLink></li>
                                        <li><NuxtLink to="/single-post">Single Blog Post</NuxtLink></li>
                                        <li class="fst-li"><NuxtLink to="/pricing-1">Pricing Page #1</NuxtLink></li>
                                        <li><NuxtLink to="/pricing-2">Pricing Page #2</NuxtLink></li>
                                        <li><NuxtLink to="/cookies">Cookies Page</NuxtLink></li>
                                        <li><NuxtLink to="/privacy">Privacy Page</NuxtLink></li>
                                    </ul>
                                    <!-- MEGAMENU LINKS -->
                                    <ul class="col-md-12 col-lg-3 link-list">
                                        <li><NuxtLink to="/login-1">Login Page 1</NuxtLink></li>
                                        <li><NuxtLink to="/login-2">Login Page 2</NuxtLink></li>
                                        <li><NuxtLink to="/signup-1">Signup Page 1</NuxtLink></li>
                                        <li><NuxtLink to="/signup-2">Signup Page 2</NuxtLink></li>
                                        <li><NuxtLink to="/reset-password">Reset Password</NuxtLink></li>
                                        <li><NuxtLink to="/terms">Terms Page</NuxtLink></li>
                                    </ul>
                                </div>
                                <!-- End row -->
                            </div>
                           
                        </div>
                        <!-- End wsmegamenu -->
                    </li>
                    <!-- END MEGAMENU -->
                    <!-- SIMPLE NAVIGATION LINK -->
                    <li class="nl-simple" aria-haspopup="true"><NuxtLink to="/pricing-1" class="h-link">FAQs</NuxtLink></li>
                    <!-- SIMPLE NAVIGATION LINK -->
                    <li class="nl-simple" aria-haspopup="true"><NuxtLink to="/faqs" class="h-link">Contacts</NuxtLink></li>
                    <li class="nl-simple" aria-haspopup="true"><NuxtLink to="/contacts" class="h-link">Sign in</NuxtLink></li>
                    <!-- SIGN IN LINK -->
                    
                    <!-- SIGN UP BUTTON -->
                    <li class="nl-simple" aria-haspopup="true">
                        <NuxtLink to="/signup-2" class="btn r-04 bg-primary hover--tra-white last-link">POSP Sign up</NuxtLink>
                    
                       
                    </li>

                    
                </ul>
            </nav>
           
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isOpen = ref([false, false]);

const toggle = (index) => {
    isOpen.value[index] = !isOpen.value[index];
};

const minheight = ref(145);
const handleScroll = () => {
    const menu = document.getElementById("main-menu");
    const header = document.getElementById("header");
    if (window.pageYOffset > 100) {
       minheight.value = 60
        menu.classList.add("scroll");
        header.classList.add("scroll");
    } else {
        minheight.value = 145
        menu.classList.remove("scroll");
        header.classList.remove("scroll");
    }
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>
