---
layout: page-15
published: true
last_modified_at: 2025-03-31
title: "creativity & expression"
---

{% for post in site.posts %} {% if post.tag == 'CreativityExpression' %}

<p class="cat1"><a href="{{ post.url }}">{{ post.title | downcase }}</a></p>
{% endif %} {% endfor %}
<br />

{% assign creativityexpressiontag = site.posts | where: "tag", "CreativityExpression" | size %}

{{ creativityexpressiontag }}
