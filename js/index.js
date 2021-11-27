const form = document.querySelector('#github-form')
const userList = document.querySelector('#user-list')

form.addEventListener('submit', e => 
{
    e.preventDefault()
    let userName = e.target[0].value
    getInfo(userName)

})

function getInfo(username){
    fetch(`https://api.github.com/users/${username}`)
    .then(resp => resp.json())
    .then(user => {
      console.log(user)
      renderUser(user)  
})
}
function renderUser(user){
    userList.innerHTML = `
    <div>
    <li><img src="${user.avatar_url}">"${user.name}"</li>
    <a href="${user.url}> Click here for ${user.name}'s profile</a>'
    <div>`
}