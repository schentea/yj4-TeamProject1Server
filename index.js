const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/people", (req, res) => {
  fetch(
    `https://c.q-net.or.kr/openapi/Ncs1info/ncsinfo.do?type=json&pageNo=1&numOfRows=10&ServiceKey=GfEBGZl/WVWZaww3GJjoLpRrE++wLFKbom/Sth6vxaX+A8qKV6FBHeMZe0zjSNjGSizunxh5Ylj4ZNegI83s9w==`
  )
    .then((response) => response.json())
    .then((data) => {
      res.json(data);
      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Error fetching data from Neople API" });
    });
});
app.get("/test1", (req, res) => {
  fetch(
    `http://openapi.q-net.or.kr/api/service/rest/InquiryExamQualItemSVC/getList?pageNo=1&numOfRows=10&ServiceKey=vJv0TAir6YZjIhBn8rQnCFZ4fZIbqdoInvJXXddn+GVg+0SNhr78BxmwWVVsmComWEo6Qmc7fv/JlgDNGi4zHA==`
  )
    .then((res) => res.json())
    .then((data) => {
      res.json(data);
      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Error fetching data from Neople API" });
    });
});
app.get("/game", (req, res) => {
  fetch(
    "https://api.neople.co.kr/df/jobs?apikey=Mw0fYJwiAJL76wBNq1mezxFH01NMosOZ"
  )
    .then((res) => res.json())
    .then((data) => {
      res.json(data);
      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Error fetching data from Neople API" });
    });
});

app.listen(4000, () => {
  console.log(`Server is running on localhost:4000`);
});
