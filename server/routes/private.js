import express from 'express';
import getPrivateData from '../controllers/private.js'
import protect from '../middleware/auth.js'
const route = express.Router();

route.route("/").get(protect, getPrivateData);

export default route;