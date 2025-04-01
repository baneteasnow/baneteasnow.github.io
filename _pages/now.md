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
# 1 starts
# booktitle1: "The Contrarian"
# bookyear1: 2021
# author1: "Max Chafkin"
# sayfa1: 400
# format1: reading as an ebook
# pageread1: 1
#
# ⁜ {{ page.read | plus: 1 }}
# {{ page.booktitle1 }} ({{ page.bookyear1 }})
# _by_ {{ page.author1 }}
# <div style="font-size: 50%; font-style: italic;"> {{ page.format1 }} </div>
#  <div style="font-size: 50%; font-style: italic;">
#  {{ page.sayfa1 }} sayfa
#  </div>
#  <div style="font-size: 50%; font-style: italic;" title="reading challenge 2025">
#  {{ page.pageread1 | times: 100 | divided_by: page.sayfa1 }}%
#  </div>
#  <div>
#    <progress title="{{ page.pageread1 }}/{{ page.sayfa1 }}" value="{{ page.pageread1 }}" max="{{ page.sayfa1 }}" style="width: 80%;"></progress>
#      <span style="font-size: 50%; font-style: italic;" title="reading challenge 2025">
#      {{ page.pageread1 }}/{{ page.sayfa1 }}
#      </span>
#  </div>
#  <br />
#  <div style="clear: both"></div>
# 1 ends
#
# 2 starts
# booktitle2: "Rezonans Kanunu"
# bookyear2: 2019
# author2: "Pierre Franckh"
# suresaat2: 4
# suredakika2: 45
# sayfa2: 285
# format2: listening as an audiobook
# pageread2: 22
# pagereadsaat2: 0
# pagereaddakika2: 22
#
# ⁜ {{ page.read | plus: 2 }}
# {{ page.booktitle2 }} ({{ page.bookyear2 }})
# _by_ {{ page.author2 }}
# <div style="font-size: 50%; font-style: italic;"> {{ page.format2 }} </div>
#  <div style="font-size: 50%; font-style: italic;">
#  {{ page.suresaat2 }} saat {{ page.suredakika2 }} dakika
#  </div>
#  <div style="font-size: 50%; font-style: italic;" title="reading challenge 2025">
#  {{ page.pageread2 | times: 100 | divided_by: page.sayfa2 }}%
#  </div>
#  <div>
#    <progress title="{{ page.pageread2 }}/{{ page.sayfa2 }}" value="{{ page.pageread2 }}" max="{{ page.sayfa2 }}" style="width: 80%;"></progress>
#      <span style="font-size: 50%; font-style: italic;" title="reading challenge 2025">
#      {{ page.pagereadsaat2 }}"{{ page.pagereaddakika2 }}'/{{ page.suresaat2 }}"{{ page.suredakika2 }}'
#      </span>
#  </div>
#  <br />
#  <div style="clear: both"></div>
# 2 ends
#
#
#
# 1 = ebook
# 2 = audiobook
# 3,4,5,... = book
#
read: 27
#
layout: page
title: şimdi okuduğum kitaplar
last_modified_at: 2025-04-01
published: true
#
# 1
booktitle1: "The Contrarian"
bookyear1: 2021
author1: "Max Chafkin"
sayfa1: 400
format1: reading as an ebook
pageread1: 1
#
# 2
booktitle2: "Rezonans Kanunu"
bookyear2: 2019
author2: "Pierre Franckh"
suresaat2: 4
suredakika2: 45
sayfa2: 285
format2: listening as an audiobook
pageread2: 22
pagereadsaat2: 0
pagereaddakika2: 22
#
# 3
booktitle3: "A Year to Change Your Mind"
bookyear3: 2025
author3: "Lucy Maddox"
sayfa3: 256
format3: reading as a book
pageread3: 1
#
# 4
booktitle4: "Terapistin İkilemi"
bookyear4: 2024
author4: "Elvin Aydın Keleş"
sayfa4: 224
format4: reading as a book
pageread4: 224
#
# 5
booktitle5: "Didik Didik Freud"
bookyear5: 2022
author5: "Serol Teber, Şenol Ayla"
sayfa5: 256
format5: reading as a book
pageread5: 1
#
# 6
booktitle6: "When You're Ready, This Is How You Heal"
bookyear6: 2023
author6: "Brianna Wiest"
sayfa6: 280
format6: reading as a book
pageread6: 1
#
# 7
booktitle7: "Metabolical"
bookyear7: 2025
author7: "Robert H. Lustig"
sayfa7: 400
format7: reading as a book
pageread7: 1
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
  {{ page.suresaat2 }} saat {{ page.suredakika2 }} dakika
  </div>
  <div style="font-size: 50%; font-style: italic;" title="reading challenge 2025">
  {{ page.pageread2 | times: 100 | divided_by: page.sayfa2 }}%
  </div>
  <div>
    <progress title="{{ page.pageread2 }}/{{ page.sayfa2 }}" value="{{ page.pageread2 }}" max="{{ page.sayfa2 }}" style="width: 80%;"></progress>
      <span style="font-size: 50%; font-style: italic;" title="reading challenge 2025">
      {{ page.pagereadsaat2 }}"{{ page.pagereaddakika2 }}'/{{ page.suresaat2 }}"{{ page.suredakika2 }}'
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
  {{ page.sayfa4 }} sayfa
  </div>

  <div style="font-size: 50%; font-style: italic;" title="reading challenge 2025">
  {{ page.pageread4 | times: 100 | divided_by: page.sayfa4 }}%
  </div>

  <div>
    <progress title="{{ page.pageread4 }}/{{ page.sayfa4 }}" value="{{ page.pageread4 }}" max="{{ page.sayfa4 }}" style="width: 80%;"></progress>
      <span style="font-size: 50%; font-style: italic;" title="reading challenge 2025">
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

_[through the year](https://www.next52books.com/through-the-year.html "through the year")_

<div style="clear: both"></div>
[🍃](https://www.next52books.com/now.html "şimdi okuduğum kitaplar")
