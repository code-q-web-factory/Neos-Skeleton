# Steps to get started

Requirements:
Your local development environment must provide [PHP 7.4+, composer and MySQL 5.7.x or MariaDB 10.2.x](https://www.neos.io/download-and-extend.html).

If you don't use PHP 7.4, please change the version in [composer.json](/composer.json#L8) under `config.platform.php`.

#### Start a new Git project

1. Clone this repository `git clone git@github.com:code-q-web-factory/Neos-Skeleton.git PROJECT_NAME` and go into the folder `cd PROJECT_NAME`.
2. Replace the package name "CodeQ.Site" with your own company name. We recommend keeping ".Site" for all projects to easily copy the code from one project to another.
    ```
    export NEOS_PACKAGE_NAME="YourCompany.Site"
    export COMPOSER_PACKAGE_NAME="yourcompany\/site"
    mv DistributionPackages/CodeQ.Site DistributionPackages/${NEOS_PACKAGE_NAME}
    
    # OS X / BSD:
    find . -type f -name 'composer.json' | xargs sed -i '' "s/codeq\/site/${COMPOSER_PACKAGE_NAME}/g"
    find ./DistributionPackages/${NEOS_PACKAGE_NAME} -type f | xargs sed -i '' "s/CodeQ\.Site/${NEOS_PACKAGE_NAME}/g"
    # Linux / GNU:
    find . -type f -name 'composer.json' | xargs sed -i='' "s/codeq\/site/${COMPOSER_PACKAGE_NAME}/g"
    find ./DistributionPackages/${NEOS_PACKAGE_NAME} -type f | xargs sed -i='' "s/CodeQ\.Site/${NEOS_PACKAGE_NAME}/g"
    ```
3. Remove the Neos-Skeleton docs `rm -Rf docs`.
4. English is the default language, you can adapt it in [Settings.Language.yaml](/DistributionPackages/CodeQ.Site/Configuration/Settings.Language.yaml).
5. Create a new Git project on the server of your choice, in our example Github.
6. Change the `README.md` to describe your project.
7. Start the new Git project locally and push the initial state.
    ```
    rm -rf .git && git init
    git remote add origin git@github.com:USERNAME/REPOSITORY.git
    git fetch
    composer install
    git add .
    git commit -m "TASK: Copy from Neos-Skeleton"
    git push -u origin master
    ```

#### Run the project locally

8. Start your database server.
9. Start the local server in the terminal:
    ```
    ./flow server:run
    ```
10. Create or configure your database at [http://127.0.0.1:8081/setup](http://127.0.0.1:8081/setup) and import the initial content from your package.

#### Configure your project

11. Configure the Google Analytics tracking code in [Production/Settings.yaml](/DistributionPackages/CodeQ.Site/Configuration/Production/Settings.yaml) in the format `UA-XXXXXXXX-X`.
12. In the Neos administration, you can find a page "Page not found", which is shown every time a page couldn't be found. Feel free to add content here.

#### Start developing

13. Copy your preferred frontend tooling into [Resources/Public/Frontend](/DistributionPackages/CodeQ.Site/Resources/Public/Frontend) and adopt the `IncludeAssets` paths in [Settings.IncludeAssets.yaml](/DistributionPackages/CodeQ.Site/Configuration/Settings.IncludeAssets.yaml).
14. Create your own document and content node types and add the styles to your CSS.

