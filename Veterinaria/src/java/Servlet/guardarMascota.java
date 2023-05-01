/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package Servlet;

import Controlador.AccionesUsuarios;

import Modelo.Raza;
import Modelo.Especie;
import Modelo.Mascota;
import java.io.IOException;
import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 *
 * @author emiri
 */
public class guardarMascota extends HttpServlet {

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
            
            String nom_mascota, sexo, fecha_nac, pelaje, señas, tipo_raza, tipo_esp;
            
            nom_mascota = request.getParameter("nombre_mascota");
            sexo = request.getParameter("sexo");
            fecha_nac = request.getParameter("fecha_nac");
            tipo_raza = request.getParameter("tipo_raza");
            tipo_esp = request.getParameter("tipo_esp");
            pelaje = request.getParameter("pelaje");
            señas = request.getParameter("señas");
                         
             Raza g1 = new Raza();
             g1.setTipo_raza(tipo_raza);
             
             
             Especie g2 = new Especie ();
             g2.setTipo_esp(tipo_esp);
         
                Mascota g = new Mascota();
             g.setNom_mascota(nom_mascota);
             g.setSexo(sexo);
             g.setSeñas(señas);
            g.setFecha_nac(fecha_nac);
            g.setPelaje(pelaje);
             
             
        int estatus2 = AccionesUsuarios.registrarRaza(g1);
        int estatus3 = AccionesUsuarios.registrarEspecie(g2);
        int estatus = AccionesUsuarios.registrarMascota(g);
        
        //int consul1 = AccionesUsuarios.buscarIdByEspecie(tipo_esp);
             
          



            System.out.println(estatus + " " + estatus2 + " " + estatus3);
            if(estatus > 0 & estatus2 > 0& estatus3 >0){
                response.sendRedirect("registroGeneral.jsp");
            }else{
                response.sendRedirect("error.jsp");
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
