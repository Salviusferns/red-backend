
const gaming = [{
    name: "morbius",
    rating: "-2/10",
    summary: "morty times",
    review: "she hulk go vroom vroom",
    releasedate:"12/07/2022",
    agerating: "18",
    image: './imeg/morbius.png',
    upvotes: 0,
    downvotes: 0,
  },
  {
    name:"spooderman",
    rating:"great/10",
    summary: "web tings",
    review: "its all correct",
    releasedate:"04/08/2021",
    agerating: "18",
    image: './imeg/oop.webp',
    upvotes: 0,
    downvotes: 0,
  },
  {
    name: "Blockland: The Movie",
    rating: "9/10",
    summary: "the blockl from blockland run around really fast like blockland",
    review: "I LOVE BLOCKLAND, but no boobie :((",
    releasedate: "28/04/2045",
    agerating: "3+",
    image: './imeg/blockland.png',
    upvotes: 0,
    downvotes: 0
  },
  {
    name: "Among Us: Sussier and Sussier",
    rating: "sus/10",
    summary: "The imposter is on spaceship!!!! who is sus...? You will find out when you find the sus guy on the susship in the suspace. Maybe you are imposter..???? Or maybe imposter is friend along the way,,!! :))",
    review: "The ending was way too sus for what the film was trying to do in the first half. I was under the assumption created by the movie that the sus guy was red, but, and spoilers to anyone who hasn't watched it, it turns out the imposter was the main character, 'blue'. What a boring and frustrating ending.",
    releasedate: "42/04/2008",
    agerating: "18+",
    image: './imeg/amongus.jpg',
    upvotes: 0,
    downvotes: 0
  },
  {
    name: "The Super Mario Movie",
    rating: "1/10",
    summary: "That guy that was in uhhh the galaxy guardian is mario and he uhh says hello to toad and uhhh bowser is knuckles and uhhh he jump aroud mario says it's a me mario it's me,, mario!!!!!!!!!!!!!! me mario!!!!!!!! that's what he says in the film",
    review: "Need italian mario where is italian mario 1/10 will NEVER buy nintendo game again!!!!",
    releasedate: "1023/04/5",
    agerating: "12+",
    image: './imeg/supermario.jpg',
    upvotes: 0,
    downvotes: 0
  },
  {
    name: "The Leg Movie",
    rating: "7/10",
    summary: "The leg movie is about the leg bricks moving around and they are legging a lot. The leg man called L Bozo wants to be master Legger. He defeats the evil Arm man and wins and then he kiss the Leg girlfriend and then he become the master Legger.",
    review: "The amount of leg shown in the movie is way too little. They we constantly showing the story and backstory of the Arm man which is frustrating to anyone coming to see Legs. I still gave it a 7 because L Bozo's storyline is unbelievably intricately written, his Leg girlfriend is so simplistic yet resembles any love interest the viewer may have.",
    releasedate: "23/08/1995",
    agerating: "1+",
    image: './imeg/legmovie.jpg',
    like: 0,
  }
]

const cors = require('cors')
const express = require('express');

/* Creates an Express application.
The express() function is a top-level
function exported by the express module.
*/
const app = express();
app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }))

/* To handle the HTTP Methods Body Parser
is used, Generally used to extract the
entire body portion of an incoming
request stream and exposes it on req.body
*/
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));



app.get('/gaming', (req,res)=>{
    console.log("gaming hit");
    const gamingData = gaming.map((gaming)=>{
        return {
            name: gaming.name,
            agerating: gaming.agerating,
            image: gaming.image,
            rating: gaming.rating,
            upvotes: gaming.upvotes,
            downvotes: gaming.downvotes,
        }
    })

    res.send(gamingData);
})

// Require the Routes API
// Create a Server and run it on the port 3000
const server = app.listen(4000, function () {
	let host = server.address().address
	let port = server.address().port
	// Starting the Server at the port 3000
})
