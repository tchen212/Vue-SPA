# Vue SPA

> Vue2.0 vue-router vuex echats axios

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Publish by nginx
``` bash
location ~ /oaservice/(api|images|files)/ {
  proxy_pass              http://218.242.246.26:8087;
  proxy_next_upstream     error timeout;
  proxy_connect_timeout   8s;
  proxy_cookie_path /oaservice/ /;

  proxy_intercept_errors  on;
  proxy_set_header        X-Forwarded-Host $http_host;
  proxy_set_header        X-Forwarded-Server $host;
  proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header        X-Real-IP $remote_addr;
  proxy_set_header        Host $http_host;
}
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
