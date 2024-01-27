import { TemptType } from 'js/domain/TempUnit';
import convertWeatherTempKelvin from 'js/util/convertWeatherTempKelvin';

describe('Weather temp', () => {
    it('convertWeatherTempKelvin', () => {
        expect(convertWeatherTempKelvin(200, TemptType.CELSIUA)).toEqual('-73 °C');
        expect(convertWeatherTempKelvin(300, TemptType.CELSIUA)).toEqual('27 °C');
        expect(convertWeatherTempKelvin(300, undefined)).toEqual('27 °C');
        expect(convertWeatherTempKelvin(300, TemptType.FAHRENHEIT)).toEqual('80 °F');
    });
});
