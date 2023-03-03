<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'post-button'
    }
</script>

<style scoped>
.btn {
    padding: 10px 50px;
    background-color: teal;
    color: white;
    border : 1px solid teal;
    align-self:center; 
    margin-top: 15px; 
    margin-bottom: 15px;
    margin-right: 15px;
}
</style>