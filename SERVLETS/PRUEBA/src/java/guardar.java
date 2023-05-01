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
public class guardar extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    //VARIABLES GLOBALES
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
        response.setContentType("text/html;charset=UTF-8");
        try ( PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            
            
            String nom, appat, apmat, correo, ip, ipr;
            int  edad, puerto, puertor;
            
            nom = request.getParameter("nombre");
            appat = request.getParameter("appat");
            apmat = request.getParameter("apmat");
            
            
            edad = Integer.parseInt(request.getParameter("edad"));
          
            correo = request.getParameter("correo");
            
            ip = request.getLocalAddr();
            puerto = request.getLocalPort();
            
            ipr = request.getRemoteAddr();
            puertor = request.getRemotePort();
            
            //vamos a intentar registrar en la bd
            try{
                /*PARA PODER REGISTRAR UN USUARIO ES NECESARIO LA SENTENCIA INSERT BAJO EL SIGUIENTE ESQUEMA:
                INSERT INTO nombretabla (atributo1, atributo2, ...) values ("valor1", "valor2", "valor3",..)
                
                ""valores de tipo cadena
                ''numerico
                nada numerico
                
                */
                String q = "insert into mguardar " 
                        +"(nom_usu, appat_usu, apmat_usu, email_usu, edad)"
                        + " values"
                        + "('"+nom+"', '"+appat+"' , '"+apmat+"',  '"+correo+"', " +edad+ " )";
            
                set.executeUpdate(q);
                System.out.println("Registro exitoso de la tabla");
                
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet guardar</title>");            
            out.println("</head>");
            out.println("<body>"
            +"<br>"
            +"Tu nombre es: " + nom
            +"<br>"
            +"Tu appat es: " + appat
            +"<br>"
            +"Tu apmat es: " + apmat
            +"<br>"
            +"Tu edad es: " + edad
            +"<br>"
            +"Tu correo es: " + correo
            +"<br>"
            + "IP LOCAL:  " + ip
            +"<br>"
            + "PUERTO LOCAL:  " + puerto
            +"<br>"
            + "IP REMOTA:  " + ipr
            +"<br>"
            + "PUERTO  REMOTO:  " + puertor
            +"<br>"
                    
                            
            );
            out.println("<h1>Guardado con exito "
                + "<a href='index.html'>Regresar al Menu Principal </a>");
            out.println("</body>");
            out.println("</html>");
            set.close();
            }catch(Exception e){
                System.out.println("Error al registrar en la tabla");
                System.out.println(e.getMessage());
                System.out.println(e.getStackTrace());
                
                out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet guardar</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Guardado sin exito, ocurrio un error "
                + "<a href='index.html'>Regresar al Menu Principal </a>"
                +"<br>"
                +"<a href='guardar'>Consultar Tabla General </a>"
                +"<br>"
                +"<br>"
                +"<a href='Eliminar'>Eliminar Registro </a>"
                 +"<br>");
            out.println("</body>");
            out.println("</html>");
                
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
