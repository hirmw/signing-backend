const express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");

const app = express();

const resArray = [{ names: "mark", location: "Working From Home" }];

app.use(cors());
app.use(bodyParser.json());
//app.use(express.json());

app.post("/api/logins", function(request, response) {
  console.log(request.body); // your JSON
  const JSON = request.body;
  console.log(JSON);
  resArray.push(JSON);
  response.send(request.body); // echo the result back
});

//app.listen(3000);

app.get("/api/logins", (req, res) => {
  // const logins = [
  //   { id: 1, firstName: "John", lastName: "Working from home" },
  //   { id: 2, firstName: "Brad", lastName: "Benhall" },
  //   { id: 3, firstName: "Mary", lastName: "Isolating" }
  // ];

  resArray.forEach(element => {
    console.log("eli" + element);
  });
  res.send(resArray);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
