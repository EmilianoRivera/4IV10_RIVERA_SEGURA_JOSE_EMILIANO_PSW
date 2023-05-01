/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */

import java.io.IOException;
import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import java.util.Date;
import java.util.Enumeration;

/**
 *
 * @author emiri
 */
public class SeguiminentoSesion extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try ( PrintWriter out = response.getWriter()) {
            
            
            /* TODO output your page here. You may use following sample code. */
            //es la primera vez de su sesion hagamos el hola mundo
            HttpSession sesioncli = request.getSession();
            //Vamos a obtener los datos de la sesion
            String idSession = sesioncli.getId();
            //fecha de cracion de la sesion
            long fechacreacion = sesioncli.getCreationTime();
            //quiero saber cuando fue su ultimo acceso
            long ultimoacceso = sesioncli.getLastAccessedTime();
            //vamos a increamentar un contador para saber cuantas veces a iniciado sesion dentro del navegador
            Integer cuenta = (Integer) sesioncli.getAttribute("cuenta.ss");
            
            if(cuenta == null){
                //porque es la primera vezz que entra
                cuenta = new Integer(1);
            }else{
                //se encargar de ir sumando +1 las veces que entra
            cuenta = new Integer(cuenta.intValue() + 1);
            
            if(cuenta == 3){
                System.out.println("GRACIAS");
                
            }
        }
            
            sesioncli.setAttribute("cuenta.ss", cuenta);
             out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Ejemplo de sesiones</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Datos de la sesion</h1>");
            out.println("Id DE LA SESIÓN:" + idSession);
            out.println("fue creada en : :" + (new Date(fechacreacion)).toString()  );
            out.println("Ultimo acceso en :" + (new Date(ultimoacceso)).toString() );
            out.println("Atributos de la sesion : " );
            Enumeration nombresParametros = sesioncli.getAttributeNames();
            while(nombresParametros.hasMoreElements()){
                String parametros = (String)nombresParametros.nextElement();
                Object valor = sesioncli.getAttribute(parametros);
                   out.println(parametros + " : " + valor.toString() + "<br>");
            }
            out.println("<a href= 'index.html'>Regresar<a/>");
            out.println("</body>");
            out.println("</html>");
            
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
