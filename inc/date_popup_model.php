<div class="modal fade openinfo" data-target="#datemodal" id="datemodal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">
						  <span aria-hidden="true">×</span>
                        </button>
                        <h4 class="modal-title" id="info_title">Date Ranges for the News Feed</h4>
            </div>
            <div class="modal-body">
				
					<div class="col-md-6 col-sm-6 col-xs-6">
						<h4 class="centertext">Start Date</h4>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6 form-group has-feedback">
						<input type="text" id="startDate" class="datepicker form-control has-feedback-right">
						<span class="fa fa-calendar form-control-feedback right" aria-hidden="true"></span>								
					</div>
					<div class="clearfix"></div>
					<div class="col-md-6 col-sm-6 col-xs-6">
						<h4 class="centertext"> End Date </h4>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6 form-group has-feedback">
						<input type="text" id="endDate" class="form-control has-feedback-right" readonly>
						<span class="fa fa-calendar form-control-feedback right" aria-hidden="true"></span>								
					</div>
					<div class="clearfix"></div>
				    <div class="clearfix"></div>
			</div>
            <div class="modal-footer">
               
                <button type="button" class="btn btn-primary" id="dateConfirm" onclick="">OK</button>
				 <button type="button" data-dismiss="modal" class="btn btn-primary" style="margin-bottom:5px">Cancel</button>
            </div>
        </div>
    </div>
</div>