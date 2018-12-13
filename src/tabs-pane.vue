<template>
    <div class="gulu-tabs-pane" v-if="active">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "gulu-tabs-pane",
        props: {
            name: {
                type: String || Number,
                require: true
            }
        },
        inject: ['eventBus'],
        data() {
            return {
                active: false,
            }
        },
        created() {
            this.eventBus.$on('update:selected', (name) => {
                this.active = name === this.name;
            })
        }
    }
</script>

<style scoped lang="scss" type="text/scss">
    .gulu-tabs-pane {
        width: 100%;
        padding: 1em 0;
    }
</style>