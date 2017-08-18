<template>
  <div class="entry">
    <div class="container-fluid">
      <div class="row">
        <div class="heading">
          <div class="col-xs-2">
            <div class="row">
              <div class="col-xs-3">
                <span>Likes</span>
              </div>
              <div class="col-xs-offset-6 col-xs-1">
                <span>Rank</span>
              </div>
            </div>

          </div>
          <div class="col-xs-1">
            <span>Joke</span>
          </div>
          <div class=" col-xs-offset-7 col-xs-1">
            <span>Punchline</span>
          </div>
          <div class="col-xs-1">
            <span>Tags</span>
          </div>
        </div>
        <hr>
      </div>
      <div v-for="joke in jokes">
        <div class="row">
          <div class="col-xs-2">
            <div class="row">
              <div class="col-xs-3">
                <span class="like">{{joke.votes}}</span>
              </div>
              <div class="col-xs-3">
                <span class="glyphicon glyphicon-thumbs-up thumb"></span>
              </div>
              <div class="col-xs-3">
                <span class="glyphicon glyphicon-thumbs-down thumb"></span>
              </div>
              <div class="col-xs-3">
                <span class="rank">#1</span>
              </div>
            </div>
          </div>
          <div class="col-xs-8">
            <div class="joke">
              <h5>
                {{joke.title}}
              </h5>
            </div>
          </div>
          <div class="col-xs-1">
            <h5 class="punchline">
              "{{joke.body}}"
            </h5>
          </div>
          <div class="col-xs-1">
            <h5 class="tags">
              {{joke.categories}}
            </h5>
          </div>
        </div>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
  import { store } from '../store'
  import Navbar from './Navbar'
  export default {
    name: 'entry',
    data() {
      return {
        jokes: store.state.results
      }
    },
    methods: {

    },
    components: {
      Navbar
    }
  }

</script>

<style scoped>
  .thumb {
    color: #3b5998;
    font-size: 20px;
  }


  .heading {
    margin-bottom: 8vh;
    font-weight: bold;
    font-size: 25px;
  }

  .like {
    font-size: 20px;
  }

  .tags {
    font-size: 20px;
  }

  .rank {
    font-size: 20px;
    color: #3b5998;
  }

  .joke {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */
    /* margin-top: 1vh; */
    font-size: 20px;
    margin-left: 2vw;
  }

  .punchline {

    margin-top: 1vh;
    font-size: 20px;
  }
</style>