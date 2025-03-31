---
layout: page-15
published: true
last_modified_at: 2025-03-31
title: "environment & sustainable living"
---

{% for post in site.posts %} {% if post.tag == 'EnvironmentSustainableLiving' %}

<p class="cat1"><a href="{{ post.url }}">{{ post.title | downcase }}</a></p>
{% endif %} {% endfor %}
<br />

{% assign environmentsustainablelivingtag = site.posts | where: "tag", "EnvironmentSustainableLiving" | size %}

{{ environmentsustainablelivingtag }}
