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

  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        Made by <a href='https://github.com/axriosn'>Alex R.</a> for Ashby RC's Membership and Yearbook Committee. The source code and website content is purposefully <a href='https://choosealicense.com/no-permission/'>not licensed</a>.
        All rights reserved.
      </p>
      <a href='https://twitter.com'><span class='icon is-medium'><font-awesome-icon :icon="['fab', 'twitter']" /></span></a>
      <a href='https://instagram.com'><span class='icon is-medium'><font-awesome-icon :icon="['fab', 'instagram']" /></span></a>
      <a href='https://facebook.com'><span class='icon is-medium'><font-awesome-icon :icon="['fab', 'facebook']" /></span></a>
    </div>
  </footer>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import authState from './firebase';

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
