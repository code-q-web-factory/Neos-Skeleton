<?php
namespace CodeQ\Site\Generators;

use Neos\Flow\Annotations as Flow;
use Neos\Neos\Domain\Service\DefaultPrototypeGeneratorInterface;
use Neos\ContentRepository\Domain\Model\NodeType;

/**
 * @Flow\Scope("singleton")
 */
class DefaultDocumentPrototypeGenerator implements DefaultPrototypeGeneratorInterface
{
    /**
     * Generate a Fusion prototype definition for a given node type
     *
     * @param NodeType $nodeType
     * @return string
     */
    public function generate(NodeType $nodeType)
    {
        if (strpos($nodeType->getName(), ':') === false) {
            return '';
        }

        $prototypeName = $nodeType->getName();

        $output = 'prototype(' . $prototypeName . ') < prototype(CodeQ.Site:SimpleTemplate) {' . chr(10);
        foreach ($nodeType->getProperties() as $propertyName => $propertyConfiguration) {
            if (isset($propertyName[0]) && $propertyName[0] !== '_') {
                if (isset($propertyConfiguration['type']) && isset($propertyConfiguration['ui']['inlineEditable']) && $propertyConfiguration['type'] === 'string' && $propertyConfiguration['ui']['inlineEditable'] === true) {
                    $output .= "\t" . $propertyName . ' = Neos.Fusion:Tag {' . chr(10);
                    $output .= "\t" . 'content = ${q(node).property("' . $propertyName . '")}' . chr(10);
                    $output .= "\t" . 'content.@process.convertUris = ConvertUris' . chr(10);
                    $output .= "\t" . '@process.contentElementEditable = ContentElementEditable {' . chr(10);
                    $output .= "\t" . 'property = "' . $propertyName . '"' . chr(10);
                    $output .= "\t" . '}' . chr(10);
                    $output .= "\t" . '}' . chr(10);
                } else {
                    $output .= "\t" . $propertyName . ' = ${q(node).property("' . $propertyName . '")}' . chr(10);
                }
            }
        }
        $output .= '@process.contentElementWrapping = ContentElementWrapping' . chr(10);
        $output .= '}' . chr(10);

        $output .= 'prototype(' . $prototypeName . '.Document) < prototype(Page) {' . chr(10);
        $output .= 'body = ' . $prototypeName . chr(10);
        $output .= '}' . chr(10);
        return $output;
    }
}
