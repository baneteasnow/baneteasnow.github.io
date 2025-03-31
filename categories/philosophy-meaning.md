---
layout: page-15
published: true
last_modified_at: 2025-03-31
title: "philosophy & meaning"
---

{% for post in site.posts %} {% if post.tag == 'PhilosophyMeaning' %}

<p class="cat1"><a href="{{ post.url }}">{{ post.title | downcase }}</a></p>
{% endif %} {% endfor %}
<br />

{% assign philosophymeaningtag = site.posts | where: "tag", "PhilosophyMeaning" | size %}

{{ philosophymeaningtag }}
