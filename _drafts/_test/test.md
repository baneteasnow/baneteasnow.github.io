<h4>{{ site.posts.first.title }}</h4>
{{ site.posts.first.content }}
<!-- {{ site.posts.last.url }} -->
<span style="font-size: 85%; color: #777;">
  <i>
    {{ site.posts.first.kitap }}
      <br /> 
    {{ site.posts.first.tr }}
      <br />   
    {{ site.posts.first.yazar }}
      <br /> 
    {{ site.posts.first.yil }}
      <br />
    {{ site.posts.first.sayfa }} sayfa 
      <br />
    </span>
    <span class="link1" style="font-size: 85%;">
      <a href="{{ site.posts.first.goodreads }}" target="_blank">goodreads</a>
    </span>
  </i>
