import Vue from 'vue';
import Button from './button';
import Icon from './icon';

import Tabs from './tabs';
import Tabshead from './tabs-head';
import Tabsitem from './tabs-item';
import Tabsbody from './tabs-body';
import Tabspane from './tabs-pane';

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);

Vue.component('g-tabs', Tabs);
Vue.component('g-tabs-head', Tabshead);
Vue.component('g-tabs-item', Tabsitem);
Vue.component('g-tabs-body', Tabsbody);
Vue.component('g-tabs-pane', Tabspane);

new Vue({
    el: '#app',
    data: {
        // loading: false,
        // loading1: false,
        // loading2: false,
        selectedTab: '1'
    },
    created() {
    },
    methods: {}
});