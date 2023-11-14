


const getToDoList = (selectedUser) => {
    return localStorage.getItem(selectedUser) ? JSON.parse(localStorage.getItem(selectedUser)) : []
}


export default getToDoList