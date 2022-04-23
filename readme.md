

### tl;dr

`yarn install` to install dependencies

`yarn rollup -c -w --mod test-mod` to build test-mod

`yarn rollup -c -w --mod my-mod-folder-name` to build mod on `mods/my-mod-folder-name` folder

use some server like https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer to serve the resulting file

use dimavas-mod-loader mod to install the server mod (as it supports importing from http:// protocol)