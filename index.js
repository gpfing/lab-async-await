// Write your code here!
function displayPosts(users) {
    const userList = document.querySelector('#post-list');

    users.forEach(user => {
        const listItem = document.createElement('li');
        const h1Item = document.createElement('h1');
        h1Item.textContent = user.title;
        const pItem = document.createElement('p');
        pItem.textContent = user.body;
        listItem.appendChild(h1Item);
        listItem.appendChild(pItem);
        
        userList.appendChild(listItem);
    });
}

async function fetchAndDisplayPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const users = await response.json();
        displayPosts(users);
    } catch (error) {
        const userList = document.querySelector('#user-list');
        const errorMessage = document.createElement('li');
        errorMessage.textContent = 'Failed to load user data. Please try again later.';
        userList.appendChild(errorMessage);
        console.error('Error fetching user data:', error);
    }
}
fetchAndDisplayPosts();