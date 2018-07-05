# Code Q Neos-Skeleton

The Neos-Skeleton provides an easy and powerful start for new projects - beginner-friendly and highly scalable. It implements all current best practices for Neos 4 and is frontend tooling agnostic.

It combines contributions of some of the best Neos developers with experience from Code Q. It is inspired by [Flowpack Neos best practice examples (Dmitri Pisarev and Dominique Feyer)](https://github.com/Flowpack/fusion-bp), the [single repro setup (Christian Müller)](https://github.com/kitsunet/composer-install-testing) and [AFX (Martin Ficzel)](https://github.com/PackageFactory/atomic-fusion-afx).

On top, it adds well-tested community packages to provide everything you need for an amazing website.

## Feature overview

 - A powerful best practice layout rendering mechanism
 - Best practice folder and naming structure
 - A well-rounded set of packages to build typical websites

## Further boilerplate features

 - [YAML Constraints](https://www.youtube.com/watch?v=ZCRYsYvxXFI) to easily manage where node types should be available
 - It provides the most used smartphone and tablet sizes as preview modes
 - All rendering is based on Fusion and AFX

## Features via required packages

 - [neos/seo](https://github.com/neos/neos-seo) allows your to configure SEO and social media settings
 - [neos/redirecthandler-neosadapter](https://github.com/neos/redirecthandler-neosadapter) automatically creates a redirect when you change/move a page
 - [neos/neos-googleanalytics](https://github.com/neos/neos-googleanalytics) adds your Google Analtics tracking code
 - [carbon/compression](https://github.com/CarbonPackages/Carbon.Compression) compresses the HTML output
 - [carbon/hyphen](https://github.com/CarbonPackages/Carbon.Hyphen) allows editors to add shy characters
 - [codeq/unicodenormalizer](https://github.com/code-q-web-factory/neos-unicodenormalizer) handles broken German Umlaute
 - [flowpack/cachebuster](https://github.com/Flowpack/Flowpack.CacheBuster) adds automatic cache busting for assets in the frontend
 - [moc/notfound](https://github.com/mocdk/MOC.NotFound) loads a normal editable page for displaying a 404 error
 - [jonnitto/sitemap](https://github.com/jonnitto/Jonnitto.Sitemap) improves the XML sitemap
 - [neos/nodetypes-contentreferences](https://github.com/neos/nodetypes-contentreferences) provides a reference content node type
 
## Development features via required packages

 - [carbon/link](https://github.com/jonnitto/Carbon.Link) provides powerfull link helpers
 - [sitegeist/silhouettes](https://github.com/sitegeist/Sitegeist.Silhouettes) let's you preconfigure property-silhouettes that can be applied to various properties of multiple NodeTypes in a better way then mixins.
 - [ttree/eelshell](https://github.com/ttreeagency/EelShell) let's you try your eel expressions in the terminal
 - [sitegeist/neosguidelines](https://github.com/sitegeist/Sitegeist.NeosGuidelines) validates that you follow the in [Settings.PreviewModes.yaml](DistributionPackages/CodeQ.Site/Configuration/Settings.PreviewModes.yaml) defined code conventions
 - [carbon/includeassets](https://github.com/CarbonPackages/Carbon.IncludeAssets) provides an easy way to include your assets (css, js)


## Steps to get started

Requirements:
Your local development environment must provide [a webserver like Apache or nginx, PHP 7.1+, composer and MySQL 5.7.x or MariaDB 10.2.x](https://www.neos.io/download-and-extend.html).

__Start a new git project__

1. Clone this repository `git clone git@github.com:code-q-web-factory/Neos-Skeleton.git PROJECT_NAME`
2. Replace the Package name "CodeQ.Site" with your own company name. We recommend keeping ".Site" for all projects to easily copy the code from one project to another.
    ```
    export REPO_NAME="MyFirstWebsite"
    export NEOS_PACKAGE_NAME="YourCompany.Site"
    export COMPOSER_PACKAGE_NAME="yourcompany\/site"
    cd ${REPO_NAME}
    mv DistributionPackages/CodeQ.Site DistributionPackages/${NEOS_PACKAGE_NAME}
    find ./DistributionPackages/${NEOS_PACKAGE_NAME} -type f | xargs sed -i '' "s/CodeQ\.Site/${NEOS_PACKAGE_NAME}/g"
    find . -type f -name 'composer.json' | xargs sed -i '' "s/codeq\/site/${COMPOSER_PACKAGE_NAME}/g"
    ```
3. Create a new git project on the server of your choice, in our example Github
4. Start the new git project locally and push the initial state
    ```
    rm -rf .git && git init
    git remote add origin git@github.com:${REPO_NAME}.git
    git fetch
    composer install
    git add .
    git commit -m "TASK: Copy from Neos-Skeleton"
    git push -u origin master
    ```

__Run the project locallly__

5. Start your database server and create a new database with the charset 'utf8'.
6. Start the local server in the terminal:
    ```
    ./flow server:run
    ```
7. Setup the database configuration at [http://127.0.0.1:8081/setup](http://127.0.0.1:8081/setup) and import the initial content from your package.

__Configure your project__

8. Configure the Google Analytics tracking code in [Production/Settings.yaml](DistributionPackages/CodeQ.Site/Configuration/Production/Settings.yaml) in the format `UA-XXXXXXXX-X`
9. German is the default language, you can adapt it in [Settings.Language.yaml](DistributionPackages/CodeQ.Site/Configuration/Settings.Language.yaml)
10. In the Neos administration, you can find a page "Page not found", which is shown every time a page couldn't be found. Feel free to add content here.

__Start developing__

11. Copy your preferred frontend tooling into Resources/Public/Frontend and adopt the include assets paths in [Settings.IncludeAssets.yaml](DistributionPackages/CodeQ.Site/Configuration/Settings.IncludeAssets.yaml)
12. Create your own document and content node types and add the styles to your CSS.

__Tip:__
Folow the [Code Q Code Conventions](https://docs.google.com/document/d/13ykoM0Ta2qJvO_6BYa-DIsx7_MxFsInOSbJqJHuINBw/edit?usp=sharing) and validate your code with
```
./flow configuration:validate
./flow guidelines:validateDistribution
./flow guidelines:validatePackages
```

## How the layout mechanism works

For rendering documents we use the [Neos 4 document rendering](http://neos.readthedocs.io/en/stable/CreatingASite/RenderingCustomMarkup/PageRendering.html), just create a Fusion object similar to [Page.fusion](DistributionPackages/CodeQ.Site/Resources/Private/Fusion/Document/Page/Page.fusion) with the same name as your node type.

All documents should inherit from [AbstractPage.fusion](DistributionPackages/CodeQ.Site/Resources/Private/Fusion/Document/AbstractPage/AbstractPage.fusion) and then by default use the [DefaultLayout.fusion](DistributionPackages/CodeQ.Site/Resources/Private/Fusion/Component/DefaultLayout/DefaultLayout.fusion). The default layout allows you to customize the layout in a central place.

## FAQ

### Can you provide more documentation?

Yes, I am currently working on more documentation. In the meanwhile feel free to ping me in the Slack channel #general and tag me with @rolandschuetz

### Why aren't you using XYZ

If you have ideas how to improve the skeleton, please write me on slack or add a Github issue/pull request!

### Why didn't you include Sitegeist.Monocle?

[Sitegeist.Monocle](https://github.com/sitegeist/Sitegeist.Monocle) is a great package and I recommend it for every bigger project, which is looking for a living style guide. For smaller projects and especially for beginners it's quite a big overhead and so this skeleton comes without Monocle.

### Why are you using AFX and not Fluid/Fusion?

Neos gives you three possible rendering options: Fusion, Fluid, AFX. So now everyone can choose what they like the most.
Most core developers prefer AFX, same as Sitegeist, gesagt.getan and Code Q. This is an opinionated boilerplate. Of course iIf you don’t like it, feel free to change it to what you prefer. You can also see our [Neos 3 legacy branch for a Fluid-base rendering](https://github.com/code-q-web-factory/Neos-Skeleton/tree/neos-3-fluid).

## You need help?

For questions about the boilerplate feel free to write in the Slack channel #general and tag me with @rolandschuetz

The development of this boilerplate is sponsored by [Code Q](https://codeq.at/de/kontakt). We can consult your company on Neos setups and build processes. Get in contact: rs@codeq.at


## License

The MIT License (MIT)

Copyright (c) 2016 Neos-Skeleton contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
