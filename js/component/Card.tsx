import TextView from 'js/component/TextView';
import { COLOR, SPACE, BORDER } from 'js/style';
import { StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
    textList: string[];
    onPress: () => void;
}

export default function Card({ textList, onPress }: Props) {
    return (
        <TouchableOpacity style={styles.root} onPress={onPress}>
            {textList.map((text: string, i: number) => {
                return (
                    <TextView testID={`text${i}`} key={text}>
                        {text}
                    </TextView>
                );
            })}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: COLOR.WHITE,
        borderWidth: 1,
        borderColor: COLOR.BORDER,
        padding: SPACE.SMALL,
        marginTop: SPACE.EXTRA_SMALL,
        marginBottom: SPACE.EXTRA_SMALL,
        borderRadius: BORDER.ROUND,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
