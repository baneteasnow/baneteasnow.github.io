---
# Here's a sentence with a footnote. [^aaa]
# [^aaa]: This is the footnote.
# term
# : definition
layout: page
title: şimdi okuduğum kitaplar
last_modified_at: 2023-09-21
published: true
---

⁜ 71  

Kimbilir (2020)  
_by_ Engin Gectan  
142 sayfa  

⁜ 70  

Virtual Society (2023)  
_by_ Herman Narula  
232 sayfa  

{{ 200 | times: 5 | divided_by: 100 }}

<ul>
{% for post in site.posts %}
  {% assign currentdate = post.date | date: "%B %Y" %}
  {% if currentdate != date %}
    <li id="y{{currentdate}}">{{ currentdate }}</li>
    {% assign date = currentdate %} 
  {% endif %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>


[🍃](https://www.nonfictionbooks.xyz/now.html "şimdi okuduğum kitaplar")
