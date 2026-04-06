import express from 'express';
const app= express();

import bcrypt from 'bcryptjs';
const salt= bcrypt.genSaltSync(10);
console.log(salt);

const hash= bcrypt.hashSync("123456", salt);
console.log(hash);  

const valid=bcrypt.compareSync("123456", hash);
console.log(valid);