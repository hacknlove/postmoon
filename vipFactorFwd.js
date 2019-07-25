/*globals pm*/

//cambiar la id de vipFactorFwd, comprobar que la id y el nome se han cambiado
pm.test(" vipFactorFwd de perfil se ha cambiado correctamente", function () {
    pm.expect(response.id).to.eql(pm.environment.get("PerfilId"));
    pm.expect(response.vipFactorFwd.id).to.eql();
    pm.expect(response.vipFactorFwd.name).to.eql("");

  
    

       
});