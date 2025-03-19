"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientSchema = void 0;
const mongoose_1 = require("mongoose");
exports.PatientSchema = new mongoose_1.Schema({
    fullName: { type: String, required: true },
    service: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
});
//# sourceMappingURL=patient.schema.js.map