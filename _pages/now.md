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
read: 19
#
layout: page
title: şimdi okuduğum kitaplar
last_modified_at: 2026-03-28
published: true
#
# 1
booktitle1: "The White Album"
bookyear1: 2017
author1: "Joan Didion"
sayfa1: 224
format1: reading as a book
pageread1: 126
# 2
booktitle2: "Overtime"
bookyear2: 2021
author2: "Will Stronge, Kyle Lewis"
sayfa2: 104
format2: reading as a book
pageread2: 1
# 3
booktitle3: "All About Love"
bookyear3: 2018
author3: "Bell Hooks"
sayfa3: 216
format3: reading as a book
pageread3: 1
# 4
booktitle4: "Feminism Is for Everybody"
bookyear4: 2026
author4: "Bell Hooks"
sayfa4: 148
format4: reading as a book
pageread4: 148
# 5
booktitle5: "The Feminist Killjoy Handbook"
bookyear5: 2024
author5: "Sara Ahmed"
sayfa5: 320
format5: reading as a book
pageread5: 1
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

_[through the year](https://www.next52books.com/through-the-year.html "through the year")_

<div style="clear: both"></div>
[🍃](https://www.next52books.com/now.html "şimdi okuduğum kitaplar")
