const express = require('express');
const router = express.Router();
const User = require('../models/User');
const City = require('../models/CitiesEnum')
const Main = require('../models/InstrumentsEnum');
const Experience = ('../models/ExpEnum');
const Other = require('../models/InstrumentsEnum');

const debug = require('debug')('server:crud');

