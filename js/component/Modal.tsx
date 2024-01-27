import TextView, { FONT_SIZE } from 'js/component/TextView';
import { SPACE, COLOR, BORDER } from 'js/style';
import { StyleSheet, Modal as NativeModal, View, SafeAreaView, TouchableOpacity, Platform } from 'react-native';

interface Props {
    visible: boolean;
    closeCallback: () => void;
    title: string;
    closeText?: string;
    children: JSX.Element | JSX.Element[];
}

export default function Modal({ visible, children, closeCallback, title, closeText = 'Lukk' }: Props) {
    return visible ? (
        <NativeModal animationType="slide" transparent visible={visible}>
            <View style={styles.root}>
                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <TextView bold size={FONT_SIZE.SMALL} numberOfLines={1} style={styles.flexOne}>
                            {title}
                        </TextView>
                        <TouchableOpacity onPress={closeCallback}>
                            <TextView size={FONT_SIZE.SMALL}>{closeText}</TextView>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.flexOne}>
                    <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
                </View>
            </View>
        </NativeModal>
    ) : (
        <></>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingTop: 20,
        ...Platform.select({
            ios: {
                paddingTop: 60,
            },
        }),
    },
    header: {
        position: 'relative',
        borderTopLeftRadius: BORDER.ROUNDER,
        borderTopRightRadius: BORDER.ROUNDER,
        backgroundColor: COLOR.WHITE,
        padding: SPACE.MEDIUM,
        paddingTop: SPACE.SMALL,
        paddingBottom: SPACE.SMALL,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: COLOR.BORDER_LIGHT,
    },
    headerContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    flexOne: {
        flex: 1,
    },
});
