"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const os_1 = __importDefault(require("os"));
const port = 3000;
const app = (0, express_1.default)();
// แสดงจำนวน CPU ทั้งหมดที่ระบบประจำ
const cpus = os_1.default.cpus();
app.get("/", (req, res) => {
    res.json({
        "model": cpus[0].model,
        "speed": cpus[0].speed + " Mhz",
        "cores": cpus.length,
        "arch": os_1.default.arch(),
    });
});
app.listen(port, () => console.log("Server is running... on port: ", port));
