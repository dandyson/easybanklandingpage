# How to build a responsive site just using vanilla HTML, CSS and JS 

## Navigation

### HTML

Make the links and make EXTRA links for the menu hamburger and any buttons, like so:

```HTML 
<nav>
    <ul class="menu">
      <li class="logo"><a href="#">Easybank</a></li>
      <li class="item"><a href="#">Home</a></li>
      <li class="item"><a href="#">About</a></li>
      <li class="item"><a href="#">Contact</a></li>
      <li class="item"><a href="#">Blog</a></li>
      <li class="item"><a href="#">Careers</a></li>
      <li class="item button"><a href="#">Request Invite</a></li>
      <li class="toggle"><a href="#"><span class="bars"></span></a></li>
    </ul>
</nav>
```
### CSS
Change all elements in CSS to use the border-box, so that margins and padding are included when it comes to calculating height and width.

Also set margin and padding to 0 each so that by default there is no padding and margin in any elements, you can add it later:

```CSS
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
```

You can make the a links better hoverable by doing this:

```CSS
.menu li a {
    display: block;
}
```

## Flexbox Time!!

So mobile menu first - apply this to the ul tag to get the nagivation menu across the top:

```CSS
.menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}
```

To get the mobile menu right, first you need to flex order them:

```CSS
.toggle {
    order: 1; /*This will be on the far right
}

.item.button {
    order: 2; /*This will be second from the right*/
}

.item {
    order: 3; /*Then finally the actual nav links*/
}
```

Then set the active state of each list item to display block, so they appear when the hamburger menu opens:

```CSS
.item:active {
    display: block;
}
```

## Making it tablet responsive

/* Tablet mentu