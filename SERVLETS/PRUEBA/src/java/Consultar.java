/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */

import jakarta.servlet.ServletConfig;
import java.io.IOException;
import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.sql.Connection; //Se encarga de la conexión con la bd
import java.sql.DriverManager;
import java.sql.Statement; //Se encarga de poder realizar las sentencias sql: INSERT, DROP, ALTER, DELETE, UPDATE, CREATE
import java.sql.ResultSet;//Se encarga de generar un objeto para poder realizar las consultas sql 

/**
 *
 * @author emiri
 */
public class Consultar extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    
     private Connection con;
    private Statement set;
    private ResultSet rs;
    
    //constructor
    public void init(ServletConfig cfg) throws ServletException{
        //Como se va a conectar con la bd
         String url = "jdbc:mysql://localhost/guardar4iv10";
                      //tipodriver:gestorbd:puerto//puerto/ip/nombreid
        String userName="root";
        String password ="EMI_voca9271"; //EMI_voca9271
        
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            /*
            
            AVECES EL TIPO DE DRIVER YA TIENE INCLUIDO EL PUERTO DE COMUNICACIÓN, 
            ES POR ELLO QUE NOS ARROJA UN ERROR DE CONEXION PARA RESOLVER ESTE ERROR 
            SIMPLEMENTE HACEMOS LO SIGUIENTE:
            url ="jdbc:mysql://localhost/guardar4iv10"
            url ="jdbc:mysql:3306//localhost/guardar4iv10"
            */
            con = DriverManager.getConnection(url, userName, password);
            set = con.createStatement();
            
            System.out.println("Conexion exitosa");
        }catch (Exception e){
            System.out.println("Conexion no exitosa");
            System.out.println(e.getMessage());
            System.out.println(e.getStackTrace());
        }
        
        
    }
           
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
       response.setContentType("text/html;charset=UTF-8");
        try ( PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Consultar</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Tabla de registro de usuarios</h1>"
            + "<table border='2'>"
                    + "<thead>"
                        + "<tr>"
                            + "<th> ID </th>"
                            + "<th> Nombre Completo </th>"
                             + "<th> Correo </th>"
                             + "<th> Edad </th>"
                        +"</tr>"
                    + "</thead>"
                    +"<tbody>");
             String nom, appat, apmat, correo, q;
            int  edad, id;
            
            
            q = "select * from mguardar";
            
            try{
            set = con.createStatement();
            rs = set.executeQuery(q);
            while(rs.next()) {
                id = rs.getInt("id_user");
                nom = rs.getString("nom_usu");
                appat = rs.getString("appat_usu");
                apmat = rs.getString("apmat_usu");
                correo = rs.getString("email_usu");
                edad = rs.getInt("edad");
                out.println( "<tr>"
                        + "<td>" + id + "</td>"
                         + "<td>" + nom + " " + appat + " " + apmat + "</td>"
                         + "<td>" +edad + "</td>"
                         + "<td>" +correo + "</td>"
                        + "</tr>");
           
            }
                System.out.println("Consulta exitosa");
                rs.close();
                set.close();
                
                
                
            }catch (Exception e){
                System.out.println("Error al realizar la consulta: " + e.getMessage());
                System.out.println(e.getStackTrace());
            }
            out.println("</tbody>"
                    + "</table>"
                    +"<br>"
                    +"<a href='index.html'>Regresar al Menu Principal </a>"
                    +"<br>"
                        +"<a href='guardar'>Nuevo Registro </a>"
                    +"<br>"
                    +"<br>"
                     +"<a href='Eliminar'>Eliminar Registro </a>"
                    +"<br>"
            );
            out.println("</body>");
            out.println("</html>");
        }
        
        
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
      
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    
    public void destroy(){
        try{
            con.close();
        }catch(Exception e){
            super.destroy();
        }
    }
    
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
