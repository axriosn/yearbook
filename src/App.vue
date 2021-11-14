<template>
  <nav aria-label='main navigation' class='navbar' role='navigation'>
    <div class='navbar-brand'>
      <a class='navbar-item'>
        <img height='28' src='https://bulma.io/images/bulma-logo.png' width='112' alt='Ashby Logo'>
      </a>

      <a :class='{"is-active": authState.isNavbarVisible}' aria-controls='navbar' aria-expanded='false'
         aria-label='menu' class='navbar-burger'
         data-toggle='navbar' role='button'
         @click='authState.isNavbarVisible = !authState.isNavbarVisible'>
        <span aria-hidden='true'></span>
        <span aria-hidden='true'></span>
        <span aria-hidden='true'></span>
      </a>
    </div>

    <div id='navbar' :class='{"is-active": authState.isNavbarVisible}' class='navbar-menu'>
      <div class='navbar-start'>
        <router-link v-for='route in authState.routes'
                     :class='{ "is-primary": authState.selectedRoute?.name === route.name }'
                     :to='route.path' class='navbar-item'>{{ route.name }}
        </router-link>
      </div>

      <div class='navbar-end'>
        <div class='navbar-item'>
          <div class='buttons'>
            <a class='button is-success' @click='authState.signInOut'>
              {{ authState.isSignedIn ? "Sign Out" : "Sign In" }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <br />
  <router-view />
  <br />
</template>

<script lang='ts'>
import { defineComponent } from "vue";
// @ts-ignore what am i supposed to do? not use this? shut up
import authState from './firebase.ts';

export default defineComponent({
  setup() {

    return {
      authState,
    }
  },
});
</script>

<style lang='scss'>
$body-background-color: #C2CAE8;
$navbar-item-hover-background-color: #dcedff;
$navbar-background-color: #8380B6;
$navbar-dropdown-background-color: #505a5b;
$navbar-item-hover-color: #343f3e;
$navbar-dropdown-active-color: #343f3e;
$navbar-item-color: white;

@import './../node_modules/bulma/bulma';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.card-extra {
  height: auto;
  width: 900px;
  margin: auto;
  position: relative;
  background-color: #94b0da;
}
</style>
