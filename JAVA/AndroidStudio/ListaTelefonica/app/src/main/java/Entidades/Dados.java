package Entidades;

import java.util.Collection;
import java.util.LinkedList;
import java.util.List;

public class Dados {
    private static final List dados = new LinkedList();
    private static Integer count = 1;

    public static void Salvar(Contato o){
        if(dados.contains(o)) {
            dados.set(dados.indexOf(o), o);
        }else{
            o.setId(count++);
            dados.add(o);
        }
    }

    public static void Salvar(Collection o){
        dados.addAll(o);
    }

    public static void Remove(int index){
        dados.remove(index);
    }

    public static List getLista(){
        return dados;
    }
}
