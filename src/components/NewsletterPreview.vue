<template>
  <router-link to='page' v-slot='{href, navigate}' custom>
    <article class='media'>
      <figure class='media-left'>
        <p class='image is-64x64'>
          <img src='https://bulma.io/images/placeholders/64x64.png' alt='newsletter image' />
        </p>
      </figure>
      <div class='media-content'>
        <div class='content'>
          <p>
            <a :href='href' @click='navigate'><strong>Ashburrian [insert num]</strong></a>
            <br>
            Some short description of the newsletter maybe?
          </p>
        </div>
      </div>
    </article>
  </router-link>
</template>

<script>
export default {
  name: "NewsletterPreview"
}
</script>

<style scoped>

</style>