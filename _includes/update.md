done...  
{% assign posts_info = site.posts %}
done: {% assign updatedone = posts_info | where: "update", "done" | size %} {{ updatedone }}

{% for post in site.posts %}
{% if post.update == 'updatedone' %}
{{ post.num }} <a href="{{ post.url }}">{{ post.title | downcase }}</a>
{% endif %}
{% endfor %}
