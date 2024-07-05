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
                // Retrieving existing block posts from localStorage
                const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
                // new blog post object
                const newPost = { username, title, content };
                // new blog post to the list
                blogPosts.push(newPost);
                // Save updated blog posts list back to localStorage
                localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
                // Redirect to posts.html
                window.location.href = 'blog.html';
            } else {
                errorMessage.style.display = 'block';
            }
        });
    }
    


});