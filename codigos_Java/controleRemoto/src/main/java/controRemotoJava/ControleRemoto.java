package controRemotoJava;

public class ControleRemoto implements Controlador{
    private int volume;
    private boolean ligado;
    private boolean tocando;

    public ControleRemoto(){
        volume = 50;
        ligado = false;
        tocando = false;
    }

    private int getVolume() {
        return volume;
    }

    private boolean getLigado() {
        return ligado;
    }

    private boolean getTocando() {
        return tocando;
    }

    private void setVolume(int v) {
        volume = v;
    }

    private void setLigado(boolean l) {
        ligado = l;
    }

    private void setTocando(boolean t) {
        tocando = t;
    }


    @Override
    public void ligar() {
        this.setLigado(true);
    }

    @Override
    public void desligar() {
        this.setLigado(false);
    }

    @Override
    public void abrirMenu() {
        System.out.println("Esta ligado ? " + this.ligado);
        System.out.println("Esta tocando? " + this.tocando);
        System.out.println("volume: " + this.volume);
        for(int i = 0; i <= this.getVolume(); i += 10) {
            System.out.println("|");
        }
    }

    @Override
    public void fecharMenu() {
        System.out.println("Fechando Menu...");
    }

    @Override
    public void maisVolume() {
        if(this.getLigado() == true) {
             this.setVolume(this.getVolume() +1);
        } else {
            System.out.println("A tv esta desligada");
        }
    }

    @Override
    public void menosVolume() {
        if(this.getLigado() == true) {
            this.setVolume(this.getVolume() -1);
        } else {
            System.out.println("A tv esta desligada");
        }
    }

    @Override
    public void ligarMudo() {
        if(this.getLigado() == true && this.getVolume() > 0) {
            this.setVolume(0);
        } else {
            System.out.println("A tv esta desligada");
        }
    }

    @Override
    public void desligarMudo() {
        if(this.getLigado() == true && this.getVolume() == 0) {
            this.setVolume(50);
        } else {
            System.out.println("A tv esta desligada");
        }
    }

    @Override
    public void play() {
        if(this.getLigado() == true && this.getTocando() == false) {
            this.setTocando(true);
        } else {
            System.out.println("A tv está desligada");
        }
    }

    @Override
    public void pause() {
        if(this.getLigado() == true && this.getTocando() == true) {
            this.setTocando(false);
        } else {
            System.out.println("A tv está desligada");
        }
    }
}
