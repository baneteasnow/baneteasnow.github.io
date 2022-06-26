---
layout: page-5
title: 'instagram'
published: true
last_modified_at: 2022-06-26
---

        {% for post in site.posts %}
           {% if post.instagram == 'no' and post.instagram != nil and post.instagram != "-"%}
       <a href="{{ post.url }}"><img src="{{ post.image }}" style="float: left; height: 70%; margin: 0 0 1% 1%; width: 20%;" /></a>
            {% endif %}
        {% endfor %} 
    <br />
<div style="clear: both;"></div>
<br />
