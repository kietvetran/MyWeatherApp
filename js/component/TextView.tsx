import { FONT } from 'js/style';
import { StyleProp, TextStyle, StyleSheet, View, Text } from 'react-native';

export type SIZE = 'ESMALL' | 'SMALL' | 'REGULAR' | 'MEDIUM' | 'LARGE' | 'LARGEST' | 'XLARGEST';

export enum FONT_SIZE {
    ESMALL = 'ESMALL',
    SMALL = 'SMALL',
    REGULAR = 'REGULAR',
    MEDIUM = 'MEDIUM',
    LARGE = 'LARGE',
    LARGEST = 'LARGEST',
    XLARGEST = 'XLARGEST',
}

const FONT_SIZE_OPTION: { [k: string]: { fontSize: number } } = {
    ESMALL: { fontSize: FONT.SIZE_EXTRA_SMALL },
    SMALL: { fontSize: FONT.SIZE_SMALL },
    REGULAR: { fontSize: FONT.SIZE_REGULAR },
    MEDIUM: { fontSize: FONT.SIZE_MEDIUM },
    LARGE: { fontSize: FONT.SIZE_LARGE },
    LARGEST: { fontSize: FONT.SIZE_LARGEST },
    XLARGEST: { fontSize: FONT.SIZE_XLARGEST },
};

interface Props {
    children?: string | JSX.Element | JSX.Element[];
    style?: StyleProp<TextStyle>;
    numberOfLines?: number;
    accessibilityLabel?: string;
    accessibilityHint?: string;
    accessible?: boolean;
    allowFontScaling?: boolean;
    semibold?: boolean;
    bold?: boolean;
    size?: SIZE;
}

export default function TextView({ children, style, semibold, bold, allowFontScaling = true, size = FONT_SIZE.REGULAR, ...rest }: Props) {
    return (
        <View>
            <Text
                {...rest}
                allowFontScaling={allowFontScaling}
                style={[styles.text, !!semibold && styles.semibold, !!bold && styles.bold, FONT_SIZE_OPTION[size], style]}>
                {children}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: FONT.SIZE_REGULAR,
        color: FONT.TEXT_COLOR,
        fontWeight: '400',
    },
    semibold: {
        fontWeight: '500',
    },
    bold: {
        fontWeight: '700',
    },
});
