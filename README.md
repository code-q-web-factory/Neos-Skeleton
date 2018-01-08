# Code Q Neos-Skeleton

The Neos-Skeleton aims to provide a consistent start for new projects. It combines contributions of some of the best Neos developers with experience 
from Code Q. It is heavily inspired by the [Flowpack Neos best practise examples (Dmitri Pisarev and Dominique Feyer)](https://github.com/Flowpack/fusion-bp) and the [single repro setup by Christian Müller](https://github.com/kitsunet/composer-install-testing).

The setup is based on docker [dimaip/docker-neos-alpine by dimaip](https://github.com/psmb/docker-neos-alpine), a [example file](docker-compose.example.yml) is included.


[![Introduction Video about the Neos Skeleton and Best Practises](https://cms.codeq.at/_Resources/Persistent/59b27b14d5341e8098702436965f768f369d7e39/Best-Practise-Neos-Setup-Talk.jpg)](https://pusher.com/sessions/meetup/neos-cms-and-flow/best-practise-neos-setup)

You need help? 

We might consult your company on Neos setups and build processes. Get in contact: rs@codeq.at

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

## Other usefull things

 - A simple content reference NodeType without the Neos.NodeTypes bloat is provided through [codeq/contentreferences](https://packagist.org/packages/codeq/contentreferences)
 - Some great fusion helpers for link editor are provided by [carbon/link](https://github.com/jonnitto/Carbon.Link)
 - Try our Eel in the terminal with [ttree/eelshell](https://github.com/ttreeagency/EelShell)

## Things you don't need to care about

 - Supports MOC.ImageOptimizer with dimaip/docker-neos-alpine
 - German Umlaute are handled well because of codeq/unicodenormalizer
 - Resource caching is automatically done with opsdev/cache-breaker

## Code Q Specific

 - Augments the legal notice
 - Configured Graylog exception monitoring
 - Includes a CircleCI integration script


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


# README Template for new projects:

This Neos 3.x website is based on the [Code Q Neos-Skeleton](https://github.com/rolandschuetz/Neos-Skeleton) and the [Code Q Code Conventions](https://docs.google.com/document/d/13ykoM0Ta2qJvO_6BYa-DIsx7_MxFsInOSbJqJHuINBw/edit). 

## Deployment Server

Access the web container: `[TO BE ADDED HERE]`

Access the server: `[TO BE ADDED HERE]`
