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
read: 67
#
layout: page
title: şimdi okuduğum kitaplar
last_modified_at: 2025-08-19
published: true
#
# 1
booktitle1: "Look Again"
bookyear1: 2025
author1: "Tali Sharot, Cass R. Sunstein"
sayfa1: 252
format1: reading as a book
pageread1: 1
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

_[through the year](https://www.next52books.com/through-the-year.html "through the year")_

<div style="clear: both"></div>
[🍃](https://www.next52books.com/now.html "şimdi okuduğum kitaplar")
