<template>
    <div class="gulu-tabs-head">
        <slot></slot>
        <div class="bottom-line" ref="line"></div>
    </div>
</template>

<script>
    export default {
        name: "gulu-tabs-head",
        inject: ['eventBus'],
        created() {

        },
        mounted() {
            this.eventBus.$on('update:selected', (name, vm) => {
                let {paddingLeft, paddingRight} = document.defaultView.getComputedStyle(vm.$el, null);
                let {width, left, bottom, height} = vm.$el.getBoundingClientRect();
                this.$refs.line.style.width = `${width - parseInt(paddingLeft) - parseInt(paddingRight)}px`;
                this.$refs.line.style.transform = `translateX(${left + parseInt(paddingLeft) - parseInt(paddingRight)}px)`;
            })
        }
    }
</script>

<style scoped lang="scss" type="text/scss">
    .gulu-tabs-head {
        display: flex;
        justify-content: start;
        position: relative;
        &:after {
            content: '';
            position: absolute;
            width: 100%;
            padding-top: 1px;
            background: #ccc;
            bottom: 0;
            z-index: 0;
        }
        .bottom-line {
            border-bottom: 2px solid #44A0FF;
            position: absolute;
            bottom: 0px;
            left: 0;
            transition: all 0.3s cubic-bezier(.645, .045, .355, 1);
            z-index: 1;
        }
    }
</style>