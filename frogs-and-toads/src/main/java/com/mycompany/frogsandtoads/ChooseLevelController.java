/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.frogsandtoads;

import java.io.IOException;
import java.net.URL;
import java.util.ResourceBundle;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.Button;

/**
 * FXML Controller class
 *
 * @author ajinkyawani
 */
public class ChooseLevelController implements Initializable {

    @FXML
    private Button levelMediumButton;
    @FXML
    private Button levelEasyButton;

    /**
     * Initializes the controller class.
     */
    @Override
    public void initialize(URL url, ResourceBundle rb) {
        // TODO
    }    

    @FXML
    private void playMediumLevel(ActionEvent event) throws IOException {
          App.setRoot("MediumLevel");
    }

    @FXML
    private void playEasyLevel(ActionEvent event) throws IOException {
          App.setRoot("MainScreen");
    }
    
    
    @FXML
    private void Back(ActionEvent event) throws IOException {
          App.setRoot("welcome");
    }
}
