import { ref, computed } from "vue";

export default function useFormValidation() {
  const generalname = ref("");

  const convertAndFilter = () => {
    generalname.value = generalname.value.toUpperCase().replace(/[^A-Z ]/g, ""); 
  };
  

  const mobileNumber = ref("");

  const validateMobile = () => {
    mobileNumber.value = mobileNumber.value.replace(/\D/g, "").slice(0, 10);
  };

  const email = ref("");

  const isValidEmail = computed(() =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value)
  );

  const validateEmail = () => {
    email.value = email.value.replace(/\s/g, "");
  };

  return {
    generalname,
    convertAndFilter,
    mobileNumber,
    validateMobile,
    email,
    isValidEmail,
    validateEmail,
  };
}
