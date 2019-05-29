import { LoginPage } from './login.po';
import { HomePage } from './home.po';
import { AllDataPage } from './alldata.po';

describe('Caso de uso 1', () => {
  let loginPage: LoginPage;
  let homePage: HomePage;

  beforeEach(() => {
    loginPage = new LoginPage();
    homePage = new HomePage();
  });

  it('Iniciar sesion en ClientRead con campos obligatorios no introducidos', () => {
    loginPage.navigateTo();
    loginPage.getLoginButton().click();
    expect(loginPage.getUsernameInput().getTagName()).toEqual('input');
  });

  it('Iniciar sesion en ClientRead con nombre de usuario incorrecto', () => {
    loginPage.navigateTo();
    let wrongcredentials = {
      username: 'a',
      password: 'a'
    };
    loginPage.fillCredentials(wrongcredentials);
    expect(loginPage.getUsernameInput().getTagName()).toEqual('input');
  });

  it('Iniciar sesion en ClientRead con usuario no auditor', () => {
    loginPage.navigateTo();
    let wrongcredentials = {
      username: 'gestor',
      password: 'gestor'
    };
    loginPage.fillCredentials(wrongcredentials);
    expect(loginPage.getUsernameInput().getTagName()).toEqual('input');
  });

  it('Iniciar sesion en ClientRead correctamente', () => {
    loginPage.navigateTo();
    loginPage.fillCredentials();
    expect(homePage.getGraficaTitle().getText()).toEqual('Temperatura del device');
  });
});

describe('Caso de uso 3', () => {
  let loginPage: LoginPage;
  let homePage: HomePage;
  let allDataPage: AllDataPage;

  beforeEach(() => {
    loginPage = new LoginPage();
    loginPage.navigateTo();
    loginPage.fillCredentials();
    homePage = new HomePage();
    allDataPage = new AllDataPage();
  });

  it('Obtener listado de datos en ClientRead', () => {
    allDataPage.navigateTo();
    expect(allDataPage.getTableTitle().getTagName()).toEqual('h4');
  });

});

describe('Caso de uso 4', () => {
  let loginPage: LoginPage;
  let homePage: HomePage;

  beforeEach(() => {
    loginPage = new LoginPage();
    loginPage.navigateTo();
    loginPage.fillCredentials();
    homePage = new HomePage();
  });

  it('Cerrar sesion en ClientRead', () => {
    homePage.getLogout().click();
    expect(loginPage.getUsernameInput().getTagName()).toEqual('input');
  });
});


