# Now Playing

Collection of Handpicked Albums by the Guérilla.Studio


## Project setup

### Install hugo
[Install Documentation](https://gohugo.io/getting-started/installing/)

### Launch dev server

```
hugo server
```

### Build for production

```
hugo --baseURL $URL
```

As it `$URL` is an env variable but you can harcode it in the build command.


## Use NetlifyCMS backoffice in local mode

This website use [NetlifyCMS](https://www.netlifycms.org/) backoffice to manage albums easily.
And it's possible to use it while working in local:

### Install JS dependencies

```
npm i
```
of if you don't want to impact the package-lock
```
npm ci
```

### Run local API

1. Uncomment the `local_backend` line in `static/config.yml`
2. Launch [hugo developement server](#launch-dev-server)
2. launch this command in another terminal `npx netlify-cms-proxy-server` (inside the project folder)

### Admin your website in local

Go to you website's local url + `/admin` (by default it's `http://localhost:1312/admin`). Enjoy!


## Credits
  * [Higgcss](https://github.com/robinparisi/higgcss) - The minimal CSS framework used as skeleton
  * Wryk for the help and support 💜
  * [Deuxfleurs](https://deuxfleurs.fr) for the wonderful distributed hosting infrastructure (running [Garage](https://garagehq.deuxfleurs.fr)) \
  ![Website hosted by Deuxfleurs](hosted_by_deuxfleurs.png) ![Infrastructure powered by Garage ](powered_by_garage.png)

## License
  * All albums visuals and streaming services logos rights belong entirely to their respective owners
  * Code is under [“I'm so tired” 1.0](LICENSE) license. Please **take the time** to read and *check if you're allowed* to use it before doing so. (*Thank you luna who made it* \[[source](https://olmewe.com/notes/istsl)\].)
