CSS Animation
=============


# Animation
```
#id{
    animation:  bobble 2s infinite;
}


@keyframes bobble {
    0%{
        transform: translate3d(0px, 0px, 0px);
        animation-timing-function: ease-in;
    }

    50% {
        transform: translate3d(0px, 10px, 0px);
        animation-timing-function: ease-out;
    }

    100% {
        transform: translate3d(0px, 0px, 0px);
        animation-timing-function: ease-in;
    }
}

```
> check lib '-prefix-free' to get the css work for all the web browser.

#Transitions

```
 #face:hover{
    transform: translate3d(50px ,0,0);
    height: 200px;
    /*transition: all  1s ease-in;*/
    transition: transform  1s ease-in, height  1s ease-in 1s;

}
```