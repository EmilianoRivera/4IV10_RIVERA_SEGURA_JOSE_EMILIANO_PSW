/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Controlador;
import Modelo.Dueno;
import Modelo.Cita;
import Modelo.DCita;
import Modelo.Especie;
import Modelo.Estado_Mascota;
import Modelo.ExpClinico;
import Modelo.Mascota;
import Modelo.Raza;
import Modelo.TipoVacuna;
import Modelo.Tipo_cita;
import Modelo.Tratamiento;
import Modelo.Vacuna;
import Modelo.Veterinario;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author emiri
 */



public class AccionesUsuarios {
       //METODOS DE REGISTRO
    
       public static int registrarDuenoyMascota(Dueno e, Mascota a , Especie s, Raza r){
        int estatus = 0;
        try{
            Connection con = Conexión.getConnection();
            String q = "insert into mascota(nombre, sexo, fecha_nac, pelaje, señas,id_raza,id_esp) "
                    + "values(?,?,?,?,?,(select id_raza from raza where tipo_raza = ?),"
                    + "(select id_esp from especie where tipo_esp = ?) )";
            
            PreparedStatement ps = con.prepareStatement(q);
            
            ps.setString(1, e.getNom_mascota());
            ps.setString(2, e.getSexo());
            ps.setString(3, e.getFecha_nac());
            ps.setString(4, e.getPelaje());
            ps.setString(5, e.getSeñas());
            ps.setString(6, e.getTipo_raza());
            ps.setString(7, e.getTipo_esp());
            
            estatus = ps.executeUpdate();
            System.out.println("Registro de mascota exitoso");
            
            String qd = "insert into dueño(correo, nom, appat, apmat, dir, password, id_mascota) "
                    + "values(?,?,?,?,?,?,last_insert_id())";
            
            PreparedStatement psd = con.prepareStatement(qd);
            
            psd.setString(1, e.getCorreo());
            psd.setString(2, e.getNom_dueño());
            psd.setString(3, e.getAppat());
            psd.setString(4, e.getApmat());
            psd.setString(5, e.getDir());
            psd.setString(6, e.getPassword());
            
            estatus = psd.executeUpdate();
            con.close();
        }catch(Exception ed){
            System.out.println("Error al registar a la mascota");
            System.out.println(ed.getMessage());
        
        }
        
        return estatus;
    }
    
    
        public static int registrarDueño(Dueno e){
        int estatus = 0;
        try{
            Connection con = Conexión.getConnection();
            String q = "insert into dueño(correo, nom, appat, apmat, dir, password, id_mascota) "
                    + "values(?,?,?,?,?,?,last_insert_id())";
            
            PreparedStatement ps = con.prepareStatement(q);
            
            ps.setString(1, e.getCorreo());
            ps.setString(2, e.getNom_dueño());
            ps.setString(3, e.getAppat());
            ps.setString(4, e.getApmat());
            ps.setString(5, e.getDir());
            ps.setString(6, e.getPassword());
            
            
            estatus = ps.executeUpdate();
            System.out.println("Registro de dueño exitoso");
            con.close();
        }catch(Exception ed){
            System.out.println("Error al registar al dueño");
            System.out.println(ed.getMessage());
        
        }
        return estatus;
    }
       
       public static int registrarMascota(Mascota e){
        int estatus = 0;
        try{
            Connection con = Conexión.getConnection();
            String q = "insert into mascota(nombre, sexo, fecha_nac, pelaje, señas) "
                    + "values(?,?,?,?,?)";
            
            PreparedStatement ps = con.prepareStatement(q);
            
            ps.setString(1, e.getNom_mascota());
            ps.setString(2, e.getSexo());
            ps.setString(3, e.getFecha_nac());
            ps.setString(4, e.getPelaje());
            ps.setString(5, e.getSeñas());
            
            estatus = ps.executeUpdate();
            System.out.println("Registro de mascota exitoso");
            con.close();
        }catch(Exception ed){
            System.out.println("Error al registar a la mascota");
            System.out.println(ed.getMessage());
        
        }
        return estatus;
    }
       
       public static int registrarEspecie(Especie e){
        int estatus = 0;
        try{
            Connection con = Conexión.getConnection();
            String q = "insert into especie(tipo_esp) "
                    + "values(?)";
            
            PreparedStatement ps = con.prepareStatement(q);
            
            ps.setString(1, e.getTipo_esp());

            
            estatus = ps.executeUpdate();
            System.out.println("Registro de especie exitoso");
            con.close();
        }catch(Exception ed){
            System.out.println("Error al registar a la especie");
            System.out.println(ed.getMessage());
        
        }
        return estatus;
    }
       
       public static int registrarRaza(Raza e){
        int estatus = 0;
        try{
            Connection con = Conexión.getConnection();
            String q = "insert into raza(tipo_raza) "
                    + "values(?)";
            
            PreparedStatement ps = con.prepareStatement(q);
            
            ps.setString(1, e.getTipo_raza());

            
            estatus = ps.executeUpdate();
            System.out.println("Registro de raza exitoso");
            con.close();
        }catch(Exception ed){
            System.out.println("Error al registar a la raza");
            System.out.println(ed.getMessage());
        
        }
        return estatus;
    }
       
   //METODOS DE OBTENCION
      //ACA EL ERROR
    public static Especie buscarIdByEspecie(String esp){
        Especie e = new Especie();
        try{
            Connection con = Conexión.getConnection();
            String q = "select id_esp from especie where id_esp = ?";
            
            PreparedStatement ps = con.prepareStatement(q);
            
            ps.setString(1, esp);
            
            ResultSet rs = ps.executeQuery();

            e.setId_esp(rs.getInt(1));
            System.out.println(e);
            System.out.println("Se encontro a la especie");
            con.close();
        }catch(Exception ed){
            System.out.println("Error al buscar a la especie");
            System.out.println(ed.getMessage());
        
        }
        return e;
        
    }
    
        public static Raza buscarIdByRaza(String raza){
        Raza e = new Raza();
        try{
            Connection con = Conexión.getConnection();
            String q = "select id_raza from raza where id_raza = ?";
            
            PreparedStatement ps = con.prepareStatement(q);
            
            ps.setString(1, raza);
            
            ResultSet rs = ps.executeQuery();

            e.setId_raza(rs.getInt(1));
            System.out.println(e);
            System.out.println("Se encontro a la raza");
            con.close();
        }catch(Exception ed){
            System.out.println("Error al buscar a la raza");
            System.out.println(ed.getMessage());
        
        }
        return e;
        
    }
       //METODOS DE BORRAR
      public static int borrarDueño(int id){
        int estatus = 0;
        try{
            Connection con = Conexión.getConnection();
            String q = "delete from dueño where id_dueño = ?";
            
            PreparedStatement ps = con.prepareStatement(q);
            
            ps.setInt(1, id);
            
            estatus = ps.executeUpdate();
            System.out.println("Eliminacion del dueño exitoso");
            con.close();
        }catch(Exception ed){
            System.out.println("Error al borrar al dueño");
            System.out.println(ed.getMessage());
        
        }
        return estatus;
        
    }
      public static int borrarMascota(int id_mascota){
        int estatus = 0;
        try{
            Connection con = Conexión.getConnection();
            String q = "delete from mascota where id_mascota = ?";
            
            PreparedStatement ps = con.prepareStatement(q);
            
            ps.setInt(1, id_mascota);
            
            estatus = ps.executeUpdate();
            System.out.println("Eliminacion de la mascota exitosa");
            con.close();
        }catch(Exception ed){
            System.out.println("Error al borrar a la mascota");
            System.out.println(ed.getMessage());
        
        }
        return estatus;
        
    }
       
       
       //METODOS DE ACTUALIZAR
       //METODOS DE DESPLEGADO
      public static List<Dueno> getAllDueño(){
        List<Dueno> lista = new ArrayList<Dueno>();
        
        try{
            Connection con = Conexión.getConnection();
            String q = "select * from dueño";
            
            PreparedStatement ps = con.prepareStatement(q);
 //String q = "insert into dueño(correo, nom, appat, apmat, dir, password) "
   //                 + "values(?,?,?,?,?,?)";
            
            ResultSet rs = ps.executeQuery();
            while(rs.next()){
                Dueno g = new Dueno();
                g.setCorreo(rs.getString(1));
                g.setNom_dueño(rs.getString(2));
                g.setAppat(rs.getString(3));
                g.setApmat(rs.getString(4));
                g.setDir(rs.getString(5));
                g.setPassword(rs.getString(6));
                lista.add(g);
            }
            System.out.println("Se encontro al dueño");
            con.close();
        }catch(Exception ed){
            System.out.println("Error al buscar al dueño");
            System.out.println(ed.getMessage());
        
        }
        return lista;
        
    }
       
      public static List<Mascota> getAllMascota(){

        List<Mascota> listaM = new ArrayList<Mascota>();
        try{
            Connection con = Conexión.getConnection();
            
            String q = "select id_mascota, nombre, id_raza, id_esp, sexo, fecha_nac, pelaje, señas from mascota";
            // String q = "insert into mascota(nombre,id_raza, id_esp, sexo, fecha_nac, pelaje, señas) "
             //       + "values(?, (select id_raza from raza where tipo_raza =?),(select id_esp from especie where tipo_esp = ?),?,?,?,?)";
            PreparedStatement ps = con.prepareStatement(q);


            ResultSet rs = ps.executeQuery();
            while(rs.next()){
                Mascota g = new Mascota();
                Raza r = new Raza();
                Especie e = new Especie();
                g.setId_mascota(rs.getInt(1));
                g.setNom_mascota(rs.getString(2));
                  r.setTipo_raza(rs.getString(3));
                e.setTipo_esp(rs.getString(4));
                g.setSexo(rs.getString(5));
                g.setFecha_nac(rs.getString(6));
                g.setPelaje(rs.getString(7));
                g.setSeñas(rs.getString(8));
              
                listaM.add(g);

                
                
            }
            System.out.println("Se encontro a la mascota");
            con.close();
        }catch(Exception ed){
            System.out.println("Error al buscar a la mascota");
            System.out.println(ed.getMessage());
        
        }
        return listaM;
        
    }
      public static List<Raza> getAllRaza(){
        List<Raza> lista = new ArrayList<Raza>();
        
        try{
            Connection con = Conexión.getConnection();
            String q = "select * from raza";
            
            PreparedStatement ps = con.prepareStatement(q);
            //private String nom_mascota, sexo, pelaje, señas, tipo_raza, tipo_esp, fecha_nac;
            /*
            <td> <%=g.getId_mascota()%> </td>
                        <td> <%=g.getNom_mascota()%> </td>
                        <td> <%=g.getSexo()%> </td>
                        <td> <%=g.getFecha_nac()%> </td>
                         <td> <%=g.getPelaje()%> </td>
                        <td> <%=g.getSeñas()%> </td>
                        <td> <%=g. getTipo_raza()%> </td>
                        <td> <%=g.getTipo_esp()%> </td>
            
            */
            ResultSet rs = ps.executeQuery();
            while(rs.next()){
                Raza g = new Raza();

                  g.setTipo_raza(rs.getString(1));

              
                lista.add(g);
            }
            System.out.println("Se encontro a la raza");
            con.close();
        }catch(Exception ed){
            System.out.println("Error al buscar a la raza");
            System.out.println(ed.getMessage());
        
        }
        return lista;
        
    }
 
}
