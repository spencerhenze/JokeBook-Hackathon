import $ from 'jquery'

var state = {
    results: [
        {
            title: 'Whats brown and sticky',
            body: 'A stick',
            created: 8 - 8 - 17,
            votes: 5,
            categories: 'Dad Jokes',
            comments: ['Funny Joke', 'Made me laugh', 'Comment','Comment','Comment', 'Not amused', 'Very amused', 'Now, this is a story all about how My life got flipped-turned upside down And Id like to take a minute To sit right there Ill tell you how I became the prince of a town called Bel Air In west Philadelphia born and raised On the playground was where I spent most of my days Chillin out maxin relaxin all coo And all shootin some b-ball outside of the school .. To sit on my throne as the Prince of Bel Air']
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
    state: state,
    // search(query){
    //     var base = "mongodb://booyah:booyah@ds149433.mlab.com:49433/hackathon1?"
    //     var url = `${base}=${query}`

    //     return new Promise(function(resolve, reject){
    //         $.get(url)
    //             .then(data=>{resolve(data)})
    //             .catch(error=>{reject(error)});
    //     })
    // },

    vote(type){

    }


}





export { store }