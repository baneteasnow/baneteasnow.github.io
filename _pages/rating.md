---
layout: page-6
published: true
last_modified_at: 2023-01-08
title: "rating"
---

| ⁜ |  |
|:---:|:---- |
   {%- assign posts = site.posts -%}
         {%- for post in site.posts -%}
            {%- if post.category != 'book3'-%}
 | <span style="font-size: 100%; cursor: default; color: #777;" class="link1"> 
       {{ post.title }} |

   {%- if post.rating == '1' -%}
 &#9733; &#9734; &#9734; &#9734; &#9734;
 {%- elsif post.rating == '2' -%}
 &#9733; &#9733; &#9734; &#9734; &#9734;
 {%- elsif post.rating == '3' -%}
 &#9733; &#9733; &#9733; &#9734; &#9734;
 {%- elsif post.rating == '4' -%}
 &#9733; &#9733; &#9733; &#9733; &#9734;
 {%- elsif post.rating == '5' -%}
 &#9733; &#9733; &#9733; &#9733; &#9733;
 {%- else -%}
 &#9734; &#9734; &#9734; &#9734; &#9734;
 {%- endif -%} </span>|
   <div style="clear: both;"></div>
       
             {%- endif -%}
        {%- endfor -%} 
