---
# {{ 200 | times: 5 | divided_by: 100 }}
# {% include postcountbymonth.html %}
# Here's a sentence with a footnote. [^aaa]
# [^aaa]: This is the footnote.
# term
# : definition
layout: page
title: şimdi okuduğum kitaplar
last_modified_at: 2023-10-12
published: true
booktitle1: "The Unthinkable"
bookyear1: 2013
author1: "Amanda Ripley"
sayfa1: 336
pageread1: 54
pageall1: 336
booktitle2: "Afacan Bir Psikanalistan Düşünceleri"
bookyear2: 2023
author2: "Antonino Ferro"
sayfa2: 152
pageread2: 1
pageall2: 152
read: 74
---

<!-- book 1 -->

⁜ {{ page.read }}

{{ page.booktitle1 }} ({{ page.bookyear1 }})  
_by_ {{ page.author1 }}

<div style="font-size: 50%; width: 5%; font-style: italic;">
  {{ page.sayfa1 }} sayfa
 </div>

<div style="font-size: 50%; width: 5%; font-style: italic;" title="reading challenge 2023"> 
  {{ page.pageread1 | times: 100 | divided_by: page.pageall1 }}%
</div>

<div>
  <progress title="{{ page.pageread1 }}/{{ page.pageall1 }}" value="{{ page.pageread1 }}" max="{{ page.pageall1 }}" style="width: 80%;"></progress>
  <span style="font-size: 50%; width: 5%; font-style: italic;" title="reading challenge 2023"> 
    {{ page.pageread1 }}/{{ page.pageall1 }}
  </span>
</div>
<div style="clear: both"></div>
<br />
  <!-- book 2 -->
⁜ {{ page.read | plus: 1 }}

{{ page.booktitle2 }} ({{ page.bookyear2 }})  
_by_ {{ page.author2 }}

<div style="font-size: 50%; width: 5%; font-style: italic;">
  {{ page.sayfa2 }} sayfa
 </div>

<div style="font-size: 50%; width: 5%; font-style: italic;" title="reading challenge 2023"> 
  {{ page.pageread2 | times: 100 | divided_by: page.pageall2 }}%
</div>

<div>
  <progress title="{{ page.pageread2 }}/{{ page.pageall2 }}" value="{{ page.pageread2 }}" max="{{ page.pageall2 }}" style="width: 80%;"></progress>
  <span style="font-size: 50%; width: 5%; font-style: italic;" title="reading challenge 2023"> 
    {{ page.pageread2 }}/{{ page.pageall2 }}
  </span>
</div>
<div style="clear: both"></div>
<br />
  
[🍃](https://www.nonfictionbooks.xyz/now.html "şimdi okuduğum kitaplar")
