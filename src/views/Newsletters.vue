<template>
  <div class='card card-extra'>
    <div class='card-header'>
      <p class='card-header-title'>Ashburrian Newsletters</p>
    </div>
    <div class='card-content'>
      <!--      <Newsletter></Newsletter>-->
    </div>
    <div class='card-footer'>
      <div class='card-footer-item'>
        <button class='button is-primary' type='submit' @click='isModalActive = !isModalActive'>Upload</button>
        <NewsletterUploadModal v-model='isModalActive'></NewsletterUploadModal>
      </div>
    </div>
  </div>
</template>

<script>
import {defineAsyncComponent, defineComponent, ref} from "vue";

export default defineComponent({
  name: "Newsletters",
  components: {
    NewsletterUploadModal: defineAsyncComponent(() => import('../components/NewsletterUploadModal.vue')),
  },
  setup() {
    const isModalActive = ref(false);

    function uploadNewsletter(e) {
      console.log(e.target.elements.newsletter.files[0]);
    }
    return {
      uploadNewsletter,
      isModalActive,
    }
  }
});
</script>

<style scoped>

</style>