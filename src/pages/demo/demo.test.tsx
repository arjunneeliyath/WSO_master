import React, { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Demo from './demo';

const inputSetup = () => {
    const utils = render(<Demo />);
    const input = utils.getByTestId('input-id');
    const btn = utils.getByTestId('button-id');
    return {
        input,
        btn,
        ...utils,
    };
};

it('checkButtonAndInputRender', () => {
    const { input, btn } = inputSetup();
    expect(input).toBeTruthy();
    expect(btn).toBeTruthy();
});

test('onButtonClick', () => {
    const { input, btn } = inputSetup();
    userEvent.type(input, 'WSO');
    fireEvent.click(btn);
    expect(input.value).toBe('');
});
