//IMPORT REQUIRED MODULES
const { response } = require("express");
const express = require("express");
const path = require("path");

//Set up Express app and port number
const app = express();
const port = process.env.PORT || 8888;

//Set up template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//Set up static file paths
app.use(express.static(path.join(__dirname, "public")));


var nav = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Rooms",
        path: "/room"
    },
    {
        name: "Locations",
        path: "/locations"
    },
    {
        name: "Hotel_info",
        path: "/hotel_info"
    }
];

//Page routes
app.get("/", (request, response) => {
   // response.status(200).send("Test page for haveInn WELCOME");
   response.render("index", { title: "Home", menu: nav });
});
app.get("/room", (request, response) => {
    response.render("room", { title: "Rooms", menu: nav });
});
app.get("/location", (request, response) => {
    response.render("location", { title: "Locations", menu: nav });
});
app.get("/hotel_info", (request, response) => {
    response.render("hotel_info", { title: "Hotel_Info", menu: nav });
});

//Set up server listening
app.listen(port, ()=> {
    console.log(`Listening on http://localhost:${port}`);
});