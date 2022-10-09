const React = require('react')
const Def = require('./default')


function home () {
    return (
      <Def>
          <main>
              <h1>REST-Rant</h1>
              
              <div className = "row">
                <div className = "col-sm-3">
              <img src="/images/eggs-photo.jpg" alt ="Photo of Eggs"/>
              <div>
                Photo by <a href="https://unsplash.com/@ccoquet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Christian Coquet</a> on <a href = "https://unsplash.com/s/photos/eggs"> Unsplash </a>
              </div>
              </div>
              <div className = "col-sm-3">
              <img src="/images/pizza.jpg" alt = "Photo of Pizza"/>
              <div>
              Photo by <a href="https://unsplash.com/@iavnt">Ivan Torres</a> on <a href = "https://images.unsplash.com/photo-1513104890138-7c749659a591"> Unsplash </a>
              </div>
              </div>
              <div className = "col-sm-3">
              <img src="/images/crepe.avif" alt = "Photo of Crepe"/>
              <div>
              Photo by <a href="https://unsplash.com/@toddcravens">Tod Cravens</a> on <a href = "https://unsplash.com/photos/-ssI7gyHDfk"> Unsplash </a>
              </div>
              </div>
              <div className = "col-sm-3">
              <img src="/images/pasta.avif" alt = "Photo of Pasta"/>
              <div>
              Photo by <a href="https://unsplash.com/@bleiplays33">Ben Lei</a> on <a href = "https://unsplash.com/photos/flFd8L7_B3g"> Unsplash </a>
              </div>
              </div>
              </div>
              
              <a href="/places">
  <button className="btn-primary">Places Page</button>
</a>

          </main>
      </Def>
    )
  }
  

module.exports = home