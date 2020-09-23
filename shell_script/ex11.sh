#!/bin/bash                                                                     

VAR1=$1
  MAIS=$2

  DIA=$(date +%F)

  cd $VAR1

  for ARQ in `ls *.$MAIS`
   do
      echo "Renomeando $ARQ para ${DIA}-${ARQ}"
      mv $ARQ ${DIA}-${ARQ}
   done
