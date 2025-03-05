<template>
    <div class="wsmobileheader clearfix">
        <!-- <NuxtLink to="/"><span class="smllogo"><img src="/assets/images/logo-pink.png" alt="mobile-logo" /></span></NuxtLink> -->
        <NuxtLink to="/" class="logo-black"><span class="smllogo"><img src="/assets/images/gwc-logo.webp" alt="mobile-logo"  /></span></NuxtLink>
        <NuxtLink to="/" class="logo-white"><span class="smllogo"><img src="/assets/images/gwc-logo.webp" alt="logo" /></span></NuxtLink>
        <a id="wsnavtoggle" class="wsanimated-arrow" @click="toggleMobileMenu">
            <span></span>
        </a>
    </div>
</template>
<script>
export default {
    methods: {
        toggleMobileMenu() {
            document.body.classList.toggle("wsactive");
        }
    }
};
</script>
