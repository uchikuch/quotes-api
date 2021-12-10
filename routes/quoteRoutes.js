const { Router } = require("express");
const quoteController = require("../controllers/quoteController");

const router = Router();

router.get("/quotes", quoteController.quotes_get);
router.post("/quote", quoteController.quote_post);

module.exports = router;
