// Write your code here!
const API_URL = 'https://jsonplaceholder.typicode.com/posts'

const postList = document.querySelector('#post-list')

function displayPosts(postsArray) {
    postList.innerHTML = ''

    postsArray.forEach(item => {
        const posts_li = document.createElement('li')

        const posts_head = document.createElement('h1')
        posts_head.textContent = item.title

        const posts_para = document.createElement('p')
        posts_para.textContent = item.body

        posts_li.append(posts_head, posts_para)
        postList.appendChild(posts_li)
    })
}

async function houseAndFetchPosts() {
    const response = await fetch(API_URL)

    const data = await response.json()

    displayPosts(data)
}

houseAndFetchPosts()