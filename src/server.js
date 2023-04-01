import configViewEngine from "./configs/viewEngines";
import express from "express";
import initWebRoute from './router/web';
// import initAPIRoute from './router/api';
import checkConnectDB from "./configs/connectDB";
require('dotenv').config()
const app = express()

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended: true}));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
//set ejs engine
configViewEngine(app);
//init web route
initWebRoute(app);
//init api route
// initAPIRoute(app);

checkConnectDB();


const port = process.env.PORT || 8081

// app.get('/', (req, res) => {
//   res.render("index.ejs")
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})