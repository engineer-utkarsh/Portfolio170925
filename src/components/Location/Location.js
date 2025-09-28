import React from 'react';
import './Location.css';

const Location = () => {
    // Convert DMS (Degrees, Minutes, Seconds) to Decimal Degrees
    const dmsToDecimal = (dms, direction) => {
        const parts = dms.split(/[°'"]/).filter(part => part !== "");
        const degrees = parseFloat(parts[0]);
        const minutes = parseFloat(parts[1]);
        const seconds = parseFloat(parts[2]);
        
        let decimal = degrees + minutes / 60 + seconds / 3600;
        
        // Adjust for direction (S or W would be negative)
        if (direction === 'S' || direction === 'W') {
            decimal = -decimal;
        }
        
        return decimal;
    };
    
    // Convert the given coordinates
    const latitude = dmsToDecimal("26°29'15.3", "N");
    const longitude = dmsToDecimal("80°14'35.2", "E");
    
    // Create the map URL
    const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
    
    return (
        <div className="map-container">
            <iframe 
                src={mapUrl} 
                title="Location Map"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default Location;