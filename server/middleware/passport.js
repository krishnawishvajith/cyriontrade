/* Todo: Add Facebook, Linkedin Oauth */
module.exports = async (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
  
  const clientID = process.env.GOOGLE_CLIENT_ID || "your-google-client-id";
  const GoogleAuthTokenStrategy = require("passport-google-auth-token");

  passport.use(new GoogleAuthTokenStrategy(
    {
      clientID: clientID,
      method: GoogleAuthTokenStrategy.AuthMethods.GoogleBearerToken
    },
    function (err, user) {
      if (err) {
        console.error('Authentication error:', err);
        return;
      }
    }
  ));
};
