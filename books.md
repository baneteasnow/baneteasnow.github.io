---
layout: page-3
published: true
last_modified_at: 2021-07-16
title: "#books"
---

<div>
  {% for post in site.posts %}
     <p>
  {% if post.eng %}
   <div class="link1">  
    <a id="{{ post.url }}">{{ post.kitap }}</a>
  </div>
      <p>{{ post.eng }}</p>
   
  {% else %}
    <div style="visibility: hidden;"></div>
{% endif %}
</p>
  
  {% endfor %}
</div>
