---
layout: page-15
published: true
last_modified_at: 2025-03-31
title: "technology & the digital world"
---

{% for post in site.posts %} {% if post.tag == 'TechnologyTheDigitalWorld' %}

<p class="cat1"><a href="{{ post.url }}">{{ post.title | downcase }}</a></p>
{% endif %} {% endfor %}
<br />

{% assign technologythedigitalworldtag = site.posts | where: "tag", "TechnologyTheDigitalWorld" | size %}

{{ technologythedigitalworldtag }}
