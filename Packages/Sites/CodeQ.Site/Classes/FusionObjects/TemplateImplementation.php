<?php
namespace CodeQ\Site\FusionObjects;

use Neos\Flow\Annotations as Flow;
use Neos\Flow\Mvc\ActionRequest;
use Neos\Fusion\FusionObjects\TemplateImplementation as OriginalTemplateImplementation;
use Neos\Fusion\FusionObjects\Helpers as Helpers;
use Neos\FluidAdaptor\Core\Parser\Interceptor\ResourceInterceptor;
use TYPO3Fluid\Fluid\Core\Parser\InterceptorInterface;

/**
 * Experimental Template object
 */
class TemplateImplementation extends OriginalTemplateImplementation
{
    /**
     * Override prototype name
     *
     * @return string
     */
    public function getOverridePrototypeName()
    {
        return $this->fusionValue('overridePrototypeName');
    }

    /**
     * {@inheritdoc}
     *
     * @return string
     */
    public function evaluate()
    {
        $actionRequest =  $this->runtime->getControllerContext()->getRequest();
        if (!$actionRequest instanceof ActionRequest) {
            $actionRequest = null;
        }
        $fluidTemplate = new Helpers\FluidView($this, $actionRequest);

        $prototypeName = $this->getOverridePrototypeName() ?: $this->fusionObjectName;
        list($packageKey, $relativeName) = explode(':', $prototypeName, 2);
        if (strpos($relativeName, '.') !== false) {
            list($namespace, $namespacedName) = explode('.', $relativeName, 2);
            $templatePath = 'resource://' . $packageKey . '/Private/Fusion/' . $namespace . '/' . $namespacedName . '/' . $namespacedName . '.html';
        } else {
            $templatePath = 'resource://' . $packageKey . '/Private/Fusion/' . $relativeName . '/' . $relativeName . '.html';
        }

        if ($templatePath === null) {
            throw new \Exception(sprintf("
                No template path set.
                Most likely you didn't configure `templatePath` in your Fusion object correctly.
                For example you could add and adapt the following line to your Fusion:
                `prototype(%s) < prototype(Neos.Fusion:Template) {
                    templatePath = 'resource://Vendor.Package/Private/Templates/MyObject.html'
                }`
            ", $templatePath, $this->fusionObjectName));
        }
        $fluidTemplate->setTemplatePathAndFilename($templatePath);

            // Template resources need to be evaluated from the templates package not the requests package.
        if (strpos($templatePath, 'resource://') === 0) {
            $templateResourcePathParts = parse_url($templatePath);
            foreach ($fluidTemplate->getRenderingContext()->buildParserConfiguration()->getInterceptors(InterceptorInterface::INTERCEPT_TEXT) as $interceptor) {
                if ($interceptor instanceof ResourceInterceptor) {
                    $interceptor->setDefaultPackageKey($templateResourcePathParts['host']);
                }
            }
        }

        foreach ($this->properties as $key => $value) {
            if (in_array($key, $this->ignoreProperties)) {
                continue;
            }
            if (!is_array($value)) {
                // if a value is a SIMPLE TYPE, e.g. neither an Eel expression nor a Fusion object,
                    // we can just evaluate it (to handle processors) and then assign it to the template.
                $evaluatedValue = $this->fusionValue($key);
                $fluidTemplate->assign($key, $evaluatedValue);
            } else {
                // It is an array; so we need to create a "proxy" for lazy evaluation, as it could be a
                    // nested Fusion object, Eel expression or simple value.
                $fluidTemplate->assign($key, new Helpers\FusionPathProxy($this, $this->path . '/' . $key, $value));
            }
        }

        $this->initializeView($fluidTemplate);

        return $fluidTemplate->render();
    }

    /**
     * This is a template method which can be overridden in subclasses to add new variables which should
     * be available inside the Fluid template. It is needed e.g. for Expose.
     *
     * @param Helpers\FluidView $view
     * @return void
     */
    protected function initializeView(Helpers\FluidView $view)
    {
        // template method
    }
}
