#!/bin/bash

/application/flow cache:flushone Neos_Fusion_Content
/application/flow resource:publish --collection='static'
