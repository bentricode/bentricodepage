import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const isSobre = ref(false);
  const isServicos = ref(false);
  const isProjetos = ref(false);

  function setIsSobre(value) {
    isSobre.value = value;
  }
  function setIsServicos(value) {
    isServicos.value = value;
  }
  function setIsProjetos(value) {
    isProjetos.value = value;
  }

  return { isSobre, isServicos, isProjetos, setIsSobre, setIsServicos, setIsProjetos }
})
