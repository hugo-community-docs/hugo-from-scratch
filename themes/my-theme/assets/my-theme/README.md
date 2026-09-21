The Hugo project convention is to separate files using `css/js` directories, for example

```sh
assets/my-theme/
├── css/
│   ├── main.css
│   ├── layout.css
│   ├── tokens.css
│   └── scroll-to-top.css
└── js/
    ├── scroll-to-top.js
    └── main.js
```

However, this non-atomic structure causes several problems when making changes, including

1. When editing a JS or CSS file, there's no way to tell whether a corresponding CSS or JS file exists
2. Modifying a file requires jumping between multiple directories

Therefore, this example uses a `core-components` structure instead.

```sh
assets/my-theme/
├── core/
│   ├── layout.css
│   ├── main.css
│   ├── main.js
│   └── tokens.css
└── components/
    └── scroll-to-top/
        ├── scroll-to-top.css
        └── scroll-to-top.js
```

For small projects, the traditional `css/js` structure is sufficient.
