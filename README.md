# Bleak

[![Build Status](https://travis-ci.org/Xennis/hugo-theme-bleak.svg?branch=master)](https://travis-ci.org/Xennis/hugo-theme-bleak)

Theme based from Ghost [Bleak](https://github.com/zutrinken/bleak) by [zutrinken](https://github.com/zutrinken).

## Index view

![Index page](https://raw.githubusercontent.com/Zenithar/hugo-theme-bleak/master/images/full_blog.png)

## Post view

![Post page](https://raw.githubusercontent.com/Zenithar/hugo-theme-bleak/master/images/full_post.png)

## Original theme credits

[Blog](http://bleak.zutrinken.com)

## Config

```toml
[params]
  # Warning Keys are case sensitives
  Subtitle = "Your subtitle !"
  description = "Everything is awesome !"
  cover = "/images/cover.jpg"

  # Google analytics
  googleAnalyticsUserID = "UA-xxxxxxxx-x"
  domainVerification = "xxxxxxxxxxxxxxxxxxxxx"
  disqus = "xxxxxxxxx"

  [params.author]
    firstName = "FirstName"
    lastName = "LastName"
    gender = "(fe)?male"
    userName = "username"
    image = "//www.gravatar.com/avatar/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.png"
    website = "http://www.foo.com"
    twitter = "xxxxxxx"
    github = "xxxxxxx"
    facebook = "xxxxxxxxx"
    linkedin = "xxxxxxxxx"
    gplus = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    gravatarHash = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

## Development

Install Grunt modules:

	npm install

Build Grunt project:

	./node_modules/grunt/bin/grunt

Distribute Grunt project:

	./node_modules/grunt/bin/grunt build


Copyright (C) 2015-2016 Peter Amende - Released under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
