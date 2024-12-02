<script setup>
import { ref } from 'vue';
const enviarPadre = ref("")
</script>

<template>

  <h1>Componente hijo</h1>

  <form @submit.prevent="">
    <input type="text" v-model="enviarPadre">
    <button @click="$emit('inputHijo', enviarPadre), enviarPadre = ''">Enviar mensaje</button>
  </form>

</template>
