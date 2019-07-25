/*globals pm*/

//cambiar la id y comprobar que el nombre se ha cambiado 
pm.test(" profilesSlaLastStepConnectivity de perfil se ha cambiado correctamente", function () {
    pm.expect(response.id).to.eql(pm.environment.get("PerfilId"));
    pm.expect(response.profilesSlaLastStepConnectivity.id).to.eql()&& (response.profilesSlaLastStepConnectivity.id).
    to.eql("");

       
});