import WebSocket from 'ws';
import moment from 'moment';
import colors from 'colors';
import prompt from 'prompt';


const client = new WebSocket('ws://192.168.100.98:8080');

prompt.start();
prompt.get('username',(err,result)=>{
    var first = true;
    client.on('open', function () {
        client.on('message', function (msg) {
            console.log(msg.toString());
            if (first) {
                colors.setTheme({
                    custom: [msg.toString()]
                });
                first = false;
            }
        });
        client.send('😂😂👌👌🤡🤠🤠😂😂👌👌🤡🤠🤠: '+moment().format('DD/MM/YYYY - hh:mm:ss - '+x).custom);
    });    

    function msg(){
        prompt.get()
    }
    
});





