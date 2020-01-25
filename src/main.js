import Vue from 'vue';
import App from './App.vue';
import VueCurrencyFilter from 'vue-currency-filter';
import VueCurrencyInput from 'vue-currency-input';
import '@/assets/styles';

Vue.config.productionTip = false;

Vue.use(VueCurrencyFilter, {
	symbol : '€',
	thousandsSeparator: '.',
	fractionCount: 2,
	fractionSeparator: ',',
	symbolPosition: 'back',
	symbolSpacing: true,
})

Vue.use(VueCurrencyInput, {
	globalOptions: {
		currency: 'EUR',
		locale: 'de-DE',
	},
})

new Vue({
	render: h => h(App),
}).$mount('#app');
