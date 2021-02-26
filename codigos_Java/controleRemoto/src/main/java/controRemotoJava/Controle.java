package controRemotoJava;

public class Controle {
    public static void main(String[] args) {
        ControleRemoto controle1 = new ControleRemoto();
        controle1.ligar();
        controle1.ligarMudo();
        controle1.maisVolume();
        controle1.play();
        controle1.pause();
        controle1.abrirMenu();
    }
}
