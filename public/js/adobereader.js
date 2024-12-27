
	
// e9cedcbf5e5a4ba68d8d0190fee16c65

// www.nbaylfabuja.org: "04bb7623260a4635abeb5d2105f6686e"

// nbaylfabuja.org: 2dd193cc30c6424683bd83d113d5be22
	
const elements = document.querySelectorAll('#LoadPDF');

elements.forEach((element) => {
    element.addEventListener('click', function() 
	{
		var adobeDCView = new AdobeDC.View(
			{
				clientId: "2dd193cc30c6424683bd83d113d5be22"
			}
		);

		adobeDCView.previewFile(
			{
				content: {
					location: {url: "NBAConstitution2021.pdf"}
				},
				metaData: {
					fileName: "NBA Constitution 2021.pdf"
				}
			},
			{
				embedMode: "LIGHT_BOX",
				enableLinearization: true,
				defaultViewMode: "FIT_PAGE",
				showZoomControl: true,
			}
		);
	});
});