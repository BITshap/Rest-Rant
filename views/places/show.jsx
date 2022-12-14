const React = require('react')
const Def = require('../default')

function show (data){
    let comments = (
        <h3 className="inactive">
            No Comments yet!
        </h3>
    )
    let rating = (
        <h3 className="inactive">
            Not yet rated
        </h3>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
            stars += '⭐'
        }
        rating = ( 
            <h3>
               {stars} stars
            </h3>
        )
        comments = data.place.comments.map(c => {
            return(
                <div className="border col-sm-4">
                     
            <h2 className="rant">{c.rant ? 'Rant!' : 'Rave!'}</h2>
            <h4>{c.content}</h4>
            <h3>
              <strong>- {c.author}</strong>
            </h3>
            <h4>Rating: {c.stars}</h4>
            <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
                <input type="submit" className="btn btn-danger" value="Delete Comment"/> 
                </form>
          </div>
               
            )
        })
    }
    return (
        <Def>
            <main>
                <img src={data.place.pic}/>
                <h1>{data.place.name}</h1>
                <div>
                <h2>Rating</h2>
                {rating}
                <p>Nothing Yet</p>
                </div>
                <div>
                <h2>Description</h2>
                <p>{data.place.showEstablished()}</p>
                </div>
                <div>
                    <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
                        Edit
                    </a>
                    <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>
                    </form>
                </div>
                <div>
                    <h2>Comments</h2>
                    {comments}
                </div>
                <form method="POST" action={`/places/${data.place.id}/comment?_method=POST`}>
                <div className="form-group">
                        <label htmlFor="Author">Author</label>
                        <input className="form-control" id="author" name="author"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <textarea className="form-control" id="content" name="content"/>
                    </div>  
                    <div className="form-group">
                    <label for="stars" class="form-label">Star Rating</label>
                    <input type="range" step="0.5" min="1" max="5"class="form-range" name="stars" id="stars"/>
                    </div>
                    <div class="form-check">
                    <label for="rant"> Rant? </label>
                        <input class="form-check-input" type="checkbox" value="rant" name="rant"  checked/>
                        </div>
                    <input className="btn btn-primary" type="submit" value="Add Comment"/>

                </form>
            </main>
        </Def>
    )
}

module.exports = show

