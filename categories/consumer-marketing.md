---
layout: page-15
published: true
last_modified_at: 2025-03-31
title: "Consumer & Marketing"
---

{% for post in site.posts %} {% if post.tag == 'ConsumerMarketing' %}

<p class="cat1"><a href="{{ post.url }}">{{ post.title | downcase }}</a></p>
{% endif %} {% endfor %}
<br />

{% assign consumermarketingtag = site.posts | where: "tag", "ConsumerMarketing" | size %}

{{ consumermarketingtag }}
