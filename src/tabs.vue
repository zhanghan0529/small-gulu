<template>
    <div class="g-tabs">
        <slot></slot>
    </div>
</template>
<script>
    import Vue from 'vue';

    export default {
        name: 'g-tabs',
        props: {
            selected: {
                type: String || Number,
                require: true
            }
        },
        data() {
            return {
                eventBus: new Vue(),
            }
        },
        provide() {
            return {
                eventBus: this.eventBus
            }
        },
        created() {
        },
        mounted() {
            this.$children.forEach((vm) => {
                if (vm.$options.name === 'gulu-tabs-head') {
                    vm.$children.forEach((childrenVm) => {
                        if (childrenVm.$options.name === 'gulu-tabs-item' && childrenVm.name === this.selected) {
                            this.eventBus.$emit('update:selected', this.selected, childrenVm);
                        }
                    })
                }
            })
            //console.log(this.eventBus);
        }
    }
</script>
<style lang="scss" scoped type="text/scss">
    .g-tabs {
        padding: 0 2em;
    }
</style>