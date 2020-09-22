import express = require("express");

const router: express.Router = express.Router();

router.use("/api", (req: express.Request, res: express.Response) => {
  res.json({
    status: 200,
    data: "124",
  });
});
router.use("/index", (req: express.Request, res: express.Response) => {
  res.setHeader("content-Type", "text/html");
  res.send("<h1>123<h1>")
});

export { router };
