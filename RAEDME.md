# README-chatgpt.md

# Síla ne

Tento dokument slouží jako stručná dokumentace projektu pro práci s ChatGPT.

Aktualizováno: 24. 7. 2026

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

## Layouty

layouts/

- homepage.njk
- page.njk
- article.njk
- nedelnik-detail.njk
- main.njk

## Partials

partials/

- head.njk
- header.njk
- menu.njk
- footer.njk

## Obsah

blog/
nedelnik/
img/

---

# Typy stránek

Domovská stránka
layout:
layouts/homepage.njk

Běžné stránky
layout:
layouts/main.njk

Vedlejsí stránky jako gdpr.html nebo dekuji.html apod.
layout: 
layouts/page.njk

Blog
layout:
layouts/article.njk

Nedělník
layout:
layouts/nedelnik-detail.njk

---

# Obsah

Obsah webu je psaný přímo v HTML.

Markdown se pro obsah webu nepoužívá.

Každý HTML soubor obsahuje YAML front matter.

Například:

```yaml
---
layout: layouts/article.njk
title: ""
perex: ""
datum: ""
picture: ""
picture_title: ""
tags: "clanky"
---
```

Nedělník:

```yaml
---
layout: layouts/nedelnik-detail.njk
title: ""
datum: ""
perex: ""
tags: nedelniky
---
```

---

# Menu

Aktivní položka menu se řídí proměnnou:

code

Při vytváření nové stránky vždy nastavit správnou hodnotu.

---

# Blog

Blog používá:

tags: "clanky"

---

# Nedělník

Nedělníky jsou archiv newsletterů z Ecomailu.

Nejsou určeny jako klasické webové stránky.

Je žádoucí, aby byly na webu vizuálně totožné s tím, co přišlo odběratelům e-mailem.

Proto:

- zachovávat tabulkový layout
- zachovávat inline styly
- nepřepisovat je na moderní HTML/CSS

---

# SCSS

Kompilace:

Live Sass Compiler

Hlavní soubor:

scss/style.scss

Výstup:

css/style.css

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

# Poznámky

Pokud si ChatGPT není jistý strukturou projektu, má se nejprve zeptat místo navrhování rozsáhlých změn.