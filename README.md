# NoDoubtBadger
Landing page for friend of mine

# About this page
Landing content has max-width 1200px, min-width 900px.
Media-queries are not used, thus browser adapts page itself. Width of mobile page is 980px.

# How to resize images
Images on page itself have to be resized depending oh their maximum width. Landing has max-width 1200px. Open it in full-mode and check the current width of img. As browsers performs auto resize, you can rely on its choice. 
Than resize image to this width manually and update path. Page view remains as is, but loading speed must increase.

Sometimes you can choose to use height instead of width.

You can choose same sizes for images in same grid.

You can use https://www.iloveimg.com/ to resize in bunches.

## How to resize modal images

Mobile and tablet full images are same; resize them to width 980px.
Desktop images are smaller, resize them to 800h.

## How to add new image src

Here is img tag.

```
  <img src="./images/charactr-concept/main/800h/Mira.png"
  data-srcmob="./images/charactr-concept/full-mobile/Mira_full.png"
  data-src="./images/charactr-concept/full-desktop/Mira_full.png" />
```

- src - path to use, when show image on page initially,
- data-srcmob - path to use, when show modal image on mobile devices,
- data-src - path to use in modal on desktop.


# Note

We should use some service with dynamic resizing, to not make all work manually. 
