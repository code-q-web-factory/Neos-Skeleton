# Code Q Neos-Skeleton

The Neos-Skeleton aims to provide a easy and powerful start for new projects. It combines contributions of some of the best Neos developers with experience from Code Q. It is heavily inspired by the [Flowpack Neos best practise examples (Dmitri Pisarev and Dominique Feyer)](https://github.com/Flowpack/fusion-bp) and the [single repro setup by Christian Müller](https://github.com/kitsunet/composer-install-testing).

[![Introduction Video about the Neos Skeleton and Best Practises](https://storage.googleapis.com/target.instance-3394e487-2a4a-4465-9d00-081cf858efdf.euw1.beach.flownative.cloud/59b27b14d5341e8098702436965f768f369d7e39/Best-Practise-Neos-Setup-Talk.jpg)](https://pusher.com/sessions/meetup/neos-cms-and-flow/best-practise-neos-setup)

You need help? 

We might consult your company on Neos setups and build processes. Get in contact: rs@codeq.at

## Generator Features

The generators automatically match the node types to file names, so you do not need to manually define templatePath. Also the generator allows you to easily add editable fields in your template files, so for a property title just use:

`{titleEditable -> f:format.raw()}`

The `DefaultContentPrototypeGenerator`will create the Fusion:

```
titleEditable = Neos.Fusion:Tag {
	content = ${q(node).property("title")}
	content.@process.convertUris = ConvertUris
	@process.contentElementEditable = ContentElementEditable {
		property = "title"
	}
}
```

## Structure

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
