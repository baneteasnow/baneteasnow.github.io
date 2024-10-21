---
layout: page-9
title: "to be updated - long list"
published: true
---

{% assign posts_data = site.posts %}
update: {% assign allposts = posts_data | size %} {% assign tobeupdated = posts_data | where: "update", "tobeupdated" | size %} {% assign done = posts_data | where: "update", "done" | size %} {{ allposts | minus: done }}  
to be updated: {{ tobeupdated }}  
done: {{ done }}  
n/a: {% assign na = posts_data | where: "update", "n/a" | size %} {{ na }}  
nil: {{ allposts | minus: done | minus: tobeupdated | minus: na }}  
<br />
all: {{ allposts }}  
<br />
{% for post in site.posts %}
{% if post.update == 'tobeupdated' or post.update == nil or post.update == 'n/a' %}
{{ post.num }} <a href="{{ post.url }}">{{ post.title | downcase }}</a>
{% endif %}
{% endfor %}
<br />
{% include update.md %}
