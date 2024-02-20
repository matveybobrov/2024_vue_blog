function checkAuth(req, res, next) {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    return res.status(403).json({ message: "AUTH ERROR"})
  }
  next()
}
export default checkAuth