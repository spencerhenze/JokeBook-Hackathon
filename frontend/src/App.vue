<template>
  <div id="app">
    
    <entry></entry>
  </div>
</template>

<script>
//for when we need a store
// import { store } from '../store'
import Navbar from './components/Navbar'
import Entry from './components/Entry'
import Jokecomments from './components/Jokecomments'

export default {
  name: 'app',
  components: {
    Navbar,
    Entry,
    Jokecomments
  }
}
</script>

<style>
@font-face {
    font-family: Klavika Bold;
    src: url('./assets/KlavikaBold.ttf');
    }

#app {
  font-family: 'Klavika Bold', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  // font-family: Klavika Bold;
}

</style>
