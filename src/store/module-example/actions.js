const incrementCount = ({ commit }) => {
    setTimeout(() => {
        commit('INCREMENT')
    }, 1000)
}
const decrementCount = ({ commit }) => {
    setTimeout(() => {
        commit('DECREMENT')
    }, 1000)
}

export {
    incrementCount,
    decrementCount
}