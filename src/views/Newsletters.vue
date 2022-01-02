<template>
  <div class='card card-extra'>
    <div class='card-header'>
      <p class='card-header-title'>Ashburrian Newsletters</p>
    </div>
    <div class='card-content'>
      <NewsletterPreview></NewsletterPreview>
    </div>
  </div>
</template>

<script>
import {defineAsyncComponent, defineComponent} from "vue";

export default defineComponent({
  name: "Newsletters",
  components: {
    'NewsletterPreview': defineAsyncComponent(() => import('../components/NewsletterPreview.vue')),
  },
  setup() {
    return {}
  }
});
</script>

<style scoped>

</style>