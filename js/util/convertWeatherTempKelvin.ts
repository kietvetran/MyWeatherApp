import { TempUnit, TemptType } from 'js/domain/TempUnit';

export default function convertWeatherTempKelvin(kelvin: number, wantUnit?: TempUnit): string {
    const fahrenheit = ((kelvin - 273.15) * 9) / 5 + 32;
    const value = wantUnit === TemptType.FAHRENHEIT ? fahrenheit : (fahrenheit - 32) / 1.8;
    const output = Math.round(value);

    if (wantUnit === TemptType.FAHRENHEIT) {
        return `${output} °F`;
    }

    return `${output} °C`;
}
