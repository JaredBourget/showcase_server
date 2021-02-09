import TestTable from '../models/home.js'

const getHomePage = async (req, res, next) => {
  TestTable.getHomeData().then(result => {
    res.send(result)
  })
  // res.send('may need to change some postgres config files')
}

const getUser = async (req, res, next) => {
  return {
    name: "Jared",
    role: "admin"
  }
  // res.send('may need to change some postgres config files')
}
const HomePageRoutes = {
  getHomePage,
  getUser
}
export default HomePageRoutes;