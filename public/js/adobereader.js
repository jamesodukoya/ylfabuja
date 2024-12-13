document.addEventListener("adobe_dc_view_sdk.ready", function(){ 
		var adobeDCView = new AdobeDC.View({clientId: "04bb7623260a4635abeb5d2105f6686e", divId: "adobe-dc-view"});
		adobeDCView.previewFile({
			content:{location: {url: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf"}},
			metaData:{fileName: "Bodea Brochure.pdf"}
		}, {embedMode: "SIZED_CONTAINER"});
});
	
	// e9cedcbf5e5a4ba68d8d0190fee16c65

	// www.nbaylfabuja.org: "04bb7623260a4635abeb5d2105f6686e"