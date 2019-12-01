export default {
    state: {
        message: 'Currency Converter',
        textBtn: 'convert to'
    },
    mutations: {},
    actions: {},
    getters: {
        getMessage (state) {
            return state.message
        },
        getTextBtn (state) {
            return state.textBtn
        }
    }
}