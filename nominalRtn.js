//cambiar nominalRtn de 0 a  5? (numero)

pm.test(" nominalRtn de perfil se ha cambiado correctamente", function () {
    pm.expect(response.id).to.eql(pm.environment.get("PerfilId"));
    pm.expect(response.nominalRtn).to.eql(5);

  
    

       
});