<template>
    <svg>
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>

<script>
    export default {
        name:'gulu-icon',
        props: ['name']
    }
</script>
<style lang='scss'>
</style>