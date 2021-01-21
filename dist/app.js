"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastest_levenshtein_1 = __importDefault(require("fastest-levenshtein"));
var pcParts;
(function (pcParts) {
    pcParts[pcParts["PROCESSOR"] = 0] = "PROCESSOR";
    pcParts[pcParts["GRAPHIC_CARD"] = 1] = "GRAPHIC_CARD";
    pcParts[pcParts["RAM"] = 2] = "RAM";
})(pcParts || (pcParts = {}));
const handler = {
    get: function (target, name) {
        if (target.name) {
            console.log(target.name);
            return target.name;
        }
        else {
            for (let i = 0; i < 3; i++) {
                const distance = fastest_levenshtein_1.default.distance(target[i], name);
                if (distance < 3) {
                    console.log(`${name} no ha sido encontrado, tal vez quisiste decir ${target[i]}`);
                    break;
                }
                else {
                    console.log('Opción no encontrada');
                }
            }
        }
    },
};
const prox = new Proxy(pcParts, handler);
prox.GRAPHIC_CAR;
