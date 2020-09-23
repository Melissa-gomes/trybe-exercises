#!/bin/bash                                                                     
VARDIRETORIO=$1

if [ -d "$VARDIRETORIO" ]
    then
        $VARRESULT=`ls -l $VARDIRETORIO | wc -l`
        echo "$VARDIRETORIO tem $VARRESULT arquivos"
else
    echo "$VARDIRETORIO não é um diretório!"
fi

