---
layout: page-9
title: "to be updated - long list"
published: true
---

{% assign posts_data = site.posts %}
to be updated: {% assign updated0 = posts_data | where: "update", 'tobeupdated' | size %} {% assign updated1 = posts_data | where: "update", nil | size %} {{ updated0 | plus: updated1 }}

{% for post in site.posts %}
{% if post.update == 'tobeupdated' or post.update == nil or post.update == 'done' %}
{{ post.num }} <a href="{{ post.url }}">{{ post.title | downcase }}</a>
{% endif %}
{% endfor %}
<br />
{% include update.md %}
