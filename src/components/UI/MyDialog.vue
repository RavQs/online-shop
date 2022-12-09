<template>
    <div class="dialog" v-if="isVisible" @click.self="hideModal">
      <div class="dialog__content">
        <slot></slot>
      </div>

    </div>
</template>

<script>
    export default {
       name: 'my-dialog',
       props: {
         isVisible: {
            type: Boolean,
            default: false,
         },
       },
       methods: {
          hideModal() {
            this.$emit('update:isVisible', false)
          }
       }
    }
</script>

<style  scoped>
.dialog {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;

}


.dialog__content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-width: 300px;
  min-height: 50px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
}
</style>