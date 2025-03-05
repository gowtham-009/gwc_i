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
                    <li aria-haspopup="true" class="mg_link" >
                       
                        <NuxtLink to="/" class="h-link">Home </NuxtLink>
                       
                    </li>
                    <!-- SIMPLE NAVIGATION LINK -->
                    <li class="nl-simple" aria-haspopup="true"><NuxtLink to="/about" class="h-link">About Us</NuxtLink></li>
                    <!-- MEGAMENU -->
                    <li aria-haspopup="true" class="mg_link">
                        <NuxtLink to="/#" class="h-link">Insurance </NuxtLink>
                       
                        <!-- End wsmegamenu -->
                    </li>
                    <!-- END MEGAMENU -->
                    <!-- SIMPLE NAVIGATION LINK -->
                    <li class="nl-simple" aria-haspopup="true"><NuxtLink to="/faqs" class="h-link">FAQs</NuxtLink></li>
                    <!-- SIMPLE NAVIGATION LINK -->
                    <li class="nl-simple" aria-haspopup="true"><NuxtLink to="/contacts" class="h-link">Contacts</NuxtLink></li>
                    <li class="nl-simple" aria-haspopup="true"><NuxtLink to="/login-1" class="h-link">Sign in</NuxtLink></li>
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
