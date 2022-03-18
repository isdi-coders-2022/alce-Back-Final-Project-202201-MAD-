export const getAllUsers = (req, res) => {
  res
    .status(200)
    .send("This route get all Users");
};

export const getUser = (req, res) => {
  res
    .status(200)
    .send("This route get User with id " + req.params.id);
};

export const createUser = (req, res) => {
  res
    .status(200)
    .send("This route create a User with value " + JSON.stringify(req.body));
};

export const updateUser = (req, res) => {
  res
    .status(200)
    .send("This route update User with id " + req.params.id + " and value " + JSON.stringify(req.body));
};

export const deleteUser = (req, res) => {
  res
    .status(200)
    .send("This route delete User with id " + req.params.id);
};

