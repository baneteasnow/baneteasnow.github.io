---
layout: page-15
published: true
last_modified_at: 2025-03-31
title: "personal growth & productivity"
---

{% for post in site.posts %} {% if post.tag == 'PersonalGrowthProductivity' %}

<p class="cat1"><a href="{{ post.url }}">{{ post.title | downcase }}</a></p>
{% endif %} {% endfor %}
<br />

{% assign personalgrowthproductivitytag = site.posts | where: "tag", "PersonalGrowthProductivity" | size %}

{{ personalgrowthproductivitytag }}
