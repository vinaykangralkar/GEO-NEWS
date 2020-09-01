LocationNewsApp
  

Implementation
   Bootstrap(HTML)---For Frontend Design---s3 cloud storage AWS
   PHP Programming and javascript(ajax request to api)---which will act as backend server
                --Elastic Bean stack Aws
				--ec2 instance 1
   Open News Api---To fetch News related to city,area or based on categories
                 -- News API is a simple and easy-to-use REST API that 
				    returns JSON metadata
				 ---HTTP REST API
				 ---JSON
				 --As a separate Elastic Bean stack ec2 instance 2
   Google Map Api--to Load Google maps as shown in demo
                --from google cloud ,reg and got api key
   Google Gelocation/Directional Api-to convert an address or city name to latitude,longitude to mark
                          a marker
				--from google cloud ,reg and got api key
   IBM Watson Tone Analyser API
               --nodejs to implement it
               --to find the tone of a news weather its realted 
               to danger,fear,happines.etc
			   --separte cloud server--reg and api key