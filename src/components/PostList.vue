<template>
    <div>
        <h3>Список пользователей</h3>
        <post-item
            v-for="post in posts"
            :post = "post">
        </post-item>
        
    </div>
</template>

<script>
import PostItem from '@/components/PostItem';

    export default {
        components: {PostItem},
        props: {
            posts : Array,
            required: true
        }
        
    }
</script>

<style scoped>

</style>