<script setup>
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia';
import ComponenteHijo from '@/components/ComponenteHijo.vue';
import { ref } from 'vue';

const contadorStore = useCounterStore();
const { contador } = storeToRefs(contadorStore);
const { incrementar, decrementar } = contadorStore;
const mensajeHijo = ref("")

const actualizarMensaje = (mensaje) => {
  mensajeHijo.value = mensaje

}
</script>

<template>
  <div class="about">
    <h1>Vista About</h1>
    <h2>{{ contador }}</h2>

    <div>
      <button @click="incrementar">Incrementar</button>
      <button @click="decrementar">Decrementar</button>
    </div>

    <div>
      <h1>Componente Padre</h1>
      <p>Mensaje recibido por el componente hijo: {{ mensajeHijo }}</p>
    </div>
    <div>
      <ComponenteHijo @inputHijo="actualizarMensaje" />
    </div>
  </div>

</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
