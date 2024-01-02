---
layout: page-9
title: "to be updated"
published: true
---

{% assign posts_data = site.posts %}
to be updated: {% assign updated = posts_data | where: "update", "tobeupdated" | size %} {{ updated }}

{% for post in site.posts %}
{% if post.update == 'tobeupdated' %}
{{ post.num }} <a href="{{ post.url }}">{{ post.title | downcase }}</a>
{% endif %}
{% endfor %}
<br />
{% assign posts_info = site.posts %}
done: {% assign updatedone = posts_info | where: "update", "done" | size %} {{ updatedone }}

{% for post in site.posts %}
{% if post.update == 'updatedone' %}
{{ post.num }} <a href="{{ post.url }}">{{ post.title | downcase }}</a>
{% endif %}
{% endfor %}
