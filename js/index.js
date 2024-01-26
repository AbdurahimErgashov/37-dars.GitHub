const express = require('express')
const app = express()
const port = 8080


const months = ["All Alone",  "Among My Souvenirs", "As You Desire Me", "Bali Hai"];

app.get('/', (req, res) => {
    const randomMonth = months[Math.floor(Math.random() * months.length)];
    res.send(randomMonth);
});

// app.use(function(req, res, next) {
//     var user = auth(req);

//     if (user === undefined  user['name'] !== 'username'  user['pass'] !== 'password') {
//         res.writeHead(401, 'Access invalid for user', {'Content-Type' : 'text/plain'});
//         res.end('Invalid credentials');
//     } else {
//         next();
//     }
// });

app.get('/birth_date', (req, res) => {
    res.send('December 12, 1915');
})

app.get('/birth_city', (req, res) => {
    res.send('Hoboken, New Jersey');
})

app.get('/wives', (req, res) => {
    res.send("Nancy Barbato, Ava Gardner, Mia Farrow, Barbara Marx");
})

app.get('/picture', (req, res) => {
    res.redirect('https://en.wikipedia.org/wiki/Frank_Sinatra#/media/File:Frank_Sinatra2,_Pal_Joey.jpg');
})
app.get('/public', (req, res) => {
    res.send('Everybody can see this page');
    })
    app.get('/protected', (req, res, next) => {
        let authheader=req.headers.authorization;
        if(!authheader){
            let err=new Error("401 Not authorized")
            res.setHeader("WWW-Authenticate",'Basic')
            err.status=401
            return next(err)
        }
        let auth = new Buffer.from(authheader.split(' ')[1],
        'base64').toString().split(':');
        let user = auth[0];
        let pass = auth[1];
      
        // Checking the details
        if (user == 'admin' && pass == 'admin') {
          res.send("Welcome, authenticated client")
        } else {
            let err = new Error('401 Not authorized');
            res.setHeader('WWW-Authenticate', 'Basic');
            err.status = 401;
            return next(err);
        }
    })
    




app.listen(port, () => {
  console.log(`ura ishladi ${port}`)
})