<%-- 
    Document   : editar
    Created on : 16 abr. 2023, 15:21:44
    Author     : emiri
--%>

<%@page contentType="text/html"  pageEncoding="UTF-8" language="java"   import="java.sql.*, java.util.* , java.text.*, java.io.* " %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Editar</title>
    </head>
    <body>
        <h1>Actialización del perfil</h1>
        <br><!-- comment -->
        
        <form method="get" name="formularioeditar" action="actualizar.jsp">
             <table border="2" width="100%">
                 <%
                     Connection con = null;
                     Statement set = null;
                     ResultSet rs = null;
                     
                     String url, userName, password, driver;
                     url = "jdbc:mysql://localhost/registro";
                     userName ="root";
                     password ="EMI_voca9271";
                     driver="com.mysql.cj.jdbc.Driver";
                     
                     try{
                        con = DriverManager.getConnection(url, userName, password);
                        
                        try{
                            set = con.createStatement();
                            String q;
                            int id;
                            id = Integer.parseInt(request.getParameter("id"));
                            q ="select id_user, nom_usu, ciu_usu, tel_usu from registrousuario where id_user =" + id;
                            rs = set.executeQuery(q);
                            while(rs.next()){
                                %>
                                      
                                <tr>
                                    <td>ID</td>
                                    <td><input type="hidden" name="id2" value="<%=rs.getInt("id_user")%>"></td>
                                </tr>
                                <tr>
                                    <td>Nombre</td>
                                    <td><input type="text" name="nombre2" value="<%=rs.getString("nom_usu")%>"></td>
                                </tr>
                                <tr>
                                    <td>Ciudad</td>
                                    <td><input type="hidden" name="ciudad2" value="<%=rs.getString("ciu_usu")%>"></td>
                                </tr>
                                <tr>
                                    <td>Telefono</td>
                                    <td><input type="hidden" name="tel2" value="<%=rs.getString("tel_usu")%>"></td>
                                </tr>
                                
                                
                                <%
                            }
                            rs.close();
                            set.close();
                            
                        }catch(SQLException ed){
                        System.out.println("Error no se puede leer la tabla");
                         System.out.println(ed.getMessage());
                            %>
                                 <tr>
                                    <td>ID</td>
                                    <td><input type="hidden" name="id2" value="<%=rs.getInt("id_user")%>"></td>
                                </tr>
                                <tr>
                                    <td>Nombre</td>
                                    <td><input type="text" name="nombre2" value="<%=rs.getString("nom_usu")%>"></td>
                                </tr>
                                <tr>
                                    <td>Ciudad</td>
                                    <td><input type="text" name="ciudad2" value="<%=rs.getString("ciu_usu")%>"></td>
                                </tr>
                                <tr>
                                    <td>Telefono</td>
                                    <td><input type="text" name="tel2" value="<%=rs.getString("tel_usu")%>"></td>
                                </tr>
                            <%
                                 
                        }
                        con.close();

                     }catch (Exception e){
                        System.out.println("Error al conectar la bd");
                        System.out.println(e.getMessage());
                        System.out.println(e.getStackTrace());
                            %>
                            <br><!-- comment -->
                            <h1>Sitio en Construccion</h1>

                            <%

                     }

                 %>

        </table>
            
        </form>
       
    </body>
</html>
