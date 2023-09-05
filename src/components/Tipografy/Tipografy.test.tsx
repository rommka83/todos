import React from 'react';
import renderer from 'react-test-renderer';
import { Tipografy } from './index';

describe('проверка Tipografy', () => {
  test('отрисовка Tipografy, вариант - "text-main"', () => {
    const component = renderer.create(<Tipografy variant={'text-main'}>Тест</Tipografy>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('отрисовка Tipografy, вариант - "text-body"', () => {
    const component = renderer.create(<Tipografy variant={'text-body'}>Тест</Tipografy>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('отрисовка Tipografy, вариант - "text-completed"', () => {
    const component = renderer.create(<Tipografy variant={'text-completed'}>Тест</Tipografy>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('отрисовка Tipografy, вариант - "text-supporting"', () => {
    const component = renderer.create(<Tipografy variant={'text-supporting'}>Тест</Tipografy>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
