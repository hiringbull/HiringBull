const users = [];
let nextId = 1;

export const getAllUsers = (req, res) => {
  res.json({ data: users });
};

export const getUserById = (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json({ data: user });
};

export const createUser = (req, res) => {
  const { name, email } = req.body;
  const user = { id: nextId++, name, email, createdAt: new Date().toISOString() };
  users.push(user);
  res.status(201).json({ data: user });
};
