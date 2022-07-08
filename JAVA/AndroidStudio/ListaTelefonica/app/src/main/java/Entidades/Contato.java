package Entidades;

import java.io.Serializable;
import java.util.Objects;

public class Contato implements Serializable {
    private Integer id;
    private String nome;
    private String telefone;
    private String email;
    private String endereco;
    private byte[] id_foto;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public byte[] getId_foto() {
        return id_foto;
    }

    public void setId_foto(byte[] id_foto) {
        this.id_foto = id_foto;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return " Nome: " + nome + '\n' +
                " Telefone: " + telefone + '\n' +
                " Email: " + email + '\n' +
                " Endereco: " + endereco + '\n';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Contato contato = (Contato) o;
        return Objects.equals(id,contato.id);
    }
}
