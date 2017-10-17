# Code Q Neos-Skeleton

This Neos 3.x website is based on the [Code Q Code Conventions](https://docs.google.com/document/d/13ykoM0Ta2qJvO_6BYa-DIsx7_MxFsInOSbJqJHuINBw/edit). It is heavily inspired by the Neos [best practise examples](https://github.com/Flowpack/fusion-bp) and the [single repro setup by kitsunet](https://github.com/kitsunet/composer-install-testing).
The setup is based on docker [dimaip/docker-neos-alpine by dimaip](https://github.com/psmb/docker-neos-alpine), a [example file](docker-compose.example.yml) is included.


## Structure

 - Optimized for usage with Docker
 - Provides a solid layout structure
 - Implemented the Fusion Best Practices
 - Based on Components instead of Fluid partials for reusability
 - Separates the frontend code into Resources/Public/Frontend

## Includes these awesome packages

 - neos/seo
 - neos/redirecthandler-*
 - neos/googleanalytics
 - moc/notfound
 - moc/imageoptimizer

## Other usefull things

 - codeq/contentreferences
 - carbon/link
 - yeebase/graylog
 - ttree/eelshell

## Things you don't need to care about

 - Supports MOC.ImageOptimizer with dimaip/docker-neos-alpine
 - codeq/unicodenormalizer
 - opsdev/cache-breaker

Code Q Specific

 - Augments the legal notice
 - Configured Graylog exception monitoring
 - Includes a CircleCI integration script


## Template for projects:

# Server

Access the web container: [TO BE ADDED HERE]

Access the server: [TO BE ADDED HERE]
