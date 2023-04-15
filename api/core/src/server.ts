import express from "express";

var PORT = process.env.PORT || 3000;
var app = express();

app.get("/", function (req: any, res: any) {
  res.send("Hello!");
});

app.get("/my-ip", function (req: any, res: any) {
  var forwardedIpsStr =
    req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  console.log(forwardedIpsStr);
});

if (!module.parent) {
  app.listen(PORT);
  console.log(`Express started on port ${PORT}`);
}

export default app;

