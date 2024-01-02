---
layout: page-9
title: "kategoriler"
published: true
---

{% for post in site.posts %}
{% if post.update == 'tobeupdated' %}
<a href="{{ post.url }}">{{ post.title | downcase }}</a>
{% endif %}
{% endfor %}
