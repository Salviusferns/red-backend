
const posts = [
    {
        author: "joe gamer",
        authorProfilePic: "put img here",
        content: "gaming on kali linux letsssss gooooo",
        replies: [
            {
                author: "",
                authorProfilePic: "put img here",
                content: "",
                replies: [
                    {
                        
                    }
                ],
                likes:0,
                dislikes:0
            },
        ],
        likes:0,
        dislikes:0
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



app.get('/posts', (req,res)=>{
    console.log(" hit");
    const postData = posts.map((posts)=>{
        return {
            name: posts.author,
            image: posts.authorProfilePic,
            content: posts.content,
            likes: posts.likes,
            dislikes: posts.dislikes,
        }
    })

    res.send(postData);
})

// Require the Routes API
// Create a Server and run it on the port 3000
const server = app.listen(4000, function () {
	let host = server.address().address
	let port = server.address().port
	// Starting the Server at the port 3000
})
