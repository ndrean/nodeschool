function checkUsersValid(goodUsers) {
    return (submittedUsers) => {
      return submittedUsers.every(user=> {
          return goodUsers.some(gooduser=> gooduser.id === user.id)
        })
    };
  }

const goodUsers = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
]

console.log(checkUsersValid(goodUsers)([
    { id: 2 },
    { id: 1 }
  ]))
  
console.log(checkUsersValid(goodUsers)([
    { id: 2 },
    { id: 4 },
    { id: 1 }
  ]))


module.exports = checkUsersValid