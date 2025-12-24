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
read: 97
#
layout: page
title: şimdi okuduğum kitaplar
last_modified_at: 2025-12-24
published: true
#
# 1
booktitle1: "The White Album"
bookyear1: 2017
author1: "Joan Didion"
sayfa1: 224
format1: reading as a book
pageread1: 119
# 2
booktitle2: "On Fire"
bookyear2: 2021
author2: "Naomi Klein"
sayfa2: 352
format2: reading as a book
pageread2: 147
# 3
booktitle3: "The Wisdom of Your Body"
bookyear3: 2023
author3: "Hillary L. McBride"
sayfa3: 288
format3: reading as a book
pageread3: 288
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

  <div style="font-size: 50%; font-style: italic;" title="reading challenge 2025">
  {{ page.pageread1 | times: 100 | divided_by: page.sayfa1 }}%
  </div>

  <div>
    <progress title="{{ page.pageread1 }}/{{ page.sayfa1 }}" value="{{ page.pageread1 }}" max="{{ page.sayfa1 }}" style="width: 80%;"></progress>
      <span style="font-size: 50%; font-style: italic;" title="reading challenge 2025">
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

  <div style="font-size: 50%; font-style: italic;" title="reading challenge 2025">
  {{ page.pageread2 | times: 100 | divided_by: page.sayfa2 }}%
  </div>

  <div>
    <progress title="{{ page.pageread2 }}/{{ page.sayfa2 }}" value="{{ page.pageread2 }}" max="{{ page.sayfa2 }}" style="width: 80%;"></progress>
      <span style="font-size: 50%; font-style: italic;" title="reading challenge 2025">
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

  <div style="font-size: 50%; font-style: italic;" title="reading challenge 2025">
  {{ page.pageread3 | times: 100 | divided_by: page.sayfa3 }}%
  </div>

  <div>
    <progress title="{{ page.pageread3 }}/{{ page.sayfa3 }}" value="{{ page.pageread3 }}" max="{{ page.sayfa3 }}" style="width: 80%;"></progress>
      <span style="font-size: 50%; font-style: italic;" title="reading challenge 2025">
      {{ page.pageread3 }}/{{ page.sayfa3 }}
      </span>
  </div>

  <br />
  <div style="clear: both"></div>

  <br />
  <div style="clear: both"></div>
_[through the year](https://www.next52books.com/through-the-year.html "through the year")_

<div style="clear: both"></div>
[🍃](https://www.next52books.com/now.html "şimdi okuduğum kitaplar")
