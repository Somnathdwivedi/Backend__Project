// controllers/posts.js

exports.createPost = (req, res) => {
    const { title, tags } = req.body;
  
    // Here you would handle the logic to create the post, like saving it to a database
    // For now, we'll just send back the received data as a response
    res.json({ message: "Post created successfully", title, tags });
  };
  