<template>
  <q-page class="flex flex-center">
    <div class="q-display-1">Botões do Componente</div>

    <q-btn label="decrementar" color="primary" @click="decrementCount()"></q-btn>
    <q-btn label="incrementar" color="primary" @click="incrementCount()"></q-btn>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions } from 'vuex'

export default defineComponent({
  name: 'Cbuttons',

  methods: {
    // ...mapMutations('example', ['INCREMENT', 'DECREMENT'])
    ...mapActions('example', ['incrementCount', 'decrementCount'])
  }
})
</script>
