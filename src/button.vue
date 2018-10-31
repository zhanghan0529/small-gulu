<template>
  <button class='g-button' :class="{[`content-${isPosition}`]:true}" @click=$emit('click')>
    <g-icon v-if='icon&&!loading' class="icon" aria-hidden="true" :name='icon'></g-icon>
    <g-icon v-if=loading class="icon icon-loading" aria-hidden="true" name='loading'></g-icon>
    <div class='content'>
      <slot></slot>
    </div>
  </button>
</template>

<style lang='scss'>
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.g-button {
  color: var(--button-color);
  font-size: var(--button-font-size);
  border: var(--button-border);
  border-radius: var(--button-border-radius);
  padding: 0 1em;
  height: var(--button-height);
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: top;
  &:hover {
    background: #ccc;
    opacity: 0.8;
  }
  &:focus {
    background: #ccc;
  }
  > .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    margin-right: 0.2em;
    order: 1;
  }
  > .content {
    order: 2;
  }
  > .icon-loading {
    animation: loading 1s infinite linear;
  }
  &.content-right {
    .content {
      order: 1;
    }
    .icon {
      order: 2;
      margin-right: 0em;
      margin-left: 0.2em;
    }
  }
}
</style>
<script>
export default {
  // props: ['icon', 'isPosition'],
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    isPosition: {
      type: String,
      default: 'left',
      validator: function(value) {
        if (value !== 'left' && value !== 'right') {
          return false
        } else {
          return true
        }
      }
    }
  }
}
</script>