class HomePage {
  // Page elements
  elements = {
    usernameInput: () => cy.get('input[name="login"]'),
    passwordInput: () => cy.get('input[name="password"]'),
    loginButton: () => cy.get('button[type="submit"]'),
    profileName: () => cy.get('.nav-link.disabled'),
  }

  login(user) {
    this.elements.usernameInput().type(user.username);
    this.elements.passwordInput().type(user.password);
  }

  clickLogin() {
    this.elements.loginButton().click();
  }

  getProfileName() {
    return this.elements.profileName().invoke('text');
  }
}

module.exports = new HomePage();
