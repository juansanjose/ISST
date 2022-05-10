### IMPORTANTE:

- Se accede a la web mediante https://localhost:8443

- Usar  ./mvnw clean install spring-boot:run "-DskipTests=true" con powershell o cmd en la carpeta ISST para cargar el proyecto. - La opción más fácil de abrir powershell es darle a Ctrl + Shift + Ñ en Visual Studio Code o, en la barra de arriba de Visual Studio Code, darle clic a terminal y luego a "Nuevo Terminal".

- Para parar el proyecto seleccionamos el terminal y damos a Ctrl + C. Después, cuando nos pregunta "Terminate batch job?" confirmamos que si.
-Para parar también se puede dar al icono de bolsa de basura que aparece debajo en visual studio code como en la siguiente imagen:
 https://i.imgur.com/Fnskh14.png

- Se puede acceder a la base de datos a través de https://localhost:8443/h2-console y poniendo como JDBC URL: jdbc:h2:mem:isst, usuario sa y sin contraseña, como se puede ver en la imagen. (https://i.imgur.com/FNoJQEj.png) EL CONTENIDO DE LA BASE DE DATOS SE BORRA CADA VEZ QUE SE INICIA, SE PUEDE CAMBIAR YENDO A src/main/resources/application.properties, pero prefiero no hacerlo.

- Los usuarios para loguearte son gestor, cliente y repar y sus contraseñas son gestor1, cliente1 y repar1, respectivamente.



