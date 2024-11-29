const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = process.env.PORT;

const blogsRoutes = require('./routes/blogsRoutes');
app.use('/api/blogs', blogsRoutes);

app.listen(port, () => {
    console.log(`El servidor está corriendo en el puerto ${port}`);
});
