<%-- 
    Document   : consultar
    Created on : 16 abr. 2023, 04:31:32
    Author     : emiri
--%>

<%@page contentType="text/html"  pageEncoding="UTF-8" language="java"   import="java.sql.*, java.util.* , java.text.*, java.io.* " %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Consulta</title>
    </head>
    <body>
        <h1>Tabla General de Registro</h1>
        <div class="containerTable">
            <table border="2" width ="100%" >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Ciudad</th>
                        <th>Telefono</th>
                        <th>Editar</th>
                        <th>Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    <%
                    Connection con = null;
                    Statement set = null;
                    ResultSet rs = null;

                    String url, userName, password, driver;

                    url = "jdbc:mysql://localhost/registro";
                    userName="root";
                    password ="EMI_voca9271";

                    driver="com.mysql.cj.jdbc.Driver ";    
                    try{
                         //Class.forName(driver);
                         con = DriverManager.getConnection(url, userName, password);
                         
                        try {
                            set = con.createStatement();
                            //necesito los parametros del form
                            String q;
                            q ="select * from registrousuario order by nom_usu asc";
                            rs = set.executeQuery(q);
                            while (rs.next()){
                                %> 
                    <tr>
                        <td><%= rs.getInt("id_user")%></td>           
                        <td><%= rs.getString("nom_usu")%></td>           
                        <td><%= rs.getString("ciu_usu")%></td>           
                        <td><%= rs.getString("tel_usu")%></td>   
                        <td><a href="editar.jsp?id=<%=rs.getInt("id_user")%>">Editar</a></td>
                        <td><a href="borrar.jsp?id=<%=rs.getInt("id_user")%>">Borrar</a></td>            
                   </tr>
                                
                                
                                <%
                                    
                            }
                            rs.close();
                            set.close();
                        } catch (Exception ed) {
                            System.out.println("Error al consultar la tabla");
                            System.out.println(ed.getMessage());

%>
                </tbody>
            </table>
<br>
                <h1>Error no se pueden visualizar los datos en este momento</h1>

                        <%                       
                            }
                         con.close();
                    } catch(Exception e){
                        System.out.println("Error al conectar a la bd");
                        System.out.println(e.getMessage());
                        System.out.println(e.getStackTrace());
                            %>

                <br>
                <h1>Sitio en construccion</h1>
                <%
                   }
                    %>
                </tbody>
            </table>
                    <a href="index.html "> Regresar a la pagina principal </a>
        </div>
    </body>
</html>
