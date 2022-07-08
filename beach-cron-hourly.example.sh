#!/bin/bash

CURRENT_DATE=`date +"%Y-%m-%d"`
CURRENT_DATE_ALT=`date +"%y-%m-%d"`
CURRENT_TIME=`date +"%H:%M:%S"`
CURRENT_DAY=`date +"%d"`
CURRENT_HOUR=`date +"%H"`

if [ "${FLOW_CONTEXT}" == "Production/..." ] ; then
  if [ "${CURRENT_HOUR}" == "01" ]; then

  fi
fi
