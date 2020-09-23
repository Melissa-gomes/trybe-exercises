File Edit Options Buffers Tools Sh-Script Help                                  
#!/bin/bash                                                                     

VARIAVEL4="/home/mell/git.pasta/trybe-exercises/my-shell-scripts"

if [ -e "$VARIAVEL4" ]
    then
        echo "O caminho $VARIAVEL4 está habilitado!"
fi

if [ -w "$VARIAVEL"]
    then
        echo "você tem permissão para editar $VARIAVEL4"
    else
        echo "você NÃO tem permissão para editar $VARIAVEL4"
fi