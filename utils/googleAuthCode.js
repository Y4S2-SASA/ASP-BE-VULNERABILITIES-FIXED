// const query_string = require ('querystring');
import query_string from 'querystring'
const google_auth_token_endpoint ='https://accounts.google.com/o/oauth2/v2/auth';
const query_params_signin = {
  client_id: process.env.CLIENT_APP_ID,
  redirect_uri: `http://localhost:3001/api/users/google/callback/signin`,
};
const query_params_signup = {
    client_id: process.env.CLIENT_APP_ID,
    redirect_uri: `http://localhost:3001/api/users/google/callback/signup`,
  };
// this objects contains information that will be passed as query params to the auth // token endpoint
//   const auth_token_params = {
//     ...query_params,
//     response_type: 'code',
//   };
// the scopes (portion of user's data) we want to access
const scopes = ['profile', 'email', 'openid'];
// a url formed with the auth token endpoint and the
export const request_get_auth_code_url_signin = `${google_auth_token_endpoint}?${query_string.stringify ({...query_params_signin, response_type: 'code',})}&scope=${scopes.join (' ')}`;
export const request_get_auth_code_url_signup = `${google_auth_token_endpoint}?${query_string.stringify ({...query_params_signup, response_type: 'code',})}&scope=${scopes.join (' ')}`;
//module.exports ={request_get_auth_code_url}