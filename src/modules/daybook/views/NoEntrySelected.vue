<template>
  <div class="d-flex justify-content-center">
      <h2 class="align-self-center">Nohay nada seleccionado</h2>
  </div>
  <fab></fab>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
    components:{
        Fab: defineAsyncComponent( ()=> import('../components/Fab.vue'))
    }
}
</script>

<style lang="scss" scoped>
    div{
        height: 100%;
    }
</style>