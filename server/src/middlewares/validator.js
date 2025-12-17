export const validateBody = (req, res, next) => {
  const { name, email } = req.body;
  if (!name || typeof name !== "string") return res.status(400).json({ error: "Invalid or missing 'name'" });
  if (!email || typeof email !== "string" || !email.includes("@")) return res.status(400).json({ error: "Invalid or missing 'email'" });
  next();
};
