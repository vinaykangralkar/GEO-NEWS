var watson = require('watson-developer-cloud');
var alchemy_language = watson.alchemy_language({
  api_key: '0d48b5ecfeb6b69c069f2ffd09287ec518c1d91c'
})

var headlines=['New York Today: An Ode to Opera',
'What Donald Trump Got Wrong on Stop-and-Frisk',
'1941: Van Gogh Painting Acquired',
'Caleb Carr’s New Thriller Takes On Fancy Forensics. Michael Connelly Reviews.',
'New York Today: Final Call for Voters',
'New York Today: Our Past in Pencils',
'New York Today: Mourning a Brooklyn Prosecutor',
'Showgirls, Pastrami and Candor: Gloria Steinem’s New York'
]
var bigbigString="New York Today: An Ode to Opera"+
"What Donald Trump Got Wrong on Stop-and-Frisk"+
"1941: Van Gogh Painting Acquired"+
"Caleb Carr’s New Thriller Takes On Fancy Forensics. Michael Connelly Reviews."+
"New York Today: Final Call for Voters"+
"New York Today: Our Past in Pencils"+
"New York Today: Mourning a Brooklyn Prosecutor"+
"Showgirls, Pastrami and Candor: Gloria Steinem’s New York"

var bigDataCenter={
  anger:0.0,
  disgust:0.0,
  fear:0.0,
  joy:0.0,
  sadness:0.0
}
var parameters = {
  text:bigbigString
};

for(i=0;i<headlines.length;i++){
alchemy_language.emotion(parameters, function (err, response) {
  if (err)
    console.log('error:', err);
  else{
    console.log(JSON.stringify(response, null, 2));
    bigDataCenter.anger+=response.docEmotions.anger
    bigDataCenter.disgust+=response.docEmotions.disgust
    bigDataCenter.fear+=response.docEmotions.fear
    bigDataCenter.joy+=response.docEmotions.joy
    bigDataCenter.sadness+=response.docEmotions.sadness
  }
});

}
//for calculating the averages
bigDataCenter.anger/=8
bigDataCenter.disgust/=8
bigDataCenter.fear/=8
bigDataCenter.joy/=8
bigDataCenter.sadness/=8