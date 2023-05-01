<%-- 
    Document   : actualizar
    Created on : 16 abr. 2023, 15:48:01
    Author     : emiri
--%>

<%@page contentType="text/html"  pageEncoding="UTF-8" language="java"   import="java.sql.*, java.util.* , java.text.*, java.io.* " %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
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
                    String nom, ciudad, tel, q;
                    int id;
                    nom = request.getParameter("nombre2");
                    ciudad = request.getParameter("ciudad2");
                    tel = request.getParameter("tel2");
                 
                    id = Integer.parseInt(request.getParameter("id2"));
                 
                q = "update registrousuario set nom_usu = ' " + nom +  " ', ciu_usu =  ' " + ciudad + "  ', tel_usu = ' " + tel+  " ' "
                
                + "where id_user =  ' "  +id + " ' " ;
                 
                 int actualizar = set.executeUpdate(q);
                 
                 %>
                 
                          
        <h1>Datos actualizados con exito!</h1>
                 <%
                     set.close();
            }catch(SQLException ed){
                System.out.println("Error al actualizar el registro en la tabla");
                System.out.println(ed.getMessage());
                                  System.out.println(ed.getStackTrace());
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
