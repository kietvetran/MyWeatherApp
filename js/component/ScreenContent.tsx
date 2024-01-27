import { COLOR, SPACE } from 'js/style';
import { StyleProp, TextStyle, StyleSheet, View, ScrollView } from 'react-native';

interface Props {
    children?: JSX.Element | JSX.Element[];
    style?: StyleProp<TextStyle>;
}

export default function ScreenContent({ children, style }: Props) {
    return (
        <View style={[styles.root, style]}>
            <ScrollView alwaysBounceHorizontal={false} alwaysBounceVertical bounces>
                <View style={styles.space}>{children}</View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: COLOR.WHITE,
    },
    space: {
        padding: SPACE.MEDIUM,
    },
});
