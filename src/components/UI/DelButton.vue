<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'del-button'
    }
</script>

<style scoped>
.btn {
    padding: 10px 50px;
    color: #fff;
    border : 1px solid black;

    background-color:#0a0a23;
}
</style>