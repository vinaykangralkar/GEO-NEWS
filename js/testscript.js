function calculateTitleSentiments(title){
  
  var url ="http://ibmtoneanalyser-env.xkvfi3sbms.us-east-2.elasticbeanstalk.com/api/tonereq"
         url += '?text='+title;

   $.ajax({
                url: url,
                method: 'GET',
            }).done(function(result) {
				console.log("Sentiment Result");
				console.log(result);
				
                            if(operatingIndex==currentDataIndex){
                                     //esponsvar dominatingsentiment=notificationRanker(result.response);
									 var dominatingsentiment=result.response;
                                     activedataNode[currentDataIndex].sentimentData=dominatingsentiment;
									 console.log("THE VAR VALUE IS "+dominatingsentiment);
                                     //$("#info_sentiment").html(dominatingsentiment.emotion);
									 
                            }else{
                                     //Just add the Data at the Data Node : not the current Active Node : So , no need to reflect UI Changes here 
                                    // var dominatingsentiment=notificationRanker(result.response)
									var dominatingsentiment=result.response;
                                     activedataNode[currentDataIndex].sentimentData=dominatingsentiment
                                    // $("#info_sentiment").html(dominatingsentiment.emotion);
									 
									 console.log("THE VAR VALUE IS "+dominatingsentiment);
                                     console.log(dominatingsentiment)
                           }
  
               }).fail(function(err) {
                           console.log("Oopsies !! Error ")
                           console.log(err)
                           throw err;
                })
  
}