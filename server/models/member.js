'use strict';

const uuidv4 = require('uuid/v4');
const { OAuth2Client } = require('google-auth-library');
const CLIENT_ID = '320597054715-e6p8t75rmcdhf41c1i1rn6oll5mp598b.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);

module.exports = function (Member) {

  Member.tokenLogin = function (data, cb) {
    verify(data.token).then(res => {
      const memberData = {
        ...res,
        // loopback requires a password, but we'll never use it
        password: uuidv4(),
      };

      Member.findOrCreate({ where: { email: memberData.email }}, memberData).then(queryRes => {
        const member = queryRes[0];
        return member.createAccessToken();
      }).then(accessToken => {
        cb(null, accessToken);
      }).catch(err => {
        console.error(err);
        cb(err);
      });
    }).catch(err => {
      console.error(err);
      cb(err);
    });
  };

  Member.remoteMethod(
    'tokenLogin',
    {
      isStatic: true,
      accepts: [
        { arg: 'data', type: 'object', http: { source: 'body' } }
      ],
      http: {
        path: '/tokenLogin',
        verb: 'post'
      },
      returns: {
        arg: 'accessToken',
        type: 'object',
        root: true,
      }
    },
  );

  async function verify(token) {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();
    return {
      googleId: payload.sub,
      email: payload.email,
      name: payload.name,
      picture: payload.picture,
      givenName: payload.given_name,
      familyName: payload.family_name,
      locale: payload.locale,
    };
  }
};
