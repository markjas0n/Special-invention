
 
 //Posts Display
  document.addEventListener('DOMContentLoaded', () => {
    const blogPostsContainer = document.getElementById('blogPosts');

    // Retrieve blog posts from localStorage
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    // Function to display a blog post
    function displayBlogPost(post) {
        const postElement = document.createElement('div');
        postElement.className = 'blog-post';
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p><strong>By:</strong> ${post.username}</p>
            <p>${post.content}</p>
            <p><em>${new Date(post.timestamp).toLocaleString()}</em></p>
        `;
        blogPostsContainer.appendChild(postElement);
    }

    // Display all blog posts
    blogPosts.forEach(displayBlogPost);
});


