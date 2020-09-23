#!/bin/bash                                                                     

VARIAVEL5=$1
if [ -f "$VARIAVEL5" ]
    then
      echo "$VARIAVEL5 é um arquivo comum"
elif [ -d "$VARIAVEL5" ]
    then
        echo "$VARIAVEL5 é um diretorio"
else
        echo "é qualquer outra coisa"
fi

ls -l $VARIAVEL5
