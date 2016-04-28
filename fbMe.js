import FB from 'fb'
try {
  const key = require('./key.json')
} catch (e) {
  throw (`
  Error: You should create the key.json file.
  More Info: https://github.com/opjlmi/fb-api#create-a-keyjson-file`)
}


FB.options({ version: 'v2.6' })

export function getLoginUrl() {
  return FB.getLoginUrl({
    client_id: key.client_id,
    scope: key.scope,
    redirect_uri: 'http://localhost:8080/',
  })
}

export function getToken(code) {
  FB.api('oauth/access_token', {
    client_id: key.client_id,
    client_secret: key.client_secret,
    redirect_uri: 'http://localhost:8080/',
    code,
  }, (res) => {
    if (!res || res.error) {
      console.log(!res ? 'error occurred' : res.error)
      return
    }

    if (res) {
      const accessToken = res.access_token
      const expires = res.expires ? res.expires : 0
      console.log({ accessToken, expires })
    }
  })
}
