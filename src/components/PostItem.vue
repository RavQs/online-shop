<template>
    <div class="post">
        <div>
            <div><strong>Login:</strong> {{post.login}}</div>
            <div><strong>Name:</strong> {{post.name}}</div>
            <div><strong>Email:</strong> {{post.email}}</div>
        </div>
        <div class="delete">
            <del-button
                @click="$emit('remove',post)"> Delete
            </del-button>
        </div>
    </div>
</template>

<script>
    export default {
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