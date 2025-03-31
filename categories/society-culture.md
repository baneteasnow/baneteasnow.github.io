---
layout: page-15
published: true
last_modified_at: 2025-03-31
title: "society & culture"
---

{% for post in site.posts %} {% if post.tag == 'SocietyCulture' %}

<p class="cat1"><a href="{{ post.url }}">{{ post.title | downcase }}</a></p>
{% endif %} {% endfor %}
<br />

{% assign societyculturetag = site.posts | where: "tag", "SocietyCulture" | size %}

{{ societyculturetag }}
