<template>
  <div class="container">
    <h1>Who we are/what this committee is</h1>
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
import PersonInfoCard from "@/components/PersonInfoCard";

export default defineComponent({
  name: 'About',
  components: {
    PersonInfoCard,
  },
});
</script>