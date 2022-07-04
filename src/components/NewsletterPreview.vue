<template>
  <router-link v-slot='{href, navigate}' custom to='page'>
    <article class='media'>
      <figure class='media-left'>
        <p class='image is-64x64'>
          <img alt='newsletter image' src='https://bulma.io/images/placeholders/64x64.png' />
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