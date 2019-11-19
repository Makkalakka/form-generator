import Vue from 'vue';
import App from './App.vue';
import {
  BModal, VBModal, BAlert, BFormSelect,
  BTable } from 'bootstrap-vue';
import { FormInputPlugin, FormGroupPlugin } from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.component('b-modal', BModal);
Vue.directive('b-modal', VBModal);
Vue.component('b-alert', BAlert);
Vue.component('b-form-select', BFormSelect);
Vue.component('b-table', BTable);
Vue.use(FormInputPlugin);
Vue.use(FormGroupPlugin);

new Vue({
  render: h => h(App),
}).$mount('#app');
