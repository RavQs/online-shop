<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'my-button'
    }
</script>

<style scoped>
.btn {
    padding: 10px 50px;
    background-color: teal;
    color: white;
    border : 1px solid teal;
}
</style>