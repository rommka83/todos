import React from 'react';
import renderer from 'react-test-renderer';
import { BtnControl } from './index';

describe('проверка BtnControl', () => {
  test('отрисовка BtnControl', () => {
    const component = renderer.create(<BtnControl customValue='Текст кнопки' />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
