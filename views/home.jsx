const React = require('react')
const Def = require('./default')


function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
              <img src="/images/eggs-photo.jpg" alt ="Photo of Eggs"/>
              <div>
                Photo by <a href="https://unsplash.com/@ccoquet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Christian Coquet</a> on <a href = "https://unsplash.com/s/photos/eggs"> Unsplash </a>
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