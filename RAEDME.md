# README-chatgpt.md

# Síla ne

Tento dokument slouží jako stručná dokumentace projektu pro práci s ChatGPT.

Aktualizováno: 5. 9. 2026

---

# CSS

Live Sass Compiler zapisuje do:
/css/style.css

Nastavení je v:
.vscode/settings.json

---

# Projekt

Web Síla ne je vytvořen v:

- Eleventy 3
- Nunjucks
- HTML
- SCSS

Editor:

- VS Code

Hostování:

- Netlify

Repozitář:

- chovancovak/silane

---

# Filozofie projektu

Při návrzích preferovat jednoduchá řešení.

Nepřidávat:

- frameworky
- knihovny
- JavaScript

pokud není opravdu potřeba.

Preferovat HTML + SCSS.

---

# Struktura projektu

## Globální data

_data/

- site.json

`site.json` obsahuje globální SEO a metadata webu:

- name
- url
- defaultTitle
- defaultDescription
- defaultOgImage
- googleSiteVerification

## Layouty

_includes/layouts/

- homepage.njk
- page.njk
- article.njk
- nedelnik-detail.njk
- interview.njk
- main.njk
- group.njk

## Partials

_includes/partials/

- head.njk
- header.njk
- menu.njk
- footer.njk

## Obsah

blog/

nedelniky/

interview/

img/

skupiny/

---

# Typy stránek

Domovská stránka

layout:

layouts/homepage.njk

Běžné stránky

layout:

layouts/main.njk

Vedlejší stránky jako gdpr.html nebo dekuji.html apod.

layout:

layouts/page.njk

Blog

layout:

layouts/article.njk

Nedělník

layout:

layouts/nedelnik-detail.njk

Rozhovory – detail jednotlivého rozhovoru

layout:

layouts/interview.njk

layout:

layouts/group.njk

---

# Front matter a SEO

Obsah webu je psaný přímo v HTML.

Markdown se pro obsah webu nepoužívá.

Každý HTML soubor obsahuje YAML front matter.

## Základní význam polí

`title`

- název stránky v rámci webu
- pokud není `seoTitle`, používá se i pro `<title>` a doplní se `| Síla ne`

`seoTitle`

- volitelný název stránky pro SEO a metadata
- používá se do `<title>`, Open Graph a Twitter/X metadat
- používat tam, kde je potřeba odlišit běžný název stránky od názvu pro vyhledávače

`description`

- popis stránky pro SEO a sdílení
- doporučuje se u všech důležitých indexovaných stránek
- nepoužívat automaticky `perex` jako náhradu

`perex`

- zobrazovaný úvod nebo popis obsahu
- používá se vizuálně na stránce nebo v kartách

`ogImage`

- volitelný Open Graph obrázek konkrétní stránky
- pokud chybí, použije se `site.defaultOgImage`

`ogImageAlt`

- volitelný alternativní text pro OG obrázek

`noindex`

- pokud je `true`, stránka se nemá indexovat a není zařazena do sitemap

`code`

- řídí aktivní položku menu

---

# SEO systém

SEO metadata jsou generována v:

_includes/partials/head.njk

Používají globální data z:

_data/site.json

Head generuje:

- `<html lang>`
- `<title>`
- meta description
- robots
- canonical
- Open Graph metadata
- Twitter/X metadata
- og:locale
- Google Search Console verification
- budoucí hreflang

## Homepage title

Homepage má zvláštní logiku.

Pokud je `page.url == "/"`, použije se:

1. `seoTitle`
2. nebo `site.defaultTitle`

## Běžné stránky

Pokud existuje `seoTitle`, použije se přímo.

Pokud `seoTitle` chybí a existuje `title`, vznikne:

`title | Síla ne`

## Canonical

Canonical se standardně skládá z:

`site.url + page.url`

Pokud je potřeba jiná canonical URL, lze použít proměnnou:

`canonical`

## Open Graph

Pokud stránka nemá vlastní:

`ogImage`

použije se:

`site.defaultOgImage`

---

# Search Console, sitemap a robots

Google Search Console je aktivní pro:

https://silane.cz/

Sitemap je:

https://silane.cz/sitemap.xml

Soubor:

sitemap.njk

Sitemap automaticky zahrnuje stránky, které:

- mají URL
- nemají `noindex: true`

Soubor:

robots.njk

generuje:

/robots.txt

a odkazuje na sitemap.


---

# SCSS

Kompilace:

Live Sass Compiler

Hlavní soubor:

scss/style.scss

Výstup:

css/style.css

## SCSS soubory

scss/

- _article.scss  
  styly detailu blogového článku

- _base.scss  
  globální základ webu – body, nadpisy, odstavce, odkazy, obrázky, základní utility a obecné rozložení

- _blog.scss  
  hlavní stránka blogu a karty článků

- _dekuji.scss  
  společné styly děkovacích stránek

- _footer.scss  
  patička webu

- _gdpr.scss  
  stránka ochrany osobních údajů

- _group.scss  
  detail konkrétního skupinového koučování; hero, metadata, CTA, formuláře, obsah programu, praktické informace a závěr

- _header.scss  
  hlavička webu

- _homepage.scss  
  domovská stránka

- _interview.scss  
  detail jednotlivého rozhovoru

- _kontakt.scss  
  kontaktní stránka

- _koucovani.scss  
  stránka individuálního koučování

- _menu.scss  
  hlavní navigace

- _nes_svet.scss  
  hlavní stránka rozhovorové série „Nes svět, neztrať sebe“

- _newsletter.scss  
  hlavní stránka Nedělníku / newsletteru

- _o_mne.scss  
  stránka O mně

- _potvrdte.scss  
  stránka související s potvrzením odběru / formulářovým procesem

- _recenze.scss  
  stránka / sekce recenzí

- _skupiny.scss  
  hlavní stránka /skupiny/; intro, seznam programů, karty programů a vysvětlení skupinového koučování

- _uvodni_hodina.scss  
  styly sekcí a prvků souvisejících s úvodní hodinou koučování

- _variables.scss  
  globální SCSS proměnné – barvy, fonty, breakpointy, šířky, odsazení apod.

- style.scss  
  hlavní SCSS soubor; importuje jednotlivé partialy a kompiluje se do /css/style.css

Nové proměnné přidávat do:

_variables.scss

---

# Barvy

Aktuální systém používá proměnné:

$color-primary:   #7A6247; // výraznější hnědobéžová (může být header / důležité prvky)
$color-accent:    #E0B11F; // světlejší, jasnější zlatá (CTA, odkazy) - #E0B11F
$color-dark:      #22282B; // o chlup kontrastnější text
$color-accent-d:  #4B3C29; // tmavší akcent na nadpisy, tlačítka
$color-bg-soft:   #F3ECE2; // o trochu teplejší pozadí stránky

$color-bg:        #FFFFFF; // boxy, poezie
$color-border-soft: #D9CDBE;
$color-path-bg: #2C3537; // jemná, ne příliš tvrdá varianta $color-dark

$color-topics-bg: lighten($color-bg-soft, 2%);


Staré proměnné jsou již téměř odstraněné.

Dočasně zůstávají:

- $background-c
- $tertiary-c

Nový kód používat pouze přes nový systém barev.

---

# Fonty

Patkové:
Libre Baskerville
proměnná: $patka: "Libre Baskerville", serif;


Bezpatkové:
Source Sans 3
proměnná: $bezpatka: "Source Sans 3", sans-serif;

---

# Barevné proměnné

```scss
$color-primary
$color-accent
$color-dark
$color-accent-d
$color-bg-soft

$color-bg
$color-border-soft
$color-path-bg
$color-topics-bg
```

---

# Breakpointy

Tablet:

768 px

Desktop:

1250 px

---

# Šířka webu

Minimum:

320 px

Maximum:

1700 px

---

# Odsazení

Desktop:

180 px

Tablet:

80 px

Mobil:

20 px

---

# Git

Repozitář:

chovancovak/silane

Produkční větev:

main

Push do main automaticky publikuje web na Netlify.

Do budoucna je plánovaná pracovní větev:

prace

---

# Jak navrhovat změny

Při návrzích:

- zachovávat architekturu projektu
- zachovávat současný styl kódu
- nenavrhovat zbytečné refaktoringy
- nepřejmenovávat hromadně třídy ani proměnné
- před větší změnou vysvětlit důvod
- pokud si nejsem jistá strukturou layoutu nebo konfigurace, nejdřív si vyžádat konkrétní soubor

---

# Styl značky

Síla ne není web o produktivitě.

Vyhýbat se formulacím typu:

- odpočiňte si, abyste podávali lepší výkon
- zpomalte, abyste toho zvládli víc

Koučování je doprovázení.

Ne poučování.

Klíčová věta značky:

„Ne je slovo, kterým se bereme vážně.“

---

# Rozhovory

Série:

Nes svět, neztrať sebe

Hlavní stránka:

/nes_svet/

Jednotlivé rozhovory jsou v:

interview/

Každý rozhovor:

má vlastní URL
používá layouts/interview.njk
patří do kolekce rozhovory
má vlastní SEO title a description
odkazuje na YouTube video
zobrazuje se automaticky na stránce /nes_svet/

Doporučený front matter:

---
layout: layouts/interview.njk

title: ""
seoTitle: ""
description: ""

guest: ""
role: ""
number: ""

youtube: ""
youtube_id: ""

thumbnail: ""

perex: ""
featured_text: ""
quote: ""

tags: rozhovory
date: YYYY-MM-DD
permalink: "/rozhovory/jmeno-hosta/"
code: rozhovory
ogImage: 
---

Na stránce /nes_svet/ se rozhovory načítají z:

collections.rozhovory

Nejnovější rozhovor je automaticky použit jako featured.

Karty a featured blok odkazují na vlastní detail rozhovoru.


# Skupinové koučování

Hlavní stránka:

/skupiny/

Soubor:

skupiny.html

Hlavní stránka zobrazuje aktuální nabídku skupinového koučování.

Jednotlivé programy jsou v:

skupiny/

Například:

skupiny/001-kdy-budu-ja.html

Každý program:

- má vlastní URL
- používá layouts/group.njk
- patří do kolekce skupiny
- má vlastní SEO title a description
- může být ve stavu interest / open / closed
- zobrazuje se na /skupiny/ pouze pokud není closed


## Stavy programu

Pole:

status

má tři možné hodnoty:

interest

- termín ještě není známý
- sbírá se předběžný zájem
- na detailu programu se zobrazuje jednoduchý formulář pro e-mail
- člověk pouze žádá o informaci, až bude otevřená závazná registrace

open

- termín, čas, místo a cena jsou známé
- běží závazná registrace
- později bude doplněn samostatný registrační formulář
- bude mít vlastní děkovací stránku

closed

- aktuálně se nelze přihlásit
- program se nezobrazuje na hlavní stránce /skupiny/
- detail programu může zůstat veřejně dostupný
- program lze později znovu přepnout na interest nebo open


## Hlavní stránka /skupiny/

Soubor:

skupiny.html

Načítá programy z:

collections.skupiny

Používá:

{% set skupiny = collections.skupiny | reverse %}

Programy se na stránce zobrazují pouze pokud:

status != "closed"


## Detail programu

Layout:

_includes/layouts/group.njk

Layout zajišťuje:

- společné hero pro skupinové koučování
- název programu
- město, datum, čas, místo, kapacitu a cenu
- správné CTA podle statusu
- formulář předběžného zájmu ve stavu interest
- budoucí registraci ve stavu open
- stav closed bez registračního CTA
- praktické informace
- závěrečnou CTA sekci

Vlastní obsah programu je v souboru programu a layout ho vykresluje přes:

{{ content | safe }}


## Doporučený front matter programu

---
layout: layouts/group.njk

title: ""
seoTitle: ""
description: ""

number: ""
status: interest

city: ""
date: ""
time: ""
place: ""
capacity: ""
price: ""

perex: ""

interest_text: ""
registration_url: ""

thumbnail: ""

tags: skupiny
date_order: YYYY-MM-DD
permalink: "/skupiny/slug/"
code: skupiny
---


## Předběžný zájem

Ve stavu:

status: interest

se na stránce programu zobrazuje jednoduchý Netlify formulář.

Formulář sbírá:

- e-mail
- souhlas se zpracováním údajů
- skryté pole s názvem programu

Název formuláře:

zajem-skupinove-koucovani

Po odeslání vede na:

/dekuji-za-zajem/

E-mail z tohoto formuláře se nepřidává automaticky do Nepravidelného Nedělníku.

Účel je pouze:

zaslat informaci, že byla otevřena závazná registrace na konkrétní skupinové koučování.

Zpracování osobních údajů je popsáno na:

/gdpr/


## Budoucí registrace – open

Až se program přepne na:

status: open

bude potřeba doplnit:

- datum
- čas
- konkrétní místo
- cenu
- registrační formulář
- děkovací stránku pro závaznou registraci
- případně další praktické podmínky

Registrační formulář se bude řešit až ve chvíli, kdy bude znám konkrétní termín.

Nepřidávat složitější registrační systém, pokud není potřeba.


## SCSS pro skupinové koučování

scss/_skupiny.scss

Styly hlavní stránky:

/skupiny/

Obsahuje zejména:

- intro hlavní stránky
- seznam programů
- grid karet
- group-card
- sekci vysvětlující princip skupinového koučování


scss/_group.scss

Styly detailu jednotlivého programu.

Obsahuje zejména:

- hero detailu programu
- metadata programu
- CTA blok
- formulář předběžného zájmu
- obsah jednotlivých sekcí programu
- praktické informace
- závěrečnou CTA sekci

Formulář:

.group-interest__form

patří do:

_group.scss

protože je součástí detailu konkrétního programu.


Oba soubory se importují v:

scss/style.scss

například:

@import 'skupiny';
@import 'group';


## Aktuální první program

Soubor:

skupiny/001-kdy-budu-ja.html

URL:

/skupiny/kdy-budu-ja/

Název:

Hotovo nebude nikdy. Tak kdy budu já?

Aktuální stav:

interest

Místo:

Sedlčany

Konkrétní termín a místo budou doplněny později.

První komunikace probíhá přes Nepravidelný Nedělník.

Po otevření registrace se program přepne na:

status: open

# Nedělník

Nedělníky jsou archiv newsletterů z Ecomailu. Není veřejný, ale jen pro ty, co se zapíšou k odběru.

Nejsou určeny jako klasické webové stránky.

Je žádoucí, aby byly na webu vizuálně totožné s tím, co přišlo odběratelům e-mailem.

Proto:

zachovávat tabulkový layout
zachovávat inline styly
nepřepisovat je na moderní HTML/CSS

Front matter může obsahovat:

---
layout: layouts/nedelnik-detail.njk
description: "" 
title: ""
datum: ""
perex: ""
tags: nedelniky
noindex: true
---

---

# Blog

Blog používá:

tags: "clanky"

Doporučený front matter:


---
---
layout: layouts/article.njk
title: ""
description: ""
seoTitle: ""
perex: ""
datum: ""
picture: "/img/blog/00x"
picture_title: ""
tags: "clanky"
---
---


# Poznámky

Pokud si ChatGPT není jistý strukturou projektu, má se nejprve zeptat místo navrhování rozsáhlých změn.

# Plánované technické úkoly
SEO a metadata
přidat vlastní OG obrázky k jednotlivým blogovým článkům
přidat vlastní OG obrázky k jednotlivým rozhovorům
doplnit apple-touch-icon.png
doplnit jeho <link> do head.njk
SCSS
migrovat z @import na @use
při migraci doplnit každému partialu vlastní přístup k proměnným
zkontrolovat, že po migraci funguje celý web bez změny vzhledu
Jazykové verze

Do budoucna je plánovaná anglická verze webu.

Předpokládaný princip:

český web zůstane na stávajících URL
anglická verze pod /en/
nepoužívat automatický redirect podle jazyka prohlížeče
používat lang
používat translations
generovat hreflang
používat x-default

- doplnit descrtiption do nedelniku

Skupinové koučování

- doplnit registrační formulář pro status open
- vytvořit děkovací stránku po závazné registraci
- doplnit konkrétní datum, čas a místo programu
- otestovat Netlify Forms po deployi
- nastavit e-mailové upozornění na nové formulářové odpovědi v Netlify