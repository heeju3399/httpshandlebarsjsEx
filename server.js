var express = require('express');
var hbs = require('express-handlebars');
const path = require('path');
const app = express();

app.engine("hbs", hbs.engine({
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
}
));
app.set("view engine", "hbs");

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/imges'));


// app.get("/main", (req, res) => {
//     console.log('main pass');
//     res.status(200).render("empty.hbs", {
//         style: "main.css",
//     }
//     );
// }
// );

app.get("/flexex", (req, res) => {
    console.log('flexex pass');
    res.status(200).render("empty.hbs", {
        layout: 'flexex',
        style: "flexex.css",
    }
    );
}
);

app.get("/responsive", (req, res) => {
    console.log('test pass');

    res.status(200).render("empty.hbs", {
        layout: 'responsive',
        style: "responsive.css",
    }
    );
}
);

app.get("/structure", (req, res) => {
    console.log('structure pass');

    res.status(200).render("empty.hbs", {
        layout: 'structure',
        style: "structure.css",
    }
    );
}

);

app.get("/", (req, res) => {
    console.log('main pass');
    res.status(200).render("empty.hbs", {
        layout: 'main',
        style: "main.css",
    }
    );
}
);



app.get("/mycss", (req, res) => {
    console.log('css pass');

    res.status(200).render("empty.hbs", {
        layout: 'mycss',
        style: "mycss.css",
    }
    );
}
);

app.get('/myreact', function (req, res) {
    // 여기에 있어야함... app.get 위에 있으면 리엑트가 먼저 실행됨,,
    console.log('myreact pass');
    app.use(express.static(__dirname + '/build'));
    res.sendFile(path.join(__dirname, 'build', '/index.html'));
    //res.sendFile("E:/sss_project/연습용/httpshandlebarsjsEx/build/index.html");
});

// app.get("/myreact", (req, res) => {
//     console.log('myreact pass');

//     res.status(200).render("empty.hbs", {
//         layout: 'myreact',
//         style: "myreact.css",
//     }
//     );
// }
// );

app.get("/myscss", (req, res) => {
    console.log('css pass');

    res.status(200).render("empty.hbs", {
        layout: 'myscss',
        style: "scss/myscss.css",
    }
    );
}
);

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
    }

    );
}

);

app.listen(3030, () => {
    console.log("3030");
}

);