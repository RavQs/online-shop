<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'login-button'
    }
</script>

<style>
.btn {
    padding: 10px 50px;
    color: #fff;
    border : 1px solid black;
    align-self: end;
    background-color:#0a0a23;
}
</style>