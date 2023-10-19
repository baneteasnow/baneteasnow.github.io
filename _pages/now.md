---
# {{ 200 | times: 5 | divided_by: 100 }}
# {% include postcountbymonth.html %}
# Here's a sentence with a footnote. [^aaa]
# [^aaa]: This is the footnote.
# term
# : definition
layout: page
title: şimdi okuduğum kitaplar
last_modified_at: 2023-10-19
published: true
booktitle: "Afacan Bir Psikanalistan Düşünceleri"
bookyear: 2023
author: "Antonino Ferro, Luca Nicoli"
sayfa: 152
pageread: 114
read: 74
---

⁜ {{ page.read | plus: 1 }}

{{ page.booktitle }} ({{ page.bookyear }})  
_by_ {{ page.author }}

<div style="font-size: 50%; font-style: italic;">
  {{ page.sayfa }} sayfa
 </div>

<div style="font-size: 50%; font-style: italic;" title="reading challenge 2023"> 
  {{ page.pageread | times: 100 | divided_by: page.sayfa }}%
</div>

<div>
  <progress title="{{ page.pageread }}/{{ page.sayfa }}" value="{{ page.pageread }}" max="{{ page.sayfa }}" style="width: 80%;"></progress>
  <span style="font-size: 50%; font-style: italic;" title="reading challenge 2023"> 
    {{ page.pageread }}/{{ page.sayfa }}
  </span>
</div>
<div style="clear: both"></div>
<br />
  
[🍃](https://www.nonfictionbooks.xyz/now.html "şimdi okuduğum kitaplar")
