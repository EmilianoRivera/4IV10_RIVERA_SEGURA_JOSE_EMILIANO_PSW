/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Controlador;

/**
 *
 * @author emiri
 */
import java.sql.*;

public class Conexión {
    
    public static Connection getConnection(){
        String url, userName, password;
        
        url = "jdbc:mysql://localhost/Veterinaria";
        userName = "root";
        password = "EMI_voca9271";
        
        Connection con = null;
        
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            con = DriverManager.getConnection(url, userName, password);
            System.out.println("Se conecto a la BD");
          System.out.println(con);
        }catch(Exception e){
            System.out.println("No se conecto a la BD");
            System.out.println(e.getMessage());
        
        }
        return con;
    }
    
}
