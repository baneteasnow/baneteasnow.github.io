---
# {{ 200 | times: 5 | divided_by: 100 }}
# {% include postcountbymonth.html %}
# Here's a sentence with a footnote. [^aaa]
# [^aaa]: This is the footnote.
# term
# : definition
# format: book, ebook, audiobook
#
#
# 1 = ebook
# 2 = audiobook
# 3 = book
#
#
read: 56
#
layout: page
title: şimdi okuduğum kitaplar
last_modified_at: 2026-10-24
published: false
#
# 1
booktitle1: "The White Album"
bookyear1: 2017
author1: "Joan Didion"
sayfa1: 224
format1: reading as a book
pageread1: 126
cover1: "/assets/now/the-white-album.jpg"
# 2
booktitle2: "Filterworld"
bookyear2: 2025
author2: "Kyle Chayka"
sayfa2: 304
format2: reading as a book
pageread2: 27
cover2: "/assets/now/filterworld.jpg"
# 3
booktitle3: "Guns, Germs, and Steel"
bookyear3: 2018
author3: "Jared Diamond"
sayfa3: 664
format3: reading as a book
pageread3: 1
cover3: "/assets/now/guns-germs-and-steel.jpg"
# 4
booktitle4: "This Changes Everything"
bookyear4: 2015
author4: "Naomi Klein"
sayfa4: 704
format4: reading as a book
pageread4: 1
cover4: "/assets/now/this-changes-everything.jpg"
# 5
booktitle5: "Will I Ever Be Good Enough?"
bookyear5: 2019
author5: "Karyl McBride"
sayfa5: 280
format5: reading as a book
pageread5: 1
cover5: "/assets/now/will-i-ever-be-good-enough.jpg"
# 6
booktitle6: "Boundaries"
bookyear6: 2019
author6: "John Townsend, Henry Cloud"
sayfa6: 312
format6: reading as a book
pageread6: 1
cover6: "/assets/now/boundaries.jpg"
# 7
booktitle7: "A Paradise Built in Hell"
bookyear7: 2024
author7: "Rebecca Solnit"
sayfa7: 480
format7: reading as a book
pageread7: 1
cover7: "/assets/now/a-paradise-built-in-hell.jpg"
# 8
booktitle8: "The Myth of Normal"
bookyear8: 2023
author8: "Gabor Mate, Daniel Mate"
sayfa8: 552
format8: reading as a book
pageread8: 1
cover8: "/assets/now/the-myth-of-normal.jpg"
---

{% include image-gallery.html folder="/assets/now" %}

<div style="clear: both"></div>

⁜ {{ page.read | plus: 1 }}

{{ page.booktitle1 }} ({{ page.bookyear1 }})  
_by_ {{ page.author1 }}

<div style="font-size: 50%; font-style: italic;"> {{ page.format1 }} </div>

  <div style="font-size: 50%; font-style: italic;">
  {{ page.sayfa1 }} sayfa
  </div>

  <div style="font-size: 50%; font-style: italic;" title="reading challenge 2026">
  {{ page.pageread1 | times: 100 | divided_by: page.sayfa1 }}%
  </div>

  <div>
    <progress title="{{ page.pageread1 }}/{{ page.sayfa1 }}" value="{{ page.pageread1 }}" max="{{ page.sayfa1 }}" style="width: 80%;"></progress>
      <span style="font-size: 50%; font-style: italic;" title="reading challenge 2026">
      {{ page.pageread1 }}/{{ page.sayfa1 }}
      </span>
  </div>

  <br />
  <div style="clear: both"></div>

⁜ {{ page.read | plus: 2 }}

{{ page.booktitle2 }} ({{ page.bookyear2 }})  
_by_ {{ page.author2 }}

<div style="font-size: 50%; font-style: italic;"> {{ page.format2 }} </div>

  <div style="font-size: 50%; font-style: italic;">
  {{ page.sayfa2 }} sayfa
  </div>

  <div style="font-size: 50%; font-style: italic;" title="reading challenge 2026">
  {{ page.pageread2 | times: 100 | divided_by: page.sayfa2 }}%
  </div>

  <div>
    <progress title="{{ page.pageread2 }}/{{ page.sayfa2 }}" value="{{ page.pageread2 }}" max="{{ page.sayfa2 }}" style="width: 80%;"></progress>
      <span style="font-size: 50%; font-style: italic;" title="reading challenge 2026">
      {{ page.pageread2 }}/{{ page.sayfa2 }}
      </span>
  </div>
  <br />
  <div style="clear: both"></div>

⁜ {{ page.read | plus: 3 }}

{{ page.booktitle3 }} ({{ page.bookyear3 }})  
_by_ {{ page.author3 }}

<div style="font-size: 50%; font-style: italic;"> {{ page.format3 }} </div>

  <div style="font-size: 50%; font-style: italic;">
  {{ page.sayfa3 }} sayfa
  </div>

  <div style="font-size: 50%; font-style: italic;" title="reading challenge 2026">
  {{ page.pageread3 | times: 100 | divided_by: page.sayfa3 }}%
  </div>

  <div>
    <progress title="{{ page.pageread3 }}/{{ page.sayfa3 }}" value="{{ page.pageread3 }}" max="{{ page.sayfa3 }}" style="width: 80%;"></progress>
      <span style="font-size: 50%; font-style: italic;" title="reading challenge 2026">
      {{ page.pageread3 }}/{{ page.sayfa3 }}
      </span>
  </div>
  <br />
  <div style="clear: both"></div>

⁜ {{ page.read | plus: 4 }}

{{ page.booktitle4 }} ({{ page.bookyear4 }})  
_by_ {{ page.author4 }}

<div style="font-size: 50%; font-style: italic;"> {{ page.format4 }} </div>

  <div style="font-size: 50%; font-style: italic;">
  {{ page.sayfa4 }} sayfa
  </div>

  <div style="font-size: 50%; font-style: italic;" title="reading challenge 2026">
  {{ page.pageread4 | times: 100 | divided_by: page.sayfa4 }}%
  </div>

  <div>
    <progress title="{{ page.pageread4 }}/{{ page.sayfa4 }}" value="{{ page.pageread4 }}" max="{{ page.sayfa4 }}" style="width: 80%;"></progress>
      <span style="font-size: 50%; font-style: italic;" title="reading challenge 2026">
      {{ page.pageread4 }}/{{ page.sayfa4 }}
      </span>
  </div>
  <br />
  <div style="clear: both"></div>

⁜ {{ page.read | plus: 5 }}

{{ page.booktitle5 }} ({{ page.bookyear5 }})  
_by_ {{ page.author5 }}

<div style="font-size: 50%; font-style: italic;"> {{ page.format5 }} </div>

  <div style="font-size: 50%; font-style: italic;">
  {{ page.sayfa5 }} sayfa
  </div>

  <div style="font-size: 50%; font-style: italic;" title="reading challenge 2026">
  {{ page.pageread5 | times: 100 | divided_by: page.sayfa5 }}%
  </div>

  <div>
    <progress title="{{ page.pageread5 }}/{{ page.sayfa5 }}" value="{{ page.pageread5 }}" max="{{ page.sayfa5 }}" style="width: 80%;"></progress>
      <span style="font-size: 50%; font-style: italic;" title="reading challenge 2026">
      {{ page.pageread5 }}/{{ page.sayfa5 }}
      </span>
  </div>
  <br />
  <div style="clear: both"></div>

⁜ {{ page.read | plus: 6 }}

{{ page.booktitle6 }} ({{ page.bookyear6 }})  
_by_ {{ page.author6 }}

<div style="font-size: 50%; font-style: italic;"> {{ page.format6 }} </div>

  <div style="font-size: 50%; font-style: italic;">
  {{ page.sayfa6 }} sayfa
  </div>

  <div style="font-size: 50%; font-style: italic;" title="reading challenge 2026">
  {{ page.pageread6 | times: 100 | divided_by: page.sayfa6 }}%
  </div>

  <div>
    <progress title="{{ page.pageread6 }}/{{ page.sayfa6 }}" value="{{ page.pageread6 }}" max="{{ page.sayfa6 }}" style="width: 80%;"></progress>
      <span style="font-size: 50%; font-style: italic;" title="reading challenge 2026">
      {{ page.pageread6 }}/{{ page.sayfa6 }}
      </span>
  </div>
  <br />
  <div style="clear: both"></div>

⁜ {{ page.read | plus: 7 }}

{{ page.booktitle7 }} ({{ page.bookyear7 }})  
_by_ {{ page.author7 }}

<div style="font-size: 50%; font-style: italic;"> {{ page.format7 }} </div>

  <div style="font-size: 50%; font-style: italic;">
  {{ page.sayfa7 }} sayfa
  </div>

  <div style="font-size: 50%; font-style: italic;" title="reading challenge 2026">
  {{ page.pageread7 | times: 100 | divided_by: page.sayfa7 }}%
  </div>

  <div>
    <progress title="{{ page.pageread7 }}/{{ page.sayfa7 }}" value="{{ page.pageread7 }}" max="{{ page.sayfa7 }}" style="width: 80%;"></progress>
      <span style="font-size: 50%; font-style: italic;" title="reading challenge 2026">
      {{ page.pageread7 }}/{{ page.sayfa7 }}
      </span>
  </div>
  <br />
  <div style="clear: both"></div>
  ⁜ {{ page.read | plus: 8 }}

{{ page.booktitle8 }} ({{ page.bookyear8 }})  
_by_ {{ page.author8 }}

<div style="font-size: 50%; font-style: italic;"> {{ page.format8 }} </div>

  <div style="font-size: 50%; font-style: italic;">
  {{ page.sayfa8 }} sayfa
  </div>

  <div style="font-size: 50%; font-style: italic;" title="reading challenge 2026">
  {{ page.pageread8 | times: 100 | divided_by: page.sayfa8 }}%
  </div>

  <div>
    <progress title="{{ page.pageread8 }}/{{ page.sayfa8 }}" value="{{ page.pageread8 }}" max="{{ page.sayfa8 }}" style="width: 80%;"></progress>
      <span style="font-size: 50%; font-style: italic;" title="reading challenge 2026">
      {{ page.pageread8 }}/{{ page.sayfa8 }}
      </span>
  </div>
  <br />
  <div style="clear: both"></div>
<br />
<div style="clear: both"></div>
_[through the year](https://www.next52books.com/through-the-year.html "through the year")_
<div style="clear: both"></div>
[🍃](https://www.next52books.com/now.html "şimdi okuduğum kitaplar")
