---
layout: page-15
published: true
last_modified_at: 2025-03-31
title: "Work & Career"
---

{% for post in site.posts %} {% if post.tag == 'WorkCareer' %}

<p class="cat1"><a href="{{ post.url }}">{{ post.title | downcase }}</a></p>
{% endif %} {% endfor %}
<br />

{% assign workcareertag = site.posts | where: "tag", "WorkCareer" | size %}

{{ workcareertag }}
