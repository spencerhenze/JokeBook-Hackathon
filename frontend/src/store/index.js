import $ from 'jquery'

var state = {
    results: [
        {
            title: 'Whats brown and sticky',
            body: 'A stick',
            created: 8 - 8 - 17,
            votes: 5,
            categories: 'Dad Jokes',
            comments: ['Funny Joke']
        },
        {
            title: 'Whats brown and sticky what kajsfija ieawofm jfa  jfaksj jfkaslj fjakslj fj asjkdf jask djf  fjkldaj sfkdj s; iawmef mifoawm kfdaiwo  fmaeiwom  fmeaiwo  mfawo fm awo  ',
            body: 'A stick',
            created: 8 - 8 - 17,
            votes: 9,
            categories: 'Dad Jokes',
            comments: ['Funny Joke']
        },
        {
            title: 'Whats brown and sticky',
            body: 'A stick',
            created: 8 - 8 - 17,
            votes: 7,
            categories: 'Dad Jokes',
            comments: ['Funny Joke']
        },
        {
            title: 'Whats brown and sticky',
            body: 'A stick',
            created: 8 - 8 - 17,
            votes: 10,
            categories: 'Dad Jokes',
            comments: ['Funny Joke']
        }
    ]
}

var store = {
    state: state
    // search(query){
    //     var base = "mongodb://booyah:booyah@ds149433.mlab.com:49433/hackathon1?"
    //     var url = `${base}=${query}`

    //     return new Promise(function(resolve, reject){
    //         $.get(url)
    //             .then(data=>{resolve(data)})
    //             .catch(error=>{reject(error)});
    //     })
    // },

}





export { store }