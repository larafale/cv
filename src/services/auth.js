import Auth from '../lib/auth'

export default new Auth(
  'AACo5gGwOO2r0l5oJV1ZszkutT9k1LZy', 
  'larafale.eu.auth0.com', 
  {
    auth: {
      // redirectUrl: 'http://localhost:3000/',
      sso: false,
      responseType: 'token',
      params: {
        scope: 'openid email user_metadata app_metadata picture' // Learn about scopes: https://auth0.com/docs/scopes
      },
    },

    // language: 'fr',
    // languageDictionary: {
    //   title: "my app",
    //   signUpTerms: "I agree to the <a href='/terms' target='_new'>terms of service</a> and <a href='/privacy' target='_new'>privacy policy</a>."
    // },

    // socialButtonStyle: 'small',
    // initialScreen: "signUp", // "login" or "forgotPassword"
    // mustAcceptTerms: true,

    // additionalSignUpFields: [{
    //   name: "address",                              // required
    //   placeholder: "enter your address",            // required
    //   icon: "https://example.com/address_icon.png", // optional
    //   prefill: "street 123",                        // optional
    //   validator: function(value) {                  // optional
    //     // only accept addresses with more than 10 chars
    //     return value.length > 10;
    //   }
    // },{
    //   type: "select",                                       // required
    //   name: "location",                                     // required
    //   placeholder: "choose your location",                  // required
    //   options: [                                            // required
    //     {value: "us", label: "United States"},
    //     {value: "fr", label: "France"},
    //     {value: "ar", label: "Argentina"}
    //   ],
    //   // prefill: "us",                                        // optional
    //   icon: "https://example.com/assests/location_icon.png" // optional
    // }],

    // prefill: {
    //   email: "koko@example.com",
    // },

    // theme: {
    //   logo: "https://example.com/icon.png",
    //   primaryColor: "#ec4889"
    // },
  }
)
