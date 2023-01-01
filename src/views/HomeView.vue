<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="sdfsdf" />
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import { defineAsyncComponent } from '@vue/composition-api'
 
export default {
  components: {
    HelloWorld: defineAsyncComponent(() =>
      import('../components/HelloWorld.vue')
    )
  },
  setup() {

    const name = ref('name form setup functions')

    return { name }
  },
}
</script>


