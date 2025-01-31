"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const HR_controlls_1 = require("../controllers/HR_controlls");
const router = express_1.default.Router();
router.post('/jobOpenings', HR_controlls_1.create_jobOpenings);
router.put('/jobOpenings/:jobOpingId', HR_controlls_1.updateJobOpenings);
router.get('/jobOpenings', HR_controlls_1.getJobOpenings);
router.get('/jobOpenings/:jobOpeningsId', HR_controlls_1.getJobOpeningsById);
router.delete('/jobOpenings/:jobOpeningsId', HR_controlls_1.jobOpeningsDelete);
exports.default = router;
