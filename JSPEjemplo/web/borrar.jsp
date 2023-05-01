<%-- 
    Document   : borrar
    Created on : 16 abr. 2023, 15:03:34
    Author     : emiri
--%>

<%@page contentType="text/html"  pageEncoding="UTF-8" language="java"   import="java.sql.*, java.util.* , java.text.*, java.io.* " %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Borrar Registro</title>
    </head>
    <body>
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
               // Class.forName(driver);
                con = DriverManager.getConnection(url, userName, password);
                try{
                 set = con.createStatement();
                    //necesito los parametros del form
                 String q;
                 int id;
                 id = Integer.parseInt(request.getParameter("id"));
                 
                 q="delete from registrousuario where id_user="+id;
                 
                 int eliminar = set.executeUpdate(q);
                 
                 %>
                 
                    <h1>Registro Eliminado con Exito</h1>
                 <%
                     set.close();
            }catch(SQLException ed){
                System.out.println("Error al eliminar el registro en la tabla");
                System.out.println(ed.getMessage());

                  %>
                 
                    <h1>Solo juguito contigo</h1>
                 <%
            }
            con.close();
            }catch (Exception e){
                System.out.println("Error al conectar con la bd");
                System.out.println(e.getMessage());
                System.out.println(e.getStackTrace());
                %>
     <h1>Sitio en Construccion</h1>
                    <%
            }
        %>
        

                <a href="index.html "> Regresar a la pagina principal </a>
    </body>
</html>
