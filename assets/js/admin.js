let posts = [];

document.getElementById('create-post-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('post-title').value;
  const description = document.getElementById('post-description').value;
  const image = document.getElementById('post-image').value;

  const newPost = {
    id: Date.now(),
    title,
    description,
    image,
  };

  posts.push(newPost);
  displayPosts();
  this.reset();
});

function displayPosts() {
  const postsList = document.getElementById('posts-list');
  postsList.innerHTML = '';

  posts.forEach(post => {
    const postCard = document.createElement('div');
    postCard.classList.add('post-card');

    postCard.innerHTML = `
      <h3>${post.title}</h3>
      <img src="${post.image}" alt="${post.title}">
      <p>${post.description}</p>
      <button onclick="deletePost(${post.id})">Excluir</button>
      <button onclick="editPost(${post.id})">Editar</button>
    `;
    
    postsList.appendChild(postCard);
  });
}

function deletePost(postId) {
  posts = posts.filter(post => post.id !== postId);
  displayPosts();
}

function editPost(postId) {
  const postToEdit = posts.find(post => post.id === postId);

  document.getElementById('post-title').value = postToEdit.title;
  document.getElementById('post-description').value = postToEdit.description;
  document.getElementById('post-image').value = postToEdit.image;

  deletePost(postId);
}
