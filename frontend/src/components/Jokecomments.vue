<template>
    <div class="jokecomments">
        <navbar></navbar>
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-2">
                    <div class="row">
                        <div class="col-xs-3">
                            <span class="like">{{jokes[0].votes}}</span>
                        </div>
                        <div class="col-xs-3">
                            <span @click="vote(up)" class="glyphicon glyphicon-thumbs-up thumb"></span>
                        </div>
                        <div class="col-xs-3">
                            <span @click="vote(down)" class="glyphicon glyphicon-thumbs-down thumb"></span>
                        </div>
                        <div class="col-xs-3">
                            <span class="rank">#1</span>
                        </div>
                    </div>
                </div>
                <div class="col-xs-5">
                    <div class="joke">
                        <h5 @click="togglePunch(show)" class="joke-text">
                            {{jokes[0].title}}
                        </h5>
                    </div>
                </div>
                <div class="col-xs-3">
                    <h5 v-if="show" class="punchline">
                        {{jokes[0].body}}
                    </h5>
                </div>
                <div class="col-xs-1">
                    <h5 @click="search()"class="tags">
                        Tags: {{jokes[0].categories}}
                    </h5>
                </div>
            </div>
        </div>
        <div class="postLine">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xs-12">
                        <form @submit.prevent="comment(userId, postId)">
                            <div class="form-group">
                                <input type="text" class="form-control input-lg" placeholder="..." v-model="comment">
                                <button type="submit" class="btn btn-default btn-lg">Post Comment</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div v-for="comment in jokes[0].comments">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="user">
                                <p>username</p>
                            </div>
                            <div class="comment-text">
                                {{comment}}
                                <hr>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import { store } from '../store'
    import Navbar from './Navbar'
    export default {
        name: 'jokecomments',
        data() {
            return {
                jokes: store.state.results,
                show: false,
                comment: ''
            }
        },
        methods: {
            vote(type) {
                store.vote(type)
            },
            togglePunch(show) {
                if (show == false) {
                    this.show = true;
                }
                if (show == true) {
                    this.show = false;
                }
            },
            search(){

            },
            addComment(userId, postId){
                var comment = this.comment
                store.addComment(userId, postId, comment)
            }
        },
        components: {
            Navbar
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @font-face {
        font-family: Klavika;
        src: url('../assets/klavika.otf');
    }

    .postLine {
        padding-top: 1rem;
        background-color: #dfe3ee;
    }

    .thumb {
        color: #3b5998;
        font-size: 20px;
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
        font-size: 3rem;
        font-weight: normal;
        font-family: Klavika;
    }

    .punchline {
        margin-top: 1vh;
        font-size: 3rem;
        font-family: Klavika;
    }

    .comments {
        font-family: Klavika;
        font-size: 2rem;
    }

    .comment-text {
        font-size: 2rem;
        text-align: left;
        font-family: Klavika;
    }

    .user {
        text-align: left;
        font-family: Klavika;
    }
</style>