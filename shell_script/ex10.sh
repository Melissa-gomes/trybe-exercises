#!/bin/bash                                                                     
DIA=$(date +%F)

  for ARQ in `ls *.png`
   do
      mv $ARQ ${DIA}-${ARQ}
   done