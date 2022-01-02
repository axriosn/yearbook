<template>
  <div class='modal'>
    <div class='modal-background'></div>
    <div class='modal-content'>
      <div class='card card-extra'>
        <div class='card-content'>
          <form @submit.prevent='publishNewsletter(newsletterInfo)'>
            <div class='field is-horizontal'>
              <div class='field-label is-normal'>
                <label class='label'>Newsletter Name</label>
              </div>
              <div class='field-body'>
                <div class='field'>
                  <p class='control is-expanded'>
                    <input class='input' type='text' placeholder='Ashburrian Vol...' v-model='newsletterInfo.name' />
                  </p>
                </div>
              </div>
            </div>

            <div class='field is-horizontal'>
              <div class='field-label is-normal'>
                <label class='label'>Week selection</label>
              </div>
              <div class='field-body'>
                <div class='field'>
                  <div class='control'>
                    <input class='input' type='date' v-model='newsletterInfo.week' />
                    <p class='help'>Select literally any day of the newsletter week</p>
                  </div>
                </div>
              </div>
            </div>

            <div class='field is-horizontal'>
              <div class='field-label is-normal'>
                <label class='label'>Short bio</label>
              </div>
              <div class='field-body'>
                <div class='field'>
                  <div class='control'>
                    <textarea class='textarea' placeholder='This weeks special events include(d)...'
                              v-model='newsletterInfo.bio'></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div class='field is-horizontal is-grouped'>
                  <div class='control'>
                    <button class='button is-primary' type='submit'>Publish</button>
                  </div>
                  <div class='control'>
                    <button class='button' type='button' @click.prevent='closeModal'>Cancel</button>
                  </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {reactive} from 'vue';

export default {
  name: "PublishInfoModal",
  props: {
    publishNewsletter: Function,
    closeModal: Function,
  },
  setup() {
    const newsletterInfo = reactive({
      name: '',
      week: '',
      bio: '',
    });

    return {
      newsletterInfo,
    }
  }
}
</script>

<style scoped>

</style>