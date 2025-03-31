---
layout: page-15
published: true
last_modified_at: 2025-03-31
title: "simple living & everyday comforts"
---

{% for post in site.posts %} {% if post.tag == 'SimpleLivingEverydayComforts' %}

<p class="cat1"><a href="{{ post.url }}">{{ post.title | downcase }}</a></p>
{% endif %} {% endfor %}
<br />

{% assign simplelivingeverydaycomfortstag = site.posts | where: "tag", "SimpleLivingEverydayComforts" | size %}

{{ simplelivingeverydaycomfortstag }}
