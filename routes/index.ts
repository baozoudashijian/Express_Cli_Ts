import express, { RequestHandler } from "express";
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
} as RequestHandler);

export default router;
