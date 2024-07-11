import express, { Request, Response } from "express";
import os from 'os';

const port = 3000
const app = express();

// แสดงจำนวน CPU ทั้งหมดที่ระบบประจำ
const cpus = os.cpus();

app.get("/", (req, res) => {
    res.json({
        "model": cpus[0].model,
        "speed": cpus[0].speed + " Mhz",
        "cores": cpus.length,
        "arch": os.arch(),
    });
  });

app.listen(port, () => console.log("Server is running... on port: ", port));