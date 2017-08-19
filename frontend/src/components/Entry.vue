<template>

  <div class="entry">
    <navbar></navbar>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12">
          <h1 class="top-ten">All-Time Top 10 Jokebook Jokes</h1>
          <hr>
        </div>
      </div>
      <div class="row">
        <div class="heading">
          <div class="col-xs-1">
            <div class="row">
              <div class="col-xs-3">
                <span>Likes</span>
              </div>
              <div class="col-xs-offset-4 col-xs-1">
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
          <div class="col-xs-1">
            <div class="row">
              <div class="col-xs-3">
                <span class="like">{{joke.votes}}</span>
              </div>
              <div class="col-xs-3">
                <span @click="vote(up, postId, userId)" class="glyphicon glyphicon-thumbs-up thumb"></span>
              </div>
              <div class="col-xs-3">
                <span @click="vote(down, postId, userId)" class="glyphicon glyphicon-thumbs-down thumb"></span>
              </div>
              <div class="col-xs-3">
                <span class="rank">#1</span>
              </div>
            </div>
          </div>
          <div class="col-xs-8">
            <div class="joke">
              <h5 @click="togglePunch(show)" class="joke-text">
                {{joke.title}}
              </h5>
            </div>
          </div>
          <div class="col-xs-1">
            <h5 v-if="show" class="punchline">
              "{{joke.body}}"
            </h5>
          </div>
          <div class="col-xs-1">
            <h5 class="tags">
              {{joke.categories}}
            </h5>
          </div>
          <div class="col-xs-1">
            <a><h5 @click="comments(id)" class="comments">
              Comments
            </h5></a>
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
        jokes: store.state.results,
        show: false
      }
    },
    methods: {
      vote(type, postId, userId) {
        store.vote(type, postId, userId)
      },
      comment(id) {
        store.comment(id)
      },
      togglePunch(show) {
        if (show == false) {
          this.show = true;
        }
        if (show == true) {
          this.show = false;
        }
      }

    },
    components: {
      Navbar
    }
  }

</script>

<style scoped>
  @font-face {
    font-family: Klavika;
    src: url('../assets/klavika.otf');
  }

  .container-fluid {
    background-color: #dfe3ee
  }

  .top-ten {
    margin-bottom: 5rem;
  }

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
    font-family: Klavika;
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
    margin-left: 2vw;
  }



  .joke-text {
    font-size: 2rem;
    font-weight: normal;
    font-family: Klavika;
  }

  .punchline {

    margin-top: 1vh;
    font-size: 2rem;
    font-family: Klavika;
  }

  .comments {
    font-family: Klavika;
    font-size: 2rem;
  }
</style>