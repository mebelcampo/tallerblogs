const { Blog } = require('../models'); 

let listarBlogsService = async () => {
  try {
    let blogs = await Blog.findAll(); 
    return blogs; 
  } catch (error) {
    console.error("Error al obtener los blogs: ", error);
  }
}

module.exports = { listarBlogsService };
