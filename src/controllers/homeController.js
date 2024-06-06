// src/controllers/homeController.js
exports.index = (req, res) => {
    res.render('index', { title: 'Home', message: 'Welcome to Express and Pug MVC' });
  };
  