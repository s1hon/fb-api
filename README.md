# fb-api-example

This is an example that using nodejs to get the user token form facebook. And this project use es6, you need `npm install` to install repo dependencies.

這是一個fb-api的範例，使用nodejs後端向Facebook要求使用者的token，當獲取token之後，就可以做後續的資料處理、發文.....等等。因為此專案使用es6，執行程式前需執行`npm install`安裝相依性套件。

## Create a key.json file

Facebook for Developers says `Your app secret should never end up in client code`. So you need to create a key.json file.

`key.json`
```
{
  "client_id": [The App client id],
  "client_secret": [The App client secret],
  "scope": [the Facebook scope]
}
```

## 建立設定檔

Facebook-dev上寫著`應用程式密鑰絕不能出現在用戶端程式碼中`，所以執行前必須建立設定檔`key.json`在專案根目錄中。

`key.json`
```
{
  "client_id": Facebook應用程式的client_id,
  "client_secret": Facebook應用程式的client_secret,
  "scope": 需要Facebook的權限
}
```

## Running the codes

```
    node main.js
```

## 如何執行

```
    node main.js
```
