---
layout: page-15
published: true
last_modified_at: 2025-03-31
title: "history & political thought"
---

{% for post in site.posts %} {% if post.tag == 'HistoryPoliticalThought' %}

<p class="cat1"><a href="{{ post.url }}">{{ post.title | downcase }}</a></p>
{% endif %} {% endfor %}
<br />

{% assign historypoliticalthoughttag = site.posts | where: "tag", "HistoryPoliticalThought" | size %}

{{ historypoliticalthoughttag }}
