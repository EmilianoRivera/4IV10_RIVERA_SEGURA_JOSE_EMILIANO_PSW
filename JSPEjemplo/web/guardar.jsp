<%-- 
    Document   : guardar
    Created on : 16 abr. 2023, 03:53:24
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
            //aqui ya puedo incorporar codigo java
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
                
                //diferentes vistas para los errores
                //error exclusivo de sql
                try{
                    set = con.createStatement();
                    //necesito los parametros del form
                    String nom, ciudad, tel, q;
                    
                    nom = request.getParameter("nombre");
                    ciudad = request.getParameter("ciudad");
                    tel = request.getParameter("tel");
                    q = "insert into registrousuario(nom_usu, ciu_usu, tel_usu)"
                    + "values"
                    +"( ' " + nom + " ' , ' " + ciudad + " ', ' " +tel+ " ' ) ";
                    
                    
                    
                    int registro = set.executeUpdate(q);
                    %>
                    <h1>Registro Exitoso</h1>
                    <%
                    set.close();
                    
                }catch(SQLException ed){
                    System.out.println("Error al registrar en la tabla: " );
                    System.out.println(ed.getMessage() );

                    %>
                    <h1>Registro No Exitoso, error en la lectura de la tabla</h1>
                    <%
                }
            con.close();
            }catch(Exception e) {
                System.out.println("Error al conectar a la bd");
                System.out.println(e.getMessage() );
                System.out.println(e.getStackTrace() );

                    %>
     <h1>Sitio en Construccion</h1>
                    <%

            }


        %>
        
        

        <a href="index.html "> Regresar a la pagina principal </a>
    </body>
</html>
