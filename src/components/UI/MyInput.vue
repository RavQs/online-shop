<template>
    <input 
    :value="modelValue"
    @input="updateInput" 
    class="input" 
    type="text">
</template>

<script>
    export default {
        name: 'my-input',

        props: {
            modelValue: [String, Number]
        },

        methods: {
            updateInput(event) { //передача в родительский класс обновленный компонент {!!!modelValue!!!}
                this.$emit('update:modelValue', event.target.value)
            }
        }
    
    
    }
    
</script>

<style scoped>
.input {
    width: 100%;
    padding: 15px;
    margin-top: 10px;
    border: 3px solid teal;
}
</style>