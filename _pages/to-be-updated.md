---
layout: page-9
title: "to be updated - short list"
published: true
---

{% assign posts_data = site.posts %}
to be updated: {% assign updated0 = posts_data | where: "update", 'tobeupdated' | size %} {{ updated0 }}  
<br />
{% for post in site.posts %}
{% if post.update == 'tobeupdated' %}
{{ post.num }} <a href="{{ post.url }}">{{ post.title | downcase }}</a>
{% endif %}
{% endfor %}
<br />
{% include update.md %}
