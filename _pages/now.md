---
# {{ 200 | times: 5 | divided_by: 100 }}
# {% include postcountbymonth.html %}
# Here's a sentence with a footnote. [^aaa]
# [^aaa]: This is the footnote.
# term
# : definition
layout: page
title: şimdi okuduğum kitaplar
last_modified_at: 2023-10-11
published: true
read: 54
all: 336
booktitle: The Unthinkable
bookyear: 2013
author: "Amanda Ripley"
sayfa: 336
---

⁜ 74

{{ page.booktitle }} ({{ page.bookyear }})  
_by_ {{ page.author }}  
{{ page.sayfa }} sayfa

<div style="font-size: 50%; width: 5%; font-style: italic;" title="reading challenge 2023"> 
  {{ page.read | times: 100 | divided_by: page.all }}%
</div>

<div>
  <progress title="{{ page.read }}/{{ page.all }}" value="{{ page.read }}" max="{{ page.all }}" style="width: 80%;"></progress>
  <span style="font-size: 50%; width: 5%; font-style: italic;" title="reading challenge 2023"> {{ page.read }}/{{ page.all }}</span>
</div>
<div style="clear: both"></div>
<br />

[🍃](https://www.nonfictionbooks.xyz/now.html "şimdi okuduğum kitaplar")
