<template>
  <div :class='{"is-active": modelValue}' class='modal'>
    <div class='modal-background'></div>
    <div class='modal-content'>
      <form @submit.prevent='addNewsletter'>
        <div class='field is-horizontal'>
          <div class='field-label is-normal'>
            <label class='label'>Name:</label>
          </div>
          <div class='field-body'>
            <div class='field'>
              <p class='control is-expanded'>
                <input class='input' placeholder='Name' required type='text' />
              </p>
            </div>
          </div>
        </div>

        <div class='field is-horizontal'>
          <div class='field-label is-normal'>
            <label class='label'>Description:</label>
          </div>
          <div class='field-body'>
            <div class='field'>
              <p class='control is-expanded'>
                <input class='input' placeholder='Name' required type='text' />
              </p>
            </div>
          </div>
        </div>

        <div class='field is-horizontal'>
          <div class='field-label'>
            <label class='label' for='newsletter'>Newsletter:</label>
          </div>
          <div class='field-body'>
            <div class='field'>
              <div class='control'>
                <div class='file'>
                  <label class='file-label'>
                    <input accept='application/pdf' class='file-input' id='newsletter' required type='file' />
                    <span class='file-cta'>
                      <span class='file-label'>Select Newsletter…</span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class='field is-horizontal'>
          <div class='field-label'>
            <!-- Left empty for spacing -->
          </div>
          <div class='field-body'>
            <div class='field'>
              <div class='control'>
                <button class='button is-primary' :class='{"is-loading": isButtonLoading}'>
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <button aria-label='close' class='modal-close is-large' @click='$emit("update:modelValue", false)'></button>
  </div>
</template>

<script>
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "NewsletterUploadModal",
  props: ['modelValue'],
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const isButtonLoading = ref(false);

    function addNewsletter() {
      isButtonLoading.value = true;
      // add name plus desc to firestore or realtime?
      // add pdf to storage
      isButtonLoading.value = false;
      emit('update:modelValue', false);
    }

    return {
      isButtonLoading,
      addNewsletter,
    }
  }
});
</script>

<style scoped>

</style>