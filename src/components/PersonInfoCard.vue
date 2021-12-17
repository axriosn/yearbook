<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="image of name">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
        </div>
        <div class="media-content">
          <p class="title is-4">First last name</p>
          <p class="subtitle is-6">email@uncg.edu</p>
          <a href='https://twitter.com/their-twitter'><span class='icon'><font-awesome-icon :icon='["fab", "twitter"]' /></span></a>
          <a href='https://instagram.com/their-ig'><span class='icon'><font-awesome-icon :icon='["fab", "instagram"]' /></span></a>
        </div>
      </div>

      <div class="content">
        a short description/bio of First last name
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "PersonInfoCard",
  setup() {
    return {}
  }
});
</script>

<style scoped>

</style>