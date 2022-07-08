package com.example.agendatelefonica;

import Entidades.Contato;
import Entidades.Dados;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.os.Parcelable;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.Toast;

import java.io.Serializable;
import java.util.List;

public class MainActivity extends AppCompatActivity {
    private ListView listview;
    ArrayAdapter<String> adapter;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        listview = findViewById(R.id.ListaContato);
        Atualizar();

        listview.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
                Intent it = new Intent(getApplicationContext(),Cadastro.class);
                it.putExtra("Contato", (Contato) Dados.getLista().get(i));

                Contato o = (Contato)Dados.getLista().get(i);
                startActivityForResult(it,201);
                Atualizar();
            }
        });
        listview.setOnItemLongClickListener(new AdapterView.OnItemLongClickListener() {
            @Override
            public boolean onItemLongClick(AdapterView<?> adapterView, View view, int i, long l) {
                Dados.Remove(i);
                Atualizar();
                return true;
            }
        });
    }

    private void Atualizar() {
        if(adapter == null) {
            adapter = new ArrayAdapter(this, android.R.layout.simple_list_item_1, Dados.getLista());
            listview.setAdapter(adapter);
        }else{
            adapter.notifyDataSetChanged();
        }
    }

    public void novoContato(View view){
        //abrir tela de cadastro
        Intent it = new Intent(this,Cadastro.class);
        startActivityForResult(it,201);
        Atualizar();
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if(resultCode == RESULT_OK){ // mesmo que salva o contato nao passa aqui
            if(requestCode == 201){
                Toast.makeText(this, "Contato Salvo", Toast.LENGTH_SHORT).show();
                Atualizar();
            }
        }else{
            Toast.makeText(this, "Contato nao salvo", Toast.LENGTH_SHORT).show();
            Atualizar();
        }
    }
}