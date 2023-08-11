"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFintrack = exports.updateFintrack = exports.partialupdateFintrack = exports.getbyidFintracks = exports.getFintracks = exports.createFintrack = void 0;
const fintrack_models_1 = require("./fintrack_models");
const FINTRACKS = [];
var counter = 0;
const createFintrack = (req, res, next) => {
    ++counter;
    const type = req.body.type;
    const name = req.body.name;
    const detail = req.body.detail;
    const amount = req.body.amount;
    const newFintrack = new fintrack_models_1.Fintrack(counter.toString(), type, name, detail, amount);
    FINTRACKS.push(newFintrack);
    res.status(201).json({ message: 'Created the Financial Tracking.', createdFintrack: newFintrack });
};
exports.createFintrack = createFintrack;
const getFintracks = (req, res, next) => {
    res.json({ fintrack: FINTRACKS });
};
exports.getFintracks = getFintracks;
const getbyidFintracks = (req, res, next) => {
    const fintrackId = req.params.id;
    const fintrackIndex = FINTRACKS.findIndex(fintrack => fintrack.id === fintrackId);
    res.json(FINTRACKS[fintrackIndex]);
};
exports.getbyidFintracks = getbyidFintracks;
const partialupdateFintrack = (req, res, next) => {
    const fintrackId = req.params.id;
    const fintrackIndex = FINTRACKS.findIndex(fintrack => fintrack.id === fintrackId);
    var updatedType = req.body.type;
    var updatedName = req.body.name;
    var updatedDetail = req.body.detail;
    var updatedAmount = req.body.amount;
    if (updatedType == null) {
        updatedType = FINTRACKS[fintrackIndex].type;
    }
    if (updatedName == null) {
        updatedName = FINTRACKS[fintrackIndex].name;
    }
    if (updatedDetail == null) {
        updatedDetail = FINTRACKS[fintrackIndex].detail;
    }
    if (updatedAmount == null) {
        updatedAmount = FINTRACKS[fintrackIndex].amount;
    }
    if (fintrackIndex < 0) {
        throw new Error('Could not find financial tracking!');
    }
    FINTRACKS[fintrackIndex] = new fintrack_models_1.Fintrack(FINTRACKS[fintrackIndex].id, updatedType, updatedName, updatedDetail, updatedAmount);
    res.json({ message: 'Updated!', updatedFintrack: FINTRACKS[fintrackIndex] });
};
exports.partialupdateFintrack = partialupdateFintrack;
const updateFintrack = (req, res, next) => {
    const fintrackId = req.params.id;
    const updatedType = req.body.type;
    const updatedName = req.body.name;
    const updatedDetail = req.body.detail;
    const updatedAmount = req.body.amount;
    const fintrackIndex = FINTRACKS.findIndex(fintrack => fintrack.id === fintrackId);
    if (fintrackIndex < 0) {
        throw new Error('Could not find financial tracking!');
    }
    FINTRACKS[fintrackIndex] = new fintrack_models_1.Fintrack(FINTRACKS[fintrackIndex].id, updatedType, updatedName, updatedDetail, updatedAmount);
    res.json({ message: 'Updated!', updatedFintrack: FINTRACKS[fintrackIndex] });
};
exports.updateFintrack = updateFintrack;
const deleteFintrack = (req, res, next) => {
    const fintrackId = req.params.id;
    const fintrackIndex = FINTRACKS.findIndex(fintrack => fintrack.id === fintrackId);
    if (fintrackIndex < 0) {
        throw new Error('Could not find financial tracking!');
    }
    FINTRACKS.splice(fintrackIndex, 1);
    res.json({ message: 'Financial tracking deleted!' });
};
exports.deleteFintrack = deleteFintrack;
