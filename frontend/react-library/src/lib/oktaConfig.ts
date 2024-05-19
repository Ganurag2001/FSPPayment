export const oktaConfig = {
    clientId: '0oagapc8zwkD6r9Nr5d7',
    issuer:   'https://dev-54587419.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid','profile','email'],
    pkce: true,
    disableHttpsCheck: true
}