---
layout: page-15
published: true
last_modified_at: 2025-03-31
title: "business & economics"
---

{% for post in site.posts %} {% if post.tag contains 'BusinessEconomics' %}

<p class="cat1"><a href="{{ post.url }}">{{ post.title | downcase }}</a></p>
{% endif %} {% endfor %}
<br />

{% assign businesseconomicstag = site.posts | where: "tag", "BusinessEconomics" | size %}

{{ businesseconomicstag }}
