import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const contador = ref(0)
  function decrementar() {
    contador.value--
  }
  function incrementar() {
    contador.value++
  }

  return { contador, decrementar, incrementar }
})
