---
layout: page-3
published: true
last_modified_at: 2021-07-16
title: "#kitaplar | tek cümlede"
---

<div>
  {% for post in site.posts %}
    <p>
  <div class="link1"> # <a href="{{ post.url }}">{{ post.title }}</a> </div>
      <p>{{ post.description }}</p>
    </p>
  {% endfor %}
</div>
