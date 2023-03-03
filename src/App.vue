<template>
<div class="app">
    <H1>Users Page</H1>
    <login-button>Login</login-button>
    <post-button @click="fetchUsers">Fetch users from server</post-button>
    <post-button 
    @click="showDialog"
    >Create new user</post-button>
    <my-dialog 
    v-model:isVisible="modalWindow">
        <post-form 
            @create="createPost"/>
    </my-dialog>

    <post-list 
        :posts="posts"
        @remove="removePost"
    ></post-list>
    
</div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import PostButton from "@/components/UI/PostButton"
import LoginButton from "@/components/UI/LoginButton"
import axios from 'axios'

export default {
    components: {
        PostForm, PostList
    },
    data() {
        return {
            posts: [],

            modalWindow: false,
        }
    },
    methods: {
        createPost(post) {
            this.posts.push(post);
            this.modalWindow = false;
        },
        removePost(post) {
            console.log(post);
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
        showDialog() {
            this.modalWindow = true
        },
        async fetchUsers() {
            try {
                const response = await axios.get('http://localhost:8080/api/users/findAll')
                response.data.forEach(el => {
                    console.log(el);
                })

                this.posts = response.data
            } catch(e) {
              alert('error')  
            }
        },
    }
    
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    padding: 10px;
}

</style>