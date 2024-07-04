// Handling form submission on index.html
document.addEventListener('DOMContentLoaded', () => {
    const blogForm = document.getElementById('blogForm');
    const errorMessage = document.getElementById('error-message');

    if (blogForm) {
        blogForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const username = document.getElementById('username').value.trim();
            const title = document.getElementById('title').value.trim();
            const content = document.getElementById('content').value.trim();

            if (username && title && content) {
                const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
                const newPost = { username, title, content };
                blogPosts.push(newPost);
                localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
                window.location.href = 'posts.html';
            } else {
                errorMessage.style.display = 'block';
            }
        });
    }

    // Rendering blog posts on posts.html
    const postsContainer = document.getElementById('postsContainer');
    if (postsContainer) {
        const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        blogPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <p><em>by ${post.username}</em></p>
            `;``
            postsContainer.appendChild(postElement);
        });
    }

    // Implementing light/dark mode toggle
    const modeToggle = document.getElementById('modeToggle');
    if (modeToggle) {
        modeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    }
});