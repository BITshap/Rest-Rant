const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'CPK',
        city: 'Los Angeles',
        state: 'CA',
        cuisines: 'American, Comfort',
        pic: 'https://assets.simon.com/tenantlogos/829.png'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/02/24115640/Untitled-design-2022-02-18T123717.280.jpg'
      }]
      
    res.render('places/index', {places})
})

module.exports = router
