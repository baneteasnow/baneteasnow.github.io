---
# {{ 200 | times: 5 | divided_by: 100 }}
# {% include postcountbymonth.html %}
# Here's a sentence with a footnote. [^aaa]
# [^aaa]: This is the footnote.
# term
# : definition
layout: page
title: şimdi okuduğum kitaplar
last_modified_at: 2024-09-28
published: true

# 1
booktitle1: "The Age of Fitness"
bookyear1: 2024
author1: "Jürgen Martschukat"
sayfa1: 256
pageread1: 9

# 2
booktitle2: "Notes from an Apocalypse"
bookyear2: 2024
author2: "Mark O'Connell"
sayfa2: 184
pageread2: 61

# 3
booktitle3: "Yeniden"
bookyear3: 2023
author3: "Zeyneb Uras"
sayfa3: 136
pageread3: 22

# 4
booktitle4: "I Can Do It"
bookyear4: 2019
author4: "Louise L. Hay"
sayfa4: 80
pageread4: 1

# 5
booktitle5: "The New Age of Catastrophe"
bookyear5: 2024
author5: "Alex Callinicos"
sayfa5: 328
pageread5: 1

# 6
booktitle5: "To Be a Machine"
bookyear5: 2018
author5: "Alex Callinicos"
sayfa5: 272
pageread5: 1

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
read: 40
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

<br />
<div style="clear: both"></div>

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

<br />

 <div style="clear: both"></div>
 <br />

⁜ {{ page.read | plus: 4 }}

{{ page.booktitle4 }} ({{ page.bookyear4 }})  
_by_ {{ page.author4 }}

<div style="font-size: 50%; font-style: italic;">
   {{ page.sayfa4 }} sayfa
 </div>

 <div style="font-size: 50%; font-style: italic;" title="reading challenge 2024"> 
   {{ page.pageread4 | times: 100 | divided_by: page.sayfa4 }}%
 </div>

 <div>
   <progress title="{{ page.pageread4 }}/{{ page.sayfa4 }}" value="{{ page.pageread4 }}" max="{{ page.sayfa4 }}" style="width: 80%;"></progress>
   <span style="font-size: 50%; font-style: italic;" title="reading challenge 2024"> 
     {{ page.pageread4 }}/{{ page.sayfa4 }}
   </span>
 </div>

<br />

⁜ {{ page.read | plus: 5 }}

{{ page.booktitle5 }} ({{ page.bookyear5 }})  
_by_ {{ page.author5 }}

<div style="font-size: 50%; font-style: italic;">
   {{ page.sayfa5 }} sayfa
 </div>

 <div style="font-size: 50%; font-style: italic;" title="reading challenge 2024"> 
   {{ page.pageread5 | times: 100 | divided_by: page.sayfa5 }}%
 </div>

 <div>
   <progress title="{{ page.pageread5 }}/{{ page.sayfa5 }}" value="{{ page.pageread5 }}" max="{{ page.sayfa5 }}" style="width: 80%;"></progress>
   <span style="font-size: 50%; font-style: italic;" title="reading challenge 2024"> 
     {{ page.pageread5 }}/{{ page.sayfa5 }}
   </span>
 </div>

<br />

⁜ {{ page.read | plus: 6 }}

{{ page.booktitle6 }} ({{ page.bookyear6 }})  
_by_ {{ page.author6 }}

<div style="font-size: 50%; font-style: italic;">
   {{ page.sayfa6 }} sayfa
 </div>

 <div style="font-size: 50%; font-style: italic;" title="reading challenge 2024"> 
   {{ page.pageread6 | times: 100 | divided_by: page.sayfa6 }}%
 </div>

 <div>
   <progress title="{{ page.pageread6 }}/{{ page.sayfa6 }}" value="{{ page.pageread6 }}" max="{{ page.sayfa6 }}" style="width: 80%;"></progress>
   <span style="font-size: 50%; font-style: italic;" title="reading challenge 2024"> 
     {{ page.pageread6 }}/{{ page.sayfa6 }}
   </span>
 </div>

<br />
<div style="clear: both"></div>
[🍃](https://www.next52books.com/now.html "şimdi okuduğum kitaplar")
