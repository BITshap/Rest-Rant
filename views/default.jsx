const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="/style.css"/>
            </head>
            <body>
                <div className="content">
                <div className="content-inside">
                    <nav>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                            <a href="/places">Places</a>
                            </li>
                            <li>
                                <a href="/places/new">Add Place</a>
                            </li>
                        </ul>
                    </nav>
                {html.children}
                </div>
                </div>
            </body>
            <footer className="Footer"><a href="https://www.linkedin.com/in/nick-shapoff-18974421a/">My LinkedIn</a></footer>
        </html>
    )
  }
  

module.exports = Def
