---
layout: page-9
title: "to be updated - short list"
published: true
---

{% assign posts_data = site.posts %}
to be updated: {% assign updated = posts_data | where: "update", nil | size %} {{ updated }}
n/a: {% assign updated0 = posts_data | where: "update", "n/a" | size %} {{ updated0 }}
done: {% assign updated1 = posts_data | where: "update", "done" | size %} {{ updated1 }}

{% for post in site.posts %}
{% if post.update == 'tobeupdated' %}
{{ post.num }} <a href="{{ post.url }}">{{ post.title | downcase }}</a>
{% endif %}
{% endfor %}
<br />
{% include update.md %}
