<template>
<div class="app">
    <H1>Страница с постами</H1>
    <post-button 
    @click="showDialog"
    >Создать пользователя</post-button>
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

export default {
    components: {
        PostForm, PostList
    },
    data() {
        return {
            posts: [
                { id: 1,title: 'Javascript', desc: 'Описание поста'},
                { id: 2,title: 'Javascript 2', desc: 'Описание поста 2'},
                { id: 3,title: 'Javascript 3', desc: 'Описание поста 3'},
                { id: 4,title: 'Javascript 4', desc: 'Описание поста 4'},
            ],
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
        }
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