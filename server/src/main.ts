import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";


const start = async ()=>{
    try {
        const app= await NestFactory.create(AppModule)
    }catch (e) {
        console.log(e)
    }
}