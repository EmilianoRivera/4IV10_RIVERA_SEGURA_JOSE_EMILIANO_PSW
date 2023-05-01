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

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.sql.ResultSet;

/**
 *
 * @author emiri
 */
public class serv extends HttpServlet {

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
    
    public void init (ServletConfig cfg ) throws ServletException{
        String url = "jdbc:mysql://localhost/prueba";
        String userName = "root";
        String password ="EMI_voca9271";
        
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            con = DriverManager.getConnection(url, userName, password);
            set = con.createStatement();
            
            System.out.println("Conexion Exitosa");
        } catch (Exception e){
            System.out.println("Conexion no Exitosa");
            System.out.println(e.getMessage());
            System.out.println(e.getStackTrace());
        }
    }
    
    
    
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try ( PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            
            
            String nom ;
            nom = request.getParameter("nombre ");
            System.out.println(nom);
         try{
                String q = "insert into prueba1"
                        + "(nombre)"
                        +"values"
                        +"(' " + nom + " ')";
                
                
                set.executeUpdate(q);
                System.out.println("Registro exitosa de la tabla, " + nom);
                
                out.println("<!DOCTYPE html>");
             out.println("<html>");
             out.println("<head>");
             out.println("<title>Servlet guardar</title>");            
             out.println("</head>");
             out.println("<body>"
             +"<br>"
             +"Tu nombre es: " + nom);
                out.println("<h1>Guardado con exito "
                 + "<a href='index.html'>Regresar al Menu Principal </a>");
             out.println("</body>");
             out.println("</html>");
            
                
            }catch (Exception e){
               
                 
                  out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet serv</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>GUARDADO SIN EXITO </h1>"
             + e.getMessage()
              + "<br>"
              + e.getStackTrace()
                    + "<br>"
            + "<a href='index.html'>Regresar al Menu Principal </a>");
            out.println("</body>");
            out.println("</html>");
                 
                  System.out.println("Error al registrar en la tabla");
                 System.out.println(e.getMessage());
                 System.out.println(e.getStackTrace());
                 
            }
            
            
           
        }
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
        processRequest(request, response);
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
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
