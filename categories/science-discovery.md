---
layout: page-15
published: true
last_modified_at: 2025-03-31
title: "science & discovery"
---

{% for post in site.posts %} {% if post.tag == 'ScienceDiscovery' %}

<p class="cat1"><a href="{{ post.url }}">{{ post.title | downcase }}</a></p>
{% endif %} {% endfor %}
<br />

{% assign sciencediscoverytag = site.posts | where: "tag", "ScienceDiscovery" | size %}

{{ sciencediscoverytag }}
