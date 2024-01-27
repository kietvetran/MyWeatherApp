import { render } from '@testing-library/react-native';
import Card from 'js/component/Card';
import * as React from 'react';

describe('<Card >', () => {
    it('Single text', () => {
        const textList = ['Oslo'];
        const onPress = () => {};
        const screen = render(<Card textList={textList} onPress={onPress} />);
        expect(screen.getByTestId('text0').props.children).toEqual(textList[0]);
    });

    it('Double text', () => {
        const textList = ['Bergen', 'Norge'];
        const onPress = () => {};
        const screen = render(<Card textList={textList} onPress={onPress} />);
        expect(screen.getByTestId('text0').props.children).toEqual(textList[0]);
        expect(screen.getByTestId('text1').props.children).toEqual(textList[1]);
    });
});
