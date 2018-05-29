// export function convLbToKg(valor) {
//     const unid_kilo_lb = 0.453592;
//     return (valor * unid_kilo_lb).toFixed(2);
// }
//
// export default function convKgToLb(valor) {
//     const unid_lb_kg = 2.20462;
//     return (valor * unid_lb_kg).toFixed(2);
// }

export function convertidor(calculo) {
    return (valor) => {
        return (valor * calculo).toFixed(2);
    }
}

const convLbToKg = convertidor(0.453592);
const convKgToLb = convertidor(2.20462);

export { convLbToKg, convKgToLb};
