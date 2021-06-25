require('dotenv').config();
const Ajv = require('ajv');
const ajv = new Ajv();
const mongoose = require('mongoose');
const { encryptPassword } = required()
