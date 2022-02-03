# Pagination Bar

The short script will help you to create simple pagination bar in your html-page. Just specify what is the current page 
number and the total page numbers and enjoy it.

The script will create the list items `<li>` which will the page labels inside all `<ul>` elements on your html-page 
which have `pagination` css-class. By default, these items have `page-item` class.

The element `<a>` with the `page-link` class will be created inside every `page-item` element.

You can use these `pagination`, `page-item` and `page-link` css-classes to decorate your pagination bar.

If you use Bootstrap you have nothing to do additionally.

## Usage

Connect `paginator.js` via `<script>` tag to your html-document.
```html
<script src="paginator.js"></script>
```

Add empty `<ul>` element with `pagination` class into your html-document
```html
<ul class="pagination"></ul>
```

You should also specify the current page number and the total page number. Use `data-current-page` and `data-num-pages` 
attributes respectively for this. For example,
```html
<ul class="pagination" data-current-page="3" data-num-pages="20"></ul>
```
It means the current page is 3rd of 20.

## Options

You can change some parameters if you want. Just add them as `ul`-tag attribute:
* `data-current-page` (**required**) - the current page number
* `data-num-pages` (**required**) - the number of all pages
* `data-links-per-paginator` - set if you want to specify the number of labels on every page (default - 5)
* `data-page-item-classes` - set if you want to specify your own css-class instead of `li.page-item`.
> Use comma `,` as separator here and for other css-classes options described further 
> if you want to specify more than one css-class.

> It has an effect on `li` element.
* `data-page-link-classes` - set if you want to specify your own css-class instead of `a.page-link`
> It has an effect on `a` element.
* `data-link-active-classes` - set if you want to specify your own css-class instead of `li.active`
> It has an effect on `li` element.
* `data-link-disabled-classes` - set if you want to specify your own css-class instead of `li.disabled`
> It has an effect on `li` element.


## Examples

### First page
The active link is at the left position, the first page link and the previous page link are disabled.
```html
<ul class="pagination" data-current-page="1" data-num-pages="20"></ul>
```
![First page](https://github.com/captainKoala/pagination_bar/raw/main/images/first_page.png)

### Second page
There is just one link before the active link
```html
<ul class="pagination" data-current-page="2" data-num-pages="20"></ul>
```
![Second page](https://github.com/captainKoala/pagination_bar/raw/main/images/second_page.png)

### The 5th page of 20
The active link is at the central position as it possible.
```html
<ul class="pagination" data-current-page="5" data-num-pages="20"></ul>
```
![Central position](https://github.com/captainKoala/pagination_bar/raw/main/images/central_position.png)

### Last page
The active link at the last position, the nex page link and the last page link are disabled.
```html
<ul class="pagination" data-current-page="20" data-num-pages="20"></ul>
```
![Central position](https://github.com/captainKoala/pagination_bar/raw/main/images/last_page.png)

### All label on one page
When all page links are placed on the same page, the first and last page links are not created.
```html
<ul class="pagination" data-current-page="1" data-num-pages="5"></ul>
```
![Central position](https://github.com/captainKoala/pagination_bar/raw/main/images/1_of_5.png)

```html
<ul class="pagination" data-current-page="3" data-num-pages="5"></ul>
```
![Central position](https://github.com/captainKoala/pagination_bar/raw/main/images/3_of_5.png)

### Specify the number of page labels

```html
<ul class="pagination" data-current-page="96" data-num-pages="100" data-links-per-paginator="10"></ul>
```
![Central position](https://github.com/captainKoala/pagination_bar/raw/main/images/10_items.png)

```html
<ul class="pagination" data-current-page="96" data-num-pages="100" data-links-per-paginator="4"></ul>
```
![Central position](https://github.com/captainKoala/pagination_bar/raw/main/images/4_items.png)

### Custom css-style classes

```css
.custom-item {
        border: 2px mediumaquamarine solid !important;
    }
.custom-link {
    color: darkred !important;
}
.custom-active a {
    background-color: mediumaquamarine;
}
```

Pay attention, css-classes are specified here with the comma separator.
```html
<ul class="pagination" data-current-page="5" data-num-pages="5"
                data-page-item-classes="page-item,custom-item"
                data-page-link-classes="page-link,custom-link"
                data-link-active-classes="custom-active"></ul>
```

![Central position](https://github.com/captainKoala/pagination_bar/raw/main/images/custom_css.png)
