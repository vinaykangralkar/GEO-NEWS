 <?php
     $username='your-username';
     $password='your-password';
     $data = json_encode(array('text' => 'your text goes here. Thank you very much'));
     $URL='https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2016-05-19';
   // $URL="https://gateway-syd.watsonplatform.net/tone-analyzer/api";
 
     $ch = curl_init();
     curl_setopt($ch, CURLOPT_URL,$URL);
     curl_setopt($ch, CURLOPT_TIMEOUT, 30); //timeout after 30 seconds
     curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_ANY);
	 curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); 
     curl_setopt($ch, CURLOPT_USERPWD, 'apikey:lSOGkIAZXOw8VLyvSIYSjV5LU8mLgeZodLNAmWPFCJ9w');
     curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
     curl_setopt($ch, CURLOPT_POST, false);
     curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
 
     $result=curl_exec ($ch);
     curl_close ($ch);
 
     var_dump($result);
	 
	 echo $result;
 ?>