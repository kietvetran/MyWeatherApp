export default function convertWeatherSunTime(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    return [date.getHours(), date.getMinutes()]
        .map((time: number) => {
            return `${time < 10 ? '0' : ''}${time}`;
        })
        .join(':');
}
