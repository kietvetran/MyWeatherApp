import ScreenContent from 'js/component/ScreenContent';
import TextView, { FONT_SIZE } from 'js/component/TextView';
import useFetchWeather from 'js/hook/useFetchWeather';
import { RootStackScreenProps } from 'js/navigation/RootStackParamList';
import { SPACE, COLOR } from 'js/style';
import capitalize from 'js/util/capitalize';
import convertWeatherSunTime from 'js/util/convertWeatherSunTime';
import convertWeatherTempKelvin from 'js/util/convertWeatherTempKelvin';
import { StyleSheet, View } from 'react-native';

type Props = RootStackScreenProps<'LocationScreen'>;

export default function LocationScreen({ route }: Props) {
    const { city, tempUnit } = route.params;
    const { isLoading, isError, data } = useFetchWeather(city);

    return (
        <ScreenContent>
            <>
                {!!isLoading && <TextView>Loading...</TextView>}
                {!isLoading && !!isError && <TextView>Something went wrong...</TextView>}
                {!isLoading && !isError && !!data && (
                    <>
                        <View style={styles.paragraph}>
                            <TextView style={[styles.center, { paddingBottom: SPACE.EXTRA_SMALL }]}>
                                {capitalize(data.weather[0].description)}
                            </TextView>
                            <TextView semibold size={FONT_SIZE.XLARGEST} style={styles.center}>
                                {`${convertWeatherTempKelvin(data.main.temp, tempUnit)}`}
                            </TextView>
                            <View style={styles.center}>
                                <TextView
                                    style={[
                                        styles.center,
                                        styles.horizontalSpace,
                                    ]}>{`H: ${convertWeatherTempKelvin(data.main.temp_max, tempUnit)}`}</TextView>
                                <TextView
                                    style={[
                                        styles.center,
                                        styles.horizontalSpace,
                                    ]}>{`L: ${convertWeatherTempKelvin(data.main.temp_min, tempUnit)}`}</TextView>
                            </View>
                        </View>
                        <View style={styles.paragraph}>
                            <View style={[styles.center, styles.bordeBottom]}>
                                <View style={[styles.center, styles.halfCell, styles.borderLeft]}>
                                    <View style={styles.column}>
                                        <TextView style={[styles.center, styles.horizontalSpace]}>Wind</TextView>
                                        <TextView bold style={[styles.center, styles.horizontalSpace]}>{`${data.wind.speed} m/s`}</TextView>
                                    </View>
                                </View>
                                <View style={[styles.center, styles.halfCell]}>
                                    <View style={styles.column}>
                                        <TextView style={[styles.center, styles.horizontalSpace]}>Humidity</TextView>
                                        <TextView bold style={[styles.center, styles.horizontalSpace]}>{`${data.main.humidity} %`}</TextView>
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.center]}>
                                <View style={[styles.center, styles.halfCell, styles.borderLeft]}>
                                    <View style={styles.column}>
                                        <TextView style={[styles.center, styles.horizontalSpace]}>Sunrise</TextView>
                                        <TextView bold style={[styles.center, styles.horizontalSpace]}>
                                            {convertWeatherSunTime(data.sys.sunrise)}
                                        </TextView>
                                    </View>
                                </View>
                                <View style={[styles.center, styles.halfCell]}>
                                    <View style={styles.column}>
                                        <TextView style={[styles.center, styles.horizontalSpace]}>Sunset</TextView>
                                        <TextView bold style={[styles.center, styles.horizontalSpace]}>
                                            {convertWeatherSunTime(data.sys.sunset)}
                                        </TextView>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </>
                )}
            </>
        </ScreenContent>
    );
}

const styles = StyleSheet.create({
    paragraph: {
        paddingBottom: SPACE.LARGE,
    },
    center: {
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
    },
    column: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: SPACE.SMALL,
    },
    horizontalSpace: {
        paddingLeft: SPACE.EXTRA_SMALL,
        paddingRight: SPACE.EXTRA_SMALL,
    },
    halfCell: {
        width: '50%',
    },
    bordeBottom: {
        borderBottomWidth: 1,
        borderColor: COLOR.BORDER,
    },
    borderLeft: {
        borderRightWidth: 1,
        borderColor: COLOR.BORDER,
    },
});
