  
  var geocoder;
  var map;
  var activedataNode;
  var markers=[]
  var stopDownloadflag=false
  
  var category='';
  
  
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; 
  var yyyy = today.getFullYear();
  
  if(dd<10) 
	{
		dd='0'+dd;
	} 

	if(mm<10) 
	{
		mm='0'+mm;
	} 
  
  var startingDate = yyyy+'-'+mm+'-'+dd;
  
  var globalCityIndex=0
  var endingDate= today.toISOString().slice(0,10).replace(/-/g,"");
  
  var latt;
  var lonn;
  
  //subtract d to 5 days before me
  //today.setDate(today.getDate()-5)  
  
  //today.setDate(today.getDate())
  
  //var startingDate= today.toISOString().slice(0,10).replace(/-/g,"");
  
  console.log(startingDate);
  
//Indian Locations
/*var locations=[
'Mumbai',
'Delhi',
'Gujarat',
'Haryana',
'Ahemdabad',
'Pune',
'Kanpur',
'Madhya Pradesh',
'Odisha',
'Jammu and Kashmir',
'Surat',
'Patna',
'Kolkatta',
'Kerala',
'Hyderabad',
'Karnataka',
'Chennai'
]*/

var locations=[
'Sydney',
'Melbourne',
'Brisbane',
'Perth',
'Adelaide',
'Canberra',
'Gold Coast',
'Newcastle',
'Hobart',
'Darwin',
'Townsville',
'Cairns',
'Geelong',
'Wollongong',
'Launceston',
'Ballarat',
'Bendigo'
]


var flickeringColors=[
  'ff5722',
  '80d926',
  '00bfff',
  'DA1AA2',
  '00ffdc'
  ]



function dataRanges(){
   $('#datemodal').modal('show');
   $('#endDate').val(startingDate);
}    
  
$('#date').click (function() {  
  dataRanges();
});

$('#catlink').click (function() {  
  $('#categorymodal').modal('show');
});

$(function() {
 $('.datepicker').datepicker({
			dateFormat: 'yy-mm-dd'
	});
});
  
  
$('#dateConfirm').click(function() {
    startingDate= $('#startDate').val();
    endingDate = $('#endDate').val();
    $('#datemodal').modal('hide');
    rerenderData();
});

$('#CategoryConfirm').click(function() {
	    category=$('#category_data').val();
		$('#categorymodal').modal('hide');
        rerenderData();
});

  
var currentDataIndex=0;

//var SentimentURL = "http://localhost:5500/api/tonereq";
//var SentimentURL="http://toneanalyse.diadem.cloud/api/tonereq";
var SentimentURL="http://nodetoneanalyser-env.eba-p5tsxwpj.us-east-2.elasticbeanstalk.com/api/tonereq";
//var SentimentURL = "http://ibmtoneanalyser-env.xkvfi3sbms.us-east-2.elasticbeanstalk.com/api/tonereq";

function rerenderData(startDate,endDate){
  globalCityIndex=0
  stopDownloadflag=true
  for(var i=0;i<markers.length;i++)
  markers[i].setMap(null)
  downloadDataFromWebfromDate(locations[globalCityIndex],globalCityIndex)
}


function increaseIndex(){
	  if(currentDataIndex+1>=activedataNode.length)
	 {
	  console.log("Returnnn From Here")
	  return
	 }
	 currentDataIndex++
	 updateModalData(currentDataIndex)
}


function decreaseIndex(){
	  if(currentDataIndex-1<0)
	 {
	  console.log("Returnnn From here")
	  return
	 }
	 currentDataIndex--;
	 updateModalData(currentDataIndex)
  
}
      
	  
function initMap(){
	//latt = "15.813245";, 
	//lonn = "74.491485";
	latt = "-37.809175";
	lonn = "144.962839";
	//latt = document.getElementById('lat').value;
  //lonn = document.getElementById('lon').value;
  getCitytry(latt,lonn);
	//doGetCity(parseFloat(latt),parseFloat(lonn));
	//console.log('the lat : '+latt+' lon is : '+lonn);
    var centerPoint = {lat: parseFloat(latt), lng: parseFloat(lonn)};
	console.log(centerPoint);
    map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 6,
                  center: centerPoint
            });
    
    //AddMarkerToYourCurrentLocation();
}
      
function AddMarkerToYourCurrentLocation(){
    var myLatLng = new google.maps.LatLng(parseFloat(latt), parseFloat(lonn));
    console.log(myLatLng)
    var myMarker = new google.maps.Marker({
            map: map,
            position: myLatLng,
            label: 'My Location!',
            draggable: true
    });
        
}


function getCitytry(latitude,longitude) {
  geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(latitude,longitude);
    geocoder.geocode({latLng: latlng}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[1]) {
          var arrAddress = results;
         // console.log(results);
          $.each(arrAddress, function(i, address_component) {
            if (address_component.types[0] == "locality") {
              console.log("City: " + address_component.address_components[0].long_name);
              itemLocality = address_component.address_components[0].long_name;
              
              
            }
          });
          locations.push(itemLocality);
              //	alert('City Detected is : '+city.short_name);
          downloadDataFromWeb(locations[globalCityIndex],globalCityIndex);
        } else {
          alert("No results found");
        }
      } else {
        alert("Geocoder failed due to: " + status);
      }
    });
  
}


function downloadDataFromWebfromDate(mcityCode,mcityId) {
	
  console.log("Working On City Index "+mcityId+" and City Code "+locations[mcityId])
  var url;
  if(category){
	  url = "https://newsapi.org/v2/top-headlines";
         url += '?' + $.param({
                                 'apiKey': "796dd65d43df4c16b9e7935cc9609f50",
                                 'q':locations[mcityId],
								 'category':category,
                                 'fl': "abstract,web_url,headline,snippet,lead_paragraph,multimedia",
                                 'from': startingDate,
                                 'sort': "newest"
            });
	  
  } else {
	  url = "https://newsapi.org/v2/everything";
         url += '?' + $.param({
                                 'apiKey': "796dd65d43df4c16b9e7935cc9609f50",
                                 'q':locations[mcityId],
                                 'fl': "abstract,web_url,headline,snippet,lead_paragraph,multimedia",
                                 'from': startingDate,
                                 'sort': "newest"
            });
  }
 
         console.log("News Extraction Url Is \n"+ url);
         $.ajax({
               url: url,
               method: 'GET',
			 
            }).done(function(result) {
                              startParsingData(result.articles,mcityCode)//atricles set and city name
							   console.log("News Extraction Article Length \n"+ result.articles.length);
                              if(globalCityIndex+1<locations.length){
                                setTimeout(function() {
                                    globalCityIndex=globalCityIndex+1;
                                    downloadDataFromWebfromDate(locations[globalCityIndex],globalCityIndex)}, 1000)
                              } else {
                                 console.log("Boom !! And Everything is Over ")
							  }
  
                }).fail(function(err) {
                         console.log("Oopsies !! Error "+cityCode)
                         console.log(err)
                         throw err;
                });
}
      
      
function downloadDataFromWeb(mcityCode,mcityId){
  if(stopDownloadflag){
    console.log("Attempting To Pause All the Pending Downloads of Map Data ");
    stopDownloadflag=false
    return
  }
  console.log("Working On City Index "+mcityId+" and City Code "+locations[mcityId])
  var url = "https://newsapi.org/v2/everything";
         url += '?' + $.param({
                                 'apiKey': "796dd65d43df4c16b9e7935cc9609f50",
                                 'q':locations[mcityId],
                                 'fl': "abstract,web_url,headline,snippet,lead_paragraph,multimedia",
                                 'from': startingDate,
                                 'sort': "newest"
            });
         console.log("News Extraction Url Is \n"+ url);
         $.ajax({
               url: url,
               method: 'GET',
			  
            }).done(function(result) {
                              startParsingData(result.articles,mcityCode)//atricles set and city name
							   console.log("News Extraction Article Length \n"+ result.articles.length);
                              if(globalCityIndex+1<locations.length){
                                setTimeout(function() {
                                    globalCityIndex=globalCityIndex+1;
                                    downloadDataFromWeb(locations[globalCityIndex],globalCityIndex)}, 1000)
                              } else {
                                 console.log("Boom !! And Everything is Over ")
							  }
  
                }).fail(function(err) {
                         console.log("Oopsies !! Error ");
                         console.log(err)
                         throw err;
                });

}



function startParsingData(dataNode,cityCode){
    codeAddress(dataNode,cityCode,dataNode.length);
	//eg:- codeAddress(articles,mumbai,23)
}


function codeAddress(dataNode,addressinWords,numberOfResults) {
    var dataCount=numberOfResults>10?'10+':numberOfResults
    var infowindow = new google.maps.InfoWindow();
    content= document.createElement('a');
    content.setAttribute('href','#');
    content.appendChild(document.createTextNode(addressinWords+' '+dataCount+' News'));
    google.maps.event.addDomListener(content,'click',
                                     function(){
                                       $('#infomodal').modal('show');
                                       openNewsDetail(addressinWords,dataNode)
                                       
                                     })
    infowindow.setContent(content);
    geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address':addressinWords}, function(results, status) {
    if (status == 'OK') {
      
      if((globalCityIndex+1)==locations.length){
       // alert(globalCityIndex);
       // alert(locations.length);
        var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          icon:'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld='+'|f51e1e|000000',
          visible: true
        });
      } else {
        var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          icon:'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld='+'|'+flickeringColors[Math.floor(Math.random() * (4 - 0) + 0)]+'|000000',
          visible: true
        });
      }
         
            markers.push(marker)
            marker.setMap(map)
            if(dataCount==0){
                if((globalCityIndex+1)!=locations.length) 
                   var markerUrl='http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld='+'|000000|000000';
                else
                var markerUrl='http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld='+'|f51e1e|000000';
                 marker.setIcon(markerUrl)
            }else{
                    //go for the iemotional analysis
                  mergeTitlesIntoWord(dataNode,marker)
            }
            marker.addListener('click', function() {
					   infowindow.open(map, marker);
					   infowindow.addListener('click',function(){
										  console.log("Okay !! Some Serious Data Displaying to be Done !!")
					   })
                   //Map Based on Emotion API Play For now 
            });


  
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }


function openNewsDetail(associatedaddress,dataNode){
  currentDataIndex=0;
  console.log("Associated Address is "+associatedaddress)
  console.log(dataNode)
  activedataNode=dataNode
  updateModalData(0) //when modal openos , 0 is the index   of the initial data item
}

function updateModalData(dataIndex){
  $('#info_title').html(activedataNode[dataIndex].title);
  $('#info_source').html("<span>Source : </span>"+activedataNode[dataIndex].source.name);
  $('#info_snippet').html(activedataNode[dataIndex].description);
  $('#info_abstract').html(activedataNode[dataIndex].content);
  $('#info_full').attr('href',activedataNode[dataIndex].url)

//Do The Sentiment Analysis For now 
if(activedataNode[dataIndex].sentimentData==null)
  calculateTitleSentiments(dataIndex,activedataNode[dataIndex].title) // Can switch between headline.main or the snippet
else
{
  $('#info_sentiment').html(activedataNode[dataIndex].sentimentData)
}

}


function calculateTitleSentiments(operatingIndex,title){
  //var userdata = title.split('-').join(' ');
  var url =SentimentURL;
        url += '?' + $.param({
                    'text':title
                   });

   $.ajax({
                url: url,
                method: 'GET',
            }).done(function(result) {
				console.log("Sentiment Result");
				console.log(result);
				
                            if(operatingIndex==currentDataIndex){
								   var dominatingsentiment=result.response;
                                    if(result.isavailable) {
                                       //esponsvar dominatingsentiment=notificationRanker(result.response);
									 
                                      activedataNode[currentDataIndex].sentimentData=dominatingsentiment;
									 // console.log("THE VAR VALUE IS "+dominatingsentiment);
                                      //$("#info_sentiment").html(dominatingsentiment.emotion);
                                    }	else {
                                      activedataNode[currentDataIndex].sentimentData="Neutral";
									  dominatingsentiment=activedataNode[currentDataIndex].sentimentData;
                                    }										
									 
									 $("#info_sentiment").html(dominatingsentiment);
                            }else{
                                    var dominatingsentiment=result.response;
                                    if(result.isavailable) {
                                       //esponsvar dominatingsentiment=notificationRanker(result.response);
									 
                                      activedataNode[currentDataIndex].sentimentData=dominatingsentiment;
									  
                                      //$("#info_sentiment").html(dominatingsentiment.emotion);
                                    }	else {
                                      activedataNode[currentDataIndex].sentimentData="Neutral";
									  dominatingsentiment=activedataNode[currentDataIndex].sentimentData;
                                    }										
									 
									 $("#info_sentiment").html(dominatingsentiment);
                           }
  
               }).fail(function(err) {
                           console.log("Oopsies !! Error ")
                           console.log(err)
                           throw err;
                })
  
}


function mergeTitlesIntoWord(sourceNode,marker){
   console.log(sourceNode);
   var bigString=""
  for(var i=0;i<sourceNode.length;i++){
    bigString+=sourceNode[i].title
  }
  calculateGenericSentiment(bigString,marker)
}


function calculateGenericSentiment(bigtitle,sourceMarker){
  
  var url =SentimentURL
url += '?text='+bigtitle;
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
    var dominatingsentiment=result.response;
   // mapSentimentToColor(sourceMarker,dominatingsentiment);
}).fail(function(err) {
  console.log("Oopsies !! Error ")
  console.log(err)
  throw err;
})
  
}


function mapSentimentToColor(sourceMarker,sentiment){
 //Anger,Disgust,Fear,Joy,Sad
 switch (sentiment) {
   case 'Anger':
     // code
     //Red 
     var markerUrl='http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld='+'|FF0000|000000';
       sourceMarker.setIcon(markerUrl)

     break;
     
     case 'Disgust':
       //code
       //Purple 
var markerUrl='http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld='+'|FF00E8|000000';
  sourceMarker.setIcon(markerUrl)

       break;
       
       case 'Fear':
      //console.log("Map Color "+"Orange")
      var markerUrl='http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld='+'|FF5D00|000000';
        sourceMarker.setIcon(markerUrl)



         break;
         
         case 'Joy':
                 //console.log("Map Color "+"Green")
                 var markerUrl='http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld='+'|08E62A|000000';
                   sourceMarker.setIcon(markerUrl)



           break;
           
           case 'Sad':
                  // console.log("Map Color "+"Blue")
                   var markerUrl='http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld='+'|086AE6|000000';
                     sourceMarker.setIcon(markerUrl)



             break;
   
   default:
   console.log("Map Color "+"Silver")
   var markerUrl='http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld='+'|000000|000000';
    sourceMarker.setIcon(markerUrl)
  break;
  
     
 } 
}

