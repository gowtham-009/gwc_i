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
                                :class="{ 'bg-primcolor text-white': activelement === 'general' }"
                                class="btn bg-gray">General POSP</button>
                            <button type="button" @click="activetab('life')"
                                :class="{ 'bg-primcolor text-white': activelement === 'life' }"
                                class="btn bg-gray ">Life
                                POSP</button>

                        </div>
                        <!-- Form -->


                        <form v-if="form1" name="requestForm" @submit.prevent="formsubmission('General POSP')"
                            class="row request-form mt-3">
                            <!-- Form Input -->
                            <div class="col-md-12">
                                <input type="text" name="name" class="form-control" v-model="generalname"
                                    @input="convertAndFilter" autocomplete="off" placeholder="Enter Your Name*" />

                            </div>

                            <div class="col-md-12">
                                <input type="text" name="mobile" class="form-control " v-model="mobileNumber"
                                    @input="validateMobile" placeholder="Enter Your Mobile Number*"
                                    autocomplete="off" />


                            </div>
                            <!-- Form Input -->
                            <div class="col-md-12">
                                <input type="email" name="email" class="form-control mb-2" v-model="email"
                                    placeholder="Enter Your Email*" autocomplete="off" />

                            </div>

                            <div class="col-md-12 form-btn mt-2">
                                <button type="submit" class="btn bg-primary text-white submit ">Get Started Now</button>
                            </div>

                            <div class="w-100 mt-1" style=" height: 30px;">
                                <div class="alert alert-danger d-flex align-items-center p-1"  v-if="errorpopup" role="alert">
                                    <i class="fa-solid fa-circle-xmark"></i>
                                    <div class="p-1 " style="line-height: 18px; font-size: 15px;">
                                      {{ error1 }}
                                    </div>
                                </div>


                                <div class="alert alert-success d-flex align-items-center p-1"  v-if="successpopup" role="alert">
                                    <i class="fa-solid fa-circle-check"></i>
                                    <div class="p-1 " style="line-height: 18px; font-size: 15px;">
                                      {{ success1 }}
                                    </div>
                                </div>
                            </div>







                        </form>

                        <form v-if="form2" name="requestForm" @submit.prevent="formsubmission('Life POSP')"
                            class="row request-form mt-3">
                            <!-- Form Input -->
                            <div class="col-md-12">
                                <input type="text" name="name" v-model="lifename" @input="convertAndFilter_l"
                                    class="form-control name" placeholder="Enter Your Name*" autocomplete="off" />



                            </div>
                            <div class="col-md-12">
                                <input type="text" name="name" class="form-control " v-model="mobileNumber_l"
                                    @input="validateMobile_l" placeholder="Enter Your Mobile Number*"
                                    autocomplete="off" />

                            </div>
                            <!-- Form Input -->
                            <div class="col-md-12">
                                <input type="email" name="email" class="form-control mb-2" v-model="email_l"
                                    placeholder="Enter Your Email*" autocomplete="off" />

                            </div>


                            <div class="col-md-12 form-btn mt-1">
                                <button type="submit" class="btn bg-primary text-white submit mt-1">Get Started
                                    Now</button>
                            </div>
                            <div class="w-100 mt-1" style=" height: 30px;">
                                <div class="alert alert-danger d-flex align-items-center p-1"  v-if="errorpopup2" role="alert">
                                    <i class="fa-solid fa-circle-xmark"></i>
                                    <div class="p-1 " style="line-height: 18px; font-size: 15px;">
                                      {{ error2 }}
                                    </div>
                                </div>


                                <div class="alert alert-success d-flex align-items-center p-1"  v-if="successpopup2" role="alert">
                                    <i class="fa-solid fa-circle-check"></i>
                                    <div class="p-1 " style="line-height: 18px; font-size: 15px;">
                                      {{ success2 }}
                                    </div>
                                </div>
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 165">
                <path fill-opacity="1"
                    d="M0,160L120,154.7C240,149,480,139,720,128C960,117,1200,107,1320,101.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z">
                </path>
            </svg>
        </div>
    </section>
</template>


<script setup>
import { ref } from 'vue'

import useFormValidation from "~/composables/useFormValidation";
import useFormValidation_life from "~/composables/lifeFormValidation";

const {
    generalname,
    convertAndFilter,
    mobileNumber,
    validateMobile,
    email,

} = useFormValidation();


const {
    lifename,
    convertAndFilter_l,
    mobileNumber_l,
    validateMobile_l,

} = useFormValidation_life();


const error1 = ref('')
const success1 = ref('')

const error2 = ref('')
const success2 = ref('')

const form1 = ref(true)
const form2 = ref(false)

const email_l = ref('')

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


const errorpopup = ref(false)
const successpopup=ref(false)

const errorpopup2 = ref(false)
const successpopup2=ref(false)
const formsubmission = (formtype) => {

    if (formtype == 'General POSP') {
        if (!generalname.value || !mobileNumber.value || !email.value) {
            errorpopup.value = true
            error1.value = "Sorry ! Please fill in all the fields to help us contact you easily."
        }
        else if (mobileNumber.value.length < 9) {
            errorpopup.value = true
            error1.value = "Mobile number strictly 10 digits"
        }
        else {
            errorpopup.value = false
            error1.value = ''
            generalposp()

        }
    }

    else if (formtype == 'Life POSP') {
        if (!lifename.value || !mobileNumber_l.value || !email_l.value) {
            errorpopup2.value = true
            error2.value = "Sorry ! Please fill in all the fields to help us contact you easily."
        }

        else if (mobileNumber_l.value.length < 9) {
            errorpopup2.value = true
            error2.value = "Mobile number strictly 10 digits"

        }

        else {
            errorpopup2.value = false
            error2.value = ''
            lifeposp()
        }
    }
}




const generalposp = async () => {
    const name = generalname.value;
    const mobileno = mobileNumber.value;
    const emailid = email.value;


    const namePattern = /^[A-Z][a-zA-Z\s]*$/;
    if (!namePattern.test(name)) {
        errorpopup.value = true
        error1.value = 'Invalid name'
        return;
    }


    const mobilePattern = /^\d{10}$/;
    if (!mobilePattern.test(mobileno)) {
        errorpopup.value = true
        error1.value = 'Invalid mobile number'

        return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailid)) {
        errorpopup.value = true
        error1.value = 'Invalid email address.'
        return;
    }

    const apiurl = 'https://insurance.w3webtechnologies.co.in/insurance/post_general_posp.php'
    const formdata = new FormData()
    formdata.append('type', 'General POSP')
    formdata.append('name', name)
    formdata.append('mobileNo', mobileno)
    formdata.append('email', emailid)
    try {
        const response = await fetch(apiurl, {
            method: 'POST',
            body: formdata
        })
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        else {
            const data = await response.json()
            if (data.status == 'success') {
                successpopup.value=true
                success1.value = 'Thank you! Our POSP team will get in touch with you shortly.'
            }
        }
    } catch (error) {
        console.log(error)
    }
    finally {
        generalname.value = ''
        mobileNumber.value = ''
        email.value = ''
      setTimeout(() => {
        successpopup.value=false
      }, 5000);
    }


};



const lifeposp = async () => {

    const name = lifename.value;
    const mobileno = mobileNumber_l.value;
    const email = email_l.value;


    const namePattern = /^[A-Z][a-zA-Z\s]*$/;
    if (!namePattern.test(name)) {
        errorpopup2.value = true
        error2.value = 'Invalid name'
        return;
    }


    const mobilePattern = /^\d{10}$/;
    if (!mobilePattern.test(mobileno)) {
        errorpopup2.value = true
        error2.value = 'Invalid mobile number'

        return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        errorpopup2.value = true
        error2.value = 'Invalid email address.'
        return;
    }

    const apiurl = 'https://insurance.w3webtechnologies.co.in/insurance/post_life_posp.php'
    const formdata = new FormData()
    formdata.append('type', 'Life POSP')
    formdata.append('name', name)
    formdata.append('mobileNo', mobileno)
    formdata.append('address', email)

    try {
        const response = await fetch(apiurl, {
            method: 'POST',
            body: formdata
        })
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        else {
            const data = await response.json()
            if (data.status == 'success') {
                successpopup2.value = true
                success2.value = 'Thank you! Our POSP team will get in touch with you shortly.'
            }
        }
    } catch (error) {
        console.log(error)
    }
    finally {
        lifename.value = ''
        mobileNumber_l.value = ''
        email_l.value = ''
        setTimeout(() => {
            successpopup2.value = false
            success2.value = ''
        }, 5000);
    }


};
</script>

<style>
.bg-gray {
    background-color: rgb(239, 239, 239);
}

.btn-primary:hover {
    color: white !important;


}

.bg-primcolor {
    background-color: #505c77 !important;
}
</style>