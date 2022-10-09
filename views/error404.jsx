const React = require('react')
const Def = require('./default')

function error404(){
    return(
        <Def>
        <main>
            <h1>404: PAGE NOT FOUND</h1>
            <p>Oops, we're sorry, we can't find this page!</p>
            <div>
              <img src="/images/error-cat.jpg" alt ="Questioning Cat"/>
              <div>
                Photo by <a href="https://unsplash.com/@tranmautritam?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tran Mau Tri Tam</a> on <a href = "https://unsplash.com/photos/-81lVsfM4gQ"> Unsplash </a>
              </div>
              </div>
        </main>
    </Def>
    )
}

module.exports = error404