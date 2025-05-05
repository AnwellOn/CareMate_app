document.addEventListener("DOMContentLoaded", () => {
    const postContainer = document.getElementById("postContainer");
  
    // Example static posts
    const posts = [
      {
        title: "Cool Pixel Art",
        description: "My new pixel art project!",
        image: "https://placekitten.com/400/300"
      },
      {
        title: "Mini Platformer",
        description: "A game I made with HTML5 Canvas.",
        image: "https://placehold.co/400x300?text=Game+Preview"
      }
    ];
  
    posts.forEach(post => {
      const div = document.createElement("div");
      div.className = "post";
      div.innerHTML = `
        <h3>${post.title}</h3>
        <img src="${post.image}" alt="${post.title}" style="width: 100%; border-radius: 6px;">
        <p>${post.description}</p>
      `;
      postContainer.appendChild(div);
    });
  });
  