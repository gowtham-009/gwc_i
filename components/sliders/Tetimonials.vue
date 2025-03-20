<template>
    <div class="reviews-1-wrapper">
        <Swiper
            :modules="[SwiperAutoplay, SwiperEffectCreative]"
            :slides-per-view="1"
            :loop="true"
            :autoplay="{
                delay: 8000,
                disableOnInteraction: true
            }"
            :breakpoints="{
                600:{ slidesPerView:2 },
                920:{ slidesPerView:3 },
            }"
        >
            <SwiperSlide>
                <div class="review-1 bg--white-100 block-shadow r-08">
                    <!-- Quote Icon -->
                    <div class="review-ico ico-65"><span class="flaticon-quote"></span></div>
                    <!-- Text -->
                    <div class="review-txt">
                        <!-- Text -->
                        <p>As a channel partner of Goodwill Insurance, I value the seamless experience offered by their web portal and mobile app. It has streamlined the policy buying and renewal process, making it hassle-free for both me and my clients.</p>
                        <!-- Author -->
                        <div class="author-data clearfix">
                            <!-- Avatar -->
                            <div class="review-avatar">
                                <img src="/assets/images/review-author-5.jpg" alt="review-avatar" />
                            </div>
                            <!-- Data -->
                            <div class="review-author">
                                <h6 class="s-18 w-700">Jennifer</h6>
                                <p class="p-sm">Bengaluru</p>
                            </div>
                        </div>
                        <!-- End Author -->
                    </div>
                    <!-- End Text -->
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="review-1 bg--white-100 block-shadow r-08">
                    <!-- Quote Icon -->
                    <div class="review-ico ico-65"><span class="flaticon-quote"></span></div>
                    <!-- Text -->
                    <div class="review-txt">
                        <!-- Text -->
                        <p>I am pleased to share that since 2021, we have had a smooth and productive partnership with Goodwill, handling PAN, TAN, E-TDS, Aadhaar, and DSC services. Their prompt action and friendly support have ensured seamless operations.</p>
                        <!-- Author -->
                        <div class="author-data clearfix">
                            <!-- Avatar -->
                            <div class="review-avatar">
                                <img src="/assets/images/review-author-6.jpg" alt="review-avatar" />
                            </div>
                            <!-- Data -->
                            <div class="review-author">
                                <h6 class="s-18 w-700">Jonathan Barnes</h6>
                                <p class="p-sm">Delhi</p>
                            </div>
                        </div>
                        <!-- End Author -->
                    </div>
                    <!-- End Text -->
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="review-1 bg--white-100 block-shadow r-08">
                    <!-- Quote Icon -->
                    <div class="review-ico ico-65"><span class="flaticon-quote"></span></div>
                    <!-- Text -->
                    <div class="review-txt">
                        <!-- Text -->
                        <p>I’m highly impressed by the support and efficiency of Goodwill. Their web portal and mobile app have made it exceptionally easy to serve my clients, leading to higher sales and improved customer satisfaction.</p>
                        <!-- Author -->
                        <div class="author-data clearfix">
                            <!-- Avatar -->
                            <div class="review-avatar">
                                <img src="/assets/images/review-author-4.jpg" alt="review-avatar" />
                            </div>
                            <!-- Data -->
                            <div class="review-author">
                                <h6 class="s-18 w-700">Harris</h6>
                                <p class="p-sm">West Bengal</p>
                            </div>
                        </div>
                        <!-- End Author -->
                    </div>
                    <!-- End Text -->
                </div>
            </SwiperSlide>
           
        </Swiper>
    </div>
</template>
