export default {
    install(Vue) {
        const {EventBus} = require('./eventBus');
        Vue.prototype.$bus = EventBus;

        const {SDK} = require('./SDK');
        Vue.prototype.$sdk = SDK;
    }
};