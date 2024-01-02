---
layout: page-9
title: "to be updated"
published: true
---

{% assign posts_data = site.posts %}
{% assign updated = posts_data | where: "updated", "tobeupdated" | size %} {{ updated }}

{% for post in site.posts %}
{% if post.update == 'tobeupdated' %}
{{ post.num }} <a href="{{ post.url }}">{{ post.title | downcase }}</a>
{% endif %}
{% endfor %}
