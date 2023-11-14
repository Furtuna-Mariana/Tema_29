


const addToDoToBe = (list, user) => {
   return localStorage.setItem(user, JSON.stringify(list))
}

export default addToDoToBe