<%-- 
    Document   : consultarDatos
    Created on : 17 abr. 2023, 14:18:45
    Author     : emiri
--%>
<%@page import="java.util.List"%>
<%@page import="Modelo.Mascota"%>
<%@page import="Modelo.Raza"%>
<%@page import="Modelo.Especie"%>
<%@page import="Modelo.Dueno"%>
<%@page import="Controlador.AccionesUsuarios"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Despliegue General</title>
    </head>
    <body>
        <h1>Tabla de Datos del dueño</h1>
        <br>
        <table border="2" >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Apellido Materno</th>
                    <th>Apellido Paterno</th>
                    <th>Nombre Dueño</th>
                    <th>Password</th>
                    <th>Dirección</th>
                    <th>Correo</th>
                    <th></th>
                    <th></th>
                </tr>        
            </thead>
            <tbody>
                <%
                     //private String correo, apmat, appat, nom_dueño, password, dir;
                  List<Dueno> lista = AccionesUsuarios.getAllDueño();
                    for(Dueno e : lista){
                    %>
                    <tr>
                        <td> <%=e.getId_dueño()%> </td>
                        <td> <%=e.getApmat()%> </td>
                         <td> <%=e.getAppat() %> </td>
                        <td> <%=e.getNom_dueño()%> </td>
                        <td> <%=e.getPassword()%> </td>
                        <td> <%=e.getDir()%> </td>
                        <td> <%=e.getCorreo()%> </td>
                        <td> <a href="editarDueno.jsp?id=<%=e.getId_dueño()%>" >Editar</a> </td>
                        <td> <a href="borrarDueño?id=<%=e.getId_dueño()%>" >Borrar</a> </td>
                    </tr>    
                    <%
                    }
                    %>
            </tbody>
        </table>
            
         
            
            
            
            
          <h1>Tabla de Datos de la mascota</h1>
        <br>
        <table border="2" >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                     <th>Tipo de raza </th>
                    <th>Tipo de especie</th>
                    <th>Sexo</th>
                    <th>Fecha de nacimiento</th>
                    <th>Pelaje</th>
                    <th>Señas</th>
                    
                    <th></th>
                    <th></th>
                </tr>        
            </thead>
            <tbody>
                <%
                     //    private String nom_mascota, sexo, fecha_nac, pelaje, señas, tipo_raza, tipo_esp;
                 
                 List<Mascota> listaM = AccionesUsuarios.getAllMascota();   
                 for(Mascota g : listaM){
                    
                    %>
                    <tr>
                        <td> <%=g.getId_mascota()%> </td>
                        <td> <%=g.getNom_mascota()%> </td>
                          <td> <%=g. getId_raza()%> </td>
                        <td> <%=g.getId_esp()%> </td>
                        <td> <%=g.getSexo()%> </td>
                        <td> <%=g.getFecha_nac()%> </td>
                         <td> <%=g.getPelaje()%> </td>
                        <td> <%=g.getSeñas()%> </td>
                
                        <td> <a href="editarMascota.jsp?id=<%=g.getId_mascota()%>" >Editar</a> </td>
                        <td> <a href="borrarMascota?id=<%=g.getId_mascota()%>" >Borrar</a> </td>
                    </tr>    
                          <%
                   }
                    %>
            </tbody>
        </table>
          
        <br>
        <a href="index.html" >Regresar al Menu Principal</a>
    </body>
</html>