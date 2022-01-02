<template>
  <div class='container'>
    <section class='section'>
      <h1 class='title'>Who we are</h1>
      <h2 class='subtitle'>
        A description of who we are
      </h2>
    </section>
    <br />
    <div class='columns is-multiline'>
      <div class='column is-one-quarter'>
        <person-info-card />
      </div>
      <div class='column is-one-quarter'>
        <person-info-card />
      </div>
      <div class='column is-one-quarter'>
        <person-info-card />
      </div>
      <div class='column is-one-quarter'>
        <person-info-card />
      </div>
      <div class='column is-one-quarter'>
        <person-info-card />
      </div>
      <div class='column is-one-quarter'>
        <person-info-card />
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import PersonInfoCard from "@/components/PersonInfoCard.vue";

export default defineComponent({
  name: 'About',
  components: {
    PersonInfoCard,
  },
});
</script>