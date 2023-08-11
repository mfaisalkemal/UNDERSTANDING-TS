"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fintrack_controllers_1 = require("./fintrack_controllers");
const router = (0, express_1.Router)();
router.post('/', fintrack_controllers_1.createFintrack);
router.get('/', fintrack_controllers_1.getFintracks);
router.patch('/:id', fintrack_controllers_1.updateFintrack);
router.delete('/:id', fintrack_controllers_1.deleteFintrack);
exports.default = router;