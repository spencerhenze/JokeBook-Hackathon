<template>

  <div class="jokepost">
    <navbar></navbar>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12">
          <h1 class="title">Post A Joke</h1>
          <p class="note">*Please note: jokes <span class="must">must</span> be clean.  This is a family site so please do not post anything that is inappropriate.  Violation of this policy will cause your registration to be revoked.  Thank you.*

          <hr>
        </div>
      </div>
      </div>
     </div>
         
</template>

<script>
  import { store } from '../store'
  import Navbar from './Navbar'
  export default {
    name: 'jokepost',
    data() {
      return {
        jokes: store.state.results,
        show: false
      }
    },
    methods: {
      vote(type){
        store.vote(type)
      },
      comment(id){
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

.note{
    color:red;
}

.must{
    text-decoration:underline;
}
.title{
  margin-bottom: 5rem;
}

  .tags {
    font-size: 20px;
    font-family: Klavika;
  }

  .joke-text{
    font-size: 2rem;
    font-weight: normal;
    font-family: Klavika;
  }

</style>