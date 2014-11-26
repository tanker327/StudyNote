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