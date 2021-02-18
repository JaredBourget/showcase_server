import User from '../models/user';

const getUser = async (req, res, next) => {
  return {
    name: "Jared",
    role: "admin"
  }
}

const UserRoutes = {
  getUser
}

export default UserRoutes;

