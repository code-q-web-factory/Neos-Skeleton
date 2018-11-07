# How the layout mechanism works

For rendering documents we use the [Neos 4 document rendering](http://neos.readthedocs.io/en/stable/CreatingASite/RenderingCustomMarkup/PageRendering.html), just create a Fusion object similar to [Page.fusion](DistributionPackages/CodeQ.Site/Resources/Private/Fusion/Document/Page/Page.fusion) with the same name as your node type.

All documents should inherit from [AbstractPage.fusion](DistributionPackages/CodeQ.Site/Resources/Private/Fusion/Document/AbstractPage/AbstractPage.fusion) and then by default use the [DefaultLayout.fusion](DistributionPackages/CodeQ.Site/Resources/Private/Fusion/Component/DefaultLayout/DefaultLayout.fusion). The default layout allows you to customize the layout in a central place.

[![Understanding the layout mechanism](https://img.youtube.com/vi/25VqmZ8Dlgw/0.jpg)](https://www.youtube.com/watch?v=25VqmZ8Dlgw)
