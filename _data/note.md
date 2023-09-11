,
{% for page in site.pages %}
{

      "title" : "{{ page.title | strip_html | escape }}",
      "url"   : "{{ site.baseurl }}{{ page.url }}"

    } {% unless forloop.last %},{% endunless %}

{% endfor %}
,
{% for item in site.data.booksmockdata %}
{

      "title"      : "{{ item.title }}",
      "url"        : "{{ site.baseurl }}/bookstoc#{{ item.title }}",
      "author"     : "{{ item.author }}",
      "year"       : "{{ item.year }}",
      "id"         : "{{ item.id }}",
      "bookshelf"  : "{{ item.bookshelf }}"

    } {% unless forloop.last %},{% endunless %}

{% endfor %}
