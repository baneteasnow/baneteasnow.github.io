---
layout: page-15
published: true
last_modified_at: 2025-03-31
title: "biography & life stories"
---

{% for post in site.posts %} {% if post.tag == 'BiographyLifeStories' %}

<p class="cat1"><a href="{{ post.url }}">{{ post.title | downcase }}</a></p>
{% endif %} {% endfor %}
<br />

{% assign biographylifestoriestag = site.posts | where: "tag", "BiographyLifeStories" | size %}

{{ biographylifestoriestag }}
