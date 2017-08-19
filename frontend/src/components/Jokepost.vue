<template>

    <div class="jokepost">
        <navbar></navbar>
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-12">
                    <h1 class="title">Post A Joke</h1>
                    <p class="note">*Please note: jokes <span class="must">must</span> be clean. This is a family site so please do not post
                        anything that is inappropriate. Violation of this policy will cause your registration to be revoked.
                        Thank you.*
                        <hr>
                </div>
            </div>
            <div class="row">
                <div col-xs-12>
                    <div class="posts">
                        <div v-for "joke in jokeList">
                            <span v-if="userId==jokeList.userId">{{joke}}</span><button class="btn" type="button">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label for="comment">New Joke Post:</label>
                <textarea class="form-control" rows="5" id="comment"></textarea>
                <input @click="addPost(joke,userId)" type="submit" class="btn btn-info submit-button" value="Post">
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
                jokeList: store.state.posts
            }
        },
        methods: {

            addPost(joke, userId) {
                state.posts.push(joke)
            },
            removePost(joke, userId) {
                var index = posts.indexOf(joke)
                state.posts.splice(index, 1)
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

    .note {
        color: red;
    }

    .must {
        text-decoration: underline;
    }

    .title {
        margin-bottom: 5rem;
    }

    .tags {
        font-size: 20px;
        font-family: Klavika;
    }

    .joke-text {
        font-size: 2rem;
        font-weight: normal;
        font-family: Klavika;
    }

    .posts {
        height: 40vh;
    }

    textarea {
        font-size: 2rem;
    }

    label {
        font-size: 3rem;
    }

    .submit-button {
        background-color: #3b5998;
        font-size: 2.5rem;
    }
</style>