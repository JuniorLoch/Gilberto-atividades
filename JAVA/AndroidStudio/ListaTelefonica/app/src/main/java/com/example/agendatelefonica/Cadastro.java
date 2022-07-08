package com.example.agendatelefonica;

import android.content.Intent;
import android.database.Cursor;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.hardware.camera2.CameraMetadata;
import android.net.Uri;
import android.os.Bundle;
import android.provider.ContactsContract;
import android.provider.MediaStore;
import android.view.View;
import android.widget.EditText;
import android.widget.ImageView;

import java.io.ByteArrayOutputStream;

import Entidades.Contato;
import Entidades.Dados;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

public class Cadastro extends AppCompatActivity {
    Contato c;
    private EditText nomeContato;
    private EditText telefoneContato;
    private EditText enderecoContato;
    private EditText emailContato;
    private ImageView imagemContato;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_cadastro);
        nomeContato = findViewById(R.id.contatoNome);
        telefoneContato = findViewById(R.id.contatoTelefone);
        enderecoContato = findViewById(R.id.contatoEndereco);
        emailContato = findViewById(R.id.contatoEmail);
        imagemContato = findViewById(R.id.contatoFoto);
        Intent it = getIntent();

        if(it.getSerializableExtra("Contato")!= null){
            c = (Contato) it.getSerializableExtra("Contato");
            nomeContato.setText(c.getNome());
            emailContato.setText(c.getEmail());
            enderecoContato.setText(c.getEndereco());
            telefoneContato.setText(c.getTelefone());
            if(c.getId_foto()!=null){
                imagemContato.setImageBitmap(BitmapFactory.decodeByteArray(c.getId_foto(),0,c.getId_foto().length));
            }
        } else {
            c = new Contato();
        }
    }

    public void salvarContato(View view){

        c.setNome(nomeContato.getText().toString());
        c.setEmail(emailContato.getText().toString());
        c.setEndereco(enderecoContato.getText().toString());
        c.setTelefone(telefoneContato.getText().toString());
        Dados.Salvar(c);
        setResult(RESULT_OK);
        onBackPressed();
    }


    public void tirarFoto(View view){
        Intent it = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        if (it.resolveActivity(getPackageManager())!=null){
            startActivityForResult(it, CameraMetadata.REQUEST_AVAILABLE_CAPABILITIES_BACKWARD_COMPATIBLE);//pq o backward compatible?

        }
    }

    public void cancelar(View view){
        setResult(RESULT_CANCELED);
        onBackPressed();
    }

    private final int REQUEST_SELECT_CONTACT = 150;
    public void importarContato(View view){
        Intent it = new Intent(Intent.ACTION_PICK);
        it.setType(ContactsContract.CommonDataKinds.Phone.CONTENT_TYPE);
        if (it.resolveActivity(getPackageManager()) != null) {
            startActivityForResult(it, REQUEST_SELECT_CONTACT);
        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == REQUEST_SELECT_CONTACT && resultCode == RESULT_OK) {

            final String[] Projecao = {
                ContactsContract.CommonDataKinds.Phone.NUMBER,
                ContactsContract.CommonDataKinds.Email.CONTACT_STATUS_LABEL,
                ContactsContract.CommonDataKinds.Contactables.DISPLAY_NAME,
                ContactsContract.CommonDataKinds.StructuredPostal.CITY
            };
            //ele sempre retorna o numero de telefone sendo 'data1' preenchido, e todas as outras colunas vazias (data1 até data15)
            //o valor recuperado tem aver com o CONTENT_TYPE do tipo de dataKind que a intent foi criada no importatcontato
            //se é criada uma intent do commondatakind.phone.CONTENT_TYPE ele só retorna o numero de telefone,
            //se for email.CONTENT_TYPE ele retorna somente o EMAIL e por ai vai, nao acho que é possivel criar varias intents
            //cada uma para pegar um dado e passar para os campos, e tambem nao sei qual dos tipos pegaria todas as informacoes de um contato
            Uri contactUri = data.getData();
            Cursor cursor = getContentResolver().query(contactUri,Projecao,null,null,null);
            if(cursor != null && cursor.moveToFirst()) {
                nomeContato.setText(cursor.getString(2));
                emailContato.setText(cursor.getString(1));
                telefoneContato.setText(cursor.getString(0));
                enderecoContato.setText(cursor.getString(3));
            }
        }
        if(requestCode == CameraMetadata.REQUEST_AVAILABLE_CAPABILITIES_BACKWARD_COMPATIBLE && resultCode == RESULT_OK){
            Bitmap imagem = (Bitmap) data.getExtras().get("data");
            imagemContato.setImageBitmap(imagem);
            ByteArrayOutputStream Stream = new ByteArrayOutputStream();
            imagem.compress(Bitmap.CompressFormat.PNG,100,Stream);
            c.setId_foto(Stream.toByteArray());
        }
    }
}