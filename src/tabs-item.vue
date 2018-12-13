<template>
    <div class="gulu-tabs-item" @click="onClick" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "gulu-tabs-item",
        props: {
            name: {
                type: String || Number,
                require: true
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        inject: ['eventBus'],
        data() {
            return {
                active: false
            }
        },
        created() {
            this.eventBus.$on('update:selected', (name) => {
                this.active = this.name === name;
            });
        },
        computed: {
            classes() {
                return {
                    active: this.active,
                    disabled: this.disabled
                }
            }
        },
        methods: {
            onClick() {
                if (this.disabled) {
                    return false;
                }
                this.eventBus.$emit('update:selected', this.name, this)
            }
        }
    }
</script>

<style scoped type="text/scss" lang="scss">
    .gulu-tabs-item {
        text-align: center;
        /*border: 1px solid grey;*/
        border-right: none;
        position: relative;
        top: 1px;
        padding: 1em 2em;
        cursor: pointer;
        transition: all 0.3s;
        &:first-child {
            padding-left: 0;
        }
        &:last-child {
            padding-right: 0;
            /*border-right: 1px solid grey;*/
        }
        &.active {
            color: #44A0FF;
            /*border-bottom: 1px solid white;*/
        }
        &.disabled{
            color: #ccc;
            cursor: not-allowed;
        }
    }
</style>
