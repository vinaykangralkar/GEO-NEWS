<div class="modal fade openinfo" data-target="#infomodal" id="infomodal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
                <div class="modal-header">
                   <button type="button" class="close" data-dismiss="modal">
				       <span aria-hidden="true">×</span>
                    </button>
                    <h4 class="modal-title" id="info_title">CURRENT NEWS AT THE LOCATION</h4>
                </div>
                <div class="modal-body">
                   <h4>Snippet</h4>
                    <p id="info_snippet"></p>
				    <br>
					<!--		<h4>Media</h4>
						<center>
                         <img src="https://static01.nyt.com/images/2016/10/23/books/review/23Wrong/23Wrong-superJumbo.jpg" id="info_media" width=400px height=200px></img>
                         </center>
                      -->
                    <br>
                    <p id="info_source"></p>
                    <br/>
                     <a href="https://www.google.com" id="info_full">For Full Story , Click here</a>
                </div>
                <div class="modal-footer">
				<div id="container">
				  <div id="left">
				   <button type="button" class="btn btn-primary left" onclick="decreaseIndex()"> < Prev</button>
				  </div>
				  <div id="right">
				     <button type="button" class="btn btn-primary right" onclick="increaseIndex()">Next ></button>
				  </div>
				  <div id="center">
				     <button type="button" class="btn btn-success" id="info_sentiment">...</button>
				  </div>
				</div>
                  
                  
                  
                </div>

        </div>
    </div>
</div>

<style>
#container{width:100%;}
#left{float:left;width:100px;}
#right{float:right;width:100px;}
#center{margin:0 auto;width:100px;}
</style>