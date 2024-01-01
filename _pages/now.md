---
# {{ 200 | times: 5 | divided_by: 100 }}
# {% include postcountbymonth.html %}
# Here's a sentence with a footnote. [^aaa]
# [^aaa]: This is the footnote.
# term
# : definition
layout: page
title: şimdi okuduğum kitaplar
last_modified_at: 2023-12-30
published: true
# 1
booktitle1: "Self-Made Man"
bookyear1: 2006
author1: "Norah Vincent"
sayfa1: 290
pageread1: 290
# 2
booktitle2: "Aşka Övgü"
bookyear2: 2023
author2: "Alain Badiou, Nicolas Truong"
sayfa2: 72
pageread2: 1
#
#
#
# ⁜ {{ page.read | plus: 4 }}
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
# 3
read: 81
---

⁜ {{ page.read | plus: 1 }}

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

<br />

⁜ {{ page.read | plus: 2 }}

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
