<template>
    <div>
            <!-- prevent для отмены перегрузки страницы -->
        <form @submit.prevent>
        <h4>Create new User</h4>
            <!-- Имеется двухстороннее связывание в инпуте -->
            <my-input 
            type="text" 
            v-model="post.login" 
            placeholder="login"
        >
        </my-input>
        <my-input 
            type="text"
            v-model="post.name" 
            placeholder="name"
        >
        </my-input>
        <my-input 
            type="text"
            v-model="post.email" 
            placeholder="email"
        >
        </my-input>
        <post-button   
            @click="createPost">Create
        </post-button>
    </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            post: {
                login: '',
                name: '',
                email: ''
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit('create',this.post)
            this.post = {
                login: '',
                name: '',
                email: ''
            }            
        },
    }

}
</script>

<style scoped>

form {
    display: flex;
    flex-direction: column;
}

</style>