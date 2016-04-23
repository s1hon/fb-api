import FB from 'fb'
const api = {}

FB.options({ version: 'v2.6' })

const a = FB.getLoginUrl({
  client_id: '571061656405576',
  scope: 'email,user_likes',
  redirect_uri: 'http://localhost:8080/',
})

console.log(a)
