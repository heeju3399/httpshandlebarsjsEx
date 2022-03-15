const express = require('express');
const hbs = require('express-handlebars');
const app = express();

app.engine("hbs", hbs({
    extname: "hbs",
    defaultLayout: "main",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials ",

    // helpers: {
    //     ifUsernameParkoon: function (arg1, arg2, options) {
    //         console.log('arg1 :' + arg1 + '// arg2 : ' + arg2);
    //         return arg1 === arg2 ? options.fn() : options.inverse();
    //     },
    // },
}));
app.set("view engine", "hbs");

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/imges'));

app.get("/main", (req, res) => {
    console.log('pass');
    res.status(200).render("empty.hbs", {
        style: "main.css",
    });
});

app.get("/responsive", (req, res) => {
    console.log('test pass');
    res.status(200).render("empty.hbs", {
        layout: 'responsive',
        style: "responsive.css",
    });
});

app.get("/structure", (req, res) => {
    console.log('structure pass');
    res.status(200).render("empty.hbs", {
        layout: 'structure',
        style: "structure.css",
    });
});

app.get("/css", (req, res) => {
    console.log('css pass');
    res.status(200).render("empty.hbs", {
        layout: 'css',
        style: "css.css",
    });
});

app.get("/handlebar", (req, res) => {
    console.log('handlebar pass');
    res.status(200).render("empty.hbs", {
        layout: 'handlebar',
        style: "handlebar.css",
        // 데이터 전송하기 
        // name: 'Danny',
        // isLoggedIn: false,
        // isReady: false,
        // users: ["parkoon", "kimyang", "choikoon", "leeyang"],
    });
});

app.listen(3000, () => {
    console.log("3000");
});
