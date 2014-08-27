
## Structure
- Code in the /server directory only runs on the server.
- Code in the /client directory only runs on the client.
- Everything else runs on both the client and server.
- Files in /lib are loaded before anything else.
- Any main.* file is loaded after everything else.
- Your static assets (fonts, images, etc.) go in the /public directory.
- Code in the /models directory should be data models


## Filenames
_Underscores vs CamelCase_
The only thing we'll say about the age-old underscore (my_variable) vs camelCase (myVariable) debate is that it doesn't really matter which one you pick as long as you stick to it.

In this book, we're using camelCase because it's the usual JavaScript way of doing things (after all, it's JavaScript, not java_script!).

The only exceptions to this rule are file names, which will use underscores (my_file.js ), and CSS classes, which use hyphens (.my-class). The reason for this is that in the filesystem, underscores are most common, while the CSS syntax itself already uses hyphens (font-family, text-align, etc.).
