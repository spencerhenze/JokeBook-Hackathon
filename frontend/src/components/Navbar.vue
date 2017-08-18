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
          <a class="navbar-brand" href="#"><img src="../assets/logo.png" alt="brand"></a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <div class="navbar-form navbar-center">
            <form @submit.prevent="search()">
              <div class="form-group">
                <input type="text" class="form-control input-lg" placeholder="Search" v-model="query">
                <button type="submit" class="btn btn-default btn-lg">Find Joke</button>
              </div>
            </form>
          </div>

          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle white-text" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="white-text">Search By Category</span> <span class="caret white-text"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Dad Jokes</a></li>
                <li><a href="#">Redneck Jokes</a></li>
                <li><a href="#">Code Jokes</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">See All Joke Categories</a></li>
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
  import { store } from '../store'
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
  }

  .white-text {
    color: white;
  }

  .dropdown-toggle{
    color: black;
  }

  li {
    color: black;
    font-size: 3rem;
  }

  .navbar-center {
    align-content: center;
  }

  .navbar-right{
    padding-right: 15rem;
  }
</style>