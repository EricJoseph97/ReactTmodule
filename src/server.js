var express = require("express");
var appointments = require('./appointments.json')
var data = require('./notifications.json'); // your json file path
var trips = require('./trips.json');
var checklistitems = require('./checklistitems.json')
var fs = require('fs');
var app = express();

//body parser middle ware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

var requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

var makeid = function (len) {
  var res = '';
  var char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789';
  for (var i = 0; i < len; i++) {
    res += char.charAt(Math.floor(Math.random() * char.length))
  }
  return res;
}

var filterList = function (current) {
  var showdata = [];
  current.forEach(e =>{
    if (!e.dismissed) {
      showdata.push(e);
    }
  })
  return showdata;
}

var currentDate = function () {
  return new Date();
}

app.use(requestTime)

app.get("/notifications", (req, res) => {
  var list = filterList(data);
  res.send(list);
});

app.post("/notifications", (req, res) => {
  var d = currentDate();
  var m = makeid(7);

  const newNotification = {
    id:  m,
    timesent: d,
    title: req.body.title,
    message: req.body.message,
    dismissed: false
  }

  data.push(newNotification)
  var list = filterList(data);
  res.send(list);

  fs.writeFile("./src/notifications.json", JSON.stringify(data), (err) => {
    if (err) throw err;
  });

});

app.put("/notifications/:id", (req, res) => {

  data.forEach(element => {
    if (element.id === req.params.id) {
      element.dismissed = true;
    }
  })
  var list = filterList(data);
  res.send(list);
  fs.writeFile("./src/notifications.json", JSON.stringify(data), (err) => {
    if (err) throw err;
  });
});

app.get("/appointments", (req, res) => {
  res.send(appointments);
});

app.post("/appointments", (req, res) => {
  var d = currentDate();

  const newAppointment = {
    id: appointments.length + 1,
    dateCreated: d,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    title: req.body.title,
    person: req.body.person,
    trips: req.body.trips
  }

  appointments.push(newAppointment)
  res.send(appointments);

  fs.writeFile("./src/appointments.json", JSON.stringify(appointments), (err) => {
    if (err) throw err;
  });

});

app.get("/trips", (req, res) => {
  res.send(trips);
});

app.post("/trips", (req, res) => {
  var d = currentDate();
  const newTrip = {
    id: trips.length + 1,
    dateCreated: d,
    date: req.body.date,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    checkList: req.body.checklist
  }

  trips.push(newTrip)
  res.send(trips);

  fs.writeFile("./src/trips.json", JSON.stringify(trips), (err) => {
    if (err) throw err;
  });

});

app.get("/checklistitems", (req, res) => {
  res.send(checklistitems);
});

app.post("/checklistitems", (req, res) => {
    var i = makeid(7);
    var d = currentDate();

    const newCheckListItem = {
      id: i,
      dateCreated: d,
      itemName: req.body.itemName,
      checked: req.body.checked
    }

    checklistitems.push(newCheckListItem);
    res.send(checklistitems);

    fs.writeFile("./src/checklistitems.json", JSON.stringify(checklistitems), (err) => {
      if (err) throw err;
    });

});

app.listen(5000, () => console.log('Example app listening on port 5000!'))