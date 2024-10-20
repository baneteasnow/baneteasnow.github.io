---
layout: page-9
title: "to be updated - long list"
published: true
---

{% assign posts_data = site.posts %}
to be updated: {% assign updated = posts_data | where: "update", "tobeupdated", nil, "done" | size %} {{ updated }}

{% for post in site.posts %}
{% if post.update == 'tobeupdated' or post.update == nil or post.update == 'done' %}
{{ post.num }} <a href="{{ post.url }}">{{ post.title | downcase }}</a>
{% endif %}
{% endfor %}
<br />
{% include update.md %}
