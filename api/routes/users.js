import express from "express";
//const express = require("express");
import getUsers from "../controllers/user.js"


const router = express.Router()

router.get('/', getUsers )

export default router