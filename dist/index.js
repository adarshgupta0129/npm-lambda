"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = helloWorld;
exports.lambdaHelper = lambdaHelper;
// src/index.ts
function helloWorld() {
    return "Hello from my private package!";
}
function lambdaHelper(event) {
    console.log("Processing event:", event);
    return { statusCode: 200, body: "Success" };
}
