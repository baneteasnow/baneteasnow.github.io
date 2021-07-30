---
layout: page-9
published: true
last_modified_at: 2021-07-29
title: "kategoriler"
---

* TOC  
{:toc class="toc1"}  

<a name="authors"></a>
### yazarlar  

<a name="malcolm-gladwell"></a>
##### Malcolm Gladwell  

{% for post in site.posts %}
    {% if post.yazar contains 'Malcolm Gladwell' %}
      <p><a href="{{ post.url }}">{{ post.title }}</a></p>
    {% endif %}
  {% endfor %}

<a name="dan-ariely"></a>
##### Dan Ariely

{% for post in site.posts %}
    {% if post.yazar contains 'Malcolm Gladwell' %}
      <p><a href="{{ post.url }}">{{ post.title }}</a></p>
    {% endif %}
  {% endfor %}


### book3  

{% for post in site.posts %}
    {% if post.yil contains '2015' %}
      <p><a href="{{ post.url }}">{{ post.title }}</a></p>
    {% endif %}
  {% endfor %}

### book2  

{% for post in site.categories.book2 %}
<p><a href="{{ post.url }}">{{ post.title }}</a></p>
{% endfor %}

### book  

{% for post in site.categories.book %}
<p><a href="{{ post.url }}">{{ post.title }}</a></p>
{% endfor %}

<br />
