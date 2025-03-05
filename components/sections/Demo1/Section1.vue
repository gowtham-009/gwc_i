<template>
    <section id="hero-8" class="bg--fixed hero-section">
        <div class="container">
            <div class="row d-flex align-items-center">
                <!-- HERO TEXT -->
                <div class="col-md-6 col-lg-7">
                    <div class="hero-8-txt color--white wow fadeInRight">
                        <!-- Title -->
                        <h2 class="s-54 w-700">Become POSP Partner with Us</h2>
                        <!-- Text -->
                        <p class="p-lg color--coal">15+ Years of Trust & Experience</p>
                        <!-- HERO DIGITS -->
                        <div class="hero-digits clearfix">
                            <!-- DIGIT BLOCK #1 -->
                            <div id="hd-1-1">
                                <div class="hero-digits-block">
                                    <!-- Digit -->
                                    <div class="block-digit">
                                        <h2 class="s-46 statistic-number">3<span>x</span></h2>
                                    </div>
                                    <!-- Text -->
                                    <div class="block-txt">
                                        <p class="p-sm 1color--coal">Work in Spare Time & Earn Side Income</p>
                                    </div>
                                </div>
                            </div>
                            <!-- END DIGIT BLOCK #1 -->
                            <!-- DIGIT BLOCK #2 -->
                            <div id="hd-1-2">
                                <div class="hero-digits-block">
                                    <!-- Digit -->
                                    <div class="block-digit">
                                        <h2 class="s-46 statistic-number">100<span>%</span></h2>
                                    </div>
                                    <!-- Text -->
                                    <div class="block-txt">
                                        <p class="p-sm 1color--coal">Free Support & Training</p>
                                    </div>
                                </div>
                            </div>
                            <!-- END DIGIT BLOCK #2 -->
                        </div>
                        <!-- END HERO DIGITS -->
                    </div>
                </div>
                <!-- END HERO TEXT -->
                <!-- HERO REQUEST FORM -->
                <div class="col-md-6 col-lg-5">
                    <div id="hero-8-form" class="r-10 wow fadeInLeft">
                        <div class="btn-group me-2 w-100" role="group" aria-label="First group">
                                <button type="button" @click="activetab('general')"
                                    :class="{ 'bg-primcolor text-white' :activelement === 'general' }"
                                    class="btn bg-gray">General POSP</button>
                                <button type="button" @click="activetab('life')"
                                   :class="{ 'bg-primcolor' :activelement === 'life' }"
                                    class="btn bg-gray ">Life POSP</button>

                            </div>
                        <!-- Form -->
                        <form  v-if="form1" name="requestForm" class="row request-form mt-2">
                            <!-- Form Input -->
                            <div class="col-md-12">
                                <input type="text" name="name" class="form-control " placeholder="Enter Your Name*" autocomplete="off" required />
                            </div>

                            <div class="col-md-12">
                                <input type="text" name="name" class="form-control " placeholder="Enter Your Mobile Number*" autocomplete="off" required />
                            </div>
                            <!-- Form Input -->
                            <div class="col-md-12">
                                <input type="email" name="email" class="form-control " placeholder="Enter Your Email*" autocomplete="off" required />
                            </div>
                            <!-- Form Button -->
                            <div class="col-md-12 form-btn">
                                <button type="submit" class="btn bg-primary text-white submit">Get Started Now</button>
                            </div>
                            <!-- Form Message -->
                            <div class="col-md-12 request-form-msg text-center">
                                <span class="loading"></span>
                            </div>
                        </form>

                        <form  v-if="form2" name="requestForm" class="row request-form mt-2">
                            <!-- Form Input -->
                            <div class="col-md-12">
                                <input type="text" name="name" class="form-control name" placeholder="Enter Your Name*" autocomplete="off" required />
                            </div>
                            <div class="col-md-12">
                                <input type="text" name="name" class="form-control " placeholder="Enter Your Mobile Number*" autocomplete="off" required />
                            </div>
                            <!-- Form Input -->
                            <div class="col-md-12">
                                <input type="text" name="address" class="form-control  address" placeholder="Enter Your address*" autocomplete="off" required />
                            </div>
                            <!-- Form Button -->
                            <div class="col-md-12 form-btn">
                                <button type="submit" class="btn bg-primary text-white submit">Get Started Now</button>
                            </div>
                            <!-- Form Message -->
                            <div class="col-md-12 request-form-msg text-center">
                                <span class="loading"></span>
                            </div>
                        </form>
                       
                    </div>
                    <!-- END FORM -->
                </div>
                <!-- END HERO REQUEST FORM -->
            </div>
            <!-- End row -->
        </div>
        <!-- End container -->
        <!-- WAVE SHAPE BOTTOM -->
        <div class="wave-shape-bottom">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 165"><path fill-opacity="1" d="M0,160L120,154.7C240,149,480,139,720,128C960,117,1200,107,1320,101.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        </div>
    </section>
</template>


<script setup>
import { ref } from 'vue'


const form1 = ref(true)
const form2 = ref(false)

const activelement = ref('general')

const activetab = (tab) => {
    if (tab === 'general') {
        activelement.value = 'general'
        form1.value = true
        form2.value = false
    } else {
        activelement.value = 'life'
        form1.value = false
        form2.value = true
    }
}





</script>

<style>
.bg-gray {
    background-color: rgb(239, 239, 239);
}

.btn-primary:hover {
    color: white !important;
   
  
}

.bg-primcolor{
background-color: #505c77 !important;
}
</style> 