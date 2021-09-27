# jQuery rwdKit

jQuery plugin can help developers to view current breakpoint informations in responsive web page: [Demo page](https://jagullo.fr/rwdkit/)

[![license](https://img.shields.io/github/license/julienagullo/rwdKit.svg)](https://github.com/julienagullo/rwdKit/LICENSE.md)

## Table of contents

- [Quick start](#quick-start)
- [Contact](#contact)
- [Responsibility](#responsibility)
- [License](#license)


## Quick start

#### Download the release:

- Download [last release](https://github.com/julienagullo/rwdKit/releases/)
- Or clone the repo: `git clone https://github.com/julienagullo/rwdKit.git`

#### Import library plugin:

```html

<script src="jquery.js"></script>
<script src="jquery.rwdkit.js"></script>
```

#### Launch rwdKit plugin:

```javascript
$(document).rwdKit();
```

You can launch `rwdKit` on `$(window)`, `$(document)` or `$('body')` element.


#### Available options:

Default options:

```javascript
$(document).rwdKit({
    media: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
    },
    console: false,
    bootstrap3: false,
    position: 'bottom',
    color: 'white',
    backgroundColor: 'rgba(14,120,200,.9)',
});
```

`media:` (object) breakpoints screen object

`console:` (bool) active plugin in browser console

`bootstrap3:` (bool) forced to use Bootstrap 3 breakpoints (default version 4)

`position:` (string) bottom or top position

`color:` (string) current font color

`backgroundColor:` (string) current background-color


#### General options:

- Press `F4` key or click `refresh button` to reload page without cache (to avoid opening the development tool)

#### Iframe options:

- Click `mobile button` to open responsive iframe which can be resized
- Press `F4` key with iframe focus to reload only iframe content without cache
- Resize the iframe precisely by changing size below the iframe then press `ENTER`
- Switch from one breakpoint to another with the `left` and `right` arrows 

## Contact

- Mail: [contact@jagullo.fr](mailto:contact@jagullo.fr?subject=[GitHub]%20rwdKit))
- Website: <https://jagullo.fr>
- Github: <https://github.com/julienagullo>

## Responsibility

Author disclaims any responsibility for the use that is made with this tool.

```text
Al-Nu’man ibn Bashir reported,
The Messenger of Allah (Peace and Blessings be upon Him) said: « Verily, the lawful is clear and the unlawful is clear, and between the two of them they are doubtful matters about which many people don't know. Thus, he who avoids doubtful matters clears himself in regard to his religion and his honor, and he who falls into doubtful matters will fall into the unlawful as the shepherd who pastures near a sanctuary, all but grazing there in. Verily, every king has a sanctum and the sanctum of Allah is his prohibitions. Verily, in the body is a piece of flesh which, if sound, the entire body is sound, and if corrupt, the entire body is corrupt. Truly, it is the heart. »
Sahih al-Bukhārī 52, Sahih Muslim 1599
```

```text
D'après Nu'man Ibn Bachir (qu'Allah l'agrée),
Le Messager d'Allah (que La Prière d'Allah et Son Salut soient sur Lui) a dit : « Certes le halal est clair et certes le haram est clair et il y a entre les deux des choses ambiguës que peu de gens connaissent. Celui qui s'écarte des choses ambiguës a préservé sa religion et son honneur. Quant à celui qui tombe dans les choses ambiguës il tombe dans le haram comme le berger qui fait paitre ses bêtes près d'un enclos réservé et qui sont sur le point de rentrer dedans. Certes chaque roi a un domaine réservé et certes le domaine réservé d'Allah est ses interdits. Certes il y a dans le corps un morceau de chair, si il est bon alors l'ensemble du corps est bon tandis que si il est mauvais alors c'est l'ensemble du corps qui est mauvais, certes il s'agit du coeur. »
Sahih al-Bukhārī 52, Sahih Muslim 1599
```


## License

Copyright © jagullo.fr

Licensed under the MIT license.
