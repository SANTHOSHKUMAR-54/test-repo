import { test } from '../fixture/fixtures'

test.beforeEach('setup', async ({ signin }) => {
  await signin.gotoLoginPage();
  await signin.clicksign(signin.email, signin.password);


})

test('openrepo', async ({ repo,signin }) => {
  await repo.openrepo1();
  await repo.openrep();
   await signin.clicklogout();
});  

