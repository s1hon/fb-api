import FB from 'fb'

FB.options({ version: 'v2.6' })

export function getLoginUrl() {
  return FB.getLoginUrl({
    client_id: '571061656405576',
    scope: 'email,user_likes',
    redirect_uri: 'http://localhost:8080/',
  })
}

export function getToken(code) {
  FB.api('oauth/access_token', {
    client_id: '571061656405576',
    client_secret: '',
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
