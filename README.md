<img src="https://www.numebrique.fr/img/logo_rwdutility.svg" width="200" height="200">

# jQuery rwdUtility

A jQuery plugin which helps developers to view the current breakpoint in web page: [plugin demo](https://www.numebrique.fr/plugin/rwdutility)

[![release](https://img.shields.io/github/release/numebrique/rwdUtility.svg)](https://github.com/numebrique/rwdUtility/releases/tag/1.0.0)
[![license](https://img.shields.io/github/license/numebrique/rwdUtility.svg)](https://github.com/numebrique/rwdUtility/LICENSE.md)

## Table of contents

- [Quick start](#quick-start)
- [Contact](#contact)
- [Creator](#creator)
- [Responsibility](#responsibility)
- [License](#license)


## Quick start

#### Download the release:

- Download [last release](https://github.com/numebrique/rwdUtility/archive/v1.0.0.zip)
- Or clone the repo: `git clone https://github.com/numebrique/rwdUtility.git`

#### Import library plugin:

```html
<script src="jquery.js"></script>
<script src="jquery.rwdUtility.js"></script>
```

#### Launch rwdUtility plugin:

It's not a difficult task:

```javascript
$(document).rwdUtility();
```

You can launch `rwdUtility` on `$(window)`, `$(document)` or `$('any')` element.


#### Available options:

Default options:

```javascript
$(document).rwdUtility({
    media: {
        xs: 0,
        sm: 768,
        md: 992,
        lg: 1200,
        xl: 1599,
    },
    console: false,
    position: 'bottom',
    fontSize: '12px',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,.65)',
});
```

`media:` breakpoints screen object

`console:` active plugin in browser console

`position:` bottom or top position

`fontSize:` font size plugin

`color:` font color plugin

`backgroundColor:` background color plugin

The second boolean parameter is to use Bootstrap 4 breakpoints:

```javascript
$(document).rwdUtility({}, true);
or
$(document).rwdUtility(null, true);
```


## Contact

Have a bug or feature request? Contact me: [contact@numebrique.fr](contact@numebrique.fr)


## Creator

**Numébrique**

- Website: <https://www.numebrique.fr>
- Twitter: <https://twitter.com/numebrique>
- Github: <https://github.com/numebrique>


## Responsibility

Numébrique disclaims any responsibility for the use that is made with this tool.

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

Copyright © Numébrique

Licensed under the MIT license.
