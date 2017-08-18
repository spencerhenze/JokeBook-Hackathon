<template>
  <div class="hello">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
          <div class="icon">
            <span class="j">J</span>
          </div>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <div class="navbar-form navbar-left">
            <form @submit.prevent="search()">
              <div class="form-group">
                <input type="text" class="form-control input-lg" placeholder="Search"> <!-- v-model="query"-->
                <button type="submit" class="btn btn-default btn-lg">Find Joke</button>
              </div>
            </form>
          </div>
          <div class="navbar-form navbar-left login">
            <form @submit.prevent="login()">
              <div class="form-group">
                <input type="text" class="form-control  " placeholder="Username"> <!-- v-model="query"-->
              </div>
                <input type="text" class="form-control" placeholder="Password"> <!-- v-model="query"-->
                <button type="submit" class="btn btn-default btn-login">Login/Register</button>
            </form>
          </div>

          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle white-text" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="white-text">Jokes By Category</span> <span class="caret white-text"></span></a>
              <ul class="dropdown-menu">
                <li @click="getJokes('dad-jokes')">Dad Jokes</li>
                <li @click="getJokes('redneck-jokes')">Redneck Jokes</li>
                <li @click="getJokes('code-jokes')">Code Jokes</li>
                <li role="separator" class="divider"></li>
                <li @click="getJokes('all-jokes')">All Joke Categories</li>
              </ul>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>



  </div>
</template>

<script>
  //for when we need a store
  // import { store } from '../store'
  import $ from 'jquery'
  export default {
    name: 'navbar',
    data() {
      return {
        // query=''
      }
    },
    methods: {
      // search(){
      // store.search(this.query)
      // .then(res =>{
      //   this.results = res
      // })
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
    .navbar {
      margin-top: -5vh;
      background-color: #3b5998;
      /* font-family: Klavika Bold; */
    }


    .login{
      padding: .3vh 0 0 5vw;

    }

    .btn-login{
      background-color: #8b9dc3;
      color: white;
      font-size: 1.3vh;
    }

    .white-text {
      color: white;
    }

    .dropdown-toggle {
      color: black;
    }

    .dropdown{
      padding-top: .5vh;
    }

    li {
      color: black;
      font-size: 2rem;
      padding: 1rem;
    }

    .navbar-header{
      margin-left: 25rem;
    }

    .icon{
      background-color: white;
      color: #3b5998;
      /* padding: 0vh 2vh 1vh 2vh; */
      width: 2.2vw;
      margin-top: .75vh;
      border-radius: 5px;
      height: 3.75vh;
    }

    .j{
      font-size: 3.5vh;
      position: relative;
      bottom: .45vh;
      left: .3vw;
    }

    .input-lg{
      padding: 0 5rem 0 15rem;
    }
</style>