const { listarBlogsService } = require('../services/blogsService'); 

const listarBlogs = async (req, res) => {
  try {
    let respuesta = await listarBlogsService(); 
    res.json(respuesta); 
  } catch (error) {
    console.error("Error al obtener los blogs:", error);
  }
}

module.exports = {
  listarBlogs
}
