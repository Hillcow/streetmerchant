<p align="center">
  <a href="https://jef.codes/streetmerchant"
    ><img
      src="https://raw.githubusercontent.com/jef/streetmerchant/main/docs/assets/images/streetmerchant-banner.png"
      alt="streetmerchant"
  /></a>
</p>
<p align="center">
  <strong>The world's easiest, most powerful stock checker</strong>
</p>
<p align="center">
  <a href="https://github.com/jef/streetmerchant/actions?query=workflow%3Aci"
    ><img src="https://github.com/jef/streetmerchant/workflows/ci/badge.svg"
  /></a>
  <a href="https://discord.gg/gbVY4vB9JF"
    ><img
      src="https://img.shields.io/discord/773913070665859073.svg?label=chat&logo=discord&logoColor=ffffff&color=7389D8"
      alt="Tweet"
  /></a>
  <a
    href="https://twitter.com/intent/tweet?text=Beat%20the%20masses%20with%20streetmerchant&url=https://github.com/jef/streetmerchant&hashtags=typescript,opensource,bot,shopping"
    ><img
      src="https://img.shields.io/badge/twitter-share-green?logo=twitter&style=social"
      alt="Tweet"
  /></a>
</p>
<p align="center">
  <em>To get started, visit <a href="https://jef.codes/streetmerchant">jef.codes/streetmerchant</a></em>
</p>

## Features

First and foremost, this service _will not_ automatically buy for you.

- **Checks stock continuously** -- runs 24/7, 365, looking for the items you want.
- **Ready for checkout** -- ability to add to cart when available and even opens the browser for you.
- **Notifications galore** -- when you're not by your computer, worry free with notifications to most platforms and devices when an item comes in stock.

## Quick start

streetmerchant runs on Node.js 14:

```shell
git clone https://github.com/jef/streetmerchant.git
cd streetmerchant && npm i && npm run start
```

For more information and customization, visit [jef.codes/streetmerchant/getting-started](https://jef.codes/streetmerchant/getting-started).

to build docker image on M1 Mac (!) run: `npm run build && docker buildx build . --platform linux/amd64 --push -t fabianr/ps5bot && docker build . -t fabianr/ps5bot_m1 && docker push fabianr/ps5bot_m1`


to run: `cd $HOME && docker stop ps5bot || true && docker rm ps5bot || true && docker pull fabianr/ps5bot && docker run --cap-add=SYS_ADMIN -it -v$(pwd)/global.proxies:/app/global.proxies --env-file ./dotenv -d --name ps5bot --restart on-failure docker.io/fabianr/ps5bot:latest`

crontab -e:
```
33 * * * * docker restart ps5bot
0 6 * * * cd $HOME && docker stop ps5bot || true && docker rm ps5bot || true && docker pull fabianr/ps5bot && docker run --cap-add=SYS_ADMIN -it -v$(pwd)/global.proxies:/app/global.proxies --env-file ./dotenv -d --name ps5bot --restart on-failure docker.io/fabianr/ps5bot:latest
21 * * * * docker restart mmsbotmmde && docker restart mmsbotsaturn
0 5 * * * cd $HOME/mmsbot && docker stop mmsbot_mmde || true && docker stop mmsbot_saturn || true && docker rm mmsbot_mmde || true && docker rm mmsbot_saturn || true && docker pull fabianr/mmsbot && docker run --restart on-failure --memory 500m --memory-swap 500m --ulimit core=0 -v /dev/null:/opt/mms-stockshock/stockshock.log -v $PWD/stores.toml:/opt/mms-stockshock/stores.toml -v $PWD/cooldowns.json:/opt/mms-stockshock/cooldowns.json -v $PWD/basket-cooldowns.json:/opt/mms-stockshock/basket-cooldowns.json -e "STORE=saturn" --name mmsbot_saturn -p 8090:8080 -d fabianr/mmsbot && docker run --restart on-failure --memory 500m --memory-swap 500m --ulimit core=0 -v /dev/null:/opt/mms-stockshock/stockshock.log -v $PWD/stores.toml:/opt/mms-stockshock/stores.toml -v $PWD/cooldowns.json:/opt/mms-stockshock/cooldowns.json -v $PWD/basket-cooldowns.json:/opt/mms-stockshock/basket-cooldowns.json -e "STORE=mmde" --name mmsbot_mmde -p 8080:8080 -d fabianr/mmsbot
0 06 * * * reboot
```
