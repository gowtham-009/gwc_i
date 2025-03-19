import { ref, computed } from "vue";

export default function useFormValidation_life() {
  const lifename = ref("");

  const convertAndFilter_l = () => {
    lifename.value = lifename.value.toUpperCase().replace(/[^A-Z ]/g, "");
  };

  const mobileNumber_l = ref("");

  const validateMobile_l = () => {
    mobileNumber_l.value = mobileNumber_l.value.replace(/\D/g, "").slice(0, 10);
  };
  const address_l = ref("");

  const convertAndFilter_adl = () => {
    address_l.value = address_l.value
      .toUpperCase()
      .replace(/[^A-Z0-9.,/\-\s]/g, "");
  };
  


  return {
    lifename,
    convertAndFilter_l,
    mobileNumber_l,
    validateMobile_l,
    address_l,
    convertAndFilter_adl
  };
}
