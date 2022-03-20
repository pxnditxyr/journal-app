export const fileUpload = async( file : File ) => {
    // const API_KEY = "654979873335928";
    // const API_SECRET = "2DkD5q42FQtGHRDYxUYC1-F1PWM";
    // const CLOUD_NAME = "du5ukq0ni";
    const cloudUrl = `https://api.cloudinary.com/v1_1/du5ukq0ni/upload`
    const formData = new FormData();
    formData.append( "upload_preset", "journal-app" );
    formData.append( "file", file );
    try {
        const response = await fetch( cloudUrl, {
            method: "POST",
            body: formData
        });
        if ( response.ok ) {
            const cloudResp = await response.json();
            return cloudResp.secure_url;
        } else {
            throw await response.json();
        }
    } catch ( error ) {
        console.log( error );
    }
}
