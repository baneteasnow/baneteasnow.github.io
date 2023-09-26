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
{% assign posts_by_month = {} %}

{% for post in site.posts %}
    {% capture post_month %}{{ post.date | date: "%B %Y" }}{% endcapture %}
    {% if posts_by_month[post_month] %}
        {% assign posts_by_month[post_month] = posts_by_month[post_month] | plus: 1 %}
    {% else %}
        {% assign posts_by_month[post_month] = 1 %}
    {% endif %}
{% endfor %}

{% for month in posts_by_month %}
    <li>{{ month }}: {{ posts_by_month[month] }} posts</li>
{% endfor %}
</ul>

[🍃](https://www.nonfictionbooks.xyz/now.html "şimdi okuduğum kitaplar")
