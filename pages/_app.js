import '../styles/globals.css';
import Amplify from 'aws-amplify';
import 'tailwindcss/tailwind.css';
//import awsExports from "./aws-exports";
Amplify.configure({
	aws_project_region: 'us-east-2',
	aws_cognito_identity_pool_id:
		'us-east-2:1a3a20b0-d6b6-43a3-b026-832b6909616f',
	aws_cognito_region: 'us-east-2',
	aws_user_pools_id: 'us-east-2_UXk6amqBF',
	aws_user_pools_web_client_id: '38he0t16ctkua89ho905h11ba8',
	oauth: {
		domain:
			'reactamplified0b25817c-0b25817c-dev.auth.us-east-2.amazoncognito.com',
		scope: [
			'phone',
			'email',
			'openid',
			'profile',
			'aws.cognito.signin.user.admin',
		],
		redirectSignIn: 'https://dev.d3qhnr7dm5aswl.amplifyapp.com/inicio',
		redirectSignOut: 'https://dev.d3qhnr7dm5aswl.amplifyapp.com/',
		responseType: 'code',
	},
	federationTarget: 'COGNITO_USER_POOLS',
	aws_cognito_login_mechanism: ['EMAIL'],
	aws_cognito_signup_attributes: ['EMAIL'],
	aws_cognito_mfa_configuration: 'OFF',
	aws_cognito_mfa_types: ['SMS'],
	aws_cognito_password_protection_settings: {
		passwordPolicyMinLength: 8,
		passwordPolicyCharacters: [],
	},
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
