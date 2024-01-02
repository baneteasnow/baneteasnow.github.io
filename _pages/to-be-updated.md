---
layout: page-9
title: "to be updated"
published: true
---

{% assign posts_data = site.posts %}
to be updated: {% assign updated = posts_data | where: "update", "tobeupdated" | size %} {{ updated }}

done: {% assign updateddone = posts_data | where: "update", "done" | size %} {{ updateddone }}

{% for post in site.posts %}
{% if post.update == 'tobeupdated' %}
{{ post.num }} <a href="{{ post.url }}">{{ post.title | downcase }}</a>
{% endif %}
{% endfor %}
<br />
{% for post in site.posts %}
{% if post.update == 'updateddone' %}
{{ post.num }} <a href="{{ post.url }}">{{ post.title | downcase }}</a>
{% endif %}
{% endfor %}
