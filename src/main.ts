import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const start = async () => {
    try {
        const PORT = process.env.PORT || 3030;
        const app = await NestFactory.create(AppModule);

        // swagger
        const config = new DocumentBuilder()
            .setTitle("MyTicket.uz")
            .setDescription("Online ticket purchase platform")
            .addTag("NestJs, Sequelize, PG")
            .setVersion("1.0.0")
            .build();

        const document = SwaggerModule.createDocument(app, config);
        SwaggerModule.setup("myTicket/docs", app, document);

        // app listen
        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}
start();