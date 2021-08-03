<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
    <div>State Count: {{count}}</div>
    <div>Getter Count Status true: {{activeUsersCount}}</div>
    <div>
    
    </div>

  <Cbuttons />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { mapState, mapGetters, mapActions } from 'vuex'
import Cbuttons from 'components/CButtons.vue'

export default defineComponent({
  name: 'PageIndex',
  components: {
    Cbuttons
    },
  computed: {
    ...mapState('example', ['count']),
    ...mapGetters('example', ['activeUsersCount'])
  },
  methods: {
    // ...mapMutations('example', ['INCREMENT', 'DECREMENT'])
    // ...mapActions('example', ['incrementCount', 'decrementCount'])
  }
})
</script>
