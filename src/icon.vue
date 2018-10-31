<template>
    <svg>
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<style lang='scss'>
</style>
<script>
export default {
  props: ['name']
}
</script>