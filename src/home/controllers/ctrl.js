import Test from '../models/home.js'

const getHomePage = async (req, res, next) => {
  // Test.getHomeData().then(result => {
  //   res.send(result)
  // })
  res.send('may need to change some postgres config files')
}

export default getHomePage