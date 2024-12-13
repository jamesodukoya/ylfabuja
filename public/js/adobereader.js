document.addEventListener("adobe_dc_view_sdk.ready", function(){ 
		var adobeDCView = new AdobeDC.View({clientId: "50634c7ad18942388ecd45abe14999c2", divId: "adobe-dc-view"});
		adobeDCView.previewFile({
			content:{location: {url: "NBAConstitution2021.pdf"}},
			metaData:{fileName: "Bodea Brochure.pdf"}
		}, {
			embedMode: "FULL_WINDOW",
			defaultViewMode: "FIT_WIDTH",
		});
});
	
	// e9cedcbf5e5a4ba68d8d0190fee16c65

	// www.nbaylfabuja.org: "04bb7623260a4635abeb5d2105f6686e"