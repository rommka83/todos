import React from 'react';
import renderer from 'react-test-renderer';
import { TemplateName } from './index';

describe('проверка TemplateName', () => {
  test('отрисовка TemplateName', () => {
    const component = renderer.create(<TemplateName />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
