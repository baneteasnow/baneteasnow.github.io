---
# {{ 200 | times: 5 | divided_by: 100 }}
# {% include postcountbymonth.html %}
# Here's a sentence with a footnote. [^aaa]
# [^aaa]: This is the footnote.
# term
# : definition
layout: page
title: şimdi okuduğum kitaplar
last_modified_at: 2023-12-05
published: true
# 1
booktitle1: "Know My Name - A Memoir"
bookyear1: 2019
author1: "Chanel Miller"
sayfa1: 310
pageread1: 310
# 2
booktitle2: "Blockbusters"
bookyear2: 2013
author2: "Anita Elberse"
sayfa2: 321
pageread2: 23
# 3
read: 75
---

⁜ {{ page.read | plus: 4 }}

{{ page.booktitle1 }} ({{ page.bookyear1 }})  
_by_ {{ page.author1 }}

<div style="font-size: 50%; font-style: italic;">
   {{ page.sayfa1 }} sayfa
 </div>

 <div style="font-size: 50%; font-style: italic;" title="reading challenge 2023"> 
   {{ page.pageread1 | times: 100 | divided_by: page.sayfa1 }}%
 </div>

 <div>
   <progress title="{{ page.pageread1 }}/{{ page.sayfa1 }}" value="{{ page.pageread1 }}" max="{{ page.sayfa1 }}" style="width: 80%;"></progress>
   <span style="font-size: 50%; font-style: italic;" title="reading challenge 2023"> 
     {{ page.pageread1 }}/{{ page.sayfa1 }}
   </span>
 </div>
 <div style="clear: both"></div>
 <br />

⁜ {{ page.read | plus: 3 }}

{{ page.booktitle2 }} ({{ page.bookyear2 }})  
_by_ {{ page.author2 }}

<div style="font-size: 50%; font-style: italic;">
  {{ page.sayfa2 }} sayfa
 </div>

<div style="font-size: 50%; font-style: italic;" title="reading challenge 2023"> 
  {{ page.pageread2 | times: 100 | divided_by: page.sayfa2 }}%
</div>

<div>
  <progress title="{{ page.pageread2 }}/{{ page.sayfa2 }}" value="{{ page.pageread2 }}" max="{{ page.sayfa2 }}" style="width: 80%;"></progress>
  <span style="font-size: 50%; font-style: italic;" title="reading challenge 2023"> 
    {{ page.pageread2 }}/{{ page.sayfa2 }}
  </span>
</div>
<div style="clear: both"></div>
<br />
  
[🍃](https://www.nonfictionbooks.xyz/now.html "şimdi okuduğum kitaplar")
