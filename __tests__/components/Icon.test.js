import React from 'react';
import renderer from 'react-test-renderer';

import Icon from 'components/Icon';

test('Icon should render given icon', () => {
  const tree = renderer.create(
    <Icon icon="close" />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('Icon render given icon and text', () => {
  const tree = renderer.create(
    <Icon icon="close">Close</Icon>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
