type userData = {
     name: string,
     email: string,
     number: number,
     isActive: boolean
}

function createUser(user: userData): userData {
     return { name: "hitesh", email: "hitesh.dev", number: 125350, isActive: true }
}

createUser({ name: "hitesh", email: "hitesh.dev", number: 125350, isActive: true })