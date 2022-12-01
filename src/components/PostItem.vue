<template>
    <div class="post">
    <div>
        <div><strong>Название:</strong> {{post.title}}</div>
        <div><strong>Описание:</strong> {{post.desc}}</div>
    </div>
    <div class="delete">
        <my-button class="btn">Удалить</my-button>
    </div>

    </div>

    
</template>

<script>
import MyButton from '@/components/UI/MyButton'

    export default {
        components: {
            MyButton
        },
        props: {
            post : Object,
            required: true
        }
    }
</script>

<style scoped>
.post {
    margin-top: 10px;
    padding: 15px;
    border: 3px solid teal;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>