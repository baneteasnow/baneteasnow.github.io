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
read: 33
#
layout: page
title: şimdi okuduğum kitaplar
last_modified_at: 2025-05-10
published: true
#
# 1
booktitle6: "When You're Ready, This Is How You Heal"
bookyear6: 2023
author6: "Brianna Wiest"
sayfa6: 280
format6: reading as a book
pageread6: 1
#
---

{% include image-gallery.html folder="/assets/now" %}

<div style="clear: both"></div>

⁜ {{ page.read | plus: 1 }}

{{ page.booktitle6 }} ({{ page.bookyear6 }})  
_by_ {{ page.author6 }}

<div style="font-size: 50%; font-style: italic;"> {{ page.format6 }} </div>

  <div style="font-size: 50%; font-style: italic;">
  {{ page.sayfa6 }} sayfa
  </div>

  <div style="font-size: 50%; font-style: italic;" title="reading challenge 2025">
  {{ page.pageread6 | times: 100 | divided_by: page.sayfa6 }}%
  </div>

  <div>
    <progress title="{{ page.pageread6 }}/{{ page.sayfa6 }}" value="{{ page.pageread6 }}" max="{{ page.sayfa6 }}" style="width: 80%;"></progress>
      <span style="font-size: 50%; font-style: italic;" title="reading challenge 2025">
      {{ page.pageread6 }}/{{ page.sayfa6 }}
      </span>
  </div>

  <br />
  <div style="clear: both"></div>

⁜ {{ page.read | plus: 2 }}

{{ page.booktitle7 }} ({{ page.bookyear7 }})  
_by_ {{ page.author7 }}

<div style="font-size: 50%; font-style: italic;"> {{ page.format7 }} </div>

  <div style="font-size: 50%; font-style: italic;">
  {{ page.sayfa7 }} sayfa
  </div>

  <div style="font-size: 50%; font-style: italic;" title="reading challenge 2025">
  {{ page.pageread7 | times: 100 | divided_by: page.sayfa7 }}%
  </div>

  <div>
    <progress title="{{ page.pageread7 }}/{{ page.sayfa7 }}" value="{{ page.pageread7 }}" max="{{ page.sayfa7 }}" style="width: 80%;"></progress>
      <span style="font-size: 50%; font-style: italic;" title="reading challenge 2025">
      {{ page.pageread7 }}/{{ page.sayfa7 }}
      </span>
  </div>

  <br />
  <div style="clear: both"></div>

_[through the year](https://www.next52books.com/through-the-year.html "through the year")_

<div style="clear: both"></div>
[🍃](https://www.next52books.com/now.html "şimdi okuduğum kitaplar")
