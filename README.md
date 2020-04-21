
# Quick Setup

1. Install Jekyll: `gem install jekyll bundler`
2. Fork this repository and clone your fork
3. Edit `_config.yml` to personalize your site

# Settings

You have to fill some informations on `_config.yml` to customize your site:

## Site settings
```yml
description: A simple resume
baseurl: "" # the subpath of your site, e.g. /blog/
url: "http://victerek.com" # the base hostname & protocol for your site
```

## User settings
```yml
username: Vic Terek
user_description: PPC Specialist at Koya
user_title: Vic Terek 
email: victerek@gmail.com
```

> Don't forget to change your URL before you deploy your site!

# Color and Particle Customization

- Color Customization
  - Edit the `.sass` variables
- Particle Customization
  - Edit the json data in particle function in `app.js`
  - Refer to `Particle.js` for help

# Content

You can (and should) edit the `.html` files for adding your own information, icons, working experience, social links or whatever you want to add. I.e.:

```html
<a aria-label="My Github" target="_blank" href="https://github.com/victerek">
  <i class="icon fa fa-github-alt" aria-hidden="true"></i>
</a>
```

# Running locally

In order to compile the assets and run `Jekyll` locally you need to follow those steps:

1. Install Jekyll
2. Run `jekyll build`
3. Start and http-server in the folder `_site`

