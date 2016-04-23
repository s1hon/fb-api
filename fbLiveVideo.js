import FB from 'fb'
const api = {}

FB.options({ version: 'v2.6' })

FB.getLoginUrl({
  scope: 'email,user_likes',
  redirect_uri: 'http://example.com/',
})
