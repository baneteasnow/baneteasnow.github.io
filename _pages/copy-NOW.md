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
read: 59
#
layout: page
title: şimdi okuduğum kitaplar
last_modified_at: 2025-07-26
published: true
#
# 2
booktitle2: "Rezonans Kanunu"
bookyear2: 2019
author2: "Pierre Franckh"
suresaat2: 4
suredakika2: 45
sayfa2: 206
format2: listening as an audiobook
pageread2: 206
pagereadsaat2: 4
pagereaddakika2: 45
---

{% include image-gallery.html folder="/assets/now" %}

<div style="clear: both"></div>

⁜ {{ page.read | plus: 2 }}

{{ page.booktitle2 }} ({{ page.bookyear2 }})  
_by_ {{ page.author2 }}

 <div style="font-size: 50%; font-style: italic;"> {{ page.format2 }} </div>

  <div style="font-size: 50%; font-style: italic;">
  {{ page.suresaat2 }} saat {{ page.suredakika2 }} dakika
  </div>

  <div style="font-size: 50%; font-style: italic;" title="reading challenge 2025">
  {{ page.pageread2 | times: 100 | divided_by: page.sayfa2 }}%
  </div>

  <div>
    <progress title="{{ page.pageread2 }}/{{ page.sayfa2 }}" value="{{ page.pageread2 }}" max="{{ page.sayfa2 }}" style="width: 80%;"></progress>
      <span style="font-size: 50%; font-style: italic;" title="reading challenge 2025">
      {{ page.pagereadsaat2 }}"{{ page.pagereaddakika2 }}'/{{ page.suresaat2 }}"{{ page.suredakika2 }}'
      </span>
  </div>

  <br />
  <div style="clear: both"></div>

_[through the year](https://www.next52books.com/through-the-year.html "through the year")_

<div style="clear: both"></div>
[🍃](https://www.next52books.com/now.html "şimdi okuduğum kitaplar")
