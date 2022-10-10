const React = require('react')
const Def = require('../default')

function show (data){
    return (
        <Def>
            <main>
                <img src={data.place.pic}/>
                <h1>{data.place.name}</h1>
                <div>
                <h2>Rating</h2>
                <p>Nothing Yet</p>
                </div>
                <div>
                <h2>Description</h2>
                <p>We are in {data.place.state}, {data.place.city}. Are speciality is {data.place.cuisines}!</p>
                </div>
                <div>
                    <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                        Edit
                    </a>
                    <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>
                    </form>
                </div>
            </main>
        </Def>
    )
}

module.exports = show