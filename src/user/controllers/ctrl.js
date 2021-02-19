import User from '../models/user';

const getUser = async (req, res, next) => {
  const { id } = params;
  User.getUser(id).then(user => {
    res.send(user)
  }).catch(err => {
    console.log(err)
  })
}

const UserRoutes = {
  getUser
}

export default UserRoutes;

