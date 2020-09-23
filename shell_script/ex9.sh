#!/bin/bash                                                                     
VAR9=$@

  for VARI in $VAR9
    do
      if [ -f "$VARI" ]
        then
          echo "$VARI é um arquivo comum"
      elif [ -d "$VARI" ]
        then
          echo "$VARI é um diretório"
      else
          echo "$VARI é alguma outra coisa"
      fi
      ls -l $VARI
    done
