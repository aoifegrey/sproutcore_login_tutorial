/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


LoginTutorial.loginPage = SC.Page.design({
    mainPane: SC.MainPane.design({
        defaultResponder: 'LoginTutorial.statechart',
        childViews: 'form'.w(),
        form: SC.View.design({
            layout: {width: 200, height: 160, centerX: 0, centerY: 0},
            childViews: 'header userName password loginButton'.w(),
            header: SC.LabelView.design({
                layout: {width: 200, height: 24, top: 0, centerX: 0},
                controlSize: SC.LARGE_CONTROL_SIZE,
                value: 'Login Required',
                textAlign: SC.ALIGN_CENTER
            }),
            userName: SC.TextFieldView.design({
                layout: {centerX: 0, top: 30, width: 150, height: 30},
                hint: "Username",
                valueBinding: 'LoginTutorial.loginController.userName'
            }),
            password: SC.TextFieldView.design({
                layout: {centerX: 0, top: 80, width: 150, height: 30},
                hint: "Password",
                password: YES,
                valueBinding: 'LoginTutorial.loginController.password'
            }),
            loginButton: SC.ButtonView.design({
                layout: {width: 100, height: 30, top: 120, centerX: 0},
                controlSize: SC.HUGE_CONTROL_SIZE,
                title: 'Login',
                action: 'authenticate'
            })
        })

    })
});

