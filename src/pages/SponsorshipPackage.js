import React, { useRef } from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

const SponsorshipPackage = () => {
    const viewerRef = useRef(null);
    const fileUrl = "content/Sponsorship Package 2025.pdf"; 

    // Custom CSS to hide the open file button
    const customStyles = `
        .rpv-open__input-wrapper {
            display: none !important;
        }
    `;

    return (
        <div style={{ height: '98vh', width: '100%', display: 'flex', flexDirection: 'column', paddingTop: '60px' }}>
            <div style={{ padding: '10px', textAlign: 'center' }}>
                
            </div>
            <div style={{ flex: 1, overflow: 'auto' }}>
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                    <ViewerWrapper fileUrl={fileUrl} viewerRef={viewerRef} customStyles={customStyles} />
                </Worker>
            </div>
        </div>
    );
};

const ViewerWrapper = React.forwardRef(({ fileUrl, customStyles, ...rest }, ref) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return (
        <div style={{ position: 'relative', minWidth: '600px', minHeight: '800px', margin: 'auto' }}>
            <style>{customStyles}</style>
            <Viewer fileUrl={fileUrl} ref={ref} {...rest} plugins={[defaultLayoutPluginInstance]} defaultScale={1.0} />
        </div>
    );
});

export default SponsorshipPackage;
