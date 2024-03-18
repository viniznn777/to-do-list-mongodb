const jwt = require("jsonwebtoken");

const secretKey =
  "e9f6ffeceb68d556ecba3ec3b828d560db40ca10c2eb74e74d7f6c64d12a54c5";

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  try {
    if (!token) {
      return res.status(401).json({ message: "Unauthorized: Token missing" });
    }

    const decoded = jwt.verify(token, secretKey);

    // Adicione as informações do token ao objeto de solicitação para uso posterior
    req.user = decoded;

    // Continue para a próxima camada middleware ou rota
    next();
  } catch (err) {
    console.error("Invalid token:", err);
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

module.exports = verifyToken;
