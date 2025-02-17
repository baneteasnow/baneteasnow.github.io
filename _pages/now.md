---
# {{ 200 | times: 5 | divided_by: 100 }}
# {% include postcountbymonth.html %}
# Here's a sentence with a footnote. [^aaa]
# [^aaa]: This is the footnote.
# term
# : definition
#
# format: book, ebook, audiobook
read: 15
#
layout: page
title: şimdi okuduğum kitaplar
last_modified_at: 2025-02-17
published: true
#
# 1
booktitle1: "Stuff Every Coffee Lover Should Know"
bookyear1: 2024
author1: "Candace Rose Rardon"
sayfa1: 184
format1: reading as a book
pageread1: 34
#
# 2
booktitle2: "Freud Bana Masal Anlatsa"
bookyear2: 2023
author2: "Aydın Parmaksız"
sayfa2: 208
format2: reading as a book
pageread2: 49
#
# 3
booktitle3: "The Contrarian"
bookyear3: 2021
author3: "Max Chafkin"
sayfa3: 400
format3: reading as an ebook
pageread3: 1
#
# 4
booktitle4: "Rezonans Kanunu"
bookyear4: 2019
author4: "Pierre Franckh"
suresaat4: 4
suredakika4: 45
sayfa4: 285
format4: listening as an audiobook
pageread4: 22
pagereadsaat4: 0
pagereaddakika4: 22
#
# 5
booktitle5: "Yazılar"
bookyear5: 2023
author5: "Doğan Şahin"
sayfa5: 248
format5: reading as a book
pageread5: 118
#
# 6
booktitle6: "Terapistin İkilemi"
bookyear6: 2024
author6: "Elvin Aydın Keleş"
sayfa6: 224
format6: reading as a book
pageread6: 1
#
# 7
booktitle7: "The Naked Lady Who Stood on Her Head"
bookyear7: 2018
author7: "Gary Small, Gigi Vorgan"
sayfa7: 336
format7: reading as a book
pageread7: 1
#
# 8
booktitle8: "Mating in Captivity"
bookyear8: 2025
author8: "Esther Perel"
sayfa8: 288
format8: reading as a book
pageread8: 1
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
# <div style="font-size: 50%; font-style: italic;" title="reading challenge 2025">
#   {{ page.pageread2 | times: 100 | divided_by: page.sayfa2 }}%
# </div>
#
# <div>
#   <progress title="{{ page.pageread2 }}/{{ page.sayfa2 }}" value="{{ page.pageread2 }}" max="{{ page.sayfa2 }}" style="width: 80%;"></progress>
#   <span style="font-size: 50%; font-style: italic;" title="reading challenge 2025">
#     {{ page.pageread2 }}/{{ page.sayfa2 }}
#   </span>
# </div>
# <div style="clear: both"></div>
# <br />
#
#
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

⁜ {{ page.read | plus: 2 }}

{{ page.booktitle2 }} ({{ page.bookyear2 }})  
_by_ {{ page.author2 }}

<div style="font-size: 50%; font-style: italic;"> {{ page.format2 }} </div>

  <div style="font-size: 50%; font-style: italic;">
  {{ page.sayfa2 }} sayfa
  </div>

  <div style="font-size: 50%; font-style: italic;" title="reading challenge 2025">
  {{ page.pageread2 | times: 100 | divided_by: page.sayfa2 }}%
  </div>

  <div>
    <progress title="{{ page.pageread2 }}/{{ page.sayfa2 }}" value="{{ page.pageread2 }}" max="{{ page.sayfa2 }}" style="width: 80%;"></progress>
      <span style="font-size: 50%; font-style: italic;" title="reading challenge 2025">
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

  <div style="font-size: 50%; font-style: italic;" title="reading challenge 2025">
  {{ page.pageread3 | times: 100 | divided_by: page.sayfa3 }}%
  </div>

  <div>
    <progress title="{{ page.pageread3 }}/{{ page.sayfa3 }}" value="{{ page.pageread3 }}" max="{{ page.sayfa3 }}" style="width: 80%;"></progress>
      <span style="font-size: 50%; font-style: italic;" title="reading challenge 2025">
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
  {{ page.suresaat4 }} saat {{ page.suredakika4 }} dakika
  </div>

  <div style="font-size: 50%; font-style: italic;" title="reading challenge 2025">
  {{ page.pageread4 | times: 100 | divided_by: page.sayfa4 }}%
  </div>

  <div>
    <progress title="{{ page.pageread4 }}/{{ page.sayfa4 }}" value="{{ page.pageread4 }}" max="{{ page.sayfa4 }}" style="width: 80%;"></progress>
      <span style="font-size: 50%; font-style: italic;" title="reading challenge 2025">
      {{ page.pagereadsaat4 }}"{{ page.pagereaddakika4 }}'/{{ page.suresaat4 }}"{{ page.suredakika4 }}'
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

  <div style="font-size: 50%; font-style: italic;" title="reading challenge 2025">
  {{ page.pageread5 | times: 100 | divided_by: page.sayfa5 }}%
  </div>

  <div>
    <progress title="{{ page.pageread5 }}/{{ page.sayfa5 }}" value="{{ page.pageread5 }}" max="{{ page.sayfa5 }}" style="width: 80%;"></progress>
      <span style="font-size: 50%; font-style: italic;" title="reading challenge 2025">
      {{ page.pageread5 }}/{{ page.sayfa5 }}
      </span>
  </div>

  <br />
  <div style="clear: both"></div>

⁜ {{ page.read | plus: 6 }}

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

⁜ {{ page.read | plus: 7 }}

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

⁜ {{ page.read | plus: 8 }}

{{ page.booktitle8 }} ({{ page.bookyear8 }})  
_by_ {{ page.author8 }}

<div style="font-size: 50%; font-style: italic;"> {{ page.format8 }} </div>

  <div style="font-size: 50%; font-style: italic;">
  {{ page.sayfa8 }} sayfa
  </div>

  <div style="font-size: 50%; font-style: italic;" title="reading challenge 2025">
  {{ page.pageread8 | times: 100 | divided_by: page.sayfa8 }}%
  </div>

  <div>
    <progress title="{{ page.pageread8 }}/{{ page.sayfa8 }}" value="{{ page.pageread8 }}" max="{{ page.sayfa8 }}" style="width: 80%;"></progress>
      <span style="font-size: 50%; font-style: italic;" title="reading challenge 2025">
      {{ page.pageread8 }}/{{ page.sayfa8 }}
      </span>
  </div>

  <br />
  <div style="clear: both"></div>

  <br />
_Through the Year_

{% include image-gallery.html folder="/assets/through-the-year" %}

  <div style="clear: both"></div>
[🍃](https://www.next52books.com/now.html "şimdi okuduğum kitaplar")
