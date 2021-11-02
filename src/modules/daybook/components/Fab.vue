<template>
  <button class="btn btn-primary">
      <i class="fa fa-2x"
        :class="icon"></i>
  </button>
</template>

<script>
export default {
    props:{
        icon:{
            type:String,
            required:true,
            default:"fa-plus"
        }
    }
}
</script>

<style lang="scss" scoped>
    button{
        position: fixed;
        bottom: 20px;
        right: 20px;
        height: 80px;
        width: 80px;
        border-radius: 50%;
    }
</style>