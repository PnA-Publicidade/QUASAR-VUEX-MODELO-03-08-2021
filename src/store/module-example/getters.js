

const activeUsersCount = (state) => {
    return state.users.filter(user => user.status).length




}
export {
    activeUsersCount
}


