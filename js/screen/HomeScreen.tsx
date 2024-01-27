import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Modal from 'js/component/Modal';
import ScreenContent from 'js/component/ScreenContent';
import TextView, { FONT_SIZE } from 'js/component/TextView';
import { RootStackParamList } from 'js/navigation/RootStackParamList';
import { useState } from 'react';
import { StyleSheet, Button } from 'react-native';

export default function HomeScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <ScreenContent>
            <TextView semibold size={FONT_SIZE.LARGE}>
                Home
            </TextView>
            <Button
                title="Go to Location"
                onPress={(): void => {
                    navigation.navigate('LocationScreen', { title: 'Location' });
                }}
            />
            <Button
                title="show modal"
                onPress={(): void => {
                    setShowModal(true);
                }}
            />

            <Modal
                visible={!!showModal}
                title="Velg by"
                closeCallback={() => {
                    setShowModal(false);
                }}>
                <ScreenContent>
                    <TextView semibold size={FONT_SIZE.LARGE}>
                        Modal
                    </TextView>
                </ScreenContent>
            </Modal>
        </ScreenContent>
    );
}
// eslint-disable-next-line
const styles = StyleSheet.create({});
