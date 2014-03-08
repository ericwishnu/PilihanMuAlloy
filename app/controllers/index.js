var isIpad = OS_IOS && Alloy.isTablet;
var usesNavGroup = (OS_IOS && Alloy.isHandheld) || OS_MOBILEWEB;

// save a global reference to the navgroup on iPhone
if (usesNavGroup) {
    Alloy.Globals.navgroup = OS_MOBILEWEB ? $.navgroup : $.index;
}

// respond to detail event triggered on index controller
$.master.on('detail', function(e) {
    // get the detail controller and window references
    var controller = isIpad ? $.detail : Alloy.createController('detail');
    var win = controller.getView();

    // set the new detail article
    controller.setArticle(e.row.articleUrl);

    // open the detail windows
    if (usesNavGroup) {
        if (OS_MOBILEWEB) {
            Alloy.Globals.navgroup.open(win);
        } else {
            Alloy.Globals.navgroup.openWindow(win);
        }
    } else if (OS_ANDROID) {
        win.open();
    }
});

if (OS_ANDROID) {
    $.tabGroup.open();

    //$.master.getView().open();
} else {

    // $.tabGroup.open();
}

function doClick(e) {
    var settingWin = Ti.UI.createWindow({

        title : 'Setting'
    });

    var settingTableView = Ti.UI.createTableView({
        title : 'settingTableView'
    });

    var accountTableRow = Ti.UI.createTableViewRow({
        title : 'Account',
        height : '100dp'
    });

    var accountLabel = Ti.UI.createLabel({
        text : 'Account',
        color : '#fff'
    });
    accountTableRow.addEventListener('click', function(e) {
        alert('ACCOUNT');
    });
    accountTableRow.add(accountLabel);

    var aboutTableRow = Ti.UI.createTableViewRow({
        title : 'About',
        height : '100dp'
    });
    var aboutLabel = Ti.UI.createLabel({
        text : 'About',
        color : '#fff',

    });
    aboutTableRow.add(aboutLabel);
    
    aboutTableRow.addEventListener('click',function(e){
        alert('ABOUT');
    });
    
    
    var data = [];
    data.push(accountTableRow);
    data.push(aboutTableRow);
    settingTableView.data = data;

    // settingTableView.add(accountTableRow);
    // settingTableView.add(aboutTableRow);
    settingWin.add(settingTableView);
    settingWin.open();
    Ti.API.info("Menu item clicked: " + e.source.title);
}

// Ensure menu is displayed
function doOpen(e) {
    $.win.invalidateOptionsMenu();
}

