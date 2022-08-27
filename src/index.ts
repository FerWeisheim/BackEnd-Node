
import app from './app'
import {appDataSource} from './database'


async function main(){
    await appDataSource.initialize();
    console.log("base de datos conectada");
    app.listen(3000);
    console.log("hola 2");

}
main();


