<template>
<div class="app">
    <post-form 
        @create="createPost">
    </post-form>
    
    <post-list 
        :posts="posts"
        @remove="removePost"
    ></post-list>
</div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";

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
        }
    },
    methods: {
        createPost(post) {
            this.posts.push(post)
        },
        removePost(post) {
            console.log(post);
            this.posts = this.posts.filter(p => p.id !== post.id)
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