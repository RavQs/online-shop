<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.btn {
    margin-top: 15px;
    margin-bottom: 15px;
    padding: 10px 50px;
    background-color: teal;
    color: white;
    border : 1px solid teal;
}
</style>