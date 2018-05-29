"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.convertidor = convertidor;
// export function convLbToKg(valor) {
//     const unid_kilo_lb = 0.453592;
//     return (valor * unid_kilo_lb).toFixed(2);
// }
//
// export default function convKgToLb(valor) {
//     const unid_lb_kg = 2.20462;
//     return (valor * unid_lb_kg).toFixed(2);
// }

function convertidor(calculo) {
    return function (valor) {
        return (valor * calculo).toFixed(2);
    };
}

var convLbToKg = convertidor(0.453592);
var convKgToLb = convertidor(2.20462);

exports.convLbToKg = convLbToKg;
exports.convKgToLb = convKgToLb;