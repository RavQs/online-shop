<template>
    <div>
            <!-- prevent для отмены перегрузки страницы -->
        <form @submit.prevent>
        <h4>Создание поста</h4>
            <!-- Имеется двухстороннее связывание в инпуте -->
            <input 
            v-model="post.title" 
            class="input" 
            type="text" 
            placeholder="Название"
        >
        <input 
            v-model="post.desc" 
            class="input" 
            type="text"
            placeholder="Описание"
        >
        <my-button   
            class="btn" 
            @click="createPost">Создать
        </my-button>
    </form>
    </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton'; 
    export default {
        components: {
            MyButton
        },
        data() {
            return {
            post: {
                title: '',
                desc: ''
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now;
            this.$emit('create',this.post)
            this.post = {
                title: '',
                desc: ''
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

.input {
    width: 100%;
    padding: 15px;
    margin-top: 10px;
    border: 3px solid teal;
}
</style>