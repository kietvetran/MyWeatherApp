export default function convertWeatherTempKelvin(kelvin: number, wantUnit?: 'celsius' | 'fahrenheit'): string {
    const fahrenheit = ((kelvin - 273.15) * 9) / 5 + 32;
    const value = wantUnit === 'fahrenheit' ? fahrenheit : (fahrenheit - 32) / 1.8;
    const output = Math.round(value);
    if (wantUnit === 'fahrenheit') {
        return `${output} °F`;
    }

    return `${output} °C`;
}
