'use client'
import React, { useEffect } from 'react'
import Header from '../_components/Header'
import Script from 'next/script'

function NBAConstitution() {

    useEffect(() => {
        const script = document.createElement("script");
        script.src =
            "https://acrobatservices.adobe.com/view-sdk/viewer.js";
        script.async = true;
        document.body.append(script);

        document.addEventListener("adobe_dc_view_sdk.ready",
            function () {
                const adobeDCView = new AdobeDC.View({
                    clientId: "50634c7ad18942388ecd45abe14999c2",
                    divId: "adobe-dc-view",
                });

                adobeDCView.previewFile(
                    {
                        content: {
                            location: {
                                url: `https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf`,
                            },
                        },
                        metaData: {
                            fileName:
                                "Bodea Brochure.pdf"
                        },
                    },
                    {
                        embedMode: "SIZED_CONTAINER",
                        //   showAnnotationTools: false,
                        showPrintPDF: true,
                        showDownloadPDF: true,
                        defaultViewMode: "FIT_WIDTH",
                        enableLinearization: true,
                    }
                );

                // Listen to events
                const eventsOptions = {
                    listenOn: [
                        AdobeDC.View.Enum.Events.APP_RENDERING_DONE,
                        AdobeDC.View.Enum.Events.APP_RENDERING_FAILED,
                    ],
                    enableFilePreviewEvents: true,
                };

                adobeDCView.registerCallback(
                    AdobeDC.View.Enum.CallbackType.EVENT_LISTENER,
                    function (event) {
                        switch (event.type) {
                            case "APP_RENDERING_DONE":
                                // success handlers
                                break;
                            case "APP_RENDERING_FAILED":
                                // handle errors here
                                break;
                            //case "DOCUMENT_DOWNLOAD":
                            //  break;
                        }
                    },
                    eventsOptions
                );
            });
    }, []);


    return (
        <div>
            <div className="relative z-10">
                <section className="soon fixed_bg">
                    <Header />
                    <div className="xl:px-20 pt-28 px-5 md:px-10 min-h-[400px] flex items-center justify-center">
                        <div className='py-32 relative z-10'>
                            <h1 className='text-center'>Constitution of the NBA</h1>
                            <p className='small-gold text-center'> Coming soon</p>
                        </div>
                    </div>
                    <div className='flex justify-center relative z-10'>
                        <div id="adobe-dc-view" className='w-[92%] h-screen xl:max-w-[1200px]'></div>
                    </div>
                </section>
            </div>
            {/* <Script src="https://acrobatservices.adobe.com/view-sdk/viewer.js"></Script>
            <Script src='/js/adobereader.js'></Script> */}
        </div>
    )
}

export default NBAConstitution