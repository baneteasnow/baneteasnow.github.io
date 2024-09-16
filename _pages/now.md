---
# {{ 200 | times: 5 | divided_by: 100 }}
# {% include postcountbymonth.html %}
# Here's a sentence with a footnote. [^aaa]
# [^aaa]: This is the footnote.
# term
# : definition
layout: page
title: şimdi okuduğum kitaplar
last_modified_at: 2024-09-16
published: true
# 1
booktitle1: "The Science of Getting Rich"
bookyear1: 2023
author1: "Wallace D. Wattles"
sayfa1: 94
pageread1: 7
# 2
booktitle2: "The Big Short"
bookyear2: 2011
author2: "Michael Lewis"
sayfa2: 346
pageread2: 15
#
# 3
booktitle3: "The Antisocial Network"
bookyear3: 2023
author3: "Ben Mezrich"
sayfa3: 272
pageread3: 13
#
#
#
# ⁜ {{ page.read | plus: 2 }}
#
# {{ page.booktitle2 }} ({{ page.bookyear2 }})
# _by_ {{ page.author2 }}
#
# <div style="font-size: 50%; font-style: italic;">
#   {{ page.sayfa2 }} sayfa
#  </div>
#
# <div style="font-size: 50%; font-style: italic;" title="reading challenge 2023">
#   {{ page.pageread2 | times: 100 | divided_by: page.sayfa2 }}%
# </div>
#
# <div>
#   <progress title="{{ page.pageread2 }}/{{ page.sayfa2 }}" value="{{ page.pageread2 }}" max="{{ page.sayfa2 }}" style="width: 80%;"></progress>
#   <span style="font-size: 50%; font-style: italic;" title="reading challenge 2023">
#     {{ page.pageread2 }}/{{ page.sayfa2 }}
#   </span>
# </div>
# <div style="clear: both"></div>
# <br />
#
#
read: 36
---

⁜ {{ page.read | plus: 1 }}

{{ page.booktitle1 }} ({{ page.bookyear1 }})  
_by_ {{ page.author1 }}

<div style="font-size: 50%; font-style: italic;">
   {{ page.sayfa1 }} sayfa
 </div>

 <div style="font-size: 50%; font-style: italic;" title="reading challenge 2024"> 
   {{ page.pageread1 | times: 100 | divided_by: page.sayfa1 }}%
 </div>

 <div>
   <progress title="{{ page.pageread1 }}/{{ page.sayfa1 }}" value="{{ page.pageread1 }}" max="{{ page.sayfa1 }}" style="width: 80%;"></progress>
   <span style="font-size: 50%; font-style: italic;" title="reading challenge 2024"> 
     {{ page.pageread1 }}/{{ page.sayfa1 }}
   </span>
 </div>

<br />

 <div style="clear: both"></div>
 <br />

⁜ {{ page.read | plus: 2 }}

{{ page.booktitle2 }} ({{ page.bookyear2 }})  
_by_ {{ page.author2 }}

<div style="font-size: 50%; font-style: italic;">
 {{ page.sayfa2 }} sayfa
</div>

<div style="font-size: 50%; font-style: italic;" title="reading challenge 2024">
 {{ page.pageread2 | times: 100 | divided_by: page.sayfa2 }}%
</div>

<div>
  <progress title="{{ page.pageread2 }}/{{ page.sayfa2 }}" value="{{ page.pageread2 }}" max="{{ page.sayfa2 }}" style="width: 80%;"></progress>
  <span style="font-size: 50%; font-style: italic;" title="reading challenge 2024">
{{ page.pageread2 }}/{{ page.sayfa2 }}
  </span>
</div>
<div style="clear: both"></div>
<br />

⁜ {{ page.read | plus: 3 }}

{{ page.booktitle3 }} ({{ page.bookyear3 }})  
_by_ {{ page.author3 }}

<div style="font-size: 50%; font-style: italic;">
 {{ page.sayfa3 }} sayfa
</div>

<div style="font-size: 50%; font-style: italic;" title="reading challenge 2024">
 {{ page.pageread3 | times: 100 | divided_by: page.sayfa3 }}%
</div>

<div>
  <progress title="{{ page.pageread3 }}/{{ page.sayfa3 }}" value="{{ page.pageread3 }}" max="{{ page.sayfa3 }}" style="width: 80%;"></progress>
  <span style="font-size: 50%; font-style: italic;" title="reading challenge 2024">
{{ page.pageread3 }}/{{ page.sayfa3 }}
  </span>
</div>
<div style="clear: both"></div>
<br />
[🍃](https://www.next52books.com/now.html "şimdi okuduğum kitaplar")
