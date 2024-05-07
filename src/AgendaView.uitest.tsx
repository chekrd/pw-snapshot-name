import {expect, test} from '@playwright/experimental-ct-react';
import {AgendaView} from './AgendaView';

test.describe('Agenda view', () => {
  test.describe('displays empty state picture instead of the content', () => {
    test('when inventory is empty', async ({mount, page}) => {
      await mount(<AgendaView/>);

      await expect(page).toHaveScreenshot();
    });
  });
});
