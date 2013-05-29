/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

LoginTutorial.statechart = SC.Statechart.create({
    rootState: SC.State.design({
        initialSubstate: 'loggedOut',
        
        loggedOut: SC.State.design({
            enterState: function() {
                LoginTutorial.getPath('loginPage.mainPane').append();
            },
            exitState: function() {
                LoginTutorial.getPath('loginPage.mainPane').remove();
            },
            authenticate: function(){
                var userName = LoginTutorial.getPath('loginController.userName');
                var password = LoginTutorial.getPath('loginController.password');
                
                if((!SC.empty(userName)) && (!SC.empty(password))){
                    this.gotoState('loggedIn');
                }else{
                    SC.AlertPane.error("Login information incorrect!");
                }
            }
        }),
        loggedIn: SC.State.design({
            enterState: function() {
                LoginTutorial.getPath('mainPage.mainPane').append();
            }

        })

    })
});
