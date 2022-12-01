<template>
    <div>
            <!-- prevent для отмены перегрузки страницы -->
        <form @submit.prevent>
        <h4>Создание поста</h4>
            <!-- Имеется двухстороннее связывание в инпуте -->
            <my-input 
            v-model="post.title" 
            type="text" 
            placeholder="Название"
        >
        </my-input>
        <my-input 
            v-model="post.desc" 
            type="text"
            placeholder="Описание"
        >
        </my-input>
        <post-button   
            @click="createPost">Создать
        </post-button>
    </form>
    </div>
</template>

<script>
    export default {
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

</style>