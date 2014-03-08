/**
 * @author Eric Wishnu Saputra
 */
var win = Titanium.UI.currentWindow;
var partaiTableView = $.partaiTableView;
var data = [];

var partaiHTTPClient = Titanium.Network.createHTTPClient({
    onload : function(e) {

        //create a json object using the JSON.PARSE function

        var jsonObject = JSON.parse(this.responseText);
        var results = jsonObject.data.results;
        var partai = jsonObject.data.results.partai;
        var total = jsonObject.data.results.count;

        //get through each item
        for (var i = 0; i < total; i++) {
            var aFeed = partai[i];
            //create table row
            var row = Titanium.UI.createTableViewRow({
                _nama : aFeed.nama,
                _nama_lengkap: aFeed.nama_lengkap,
                _id : aFeed.id,
                _url_logo_medium: aFeed.url_logo_medium,
                _url_logo_small: aFeed.url_logo_small,
                hasChild : true,
                height : '70dp',
                backgroundColor : '#fff'
            });
           
            //title label for row at index i
            var titleLabel = Titanium.UI.createLabel({
                text : aFeed.nama,
                font : {
                    fontSize : 14,
                    fontWeight : ' bold'
                },
                left : 70,
                top : 5,
                height : 20,
                width : 210,
                color : '#232'
            });

            row.add(titleLabel);

            //description view for row at index i

            var descriptionLabel = Titanium.UI.createLabel({
                text : aFeed.nama_lengkap,
                font : {
                    fontSize : 10,
                    fontWeight : ' normal '
                },
                left : 70,
                top : titleLabel.height + 10,
                width : 200,
                color : '#9a9'
            });

            row.add(descriptionLabel);

            //add our little icon to the left of the row
            var image = aFeed.url_logo_medium;
            var iconImage = Titanium.UI.createImageView({
                image : image,
                width : 50,
                height : 50,
                left : 10,
                top : 10
            });
            row.add(iconImage);
            //row.selectedBackgroundColor="#4bd762";

            //add the row to data array
            data.push(row);
        }
        // set the data to tableview's data
        partaiTableView.data = data;

        if (reloading == true) {
            //when done, reset the header to its original style
            moduleTable.setContentInsets({
                top : 0
            }, {
                animated : true
            });
            reloading = false;
            statusLabel.text = "Pull to refresh...";
            actIndicator.hide();
            arrowImage.backgroundImage = 'img/refreshArrow.png';
            arrowImage.show();
        }
        isLoad = true;
    },
    onerror : function(e) {
        // log the error to our Ti tanium Studio console
        reloading = false;
        pulling = false;
        arrowImage.hide();
        actIndicator.hide();
        statusLabel.text = "";
        partaiTableView.setContentInsets({
            top : 0
        }, {
            animated : true
        });
        Ti.API.debug(e.error);
        alert("Failed to retrieve data. \n Please make sure you're connected to internet.");
        if (!isLoad)
            isLoad = false;
        //Ti.API.error(this.status + ' - ' + this.statusText);
    },
    timeout : 3000
});

var offset = 0;
//table scrolling function
partaiTableView.addEventListener('scroll', function(e) {

});

partaiTableView.addEventListener('dragEnd', function(e) {

});
//tablerow selected function: create new window
partaiTableView.addEventListener('click', function(e) {

    //get the selected row index
    var selectedRow = e.rowData;

    // create detail window
    var detailWindow = Titanium.UI.createWindow({
        _nama : selectedRow._nama,
        _id : selectedRow._id,
        backgroundColor : '#fff',
        url : 'partaiDetail.js',
        title : selectedRow._nama,
        id : 0
    });
    var args = selectedRow;
    var win = Alloy.createController('partaiDetail',args).getView();
    
    Ti.API.info(win);
     Ti.API.info("selected:"+detailWindow._nama);
        //detailWindow.open();
    //Titanium.UI.currentTab.open(detailWindow);
});
// this method will process the remote data

//modulesHTTPClient.onload =

//this method will fire if there's an error in accessing the //remote data

loadPartai();

// function
function loadPartai() {
    //open the modules xml feed

    partaiHTTPClient.open('GET', 'http://api.pemiluapi.org/candidate/api/partai?apiKey=06ec082d057daa3d310b27483cc3962e');

    //execute the call to the remote feed

    partaiHTTPClient.send();

}