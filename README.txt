Instrucciones de uso:
1)Para el lanzamiento de la pagina, se requiere Vue.js instalado
2)abrir una terminal y utilizar el comando "cd" hasta la carpeta "Pagina"
3)utilizar el comando "npm run serve"
nota: si desea utilizar la api basica creada, debe cambiar el "url" del archivo
HelloWorld.vue de la pagina, por "http://localhost:8082/usuarios"

Aclaraciones: api con base de datos creada, fue mediante JsonServer,
por lo tanto se debe hacer lo siguiente
4)abrir otra terminal y utilizar el comando "cd" hasta la carpeta "baseDatos"
5)utilizar el comando "npm install -g json-server"
6)utilizar el comando "json-server --watch db.json"
posibles errores, si se encuentra con el error "su sistema no permite la ejecucion de scripts"
por favor siga los siguientes pasos:
	1)abrir microsoft powershell como administrador
	2) ejecutar el siguiente comando "Get-ExecutionPolicy -list"
	3) si los parametros listados dicen "undefined" ejecutar el siguiente comando "Set-ExecutionPolicy RemoteSigned -Force"
	4) luego abrir gpedit con "tecla Windows+R" escribir "Gpedit.msc"
	5) una vez abierto, seguir las instrucciones de la carpeta "Z Imagenes Guia"
Tambien se adjunta la seed que me fue entregada, con unas modificaciones comentadas, de mis intentos por "arreglar" el CORS