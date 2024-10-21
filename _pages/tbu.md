---
layout: page-9
title: "to be updated - long list"
published: true
---

{% assign posts_data = site.posts %}
to be updated: {% assign updated0 = posts_data | where: "update", 'tobeupdated' | size %} {{ updated0 }}

{% for post in site.posts %}
{% if post.update == 'tobeupdated' or post.update == nil or post.update == 'done' %}
{{ post.num }} <a href="{{ post.url }}">{{ post.title | downcase }}</a>
{% endif %}
{% endfor %}
<br />
{% include update.md %}

{% assign people = site.data.people | where_exp: "someone", "someone.election_2020.office == 'U.S. President' and someone.election_2020.party == 'Democratic'" | sort: "last_names" %}
