import React from 'react';
import renderer from 'react-test-renderer';
import { TodoItem } from './index';

describe('проверка TodoItem', () => {
  test('отрисовка выполненого TodoItem', () => {
    const component = renderer.create(<TodoItem value='выполнено' status />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('отрисовка невыполненого TodoItem', () => {
    const component = renderer.create(<TodoItem value='не выполнено' status={false} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
