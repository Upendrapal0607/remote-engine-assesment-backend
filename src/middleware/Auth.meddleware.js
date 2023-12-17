// Simple Auth middleware 
const Auth = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  try {
    if (token) {
      next();
    } else {
      res.status(201).json({ message: "you are not authorized" });
    }
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

module.exports = {
  Auth,
};
