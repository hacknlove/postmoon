/*globals pm*/

//cambiar la id de vipFactorRtn, comprobar que la id y el nome se han cambiado
pm.test(" vipFactorRtn de perfil se ha cambiado correctamente", function () {
    pm.expect(response.id).to.eql(pm.environment.get("PerfilId"));
    pm.expect(response.vipFactorRtn.id).to.eql();
    pm.expect(response.vipFactorRtn.name).to.eql("");

  
    

       
});