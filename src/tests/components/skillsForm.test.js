import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../services/store/store';

import SkillsForm from '../../components/Form/Form';

describe('SkillsForm', () => {
  it('should set isDirty true when renders Form', () => {
    render(
      <Provider store={store}>
        <SkillsForm />
      </Provider>
    );
  });
});